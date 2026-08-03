import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifySessionToken } from '@/lib/cms-auth';
import { getMimeType, sanitizeFilename, uploadToGCS, uploadToLocal } from '@/lib/storage';

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
    const filename = `${Date.now()}-${sanitizeFilename(file.name)}`;
    const contentType = getMimeType(filename, file.type);

    try {
      const url = await uploadToGCS(buffer, filename, contentType);
      return NextResponse.json({ success: true, url });
    } catch (gcsErr) {
      console.error('[GCS] Upload failed, falling back to local storage:', gcsErr);
      const url = await uploadToLocal(buffer, filename);
      return NextResponse.json({ success: true, url });
    }
  } catch (error: any) {
    console.error('File upload error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
