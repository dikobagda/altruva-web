import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifySessionToken } from '@/lib/cms-auth';
import { syncToSheets, SyncOptions } from '@/lib/sheet-sync';

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('cms_session')?.value;
  const authenticated = token && verifySessionToken(token);

  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    let target: SyncOptions['target'] = 'all';

    // Check searchParams first
    const searchTarget = request.nextUrl.searchParams.get('target');
    if (searchTarget === 'internal' || searchTarget === 'ga4' || searchTarget === 'all') {
      target = searchTarget;
    } else {
      // Try body
      try {
        const body = await request.json();
        if (body?.target === 'internal' || body?.target === 'ga4' || body?.target === 'all') {
          target = body.target;
        }
      } catch {
        // Body is optional
      }
    }

    const result = await syncToSheets({ target });
    return NextResponse.json({ success: true, ...result });
  } catch (error: any) {
    console.error('Google Sheets sync error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while syncing to Google Sheets.' },
      { status: 500 }
    );
  }
}