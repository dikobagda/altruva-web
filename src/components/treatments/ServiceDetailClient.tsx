'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, type Service } from '@/lib/data/services';
import { buildServiceSummary, buildServiceFaqs } from '@/lib/treatment-seo';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Clock,
  Sparkles,
  Calendar,
  ShieldCheck,
  Check,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Dna,
  Microscope,
  HeartPulse,
  HelpCircle,
  Layers,
  Award,
  Target,
  Eye,
  Quote,
  BookOpen,
  UserCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const GROUP_ACCENT_COLORS: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  'Altruva Glow':      { bg: 'bg-amber-50',   text: 'text-amber-800',   border: 'border-amber-200',   badge: 'bg-amber-100 text-amber-700' },
  'Altruva Lift':      { bg: 'bg-rose-50',    text: 'text-rose-800',    border: 'border-rose-200',    badge: 'bg-rose-100 text-rose-700' },
  'Body Contouring':   { bg: 'bg-indigo-50',  text: 'text-indigo-800',  border: 'border-indigo-200',  badge: 'bg-indigo-100 text-indigo-700' },
  'Hair Restoration':  { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  'Signature Facials': { bg: 'bg-violet-50',  text: 'text-violet-800',  border: 'border-violet-200',  badge: 'bg-violet-100 text-violet-700' },
};

function getProtocolIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes('duration') || l.includes('time')) return Clock;
  if (l.includes('session') || l.includes('frequency')) return Calendar;
  if (l.includes('downtime') || l.includes('recovery')) return Sparkles;
  if (l.includes('result') || l.includes('effect') || l.includes('visible') || l.includes('onset')) return Eye;
  if (l.includes('point') || l.includes('injection') || l.includes('area') || l.includes('target')) return Target;
  if (l.includes('comfort') || l.includes('anesthesia')) return ShieldCheck;
  return CheckCircle2;
}

function RelatedTreatmentCard({ service }: { service: Service }) {
  const { t } = useLanguage();
  const colors = GROUP_ACCENT_COLORS[service.group] ?? {
    bg: 'bg-stone-50', text: 'text-stone-800', border: 'border-stone-200', badge: 'bg-stone-100 text-stone-700',
  };

  const duration = service.protocol?.find(
    (p) => p.label.en.toLowerCase().includes('duration')
  )?.value.en;

  const downtime = service.protocol?.find(
    (p) => p.label.en.toLowerCase().includes('downtime')
  )?.value.en;

  return (
    <Link
      href={`/treatments/${service.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden bg-secondary/30">
        <img
          src={service.imageSrc}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge} backdrop-blur-sm`}>
          {service.group}
        </span>
        <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full bg-black/40 text-white backdrop-blur-sm">
          {service.subgroup}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-serif text-lg font-bold text-primary leading-snug mb-2 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-foreground/70 leading-relaxed flex-1 line-clamp-2">
          {t(service.description)}
        </p>

        {(duration || downtime) && (
          <div className="flex flex-wrap gap-2 mt-4">
            {duration && (
              <span className="inline-flex items-center gap-1 text-xs text-foreground/60 bg-secondary/60 px-2.5 py-1 rounded-full">
                <Clock className="h-3 w-3" />
                {duration}
              </span>
            )}
            {downtime && (
              <span className="inline-flex items-center gap-1 text-xs text-foreground/60 bg-secondary/60 px-2.5 py-1 rounded-full">
                <Sparkles className="h-3 w-3" />
                Downtime: {downtime}
              </span>
            )}
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-medium">{service.price}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
            {t({ en: 'Learn more', id: 'Pelajari' })} <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const { t, language } = useLanguage();
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const summary = buildServiceSummary(service);
  const faqs = buildServiceFaqs(service);

  const colors = GROUP_ACCENT_COLORS[service.group] ?? {
    bg: 'bg-stone-50',
    text: 'text-stone-800',
    border: 'border-stone-200',
    badge: 'bg-stone-100 text-stone-700',
  };

  const isId = language === 'id';
  const bookingMessage = isId
    ? `Hai Altruva, saya tertarik booking konsultasi untuk treatment ${service.title}. Boleh info ketersediaan jadwal dokter?`
    : `Hello Altruva, I am interested in booking a consultation for the ${service.title} treatment. Could you share doctor schedule availability?`;
  const bookingUrl = `https://wa.me/6281216119392?text=${encodeURIComponent(bookingMessage)}`;

  const questionMessage = isId
    ? `Hai Altruva, saya ingin bertanya lebih lanjut mengenai treatment ${service.title}.`
    : `Hello Altruva, I would like to ask a few questions regarding the ${service.title} treatment.`;
  const questionUrl = `https://wa.me/6281216119392?text=${encodeURIComponent(questionMessage)}`;

  // Protocol highlights
  const duration = service.protocol?.find(
    (p) => p.label.en.toLowerCase().includes('duration') || p.label.en.toLowerCase().includes('time')
  )?.value;

  const downtime = service.protocol?.find(
    (p) => p.label.en.toLowerCase().includes('downtime') || p.label.en.toLowerCase().includes('recovery')
  )?.value;

  const sessions = service.protocol?.find(
    (p) => p.label.en.toLowerCase().includes('session')
  )?.value;

  const visibleResults = service.protocol?.find(
    (p) => p.label.en.toLowerCase().includes('visible') || p.label.en.toLowerCase().includes('result') || p.label.en.toLowerCase().includes('onset')
  )?.value;

  const related = services
    .filter((s) => s.id !== service.id && s.group === service.group)
    .concat(services.filter((s) => s.id !== service.id && s.category === service.category && s.group !== service.group))
    .slice(0, 3);

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative pt-5 pb-10 md:pt-5 md:pb-14 bg-gradient-to-br from-background via-secondary/25 to-background border-b border-border/50 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-primary/5 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-[50px]">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            <Link href="/treatments" className="hover:text-primary transition-colors">
              {t({ en: 'Treatments', id: 'Perawatan' })}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            <span className="text-foreground/80 font-medium">{service.group}</span>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            <span className="text-primary font-semibold truncate max-w-[220px] sm:max-w-none">{service.title}</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            {/* Category Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                {service.group}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                {service.subgroup}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                {service.category}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-[1.15] mb-3">
              {service.title}
            </h1>

            {service.subtitle && (
              <p className="text-lg md:text-xl font-medium text-accent italic mb-4 max-w-3xl mx-auto">
                {t(service.subtitle)}
              </p>
            )}

            {/* Concise Summary */}
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-3xl mx-auto mb-8">
              {t(summary)}
            </p>

            {/* Hero Quick Protocol Highlight Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-border/60">
              {duration && (
                <div className="p-3.5 px-5 rounded-2xl bg-card/80 border border-border/70 backdrop-blur-sm text-center flex-1 min-w-[150px] max-w-[220px]">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    <span>{t({ en: 'Duration', id: 'Durasi' })}</span>
                  </div>
                  <div className="font-semibold text-sm text-primary">{t(duration)}</div>
                </div>
              )}

              {downtime && (
                <div className="p-3.5 px-5 rounded-2xl bg-card/80 border border-border/70 backdrop-blur-sm text-center flex-1 min-w-[150px] max-w-[220px]">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                    <span>{t({ en: 'Downtime', id: 'Waktu Henti' })}</span>
                  </div>
                  <div className="font-semibold text-sm text-primary">{t(downtime)}</div>
                </div>
              )}

              {sessions && (
                <div className="p-3.5 px-5 rounded-2xl bg-card/80 border border-border/70 backdrop-blur-sm text-center flex-1 min-w-[150px] max-w-[220px]">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    <span>{t({ en: 'Sessions', id: 'Sesi' })}</span>
                  </div>
                  <div className="font-semibold text-sm text-primary">{t(sessions)}</div>
                </div>
              )}

              <div className="p-3.5 px-5 rounded-2xl bg-card/80 border border-border/70 backdrop-blur-sm text-center flex-1 min-w-[150px] max-w-[220px]">
                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  <span>{t({ en: 'Standard', id: 'Standar' })}</span>
                </div>
                <div className="font-semibold text-sm text-primary">
                  {t({ en: 'Doctor-Led', id: 'Oleh Dokter' })}
                </div>
              </div>
            </div>

            {/* Quick Hero Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:bg-primary/90 hover:shadow-lg transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t({ en: 'Book Consultation via WhatsApp', id: 'Booking Konsultasi via WhatsApp' })}</span>
              </a>

              <a
                href="#clinical-overview"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-border bg-card/60 hover:bg-secondary/60 text-foreground font-medium text-sm transition-colors"
              >
                <span>{t({ en: 'Explore Protocol Details', id: 'Pelajari Detail Protokol' })}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT & STICKY SIDEBAR ── */}
      <SectionWrapper id="clinical-overview" className="pt-12 md:pt-16 pb-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* LEFT 2 COLUMNS */}
          <div className="lg:col-span-2 space-y-10">
            {/* Visual Showcase & About Section */}
            <div className="rounded-3xl bg-card border border-border overflow-hidden shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary/30">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  data-ai-hint={service.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                    {t({ en: 'Clinical Protocol • Jakarta', id: 'Protokol Klinis • Jakarta' })}
                  </span>
                  <span className="text-xs font-medium text-white/90 hidden sm:inline-block">
                    Altruva Aesthetic Clinic
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
                  {t({ en: 'Comprehensive Overview', id: 'Gambaran Menyeluruh' })}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-5">
                  {t({ en: 'About This Treatment', id: 'Tentang Perawatan Ini' })}
                </h2>
                <div
                  className="text-foreground/80 leading-relaxed text-base md:text-lg space-y-4"
                  dangerouslySetInnerHTML={{ __html: t(service.longDescription || service.description) }}
                />
              </div>
            </div>

            {/* Doctor Quote Section */}
            {service.quote && (
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/40 to-primary/5 border border-primary/20 p-6 md:p-8 shadow-sm">
                <div className="absolute top-4 right-6 text-primary/10 select-none pointer-events-none">
                  <Quote className="h-20 w-20" />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                    <Sparkles className="h-3.5 w-3.5" />
                    {t({ en: "Physician's Philosophy", id: "Filosofi Dokter" })}
                  </div>
                  <blockquote className="font-serif text-xl md:text-2xl italic text-primary/95 leading-relaxed mb-6">
                    "{t(service.quote.text)}"
                  </blockquote>
                  <div className="flex items-center gap-3.5 pt-4 border-t border-primary/15">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/30 shadow-sm shrink-0 bg-secondary/60">
                      <img
                        src="/images/dr_aldisa.jpeg"
                        alt="dr. Olivia Aldisa"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <cite className="block text-sm font-bold text-primary not-italic leading-snug">
                        {t(service.quote.author)}
                      </cite>
                      <span className="text-xs text-foreground/60">Altruva Aesthetic & Regenerative Clinic</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Science / How It Works (whatIsIt) */}
            {service.whatIsIt && (
              <div className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Microscope className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent block">
                      {t({ en: 'Clinical Science', id: 'Sains Klinis' })}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-primary">
                      {t(service.whatIsIt.title)}
                    </h3>
                  </div>
                </div>
                <div
                  className="text-foreground/80 leading-relaxed text-base space-y-3 [&_h4]:font-serif [&_h4]:text-lg [&_h4]:font-bold [&_h4]:text-primary [&_h4]:mt-6 [&_h4]:mb-2 [&_p]:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t(service.whatIsIt.description) }}
                />
              </div>
            )}

            {/* Mechanism of Action */}
            {service.mechanism && service.mechanism.length > 0 && (
              <div className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Dna className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent block">
                      {t({ en: 'Biomedical Action', id: 'Aksi Biomedis' })}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-primary">
                      {t({ en: 'Mechanism of Action', id: 'Mekanisme Aksi' })}
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  {service.mechanism.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-secondary/25 border border-border/80 hover:border-accent/40 transition-colors"
                    >
                      <div className="h-8 w-8 rounded-xl bg-primary text-primary-foreground font-serif font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                        0{index + 1}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-primary mb-1">
                          {t(item.title)}
                        </h4>
                        <p className="text-sm text-foreground/75 leading-relaxed">
                          {t(item.description)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Clinical Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent block">
                      {t({ en: 'Key Advantages', id: 'Keunggulan Utama' })}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-primary">
                      {t({ en: 'Key Clinical Benefits', id: 'Manfaat Klinis Utama' })}
                    </h3>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-secondary/25 border border-border/70 hover:border-accent/40 transition-all hover:-translate-y-0.5"
                    >
                      <div className="h-6 w-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-semibold text-foreground/90 leading-snug">
                        {t(benefit)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How It Differs */}
            {service.howItDiffers && (
              <div className="rounded-3xl bg-card border border-accent/25 p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
                      {t({ en: 'Distinctive Approach', id: 'Pendekatan Khas' })}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">
                      {t({ en: 'The Altruva Advantage', id: 'Keunggulan Altruva' })}
                    </h3>
                    <p className="text-base text-foreground/80 leading-relaxed">
                      {t(service.howItDiffers)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Why Patients Choose This */}
            {service.whyLoveIt && service.whyLoveIt.length > 0 && (
              <div className="rounded-3xl bg-secondary/35 border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <HeartPulse className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                      {t({ en: 'Clinical Artistry', id: 'Keahlian Klinis' })}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">
                      {t({ en: 'Why Patients Choose This Protocol', id: 'Mengapa Pasien Memilih Protokol Ini' })}
                    </h3>
                    <div className="space-y-3">
                      {service.whyLoveIt.map((item, index) => (
                        <div
                          key={index}
                          className="text-base text-foreground/80 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: t(item) }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN (STICKY SIDEBAR) */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="sticky top-28 space-y-6">
              
              {/* Consultation & Booking Card */}
              <div className="rounded-3xl bg-card border border-border shadow-md p-6 space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground block mb-1">
                    {t({ en: 'Investment', id: 'Investasi' })}
                  </span>
                  <div className="font-serif text-2xl md:text-3xl font-bold text-primary">
                    {service.price}
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">
                    {t({
                      en: 'Personalized treatment plan tailored by our aesthetic physicians',
                      id: 'Rencana perawatan disesuaikan oleh dokter estetika kami'
                    })}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg group"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{t({ en: 'Book Consultation', id: 'Booking Konsultasi' })}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={questionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border border-input bg-background hover:bg-secondary/60 text-foreground font-medium text-xs transition-colors"
                  >
                    <HelpCircle className="h-3.5 w-3.5 text-accent" />
                    <span>{t({ en: 'Ask a Medical Question', id: 'Tanya Pertanyaan Medis' })}</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-border/80 space-y-2.5 text-xs text-foreground/75">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{t({ en: '100% Performed by Board-Certified Doctors', id: '100% Ditangani oleh Dokter Bersertifikat' })}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="h-4 w-4 text-accent shrink-0" />
                    <span>{t({ en: 'FDA & BPOM Approved Technologies', id: 'Teknologi Terdaftar FDA & BPOM' })}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>{t({ en: 'Personalized Cellular Skin Assessment', id: 'Penilaian Kulit Seluler yang Dipersonalisasi' })}</span>
                  </div>
                </div>
              </div>

              {/* Protocol Overview Spec Sheet */}
              {service.protocol && service.protocol.length > 0 && (
                <div className="rounded-3xl bg-card border border-border p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <h3 className="font-serif text-lg font-bold text-primary">
                      {t({ en: 'Protocol Specifications', id: 'Spesifikasi Protokol' })}
                    </h3>
                  </div>
                  <div className="divide-y divide-border/60">
                    {service.protocol.map((item, index) => {
                      const IconComp = getProtocolIcon(item.label.en);
                      return (
                        <div key={index} className="py-3 flex items-start justify-between gap-3 text-xs">
                          <div className="flex items-center gap-2 text-foreground/70 font-medium">
                            <IconComp className="h-3.5 w-3.5 text-accent shrink-0" />
                            <span>{t(item.label)}</span>
                          </div>
                          <span className="font-semibold text-primary text-right max-w-[55%]">
                            {t(item.value)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Target Indications / Best For */}
              {service.indications && service.indications.length > 0 && (
                <div className="rounded-3xl bg-secondary/30 border border-border p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="h-4 w-4 text-accent" />
                    <h3 className="font-serif text-lg font-bold text-primary">
                      {t({ en: 'Target Concerns', id: 'Target Keluhan' })}
                    </h3>
                  </div>
                  <p className="text-xs text-foreground/60 mb-3">
                    {t({
                      en: 'Ideal clinical indications for this treatment:',
                      id: 'Indikasi klinis ideal untuk perawatan ini:'
                    })}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.indications.map((item, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-card border border-border text-foreground/85 shadow-2xs"
                      >
                        <Check className="h-3 w-3 text-accent shrink-0" />
                        {t(item)}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Need Concierge Help */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 text-center">
                <h4 className="font-serif text-sm font-bold text-primary mb-1">
                  {t({ en: 'Need Guidance?', id: 'Butuh Bantuan?' })}
                </h4>
                <p className="text-xs text-foreground/70 mb-3">
                  {t({
                    en: 'Our clinical concierge is available to guide you on procedure combinations.',
                    id: 'Tim konsultan kami siap membantu Anda memilih kombinasi perawatan terbaik.'
                  })}
                </p>
                <a
                  href={questionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  <span>{t({ en: 'Contact Concierge', id: 'Hubungi Konsultan' })}</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>

            </div>
          </aside>

        </div>
      </SectionWrapper>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      {faqs.length > 0 && (
        <SectionWrapper className="pt-4 pb-16 bg-secondary/20 border-t border-border/50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent border border-accent/20 bg-accent/5 px-3.5 py-1 rounded-full inline-block mb-3">
                {t({ en: 'Treatment Clarifications', id: 'Klarifikasi Perawatan' })}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                {t({ en: 'Frequently Asked Questions', id: 'Pertanyaan yang Sering Diajukan' })}
              </h2>
              <p className="text-sm text-foreground/70 mt-2">
                {t({
                  en: `Everything you need to know about the ${service.title} protocol.`,
                  id: `Segala hal yang perlu Anda ketahui tentang protokol ${service.title}.`
                })}
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-2xl border border-border bg-card px-5 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline py-4">
                    {t(faq.question)}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-foreground/80 leading-relaxed pb-4 pt-1">
                    {t(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 p-6 rounded-2xl bg-card border border-border text-center shadow-2xs">
              <p className="text-sm font-medium text-foreground/80 mb-3">
                {t({
                  en: 'Have a specific question about your skin biology or concerns?',
                  id: 'Punya pertanyaan khusus tentang kondisi atau anatomi Anda?'
                })}
              </p>
              <a
                href={questionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                {t({ en: 'Chat with Medical Concierge', id: 'Chat dengan Tim Medis' })}
              </a>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ── RELATED TREATMENTS ── */}
      {related.length > 0 && (
        <SectionWrapper className="pt-12 pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent border border-accent/20 bg-accent/5 px-3 py-1 rounded-full inline-block mb-2">
                {t({ en: 'Synergistic Protocols', id: 'Protokol Sinergis' })}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                {t({ en: 'Related Treatments', id: 'Perawatan Terkait' })}
              </h2>
              <p className="text-sm text-foreground/70 mt-1">
                {t({
                  en: 'Complementary procedures often paired with this treatment for enhanced results.',
                  id: 'Prosedur komplementer yang sering dipadukan dengan perawatan ini untuk hasil maksimal.'
                })}
              </p>
            </div>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline shrink-0"
            >
              <span>{t({ en: 'View All Treatments', id: 'Lihat Semua Perawatan' })}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((item) => (
              <RelatedTreatmentCard key={item.id} service={item} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* ── MOBILE STICKY BOTTOM ACTION BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border p-3.5 px-4 flex items-center justify-between gap-3 lg:hidden shadow-xl">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-primary truncate leading-tight">{service.title}</p>
          <p className="text-xs text-muted-foreground">{service.price}</p>
        </div>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow-md shrink-0"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          <span>{t({ en: 'Book Consultation', id: 'Booking' })}</span>
        </a>
      </div>
    </>
  );
}
