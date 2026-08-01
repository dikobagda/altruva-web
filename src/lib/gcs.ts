import { Storage } from '@google-cloud/storage';
import path from 'path';

const projectId = process.env.GCS_PROJECT_ID || 'vinsengroup';
const bucketName = process.env.GCS_BUCKET_NAME || 'altruva-dev';
const keyFilePath = process.env.GCS_KEYFILE_PATH;

let storage: Storage;

if (keyFilePath) {
  // If absolute/relative JSON key path is provided, load using file credentials
  storage = new Storage({
    projectId,
    keyFilename: path.isAbsolute(keyFilePath) ? keyFilePath : path.join(process.cwd(), keyFilePath),
  });
} else {
  // Fallback to inline ENV credentials if keys are set directly
  const clientEmail = process.env.GCS_CLIENT_EMAIL || 'sfahub@vinsengroup.iam.gserviceaccount.com';
  const privateKey = (process.env.GCS_PRIVATE_KEY || '').replace(/\\n/g, '\n');
  
  storage = new Storage({
    projectId,
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
  });
}

export const bucket = storage.bucket(bucketName);
export { storage };
