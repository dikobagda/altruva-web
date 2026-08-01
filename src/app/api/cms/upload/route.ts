import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifySessionToken } from '@/lib/cms-auth';
import { bucket } from '@/lib/gcs';

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

    // Upload to Google Cloud Storage bucket
    const gcsFile = bucket.file(`uploads/${filename}`);
    
    // Save buffer content to GCS
    await gcsFile.save(buffer, {
      metadata: {
        contentType: file.type,
      },
      resumable: false,
    });

    // Public URL — bucket must have allUsers:objectViewer IAM policy set at bucket level
    // (Uniform bucket-level access prevents per-object makePublic())
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/uploads/${filename}`;
    
    return NextResponse.json({ success: true, url: publicUrl });
  } catch (error: any) {
    console.error('File upload to GCS error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
