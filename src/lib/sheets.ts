import { sheets, auth } from '@googleapis/sheets';

export function getSheetsClient() {
  const clientEmail = process.env.GCS_CLIENT_EMAIL;
  let privateKey = process.env.GCS_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error(
      'Google Service Account credentials (GCS_CLIENT_EMAIL / GCS_PRIVATE_KEY) are missing.'
    );
  }

  // Strip wrapping quotes if they exist (common when read from .env files)
  if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
    privateKey = privateKey.substring(1, privateKey.length - 1);
  }

  const googleAuth = new auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return sheets({ version: 'v4', auth: googleAuth });
}

export interface SheetInfo {
  spreadsheetId: string;
}

export function getSpreadsheetId(): string {
  const id = process.env.GOOGLE_SHEET_ID;
  if (!id) {
    throw new Error('GOOGLE_SHEET_ID environment variable is missing.');
  }
  return id;
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
  value: number;
}

export interface TrafficSection {
  title: string;
  metrics: TrafficMetricValue[];
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
  for (const section of sections) {
    layoutRows.push('');
    layoutRows.push(section.title);
    for (const m of section.metrics) layoutRows.push(m.label);
  }
  const labelRows: Record<string, number> = {};
  layoutRows.forEach((label, idx) => {
    if (label) labelRows[label] = 3 + idx;
  });

  const getMeta = () =>
    client.spreadsheets.get({
      spreadsheetId,
      fields: 'sheets.properties.title,sheets.properties.sheetId,sheets.merges',
    });

  let meta = await getMeta();
  let sheet = (meta.data.sheets || []).find((s) => s.properties?.title === sheetName);

  // Reset when the existing column A layout differs (handles legacy formats too)
  let needsLayoutWrite = false;
  if (sheet) {
    const probe = await client.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A3:A${Math.max(3, 2 + layoutRows.length)}`,
    });
    const current = (probe.data.values || []).map((r) => (r?.[0] ?? '').trim());
    const expected = layoutRows.map((r) => r.trim());
    const matches =
      current.length === expected.length &&
      expected.every((v, i) => current[i] === v);
    if (!matches) {
      await resetWorksheet(client, spreadsheetId, sheet);
      needsLayoutWrite = true;
      meta = await getMeta();
      sheet = (meta.data.sheets || []).find((s) => s.properties?.title === sheetName)!;
    }
  }

  if (!sheet) {
    await client.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: sheetName } } }],
      },
    });
    needsLayoutWrite = true;
    meta = await getMeta();
    sheet = (meta.data.sheets || []).find((s) => s.properties?.title === sheetName)!;
  }

  if (needsLayoutWrite) {
    await client.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!A3:A${2 + layoutRows.length}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: layoutRows.map((label) => [label]) },
    });
  }

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

  // Build values for the new column
  const rowMap: Record<number, (string | number)[]> = {};
  if (!sameDay) rowMap[1] = [dateLabel];
  rowMap[2] = [timeLabel];
  for (const section of sections) {
    for (const m of section.metrics) {
      const r = labelRows[m.label];
      if (r) rowMap[r] = [m.value];
    }
  }

  const col = columnLetter(nextCol);
  const startRow = sameDay ? 2 : 1;
  const endRow = Math.max(2, ...Object.keys(rowMap).map(Number));
  const rows: (string | number)[][] = [];
  for (let r = startRow; r <= endRow; r++) {
    rows.push(rowMap[r] ?? ['']);
  }

  await client.spreadsheets.values.update({
    spreadsheetId,
    range: `${sheetName}!${col}${startRow}:${col}${endRow}`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: rows },
  });

  // Grow the date merge when a new slot of the same day is added, and
  // keep the parent date cells center-aligned.
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

  return 1;
}