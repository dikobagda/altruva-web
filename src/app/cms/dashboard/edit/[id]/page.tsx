import BlogForm from '@/components/cms/BlogForm';
import { getDbBlogBySlug } from '@/lib/api/db-blog';
import { notFound } from 'next/navigation';

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: slug } = await params;
  const blog = await getDbBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Map to BlogForm expected schema format
  const formInitialData = {
    slug: blog.id, // mapped to slug
    title: blog.title,
    excerpt: blog.excerpt,
    content: blog.content || '',
    image_src: blog.imageSrc,
    image_hint: blog.imageHint,
    date: blog.date,
    keywords: blog.keywords || [],
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-8">
      <BlogForm initialData={formInitialData} isEdit={true} />
    </div>
  );
}
