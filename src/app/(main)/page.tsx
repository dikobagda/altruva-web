
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { services, testimonials, aiAnalysisFeatures } from '@/lib/constants';
import { ArrowRight, Star } from 'lucide-react'; 
import { AltruvaLogoIcon } from '@/components/icons/AltruvaLogoIcon';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative !pt-28 md:!pt-32 !pb-20 md:!pb-32 min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero_background.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" data-ai-hint="dark overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:pr-8">
              <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Jakarta’s 1st Regenerative Contouring Clinic. Reveal the True You
              </h1>
              <Button asChild variant="outline" size="lg" className="font-semibold border-black text-white hover:bg-black/10 hover:text-white text-base px-10 py-6 rounded-full">
                <Link href="/book-appointment">Book an Appointment</Link>
              </Button>
            </div>
            {/* Removed placeholder image div */}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <SectionWrapper id="services-overview">
        <PageTitle title="Our Signature Services" subtitle="Crafted to enhance your natural beauty and well-being." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <Card key={service.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={600}
                height={400}
                className="object-cover aspect-video w-full"
                data-ai-hint={service.imageHint}
              />
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-foreground/70">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-lg font-semibold text-accent mb-4">{service.price}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="link" className="text-primary p-0 h-auto">
                  <Link href={`/services#${service.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </SectionWrapper>

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
             <div className="absolute -top-4 -left-4 bg-primary p-3 rounded-full shadow-lg animate-pulse">
              <AltruvaLogoIcon className="h-8 w-8 text-primary-foreground" />
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
