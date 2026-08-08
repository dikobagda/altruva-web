import { NextResponse } from 'next/server';
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

// POST /api/clicks — record a tracked click (e.g. WhatsApp buttons/CTAs)
export async function POST(request: Request) {
  try {
    const { event_type, href, page } = await request.json();
    if (!event_type) {
      return NextResponse.json({ error: 'event_type required' }, { status: 400 });
    }

    await initializeDatabase();

    const ip = getClientIp(request);

    await pool.query(
      'INSERT INTO whatsapp_clicks (event_type, ip_address, url, href) VALUES (?, ?, ?, ?)',
      [event_type, ip, page || '', href || '']
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}