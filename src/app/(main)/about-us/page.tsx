
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'About Us - Altruva',
  description: 'Learn about Altruva\'s mission, our expert team, and our commitment to regenerative aesthetic care.',
};

const teamMembers = [
  {
    name: 'Dr. Evelyn Reed',
    title: 'Founder & Lead Aesthetic Physician',
    imageSrc: 'https://placehold.co/400x400.png',
    imageHint: 'professional woman doctor',
    bio: 'With over 15 years of experience, Dr. Reed is a pioneer in regenerative techniques, dedicated to natural-looking results.',
  },
  {
    name: 'Marcus Thorne',
    title: 'Clinical Director & Skincare Specialist',
    imageSrc: 'https://placehold.co/400x400.png',
    imageHint: 'professional man specialist',
    bio: 'Marcus combines clinical expertise with a passion for personalized skincare, ensuring every client receives the best care.',
  },
  {
    name: 'Chloe Davis',
    title: 'Senior Aesthetic Nurse',
    imageSrc: 'https://placehold.co/400x400.png',
    imageHint: 'professional woman nurse',
    bio: 'Chloe is an expert in injectable treatments and laser therapies, known for her gentle touch and artistic eye.',
  },
];

export default function AboutUsPage() {
  return (
    <>
      <SectionWrapper>
        <PageTitle
          title="Pioneering Regenerative Aesthetics"
          subtitle="At Altruva, we believe in enhancing your natural beauty through science, artistry, and personalized care. Our mission is to reveal the true you, fostering confidence that radiates from within."
        />
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

      {/* Meet Our Team Section */}
      <SectionWrapper id="team">
        <PageTitle
          title="Meet Our Experts"
          subtitle="The heart of Altruva is our team—a collection of passionate, skilled professionals dedicated to the art and science of aesthetics."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.imageSrc}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="rounded-full object-cover"
                    data-ai-hint={member.imageHint}
                  />
                </div>
                <CardTitle className="font-serif text-xl text-primary">{member.name}</CardTitle>
                <CardDescription className="text-accent font-semibold">{member.title}</CardDescription>
                <p className="mt-2 text-foreground/70 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
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
