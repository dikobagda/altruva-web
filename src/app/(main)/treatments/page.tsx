import type { Metadata } from 'next';
import JsonLd from '@/components/shared/JsonLd';
import { services } from '@/lib/data/services';
import TreatmentsClientList from '@/components/treatments/TreatmentsClientList';

export const metadata: Metadata = {
  title: 'Perawatan Estetika & Regeneratif Jakarta | Altruva Clinic',
  description: 'Daftar lengkap perawatan estetika non-invasif premium di Jakarta Selatan: Sofwave, EmSculpt Neo, Gouri, Exion, dan protokol regeneratif oleh dr. Olivia Aldisa.',
  keywords: [
    'perawatan estetika jakarta',
    'klinik estetika jakarta selatan',
    'klinik kecantikan terbaik di jakarta selatan',
    'treatment pengencangan wajah tanpa operasi',
    'sofwave jakarta',
    'emsculpt neo jakarta',
    'gouri filler jakarta',
    'biostimulator jakarta',
    'dr olivia aldisa',
    'regenerative aesthetics indonesia'
  ],
  alternates: {
    canonical: 'https://altruva.co.id/treatments',
    languages: {
      'id-ID': 'https://altruva.co.id/treatments',
      'en-US': 'https://altruva.co.id/treatments',
    },
  },
  openGraph: {
    title: 'Perawatan Estetika & Regeneratif Jakarta | Altruva Clinic',
    description: 'Daftar lengkap perawatan estetika non-invasif premium di Jakarta Selatan: Sofwave, EmSculpt Neo, Gouri, Exion, dan protokol regeneratif oleh dr. Olivia Aldisa.',
    url: 'https://altruva.co.id/treatments',
    siteName: 'Altruva Aesthetic Clinic',
    images: [
      {
        url: 'https://altruva.co.id/images/herobackground-new.png',
        width: 1200,
        height: 630,
        alt: 'Perawatan Estetika Altruva Clinic Jakarta',
      },
    ],
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perawatan Estetika & Regeneratif Jakarta | Altruva Clinic',
    description: 'Daftar lengkap perawatan estetika non-invasif premium di Jakarta Selatan bersama dr. Olivia Aldisa.',
    images: ['https://altruva.co.id/images/herobackground-new.png'],
  },
};

const itemListSchema = {
  "@type": "ItemList",
  "@id": "https://altruva.co.id/treatments#services",
  "name": "Advanced Regenerative & Aesthetic Treatments at Altruva Clinic Jakarta",
  "description": "Daftar lengkap 41+ prosedur estetika, pengencangan wajah tanpa operasi, biostimulator, dan body contouring di Altruva Clinic Jakarta.",
  "itemListElement": services.map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": service.title,
    "url": `https://altruva.co.id/treatments/${service.id}`,
    "description": service.description.id || service.description.en,
    "image": service.imageSrc ? `https://altruva.co.id${service.imageSrc}` : undefined,
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

const treatmentsFaqSchema = {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa keunggulan pendekatan estetika regeneratif di Altruva Clinic Jakarta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Altruva mengedepankan pendekatan regeneratif yang berfokus pada stimulasi kolagen alami, pembaruan seluler, dan pemetaan anatomi wajah yang harmonis tanpa operasi berlebihan, dipimpin langsung oleh dr. Olivia Aldisa dengan teknologi bersertifikat FDA dan BPOM.",
      },
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara menentukan treatment yang paling tepat untuk kebutuhan saya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Setiap pasien menjalani penilaian kulit seluler dan pemetaan anatomi mendalam bersama dokter sebelum tindakan. Protokol dirancang secara terpersonalisasi sesuai biologi unik dan sasaran estetika Anda.",
      },
    },
    {
      "@type": "Question",
      "name": "Apakah seluruh prosedur medis dilakukan langsung oleh dokter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, seluruh prosedur medis seperti injeksi, biostimulator, laser, dan teknologi energi tinggi dilakukan 100% langsung oleh dokter estetika bersertifikasi internasional.",
      },
    },
    {
      "@type": "Question",
      "name": "Apakah perawatan di Altruva memerlukan waktu pemulihan (downtime)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sebagian besar protokol Altruva bersifat non-invasif dengan downtime minimal hingga nol, memungkinkan pasien untuk segera kembali beraktivitas normal.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={[itemListSchema, breadcrumbSchema, treatmentsFaqSchema]} />
      <TreatmentsClientList />
    </>
  );
}
