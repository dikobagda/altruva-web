import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { services } from '@/lib/data/services';
import { buildServiceSummary, buildServiceFaqs, truncateMetaDescription } from '@/lib/treatment-seo';
import type { Metadata } from 'next';
import JsonLd from '@/components/shared/JsonLd';
import ServiceDetailClient from '@/components/treatments/ServiceDetailClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: 'Treatment Not Found | Altruva Aesthetic Clinic',
    };
  }

  // SEO-rich summary combining short description + protocol details
  const summary = buildServiceSummary(service);
  const rawDesc = summary.en || service.description.en || service.description.id;
  const metaDesc = truncateMetaDescription(rawDesc, 155);

  const titleString = `${service.title} | Altruva Aesthetic Clinic Jakarta`;

  return {
    title: {
      absolute: titleString,
    },
    description: metaDesc,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} jakarta`,
      `${service.title.toLowerCase()} harga`,
      `treatment ${service.title.toLowerCase()}`,
      service.category.toLowerCase(),
      service.group.toLowerCase(),
      'altruva aesthetic clinic',
      'regenerative aesthetics jakarta',
      'treatment kecantikan premium jakarta',
      'klinik estetika jakarta selatan',
      'dr olivia aldisa'
    ],
    alternates: {
      canonical: `https://altruva.co.id/treatments/${service.id}`,
      languages: {
        'id-ID': `https://altruva.co.id/treatments/${service.id}`,
        'en-US': `https://altruva.co.id/treatments/${service.id}`,
      },
    },
    openGraph: {
      title: titleString,
      description: metaDesc,
      url: `https://altruva.co.id/treatments/${service.id}`,
      siteName: 'Altruva Aesthetic Clinic',
      images: [
        {
          url: service.imageSrc ? `https://altruva.co.id${service.imageSrc}` : 'https://altruva.co.id/images/herobackground-new.png',
          width: 1200,
          height: 630,
          alt: `${service.title} - Altruva Aesthetic Clinic Jakarta`,
        },
      ],
      locale: 'id_ID',
      alternateLocale: ['en_US'],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: titleString,
      description: metaDesc,
      images: [service.imageSrc ? `https://altruva.co.id${service.imageSrc}` : 'https://altruva.co.id/images/herobackground-new.png'],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  // Derive body location
  const bodyLocation = service.category === 'Hair'
    ? 'Scalp / Hair'
    : service.category === 'Body'
    ? 'Body'
    : 'Face / Neck';

  const serviceSchema = {
    '@type': ['Service', 'MedicalProcedure'],
    '@id': `https://altruva.co.id/treatments/${service.id}#service`,
    name: service.title,
    description: service.description.en,
    procedureType: 'https://schema.org/NonSurgicalProcedure',
    bodyLocation,
    relevantSpecialty: [
      'https://schema.org/AestheticMedicine',
      'https://schema.org/Dermatology'
    ],
    provider: {
      '@type': 'MedicalBusiness',
      '@id': 'https://altruva.co.id/#clinic',
      name: 'Altruva Aesthetic Clinic',
      url: 'https://altruva.co.id',
    },
    performer: {
      '@type': 'Person',
      '@id': 'https://altruva.co.id/about/meet-dr-olivia-aldisa#person',
      name: 'dr. Olivia Aldisa',
      jobTitle: 'Aesthetic Doctor & Clinic Founder',
      url: 'https://altruva.co.id/about/meet-dr-olivia-aldisa',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IDR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'IDR',
        description: service.price || 'Price on consultation',
      },
      availability: 'https://schema.org/InStock',
      url: `https://altruva.co.id/treatments/${service.id}`,
      validFrom: '2026-01-01',
    },
    image: service.imageSrc ? `https://altruva.co.id${service.imageSrc}` : undefined,
    category: service.category,
    areaServed: 'Jakarta',
  };

  const howToSchema = service.mechanism && service.mechanism.length
    ? {
        '@type': 'HowTo',
        '@id': `https://altruva.co.id/treatments/${service.id}#howto`,
        name: `How ${service.title} Works`,
        description: service.description.en,
        step: service.mechanism.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.title.en,
          text: step.description.en.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(),
        })),
      }
    : undefined;

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
        name: 'Treatments',
        item: 'https://altruva.co.id/treatments',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://altruva.co.id/treatments/${service.id}`,
      },
    ],
  };

  const faqs = buildServiceFaqs(service);
  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.en,
      },
    })),
  };

  const schemas: Record<string, any>[] = [serviceSchema, breadcrumbSchema, faqSchema];
  if (howToSchema) schemas.push(howToSchema);

  return (
    <>
      <JsonLd schema={schemas} />
      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetailClient slug={slug} />
      </Suspense>
    </>
  );
}
