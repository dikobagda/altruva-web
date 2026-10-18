import pool from '@/lib/db';
import { fetchGa4Snapshot, TRAFFIC_BUCKET_LABELS, CITY_BUCKET_LABELS, BROWSER_BUCKET_LABELS } from '@/lib/ga4';
import {
  getSheetsClient,
  getSpreadsheetId,
  appendTrafficSnapshot,
  TrafficSection,
} from '@/lib/sheets';

const WORKSHEETS = {
  traffic: 'oktober',
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

export interface SyncOptions {
  target?: 'all' | 'internal' | 'ga4';
}

export interface InternalSnapshot {
  activeUsers: number;
  newUsers: number;
  pageViews: number;
  sessions: number;
  avgSessionDuration: number;
  devices: { device: string; users: number }[];
  browserBuckets: Record<string, number>;
  sourceBuckets: Record<string, number>;
}

export async function fetchInternalSnapshot(
  conn: any,
  reportDay: string
): Promise<InternalSnapshot> {
  const start = `${reportDay} 00:00:00`;
  const end = `${nextDayKey(reportDay)} 00:00:00`;

  // 1. Overview stats
  const [statsRows]: any = await conn.query(
    `SELECT 
       COUNT(session_id) as activeUsers,
       COUNT(session_id) as sessions,
       COALESCE(SUM(views), 0) as pageViews,
       COALESCE(ROUND(AVG(session_duration), 1), 0) as avgSessionDuration
     FROM (
       SELECT 
         session_id,
         COUNT(*) as views,
         LEAST(TIMESTAMPDIFF(SECOND, MIN(visited_at), MAX(visited_at)), 1800) as session_duration
       FROM site_analytics 
       WHERE visited_at >= ? AND visited_at < ?
       GROUP BY session_id
     ) as s`,
    [start, end]
  );

  const activeUsers = Number(statsRows[0]?.activeUsers || 0);
  const pageViews = Number(statsRows[0]?.pageViews || 0);
  const sessions = Number(statsRows[0]?.sessions || 0);
  const avgSessionDuration = Number(statsRows[0]?.avgSessionDuration || 0);

  // 2. Devices
  const [deviceRows]: any = await conn.query(
    `SELECT device, COUNT(DISTINCT session_id) as users
     FROM site_analytics
     WHERE visited_at >= ? AND visited_at < ?
     GROUP BY device`,
    [start, end]
  );
  const devices = (deviceRows || []).map((d: any) => ({
    device: String(d.device || 'Others'),
    users: Number(d.users || 0),
  }));

  // 3. Browsers
  const [browserRows]: any = await conn.query(
    `SELECT browser, COUNT(DISTINCT session_id) as users
     FROM site_analytics
     WHERE visited_at >= ? AND visited_at < ?
     GROUP BY browser`,
    [start, end]
  );
  const browserBuckets: Record<string, number> = {};
  BROWSER_BUCKET_LABELS.forEach((l) => (browserBuckets[l] = 0));
  (browserRows || []).forEach((r: any) => {
    let b = r.browser;
    if (!BROWSER_BUCKET_LABELS.includes(b as any)) b = 'Others';
    browserBuckets[b] = (browserBuckets[b] || 0) + Number(r.users || 0);
  });

  // 4. Traffic Sources
  const [sourceRows]: any = await conn.query(
    `SELECT source, COUNT(DISTINCT session_id) as users
     FROM site_analytics
     WHERE visited_at >= ? AND visited_at < ?
     GROUP BY source`,
    [start, end]
  );
  const sourceBuckets: Record<string, number> = {};
  TRAFFIC_BUCKET_LABELS.forEach((l) => (sourceBuckets[l] = 0));
  (sourceRows || []).forEach((r: any) => {
    let s = r.source;
    if (s === 'Instagram') s = 'Instagram Paid';
    else if (s === 'Threads') s = 'Threads Paid';
    else if (s === 'Facebook') s = 'fb Paid';
    else if (s === '(direct) / (none)') s = 'Direct';

    if (!TRAFFIC_BUCKET_LABELS.includes(s as any)) s = 'unknown/others';
    sourceBuckets[s] = (sourceBuckets[s] || 0) + Number(r.users || 0);
  });

  return {
    activeUsers,
    newUsers: activeUsers,
    pageViews,
    sessions,
    avgSessionDuration,
    devices,
    browserBuckets,
    sourceBuckets,
  };
}

export async function syncToSheets(options?: SyncOptions): Promise<SyncResult> {
  const target = options?.target || 'all';

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

      // WIB Date keys
      const todayWib = wibDateKey(0);
      let reportDay = todayWib;

      // --- 1. GA4 snapshot (prefer today; fall back to yesterday when GA4 has not processed today yet) ---
      let ga4: Awaited<ReturnType<typeof fetchGa4Snapshot>> | null = null;
      if (target !== 'internal') {
        try {
          ga4 = await fetchGa4Snapshot('today', 'today');
          if (!hasGa4Activity(ga4)) {
            console.warn('[SheetSync] GA4 has no processed data for today yet. Falling back to yesterday.');
            ga4 = await fetchGa4Snapshot('yesterday', 'yesterday');
            reportDay = wibDateKey(-1);
            warning = 'GA4 data hari ini belum diproses oleh Google, snapshot GA4 menggunakan data kemarin.';
          }
        } catch (e: any) {
          warning = `GA4 snapshot dilewati: ${e.message || 'GA4 fetch failed'}. Data WhatsApp & Internal tetap dikirim.`;
          console.error('[SheetSync] GA4 snapshot failed:', e);
        }
      }

      // --- 2. Count unique WhatsApp visitors for today (WIB) ---
      let waDayCount = 0;
      try {
        await conn.query(`SET time_zone = '+07:00'`);
        const [waDayRows]: any = await conn.query(
          `SELECT COUNT(DISTINCT ip_address) AS c FROM whatsapp_clicks
           WHERE clicked_at >= ? AND clicked_at < ?`,
          [`${todayWib} 00:00:00`, `${nextDayKey(todayWib)} 00:00:00`]
        );
        waDayCount = Number(waDayRows[0]?.c || 0);
      } catch (e) {
        console.error('[SheetSync] Failed to count WhatsApp visitors for the day:', e);
      }

      // --- 3. Internal Analytics snapshot for today (WIB) ---
      let internal: InternalSnapshot | null = null;
      if (target !== 'ga4') {
        try {
          internal = await fetchInternalSnapshot(conn, todayWib);
        } catch (e: any) {
          console.error('[SheetSync] Internal analytics snapshot failed:', e);
          const intWarn = `Internal analytics snapshot dilewati: ${e.message || 'Fetch failed'}.`;
          warning = warning ? `${warning} ${intWarn}` : intWarn;
        }
      }

      // --- 4. Assemble Traffic Sections ---
      const trafficSections: TrafficSection[] = [];

      // A. GA4 Sections (if available)
      if (ga4) {
        const totalGaDeviceUsers =
          ga4.devices.reduce((sum, d) => sum + d.users, 0) || 1;

        trafficSections.push(
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
          }
        );
      }

      // B. WhatsApp clicks
      trafficSections.push({
        title: 'WA Clicks',
        metrics: [{ label: 'Unique Visitors', value: waDayCount }],
      });

      // C. GA Device Share (if GA4 available)
      if (ga4) {
        const totalGaDeviceUsers =
          ga4.devices.reduce((sum, d) => sum + d.users, 0) || 1;

        trafficSections.push({
          title: 'GA Device Share',
          metrics: ga4.devices.map((d) => ({
            label: d.device,
            value: Math.round((d.users / totalGaDeviceUsers) * 1000) / 10 + ' %',
          })),
        });
      }

      // D. Internal Analytics Sections
      if (internal) {
        const totalInternalDeviceUsers =
          internal.devices.reduce((sum, d) => sum + d.users, 0) || 1;

        trafficSections.push(
          {
            title: 'Internal Overview',
            metrics: [
              { label: 'Active Users', value: internal.activeUsers },
              { label: 'New Users', value: internal.newUsers },
              { label: 'Page Views', value: internal.pageViews },
              { label: 'Sessions', value: internal.sessions },
              { label: 'Avg Session Duration (s)', value: internal.avgSessionDuration },
            ],
          },
          {
            title: 'Internal Sources',
            metrics: TRAFFIC_BUCKET_LABELS.map((label) => ({
              label,
              value: internal.sourceBuckets[label] ?? 0,
            })),
          },
          {
            title: 'Internal Browser',
            metrics: BROWSER_BUCKET_LABELS.filter((l) => l !== 'Others').map((label) => ({
              label,
              value: internal.browserBuckets[label] ?? 0,
            })),
          },
          {
            title: 'Internal Device Share',
            metrics: [
              {
                label: 'mobile',
                value:
                  Math.round(
                    ((internal.devices.find((d) => d.device.toLowerCase() === 'mobile')?.users || 0) /
                      totalInternalDeviceUsers) *
                      1000
                  ) /
                    10 +
                  ' %',
              },
              {
                label: 'desktop',
                value:
                  Math.round(
                    ((internal.devices.find((d) => d.device.toLowerCase() === 'desktop')?.users || 0) /
                      totalInternalDeviceUsers) *
                      1000
                  ) /
                    10 +
                  ' %',
              },
              {
                label: 'tablet',
                value:
                  Math.round(
                    ((internal.devices.find((d) => d.device.toLowerCase() === 'tablet')?.users || 0) /
                      totalInternalDeviceUsers) *
                      1000
                  ) /
                    10 +
                  ' %',
              },
            ],
          }
        );
      }

      // --- 5. Export to Worksheet ---
      if (trafficSections.length > 0) {
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