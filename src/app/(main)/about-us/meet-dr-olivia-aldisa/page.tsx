
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, BookOpen, Mic, Star, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Meet dr. Olivia Aldisa - Altruva Aesthetic Clinic',
  description: 'Learn about dr. Olivia Aldisa, a leading expert in regenerative aesthetics, international KOL, and the founder of Altruva.',
};

const credentials = [
  {
    Icon: Star,
    title: 'Founder & Medical Director',
    description: 'The visionary behind Altruva, shaping its philosophy of regenerative, patient-centric care.',
  },
  {
    Icon: Award,
    title: 'International KOL & Trainer',
    description: 'A globally recognized Key Opinion Leader for technologies like Sofwave™ and Gouri™.',
  },
  {
    Icon: Mic,
    title: 'Finalist at AMWC Monaco 2024',
    description: 'Acknowledged for excellence in Non-Surgical Body Shaping on a global stage.',
  },
  {
    Icon: BookOpen,
    title: 'Regenerative Aesthetics Pioneer',
    description: 'Expert in advanced protocols including Polynucleotides, Biostimulators, and Micrograft technology.',
  },
];

export default function MeetTheDoctorPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary/30 pt-24 md:pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-xl max-w-md mx-auto">
          <Image
              src="/images/draldisa.png"
              alt="Promotional image for AI Skin Analysis showing a woman's profile with text overlay"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">dr. Olivia Aldisa</h1>
            <h2 className="text-xl font-semibold text-accent">Founder of Altruva, Global KOL & Regenerative Aesthetics Expert</h2>
            <p className="text-lg text-foreground/80">
              Dr. Olivia Aldisa is a distinguished medical professional at the forefront of regenerative and aesthetic medicine. With a philosophy centered on enhancing natural beauty through scientific innovation, she has established Altruva as a sanctuary for those seeking authentic, long-term results.
            </p>
            <p className="text-foreground/80">
              Her approach goes beyond temporary fixes, focusing instead on rebuilding and revitalizing the skin and facial structures from a cellular level. Dr. Aldisa is not just a practitioner; she is an educator and a pioneer, committed to advancing the field and empowering her patients with knowledge and confidence.
            </p>
            <Button asChild size="lg">
              <Link href="/book-appointment">Book a Consultation with Dr. Aldisa</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <PageTitle
          title="Expertise & Philosophy"
          subtitle="A commitment to science, artistry, and patient-centric care."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred) => (
            <Card key={cred.title} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                  <cred.Icon className="w-6 h-6" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">{cred.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{cred.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Begin Your Regenerative Journey</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Schedule a personalized consultation with dr. Olivia Aldisa to explore a treatment plan that honors your unique beauty and aesthetic goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/book-appointment">Request Your Consultation</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
