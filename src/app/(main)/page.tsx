
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { services, testimonials, aiAnalysisFeatures } from '@/lib/constants';
import { ArrowRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import PageTitle from '@/components/shared/PageTitle';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

type ServiceCategory = 'Prejuvenation' | 'Rejuvenation';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | null>(null);

  const filteredServices = services.filter(service => service.category === activeCategory);

  const categoryDetails = {
    Prejuvenation: {
      title: '< 40 years old',
      subtitle: 'Prejuvenation (Preserve & Enhance)',
      servicesTitle: 'Prejuvenation Services',
    },
    Rejuvenation: {
      title: '> 40 years old',
      subtitle: 'Rejuvenation (Restore & Lift)',
      servicesTitle: 'Rejuvenation Services',
    },
  };

  const groupedServices = filteredServices.reduce((acc, service) => {
    const groupName = service.group;
    if (!acc[groupName]) {
      acc[groupName] = {
        description: service.groupDescription,
        subgroups: {},
      };
    }
    
    const subgroupName = service.subgroup;
    if (!acc[groupName].subgroups[subgroupName]) {
      acc[groupName].subgroups[subgroupName] = [];
    }
    
    acc[groupName].subgroups[subgroupName].push(service);
    return acc;
  }, {} as Record<string, { description: string; subgroups: Record<string, typeof services> }>);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-28 md:pt-32 pb-20 md:pb-32 min-h-[50vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/herobackground.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" data-ai-hint="dark overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:pr-8 leading-7">
              <h1 className="font-sans text-3xl sm:text-5xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Altruva – Jakarta’s 1st Regenerative Contouring Clinic
              </h1>
              <h4 className="font-sans text-xl sm:text-xl md:text-xl font-bold text-primary mb-8 leading-tight">Your Beauty, Engineered for the Future</h4>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white font-semibold text-base px-10 py-6 rounded-full transition-colors duration-200"
              >
                <Link href="/book-appointment">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Description Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-foreground/80">
          Welcome to Altruva, where science and artistry converge to redefine beauty. As Jakarta’s first Regenerative Contouring Clinic, we go beyond aesthetics—merging cutting-edge skin-geneering technology, bio-stimulators, and advanced non-surgical contouring to restore, refine, and future-proof your skin.
          </p>
        </div>
      </SectionWrapper>
      
      {/* Age-based Service Selector */}
      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Your Regenerative Journey</h2>
          <p className="text-lg text-foreground/80 mb-8">Select your age group to discover tailored treatments that meet your unique needs.</p>
          <div className="flex justify-center gap-4 md:gap-8">
            {(Object.keys(categoryDetails) as ServiceCategory[]).map(key => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={cn(
                  "flex-1 max-w-sm p-6 rounded-lg border-2 transition-all duration-300",
                  activeCategory === key ? 'bg-primary border-primary text-primary-foreground shadow-xl' : 'bg-card border-border hover:border-primary/50 hover:bg-card/90'
                )}
              >
                <h3 className="text-xl md:text-2xl font-bold font-serif">{categoryDetails[key].title}</h3>
                <p className={cn("text-sm md:text-base", activeCategory === key ? 'text-primary-foreground/90' : 'text-foreground/70')}>{categoryDetails[key].subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Overview Section */}
      {activeCategory && (
        <SectionWrapper id="services-overview">
          <PageTitle 
            title={categoryDetails[activeCategory].servicesTitle}
          />
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {Object.entries(groupedServices).map(([groupName, groupData]) => (
                <div key={groupName}>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">{groupName}</h3>
                  <p className="text-md md:text-lg text-foreground/80 mb-6">{groupData.description}</p>
                  
                  <Card className="shadow-lg p-4 md:p-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-1/3 font-semibold text-primary/90">Service</TableHead>
                          <TableHead className="w-1/2 font-semibold text-primary/90">Description</TableHead>
                          <TableHead className="text-right font-semibold text-primary/90">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(groupData.subgroups).map(([subgroupName, subgroupServices]) => (
                           <React.Fragment key={subgroupName}>
                             <TableRow className="bg-secondary/30">
                               <TableCell colSpan={3} className="font-bold text-secondary-foreground text-base py-3">
                                 {subgroupName}
                               </TableCell>
                             </TableRow>
                             {subgroupServices.map((service) => (
                              <TableRow key={service.id}>
                                <TableCell className="font-semibold text-primary">
                                  <Link href={`/services/${service.id}`} className="hover:underline">{service.title}</Link>
                                </TableCell>
                                <TableCell className="text-foreground/80">{service.description}</TableCell>
                                <TableCell className="text-right font-semibold text-accent">{service.price}</TableCell>
                              </TableRow>
                             ))}
                           </React.Fragment>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="default">
                <Link href="/book-appointment">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </SectionWrapper>
      )}


      {/* AI Skin Analysis Teaser Section */}
      <SectionWrapper id="ai-skin-analysis-teaser" className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="https://placehold.co/500x500.png"
              alt="AI Skin Analysis illustration"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="futuristic skin analysis"
            />
             <div className="absolute -top-4 -left-4 bg-primary p-3 rounded-full shadow-lg">
                <Image src="/images/altruva_logo.png" alt="Altruva Logo" width={40} height={40} />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Unlock Personalized Skincare with AI
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Our cutting-edge AI Skin Analysis tool helps you understand your skin better. Upload a photo, answer a few questions, and receive personalized recommendations.
            </p>
            <ul className="space-y-4 mb-8">
              {aiAnalysisFeatures.map((feature) => (
                <li key={feature.title} className="flex items-start">
                  <feature.Icon className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">{feature.title}</h4>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="font-semibold">
              <Link href="/skin-analysis">Try AI Skin Analysis</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials Preview Section */}
      <SectionWrapper id="testimonials-preview">
        <PageTitle title="Hear From Our Clients" subtitle="Real stories from those who've experienced the Altruva difference." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0,3).map((testimonial) => (
            <Card key={testimonial.id} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  {testimonial.avatarSrc && (
                    <Image
                      src={testimonial.avatarSrc}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                      data-ai-hint={testimonial.avatarHint || "person"}
                    />
                  )}
                  <div>
                    <CardTitle className="font-serif text-xl text-primary">{testimonial.name}</CardTitle>
                    <CardDescription className="text-accent">{testimonial.procedure}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 italic">"{testimonial.text}"</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/testimonials">Read More Testimonials</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Call to Action Section */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Transformation?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Your journey to enhanced beauty and confidence starts here. Schedule your personalized consultation with our expert team today.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/book-appointment">Book Your Consultation Now</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
