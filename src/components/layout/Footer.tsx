'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  Instagram,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Footer() {
  const { t, language } = useLanguage();
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [isOpenToday, setIsOpenToday] = useState<boolean>(true);

  useEffect(() => {
    const now = new Date();
    setCurrentYear(now.getFullYear());
    // In Jakarta (UTC+7), Monday is day 1 (0 is Sunday)
    const day = now.getDay();
    setIsOpenToday(day !== 1); // Open Tue-Sun, Closed Mon
  }, []);

  const whatsappUrl =
    'https://wa.me/6281216119392?text=Halo%20Altruva,%20saya%20tertarik%20untuk%20konsultasi%20dan%20tahu%20lebih%20lanjut%20mengenai%20perawatan%20di%20Altruva.';

  const openingHours = [
    {
      days: { en: 'Tuesday – Saturday', id: 'Selasa – Sabtu' },
      hours: '10:00 AM – 6:00 PM',
      hoursId: '10.00 – 18.00 WIB',
    },
    {
      days: { en: 'Sunday', id: 'Minggu' },
      hours: '9:00 AM – 5:00 PM',
      hoursId: '09.00 – 17.00 WIB',
    },
    {
      days: { en: 'Monday', id: 'Senin' },
      hours: { en: 'Closed (By Appointment)', id: 'Tutup (Khusus Reservasi)' },
      isClosed: true,
    },
  ];

  const quickLinksAbout = [
    { href: '/about', label: { en: 'Philosophy & Mission', id: 'Filosofi & Esensi' } },
    { href: '/about/meet-dr-olivia-aldisa', label: { en: 'Meet dr. Olivia Aldisa', id: 'Temui dr. Olivia Aldisa' } },
    { href: '/about/369-harmony', label: { en: '369 Harmony Approach™', id: 'Pendekatan 369 Harmony™' } },
    { href: '/our-clinic', label: { en: 'Our Clinic & Private Suites', id: 'Klinik & Suite Privat' } },
    { href: '/about/our-devices', label: { en: 'Medical Devices & Tech', id: 'Perangkat & Teknologi Medis' } },
    { href: '/news-media', label: { en: 'News & Media Features', id: 'Berita & Liputan Media' } },
  ];

  const quickLinksTreatments = [
    { href: '/treatments', label: { en: 'All Clinical Treatments', id: 'Seluruh Menu Perawatan' } },
    { href: '/treatments/art-lyft-lite', label: { en: 'Altruva A.R.T Lift (Lite)', id: 'Altruva A.R.T Lift (Lite)' } },
    { href: '/treatments/gorgeous-lyft-prejuvenation', label: { en: 'Altruva Gorgeous Lyft', id: 'Altruva Gorgeous Lyft' } },
    { href: '/treatments/exion-lumi-rf', label: { en: 'Altruva Lumi RF & Ultrasound', id: 'Altruva Lumi RF & Ultrasound' } },
    { href: '/skin-analysis', label: { en: 'Remee™ 3D Skin Analysis', id: 'Analisis Kulit 3D Remee™' } },
    { href: '/beauty-journal', label: { en: 'Beauty Journal & Guides', id: 'Beauty Journal & Edukasi' } },
  ];

  return (
    <footer className="relative bg-secondary/50 text-secondary-foreground border-t border-border/80 overflow-hidden">
      {/* ── TOP CONCIERGE BANNER ── */}
      <div className="border-b border-border/60 relative z-10">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 lg:py-12">
          <div className="rounded-2xl bg-card border border-border/80 p-6 sm:p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <Badge
                variant="outline"
                className="text-[11px] font-mono border-primary/30 text-primary bg-primary/5 px-3 py-0.5 rounded-full inline-flex items-center gap-1.5"
              >
                <Sparkles className="h-3 w-3" />
                {t({ en: 'Private Medical Concierge', id: 'Layanan Concierge Medis Privat' })}
              </Badge>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                {t({
                  en: 'Begin Your Rejuvenation Journey',
                  id: 'Awali Perjalanan Peremajaan Kulit Anda',
                })}
              </h3>
              <p className="text-sm text-foreground/75 leading-relaxed">
                {t({
                  en: 'Schedule your personalized diagnostic consultation and Remee™ 3D Multi-Spectral Skin Scan with dr. Olivia Aldisa and our medical team.',
                  id: 'Jadwalkan konsultasi diagnostik personal dan pemindaian kulit 3D Remee™ bersama dr. Olivia Aldisa dan tim dokter medis kami.',
                })}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-xs w-full sm:w-auto"
              >
                <Link href="/book-appointment">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{t({ en: 'Book Consultation', id: 'Buat Janji Temu' })}</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border/80 bg-background text-foreground hover:text-foreground hover:bg-secondary w-full sm:w-auto font-medium transition-colors"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Image
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span>WhatsApp Concierge</span>
                  <ArrowUpRight className="h-3.5 w-3.5 ml-0.5 opacity-70" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER NAVIGATION GRID ── */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logoaltruvanew.webp"
                  width={180}
                  height={180}
                  className="w-[72px] h-[72px] object-contain group-hover:scale-105 transition-transform duration-300"
                  alt="Altruva Aesthetic Clinic Logo"
                />
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-primary block">
                    ALTRUVA
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/70 font-semibold block">
                    Aesthetic Clinic
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-sm text-foreground/75 leading-relaxed max-w-md">
              {t({
                en: 'Jakarta’s premier clinical destination for regenerative facial longevity. Combining FDA-cleared energy platforms with bespoke doctor artistry for natural, enduring beauty.',
                id: 'Klinik medis terdepan di Jakarta untuk peremajaan wajah regeneratif jangka panjang. Memadukan teknologi energi berstandar FDA dengan seni klinis dokter untuk keindahan alami yang abadi.',
              })}
            </p>

            {/* Trust Badges */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-2 text-xs text-foreground/75">
                <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{t({ en: '100% Authentic, FDA-Cleared Medical Devices', id: '100% Mesin Medis Asli Bersertifikasi FDA' })}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground/75">
                <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{t({ en: 'Performed Exclusively by Certified Medical Doctors', id: 'Ditangani Langsung oleh Dokter Medis Tersertifikasi' })}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground/75">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Kebayoran Baru, Jakarta Selatan</span>
              </div>
            </div>

            {/* Social & Channel Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/altruvaclinic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @altruvaclinic"
                className="w-10 h-10 rounded-xl bg-card border border-border/80 text-foreground hover:text-primary hover:border-primary/50 hover:bg-secondary/50 transition-all flex items-center justify-center shadow-xs"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Concierge"
                className="w-10 h-10 rounded-xl bg-card border border-border/80 text-foreground hover:text-primary hover:border-primary/50 hover:bg-secondary/50 transition-all flex items-center justify-center shadow-xs"
              >
                <Image
                  src="/images/whatsapp.png"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </a>
              <a
                href="mailto:admin@altruva.co.id"
                aria-label="Email Altruva"
                className="w-10 h-10 rounded-xl bg-card border border-border/80 text-foreground hover:text-primary hover:border-primary/50 hover:bg-secondary/50 transition-all flex items-center justify-center shadow-xs"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:+6281216119392"
                aria-label="Call Altruva"
                className="w-10 h-10 rounded-xl bg-card border border-border/80 text-foreground hover:text-primary hover:border-primary/50 hover:bg-secondary/50 transition-all flex items-center justify-center shadow-xs"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: About Altruva (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-primary uppercase tracking-wider">
              {t({ en: 'About Altruva', id: 'Tentang Kami' })}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinksAbout.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-foreground/75 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-3 w-3 text-primary/50 group-hover:translate-x-0.5 group-hover:text-primary transition-transform" />
                    <span>{t(link.label)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments & Care (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-primary uppercase tracking-wider">
              {t({ en: 'Treatments', id: 'Perawatan' })}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinksTreatments.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-foreground/75 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-3 w-3 text-primary/50 group-hover:translate-x-0.5 group-hover:text-primary transition-transform" />
                    <span>{t(link.label)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hours & Clinic Location (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-base font-bold text-primary uppercase tracking-wider">
                {t({ en: 'Clinic Hours', id: 'Jam Operasional' })}
              </h4>
              <Badge
                variant="outline"
                className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  isOpenToday
                    ? 'border-emerald-600/30 text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-300'
                    : 'border-amber-600/30 text-amber-700 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-300'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current mr-1 animate-pulse" />
                {isOpenToday
                  ? t({ en: 'Open Today', id: 'Buka Hari Ini' })
                  : t({ en: 'Closed Today', id: 'Tutup Hari Ini' })}
              </Badge>
            </div>

            {/* Operating Hours Card */}
            <div className="rounded-xl bg-card border border-border/80 p-4 space-y-2 text-xs shadow-xs">
              {openingHours.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center py-1 ${
                    idx !== openingHours.length - 1 ? 'border-b border-border/40' : ''
                  }`}
                >
                  <span className="font-medium text-foreground">{t(item.days)}</span>
                  <span
                    className={`text-right font-mono text-[11px] ${
                      item.isClosed ? 'text-amber-700 font-sans' : 'text-foreground/70'
                    }`}
                  >
                    {language === 'id' && item.hoursId
                      ? item.hoursId
                      : typeof item.hours === 'object'
                      ? t(item.hours)
                      : item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Location & Directions */}
            <div className="space-y-2 pt-1" itemScope itemType="https://schema.org/PostalAddress">
              <div className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span itemProp="streetAddress" className="font-medium text-foreground block">
                    Jl. Ciasem I No.2, Kebayoran Baru
                  </span>
                  <span itemProp="addressLocality">Jakarta Selatan, DKI Jakarta </span>
                  <span itemProp="postalCode">12180</span>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap gap-3 text-xs">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Jl.+Ciasem+I+No.2+Kebayoran+Baru+Jakarta+Selatan+12180"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to Altruva on Google Maps"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  <span>{t({ en: 'Get Google Maps Directions', id: 'Petunjuk Arah Google Maps' })}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM SUB-FOOTER: MEDICAL TRANSPARENCY & LEGAL ── */}
      <div className="border-t border-border/80 bg-secondary/70 text-foreground/70 text-xs">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 space-y-4">
          <p className="text-[11px] leading-relaxed text-foreground/60 text-center sm:text-left">
            {t({
              en: 'Medical Disclaimer: All aesthetic procedures at Altruva Aesthetic Clinic are conducted strictly by licensed medical doctors following individualized diagnostic consultation. Treatment plans, clinical outcomes, and longevity vary based on individual anatomy, tissue condition, and biological responsiveness.',
              id: 'Pemberitahuan Medis: Seluruh prosedur estetika medis di Altruva Aesthetic Clinic dilakukan langsung oleh dokter medis berlisensi setelah konsultasi diagnostik personal. Rencana perawatan dan hasil yang dicapai dapat bervariasi tergantung pada kondisi anatomi dan karakteristik biologis masing-masing individu.',
            })}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-border/50">
            <p className="text-center sm:text-left">
              &copy; {currentYear || '2026'} Altruva Aesthetic Clinic. {t({ en: 'All rights reserved.', id: 'Seluruh hak cipta dilindungi.' })}
            </p>

            <ul className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-foreground/70">
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>•</li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  {t({ en: 'Contact Concierge', id: 'Kontak Concierge' })}
                </Link>
              </li>
              <li>•</li>
              <li>
                <Link href="/book-appointment" className="hover:text-primary transition-colors">
                  {t({ en: 'Appointments', id: 'Reservasi' })}
                </Link>
              </li>
              <li>•</li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  {t({ en: 'Clinic Standards', id: 'Standar Klinik' })}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
