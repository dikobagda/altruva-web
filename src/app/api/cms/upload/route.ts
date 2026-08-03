import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { promises as fs } from 'fs';
import path from 'path';
import { verifySessionToken } from '@/lib/cms-auth';
import { bucket } from '@/lib/gcs';

const GCS_PUBLIC_BASE = `https://storage.googleapis.com/${bucket.name}`;

function getMimeType(filename: string, fallback?: string): string {
  if (fallback && fallback.startsWith('image/')) return fallback;
  const ext = path.extname(filename).toLowerCase();
  switch (ext) {
    case '.webp': return 'image/webp';
    case '.png': return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.gif': return 'image/gif';
    case '.svg': return 'image/svg+xml';
    default: return 'application/octet-stream';
  }
}

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cms_session')?.value;
  return token && verifySessionToken(token);
}

async function uploadToGCS(buffer: Buffer, filename: string, contentType: string): Promise<string> {
  const destPath = `uploads/${filename}`;
  const gcsFile = bucket.file(destPath);

  await gcsFile.save(buffer, {
    resumable: false,
    metadata: {
      contentType,
      cacheControl: 'public, max-age=31536000',
    },
  });

  try {
    await gcsFile.makePublic();
  } catch (_) {
    // Ignore if the bucket is already public / ACLs disabled
  }

  return `${GCS_PUBLIC_BASE}/${destPath}`;
}

async function uploadToLocal(buffer: Buffer, filename: string): Promise<string> {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await fs.mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, filename);
  await fs.writeFile(filePath, buffer);
  return `/uploads/${filename}`;
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
