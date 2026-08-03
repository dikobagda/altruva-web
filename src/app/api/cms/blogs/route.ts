import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import pool, { initializeDatabase } from '@/lib/db';
import { verifySessionToken } from '@/lib/cms-auth';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cms_session')?.value;
  return token && verifySessionToken(token);
}

export async function GET() {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await initializeDatabase();
  try {
    const [rows]: any = await pool.query('SELECT * FROM blogs ORDER BY id DESC');
    const blogs = rows.map((row: any) => ({
      ...row,
      keywords: typeof row.keywords === 'string' ? JSON.parse(row.keywords) : row.keywords,
    }));
    return NextResponse.json(blogs);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function generateExcerptFromContent(contentHtml: string, title: string): string {
  if (!contentHtml) {
    return `${title}. Pelajari selengkapnya di Altruva Aesthetic Clinic Jakarta.`;
  }
  const plainText = contentHtml
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (plainText.length <= 155) {
    return plainText || `${title}. Pelajari selengkapnya di Altruva Aesthetic Clinic Jakarta.`;
  }
  const cropped = plainText.substring(0, 155);
  const lastSpace = cropped.lastIndexOf(' ');
  return lastSpace > 40 ? cropped.substring(0, lastSpace).trim() + '...' : cropped.trim() + '...';
}

export async function POST(request: Request) {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await initializeDatabase();
  try {
    const { slug, title, excerpt, content, imageSrc, imageHint, date, keywords, author, reviewedBy, status } = await request.json();
    
    if (!slug || !title) {
      return NextResponse.json({ error: 'Slug and Title are required' }, { status: 400 });
    }

    const finalExcerpt = excerpt?.trim() ? excerpt.trim() : generateExcerptFromContent(content || '', title);
    const finalStatus = status === 'draft' ? 'draft' : 'published';

    await pool.query(
      `INSERT INTO blogs (slug, title, excerpt, content, image_src, image_hint, date, keywords, author, reviewed_by, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        slug,
        title,
        finalExcerpt,
        content || '',
        imageSrc || '',
        imageHint || '',
        date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        JSON.stringify(keywords || []),
        author || 'Altruva Aesthetic Clinic',
        reviewedBy || 'dr. Olivia Aldisa',
        finalStatus,
      ]
    );

    try {
      revalidatePath('/blog');
      revalidatePath(`/blog/${slug}`);
      revalidatePath('/blog/[slug]', 'page');
      revalidatePath('/sitemap.xml');
    } catch (e) {
      console.error('Failed to revalidate cache:', e);
    }

    return NextResponse.json({ success: true, message: 'Blog created successfully' });
  } catch (error: any) {
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: 'A blog post with this slug already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
