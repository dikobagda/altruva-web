
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Zap, Diamond, Star, Heart } from 'lucide-react';
import PageTitle from '@/components/shared/PageTitle';

export const metadata = {
  title: 'About Us - Altruva',
  description: 'Learn about Altruva\'s mission, our expert team, and our commitment to regenerative aesthetic care.',
};

export default function AboutUsPage() {
  return (
    <>
      <SectionWrapper className="pt-24 md:pt-32">
        <PageTitle 
            title="About Altruva"
            subtitle="Discover our philosophy of regenerative aesthetics, where science meets the art of authentic beauty."
        />
      </SectionWrapper>

      {/* Vision and Mission Section */}
       <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <Card className="shadow-lg">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Star className="h-8 w-8 text-accent" />
                    <CardTitle className="font-serif text-3xl text-primary">Our Vision</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80">
                To become Asia’s leading regenerative aesthetic sanctuary—where authenticity meets innovation, and aging is seen as a privilege, not a problem.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Heart className="h-8 w-8 text-accent" />
                    <CardTitle className="font-serif text-3xl text-primary">Our Mission</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-foreground/80">To provide technology-driven, evidence-based treatments that prioritize long-term tissue health.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-foreground/80">To deliver a patient experience that is humane, holistic, and mindful.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-foreground/80">To educate the public that aging is a journey, not an enemy.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-foreground/80">To cultivate a community of empowered, gracefully aging women and men.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Philosophy Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Interior of Altruva clinic"
              fill
              className="object-cover"
              data-ai-hint="modern clinic interior"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">Our Philosophy</h2>
            <p className="text-lg text-foreground/80">
              True beauty is not about transformation, but revelation. We utilize the latest advancements in regenerative medicine and non-surgical treatments to work in harmony with your body, promoting cellular renewal and achieving authentic, lasting results.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Personalized Care</h4>
                  <p className="text-foreground/70">Every journey begins with understanding you. Your treatment plan is as unique as you are.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Expert Innovation</h4>
                  <p className="text-foreground/70">Our team is at the forefront of aesthetic science, ensuring safe and effective treatments.</p>
                </div>
              </li>
               <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Holistic Approach</h4>
                  <p className="text-foreground/70">We consider your overall well-being, aiming for results that enhance both appearance and confidence.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us Section */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">Why Choose Altruva?</h2>
            <p className="text-lg text-foreground/80">
              Your trust is our highest priority. We are committed to providing an exceptional experience founded on safety, innovation, and results that celebrate your unique beauty.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Friend first, patient second</h4>
                  <p className="text-foreground/70">We build relationships based on trust and understanding, ensuring you feel heard and valued.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Cutting-Edge Technology</h4>
                  <p className="text-foreground/70">We invest in the latest, clinically-proven technologies to ensure effective and efficient treatments.</p>
                </div>
              </li>
               <li className="flex items-start">
                <Diamond className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Natural, Elegant Results</h4>
                  <p className="text-foreground/70">Our philosophy is to enhance, not alter. We specialize in creating subtle, beautiful outcomes.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Aesthetic professional consulting with a client"
              fill
              className="object-cover"
              data-ai-hint="professional aesthetic consultation"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
       <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Begin Your Journey With Us</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Experience the Altruva difference. Schedule a personalized consultation to explore how we can help you achieve your aesthetic goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/book-appointment">Book Your Consultation</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
