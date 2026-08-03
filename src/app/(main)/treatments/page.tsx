import type { Metadata } from 'next';
import JsonLd from '@/components/shared/JsonLd';
import { services } from '@/lib/data/services';
import TreatmentsClientList from '@/components/treatments/TreatmentsClientList';

export const metadata: Metadata = {
  title: 'Regenerative & Aesthetic Treatments',
  description: 'Explore Altruva Aesthetic Clinic\'s non-invasive treatments — Sofwave, EmSculpt Neo, Gouri, and Exion — for expert skin rejuvenation in Jakarta.',
  keywords: [
    'perawatan estetika jakarta',
    'aesthetic treatments indonesia',
    'sofwave jakarta',
    'emsculpt neo jakarta',
    'gouri filler jakarta',
    'regenerative aesthetics',
    'klinik kecantikan jakarta selatan'
  ],
  alternates: {
    canonical: '/treatments',
  },
  openGraph: {
    title: 'Aesthetic & Regenerative Treatments | Altruva Clinic Jakarta',
    description: 'Explore Altruva Aesthetic Clinic\'s non-invasive treatments — Sofwave, EmSculpt Neo, Gouri, and Exion.',
    url: 'https://altruva.co.id/treatments',
    siteName: 'Altruva Aesthetic Clinic',
    images: [
      {
        url: 'https://altruva.co.id/images/herobackground-new.png',
        width: 1200,
        height: 630,
        alt: 'Altruva Aesthetic Clinic Treatments',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

const itemListSchema = {
  "@type": "ItemList",
  "@id": "https://altruva.co.id/treatments#services",
  "name": "Advanced Regenerative & Aesthetic Treatments",
  "itemListElement": services.map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": service.title,
    "url": `https://altruva.co.id/treatments/${service.id}`,
  })),
};

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
      "name": "Treatments",
      "item": "https://altruva.co.id/treatments",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={[itemListSchema, breadcrumbSchema]} />
      <TreatmentsClientList />
    </>
  );
}
