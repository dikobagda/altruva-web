'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  Award,
  GraduationCap,
  Building2,
  Compass,
  Star,
  Layers,
  Heart,
} from 'lucide-react';

export default function AboutUsContent() {
  const { t } = useLanguage();

  const trustHighlights = [
    {
      icon: Sparkles,
      title: { en: 'Regenerative Focus', id: 'Fokus Regeneratif' },
      subtitle: { en: 'Cellular tissue renewal', id: 'Pembaruan sel & jaringan' },
    },
    {
      icon: Award,
      title: { en: 'Founded by dr. Aldisa', id: 'Didirikan dr. Aldisa' },
      subtitle: { en: 'MSc Aesthetic Med. (UK)', id: 'MSc Aesthetic Med. (UK)' },
    },
    {
      icon: ShieldCheck,
      title: { en: 'FDA-Cleared Tech', id: 'Teknologi Standar Emas' },
      subtitle: { en: 'Sofwave, Emsculpt, Exion', id: 'Sofwave, Emsculpt, Exion' },
    },
    {
      icon: Star,
      title: { en: '4.9★ Patient Rating', id: 'Rating Pasien 4.9★' },
      subtitle: { en: 'Subtle, natural results', id: 'Hasil alami & proporsional' },
    },
  ];

  const exploreCards = [
    {
      icon: GraduationCap,
      tag: { en: 'Medical Leadership', id: 'Kepemimpinan Medis' },
      title: { en: 'Meet dr. Olivia Aldisa', id: 'Temui dr. Olivia Aldisa' },
      desc: {
        en: 'International trainer, KOL, and Queen Mary University of London MSc graduate leading clinical excellence at Altruva.',
        id: 'Trainer internasional, Key Opinion Leader, dan lulusan MSc Queen Mary University of London yang memimpin standar klinis Altruva.',
      },
      href: '/about/meet-dr-olivia-aldisa',
      image: '/images/draldisanew.jpg',
    },
    {
      icon: Zap,
      tag: { en: 'Clinical Technology', id: 'Teknologi Medis' },
      title: { en: 'Our Medical Devices', id: 'Perangkat Medis Kami' },
      desc: {
        en: 'World-class, FDA-cleared energy platforms including Sofwave™ SUPERB ultrasound, Emsculpt Neo®, Exion™, and Remee™ 3D.',
        id: 'Platform energi medis berizin resmi FDA meliputi Sofwave™ SUPERB ultrasound, Emsculpt Neo®, Exion™, dan Remee™ 3D.',
      },
      href: '/about/our-devices',
      image: '/images/devices/sofwave.webp',
    },
    {
      icon: Building2,
      tag: { en: 'Sanctuary Space', id: 'Kenyamanan Klinik' },
      title: { en: 'Our Private Clinic', id: 'Klinik Privat Kami' },
      desc: {
        en: 'Experience our discrete, private, and technologically advanced clinic atmosphere in Kebayoran Baru, South Jakarta.',
        id: 'Rasakan suasana klinik yang privat, tenang, dan berteknologi tinggi di Kebayoran Baru, Jakarta Selatan.',
      },
      href: '/our-clinic',
      image: '/images/ourclinic.webp',
    },
    {
      icon: Compass,
      tag: { en: 'Facial Architecture', id: 'Arsitektur Wajah' },
      title: { en: '369 Harmony™ Philosophy', id: 'Filosofi 369 Harmony™' },
      desc: {
        en: 'Our proprietary multi-dimensional framework for balancing structural profile, facial volume, and surface vitality.',
        id: 'Metode khas Altruva untuk menyelaraskan profil struktural, volume alami, dan vitalitas kulit secara harmonis.',
      },
      href: '/about/369-harmony',
      image: '/images/filosofi.jpg',
    },
  ];

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden pt-[20px] pb-12 md:pb-16 bg-gradient-to-b from-secondary/40 via-background to-background">
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Breadcrumb: 20px from navbar, 50px gap to title */}
          <nav aria-label="Breadcrumb" className="mb-[50px]">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  {t({ en: 'Home', id: 'Beranda' })}
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3 w-3" />
              </li>
              <li className="text-foreground font-medium" aria-current="page">
                {t({ en: 'About Altruva', id: 'Tentang Altruva' })}
              </li>
            </ol>
          </nav>

          {/* Header Content */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge
              variant="outline"
              className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider border-primary/30 text-primary bg-primary/5 rounded-full inline-flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {t({
                en: 'The Altruva Essence • Regenerative Aesthetics',
                id: 'Esensi Altruva • Estetika Regeneratif',
              })}
            </Badge>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
              {t({
                en: 'Where Regenerative Science Meets Natural Elegance',
                id: 'Paduan Sains Regeneratif dan Keanggunan Alami',
              })}
            </h1>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed pt-2">
              {t({
                en: 'Altruva Aesthetic Clinic is Jakarta’s destination for physician-led regenerative aesthetics. We believe authentic beauty is not about transformation, but revelation—restoring structural harmony and cellular vitality without artificial exaggeration.',
                id: 'Altruva Aesthetic Clinic adalah klinik estetika regeneratif terdepan di Jakarta yang dipimpin langsung oleh dokter. Kami meyakini kecantikan sejati bukan tentang merombak wajah, melainkan mengungkap keanggunan alami dengan memulihkan keharmonisan struktur dan vitalitas seluler.',
              })}
            </p>

            {/* Quick Trust Highlights Bar */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
              {trustHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-card/80 border border-border/80 backdrop-blur-sm rounded-lg p-3 shadow-xs"
                  >
                    <Icon className="h-5 w-5 text-primary mb-1" />
                    <p className="text-xs font-semibold text-foreground">
                      {t(item.title)}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {t(item.subtitle)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: OUR PHILOSOPHY ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Visual Side */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border/60 group">
              <Image
                src="/images/filosofi.jpg"
                alt="Altruva Aesthetic Philosophy - Serene Natural Beauty"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-amber-200">
                  {t({ en: 'Clinical Philosophy', id: 'Filosofi Klinis' })}
                </span>
                <p className="font-serif text-lg font-bold">
                  {t({
                    en: '“True beauty is not about transformation, but revelation.”',
                    id: '“Kecantikan sejati bukan tentang merombak, melainkan mengungkap.”',
                  })}
                </p>
              </div>
            </div>

            {/* Narrative Side */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                  {t({ en: 'Our Core Approach', id: 'Pendekatan Utama Kami' })}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {t({
                    en: 'Harmonizing Science with Your Unique Anatomy',
                    id: 'Menyelaraskan Sains Medis dengan Keunikan Anatomi Anda',
                  })}
                </h2>
              </div>

              <p className="text-base text-foreground/80 leading-relaxed">
                {t({
                  en: 'We utilize the latest advancements in regenerative medicine and non-surgical energy devices to work in harmony with your body. By stimulating your own endogenous collagen, elastin, and extracellular matrix, our protocols achieve results that look unmistakably natural and age gracefully over time.',
                  id: 'Kami memanfaatkan terobosan terbaru dalam pengobatan regeneratif dan perangkat energi non-bedah untuk bekerja selaras dengan tubuh Anda. Dengan menstimulasi kolagen, elastin, dan matriks seluler alami, perawatan kami menghasilkan peremajaan yang otentik dan menua dengan anggun.',
                })}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 bg-secondary/30 rounded-xl p-3.5 border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {t({ en: 'Hyper-Personalized Protocols', id: 'Protokol Sangat Terpersonalisasi' })}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/70 mt-0.5">
                      {t({
                        en: 'Every journey begins with a 3D skin analysis. Your treatment strategy is calibrated exclusively for your tissue and facial contours.',
                        id: 'Setiap perawatan diawali pemindaian 3D. Rencana tindakan dirancang eksklusif sesuai kondisi jaringan dan kontur wajah Anda.',
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-secondary/30 rounded-xl p-3.5 border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {t({ en: 'Regenerative Tissue Remodeling', id: 'Pemulihan Jaringan Regeneratif' })}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/70 mt-0.5">
                      {t({
                        en: 'Prioritizing cellular health, collagen density, and elasticity first, followed by structural contouring for authentic longevity.',
                        id: 'Mengutamakan kesehatan seluler, kepadatan kolagen, dan elastisitas kulit terlebih dahulu sebelum pembentukan kontur struktural.',
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-secondary/30 rounded-xl p-3.5 border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {t({ en: 'Non-Surgical Profiloplasty', id: 'Profiloplasti Non-Bedah' })}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/70 mt-0.5">
                      {t({
                        en: 'Mastering facial proportions from front, oblique, and profile angles to celebrate your character without over-filled stiffness.',
                        id: 'Menata proporsi wajah secara seimbang dari sudut depan, samping, dan serong tanpa efek kaku atau volume berlebih.',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: FOUNDER SPOTLIGHT ── */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Doctor Image */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] max-w-sm rounded-2xl overflow-hidden shadow-lg border border-border/70 group bg-card">
                <Image
                  src="/images/draldisanew.jpg"
                  alt="dr. Olivia Aldisa, MSc Aesthetic Med. (UK) - Founder of Altruva Aesthetic Clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-widest text-amber-200 font-semibold block">
                    {t({ en: 'Founder & Medical Director', id: 'Pendiri & Direktur Medis' })}
                  </span>
                  <p className="font-serif text-xl font-bold">dr. Olivia Aldisa</p>
                  <p className="text-xs text-white/80">MSc Aesthetic Med. (Queen Mary London, UK)</p>
                </div>
              </div>
            </div>

            {/* Doctor Narrative */}
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary bg-primary/5 rounded-full"
                >
                  {t({ en: 'Clinical Leadership', id: 'Kepemimpinan Klinis' })}
                </Badge>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {t({
                    en: 'Pioneered by dr. Olivia Aldisa, MSc',
                    id: 'Dipimpin Langsung oleh dr. Olivia Aldisa, MSc',
                  })}
                </h2>
                <p className="text-sm sm:text-base text-primary font-medium">
                  {t({
                    en: 'International Key Opinion Leader (KOL), Speaker & Aesthetic Medicine Specialist',
                    id: 'International Key Opinion Leader (KOL), Pembicara & Spesialis Kedokteran Estetika',
                  })}
                </p>
              </div>

              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {t({
                  en: 'With over a decade of dedicated clinical experience and a Master of Science in Aesthetic Medicine from the prestigious Queen Mary University of London, dr. Aldisa founded Altruva to redefine aesthetic standards. Recognized internationally as an expert trainer for advanced collagen stimulators and profiloplasty, she personally oversees Altruva’s clinical quality and doctor team.',
                  id: 'Dengan pengalaman klinis lebih dari satu dekade serta gelar Master of Science (MSc) in Aesthetic Medicine dari Queen Mary University of London (Inggris), dr. Aldisa mendirikan Altruva untuk menghadirkan standar estetika yang beretika dan ilmiah. Dipercaya sebagai trainer dan pembicara internasional untuk bio-stimulator kolagen dan profiloplasti, beliau mengawasi langsung seluruh protokol dan kualitas medis di Altruva.',
                })}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-card rounded-lg p-3 border border-border/80 text-xs sm:text-sm">
                  <Award className="h-4 w-4 text-primary mb-1" />
                  <p className="font-semibold text-foreground">
                    {t({ en: 'Global Trainer', id: 'Trainer Global' })}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {t({ en: 'AMWC & International KOL', id: 'AMWC & Pembicara Internasional' })}
                  </p>
                </div>
                <div className="bg-card rounded-lg p-3 border border-border/80 text-xs sm:text-sm">
                  <GraduationCap className="h-4 w-4 text-primary mb-1" />
                  <p className="font-semibold text-foreground">
                    {t({ en: 'UK Master Degree', id: 'Gelar Master Inggris' })}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {t({ en: 'Queen Mary Univ. London', id: 'Queen Mary Univ. London' })}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg group"
                >
                  <Link href="/about/meet-dr-olivia-aldisa">
                    <span>{t({ en: 'Read dr. Aldisa’s Full Profile', id: 'Lihat Profil Lengkap dr. Aldisa' })}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: EXPLORE THE ALTRUVA ECOSYSTEM ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              {t({ en: 'Discover Altruva', id: 'Jelajahi Altruva' })}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              {t({
                en: 'Explore Our Pillars of Excellence',
                id: 'Pilar Keunggulan Altruva',
              })}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t({
                en: 'Deep-dive into our certified technology, proprietary treatment framework, and serene clinic environment.',
                id: 'Pelajari lebih dalam teknologi resmi kami, metode perawatan khas, dan suasana klinik yang privat.',
              })}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploreCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/30">
                      <Image
                        src={card.image}
                        alt={t(card.title)}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-semibold text-primary uppercase tracking-wider border border-border/60">
                        {t(card.tag)}
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex items-center gap-2 text-primary">
                        <Icon className="h-4 w-4" />
                        <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {t(card.title)}
                        </h3>
                      </div>
                      <p className="text-xs text-foreground/75 leading-relaxed line-clamp-3">
                        {t(card.desc)}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      href={card.href}
                      className="inline-flex items-center text-xs font-semibold text-primary hover:underline group/link"
                    >
                      <span>{t({ en: 'Learn More', id: 'Pelajari Selengkapnya' })}</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CLINIC ENVIRONMENT & WHY CHOOSE US ── */}
      <section className="py-16 md:py-24 bg-secondary/30 border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Narrative */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                  {t({ en: 'The Altruva Standard', id: 'Standar Layanan Altruva' })}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {t({
                    en: 'Friend First, Patient Second',
                    id: 'Teman Dahulu, Pasien Kemudian',
                  })}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {t({
                  en: 'Your trust is our highest priority. We take the time to understand your lifestyle, aesthetic concerns, and aspirations in a warm, unhurried consultation. We never push unnecessary procedures; our doctors recommend only what serves your long-term facial health and natural balance.',
                  id: 'Kepercayaan Anda adalah prioritas tertinggi kami. Kami meluangkan waktu untuk mendengarkan gaya hidup, kekhawatiran, dan harapan Anda melalui sesi konsultasi yang hangat dan mendalam. Kami tidak pernah memaksakan prosedur yang tidak diperlukan; dokter kami hanya merekomendasikan apa yang benar-benar bermanfaat bagi kesehatan dan harmoni wajah jangka panjang Anda.',
                })}
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">
                      {t({ en: 'Medical Safety & Authentic Products', id: 'Keamanan Medis & Produk Asli' })}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {t({
                        en: '100% genuine medical-grade consumables and FDA/BPOM-cleared products sourced directly from authorized principals.',
                        id: 'Semua produk berizin BPOM & FDA dari distributor resmi. Segel kemasan dibuka transparan di hadapan pasien.',
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">
                      {t({ en: 'Private & Discrete Experience', id: 'Pengalaman Privat & Eksklusif' })}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {t({
                        en: 'Private treatment suites designed for utmost comfort, calm, and confidential care.',
                        id: 'Ruang perawatan privat yang dirancang untuk kenyamanan maksimal, ketenangan, dan privasi penuh.',
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">
                      {t({ en: 'Enduring, Age-Graceful Results', id: 'Hasil Tahan Lama & Anggun' })}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {t({
                        en: 'Designed to elevate your confidence with subtle enhancements that friends notice as glowing freshness.',
                        id: 'Dirancang untuk meningkatkan kepercayaan diri dengan perubahan halus yang tampak segar dan segar alami.',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border/70 group">
              <Image
                src="/images/frontclinic.webp"
                alt="Altruva Aesthetic Clinic Front View"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-widest text-amber-200 font-semibold block">
                  {t({ en: 'Kebayoran Baru, South Jakarta', id: 'Kebayoran Baru, Jakarta Selatan' })}
                </span>
                <p className="font-serif text-lg font-bold">
                  {t({ en: 'Altruva Aesthetic Sanctuary', id: 'Suasana Klinik Altruva' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CALL TO ACTION BANNER ── */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-primary-foreground/10 via-transparent to-transparent opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary-foreground/80 px-3 py-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 inline-block">
            {t({ en: 'Begin Your Transformation', id: 'Awali Perjalanan Anda' })}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {t({
              en: 'Experience the Altruva Difference',
              id: 'Rasakan Perbedaan Standar di Altruva',
            })}
          </h2>

          <p className="text-base sm:text-lg opacity-90 max-w-xl mx-auto leading-relaxed">
            {t({
              en: 'Schedule a personalized one-on-one consultation with our aesthetic physician to explore how our regenerative treatments can bring out your most radiant, natural self.',
              id: 'Jadwalkan konsultasi pribadi dengan dokter estetika kami untuk merencanakan perawatan regeneratif yang disesuaikan khusus dengan karakter dan anatomi wajah Anda.',
            })}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto shadow-md"
            >
              <Link href="/book-appointment">
                {t({ en: 'Book Your Consultation', id: 'Jadwalkan Konsultasi Anda' })}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
            >
              <Link href="/treatments">
                {t({ en: 'Explore Our Treatments', id: 'Lihat Semua Perawatan' })}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
