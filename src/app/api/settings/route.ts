import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const keys = searchParams.get('keys');
    
    let query = 'SELECT setting_key, setting_value FROM settings';
    let params: any[] = [];
    
    if (keys) {
      const keyArray = keys.split(',');
      query += ' WHERE setting_key IN (?)';
      params.push(keyArray);
    }
    
    const [rows]: any = await pool.query(query, params);
    
    const settings: Record<string, string> = {};
    rows.forEach((row: any) => {
      settings[row.setting_key] = row.setting_value;
    });
    
    return NextResponse.json({ success: true, settings });
  } catch (error: any) {
    console.error('Failed to get settings:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { settings } = body; // Expected format: { settings: { "key1": "value1", "key2": "value2" } }
    
    if (!settings || typeof settings !== 'object') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    
    // Process sequentially (usually just 1 or 2 settings)
    for (const [key, value] of Object.entries(settings)) {
      await pool.query(
        'INSERT INTO settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = ?',
        [key, String(value), String(value)]
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Failed to update settings:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
