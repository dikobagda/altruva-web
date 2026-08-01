const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const { Storage } = require('@google-cloud/storage');

// Load environment variables manually if dot env file exists
try {
  require('dotenv').config({ path: path.join(__dirname, '.env') });
} catch (e) {
  console.log('Skipping optional dotenv load - relying on shell env variables.');
}

async function runProductionMigration() {
  const projectId = process.env.GCS_PROJECT_ID;
  const bucketName = process.env.GCS_BUCKET_NAME;
  const keyFilePath = process.env.GCS_KEYFILE_PATH;

  console.log('=== Altruva Production Database & Uploads Migration to GCS ===');
  console.log(`GCP Project ID : ${projectId || 'Not set'}`);
  console.log(`GCS Bucket Name: ${bucketName || 'Not set'}`);

  if (!projectId || !bucketName) {
    console.error('Error: GCS_PROJECT_ID and GCS_BUCKET_NAME environment variables are required.');
    process.exit(1);
  }

  // 1. Authenticate with GCS
  let storage;
  if (keyFilePath) {
    const keyPath = path.isAbsolute(keyFilePath) ? keyFilePath : path.join(__dirname, keyFilePath);
    if (!fs.existsSync(keyPath)) {
      console.error(`Error: Service Account JSON Key not found at: ${keyPath}`);
      process.exit(1);
    }
    console.log(`Using Service Account JSON from: ${keyPath}`);
    storage = new Storage({ projectId, keyFilename: keyPath });
  } else {
    const clientEmail = process.env.GCS_CLIENT_EMAIL;
    const privateKey = (process.env.GCS_PRIVATE_KEY || '').replace(/\\n/g, '\n');
    
    if (!privateKey || !clientEmail) {
      console.error('Error: Either GCS_KEYFILE_PATH or both GCS_PRIVATE_KEY and GCS_CLIENT_EMAIL must be set.');
      process.exit(1);
    }
    console.log('Using direct environment variable credentials (Private Key).');
    storage = new Storage({
      projectId,
      credentials: { client_email: clientEmail, private_key: privateKey },
    });
  }

  const bucket = storage.bucket(bucketName);

  // 2. Scan and Upload Local files to GCS
  const localUploadsDir = path.join(__dirname, 'public', 'uploads');
  if (!fs.existsSync(localUploadsDir)) {
    console.log('[Info] Local public/uploads folder not found on server. Skipping files sync.');
  } else {
    const localFiles = fs.readdirSync(localUploadsDir);
    console.log(`[Info] Found ${localFiles.length} files in public/uploads directory.`);

    for (const filename of localFiles) {
      const filePath = path.join(localUploadsDir, filename);
      const stat = fs.statSync(filePath);

      if (stat.isFile() && filename !== '.gitkeep') {
        const destPath = `uploads/${filename}`;
        const gcsFile = bucket.file(destPath);

        const [exists] = await gcsFile.exists();
        if (exists) {
          console.log(` -> [Skip] Already uploaded: ${destPath}`);
          continue;
        }

        console.log(` -> [Sync] Uploading to GCS: ${filename}...`);
        const fileBuffer = fs.readFileSync(filePath);
        await gcsFile.save(fileBuffer, {
          resumable: false,
          metadata: {
            contentType: getMimeType(filename),
            cacheControl: 'public, max-age=31536000',
          }
        });

        try {
          await gcsFile.makePublic();
        } catch (_) {}
      }
    }
  }

  // 3. Update Database paths
  console.log('[DB] Connecting to MySQL Database...');
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    const [rows] = await connection.query('SELECT id, image_src, content FROM blogs');
    console.log(`[DB] Analyzing ${rows.length} articles in database.`);

    let updateCount = 0;
    for (const row of rows) {
      let updatedImageSrc = row.image_src;
      let updatedContent = row.content;
      let isModified = false;

      // Replace main cover image paths
      if (row.image_src && row.image_src.startsWith('/uploads/')) {
        const filename = row.image_src.replace('/uploads/', '');
        updatedImageSrc = `https://storage.googleapis.com/${bucketName}/uploads/${filename}`;
        isModified = true;
      }

      // Replace embedded body content images
      if (row.content && row.content.includes('/uploads/')) {
        const regex = /\/uploads\/([a-zA-Z0-9.-_]+)/g;
        updatedContent = row.content.replace(regex, (match, filename) => {
          return `https://storage.googleapis.com/${bucketName}/uploads/${filename}`;
        });
        isModified = true;
      }

      if (isModified) {
        await connection.query(
          'UPDATE blogs SET image_src = ?, content = ? WHERE id = ?',
          [updatedImageSrc, updatedContent, row.id]
        );
        updateCount++;
        console.log(` -> [DB Updated] Article ID: ${row.id}`);
      }
    }

    console.log(`[Success] Database updates completed! updated ${updateCount} rows.`);
  } catch (err) {
    console.error('[Error] DB refactor failed:', err);
  } finally {
    await connection.end();
  }

  console.log('=== MIGRATION PROCESS COMPLETED ===');
}

function getMimeType(filename) {
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

runProductionMigration().catch(console.error);
