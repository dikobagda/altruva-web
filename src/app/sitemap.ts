import { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { getDbBlogs } from '@/lib/api/db-blog';
import { beautyJournals } from '@/lib/data/beauty-journal';

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://altruva.co.id';

  // 1. Static Routes
  const staticPaths = [
    '',
    '/about',
    '/about/369-harmony',
    '/about/meet-dr-olivia-aldisa',
    '/about/our-devices',
    '/beauty-journal',
    '/book-appointment',
    '/contact',
    '/faq',
    '/blog',
    '/news-media',
    '/our-clinic',
    '/treatments',
    '/skin-analysis',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic Services Routes
  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/treatments/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 3. Dynamic Blog Routes
  const blogsList = await getDbBlogs();
  const insightEntries: MetadataRoute.Sitemap = blogsList.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(blog.date || new Date()),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // 4. Dynamic Beauty Journal Routes
  const beautyJournalEntries: MetadataRoute.Sitemap = beautyJournals
    .filter((journal) => journal.slug) // Only pages that have an online reading slug
    .map((journal) => ({
      url: `${baseUrl}/beauty-journal/${journal.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    }));

  // 5. LLM / AI Readiness Files (llms.txt convention)
  const aiEntries: MetadataRoute.Sitemap = [
    `${baseUrl}/llms.txt`,
    `${baseUrl}/llms-full.txt`,
  ].map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.3,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...insightEntries,
    ...beautyJournalEntries,
    ...aiEntries,
  ];
}
