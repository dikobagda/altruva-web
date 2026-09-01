import pool from '@/lib/db';
import { fetchGa4Snapshot, TRAFFIC_BUCKET_LABELS, CITY_BUCKET_LABELS, BROWSER_BUCKET_LABELS } from '@/lib/ga4';
import {
  getSheetsClient,
  getSpreadsheetId,
  appendTrafficSnapshot,
  TrafficSection,
} from '@/lib/sheets';

const WORKSHEETS = {
  traffic: 'september',
} as const;

export interface WorksheetResult {
  name: string;
  rowsAppended: number;
}

export interface SyncResult {
  syncedAt: string;
  worksheets: WorksheetResult[];
  warning?: string;
}

let inFlight: Promise<SyncResult> | null = null;

function formatWib(date: Date): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  return `${get('year')}-${get('month')}-${get('day')} ${get('hour')}:${get('minute')}:${get('second')}`;
}

function wibDateKey(offsetDays: number): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

function nextDayKey(dayKey: string): string {
  const [y, m, d] = dayKey.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d + 1));
  return date.toISOString().slice(0, 10);
}

function hasGa4Activity(ga4: Awaited<ReturnType<typeof fetchGa4Snapshot>>): boolean {
  const overview = ga4.current;
  return (
    overview.activeUsers > 0 ||
    overview.newUsers > 0 ||
    overview.pageViews > 0 ||
    overview.sessions > 0 ||
    ga4.topPages.length > 0 ||
    ga4.devices.length > 0 ||
    ga4.trafficSources.length > 0 ||
    ga4.cities.length > 0
  );
}

export async function syncToSheets(): Promise<SyncResult> {
  if (inFlight) return inFlight;

  inFlight = (async () => {
    const conn = await pool.getConnection();
    try {
      // Non-blocking MySQL lock to prevent concurrent syncs across instances
      const [lockRows]: any = await conn.query(
        `SELECT GET_LOCK('altruva_sheet_sync', 0) AS acquired`
      );
      if (Number(lockRows[0]?.acquired) !== 1) {
        throw new Error('Another Google Sheets sync is already running. Please try again shortly.');
      }

      const spreadsheetId = getSpreadsheetId();
      const client = getSheetsClient();
      const syncedAt = formatWib(new Date());
      const results: WorksheetResult[] = [];
      let warning: string | undefined;

      // --- 1. GA4 snapshot (prefer today; fall back to yesterday when GA4 has not processed today yet) ---
      let ga4: Awaited<ReturnType<typeof fetchGa4Snapshot>> | null = null;
      let reportDay = wibDateKey(0);
      try {
        ga4 = await fetchGa4Snapshot('today', 'today');
        if (!hasGa4Activity(ga4)) {
          console.warn('[SheetSync] GA4 has no processed data for today yet. Falling back to yesterday.');
          ga4 = await fetchGa4Snapshot('yesterday', 'yesterday');
          reportDay = wibDateKey(-1);
          warning = 'GA4 data hari ini belum diproses oleh Google, snapshot menggunakan data kemarin.';
        }
      } catch (e: any) {
        warning = `GA4 snapshot skipped: ${e.message || 'GA4 fetch failed'}. WhatsApp & page views were still exported.`;
        console.error('[SheetSync] GA4 snapshot failed:', e);
      }

      // Count unique WhatsApp visitors that fall in the snapshot day (WIB)
      let waDayCount = 0;
      try {
        await conn.query(`SET time_zone = '+07:00'`);
        const [waDayRows]: any = await conn.query(
          `SELECT COUNT(DISTINCT ip_address) AS c FROM whatsapp_clicks
           WHERE clicked_at >= ? AND clicked_at < ?`,
          [`${reportDay} 00:00:00`, `${nextDayKey(reportDay)} 00:00:00`]
        );
        waDayCount = Number(waDayRows[0]?.c || 0);
      } catch (e) {
        console.error('[SheetSync] Failed to count WhatsApp visitors for the day:', e);
      }

      if (ga4) {
        // Horizontal "Traffic" snapshot: metrics as rows (grouped into labeled
        // sections), each run = new time column
        const totalDeviceUsers =
          ga4.devices.reduce((sum, d) => sum + d.users, 0) || 1;

        const trafficSections: TrafficSection[] = [
          {
            title: 'GA Overview',
            metrics: [
              { label: 'Active Users', value: ga4.current.activeUsers },
              { label: 'New Users', value: ga4.current.newUsers },
              { label: 'Page Views', value: ga4.current.pageViews },
              { label: 'Sessions', value: ga4.current.sessions },
              { label: 'Avg Session Duration (s)', value: Math.round(ga4.current.avgSessionDuration * 100) / 100 },
            ],
          },
          {
            title: 'GA Sources',
            metrics: TRAFFIC_BUCKET_LABELS.map((label) => ({
              label,
              value: ga4.sourceBuckets[label] ?? 0,
            })),
          },
          {
            title: 'GA Cities',
            metrics: CITY_BUCKET_LABELS.filter((l) => l !== 'Others').map((label) => ({
              label,
              value: ga4.cityBuckets[label] ?? 0,
            })),
          },
          {
            title: 'GA Browser',
            metrics: BROWSER_BUCKET_LABELS.filter((l) => l !== 'Others').map((label) => ({
              label,
              value: ga4.browserBuckets[label] ?? 0,
            })),
          },
          {
            title: 'WA Clicks',
            metrics: [{ label: 'Unique Visitors', value: waDayCount }],
          },
          {
            title: 'GA Device Share',
            metrics: ga4.devices.map((d) => ({
              label: d.device,
              value: Math.round((d.users / totalDeviceUsers) * 1000) / 10 + ' %',
            })),
          },
        ];

        const trafficCols = await appendTrafficSnapshot(
          client,
          spreadsheetId,
          WORKSHEETS.traffic,
          syncedAt,
          trafficSections
        );
        results.push({ name: WORKSHEETS.traffic, rowsAppended: trafficCols });
      }

      return { syncedAt, worksheets: results, ...(warning ? { warning } : {}) };
    } finally {
      try {
        await conn.query(`SELECT RELEASE_LOCK('altruva_sheet_sync')`);
      } catch (_) {
        // Best-effort release
      }
      conn.release();
    }
  })();

  try {
    return await inFlight;
  } finally {
    inFlight = null;
  }
}