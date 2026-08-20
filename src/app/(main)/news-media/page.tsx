import type { Metadata } from 'next';
import NewsMediaContent from './NewsMediaContent';
import { pressFeatures } from '@/lib/data/news-media';
import { fetchLinkMetadata } from '@/lib/metadata-scraper';
import JsonLd from '@/components/shared/JsonLd';

export const metadata: Metadata = {
  title: 'News & Media Coverage',
  description: 'Discover what the press is saying about Altruva Aesthetic Clinic\'s regenerative treatments, technology, and philosophy of natural beauty.',
  alternates: {
    canonical: '/news-media',
  },
  openGraph: {
    url: 'https://altruva.co.id/news-media',
  },
};

export default async function NewsAndMediaPage() {
  // Pre-resolve metadata for all press features on the server side
  const enrichedFeatures = await Promise.all(
    pressFeatures.map(async (feature) => {
      const meta = await fetchLinkMetadata(feature.link);
      return {
        ...feature,
        thumbnail: meta.image || null,
        excerpt: meta.description || null,
      };
    })
  );

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://altruva.co.id",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "News & Media",
        "item": "https://altruva.co.id/news-media",
      },
    ],
  };

  const collectionPageSchema = {
    "@type": "CollectionPage",
    "@id": "https://altruva.co.id/news-media#collection",
    "url": "https://altruva.co.id/news-media",
    "name": "Altruva News & Media Coverage",
    "description": "Press features, media coverage, and clinical announcements regarding Altruva Aesthetic Clinic.",
    "about": {
      "@type": "MedicalBusiness",
      "name": "Altruva Aesthetic Clinic",
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": enrichedFeatures.length,
      "itemListElement": enrichedFeatures.map((feature, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "NewsArticle",
          "headline": feature.title,
          "url": `https://altruva.co.id/news-media/${feature.slug}`,
          "datePublished": feature.date,
          "publisher": {
            "@type": "Organization",
            "name": feature.publication,
          },
          "image": feature.thumbnail || undefined,
          "description": feature.excerpt || undefined,
        }
      }))
    }
  };

  return (
    <>
      <JsonLd schema={[breadcrumbSchema, collectionPageSchema]} />
      <NewsMediaContent initialFeatures={enrichedFeatures} />
    </>
  );
}
