
import type { Metadata } from 'next';
import JsonLd from '@/components/shared/JsonLd';
import HomePage from '@/components/home/HomePage';
import { faqCategories } from '@/lib/data/faqs';

const siteUrl = 'https://altruva.co.id';

export const metadata: Metadata = {
  title: { absolute: 'Altruva Aesthetic Clinic - Regenerative Contouring in Jakarta' },
  description:
    'Klinik estetika terbaik di Jakarta Selatan untuk wajah kencang alami tanpa operasi. Sofwave, EmSculpt Neo, Gouri, dan regenerative treatment dr. Olivia Aldisa.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Altruva Aesthetic Clinic - Regenerative Contouring in Jakarta',
    description:
      'Klinik estetika & medis terbaik di Jakarta dengan perawatan regeneratif non-invasif (Sofwave, EmSculpt Neo, Gouri). Hasil nyata, natural, tanpa downtime.',
    url: siteUrl,
    siteName: 'Altruva Aesthetic Clinic',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/herobackground-new.png`,
        width: 1200,
        height: 630,
        alt: 'Altruva Aesthetic Clinic - Regenerative Contouring in Jakarta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altruva Aesthetic Clinic - Regenerative Contouring in Jakarta',
    description:
      'Klinik estetika & medis terbaik di Jakarta dengan perawatan regeneratif non-invasif. Hasil nyata, natural, tanpa downtime.',
    images: [`${siteUrl}/images/herobackground-new.png`],
  },
};

const faqSchema = {
  '@type': 'FAQPage',
  '@id': 'https://altruva.co.id/#faqpage',
  mainEntity: faqCategories.flatMap((category) =>
    category.items.map((faq) => ({
      '@type': 'Question',
      name: faq.question.id,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.id,
      },
    }))
  ),
};

export default function Page() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <HomePage />
    </>
  );
}

