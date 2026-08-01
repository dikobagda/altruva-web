import type { Metadata } from 'next';
import TreatmentsClientList from '@/components/treatments/TreatmentsClientList';

export const metadata: Metadata = {
  title: 'Advanced Regenerative & Aesthetic Treatments | Altruva Clinic Jakarta',
  description: 'Explore Altruva Aesthetic Clinic range of advanced non-invasive procedures including Sofwave, EmSculpt Neo, Gouri, and Exion. Expert skin rejuvenations in Jakarta.',
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
    description: 'Explore Altruva Aesthetic Clinic range of advanced non-invasive procedures including Sofwave, EmSculpt Neo, Gouri, and Exion.',
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

export default function ServicesPage() {
  return <TreatmentsClientList />;
}
