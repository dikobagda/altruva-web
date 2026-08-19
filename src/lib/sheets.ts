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
  const labelRows: Record<string, number> = {};

  sections.forEach((section) => {
    // Blank separator row
    layoutRows.push('');
    // Section Title row
    const titleRowIndex = 3 + layoutRows.length;
    layoutRows.push(section.title);
    labelRows[`SECTION_${section.title}`] = titleRowIndex;

    // Metric rows
    section.metrics.forEach((m) => {
      const metricRowIndex = 3 + layoutRows.length;
      layoutRows.push(m.label);
      labelRows[`${section.title}__${m.label}`] = metricRowIndex;
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
    // Build labelRows index based on layoutRows
    sections.forEach((section) => {
      layoutRows.forEach((label, idx) => {
        if (label === section.title) {
          labelRows[`SECTION_${section.title}`] = 3 + idx;
        }
      });
      section.metrics.forEach((m) => {
        const idx = layoutRows.findIndex((l) => l === m.label);
        if (idx !== -1) {
          labelRows[`${section.title}__${m.label}`] = 3 + idx;
        }
      });
    });
  } else {
    // Map existing rows dynamically so we match exact row indexes in the actual sheet
    let currentSection = '';
    existingColumnA.forEach((cellVal, idx) => {
      const rowNum = idx + 1;
      const trimmed = cellVal.trim();
      if (!trimmed) return;

      // Check if trimmed matches any section title
      const matchingSection = sections.find((s) => s.title.trim() === trimmed);
      if (matchingSection) {
        currentSection = matchingSection.title;
        labelRows[`SECTION_${currentSection}`] = rowNum;
      } else if (currentSection) {
        labelRows[`${currentSection}__${trimmed}`] = rowNum;
      }
    });

    // Also write any missing labels/sections dynamically to Column A if new metrics were added
    sections.forEach((section) => {
      if (!labelRows[`SECTION_${section.title}`]) {
        const nextRow = existingColumnA.length + 1;
        existingColumnA.push('');
        existingColumnA.push(section.title);
        labelRows[`SECTION_${section.title}`] = nextRow + 1;
      }
      section.metrics.forEach((m) => {
        if (!labelRows[`${section.title}__${m.label}`]) {
          const nextRow = existingColumnA.length + 1;
          existingColumnA.push(m.label);
          labelRows[`${section.title}__${m.label}`] = nextRow;
        }
      });
    });

    // Update Column A to ensure all labels/sections are populated without deleting existing ones
    await client.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!A1:A${existingColumnA.length}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: existingColumnA.map((label) => [label]) },
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
      const r = labelRows[`${section.title}__${m.label}`];
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