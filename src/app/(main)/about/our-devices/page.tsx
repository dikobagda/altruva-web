import type { Metadata } from 'next';
import OurDevicesContent from './OurDevicesContent';

export const metadata: Metadata = {
  title: 'Our Technology & Medical Devices | Altruva Aesthetic Clinic Jakarta',
  description:
    'Discover world-class, FDA-cleared aesthetic technologies at Altruva Aesthetic Clinic Jakarta, including Sofwave™ SUPERB ultrasound, Emsculpt Neo® RF+HIFEM, BTL Exion™, and Remee™ 3D skin analysis.',
  alternates: {
    canonical: '/about/our-devices',
  },
  openGraph: {
    title: 'Our Technology & Medical Devices | Altruva Aesthetic Clinic Jakarta',
    description:
      'Explore FDA-cleared and clinically proven medical devices at Altruva Jakarta: Sofwave™, Emsculpt Neo®, Exion™, and Remee™ 3D.',
    url: 'https://altruva.co.id/about/our-devices',
    siteName: 'Altruva Aesthetic Clinic',
    images: [
      {
        url: 'https://altruva.co.id/images/devices/sofwave.webp',
        width: 1200,
        height: 630,
        alt: 'Altruva Medical Aesthetic Devices - Sofwave, Emsculpt Neo, Exion',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function OurDevicesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are the treatments using these devices painful?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our devices represent the newest generation of non-invasive aesthetic engineering. Sofwave utilizes integrated Sofcool™ active cooling, Emsculpt Neo feels like an intense muscle contraction with a warm sensation, and Exion produces a comfortable soothing warmth.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know which device is suitable for my concern?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every patient journey at Altruva starts with our Remee™ 3D Multi-Spectral Skin Scan and a personalized consultation with our aesthetic doctors to assess your tissue and determine the exact protocol tailored to your anatomy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the machines at Altruva authentic and authorized?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100%. Altruva Aesthetic Clinic only operates genuine, officially authorized, FDA-cleared and CE-certified medical platforms supplied directly by official distributors.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can energy devices be combined with injectables like GOURI or polynucleotides?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Combining energy devices (like Sofwave or Exion) with regenerative bio-stimulators is the cornerstone of Altruva’s regenerative contouring approach for compounded, long-lasting natural results.',
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
        name: 'Our Devices',
        item: 'https://altruva.co.id/about/our-devices',
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
      <OurDevicesContent />
    </>
  );
}
