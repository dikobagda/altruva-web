import type { Metadata } from 'next';
import AboutUsContent from './AboutUsContent';

export const metadata: Metadata = {
  title: 'About Altruva Aesthetic Clinic | Regenerative Aesthetics Jakarta',
  description:
    'Discover Altruva Aesthetic Clinic Jakarta—founded by dr. Olivia Aldisa, MSc (UK). Dedicated to physician-led regenerative medicine, natural profiloplasty, and FDA-cleared technologies.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Altruva Aesthetic Clinic | Regenerative Aesthetics Jakarta',
    description:
      'Where regenerative medicine meets refined facial harmony. Discover our clinical philosophy, doctor-led precision, and natural results.',
    url: 'https://altruva.co.id/about',
    siteName: 'Altruva Aesthetic Clinic',
    images: [
      {
        url: 'https://altruva.co.id/images/frontclinic.webp',
        width: 1200,
        height: 630,
        alt: 'Altruva Aesthetic Clinic Jakarta Front View',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function AboutUsPage() {
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
    ],
  };

  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Altruva Aesthetic Clinic',
    url: 'https://altruva.co.id/about',
    logo: 'https://altruva.co.id/images/logoaltruvanew.webp',
    image: 'https://altruva.co.id/images/frontclinic.webp',
    description:
      'Premier aesthetic clinic in Jakarta specializing in physician-led regenerative aesthetics, collagen stimulation, and natural non-surgical profiloplasty.',
    founder: {
      '@type': 'Person',
      name: 'dr. Olivia Aldisa',
      honorificSuffix: 'MSc Aesthetic Med. (UK)',
      jobTitle: 'Aesthetic Physician & Medical Director',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Bumi No. 34, Kebayoran Baru',
      addressLocality: 'Jakarta Selatan',
      addressRegion: 'DKI Jakarta',
      postalCode: '12120',
      addressCountry: 'ID',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <AboutUsContent />
    </>
  );
}
