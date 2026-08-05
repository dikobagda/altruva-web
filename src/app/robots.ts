import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://altruva.co.id';

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/static/',
          '/_next/image',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/cms/',
          '/downloads/',
        ],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
