
import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';

const siteUrl = 'https://altruva.co.id';

export const metadata: Metadata = {
  title: 'Altruva Aesthetic Clinic - Regenerative Contouring in Jakarta',
  description:
    'Klinik estetika premium di Jakarta Selatan untuk perawatan wajah kencang alami tanpa operasi. Sofwave, EmSculpt Neo, Gouri & regenerative treatment oleh dr. Olivia Aldisa.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Altruva Aesthetic Clinic - Regenerative Contouring in Jakarta',
    description:
      'Klinik estetika & medis di Jakarta dengan perawatan regeneratif non-invasif (Sofwave, EmSculpt Neo, Gouri). Hasil nyata, natural, tanpa downtime.',
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
      'Klinik estetika & medis di Jakarta dengan perawatan regeneratif non-invasif. Hasil nyata, natural, tanpa downtime.',
    images: [`${siteUrl}/images/herobackground-new.png`],
  },
};

export default function Page() {
  return <HomePage />;
}
