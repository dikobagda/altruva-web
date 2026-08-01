import { notFound } from 'next/navigation';
import { services } from '@/lib/data/services';
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
      title: 'Treatment Not Found',
    };
  }

  // Fallback to English description for SEO parser if ID description is missing
  const desc = service.description.en || service.description.id;

  return {
    title: `${service.title}`,
    description: desc.length > 155 ? desc.substring(0, 152) + '...' : desc,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} jakarta`,
      service.category.toLowerCase(),
      service.group.toLowerCase(),
      'altruva aesthetic clinic',
      'regenerative aesthetics jakarta',
      'treatment kecantikan premium'
    ],
    alternates: {
      canonical: `/treatments/${service.id}`,
    },
    openGraph: {
      title: `${service.title} | Altruva Aesthetic Clinic`,
      description: desc,
      url: `https://altruva.co.id/treatments/${service.id}`,
      siteName: 'Altruva Aesthetic Clinic',
      images: [
        {
          url: service.imageSrc ? `https://altruva.co.id${service.imageSrc}` : 'https://altruva.co.id/images/herobackground-new.png',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: 'id_ID',
      type: 'article',
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const numericPrice = !service.price || service.price === 'Price on consultation'
    ? undefined
    : parseFloat(service.price.replace(/[^\d.]/g, ''));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'MedicalProcedure'],
    '@id': `https://altruva.co.id/treatments/${service.id}#service`,
    name: service.title,
    description: service.description.en,
    provider: {
      '@type': 'MedicalBusiness',
      '@id': 'https://altruva.co.id/#clinic',
      name: 'Altruva Aesthetic Clinic',
      url: 'https://altruva.co.id',
    },
    image: service.imageSrc ? `https://altruva.co.id${service.imageSrc}` : undefined,
    category: service.category,
    areaServed: 'Jakarta',
    ...(numericPrice
      ? {
          offers: {
            '@type': 'Offer',
            price: numericPrice,
            priceCurrency: 'IDR',
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
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

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema]} />
      <ServiceDetailClient slug={slug} />
    </>
  );
}
