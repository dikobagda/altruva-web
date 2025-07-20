
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/constants';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import PageTitle from '@/components/shared/PageTitle';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - Altruva Services`,
    description: service.longDescription || service.description,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  // Placeholder for benefits, in a real app this would come from your data source
  const benefits = [
    'Customized treatment plan',
    'Utilizes state-of-the-art technology',
    'Performed by certified professionals',
    'Focus on natural-looking results',
  ];

  return (
    <>
      <PageTitle title={service.title} />

      <SectionWrapper className="pt-0">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                className="object-cover"
                data-ai-hint={service.imageHint}
                priority
              />
            </div>
             <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">Service Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <p className="text-lg text-foreground/80">
                  {service.longDescription || service.description}
                </p>
                <div>
                    <p className="text-3xl font-bold text-accent">{service.price}</p>
                    <p className="text-sm text-muted-foreground">Price per session</p>
                </div>
                <Button asChild size="lg" className="w-full font-semibold">
                  <Link href="/book-appointment">Book This Service <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-serif text-2xl text-primary">Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                            <span className="text-lg text-foreground/80">{benefit}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-secondary/50 border-primary/20">
              <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Is This Right For You?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <p className="text-lg text-foreground/80">
                    This treatment is ideal for individuals looking to address concerns such as {' '}
                    <span className="font-semibold text-primary">{service.description.toLowerCase()}</span>.
                    A personalized consultation is the best way to determine if this service aligns with your aesthetic goals.
                  </p>
                   <Button asChild variant="default">
                      <Link href="/book-appointment">Schedule a Consultation</Link>
                    </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
