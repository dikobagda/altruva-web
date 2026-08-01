import { NextResponse } from 'next/server';
import pool, { initializeDatabase } from '@/lib/db';

export async function GET() {
  await initializeDatabase();
  try {
    // Hanya ambil blog yang memiliki status 'published' untuk publik
    const [rows]: any = await pool.query(
      "SELECT slug, title, excerpt, image_src, image_hint, date, keywords, author, reviewed_by, updated_at FROM blogs WHERE status = 'published' ORDER BY id DESC"
    );
    
    const blogs = rows.map((row: any) => ({
      id: row.slug,
      title: row.title,
      excerpt: row.excerpt,
      imageSrc: row.image_src,
      imageHint: row.image_hint,
      date: row.date,
      href: `/blog/${row.slug}`,
      keywords: typeof row.keywords === 'string' ? JSON.parse(row.keywords) : (Array.isArray(row.keywords) ? row.keywords : []),
      author: row.author,
      reviewedBy: row.reviewed_by,
      updatedAt: row.updated_at,
    }));

    return NextResponse.json(blogs);
  } catch (error: any) {
    console.error('Public blogs api error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
