import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import pool, { initializeDatabase } from '@/lib/db';
import { verifySessionToken } from '@/lib/cms-auth';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cms_session')?.value;
  return token && verifySessionToken(token);
}

// GET — CMS only: list all appointments
export async function GET() {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await initializeDatabase();
  try {
    const [rows]: any = await pool.query(
      'SELECT * FROM appointments ORDER BY created_at DESC'
    );
    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST — public: save new appointment from booking form
export async function POST(request: Request) {
  await initializeDatabase();
  try {
    const body = await request.json();
    const { name, email, phone, treatment, preferred_date, preferred_time, notes } = body;

    if (!name || !email || !phone || !treatment || !preferred_date || !preferred_time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const [result]: any = await pool.query(
      `INSERT INTO appointments (name, email, phone, treatment, preferred_date, preferred_time, notes, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')`,
      [name, email, phone, treatment, preferred_date, preferred_time, notes || null]
    );

    return NextResponse.json({
      success: true,
      id: result.insertId,
      message: 'Appointment saved successfully',
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PATCH — CMS only: update appointment status
export async function PATCH(request: Request) {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await initializeDatabase();
  try {
    const { id, status } = await request.json();
    if (!id || !['pending', 'confirmed', 'cancelled'].includes(status)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    await pool.query('UPDATE appointments SET status = ? WHERE id = ?', [status, id]);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE — CMS only: delete an appointment
export async function DELETE(request: Request) {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await initializeDatabase();
  try {
    const { id } = await request.json();
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    await pool.query('DELETE FROM appointments WHERE id = ?', [id]);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
