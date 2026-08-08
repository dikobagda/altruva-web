import { NextResponse } from 'next/server';
import pool, { initializeDatabase } from '@/lib/db';

// GET /api/analytics/whatsapp — WhatsApp click analytics summary
export async function GET() {
  try {
    await initializeDatabase();

    const [totals]: any = await pool.query(`
      SELECT
        COUNT(*) AS total,
        COUNT(DISTINCT ip_address) AS unique_ips,
        SUM(CASE WHEN clicked_at >= DATE_SUB(NOW(), INTERVAL 7 DAY) THEN 1 ELSE 0 END) AS clicks_7d,
        SUM(CASE WHEN clicked_at >= DATE_SUB(NOW(), INTERVAL 30 DAY) THEN 1 ELSE 0 END) AS clicks_30d
      FROM whatsapp_clicks
    `);

    const [byType]: any = await pool.query(`
      SELECT event_type, COUNT(*) AS count
      FROM whatsapp_clicks
      GROUP BY event_type
      ORDER BY count DESC
    `);

    const [byPage]: any = await pool.query(`
      SELECT url, COUNT(*) AS count
      FROM whatsapp_clicks
      GROUP BY url
      ORDER BY count DESC
      LIMIT 20
    `);

    const [trend]: any = await pool.query(`
      SELECT DATE(clicked_at) AS day, COUNT(*) AS count
      FROM whatsapp_clicks
      WHERE clicked_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
      GROUP BY DATE(clicked_at)
      ORDER BY day ASC
    `);

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