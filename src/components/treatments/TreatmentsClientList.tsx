'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { services } from '@/lib/data/services';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import {
  ArrowRight,
  Clock,
  Sparkles,
  ChevronRight,
  Search,
  X,
  ShieldCheck,
  UserCheck,
  Award,
  HelpCircle,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type GroupName = 'All' | 'Altruva Glow' | 'Altruva Lift' | 'Body Contouring' | 'Hair Restoration' | 'Signature Facials';

const GROUP_ACCENT_COLORS: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  'Altruva Glow':      { bg: 'bg-amber-50',   text: 'text-amber-800',   border: 'border-amber-200',   badge: 'bg-amber-100 text-amber-700' },
  'Altruva Lift':      { bg: 'bg-rose-50',    text: 'text-rose-800',    border: 'border-rose-200',    badge: 'bg-rose-100 text-rose-700' },
  'Body Contouring':   { bg: 'bg-indigo-50',  text: 'text-indigo-800',  border: 'border-indigo-200',  badge: 'bg-indigo-100 text-indigo-700' },
  'Hair Restoration':  { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  'Signature Facials': { bg: 'bg-violet-50',  text: 'text-violet-800',  border: 'border-violet-200',  badge: 'bg-violet-100 text-violet-700' },
};

const CLINICAL_STANDARDS = [
  {
    icon: UserCheck,
    title: { en: '100% Doctor-Led', id: '100% Ditangani Dokter' },
    desc: {
      en: 'All invasive and energy procedures performed directly by licensed aesthetic doctors.',
      id: 'Semua prosedur klinis ditangani langsung oleh dokter spesialis dan estetika berlisensi.',
    },
  },
  {
    icon: ShieldCheck,
    title: { en: 'FDA & BPOM Approved', id: 'Sertifikasi FDA & BPOM' },
    desc: {
      en: 'Only gold-standard medical equipment, genuine injectables, and cleared devices.',
      id: 'Menggunakan perangkat medis teruji, produk biostimulator asli, dan berstandar internasional.',
    },
  },
  {
    icon: Award,
    title: { en: '369 Harmony Method', id: 'Metode Harmoni 369' },
    desc: {
      en: 'Deep facial architecture and cellular analysis tailored to your unique anatomical balance.',
      id: 'Pemetaan proporsi wajah dan biologi seluler untuk hasil proporsional tanpa efek berlebihan.',
    },
  },
  {
    icon: Clock,
    title: { en: 'Minimal to Zero Downtime', id: 'Waktu Pemulihan Minimal' },
    desc: {
      en: 'Non-surgical regenerative protocols allowing immediate resumption of social activities.',
      id: 'Protokol regeneratif non-bedah modern yang memungkinkan Anda segera beraktivitas normal.',
    },
  },
];

const TREATMENT_PILLARS = [
  {
    group: 'Altruva Lift',
    title: { en: 'Altruva Lift', id: 'Altruva Lift' },
    subtitle: { en: 'Non-Surgical Lifting & Contouring', id: 'Pengencangan Wajah Tanpa Operasi' },
    description: {
      en: 'Targeted ultrasound and biostimulatory protocols that activate deep SMAS and dermal collagen for natural architectural lifting.',
      id: 'Gelombang ultrasound dan biostimulasi terarah yang mengaktivasi kolagen SMAS dan dermis untuk pengencangan alami berdurasi panjang.',
    },
    technologies: 'Sofwave, GOURI Biostimulator, Vector Lift',
  },
  {
    group: 'Altruva Glow',
    title: { en: 'Altruva Glow', id: 'Altruva Glow' },
    subtitle: { en: 'Cellular Skin Rejuvenation & Radiance', id: 'Pencerahan & Peremajaan Seluler' },
    description: {
      en: 'Polynucleotides (PDRN), exosomes, and micro-fractional RF therapies targeting hyperpigmentation, collagen synthesis, and glass-skin hydration.',
      id: 'Polinukleotida (PDRN), eksosom, dan RF mikrofraksional untuk meredakan flek, memperkuat elastisitas kulit, dan mengembalikan kilau alami.',
    },
    technologies: 'Exion RF, Salmon DNA PDRN, Glutathione Infusion',
  },
  {
    group: 'Body Contouring',
    title: { en: 'Body Contouring', id: 'Body Contouring' },
    subtitle: { en: 'Non-Invasive Muscle Sculpting & Fat Loss', id: 'Pembentukan Otot & Reduksi Lemak' },
    description: {
      en: 'Synchronized radiofrequency and high-intensity electromagnetic field therapies that build lean muscle while permanently burning stubborn fat.',
      id: 'Teknologi radiofrekuensi sinkron dan gelombang elektromagnetik intensitas tinggi untuk mempertegas otot dan mereduksi lemak lokal.',
    },
    technologies: 'EmSculpt Neo, Medical Lymphatic Drainage',
  },
  {
    group: 'Hair Restoration',
    title: { en: 'Hair Restoration', id: 'Hair Restoration' },
    subtitle: { en: 'Regenerative Follicle Revitalization', id: 'Revitalisasi Folikel Rambut' },
    description: {
      en: 'Cellular growth factors, scalp microneedling, and bio-peptides that nourish dormant follicles and stimulate dense, healthy hair growth.',
      id: 'Faktor pertumbuhan seluler, mikronutrisi kulit kepala, dan bio-peptida untuk memperkuat akar serta merangsang pertumbuhan helai rambut baru.',
    },
    technologies: 'Exosome Scalp Therapy, Follicular Peptide Infusion',
  },
  {
    group: 'Signature Facials',
    title: { en: 'Signature Facials', id: 'Signature Facials' },
    subtitle: { en: 'Medical-Grade Purity & Barrier Health', id: 'Perawatan Wajah Medis Mendalam' },
    description: {
      en: 'Clinical hydro-dermabrasion, deep pore vacuuming, and bespoke antioxidant infusions to restore barrier integrity with instant glow.',
      id: 'Hidro-dermabrasi klinis, pembersihan komedo mendalam, dan infusi antioksidan medis untuk menjaga hidrasi dan ketahanan skin barrier.',
    },
    technologies: 'Altruva Pure Hydra, Medical Lymphatic Facial',
  },
];

const TREATMENTS_FAQ = [
  {
    question: {
      en: 'What makes Altruva’s regenerative aesthetic approach unique in Jakarta?',
      id: 'Apa keunggulan pendekatan estetika regeneratif di Altruva Clinic Jakarta?',
    },
    answer: {
      en: 'Altruva champions a cellular-first, regenerative philosophy that focuses on bio-stimulating your body’s own collagen and elastin rather than creating artificial volume. Led directly by dr. Olivia Aldisa, every protocol combines FDA & BPOM-cleared medical technologies with personalized biological mapping for natural, long-lasting harmony.',
      id: 'Altruva mengedepankan pendekatan regeneratif yang berfokus pada stimulasi kolagen alami, pembaruan seluler, dan pemetaan anatomi wajah yang harmonis tanpa operasi berlebihan, dipimpin langsung oleh dr. Olivia Aldisa dengan teknologi bersertifikat FDA dan BPOM.',
    },
  },
  {
    question: {
      en: 'How do I know which treatment is right for my unique skin biology?',
      id: 'Bagaimana cara menentukan treatment yang paling tepat untuk kebutuhan saya?',
    },
    answer: {
      en: 'Each patient receives an in-depth clinical skin assessment and 3D facial architecture consultation prior to any treatment. Our doctors customize an individualized roadmap matching your specific skin goals, anatomy, and lifestyle timeline.',
      id: 'Setiap pasien menjalani penilaian kulit seluler dan pemetaan anatomi mendalam bersama dokter sebelum tindakan. Protokol dirancang secara terpersonalisasi sesuai biologi unik dan sasaran estetika Anda.',
    },
  },
  {
    question: {
      en: 'Are all procedures performed directly by licensed aesthetic doctors?',
      id: 'Apakah seluruh prosedur medis dilakukan langsung oleh dokter?',
    },
    answer: {
      en: 'Yes. Every clinical procedure—including biostimulators, high-energy ultrasound, dermal contouring, and advanced lasers—is administered 100% by certified, experienced medical doctors.',
      id: 'Ya, seluruh prosedur medis seperti injeksi, biostimulator, laser, dan teknologi energi tinggi dilakukan 100% langsung oleh dokter estetika bersertifikasi internasional.',
    },
  },
  {
    question: {
      en: 'Do Altruva treatments require extended recovery or downtime?',
      id: 'Apakah perawatan di Altruva memerlukan waktu pemulihan (downtime)?',
    },
    answer: {
      en: 'The vast majority of our advanced protocols are completely non-invasive or minimally invasive with minimal to zero downtime. Most patients can immediately return to work, social engagements, or daily routines.',
      id: 'Sebagian besar protokol Altruva bersifat non-invasif dengan downtime minimal hingga nol, memungkinkan pasien untuk segera kembali beraktivitas normal.',
    },
  },
];

const GROUPS: GroupName[] = [
  'All',
  'Altruva Glow',
  'Altruva Lift',
  'Body Contouring',
  'Hair Restoration',
  'Signature Facials',
];

function TreatmentCard({ service, index }: { service: typeof services[0]; index: number }) {
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
      {/* Image */}
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

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-serif text-lg font-bold text-primary leading-snug mb-2 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-foreground/70 leading-relaxed flex-1 line-clamp-2">
          {t(service.description)}
        </p>

        {/* Protocol pills */}
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

        {/* CTA */}
        <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-medium">{service.price}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function TreatmentsClientList() {
  const { t } = useLanguage();
  const [activeGroup, setActiveGroup] = useState<GroupName>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredServices = services.filter((s) => {
    const matchesGroup = activeGroup === 'All' || s.group === activeGroup;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      s.title.toLowerCase().includes(q) ||
      t(s.description).toLowerCase().includes(q) ||
      s.subgroup.toLowerCase().includes(q) ||
      s.group.toLowerCase().includes(q);
    return matchesGroup && matchesSearch;
  });

  const groupedServices = services.reduce((acc, s) => {
    acc[s.group] = (acc[s.group] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-primary/5 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-accent/80 border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full">
            {t({ en: 'Science-Backed Beauty', id: 'Kecantikan Berbasis Sains' })}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary max-w-3xl mx-auto leading-tight mb-4">
            {t({ en: 'Our Treatments', id: 'Perawatan Kami' })}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
            {t({
              en: 'Discover our comprehensive range of regenerative and aesthetic treatments, tailored to your unique biology.',
              id: 'Temukan rangkaian lengkap perawatan regeneratif dan estetika kami, disesuaikan dengan biologi unik Anda.',
            })}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-serif">{services.length}+</div>
              <div className="text-xs text-foreground/60 uppercase tracking-wider mt-0.5">
                {t({ en: 'Treatments', id: 'Perawatan' })}
              </div>
            </div>
            <div className="w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-serif">5</div>
              <div className="text-xs text-foreground/60 uppercase tracking-wider mt-0.5">
                {t({ en: 'Categories', id: 'Kategori' })}
              </div>
            </div>
            <div className="w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-serif">0</div>
              <div className="text-xs text-foreground/60 uppercase tracking-wider mt-0.5">
                {t({ en: 'Downtime', id: 'Waktu Henti' })}
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t({ en: 'Search treatments…', id: 'Cari perawatan…' })}
              className="w-full pl-11 pr-10 py-3 rounded-full border border-border bg-card shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── FILTER TABS + CARDS ── */}
      <SectionWrapper className="pt-6 md:pt-10">
        {/* Sticky filter tabs */}
        <div className="sticky top-16 z-20 -mx-4 md:-mx-6 px-4 md:px-6 py-3 bg-background/90 backdrop-blur-md border-b border-border/50 mb-8">
          <div className="flex gap-2 overflow-x-auto pb-0.5 max-w-6xl mx-auto">
            {GROUPS.map((g) => {
              const isActive = activeGroup === g;
              const count = g === 'All' ? services.length : (groupedServices[g] ?? 0);
              return (
                <button
                  key={g}
                  onClick={() => setActiveGroup(g)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-md scale-[1.03]'
                      : 'bg-secondary/60 text-foreground/70 hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {g === 'All' ? t({ en: 'All Treatments', id: 'Semua Perawatan' }) : g}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-border text-foreground/50'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Active group description banner */}
          {activeGroup !== 'All' && !searchQuery && (() => {
            const firstInGroup = services.find(s => s.group === activeGroup);
            const colors = GROUP_ACCENT_COLORS[activeGroup];
            return firstInGroup ? (
              <div className={`mb-8 p-5 rounded-2xl border ${colors.border} ${colors.bg}`}>
              <div className="flex items-start">
                  <div>
                    <h2 className={`font-serif text-xl font-bold ${colors.text} mb-1`}>{activeGroup}</h2>
                    <p className={`text-sm ${colors.text}/80`}>{t(firstInGroup.groupDescription)}</p>
                  </div>
                </div>
              </div>
            ) : null;
          })()}

          {/* Results count when searching */}
          {searchQuery && (
            <p className="text-sm text-muted-foreground mb-6">
              {filteredServices.length === 0
                ? t({ en: 'No treatments found.', id: 'Tidak ada perawatan ditemukan.' })
                : t({
                    en: `${filteredServices.length} treatment${filteredServices.length !== 1 ? 's' : ''} found`,
                    id: `${filteredServices.length} perawatan ditemukan`,
                  })}
            </p>
          )}

          {/* Treatment grid */}
          {filteredServices.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service, i) => (
                <TreatmentCard key={service.id} service={service} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              <span className="text-5xl block mb-4">🔍</span>
              <p className="text-lg font-medium">{t({ en: 'No treatments found', id: 'Tidak ada perawatan ditemukan' })}</p>
              <p className="text-sm mt-1">{t({ en: 'Try a different keyword or category', id: 'Coba kata kunci atau kategori lain' })}</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveGroup('All'); }}
                className="mt-4 text-sm text-accent hover:underline"
              >
                {t({ en: 'Clear filters', id: 'Hapus filter' })}
              </button>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* ── CLINICAL STANDARDS & 5 PILLARS EDITORIAL ── */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border/60">
        {/* Standards Row */}
        <div className="container mx-auto px-4 md:px-6 mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {CLINICAL_STANDARDS.map((std, i) => {
              const Icon = std.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-card border border-border/80 shadow-2xs hover:shadow-md transition-shadow"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-1.5">
                    {t(std.title)}
                  </h3>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    {t(std.desc)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5 Treatment Pillars Editorial */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent/80 border border-accent/20 bg-accent/5 px-3.5 py-1 rounded-full mb-3">
              {t({ en: 'Regenerative Philosophy', id: 'Filosofi Kedokteran Regeneratif' })}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 leading-tight">
              {t({
                en: 'The 5 Pillars of Altruva Aesthetic Medicine',
                id: '5 Pilar Kedokteran Estetika Regeneratif Altruva',
              })}
            </h2>
            <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
              {t({
                en: 'Every protocol at Altruva is calibrated to activate cellular repair pathways, stimulate natural neocollagenesis, and preserve individual facial architecture without unnatural exaggeration.',
                id: 'Setiap protokol di Altruva dikalibrasi untuk mengaktivasi pembaruan seluler, merangsang neokolagenesis alami tubuh, dan mempertahankan harmoni proporsi wajah tanpa kesan berlebihan.',
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TREATMENT_PILLARS.map((pillar) => {
              const colors = GROUP_ACCENT_COLORS[pillar.group] ?? {
                bg: 'bg-stone-50', text: 'text-stone-800', border: 'border-stone-200', badge: 'bg-stone-100 text-stone-700',
              };
              return (
                <article
                  key={pillar.group}
                  className="flex flex-col p-6 rounded-2xl bg-card border border-border shadow-2xs hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
                      {pillar.group}
                    </span>
                    <button
                      onClick={() => {
                        setActiveGroup(pillar.group as GroupName);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-accent hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {t({ en: 'View treatments', id: 'Lihat treatment' })}
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-1">
                    {t(pillar.title)}
                  </h3>
                  <p className="text-xs font-medium text-accent mb-3">
                    {t(pillar.subtitle)}
                  </p>
                  <p className="text-sm text-foreground/75 leading-relaxed flex-1 mb-4">
                    {t(pillar.description)}
                  </p>
                  <div className="pt-3 border-t border-border/60 text-xs text-foreground/60">
                    <span className="font-semibold text-foreground/80">
                      {t({ en: 'Key Tech: ', id: 'Teknologi Utama: ' })}
                    </span>
                    {pillar.technologies}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQ) ── */}
      <SectionWrapper className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent/80 border border-accent/20 bg-accent/5 px-3.5 py-1 rounded-full mb-3">
              {t({ en: 'Got Questions?', id: 'Pertanyaan Umum' })}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
              {t({
                en: 'Frequently Asked Questions About Our Treatments',
                id: 'Pertanyaan Seputar Perawatan di Altruva',
              })}
            </h2>
            <p className="text-sm md:text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {t({
                en: 'Everything you need to know about our doctor consultations, protocols, and clinical standards in Jakarta.',
                id: 'Segala hal yang perlu Anda ketahui mengenai konsultasi dokter, protokol tindakan, dan standar klinis kami di Jakarta.',
              })}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {TREATMENTS_FAQ.map((faq, index) => (
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

          <div className="mt-10 p-6 rounded-2xl bg-secondary/50 border border-border text-center">
            <p className="text-sm font-medium text-foreground/80 mb-3">
              {t({
                en: 'Have questions about a specific skin concern or treatment protocol?',
                id: 'Punya pertanyaan khusus tentang kondisi kulit atau protokol perawatan Anda?',
              })}
            </p>
            <a
              href="https://wa.me/6281216119392?text=Halo%20Altruva,%20saya%20ingin%20konsultasi%20mengenai%20perawatan%20di%20Altruva."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              {t({ en: 'Chat with Medical Concierge', id: 'Konsultasi Tim Medis via WhatsApp' })}
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* ── CTA BANNER ── */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent p-10 md:p-16 text-center shadow-2xl">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
            <div className="relative z-10">
              <span className="inline-block text-white/70 text-sm font-semibold tracking-widest uppercase mb-3">
                {t({ en: 'Ready to Begin?', id: 'Siap Memulai?' })}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {t({ en: 'Your Skin Transformation Awaits', id: 'Transformasi Kulit Anda Menanti' })}
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8 text-base md:text-lg">
                {t({
                  en: 'Book a personalized consultation with our experts and discover the right treatment for your unique goals.',
                  id: 'Jadwalkan konsultasi personal dengan ahli kami dan temukan perawatan yang tepat untuk tujuan unik Anda.',
                })}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full shadow-lg px-8">
                  <Link href="/book-appointment">
                    {t({ en: 'Book a Consultation', id: 'Jadwalkan Konsultasi' })}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-11 px-8 rounded-full text-sm font-semibold border border-white/50 text-white bg-transparent hover:bg-white/15 transition-colors"
                >
                  {t({ en: 'Ask a Question', id: 'Tanya Pertanyaan' })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
