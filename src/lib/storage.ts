import { promises as fs } from 'fs';
import path from 'path';
import { bucket } from '@/lib/gcs';

const GCS_PUBLIC_BASE = `https://storage.googleapis.com/${bucket.name}`;

export function getMimeType(filename: string, fallback?: string): string {
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

export async function uploadToGCS(buffer: Buffer, filename: string, contentType: string): Promise<string> {
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

export async function uploadToLocal(buffer: Buffer, filename: string): Promise<string> {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await fs.mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, filename);
  await fs.writeFile(filePath, buffer);
  return `/uploads/${filename}`;
}

export function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9.-]/g, '_');
}
