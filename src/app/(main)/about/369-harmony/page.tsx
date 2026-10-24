import type { Metadata } from 'next';
import Harmony369Content from './Harmony369Content';

export const metadata: Metadata = {
  title: 'The 369 Harmony Approach™ | Altruva Aesthetic Clinic Jakarta',
  description:
    'The Altruva 369 Harmony Approach™ is an intelligent, year-round regenerative beauty roadmap designed by dr. Olivia Aldisa to honor cellular cycles for natural, lasting rejuvenation.',
  alternates: {
    canonical: '/about/369-harmony',
  },
  openGraph: {
    title: 'The 369 Harmony Approach™ | Altruva Aesthetic Clinic Jakarta',
    description:
      'A structured, compounding annual aesthetic roadmap honoring biological collagen cycles: Phase 3 Foundation, Phase 6 Harmonization, and Phase 9-12 Structural Elevation.',
    url: 'https://altruva.co.id/about/369-harmony',
    siteName: 'Altruva Aesthetic Clinic',
    images: [
      {
        url: 'https://altruva.co.id/images/369.webp',
        width: 1080,
        height: 1350,
        alt: 'The Altruva 369 Harmony Approach Clinical Framework',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function Harmony369Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is an annual roadmap better than booking one-off treatments when needed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cellular collagen production and extracellular matrix turnover follow biological cycles of 3, 6, and 9 to 12 months. When treatments are performed sporadically without a strategic framework, results plateau and patients often over-treat one area while neglecting foundation health. The 369 Harmony Approach paces interventions intelligently, maximizing longevity while reducing unnecessary spending.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the 369 Harmony plan be customized if I already had treatments elsewhere?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely. Every patient begins with our Remee™ 3D Multi-Spectral Skin Scan and a comprehensive consultation with our doctor. If you have existing fillers, thread lifts, or recent laser sessions, we map your current tissue anatomy and tailor the 369 phases to harmoniously complement and safeguard your previous results.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I need to travel or miss a scheduled month?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our membership plans are built with patient flexibility in mind. Scheduled sessions within each phase can be adjusted across your annual calendar with your dedicated doctor concierge, ensuring you never forfeit sessions due to busy travel schedules.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are flexible payment options available for the annual membership plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We provide transparent upfront prepay options that offer up to 30% savings compared to à la carte pricing, as well as 0% installment plans via major credit card partners (BCA, Mandiri, CIMB) for up to 12 months.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://altruva.co.id',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://altruva.co.id/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '369 Harmony Approach™',
        item: 'https://altruva.co.id/about/369-harmony',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Harmony369Content />
    </>
  );
}
