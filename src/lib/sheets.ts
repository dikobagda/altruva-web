import { sheets, auth } from '@googleapis/sheets';
import { getGoogleCredentials, getServiceAccountPrivateKey } from '@/lib/google-credentials';

export function getSheetsClient() {
  const credentials = getGoogleCredentials();

  const googleAuth = new auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return sheets({ version: 'v4', auth: googleAuth });
}

export interface SheetInfo {
  spreadsheetId: string;
}

export function getSpreadsheetId(): string {
  return '17sc3xJm5Mi0Qg98aOv8_FlzFQmcrR71gX90DreGnLzI';
}

/**
 * Ensure a worksheet exists. Creates it (with a header row) if missing.
 */
export async function ensureWorksheet(
  client: ReturnType<typeof getSheetsClient>,
  spreadsheetId: string,
  sheetName: string,
  headers: (string | number)[]
): Promise<void> {
  const res = await client.spreadsheets.get({
    spreadsheetId,
    fields: 'sheets.properties.title,sheets.properties.sheetId',
  });

  const exists = (res.data.sheets || []).some(
    (s) => s.properties?.title === sheetName
  );

  if (!exists) {
    await client.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: { title: sheetName },
            },
          },
        ],
      },
    });

    // Write header row as the first row of the new sheet
    await client.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [headers] },
    });
  }
}

/**
 * Append data rows to a worksheet (never overwrites existing rows).
 */
export async function appendValues(
  client: ReturnType<typeof getSheetsClient>,
  spreadsheetId: string,
  sheetName: string,
  rows: (string | number)[][]
): Promise<number> {
  if (!rows.length) return 0;

  await client.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: rows },
  });

  return rows.length;
}

function columnLetter(n: number): string {
  let s = '';
  while (n > 0) {
    const rem = (n - 1) % 26;
    s = String.fromCharCode(65 + rem) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

export interface TrafficMetricValue {
  label: string;
  value: string | number;
}

export interface TrafficSection {
  title: string;
  metrics: TrafficMetricValue[];
}

export type CanonicalSectionKey =
  | 'internal_overview'
  | 'internal_sources'
  | 'internal_browser'
  | 'internal_devices'
  | 'ga_overview'
  | 'ga_sources'
  | 'ga_cities'
  | 'ga_browser'
  | 'ga_devices'
  | 'wa_clicks';

export function normalizeMetric(label: string): string {
  return label
    .trim()
    .toLowerCase()
    .replace(/\s*\/\s*/g, '/')
    .replace(/\s+/g, ' ');
}

export function getMetricAliases(metric: string): string[] {
  const norm = normalizeMetric(metric);
  const aliases = [norm];

  if (norm === 'fb paid' || norm === 'facebook paid') {
    aliases.push('fb paid', 'facebook paid', 'facebook');
  } else if (norm === 'instagram paid' || norm === 'instagram') {
    aliases.push('instagram paid', 'instagram');
  } else if (norm === 'threads paid' || norm === 'threads') {
    aliases.push('threads paid', 'threads');
  } else if (norm === 'google organic' || norm === 'organic') {
    aliases.push('google organic', 'organic search', 'organic');
  } else if (norm.includes('unknown') || norm.includes('others')) {
    aliases.push('unknown/others', 'unknown', 'others');
  }

  return aliases;
}

export function getCanonicalSectionKey(
  title: string,
  seenInternal: boolean
): CanonicalSectionKey | null {
  const t = title.trim().toLowerCase();
  if (!t) return null;

  const hasInternal = /internal/i.test(t);
  const hasGa = /^(ga|google\s+analytics)\b/i.test(t);

  if (hasInternal) {
    if (/overview/i.test(t)) return 'internal_overview';
    if (/source|traffic|medium/i.test(t)) return 'internal_sources';
    if (/browser/i.test(t)) return 'internal_browser';
    if (/device/i.test(t)) return 'internal_devices';
  } else if (hasGa) {
    if (/overview/i.test(t)) return 'ga_overview';
    if (/source|traffic|medium/i.test(t)) return 'ga_sources';
    if (/cit(y|ies)/i.test(t)) return 'ga_cities';
    if (/browser/i.test(t)) return 'ga_browser';
    if (/device/i.test(t)) return 'ga_devices';
  } else {
    // Unprefixed section titles
    if (/cit(y|ies)/i.test(t)) return 'ga_cities';
    if (/click|whatsapp/i.test(t)) return 'wa_clicks';
    if (/device/i.test(t)) {
      return seenInternal ? 'internal_devices' : 'ga_devices';
    }
    if (/source|traffic|medium/i.test(t)) {
      return seenInternal ? 'internal_sources' : 'ga_sources';
    }
    if (/browser/i.test(t)) {
      return seenInternal ? 'internal_browser' : 'ga_browser';
    }
    if (/overview/i.test(t)) {
      return seenInternal ? 'internal_overview' : 'ga_overview';
    }
  }
  return null;
}

function formatDateHeader(dayKey: string): string {
  const [y, m, d] = dayKey.split('-').map(Number);
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(Date.UTC(y, m - 1, d, 3))); // 03:00 UTC = 10:00 WIB, keeps same day
}

async function resetWorksheet(
  client: ReturnType<typeof getSheetsClient>,
  spreadsheetId: string,
  sheet: any
) {
  const title = sheet?.properties?.title as string | undefined;
  const sheetId = sheet?.properties?.sheetId as number | undefined;
  if (!title || sheetId === undefined) return;
  await client.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        { deleteSheet: { sheetId } },
        { addSheet: { properties: { title } } },
      ],
    },
  });
}

/**
 * Write a wide/horizontal snapshot into the Traffic worksheet with a
 * two-level grouped header and labeled metric sections:
 *
 * Row 1: parent dates, merged across that day's columns
 *         | 11 August 2026            | 12 August 2026 |
 * Row 2: child times                  | 09:00 | 13:00  | 09:00 | 13:00 |
 * Row 3+: Section label rows (with a blank row before each label) followed
 *         by that section's metric labels...
 *         | (blank)      |
 *         | GA Overview  |
 *         | New Users    | value | value ...
 *         | Page Views   | value | value ...
 *         | (blank)      |
 *         | GA Sources   |
 *         | Instagram Paid | value | ...
 *
 * Each call appends one new column (a time slot). Merges are grown lazily
 * when a new slot for the same day is added.
 */
export async function appendTrafficSnapshot(
  client: ReturnType<typeof getSheetsClient>,
  spreadsheetId: string,
  sheetName: string,
  syncedAt: string, // 'YYYY-MM-DD HH:MM:SS' WIB
  sections: TrafficSection[]
): Promise<number> {
  const dayKey = syncedAt.slice(0, 10);
  const timeLabel = syncedAt.slice(11, 16); // 'HH:MM'
  const dateLabel = formatDateHeader(dayKey);

  // Target layout for column A (rows 3+): blank row before each section label
  const layoutRows: string[] = [];
  sections.forEach((section) => {
    layoutRows.push('');
    layoutRows.push(section.title);
    section.metrics.forEach((m) => {
      layoutRows.push(m.label);
    });
  });

  const getMeta = () =>
    client.spreadsheets.get({
      spreadsheetId,
      fields: 'sheets.properties.title,sheets.properties.sheetId,sheets.merges',
    });

  let meta = await getMeta();
  let sheet = (meta.data.sheets || []).find((s) => s.properties?.title === sheetName);

  // Ensure sheet exists
  if (!sheet) {
    await client.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: sheetName } } }],
      },
    });
    meta = await getMeta();
    sheet = (meta.data.sheets || []).find((s) => s.properties?.title === sheetName)!;
  }

  // Read existing Column A rows to prevent overwriting existing section titles / labels
  let existingColumnA: string[] = [];
  if (sheet) {
    const colARes = await client.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A1:A500`,
    });
    existingColumnA = (colARes.data.values || []).map((r) => r[0] ?? '');
  }

  // If Sheet is empty or new, populate Column A from layoutRows
  if (existingColumnA.length <= 2) {
    await client.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!A3:A${2 + layoutRows.length}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: layoutRows.map((label) => [label]) },
    });
    existingColumnA = ['', '', ...layoutRows];
  }

  // Map existing rows dynamically to canonical sections and metric labels
  const sectionRowMap: Record<CanonicalSectionKey, Record<string, number>> = {
    internal_overview: {},
    internal_sources: {},
    internal_browser: {},
    internal_devices: {},
    ga_overview: {},
    ga_sources: {},
    ga_cities: {},
    ga_browser: {},
    ga_devices: {},
    wa_clicks: {},
  };

  let currentKey: CanonicalSectionKey | null = null;
  let seenInternal = false;

  existingColumnA.forEach((cellVal, idx) => {
    const rowNum = idx + 1;
    const trimmed = cellVal.trim();
    if (!trimmed) {
      currentKey = null;
      return;
    }

    const detectedKey = getCanonicalSectionKey(trimmed, seenInternal);
    if (detectedKey) {
      currentKey = detectedKey;
      if (currentKey.startsWith('internal_')) {
        seenInternal = true;
      } else if (currentKey.startsWith('ga_')) {
        seenInternal = false;
      }
      return;
    }

    if (currentKey) {
      const normMetric = normalizeMetric(trimmed);
      sectionRowMap[currentKey][normMetric] = rowNum;
      for (const alias of getMetricAliases(normMetric)) {
        if (!sectionRowMap[currentKey][alias]) {
          sectionRowMap[currentKey][alias] = rowNum;
        }
      }
    }
  });

  const sheetId = sheet.properties!.sheetId!;
  const row1Merges: any[] = (sheet.merges || []).filter(
    (m: any) => m.startRowIndex === 0 && m.endRowIndex === 1 && m.startColumnIndex >= 1
  );

  // Read header rows 1-2 to find the next free column
  const headRes = await client.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A1:ZZ2`,
  });
  const head = headRes.data.values || [];
  const timeRow = head[1] || [];
  let nextCol = Math.max(timeRow.length + 1, 2); // A=1 reserved for metric labels; data starts at B

  // Determine the parent group (date merge) that the previous slot belongs to
  const lastCol = nextCol - 1;
  let sameDay = false;
  let groupStartCol = lastCol;
  const existingMerge =
    lastCol > 1
      ? row1Merges.find(
        (m) => m.startColumnIndex <= lastCol - 1 && m.endColumnIndex >= lastCol
      )
      : undefined;
  if (existingMerge) {
    groupStartCol = existingMerge.startColumnIndex + 1;
  }

  if (lastCol >= 2) {
    const dateCell = await client.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!${columnLetter(groupStartCol)}1`,
    });
    sameDay = (dateCell.data.values?.[0]?.[0] ?? '') === dateLabel;
  }

  const isSameTimeSlot = sameDay && lastCol >= 2 && (timeRow[lastCol - 1] ?? '') === timeLabel;
  const targetCol = isSameTimeSlot ? lastCol : nextCol;
  const targetColLetter = columnLetter(targetCol);

  // If writing to an existing slot, read existing values so we preserve already synced sections
  const rowMap: Record<number, (string | number)[]> = {};
  if (isSameTimeSlot) {
    const colRes = await client.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!${targetColLetter}1:${targetColLetter}500`,
    });
    const existingTargetColValues = (colRes.data.values || []).map((r) => r[0] ?? '');
    existingTargetColValues.forEach((val, idx) => {
      if (val !== undefined && val !== '') {
        rowMap[idx + 1] = [val];
      }
    });
  }

  // Build values for the target column
  if (!sameDay) rowMap[1] = [dateLabel];
  rowMap[2] = [timeLabel];
  for (const section of sections) {
    const isInternalSec = /internal/i.test(section.title);
    const secKey = getCanonicalSectionKey(section.title, isInternalSec);
    if (!secKey) continue;

    for (const m of section.metrics) {
      const normMetric = normalizeMetric(m.label);
      const aliases = getMetricAliases(normMetric);
      let r: number | undefined;
      for (const alias of aliases) {
        if (sectionRowMap[secKey]?.[alias]) {
          r = sectionRowMap[secKey][alias];
          break;
        }
      }
      if (r) {
        rowMap[r] = [m.value];
      }
    }
  }

  const startRow = sameDay ? 2 : 1;
  const endRow = Math.max(2, ...Object.keys(rowMap).map(Number));
  const rows: (string | number)[][] = [];
  for (let r = startRow; r <= endRow; r++) {
    rows.push(rowMap[r] ?? ['']);
  }

  await client.spreadsheets.values.update({
    spreadsheetId,
    range: `${sheetName}!${targetColLetter}${startRow}:${targetColLetter}${endRow}`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: rows },
  });

  // Only perform date merges / formatting if this is a newly created column
  if (!isSameTimeSlot) {
    const requests: any[] = [];

    const centerDateRange = (
      startColumnIndex: number,
      endColumnIndex: number
    ) => ({
      repeatCell: {
        range: {
          sheetId,
          startRowIndex: 0,
          endRowIndex: 1,
          startColumnIndex,
          endColumnIndex,
        },
        fields: 'userEnteredFormat.horizontalAlignment',
        cell: { userEnteredFormat: { horizontalAlignment: 'CENTER' } },
      },
    });

    if (sameDay) {
      if (existingMerge) {
        requests.push({
          unmergeCells: {
            range: {
              sheetId,
              startRowIndex: 0,
              endRowIndex: 1,
              startColumnIndex: existingMerge.startColumnIndex,
              endColumnIndex: existingMerge.endColumnIndex,
            },
          },
        });
      }
      requests.push({
        mergeCells: {
          range: {
            sheetId,
            startRowIndex: 0,
            endRowIndex: 1,
            startColumnIndex: groupStartCol - 1,
            endColumnIndex: nextCol,
          },
          mergeType: 'MERGE_ALL',
        },
      });
      // Center the full (re-grown) date group
      requests.push(centerDateRange(groupStartCol - 1, nextCol));
    } else {
      // New day: center existing date groups too (self-heals old columns),
      // then center the new single-cell date.
      for (const m of row1Merges) {
        requests.push(centerDateRange(m.startColumnIndex, m.endColumnIndex));
      }
      requests.push(centerDateRange(nextCol - 1, nextCol));
    }

    await client.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests },
    });
  }

  return 1;
}