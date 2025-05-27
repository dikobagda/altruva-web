
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ServiceCard from '@/components/services/ServiceCard';
import { services } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services - Altruva',
  description: 'Explore the wide range of aesthetic services offered at Altruva clinic.',
};

export default function ServicesPage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="Our Aesthetic Services"
        subtitle="Discover a comprehensive range of treatments designed to rejuvenate, enhance, and renew. Our expert team is dedicated to providing personalized care and achieving beautiful, natural-looking results."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/book-appointment">Schedule Your Consultation</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
