import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import pool, { initializeDatabase } from '@/lib/db';
import { verifySessionToken } from '@/lib/cms-auth';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cms_session')?.value;
  return token && verifySessionToken(token);
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id: slug } = await params;
  await initializeDatabase();
  try {
    const [rows]: any = await pool.query('SELECT * FROM blogs WHERE slug = ?', [slug]);
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    const blog = rows[0];
    return NextResponse.json({
      ...blog,
      keywords: typeof blog.keywords === 'string' ? JSON.parse(blog.keywords) : blog.keywords,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id: oldSlug } = await params;
  await initializeDatabase();
  try {
    const { slug, title, excerpt, content, imageSrc, imageHint, date, keywords, author, reviewedBy } = await request.json();
    
    if (!slug || !title) {
      return NextResponse.json({ error: 'Slug and Title are required' }, { status: 400 });
    }

    await pool.query(
      `UPDATE blogs 
       SET slug = ?, title = ?, excerpt = ?, content = ?, image_src = ?, image_hint = ?, date = ?, keywords = ?, author = ?, reviewed_by = ?
       WHERE slug = ?`,
      [
        slug,
        title,
        excerpt || '',
        content || '',
        imageSrc || '',
        imageHint || '',
        date || '',
        JSON.stringify(keywords || []),
        author || 'Altruva Aesthetic Clinic',
        reviewedBy || 'dr. Olivia Aldisa',
        oldSlug,
      ]
    );

    return NextResponse.json({ success: true, message: 'Blog updated successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id: slug } = await params;
  await initializeDatabase();
  try {
    await pool.query('DELETE FROM blogs WHERE slug = ?', [slug]);
    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
