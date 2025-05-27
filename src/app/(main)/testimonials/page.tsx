
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import { testimonials } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Client Testimonials - Radiant Renewal',
  description: 'Read what our clients say about their experiences at Radiant Renewal.',
};

export default function TestimonialsPage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="Client Testimonials"
        subtitle="We are proud of the positive impact we've made. Hear directly from our valued clients about their experiences and transformations at Radiant Renewal."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
       <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/book-appointment">Ready for your transformation?</Link>
          </Button>
        </div>
    </SectionWrapper>
  );
}
