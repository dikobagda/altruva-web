
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Zap, Diamond } from 'lucide-react';

export const metadata = {
  title: 'About Us - Altruva',
  description: 'Learn about Altruva\'s mission, our expert team, and our commitment to regenerative aesthetic care.',
};

export default function AboutUsPage() {
  return (
    <>
      <SectionWrapper>
        
      </SectionWrapper>

      {/* Mission and Vision Section */}
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
                  <h4 className="font-semibold text-primary">Uncompromising Safety</h4>
                  <p className="text-foreground/70">We adhere to the strictest medical standards in a state-of-the-art, sterile environment.</p>
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
