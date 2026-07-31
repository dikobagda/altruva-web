import pool, { initializeDatabase } from '../db';
import type { Blog } from '../data/blog';

export async function getDbBlogs(): Promise<Blog[]> {
  await initializeDatabase();
  try {
    const [rows]: any = await pool.query(
      'SELECT slug, title, excerpt, image_src, image_hint, date, keywords, author, reviewed_by, updated_at FROM blogs ORDER BY id DESC'
    );
    return rows.map((row: any) => ({
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
  } catch (error) {
    console.error('Error fetching blogs from database:', error);
    return [];
  }
}

export async function getDbBlogBySlug(slug: string): Promise<Blog | null> {
  await initializeDatabase();
  try {
    const [rows]: any = await pool.query(
      'SELECT slug, title, excerpt, content, image_src, image_hint, date, keywords, author, reviewed_by, updated_at FROM blogs WHERE slug = ?',
      [slug]
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return {
      id: row.slug,
      title: row.title,
      excerpt: row.excerpt,
      content: row.content,
      imageSrc: row.image_src,
      imageHint: row.image_hint,
      date: row.date,
      href: `/blog/${row.slug}`,
      keywords: typeof row.keywords === 'string' ? JSON.parse(row.keywords) : (Array.isArray(row.keywords) ? row.keywords : []),
      author: row.author,
      reviewedBy: row.reviewed_by,
      updatedAt: row.updated_at,
    };
  } catch (error) {
    console.error(`Error fetching blog by slug ${slug} from database:`, error);
    return null;
  }
}
