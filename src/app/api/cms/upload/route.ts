import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { promises as fs } from 'fs';
import path from 'path';
import { verifySessionToken } from '@/lib/cms-auth';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cms_session')?.value;
  return token && verifySessionToken(token);
}

export async function POST(request: Request) {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Create a URL-safe unique filename
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    // Ensure public/uploads directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    // Save the file
    const filePath = path.join(uploadDir, filename);
    await fs.writeFile(filePath, buffer);

    const relativeUrl = `/uploads/${filename}`;
    return NextResponse.json({ success: true, url: relativeUrl });
  } catch (error: any) {
    console.error('File upload error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
