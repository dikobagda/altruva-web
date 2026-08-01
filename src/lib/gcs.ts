import { Storage } from '@google-cloud/storage';
import path from 'path';
import fs from 'fs';

const projectId = process.env.GCS_PROJECT_ID || 'vinsengroup';
const bucketName = process.env.GCS_BUCKET_NAME || 'altruva-dev';
const keyFilePath = process.env.GCS_KEYFILE_PATH;

let storage: Storage;

if (keyFilePath) {
  const resolvedPath = path.isAbsolute(keyFilePath)
    ? keyFilePath
    : path.join(process.cwd(), keyFilePath);

  const fileExists = fs.existsSync(resolvedPath);
  console.log('[GCS] Using keyfile auth');
  console.log('[GCS] cwd:', process.cwd());
  console.log('[GCS] keyFilePath env:', keyFilePath);
  console.log('[GCS] resolvedPath:', resolvedPath);
  console.log('[GCS] file exists:', fileExists);

  if (!fileExists) {
    console.error('[GCS] ERROR: keyfile not found at resolved path! Falling back to env credentials.');
    // Fallback to inline env credentials if keyfile is missing
    const clientEmail = process.env.GCS_CLIENT_EMAIL || '';
    const privateKey = (process.env.GCS_PRIVATE_KEY || '').replace(/\\n/g, '\n');
    storage = new Storage({
      projectId,
      credentials: { client_email: clientEmail, private_key: privateKey },
    });
  } else {
    storage = new Storage({ projectId, keyFilename: resolvedPath });
  }
} else {
  // Use inline ENV credentials
  const clientEmail = process.env.GCS_CLIENT_EMAIL || 'sfahub@vinsengroup.iam.gserviceaccount.com';
  const privateKey = (process.env.GCS_PRIVATE_KEY || '').replace(/\\n/g, '\n');

  console.log('[GCS] Using inline credential auth');
  console.log('[GCS] client_email:', clientEmail);
  console.log('[GCS] private_key present:', privateKey.length > 10);

  storage = new Storage({
    projectId,
    credentials: { client_email: clientEmail, private_key: privateKey },
  });
}

export const bucket = storage.bucket(bucketName);
export { storage };
