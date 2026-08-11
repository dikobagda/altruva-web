import { NextRequest, NextResponse } from 'next/server';
import { syncToSheets } from '@/lib/sheet-sync';

/**
 * GET /api/cron/sync-sheets
 *
 * Endpoint khusus untuk cron-job.org — diproteksi dengan Bearer token (CRON_SECRET).
 *
 * Setup di cron-job.org:
 *   URL    : https://altruva.co.id/api/cron/sync-sheets
 *   Method : GET
 *   Header : Authorization: Bearer <CRON_SECRET>
 */
export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    console.error('[CronSync] CRON_SECRET environment variable is not set.');
    return NextResponse.json({ error: 'Server misconfiguration.' }, { status: 500 });
  }

  const authHeader = request.headers.get('authorization');
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token || token !== cronSecret) {
    console.warn('[CronSync] Unauthorized cron request rejected.');
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    console.log('[CronSync] Starting scheduled sync...');
    const result = await syncToSheets();
    console.log('[CronSync] Sync completed:', result.syncedAt);
    return NextResponse.json({ success: true, ...result });
  } catch (error: any) {
    console.error('[CronSync] Sync failed:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while syncing to Google Sheets.' },
      { status: 500 }
    );
  }
}
