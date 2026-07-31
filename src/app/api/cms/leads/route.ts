import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import pool, { initializeDatabase } from '@/lib/db';
import { verifySessionToken } from '@/lib/cms-auth';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cms_session')?.value;
  return token && verifySessionToken(token);
}

export async function GET() {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await initializeDatabase();
  try {
    const [rows]: any = await pool.query('SELECT * FROM leads ORDER BY id DESC');
    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await initializeDatabase();
  try {
    const { name, whatsapp } = await request.json();
    
    if (!name || !whatsapp) {
      return NextResponse.json({ error: 'Name and WhatsApp number are required' }, { status: 400 });
    }

    await pool.query(
      'INSERT INTO leads (name, whatsapp) VALUES (?, ?)',
      [name.trim(), whatsapp.trim()]
    );

    return NextResponse.json({ success: true, message: 'Lead registered successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
