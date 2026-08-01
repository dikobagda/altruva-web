import { notFound } from 'next/navigation';
import { services } from '@/lib/data/services';
import type { Metadata } from 'next';
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
    title: `${service.title} - Aesthetic Treatments`,
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

  return <ServiceDetailClient slug={slug} />;
}
