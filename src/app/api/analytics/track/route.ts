import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { path, referrer, session_id } = body;

    if (!path) {
      return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    // Check if tracking is enabled
    const [settingsRows]: any = await pool.query('SELECT setting_value FROM settings WHERE setting_key = "internal_analytics_enabled"');
    if (settingsRows.length > 0 && settingsRows[0].setting_value === 'false') {
      return NextResponse.json({ success: true, message: 'Tracking is disabled' });
    }

    // Parse User-Agent
    const userAgent = req.headers.get('user-agent') || '';
    let device = 'Desktop';
    if (/mobile/i.test(userAgent)) device = 'Mobile';
    else if (/tablet/i.test(userAgent)) device = 'Tablet';

    let browser = 'Others';
    if (/android webview/i.test(userAgent) || /wv/i.test(userAgent)) browser = 'AndroidWebview';
    else if (/samsungbrowser/i.test(userAgent)) browser = 'SamsungInternet';
    else if (/chrome|crios/i.test(userAgent)) browser = 'Chrome';
    else if (/safari/i.test(userAgent) && !/chrome|crios/i.test(userAgent)) browser = 'Safari';

    // Get IP
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    // Parse Source from referrer or URL
    let source = '(direct) / (none)';
    if (referrer) {
      if (referrer.includes('instagram.com')) source = 'Instagram';
      else if (referrer.includes('threads.net')) source = 'Threads';
      else if (referrer.includes('facebook.com')) source = 'Facebook';
      else if (referrer.includes('google.')) source = 'Google Organic';
      else source = new URL(referrer).hostname;
    }

    // Check for UTM tags in path
    if (path.includes('utm_source=')) {
      const url = new URL(path, 'http://localhost');
      const utmSource = url.searchParams.get('utm_source');
      if (utmSource) {
        source = utmSource;
      }
    }

    await pool.query(
      `INSERT INTO site_analytics (session_id, path, referrer, source, device, browser, ip_address) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [session_id || 'unknown', path, referrer || '', source, device, browser, ip]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
