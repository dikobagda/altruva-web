import { notFound } from 'next/navigation';
import { services } from '@/lib/data/services';
import { buildServiceSummary, buildServiceFaqs } from '@/lib/treatment-seo';
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

  // SEO-rich summary combining short description + protocol details
  const summary = buildServiceSummary(service);
  const desc = summary.en || service.description.en || service.description.id;

  return {
    title: { absolute: service.title },
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

  const serviceSchema = {
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
      <ServiceDetailClient slug={slug} />
    </>
  );
}
