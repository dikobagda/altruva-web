
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/constants';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Microscope, Info, BookOpen, Layers, Star, Dna } from 'lucide-react';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    return {
      title: 'Treatment Not Found',
    };
  }

  return {
    title: `${service.title} - Altruva Treatments`,
    description: service.longDescription || service.description,
  };
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode; Icon: React.ElementType, className?: string }> = ({ title, children, Icon, className }) => (
  <Card className={className}>
    <CardHeader className="flex flex-row items-center space-x-3">
      <Icon className="h-8 w-8 text-accent" />
      <CardTitle className="font-serif text-2xl text-primary m-0">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);


export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SectionWrapper className="bg-secondary/30">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-accent font-semibold mb-2">{service.group}</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">{service.title}</h1>
            {service.subtitle && <p className="text-xl md:text-2xl text-foreground/80">{service.subtitle}</p>}
          </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Content - Left/Top Column */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-0">
                 <div className="relative aspect-video rounded-t-lg overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover"
                      data-ai-hint={service.imageHint}
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-2xl text-primary mb-4">About This Treatment</h2>
                    <div className="prose prose-lg max-w-none text-foreground/80" dangerouslySetInnerHTML={{ __html: service.longDescription || service.description }} />
                  </div>
              </CardContent>
            </Card>

            {service.whatIsIt && (
              <DetailSection title={service.whatIsIt.title} Icon={Microscope}>
                <div className="prose max-w-none text-foreground/80" dangerouslySetInnerHTML={{ __html: service.whatIsIt.description }} />
              </DetailSection>
            )}

            {service.mechanism && (
              <DetailSection title="Mechanism of Action" Icon={Dna}>
                <ul className="space-y-4">
                  {service.mechanism.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary">{item.title}</h4>
                        <p className="text-foreground/70">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </DetailSection>
            )}

             {service.benefits && (
              <DetailSection title="Key Benefits" Icon={Star}>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </DetailSection>
            )}

            {service.howItDiffers && (
               <DetailSection title="How It Differs" Icon={Layers}>
                 <p className="text-foreground/80">{service.howItDiffers}</p>
               </DetailSection>
            )}

            {service.whyLoveIt && (
               <DetailSection title="Why Patients Love It" Icon={Info}>
                 <ul className="space-y-2">
                  {service.whyLoveIt.map((item, index) => (
                     <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-3 mt-1 shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                 </ul>
               </DetailSection>
            )}
          </div>

          {/* Sidebar - Right/Bottom Column */}
          <aside className="lg:col-span-1 space-y-8 sticky top-24">
            <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Treatment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                    {service.price.toLowerCase() !== 'price on consultation' ? (
                        <>
                            <p className="text-sm text-muted-foreground">start from</p>
                            <p className="text-3xl font-bold text-accent">{service.price}</p>
                        </>
                        ) : (
                        <p className="text-xl font-bold text-accent">{service.price}</p>
                    )}
                    </div>
                    <Button asChild size="lg" className="w-full font-semibold">
                      <Link href="/book-appointment">Book This Treatment <ArrowRight className="ml-2" /></Link>
                    </Button>
                </CardContent>
            </Card>
            
            {service.protocol && (
               <DetailSection title="Protocol Overview" Icon={BookOpen}>
                <ul className="space-y-3">
                  {service.protocol.map((item, index) => (
                    <li key={index} className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-primary/90">{item.label}:</span>
                      <span className="text-right text-foreground/80">{item.value}</span>
                    </li>
                  ))}
                </ul>
               </DetailSection>
            )}

          </aside>

        </div>
      </SectionWrapper>
    </>
  );
}
