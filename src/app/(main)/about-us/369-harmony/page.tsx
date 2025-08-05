
'use client';

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
import { useLanguage } from '@/context/LanguageContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '369 Harmony™ Approach - Altruva Aesthetic Clinic',
  description: 'Discover the Altruva 369 Harmony Approach™, your intelligent, year-round beauty roadmap for natural, long-term rejuvenation and graceful aging.',
};

export default function Harmony369Page() {
  const { t } = useLanguage();

  const keyPrinciples = [
      { title: { en: 'Aging is 3M', id: 'Penuaan adalah 3M' }, description: { en: 'Multilayered, Multifactorial, and Multimodal, requiring a comprehensive strategy.', id: 'Berlapis, multifaktorial, dan multimodal, membutuhkan strategi yang komprehensif.' }, Icon: Diamond },
      { title: { en: 'Regenerative Framework', id: 'Kerangka Regeneratif' }, description: { en: 'Honors biological rhythms and aging timelines for optimal results.', id: 'Menghormati ritme biologis dan garis waktu penuaan untuk hasil yang optimal.' }, Icon: ShieldCheck },
      { title: { en: 'Harmonized Layering', id: 'Pelapisan yang Harmonis' }, description: { en: 'Enhances skin, structure, and cellular vitality in cycles of 3, 6, and 9-12 months.', id: 'Meningkatkan vitalitas kulit, struktur, dan sel dalam siklus 3, 6, dan 9-12 bulan.' }, Icon: Zap },
      { title: { en: 'Respects Healing Phases', id: 'Menghormati Fase Penyembuhan' }, description: { en: 'Avoids overstimulation by respecting the skin\'s intrinsic regenerative phases.', id: 'Menghindari stimulasi berlebihan dengan menghormati fase regeneratif intrinsik kulit.' }, Icon: CheckCircle },
      { title: { en: 'Clinically Proven', id: 'Terbukti Secara Klinis' }, description: { en: 'Tested and proven through over 12 years of Dr. Aldisa\'s practice.', id: 'Diuji dan dibuktikan melalui lebih dari 12 tahun praktik Dr. Aldisa.' }, Icon: Star },
      { title: { en: 'Natural, Long-Term Results', id: 'Hasil Alami, Jangka Panjang' }, description: { en: 'Designed to deliver visible, natural, and lasting rejuvenation.', id: 'Dirancang untuk memberikan peremajaan yang terlihat, alami, dan tahan lama.' }, Icon: Gem },
      { title: { en: 'Rooted in Reality', id: 'Berakar pada Kenyataan' }, description: { en: 'Acknowledges aging as a progressive process that requires a strategic, long-term plan.', id: 'Mengakui penuaan sebagai proses progresif yang membutuhkan rencana strategis jangka panjang.' }, Icon: Target },
      { title: { en: 'Exponential Outcomes', id: 'Hasil Eksponensial' }, description: { en: 'Scientifically designed for synergistic treatments that generate exponential results over time.', id: 'Dirancang secara ilmiah untuk perawatan sinergis yang menghasilkan hasil eksponensial dari waktu ke waktu.' }, Icon: Rocket },
  ];

  const membershipTiers = [
    {
      name: 'LUMI PLAN',
      tagline: { en: '“I want to preserve my glow and prevent future signs.”', id: '“Saya ingin menjaga kilau saya dan mencegah tanda-tanda masa depan.”' },
      idealFor: { en: 'Ages 25–35, focusing on prevention and hydration.', id: 'Usia 25–35, berfokus pada pencegahan dan hidrasi.' },
      focus: { en: 'Skin hydration, tone balancing, and early collagen activation. Entry-level program for regenerative consistency.', id: 'Hidrasi kulit, penyeimbangan warna, dan aktivasi kolagen dini. Program tingkat pemula untuk konsistensi regeneratif.' },
      phasesCovered: { en: 'Phase 3 (once a month for 3 consecutive months, repeatable after 6 months)', id: 'Fase 3 (sebulan sekali selama 3 bulan berturut-turut, dapat diulang setelah 6 bulan)' },
      totalSessions: { en: '3 sessions of skin foundation OR 1 session of Prejuvenation Lift.', id: '3 sesi fondasi kulit ATAU 1 sesi Prejuvenation Lift.' },
      investment: '~IDR 24.500.000/year',
      prepayPrice: 'IDR 24,500,000',
      alaCartePrice: 'IDR 30,900,000',
      savings: { en: 'IDR 6,400,000 (20%)', id: 'Rp 6.400.000 (20%)' },
      bonus: [
        { en: '1x Customized Oxy Infusion', id: '1x Customized Oxy Infusion' },
        { en: '1x Lymphatic Massage', id: '1x Lymphatic Massage' },
      ],
      monthlyBreakdown: '~1,991,000/month',
      featured: false,
    },
    {
      name: 'AURA PLAN',
      tagline: { en: '“I want to restore balance and stay lifted without extremes.”', id: '“Saya ingin mengembalikan keseimbangan dan tetap terangkat tanpa ekstrem.”' },
      idealFor: { en: 'Ages 35-45s with mild to moderate laxity, pigmentation, or early contour changes.', id: 'Usia 35-45 dengan kekenduran ringan hingga sedang, pigmentasi, atau perubahan kontur dini.' },
      focus: { en: 'Targeting early signs of sagging and dullness. Soft lift, skin density support, toxin modulation & tone revival.', id: 'Menargetkan tanda-tanda awal kendur dan kusam. Pengangkatan lembut, dukungan kepadatan kulit, modulasi toksin & kebangkitan warna kulit.' },
      phasesCovered: { en: 'Phase 3 (1 cycle), Phase 6', id: 'Fase 3 (1 siklus), Fase 6' },
      totalSessions: { en: '4 sessions', id: '4 sesi' },
      investment: '~IDR 54.5 M/year',
      prepayPrice: 'IDR 54,500,000',
      alaCartePrice: 'IDR 72,900,000',
      savings: { en: 'IDR 18,400,000 (25%)', id: 'Rp 18.400.000 (25%)' },
      bonus: [
        { en: '1x RF LipoFirming', id: '1x RF LipoFirming' },
        { en: 'Loyalty Voucher IDR 500,000', id: 'Voucher Loyalitas Rp 500.000' },
      ],
      monthlyBreakdown: '~4,541,000/month',
      featured: true,
    },
    {
      name: 'ÉLEVÉ PLAN',
      tagline: { en: '“I’m ready for deep support and visible rejuvenation.”', id: '“Saya siap untuk dukungan mendalam dan peremajaan yang terlihat.”' },
      idealFor: { en: '45s and above clients seeking visible structure restoration and long-term collagen support.', id: 'Klien usia 45 ke atas yang mencari pemulihan struktur yang terlihat dan dukungan kolagen jangka panjang.' },
      focus: { en: 'Full-spectrum regenerative protocol with structural intervention for transformational results.', id: 'Protokol regeneratif spektrum penuh dengan intervensi struktural untuk hasil transformasional.' },
      phasesCovered: { en: 'Phase 3, Phase 6, Phase 9-12', id: 'Fase 3, Fase 6, Fase 9-12' },
      totalSessions: { en: '5 sessions', id: '5 sesi' },
      investment: 'IDR 69.500.000/year',
      prepayPrice: 'IDR 69,500,000',
      alaCartePrice: 'IDR 99,900,000',
      savings: { en: 'IDR 30,400,000 (30%)', id: 'Rp 30.400.000 (30%)' },
      bonus: [
        { en: '1x RF LipoFirming', id: '1x RF LipoFirming' },
        { en: 'WhatsApp priority + exclusive invites + VIP room', id: 'Prioritas WhatsApp + undangan eksklusif + ruang VIP' },
        { en: 'Loyalty Voucher IDR 1,000,000', id: 'Voucher Loyalitas Rp 1.000.000' },
      ],
      monthlyBreakdown: '~5,791,000/month',
      featured: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="relative min-h-[80vh] flex items-center justify-center text-center !py-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto p-4 pb-16">
          <PageTitle
            className="pt-32"
            title={t({ en: "The Altruva 369 Harmony Approach™", id: "Pendekatan Altruva 369 Harmony™" })}
            subtitle={t({ en: "Your intelligent, year-round beauty roadmap for natural, long-term rejuvenation.", id: "Peta jalan kecantikan cerdas Anda sepanjang tahun untuk peremajaan alami dan jangka panjang." })}
          />
          <Button asChild size="lg" className="mt-4">
            <Link href="#membership-tiers">{t({ en: "Discover Your Plan", id: "Temukan Rencana Anda" })}</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Why Choose 369 Harmony Section */}
      <SectionWrapper id="why-choose" className="bg-secondary/30">
        <PageTitle
          title={t({ en: "Why Choose 369 Harmony?", id: "Mengapa Memilih 369 Harmony?" })}
          subtitle={t({ en: "A philosophy rooted in science, experience, and the art of natural beauty.", id: "Sebuah filosofi yang berakar pada ilmu pengetahuan, pengalaman, dan seni kecantikan alami." })}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyPrinciples.map((principle, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-primary">{t(principle.title)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{t(principle.description)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* The 369 Harmony Approach Section */}
      <SectionWrapper id="the-approach">
        <PageTitle
          title={t({ en: "Your Intelligent Beauty Roadmap", id: "Peta Jalan Kecantikan Cerdas Anda" })}
          subtitle={t({ en: "The Altruva 369 Harmony Approach™ is your year-round guide to strategic rejuvenation.", id: "Pendekatan Altruva 369 Harmony™ adalah panduan sepanjang tahun Anda untuk peremajaan strategis." })}
        />
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative aspect-square">
            <Image 
              src="/images/369.jpg" 
              alt="369 Harmony diagram"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-serif text-primary hover:no-underline py-4">
                  <div className="flex items-center gap-4">
                    <div>
                      {t({ en: "Phase 3 (3 Months): Foundation", id: "Fase 3 (3 Bulan): Fondasi" })}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pb-4 pt-2 leading-relaxed pl-16">
                  <p className="text-base text-foreground/70">{t({ en: "Quarterly Foundation / Once a Month for 3 Months", id: "Fondasi Triwulanan / Sebulan Sekali selama 3 Bulan" })}</p>
                  <br />
                  <p className="font-semibold mb-2 text-primary">{t({ en: "Focus: Skin Health + Preventive", id: "Fokus: Kesehatan Kulit + Pencegahan" })}</p>
                  <p className="mb-4">{t({ en: '"Skin health, glow, hydration—build the foundation." This phase improves texture, tone, and hydration, prevents dullness, and maintains baseline regenerative activity.', id: '"Kesehatan kulit, kilau, hidrasi—bangun fondasinya." Fase ini meningkatkan tekstur, warna, dan hidrasi, mencegah kekusaman, dan mempertahankan aktivitas regeneratif dasar.' })}</p>
                  <p className="font-semibold text-primary">{t({ en: "Example Treatments:", id: "Contoh Perawatan:" })}</p>
                  <ul className="list-disc list-inside mt-1">
                    <li>{t({ en: "Signature Clinical Facial", id: "Signature Clinical Facial" })}</li>
                    <li>{t({ en: "Selected Laser Toning", id: "Selected Laser Toning" })}</li>
                    <li>{t({ en: "Selected Skinbooster (HA-based / PN-based / Amino Acid-rich)", id: "Selected Skinbooster (HA-based / PN-based / Amino Acid-rich)" })}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl font-serif text-primary hover:no-underline py-4">
                   <div className="flex items-center gap-4">
                   <div>
                      {t({ en: "Phase 6 (6 Months): Harmonization", id: "Fase 6 (6 Bulan): Harmonisasi" })}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pb-4 pt-2 leading-relaxed pl-16">
                  <p className="text-base text-foreground/70">{t({ en: "Biannual Harmonization / Every 6 Months", id: "Harmonisasi Setengah Tahunan / Setiap 6 Bulan" })}</p>
                  <br/>
                  <p className="font-semibold mb-2 text-primary">{t({ en: "Focus: Volume Preservation + Rejuvenation", id: "Fokus: Pelestarian Volume + Peremajaan" })}</p>
                  <p className="mb-4">{t({ en: '"Collagen banking, lifting, biostimulation." This phase reinforces skin architecture, balances muscle dynamics, and activates collagen deposition.', id: '"Bank kolagen, pengencangan, biostimulasi." Fase ini memperkuat arsitektur kulit, menyeimbangkan dinamika otot, dan mengaktifkan deposisi kolagen.' })}</p>
                  <p className="font-semibold text-primary">{t({ en: "Example Treatments:", id: "Contoh Perawatan:" })}</p>
                  <ul className="list-disc list-inside mt-1">
                      <li>{t({ en: "Botulinum Toxin (targeted zones)", id: "Botulinum Toxin (targeted zones)" })}</li>
                      <li>{t({ en: "Biostimulator (PLLA/CaHA / PCL)", id: "Biostimulator (PLLA/CaHA / PCL)" })}</li>
                      <li>{t({ en: "Customized Peptides (Injectable or transdermal delivery)", id: "Customized Peptides (Injectable or transdermal delivery)" })}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-2xl font-serif text-primary hover:no-underline py-4">
                   <div className="flex items-center gap-4">
                    <div>
                      {t({ en: "Phase 9-12 (Months): Elevation", id: "Fase 9-12 (Bulan): Elevasi" })}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pb-4 pt-2 leading-relaxed pl-16">
                  <p className="text-base text-foreground/70">{t({ en: "Annual Elevation / Every 9-12 Months", id: "Elevasi Tahunan / Setiap 9-12 Bulan" })}</p>
                  <br />
                  <p className="font-semibold mb-2 text-primary">{t({ en: "Focus: Structural Refinement + Contouring", id: "Fokus: Penyempurnaan Struktural + Kontur" })}</p>
                  <p className="mb-4">{t({ en: '"Structural repositioning, long-term support." This phase focuses on structural refinement, fat pad modulation, and collagen densification to reset the aging trajectory.', id: '"Reposisi struktural, dukungan jangka panjang." Fase ini berfokus pada penyempurnaan struktural, modulasi bantalan lemak, dan densifikasi kolagen untuk mengatur ulang lintasan penuaan.' })}</p>
                  <p className="font-semibold text-primary">{t({ en: "Example Treatments:", id: "Contoh Perawatan:" })}</p>
                  <ul className="list-disc list-inside mt-1">
                      <li>{t({ en: "Energy-Based Device (Sofwave™)", id: "Energy-Based Device (Sofwave™)" })}</li>
                      <li>{t({ en: "SculptLift+ Lipolysis (targeted jaw/cheeks)", id: "SculptLift+ Lipolysis (targeted jaw/cheeks)" })}</li>
                      <li>{t({ en: "Filler / Cocktail Contouring (restorative or repositioning)", id: "Filler / Cocktail Contouring (restorative or repositioning)" })}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </SectionWrapper>
      
      {/* Membership Tiers Section */}
      <SectionWrapper id="membership-tiers" className="bg-secondary/30">
        <PageTitle title={t({ en: "Which Journey is Yours?", id: "Perjalanan Mana yang Menjadi Milik Anda?" })} />
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {membershipTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ${tier.featured ? 'border-primary border-2 scale-105' : ''}`}>
              {tier.featured && (
                <div className="text-center py-1 px-4 bg-primary text-primary-foreground font-semibold rounded-t-lg">
                  {t({ en: "Most Popular", id: "Paling Populer" })}
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-3xl text-primary">{tier.name}</CardTitle>
                <CardDescription className="italic text-base h-12">{t(tier.tagline)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: "Ideal For:", id: "Ideal Untuk:" })}</h4>
                  <p className="text-sm text-foreground/80">{t(tier.idealFor)}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: "Focus:", id: "Fokus:" })}</h4>
                  <p className="text-sm text-foreground/80">{t(tier.focus)}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: "Phases Covered:", id: "Fase yang Dicakup:" })}</h4>
                  <p className="text-sm text-foreground/80">{t(tier.phasesCovered)}</p>
                </div>
                 <div>
                  <h4 className="font-semibold text-primary">{t({ en: "Total Sessions/Year:", id: "Total Sesi/Tahun:" })}</h4>
                  <p className="text-sm text-foreground/80">{t(tier.totalSessions)}</p>
                </div>
                <div className="pt-2">
                    <p className="text-2xl font-bold text-accent text-center">{tier.prepayPrice}</p>
                    <p className="text-xs text-muted-foreground text-center">
                        {t({ en: "Ala Carte:", id: "Ala Carte:" })} {tier.alaCartePrice} <span className="font-bold text-primary">| {t({ en: "Save", id: "Hemat" })} {t(tier.savings)}</span>
                    </p>
                    <p className="text-sm font-semibold text-center mt-1">{tier.monthlyBreakdown}</p>
                </div>
                 <div>
                  <h4 className="font-semibold text-primary">{t({ en: "Exclusive Bonus:", id: "Bonus Eksklusif:" })}</h4>
                  <ul className="text-sm text-foreground/80 list-disc list-inside">
                    {tier.bonus.map((b, index) => <li key={index}>{t(b)}</li>)}
                  </ul>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full font-semibold" variant={tier.featured ? 'default' : 'outline'}>
                  <Link href="/book-appointment">{t({ en: "Choose Plan", id: "Pilih Paket" })}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

    

    