
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Zap, Diamond, Star, Clock, Target, Rocket, Gem } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
  title: '369 Harmony™ - Altruva Aesthetic Clinic',
  description: 'Discover the Altruva 369 Harmony Approach™, your intelligent, year-round beauty roadmap for natural, long-term rejuvenation.',
};

const keyPrinciples = [
    { title: 'Aging is 3M', description: 'Multilayered, Multifactorial, and Multimodal, requiring a comprehensive strategy.', Icon: Diamond },
    { title: 'Regenerative Framework', description: 'Honors biological rhythms and aging timelines for optimal results.', Icon: ShieldCheck },
    { title: 'Harmonized Layering', description: 'Enhances skin, structure, and cellular vitality in cycles of 3, 6, and 9-12 months.', Icon: Zap },
    { title: 'Respects Healing Phases', description: 'Avoids overstimulation by respecting the skin\'s intrinsic regenerative phases.', Icon: CheckCircle },
    { title: 'Clinically Proven', description: 'Tested and proven through over 12 years of Dr. Aldisa\'s practice.', Icon: Star },
    { title: 'Natural, Long-Term Results', description: 'Designed to deliver visible, natural, and lasting rejuvenation.', Icon: Gem },
    { title: 'Rooted in Reality', description: 'Acknowledges aging as a progressive process that requires a strategic, long-term plan.', Icon: Target },
    { title: 'Exponential Outcomes', description: 'Scientifically designed for synergistic treatments that generate exponential results over time.', Icon: Rocket },
];

const membershipTiers = [
  {
    name: 'LUMI PLAN',
    tagline: '“I want to preserve my glow and prevent future signs.”',
    idealFor: 'Ages 25–35, focusing on prevention and hydration.',
    focus: 'Skin hydration, tone balancing, and early collagen activation. Entry-level program for regenerative consistency.',
    phasesCovered: 'Phase 3 (once a month for 3 consecutive months, repeatable after 6 months)',
    totalSessions: '3 sessions of skin foundation OR 1 session of Prejuvenation Lift.',
    investment: '~IDR 24.500.000/year',
    prepayPrice: 'IDR 24,500,000',
    alaCartePrice: 'IDR 30,900,000',
    savings: 'IDR 6,400,000 (20%)',
    bonus: ['1x Customized Oxy Infusion', '1x Lymphatic Massage'],
    monthlyBreakdown: '~1,991,000/month',
    featured: false,
  },
  {
    name: 'AURA PLAN',
    tagline: '“I want to restore balance and stay lifted without extremes.”',
    idealFor: 'Ages 35-45s with mild to moderate laxity, pigmentation, or early contour changes.',
    focus: 'Targeting early signs of sagging and dullness. Soft lift, skin density support, toxin modulation & tone revival.',
    phasesCovered: 'Phase 3 (1 cycle), Phase 6',
    totalSessions: '4 sessions',
    investment: '~IDR 54.5 M/year',
    prepayPrice: 'IDR 54,500,000',
    alaCartePrice: 'IDR 72,900,000',
    savings: 'IDR 18,400,000 (25%)',
    bonus: ['1x RF LipoFirming', 'Loyalty Voucher IDR 500,000'],
    monthlyBreakdown: '~4,541,000/month',
    featured: true,
  },
  {
    name: 'ÉLEVÉ PLAN',
    tagline: '“I’m ready for deep support and visible rejuvenation.”',
    idealFor: '45s and above clients seeking visible structure restoration and long-term collagen support.',
    focus: 'Full-spectrum regenerative protocol with structural intervention for transformational results.',
    phasesCovered: 'Phase 3, Phase 6, Phase 9-12',
    totalSessions: '5 sessions',
    investment: 'IDR 69.500.000/year',
    prepayPrice: 'IDR 69,500,000',
    alaCartePrice: 'IDR 99,900,000',
    savings: 'IDR 30,400,000 (30%)',
    bonus: ['1x RF LipoFirming', 'WhatsApp priority + exclusive invites + VIP room', 'Loyalty Voucher IDR 1,000,000'],
    monthlyBreakdown: '~5,791,000/month',
    featured: false,
  },
];


export default function Harmony369Page() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="relative min-h-[80vh] flex items-center justify-center text-center !py-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto p-4 pb-16">
          <PageTitle
            className="pt-32"
            title="The Altruva 369 Harmony Approach™"
            subtitle="Your intelligent, year-round beauty roadmap for natural, long-term rejuvenation."
          />
          <Button asChild size="lg" className="mt-4">
            <Link href="#membership-tiers">Discover Your Plan</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Why Choose 369 Harmony Section */}
      <SectionWrapper id="why-choose" className="bg-secondary/30">
        <PageTitle
          title="Why Choose 369 Harmony?"
          subtitle="A philosophy rooted in science, experience, and the art of natural beauty."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyPrinciples.map((principle) => (
            <Card key={principle.title} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                  <principle.Icon className="w-6 h-6" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* The 369 Harmony Approach Section */}
      <SectionWrapper id="the-approach">
        <PageTitle
          title="Your Intelligent Beauty Roadmap"
          subtitle="The Altruva 369 Harmony Approach™ is your year-round guide to strategic rejuvenation."
        />
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl font-serif text-primary hover:no-underline py-4">
                <div className="flex items-center gap-4">
                  <div>
                    Phase 3 (3 Months): Foundation
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 pb-4 pt-2 leading-relaxed pl-16">
                <p className="text-base text-foreground/70">Quarterly Foundation / Once a Month for 3 Months</p>
                <br />
                <p className="font-semibold mb-2 text-primary">Focus: Skin Health + Preventive</p>
                <p className="mb-4">"Skin health, glow, hydration—build the foundation." This phase improves texture, tone, and hydration, prevents dullness, and maintains baseline regenerative activity.</p>
                <p className="font-semibold text-primary">Example Treatments:</p>
                <ul className="list-disc list-inside mt-1">
                  <li>Signature Clinical Facial</li>
                  <li>Selected Laser Toning</li>
                  <li>Selected Skinbooster (HA-based / PN-based / Amino Acid-rich)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl font-serif text-primary hover:no-underline py-4">
                 <div className="flex items-center gap-4">
                 <div>
                    Phase 6 (6 Months): Harmonization
                    
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 pb-4 pt-2 leading-relaxed pl-16">
                <p className="text-base text-foreground/70">Biannual Harmonization / Every 6 Months</p>
                <br/>
                <p className="font-semibold mb-2 text-primary">Focus: Volume Preservation + Rejuvenation</p>
                <p className="mb-4">"Collagen banking, lifting, biostimulation." This phase reinforces skin architecture, balances muscle dynamics, and activates collagen deposition.</p>
                <p className="font-semibold text-primary">Example Treatments:</p>
                <ul className="list-disc list-inside mt-1">
                    <li>Botulinum Toxin (targeted zones)</li>
                    <li>Biostimulator (PLLA/CaHA / PCL)</li>
                    <li>Customized Peptides (Injectable or transdermal delivery)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl font-serif text-primary hover:no-underline py-4">
                 <div className="flex items-center gap-4">
                  <div>
                    Phase 9-12 (Months): Elevation
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 pb-4 pt-2 leading-relaxed pl-16">
                <p className="text-base text-foreground/70">Annual Elevation / Every 9-12 Months</p>
                <br />
                <p className="font-semibold mb-2 text-primary">Focus: Structural Refinement + Contouring</p>
                <p className="mb-4">"Structural repositioning, long-term support." This phase focuses on structural refinement, fat pad modulation, and collagen densification to reset the aging trajectory.</p>
                <p className="font-semibold text-primary">Example Treatments:</p>
                <ul className="list-disc list-inside mt-1">
                    <li>Energy-Based Device (Sofwave™)</li>
                    <li>SculptLift+ Lipolysis (targeted jaw/cheeks)</li>
                    <li>Filler / Cocktail Contouring (restorative or repositioning)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionWrapper>
      
      {/* Membership Tiers Section */}
      <SectionWrapper id="membership-tiers" className="bg-secondary/30">
        <PageTitle title="Which Journey is Yours?" />
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {membershipTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ${tier.featured ? 'border-primary border-2 scale-105' : ''}`}>
              {tier.featured && (
                <div className="text-center py-1 px-4 bg-primary text-primary-foreground font-semibold rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-3xl text-primary">{tier.name}</CardTitle>
                <CardDescription className="italic text-base h-12">{tier.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">Ideal For:</h4>
                  <p className="text-sm text-foreground/80">{tier.idealFor}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Focus:</h4>
                  <p className="text-sm text-foreground/80">{tier.focus}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Phases Covered:</h4>
                  <p className="text-sm text-foreground/80">{tier.phasesCovered}</p>
                </div>
                 <div>
                  <h4 className="font-semibold text-primary">Total Sessions/Year:</h4>
                  <p className="text-sm text-foreground/80">{tier.totalSessions}</p>
                </div>
                <div className="pt-2">
                    <p className="text-2xl font-bold text-accent text-center">{tier.prepayPrice}</p>
                    <p className="text-xs text-muted-foreground text-center">
                        Ala Carte: {tier.alaCartePrice} <span className="font-bold text-primary">| Save {tier.savings}</span>
                    </p>
                    <p className="text-sm font-semibold text-center mt-1">{tier.monthlyBreakdown}</p>
                </div>
                 <div>
                  <h4 className="font-semibold text-primary">Exclusive Bonus:</h4>
                  <ul className="text-sm text-foreground/80 list-disc list-inside">
                    {tier.bonus.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full font-semibold" variant={tier.featured ? 'default' : 'outline'}>
                  <Link href="/book-appointment">Choose Plan</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
