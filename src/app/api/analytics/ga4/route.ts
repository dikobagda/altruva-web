import { NextRequest, NextResponse } from 'next/server';
import { fetchGa4Snapshot } from '@/lib/ga4';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const from = searchParams.get('from') || '30daysAgo';
    const to = searchParams.get('to') || 'today';

    const data = await fetchGa4Snapshot(from, to);

    return NextResponse.json({
      success: true,
      ...data,
    });

  } catch (error: any) {
    console.error('GA4 API Error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while fetching GA4 analytics.' },
      { status: 500 }
    );
  }
}