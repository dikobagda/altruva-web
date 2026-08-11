import { Storage } from '@google-cloud/storage';
import path from 'path';
import fs from 'fs';
import { getServiceAccountPrivateKey } from '@/lib/google-credentials';

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
    storage = new Storage({
      projectId,
      credentials: { client_email: clientEmail, private_key: getPrivateKey() },
    });
  } else {
    storage = new Storage({ projectId, keyFilename: resolvedPath });
  }
} else {
  // Use inline ENV credentials
  const clientEmail = process.env.GCS_CLIENT_EMAIL || 'sfahub@vinsengroup.iam.gserviceaccount.com';

  console.log('[GCS] Using inline credential auth');
  console.log('[GCS] client_email:', clientEmail);
  console.log('[GCS] private_key present:', getPrivateKey().length > 10);

  storage = new Storage({
    projectId,
    credentials: { client_email: clientEmail, private_key: getPrivateKey() },
  });
}

// Parse GCS_PRIVATE_KEY defensively: prefer a base64-encoded single-line value,
// strip surrounding quotes, unescape \n, and fall back to the local keyfile
// if the env value is missing/malformed.
function getPrivateKey(): string {
  let key = getServiceAccountPrivateKey();

  // Validate the PEM structure; fall back to the local keyfile if malformed
  if (!key.includes('-----BEGIN PRIVATE KEY-----')) {
    console.warn('[GCS] GCS_PRIVATE_KEY missing or malformed, attempting keyfile fallback.');
    try {
      const localKey = JSON.parse(
        fs.readFileSync(
          path.join(process.cwd(), 'vinsengroup-a0cbe5dce764.json'),
          'utf8'
        )
      );
      key = localKey.private_key || '';
    } catch (_) {
      // Ignore – keyfile fallback is best-effort
    }
  }

  return key;
}

export const bucket = storage.bucket(bucketName);
export { storage };

// Altruva — GCS storage client (rebuild trigger)
