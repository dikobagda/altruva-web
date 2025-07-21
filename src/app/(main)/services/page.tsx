

import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import TreatmentCard from '@/components/services/TreatmentCard';
import { services } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Our Treatments - Altruva',
  description: 'Explore the wide range of aesthetic treatments offered at Altruva clinic.',
};

export default function ServicesPage() {
  return (
    <SectionWrapper>
      <PageTitle title="Our Treatments" subtitle="Discover our comprehensive range of regenerative and aesthetic treatments, tailored to your unique needs." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <TreatmentCard key={service.id} service={service} />
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
