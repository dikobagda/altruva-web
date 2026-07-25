import { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { insights } from '@/lib/data/insights';
import { beautyJournals } from '@/lib/data/beauty-journal';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://altruva.co.id';

  // 1. Static Routes
  const staticPaths = [
    '',
    '/about-us',
    '/about-us/369-harmony',
    '/about-us/meet-dr-olivia-aldisa',
    '/about-us/our-devices',
    '/beauty-journal',
    '/book-appointment',
    '/contact',
    '/facial',
    '/gallery',
    '/insights',
    '/news-media',
    '/our-clinic',
    '/services',
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
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 3. Dynamic Insights Routes
  const insightEntries: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.id}`,
    lastModified: new Date(insight.date || new Date()),
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

  return [
    ...staticEntries,
    ...serviceEntries,
    ...insightEntries,
    ...beautyJournalEntries,
  ];
}
