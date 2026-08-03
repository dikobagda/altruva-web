
import type { Metadata } from 'next';
import JsonLd from '@/components/shared/JsonLd';
import FAQContent from './FAQContent';
import { faqCategories } from '@/lib/data/faqs';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description:
    'Pertanyaan yang sering diajukan tentang Altruva Aesthetic Clinic di Jakarta Selatan: pendekatan regenerative contouring, treatment non-surgical, lokasi, konsultasi, dan cara membuat appointment.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ Altruva Aesthetic Clinic',
    description:
      'Jawaban lengkap tentang Altruva Aesthetic Clinic: regenerative contouring, treatment non-surgical, lokasi Kebayoran Baru, konsultasi, dan appointment.',
    url: 'https://altruva.co.id/faq',
    siteName: 'Altruva Aesthetic Clinic',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://altruva.co.id/images/herobackground-new.png',
        width: 1200,
        height: 630,
        alt: 'Altruva Aesthetic Clinic FAQ',
      },
    ],
  },
};

const faqSchema = {
  '@type': 'FAQPage',
  '@id': 'https://altruva.co.id/faq#faqpage',
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

const breadcrumbSchema = {
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
      name: 'FAQ',
      item: 'https://altruva.co.id/faq',
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <JsonLd schema={[faqSchema, breadcrumbSchema]} />
      <FAQContent />
    </>
  );
}
