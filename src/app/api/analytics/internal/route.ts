import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

function getJakartaNow() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc + (3600000 * 7));
}

function parseDate(val: string): Date {
  if (val === 'today') return getJakartaNow();
  if (val === 'yesterday') {
    const d = getJakartaNow();
    d.setDate(d.getDate() - 1);
    return d;
  }
  const match = val.match(/^(\d+)daysAgo$/);
  if (match) {
    const days = parseInt(match[1], 10);
    const d = getJakartaNow();
    d.setDate(d.getDate() - days);
    return d;
  }
  
  const [y, m, day] = val.split('-').map(Number);
  const d = getJakartaNow();
  d.setFullYear(y, m - 1, day);
  return d;
}

function formatDateForSQL(d: Date, startOfDay = true) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day} ${startOfDay ? '00:00:00' : '23:59:59'}`;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fromStr = searchParams.get('from') || '30daysAgo';
    const toStr = searchParams.get('to') || 'today';

    const startDateObj = parseDate(fromStr);
    const endDateObj = parseDate(toStr);
    
    const startDate = formatDateForSQL(startDateObj, true);
    const endDate = formatDateForSQL(endDateObj, false);

    // For previous period
    const diffTime = Math.abs(endDateObj.getTime() - startDateObj.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
    
    const prevEndObj = new Date(startDateObj);
    prevEndObj.setDate(prevEndObj.getDate() - 1);
    const prevStartObj = new Date(prevEndObj);
    prevStartObj.setDate(prevStartObj.getDate() - diffDays + 1);

    const prevStartDate = formatDateForSQL(prevStartObj, true);
    const prevEndDate = formatDateForSQL(prevEndObj, false);

    const [currentStatsRow]: any = await pool.query(`
      SELECT 
        COUNT(DISTINCT session_id) as activeUsers,
        COUNT(*) as pageViews,
        COUNT(DISTINCT session_id) as sessions
      FROM site_analytics 
      WHERE visited_at BETWEEN ? AND ?
    `, [startDate, endDate]);

    const [previousStatsRow]: any = await pool.query(`
      SELECT 
        COUNT(DISTINCT session_id) as activeUsers,
        COUNT(*) as pageViews,
        COUNT(DISTINCT session_id) as sessions
      FROM site_analytics 
      WHERE visited_at BETWEEN ? AND ?
    `, [prevStartDate, prevEndDate]);

    // Trend (Daily or Hourly if today)
    const isToday = fromStr === 'today' && toStr === 'today';
    let trendQuery = '';
    
    if (isToday) {
      trendQuery = `
        SELECT 
          DATE_FORMAT(visited_at, '%Y-%m-%d %H:00:00') as rawDate,
          COUNT(DISTINCT session_id) as activeUsers,
          COUNT(*) as pageViews
        FROM site_analytics
        WHERE visited_at BETWEEN ? AND ?
        GROUP BY DATE_FORMAT(visited_at, '%Y-%m-%d %H:00:00')
        ORDER BY rawDate ASC
      `;
    } else {
      trendQuery = `
        SELECT 
          DATE(visited_at) as rawDate,
          COUNT(DISTINCT session_id) as activeUsers,
          COUNT(*) as pageViews
        FROM site_analytics
        WHERE visited_at BETWEEN ? AND ?
        GROUP BY DATE(visited_at)
        ORDER BY rawDate ASC
      `;
    }

    const [trendRows]: any = await pool.query(trendQuery, [startDate, endDate]);

    const trend = trendRows.map((r: any) => {
      // r.rawDate is returned as literal UTC+7 string (e.g. '2026-09-07' or '2026-09-07 00:00:00')
      const [datePart, timePart] = r.rawDate.split(' ');
      const [y, m, day] = datePart.split('-').map(Number);
      const h = timePart ? parseInt(timePart.split(':')[0], 10) : 0;
      
      let rawDateStr = '';
      let formattedDate = '';
      
      if (isToday) {
        rawDateStr = `${y}${String(m).padStart(2,'0')}${String(day).padStart(2,'0')}${String(h).padStart(2,'0')}00`;
        formattedDate = `${String(h).padStart(2,'0')}:00`;
      } else {
        rawDateStr = `${y}${String(m).padStart(2,'0')}${String(day).padStart(2,'0')}`;
        // Create a strict local string for Indonesian formatting
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];
        formattedDate = `${day} ${monthNames[m - 1]}`;
      }

      return {
        date: formattedDate,
        rawDate: rawDateStr,
        activeUsers: r.activeUsers,
        newUsers: r.activeUsers, // simplified
        pageViews: r.pageViews
      };
    });

    // Top Pages
    const [topPagesRows]: any = await pool.query(`
      SELECT 
        path, 
        COUNT(DISTINCT session_id) as users, 
        COUNT(*) as views 
      FROM site_analytics
      WHERE visited_at BETWEEN ? AND ?
      GROUP BY path
      ORDER BY views DESC
      LIMIT 15
    `, [startDate, endDate]);

    // Devices
    const [devicesRows]: any = await pool.query(`
      SELECT device, COUNT(DISTINCT session_id) as users
      FROM site_analytics
      WHERE visited_at BETWEEN ? AND ?
      GROUP BY device
    `, [startDate, endDate]);

    // Browsers
    const [browsersRows]: any = await pool.query(`
      SELECT browser, COUNT(DISTINCT session_id) as users
      FROM site_analytics
      WHERE visited_at BETWEEN ? AND ?
      GROUP BY browser
      ORDER BY users DESC
      LIMIT 50
    `, [startDate, endDate]);

    // Traffic Sources
    const [sourceRows]: any = await pool.query(`
      SELECT source, COUNT(DISTINCT session_id) as users
      FROM site_analytics
      WHERE visited_at BETWEEN ? AND ?
      GROUP BY source
      ORDER BY users DESC
      LIMIT 100
    `, [startDate, endDate]);

    // Bucketize browsers
    const BROWSER_BUCKET_LABELS = ['AndroidWebview', 'Safari', 'Safari (in-app)', 'Chrome', 'SamsungInternet', 'Others'];
    const browserBuckets: Record<string, number> = {};
    BROWSER_BUCKET_LABELS.forEach(l => browserBuckets[l] = 0);
    
    browsersRows.forEach((r: any) => {
      let b = r.browser;
      if (!BROWSER_BUCKET_LABELS.includes(b)) b = 'Others';
      browserBuckets[b] += r.users;
    });

    // Traffic source buckets
    const TRAFFIC_BUCKET_LABELS = ['Instagram Paid', 'Threads Paid', 'Direct', 'Google Organic', 'fb Paid', 'unknown/others'];
    const sourceBuckets: Record<string, number> = {};
    TRAFFIC_BUCKET_LABELS.forEach(l => sourceBuckets[l] = 0);
    
    sourceRows.forEach((r: any) => {
      let s = r.source;
      if (s === 'Instagram') s = 'Instagram Paid';
      else if (s === 'Threads') s = 'Threads Paid';
      else if (s === 'Facebook') s = 'fb Paid';
      else if (s === '(direct) / (none)') s = 'Direct';
      
      if (!TRAFFIC_BUCKET_LABELS.includes(s)) s = 'unknown/others';
      sourceBuckets[s] += r.users;
    });

    const data = {
      current: {
        activeUsers: currentStatsRow[0].activeUsers,
        newUsers: currentStatsRow[0].activeUsers,
        pageViews: currentStatsRow[0].pageViews,
        sessions: currentStatsRow[0].sessions,
        avgSessionDuration: 0
      },
      previous: {
        activeUsers: previousStatsRow[0].activeUsers,
        newUsers: previousStatsRow[0].activeUsers,
        pageViews: previousStatsRow[0].pageViews,
        sessions: previousStatsRow[0].sessions,
        avgSessionDuration: 0
      },
      trend,
      topPages: topPagesRows,
      devices: devicesRows,
      browsers: browsersRows,
      browserBuckets,
      trafficSources: sourceRows,
      sourceBuckets,
      cities: [],
      cityBuckets: {}
    };

    return NextResponse.json({
      success: true,
      ...data,
    });

  } catch (error: any) {
    console.error('Internal Analytics API Error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while fetching internal analytics.' },
      { status: 500 }
    );
  }
}
