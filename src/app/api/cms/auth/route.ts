import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { generateSessionToken } from '@/lib/cms-auth';
import pool, { initializeDatabase } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    await initializeDatabase();

    // 1. Retrieve the user from the database
    const [rows]: any = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Invalid username or password' },
        { status: 401 }
      );
    }

    const user = rows[0];

    // 2. Compare passwords using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = generateSessionToken(username);
      const cookieStore = await cookies();
      
      cookieStore.set('cms_session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return NextResponse.json({ success: true, message: 'Logged in successfully' });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid username or password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('cms_session');
  return NextResponse.json({ success: true, message: 'Logged out successfully' });
}
