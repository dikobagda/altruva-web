import { NextResponse } from 'next/server';
import pool, { initializeDatabase } from '@/lib/db';

// GET /api/analytics/whatsapp?from=2026-08-01&to=2026-08-31 — WhatsApp click analytics summary
export async function GET(request: Request) {
  try {
    await initializeDatabase();

    const { searchParams } = new URL(request.url);
    const from = searchParams.get('from');
    const to = searchParams.get('to');

    // Build date filter (DEFAULT: all-time, no filter applied unless provided)
    const conditions: string[] = [];
    const params: string[] = [];

    if (from) {
      conditions.push('Date(clicked_at) >= ?');
      params.push(from);
    }
    if (to) {
      conditions.push('Date(clicked_at) <= ?');
      params.push(to);
    }
    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    const [totals]: any = await pool.query(
      `SELECT
        COUNT(*) AS total,
        COUNT(DISTINCT ip_address) AS unique_ips,
        SUM(CASE WHEN clicked_at >= DATE_SUB(NOW(), INTERVAL 7 DAY) THEN 1 ELSE 0 END) AS clicks_7d,
        SUM(CASE WHEN clicked_at >= DATE_SUB(NOW(), INTERVAL 30 DAY) THEN 1 ELSE 0 END) AS clicks_30d
      FROM whatsapp_clicks
      ${whereClause}`,
      params
    );

    const [byType]: any = await pool.query(
      `SELECT event_type, COUNT(*) AS count
       FROM whatsapp_clicks
       ${whereClause}
       GROUP BY event_type
       ORDER BY count DESC`,
      params
    );

    const [byPage]: any = await pool.query(
      `SELECT url, COUNT(*) AS count
       FROM whatsapp_clicks
       ${whereClause}
       GROUP BY url
       ORDER BY count DESC
       LIMIT 20`,
      params
    );

    const [trend]: any = await pool.query(
      `SELECT DATE(clicked_at) AS day, COUNT(*) AS count
       FROM whatsapp_clicks
       ${whereClause}
       GROUP BY DATE(clicked_at)
       ORDER BY day ASC`,
      params
    );

    return NextResponse.json({
      total: totals[0]?.total || 0,
      unique_ips: totals[0]?.unique_ips || 0,
      clicks_7d: totals[0]?.clicks_7d || 0,
      clicks_30d: totals[0]?.clicks_30d || 0,
      byType,
      byPage,
      trend,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}