import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifySessionToken } from '@/lib/cms-auth';
import { syncToSheets } from '@/lib/sheet-sync';

export async function POST() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cms_session')?.value;
  const authenticated = token && verifySessionToken(token);

  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const result = await syncToSheets();
    return NextResponse.json({ success: true, ...result });
  } catch (error: any) {
    console.error('Google Sheets sync error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while syncing to Google Sheets.' },
      { status: 500 }
    );
  }
}