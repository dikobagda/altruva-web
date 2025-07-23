
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CheckCircle, Clock, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Happy Hour Specials - Altruva',
  description: 'Limited-time express glow rituals for luxurious results with no downtime.',
};

const happyHourOptions = [
  {
    title: 'Ready, Set & Glow',
    price: 'IDR 899.000',
    originalPrice: 'IDR 1.750.000',
    description: 'Fast, event-ready radiance.',
    includes: [
      'Altruva Signature Facial',
      'LHA LA Skin Prep',
      'Customized Light Therapy',
    ],
    featured: true,
  },
  {
    title: 'Plump & Lift Glow',
    price: 'IDR 2.499.000',
    originalPrice: 'IDR 4.000.000',
    description: 'Redefine contours & boost collagen.',
    includes: [
      'Altruva Signature Facial',
      'Exion RF Face (jawline lift & firming)',
    ],
    featured: false,
  },
];

export default function HappyHourPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary/30 pt-24 md:pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl max-w-md mx-auto">
            <Image
              src="/images/happyhour1.jpeg"
              alt="Promotional image for Altruva Happy Hour"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Altruva Happy Hour</h1>
            <h2 className="text-xl font-semibold text-accent">Limited-Time Express Glow Rituals</h2>
            <p className="text-lg text-foreground/80">
              For those who move fast and glow brighter, we introduce two express treatments with luxurious results and no downtime. Your skin's glow break — redefined.
            </p>
             <div className="bg-primary/10 p-4 rounded-lg text-primary space-y-2">
                <div className="flex items-center font-semibold">
                    <Clock className="h-5 w-5 mr-3" />
                    <span>Happy Hour Schedule</span>
                </div>
                <ul className="pl-8 text-foreground/80">
                    <li><strong>Tuesday – Thursday:</strong> 11.00 am – 4.00 pm</li>
                    <li><strong>Sunday:</strong> 10.00 am – 3.00 pm</li>
                </ul>
            </div>
            <p className="text-sm text-muted-foreground">Limited slots available each day. Book in advance to secure your spot.</p>
          </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper>
        <PageTitle title="Choose Your Glow Ritual" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {happyHourOptions.map((option) => (
            <Card key={option.title} className={`shadow-xl flex flex-col ${option.featured ? 'border-primary border-2' : ''}`}>
              <CardHeader>
                <CardTitle className="font-serif text-3xl text-primary">{option.title}</CardTitle>
                <CardDescription className="text-base">{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="text-center">
                    <p className="text-sm text-muted-foreground line-through">
                        From {option.originalPrice}
                    </p>
                    <p className="text-3xl font-bold text-accent">{option.price}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">What you'll get:</h4>
                  <ul className="space-y-2">
                    {option.includes.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                 <Button asChild size="lg" className="w-full font-semibold">
                   <Link href="/book-appointment">Book Now</Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
