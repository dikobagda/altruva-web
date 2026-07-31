import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import pool, { initializeDatabase } from '@/lib/db';

function getClientIp(request: Request): string {
  const headersList = request.headers;
  return (
    headersList.get('cf-connecting-ip') ||         // Cloudflare
    headersList.get('x-real-ip') ||                // Nginx proxy
    headersList.get('x-forwarded-for')?.split(',')[0].trim() || // Load balancers
    '0.0.0.0'
  );
}

// POST /api/analytics/view — record a page view
export async function POST(request: Request) {
  try {
    const { slug } = await request.json();
    if (!slug) return NextResponse.json({ error: 'slug required' }, { status: 400 });

    await initializeDatabase();

    const ip = getClientIp(request);

    // Always record the raw view event with IP
    await pool.query(
      'INSERT INTO page_views (slug, ip_address) VALUES (?, ?)',
      [slug, ip]
    );

    // Increment total view count
    await pool.query('UPDATE blogs SET view_count = view_count + 1 WHERE slug = ?', [slug]);

    // Check if this IP already viewed this article today (for unique count)
    const today = new Date().toISOString().split('T')[0];
    const [existing]: any = await pool.query(
      `SELECT COUNT(*) as count FROM page_views
       WHERE slug = ? AND ip_address = ? AND DATE(viewed_at) = ? AND id < LAST_INSERT_ID()`,
      [slug, ip, today]
    );

    const alreadyViewedToday = (existing[0]?.count || 0) > 0;
    if (!alreadyViewedToday) {
      await pool.query(
        'UPDATE blogs SET unique_view_count = unique_view_count + 1 WHERE slug = ?',
        [slug]
      );
    }

    return NextResponse.json({ success: true, unique: !alreadyViewedToday });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET /api/analytics/view?slug=xxx — analytics for one article
// GET /api/analytics/view        — summary for all articles
export async function GET(request: Request) {
  try {
    await initializeDatabase();
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      // Per-article: last 30 days trend grouped by day with unique visitors
      const [trend]: any = await pool.query(`
        SELECT
          DATE(viewed_at) as day,
          COUNT(*) as views,
          COUNT(DISTINCT ip_address) as unique_views
        FROM page_views
        WHERE slug = ?
          AND viewed_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
        GROUP BY DATE(viewed_at)
        ORDER BY day ASC
      `, [slug]);

      const [totals]: any = await pool.query(
        'SELECT view_count, unique_view_count FROM blogs WHERE slug = ?',
        [slug]
      );

      return NextResponse.json({
        total: totals[0]?.view_count || 0,
        unique: totals[0]?.unique_view_count || 0,
        trend,
      });
    }

    // All articles summary
    const [rows]: any = await pool.query(`
      SELECT
        b.slug,
        b.view_count AS total_views,
        b.unique_view_count AS unique_views,
        COUNT(pv.id) AS views_7d,
        COUNT(DISTINCT CASE WHEN pv.viewed_at >= DATE_SUB(NOW(), INTERVAL 7 DAY) THEN pv.ip_address END) AS unique_7d
      FROM blogs b
      LEFT JOIN page_views pv
        ON pv.slug = b.slug
        AND pv.viewed_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
      GROUP BY b.slug, b.view_count, b.unique_view_count
    `);

    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
