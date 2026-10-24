'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronRight,
  Clock,
  Target,
  Gem,
  Diamond,
  Star,
  Layers,
  ArrowRight,
  HeartHandshake,
  Award,
  Calendar,
  Check,
  TrendingUp,
  Microscope,
  Rocket,
} from 'lucide-react';

export default function Harmony369Content() {
  const { t, language } = useLanguage();
  const [activePhase, setActivePhase] = useState<string>('phase-3');

  const principles3M = [
    {
      step: '01',
      title: { en: 'Multilayered Aging', id: 'Penuaan Multilapis (Multilayered)' },
      subtitle: { en: 'Bone • Fat Pads • Dermis • Epidermis', id: 'Tulang • Bantalan Lemak • Dermis • Epidermis' },
      description: {
        en: 'Facial aging is never superficial. It occurs simultaneously across bone resorption, deep fat compartment shifts, collagen thinning, and surface barrier loss. True rejuvenation requires treating each layer in its natural biological order.',
        id: 'Penuaan wajah tidak hanya terjadi di permukaan. Terjadi degradasi tulang penyangga, pergeseran bantalan lemak dalam, penipisan kolagen, dan kerusakan barier kulit. Peremajaan sejati harus merawat setiap lapisan secara berurutan.',
      },
      icon: Layers,
    },
    {
      step: '02',
      title: { en: 'Multifactorial Drivers', id: 'Pemicu Multifaktor (Multifactorial)' },
      subtitle: { en: 'Biology • Hormones • UV • Lifestyle', id: 'Biologi • Hormon • Paparan UV • Gaya Hidup' },
      description: {
        en: 'Cellular degradation is driven by chronological aging, UV photoaging, glycation, and oxidative stress. We address both internal cellular capacity and external environmental protection to secure lasting results.',
        id: 'Degradasi seluler dipicu oleh penuaan kronologis, kerusakan sinar UV, proses glikasi, dan stres oksidatif. Kami memadukan aktivasi kapasitas sel internal dan perlindungan lingkungan luar agar hasil bertahan lama.',
      },
      icon: Microscope,
    },
    {
      step: '03',
      title: { en: 'Multimodal Strategy', id: 'Strategi Multimoda (Multimodal)' },
      subtitle: { en: 'Energy • Biostimulation • Profiloplasty', id: 'Energi Medis • Biostimulasi • Profiloplasti' },
      description: {
        en: 'No single machine or syringe can reverse multilayered aging alone. We combine precision energy devices (Sofwave, Exion) with regenerative bio-stimulators (GOURI, polynucleotides) for compounded results.',
        id: 'Tidak ada satu mesin atau satu spuit injeksi pun yang mampu mengatasi penuaan sendirian. Kami menyinergikan perangkat energi (Sofwave, Exion) dengan bio-stimulator kolagen (GOURI, polinukleotida) untuk hasil eksponensial.',
      },
      icon: Zap,
    },
  ];

  const phases = [
    {
      id: 'phase-3',
      number: '3',
      name: { en: 'Phase 3: Foundation', id: 'Fase 3: Fondasi' },
      cadence: { en: 'Quarterly (Month 1 – 3)', id: 'Triwulanan (Bulan 1 – 3)' },
      theme: { en: 'Hydration • Texture • Cellular Vitality', id: 'Hidrasi • Tekstur • Vitalitas Sel' },
      tagline: {
        en: '“Build the biological foundation before structural intervention.”',
        id: '“Bangun fondasi biologis kulit sebelum intervensi struktural.”',
      },
      description: {
        en: 'Phase 3 focuses on strengthening the skin barrier, improving extracellular hydration, and kickstarting cellular turnover. Without a resilient foundation, deeper lifting treatments cannot reach their full regenerative potential.',
        id: 'Fase 3 berfokus memperkuat skin barrier, meningkatkan hidrasi ekstraseluler, dan memicu regenerasi sel dasar. Tanpa fondasi kulit yang sehat, perawatan lifting di lapisan dalam tidak akan mencapai hasil optimal.',
      },
      treatments: [
        { en: 'Signature Clinical Facial & Medical Infusion', id: 'Signature Clinical Facial & Medical Infusion' },
        { en: 'Selective Laser Toning & Melanin Modulation', id: 'Selective Laser Toning & Melanin Modulation' },
        { en: 'HA / PN / Amino Acid-Rich Skinbooster', id: 'Skinbooster Berbasis HA / PN / Asam Amino' },
      ],
      keyBenefit: {
        en: 'Pores shrink, moisture barrier thickens, and skin radiates a healthy natural glow.',
        id: 'Pori-pori tampak ringkas, barier hidrasi menguat, dan kulit memancarkan kilau sehat alami.',
      },
    },
    {
      id: 'phase-6',
      number: '6',
      name: { en: 'Phase 6: Harmonization', id: 'Fase 6: Harmonisasi' },
      cadence: { en: 'Biannual (Every 6 Months)', id: 'Semesteran (Setiap 6 Bulan)' },
      theme: { en: 'Collagen Banking • Biostimulation • Dynamic Balance', id: 'Bank Kolagen • Biostimulasi • Keseimbangan Dinamis' },
      tagline: {
        en: '“Reinforce structural matrices and preserve facial volume naturally.”',
        id: '“Perkuat matriks struktural dan pertahankan volume wajah secara alami.”',
      },
      description: {
        en: 'Phase 6 introduces deep collagen-banking biostimulators and subtle muscle modulation. It harmonizes the dynamic muscular forces that cause wrinkles while stimulating your fibroblasts to produce fresh Type I and Type III collagen.',
        id: 'Fase 6 memperkenalkan bio-stimulator kolagen dalam dan modulasi otot halus. Fase ini menyelaraskan tarikan otot ekspresi sekaligus mengaktifkan fibroblas Anda untuk memproduksi kolagen Tipe I dan Tipe III baru.',
      },
      treatments: [
        { en: 'Targeted Botulinum Toxin Modulation', id: 'Modulasi Presisi Botulinum Toxin' },
        { en: 'Collagen Biostimulator (GOURI PCL / CaHA / PLLA)', id: 'Bio-stimulator Kolagen (GOURI PCL / CaHA / PLLA)' },
        { en: 'Customized Peptide Delivery & Bio-Repair', id: 'Penghantaran Peptida Khusus & Bio-Repair' },
      ],
      keyBenefit: {
        en: 'Prevents deepening expression lines and restores youthful elasticity without stiffness.',
        id: 'Mencegah garis kerutan ekspresi bertambah dalam dan memulihkan elastisitas tanpa rasa kaku.',
      },
    },
    {
      id: 'phase-9',
      number: '9-12',
      name: { en: 'Phase 9–12: Elevation', id: 'Fase 9–12: Elevasi' },
      cadence: { en: 'Annual (Every 9 – 12 Months)', id: 'Tahunan (Setiap 9 – 12 Bulan)' },
      theme: { en: 'Structural Repositioning • Deep Contouring • Longevity Reset', id: 'Reposisi Struktural • Kontur Dalam • Reset Longevity' },
      tagline: {
        en: '“Reset the aging trajectory and refine facial architecture for the long term.”',
        id: '“Atur ulang lintasan penuaan dan sempurnakan arsitektur wajah jangka panjang.”',
      },
      description: {
        en: 'The pinnacle of the annual roadmap. Phase 9–12 delivers deep structural lifting using gold-standard energy devices (like Sofwave™ ultrasound), targeted fat pad contouring, and vector repositioning to lift sagging contours back to their youthful positions.',
        id: 'Puncak dari peta jalan tahunan. Fase 9–12 menghadirkan pengencangan struktural mendalam menggunakan perangkat energi standar emas (seperti ultrasound Sofwave™), kontur bantalan lemak presisi, dan reposisi vektor agar kontur wajah terangkat kembali ke proporsi mudanya.',
      },
      treatments: [
        { en: 'Energy-Based Device: Sofwave™ SUPERB Ultrasound', id: 'Perangkat Energi: Sofwave™ SUPERB Ultrasound' },
        { en: 'SculptLift+ Lipolysis (Submental & Jawline Contouring)', id: 'SculptLift+ Lipolysis (Kontur Rahang & Double Chin)' },
        { en: 'Cocktail Vector Profiloplasty & Restorative Contouring', id: 'Profiloplasti Vektor & Penyempurnaan Kontur Wajah' },
      ],
      keyBenefit: {
        en: 'Visibly lifts jawline, neck, and brow; sharpens facial definition for up to 18 months.',
        id: 'Mengangkat garis rahang, leher, dan alis; mempertajam definisi kontur wajah hingga 18 bulan.',
      },
    },
  ];

  const membershipTiers = [
    {
      name: 'LUMI PLAN',
      badge: { en: 'Prejuvenation & Glow', id: 'Prejuvenasi & Kilau' },
      tagline: {
        en: '“I want to preserve my natural glow and prevent premature signs of aging.”',
        id: '“Saya ingin menjaga kilau alami saya dan mencegah tanda-tanda penuaan dini.”',
      },
      idealFor: {
        en: 'Ages 25–35, focusing on early prevention, skin barrier hydration, and luminosity.',
        id: 'Usia 25–35, berfokus pada pencegahan dini, hidrasi barier kulit, dan kilau alami.',
      },
      focus: {
        en: 'Skin hydration, tone balancing, and early collagen activation. The foundational program for regenerative consistency.',
        id: 'Hidrasi kulit, pemerataan warna, dan aktivasi kolagen dini. Program fondasi untuk konsistensi regeneratif.',
      },
      phasesCovered: {
        en: 'Phase 3 (once a month for 3 consecutive months, repeatable)',
        id: 'Fase 3 (sebulan sekali selama 3 bulan berturut-turut, dapat diulang)',
      },
      totalSessions: { en: '3 foundation sessions OR 1 Prejuvenation Lift', id: '3 sesi fondasi kulit ATAU 1 sesi Prejuvenation Lift' },
      prepayPrice: 'IDR 24,500,000',
      alaCartePrice: 'IDR 30,900,000',
      savings: { en: 'Save IDR 6,400,000 (20%)', id: 'Hemat Rp 6.400.000 (20%)' },
      monthlyBreakdown: '~IDR 1,991,000 / month',
      bonus: [
        { en: '1x Customized Oxy Infusion', id: '1x Customized Oxy Infusion' },
        { en: '1x Lymphatic Drainage Massage', id: '1x Pijat Drainase Limfatik' },
        { en: 'Remee™ 3D Skin Analysis at every check-in', id: 'Analisis Kulit 3D Remee™ di setiap kontrol' },
      ],
      featured: false,
    },
    {
      name: 'AURA PLAN',
      badge: { en: 'Most Popular • Balanced Harmony', id: 'Paling Populer • Harmonis Seimbang' },
      tagline: {
        en: '“I want to restore facial balance and stay naturally lifted without extremes.”',
        id: '“Saya ingin mengembalikan keseimbangan wajah dan tetap kencang tanpa terlihat berlebihan.”',
      },
      idealFor: {
        en: 'Ages 35–45 with mild to moderate skin laxity, expression lines, or early contour changes.',
        id: 'Usia 35–45 dengan kekenduran ringan hingga sedang, garis ekspresi, atau perubahan kontur dini.',
      },
      focus: {
        en: 'Targeting sagging, collagen banking, dynamic muscle modulation, and multi-plane skin density revival.',
        id: 'Mengatasi kekenduran, pembentukan bank kolagen, modulasi otot ekspresi, dan kepadatan jaringan kulit.',
      },
      phasesCovered: {
        en: 'Phase 3 (Full Foundation Cycle) + Phase 6 (Harmonization)',
        id: 'Fase 3 (Siklus Fondasi Penuh) + Fase 6 (Harmonisasi Kolagen)',
      },
      totalSessions: { en: '4 Comprehensive Clinical Sessions', id: '4 Sesi Perawatan Komprehensif' },
      prepayPrice: 'IDR 54,500,000',
      alaCartePrice: 'IDR 72,900,000',
      savings: { en: 'Save IDR 18,400,000 (25%)', id: 'Hemat Rp 18.400.000 (25%)' },
      monthlyBreakdown: '~IDR 4,541,000 / month',
      bonus: [
        { en: '1x RF LipoFirming Session', id: '1x Sesi RF LipoFirming' },
        { en: 'IDR 500,000 Loyalty Treatment Voucher', id: 'Voucher Perawatan Rp 500.000' },
        { en: 'Priority WhatsApp Doctor Concierge', id: 'Layanan WhatsApp Dokter Prioritas' },
      ],
      featured: true,
    },
    {
      name: 'ÉLEVÉ PLAN',
      badge: { en: 'Full-Spectrum Elevation', id: 'Transformasi Penuh • Elevasi' },
      tagline: {
        en: '“I am ready for deep structural support and transformative longevity.”',
        id: '“Saya siap untuk dukungan struktural mendalam dan peremajaan menyeluruh jangka panjang.”',
      },
      idealFor: {
        en: 'Ages 45+ seeking deep structural restoration, jawline contouring, and long-term collagen remodeling.',
        id: 'Usia 45+ yang menginginkan pemulihan struktur wajah, penegasan garis rahang, dan pengencangan kolagen jangka panjang.',
      },
      focus: {
        en: 'Full-spectrum protocol combining Sofwave ultrasound, biostimulators, lipolysis, and vector repositioning.',
        id: 'Protokol terlengkap memadukan ultrasound Sofwave, bio-stimulator, lipolisis, dan reposisi vektor.',
      },
      phasesCovered: {
        en: 'Phase 3 (Foundation) + Phase 6 (Harmonization) + Phase 9–12 (Elevation)',
        id: 'Fase 3 (Fondasi) + Fase 6 (Harmonisasi) + Fase 9–12 (Elevasi Struktural)',
      },
      totalSessions: { en: '5 Advanced Clinical Sessions', id: '5 Sesi Klinis Lanjutan' },
      prepayPrice: 'IDR 69,500,000',
      alaCartePrice: 'IDR 99,900,000',
      savings: { en: 'Save IDR 30,400,000 (30%)', id: 'Hemat Rp 30.400.000 (30%)' },
      monthlyBreakdown: '~IDR 5,791,000 / month',
      bonus: [
        { en: '1x RF LipoFirming Treatment', id: '1x Perawatan RF LipoFirming' },
        { en: 'IDR 1,000,000 Loyalty Treatment Voucher', id: 'Voucher Perawatan Rp 1.000.000' },
        { en: 'VIP Private Suite & Exclusive Event Invitations', id: 'Suite Privat VIP & Undangan Eksklusif' },
      ],
      featured: false,
    },
  ];

  const whyChoosePrinciples = [
    {
      title: { en: 'Aging is 3M', id: 'Penuaan adalah 3M' },
      description: {
        en: 'Multilayered, Multifactorial, and Multimodal, requiring a comprehensive clinical strategy.',
        id: 'Berlapis, multifaktorial, dan multimodal, membutuhkan strategi yang komprehensif.',
      },
      Icon: Diamond,
    },
    {
      title: { en: 'Regenerative Framework', id: 'Kerangka Regeneratif' },
      description: {
        en: 'Honors biological rhythms and aging timelines for optimal, natural tissue renewal.',
        id: 'Menghormati ritme biologis dan garis waktu penuaan untuk hasil regenerasi alami yang optimal.',
      },
      Icon: ShieldCheck,
    },
    {
      title: { en: 'Harmonized Layering', id: 'Pelapisan yang Harmonis' },
      description: {
        en: 'Enhances skin, structure, and cellular vitality in strategic cycles of 3, 6, and 9–12 months.',
        id: 'Meningkatkan vitalitas kulit, struktur, dan sel dalam siklus strategis 3, 6, dan 9–12 bulan.',
      },
      Icon: Zap,
    },
    {
      title: { en: 'Respects Healing Phases', id: 'Menghormati Fase Penyembuhan' },
      description: {
        en: 'Avoids overstimulation and filler fatigue by respecting intrinsic collagen renewal cycles.',
        id: 'Menghindari stimulasi berlebihan dengan menghormati fase regeneratif intrinsik jaringan kulit.',
      },
      Icon: Clock,
    },
    {
      title: { en: 'Clinically Proven', id: 'Terbukti Secara Klinis' },
      description: {
        en: 'Tested, refined, and proven through over 12+ years of Dr. Aldisa’s dedicated clinical practice.',
        id: 'Diuji, disempurnakan, dan dibuktikan melalui lebih dari 12 tahun praktik klinis dr. Olivia Aldisa.',
      },
      Icon: Award,
    },
    {
      title: { en: 'Natural, Long-Term Results', id: 'Hasil Alami, Jangka Panjang' },
      description: {
        en: 'Delivers visible, refined rejuvenation with zero frozen expressions or over-filled distortion.',
        id: 'Memberikan peremajaan alami yang terlihat nyata tanpa efek wajah kaku atau kesan kepenuhan.',
      },
      Icon: Gem,
    },
    {
      title: { en: 'Rooted in Reality', id: 'Berakar pada Realitas' },
      description: {
        en: 'Acknowledges aging as an ongoing progressive process requiring a disciplined annual strategy.',
        id: 'Memahami penuaan sebagai proses berkelanjutan yang membutuhkan strategi tahunan terdisiplin.',
      },
      Icon: Target,
    },
    {
      title: { en: 'Exponential Outcomes', id: 'Hasil Eksponensial Sinergis' },
      description: {
        en: 'Scientifically engineered for synergistic treatments that compound into superior longevity over time.',
        id: 'Dirancang secara ilmiah agar setiap perawatan saling bersinergi menghasilkan efek peremajaan eksponensial.',
      },
      Icon: Rocket,
    },
  ];

  const faqs = [
    {
      question: {
        en: 'Why is an annual roadmap better than booking one-off treatments when needed?',
        id: 'Mengapa rencana tahunan lebih baik daripada memesan perawatan satuan saat dibutuhkan?',
      },
      answer: {
        en: 'Cellular collagen production and extracellular matrix turnover follow biological cycles of 3, 6, and 9 to 12 months. When treatments are performed sporadically without a strategic framework, results plateau and patients often over-treat one area while neglecting foundation health. The 369 Harmony Approach paces interventions intelligently, maximizing longevity while reducing unnecessary spending.',
        id: 'Produksi kolagen seluler dan pembaruan matriks ekstraseluler mengikuti siklus biologis 3, 6, dan 9 hingga 12 bulan. Ketika perawatan dilakukan secara acak tanpa rencana strategis, hasil cenderung tidak optimal dan pasien sering kali berlebihan merawat satu area namun mengabaikan fondasi kulit. Pendekatan 369 Harmony mengatur tindakan secara terukur, memaksimalkan hasil sekaligus mencegah biaya berlebih.',
      },
    },
    {
      question: {
        en: 'Can the 369 Harmony plan be customized if I already had treatments elsewhere?',
        id: 'Bisakah rencana 369 Harmony disesuaikan jika saya sudah pernah perawatan di klinik lain?',
      },
      answer: {
        en: 'Yes, absolutely. Every patient begins with our Remee™ 3D Multi-Spectral Skin Scan and a comprehensive consultation with our doctor. If you have existing fillers, thread lifts, or recent laser sessions, we map your current tissue anatomy and tailor the 369 phases to harmoniously complement and safeguard your previous results.',
        id: 'Tentu saja. Setiap pasien mengawali perjalanannya dengan pemindaian 3D Remee™ dan konsultasi dokter. Jika Anda sudah memiliki filler, tanam benang, atau riwayat laser, kami memetakan anatomi jaringan Anda dan menyesuaikan fase 369 agar selaras serta melindungi hasil perawatan sebelumnya.',
      },
    },
    {
      question: {
        en: 'What happens if I need to travel or miss a scheduled month?',
        id: 'Bagaimana jika saya harus bepergian ke luar kota atau melewatkan bulan yang dijadwalkan?',
      },
      answer: {
        en: 'Our membership plans are built with patient flexibility in mind. Scheduled sessions within each phase can be adjusted across your annual calendar with your dedicated doctor concierge, ensuring you never forfeit sessions due to busy travel schedules.',
        id: 'Paket keanggotaan kami dirancang fleksibel bagi pasien. Sesi yang dijadwalkan dalam setiap fase dapat disesuaikan sepanjang kalender tahunan Anda bersama tim dokter concierge kami, sehingga Anda tidak akan kehilangan sesi karena jadwal perjalanan.',
      },
    },
    {
      question: {
        en: 'Are flexible payment options available for the annual membership plans?',
        id: 'Apakah tersedia opsi pembayaran bertahap untuk paket keanggotaan tahunan?',
      },
      answer: {
        en: 'Yes. We provide transparent upfront prepay options that offer up to 30% savings compared to à la carte pricing, as well as 0% installment plans via major credit card partners (BCA, Mandiri, CIMB) for up to 12 months.',
        id: 'Ya. Kami menyediakan opsi pembayaran penuh di awal dengan penghematan hingga 30% dibanding tarif satuan, serta fasilitas cicilan 0% hingga 12 bulan melalui mitra kartu kredit terkemuka (BCA, Mandiri, CIMB).',
      },
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
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  {t({ en: 'About', id: 'Tentang' })}
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3 w-3" />
              </li>
              <li className="text-foreground font-medium" aria-current="page">
                {t({ en: '369 Harmony Approach™', id: 'Pendekatan 369 Harmony™' })}
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
                en: 'Proprietary Clinical Framework • Trademarked Methodology',
                id: 'Metodologi Klinis Orisinal • Hak Merek Terdaftar',
              })}
            </Badge>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
              {t({
                en: 'The Altruva 369 Harmony Approach™',
                id: 'Pendekatan Altruva 369 Harmony™',
              })}
            </h1>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed pt-2">
              {t({
                en: 'Your intelligent, year-round beauty roadmap designed to honor cellular regenerative cycles. Developed by dr. Olivia Aldisa, MSc (UK) through 12+ years of clinical practice to deliver compounding, natural, and lasting facial rejuvenation.',
                id: 'Peta jalan kecantikan cerdas sepanjang tahun yang dirancang menghormati siklus biologis regenerasi sel. Dikembangkan oleh dr. Olivia Aldisa, MSc (Inggris) melalui 12+ tahun pengalaman klinis untuk memberikan peremajaan alami yang tahan lama dan berjangka panjang.',
              })}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                <Link href="#membership-tiers">
                  <span>{t({ en: 'Explore Annual Plans', id: 'Lihat Pilihan Paket Tahunan' })}</span>
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary/50">
                <Link href="#why-choose">
                  {t({ en: 'Why Choose 369 Harmony', id: 'Mengapa 369 Harmony' })}
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
                <Link href="#the-roadmap">
                  {t({ en: 'The 3-6-9 Roadmap', id: 'Peta Jalan 3-6-9' })}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: WHY CHOOSE 369 HARMONY (THE 8 CORE PRINCIPLES) ── */}
      <section id="why-choose" className="py-16 md:py-24 bg-secondary/30 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              {t({ en: 'Proprietary Clinical Philosophy', id: 'Filosofi Klinis Orisinal' })}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              {t({
                en: 'Why Choose the 369 Harmony Approach™?',
                id: 'Mengapa Memilih Pendekatan 369 Harmony™?',
              })}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t({
                en: 'Rejuvenation based on science, respect for anatomy, and natural harmony.',
                id: 'Peremajaan berdasarkan sains, penghormatan terhadap anatomi, dan harmoni alami.',
              })}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePrinciples.map((principle, index) => {
              const Icon = principle.Icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border/80 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        {t(principle.title)}
                      </h3>
                      <p className="text-xs text-foreground/75 leading-relaxed mt-2">
                        {t(principle.description)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: THE 3M PHILOSOPHY ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              {t({ en: 'The Science of Facial Aging', id: 'Sains di Balik Penuaan Wajah' })}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              {t({
                en: 'Aging is 3M: Why One-Off Treatments Fall Short',
                id: 'Penuaan adalah 3M: Mengapa Perawatan Acak Kurang Efektif',
              })}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t({
                en: 'Dr. Aldisa identified that sporadic treatments fail because they overlook the multi-dimensional nature of aging. The 369 Harmony Approach addresses all three dimensions in cohesive synergy.',
                id: 'Dr. Aldisa menemukan bahwa perawatan acak kerap tidak memuaskan karena mengabaikan sifat multidimensi penuaan. Pendekatan 369 Harmony menuntaskan ketiga dimensi tersebut secara selaras.',
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {principles3M.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/80 bg-card p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-2xl font-serif font-bold text-primary/30">
                        {item.step}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {t(item.title)}
                      </h3>
                      <p className="text-xs font-semibold text-primary mt-0.5">
                        {t(item.subtitle)}
                      </p>
                    </div>

                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {t(item.description)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE 3-6-9 ROADMAP TIMELINE ── */}
      <section id="the-roadmap" className="py-16 md:py-24 bg-secondary/30 border-y border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-16">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              {t({ en: 'Structured Rejuvenation', id: 'Peremajaan Terstruktur' })}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              {t({
                en: 'Your Year-Round 369 Harmony Roadmap',
                id: 'Peta Jalan Siklus Tahunan 369 Harmony',
              })}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t({
                en: 'Three synchronized clinical phases throughout the year, designed to build cellular foundations, bank collagen, and elevate structural facial vectors.',
                id: 'Tiga fase klinis tersinkronisasi sepanjang tahun, dirancang untuk membangun fondasi seluler, menabung kolagen, dan mengangkat vektor struktural wajah.',
              })}
            </p>
          </div>

          {/* ── Part 1: Balanced 2-Column Clinical Showcase (Matching Heights) ── */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14">
            {/* Visual Diagram Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="h-full rounded-2xl bg-card border border-border/80 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-border/50 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      {t({ en: 'Clinical Framework Diagram', id: 'Diagram Kerangka Klinis' })}
                    </span>
                    <Badge variant="outline" className="text-[10px] font-mono border-primary/30 text-primary">
                      369 HARMONY™
                    </Badge>
                  </div>

                  <div className="relative w-full aspect-[4/5] max-w-[340px] sm:max-w-[380px] mx-auto rounded-xl overflow-hidden bg-background/50 border border-border/40 p-3 group">
                    <Image
                      src="/images/369.webp"
                      alt="Altruva 369 Harmony Roadmap Diagram"
                      fill
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-contain p-2 group-hover:scale-102 transition-transform duration-500 ease-out"
                      priority
                    />
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50 text-center">
                  <p className="text-xs text-muted-foreground">
                    {t({
                      en: 'Proprietary timeline methodology developed by dr. Olivia Aldisa, MSc (UK)',
                      id: 'Metodologi lini masa orisinal yang dikembangkan oleh dr. Olivia Aldisa, MSc (UK)',
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Biological Rationale Panel (Equal Height) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="h-full rounded-2xl bg-card border border-border/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {t({ en: 'Biological Pacing Architecture', id: 'Arsitektur Waktu Biologis' })}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">365-Day Protocol</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {t({
                        en: 'Why Pacing Outperforms Sporadic Visits',
                        id: 'Mengapa Perawatan Terpola Mengungguli Kunjungan Acak',
                      })}
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed mt-2">
                      {t({
                        en: 'Human tissue turnover operates on strict biological timelines: epidermal renewal requires 28–90 days, while deep neocollagenesis and SMAS remodeling mature across 3 to 12 months. Treating randomly causes tissue fatigue and plateaued results. The 369 framework syncs each intervention with your cellular healing clock.',
                        id: 'Regenerasi jaringan tubuh manusia bekerja dengan jadwal biologis pasti: pembaruan epidermis membutuhkan 28–90 hari, sedangkan pembentukan kolagen dalam dan remodeling SMAS matang dalam 3 hingga 12 bulan. Perawatan tanpa pola memicu kelelahan jaringan dan hasil mandek. Kerangka 369 menyelaraskan setiap tindakan dengan jam regenerasi seluler Anda.',
                      })}
                    </p>
                  </div>

                  {/* 3 Milestone summary pills */}
                  <div className="grid sm:grid-cols-3 gap-3 pt-2">
                    <div className="rounded-xl border border-border/70 bg-secondary/30 p-3.5 space-y-1">
                      <div className="flex items-center gap-1.5 text-primary font-serif font-bold text-sm">
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs">3</span>
                        <span>{t({ en: 'Month 1–3', id: 'Bulan 1–3' })}</span>
                      </div>
                      <p className="text-xs font-semibold text-foreground">
                        {t({ en: 'Foundation & Hydration', id: 'Fondasi & Hidrasi' })}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-tight">
                        {t({ en: 'Skin barrier repair, texture refinement & tone evening.', id: 'Perbaikan barier kulit, penghalusan tekstur & warna.' })}
                      </p>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-secondary/30 p-3.5 space-y-1">
                      <div className="flex items-center gap-1.5 text-primary font-serif font-bold text-sm">
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs">6</span>
                        <span>{t({ en: 'Month 6', id: 'Bulan 6' })}</span>
                      </div>
                      <p className="text-xs font-semibold text-foreground">
                        {t({ en: 'Harmonization', id: 'Harmonisasi' })}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-tight">
                        {t({ en: 'Collagen banking via biostimulators & muscle balance.', id: 'Tabungan kolagen via biostimulator & balans otot.' })}
                      </p>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-secondary/30 p-3.5 space-y-1">
                      <div className="flex items-center gap-1.5 text-primary font-serif font-bold text-sm">
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs">9+</span>
                        <span>{t({ en: 'Month 9–12', id: 'Bulan 9–12' })}</span>
                      </div>
                      <p className="text-xs font-semibold text-foreground">
                        {t({ en: 'Vector Elevation', id: 'Elevasi Vektor' })}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-tight">
                        {t({ en: 'Deep SMAS ultrasound lifting & jawline definition reset.', id: 'Lifting SMAS ultrasound dalam & reset garis rahang.' })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Doctor's Quote Box */}
                <div className="mt-5 pt-4 border-t border-border/60 bg-primary/5 rounded-xl p-4 border border-primary/15">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs italic text-foreground/85 leading-relaxed">
                        {t({
                          en: '“True facial longevity is never created in one aggressive session. It is cultivated through disciplined milestones that keep you looking naturally radiant every month of the year.”',
                          id: '“Ketahanan estetika wajah tidak pernah dicapai lewat satu kunjungan agresif. Hal ini dibangun melalui tahapan terukur yang menjaga Anda senantiasa segar alami sepanjang tahun.”',
                        })}
                      </p>
                      <span className="text-[11px] font-semibold text-primary block">
                        dr. Olivia Aldisa, Dipl. AAAM, MSc (UK) • Founder of Altruva
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Part 2: The 3 Chronological Phase Cards (Horizontal 3-Column Grid) ── */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {t({ en: 'Detailed Treatment Protocols', id: 'Protokol Perawatan Lengkap' })}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                  {t({ en: 'The 3 Annual Phases in Detail', id: 'Tiga Fase Tahunan Secara Mendalam' })}
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span>{t({ en: 'Paced Across 12 Months', id: 'Berjalan Sepanjang 12 Bulan' })}</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 items-stretch">
              {phases.map((phase) => {
                const isSelected = activePhase === phase.id;
                return (
                  <div
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={cn(
                      'rounded-2xl border p-6 sm:p-7 transition-all duration-300 cursor-pointer bg-card flex flex-col justify-between group',
                      isSelected
                        ? 'border-primary ring-2 ring-primary/40 shadow-md bg-card'
                        : 'border-border/80 hover:border-primary/50 hover:shadow-xs'
                    )}
                  >
                    <div className="space-y-4">
                      {/* Top Header of Card */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              'w-11 h-11 rounded-xl flex items-center justify-center font-serif text-lg font-bold shrink-0 transition-colors',
                              isSelected
                                ? 'bg-primary text-primary-foreground shadow-xs'
                                : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                            )}
                          >
                            {phase.number}
                          </div>
                          <div>
                            <h4 className="font-serif text-lg font-bold text-foreground leading-tight">
                              {t(phase.name)}
                            </h4>
                            <span className="text-xs font-semibold text-primary block mt-0.5">
                              {t(phase.cadence)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Theme pill */}
                      <div className="bg-secondary/40 border border-border/50 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground/85">
                        {t(phase.theme)}
                      </div>

                      {/* Tagline */}
                      <p className="text-xs italic text-muted-foreground">
                        {t(phase.tagline)}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                        {t(phase.description)}
                      </p>

                      {/* Protocol Treatments */}
                      <div className="pt-3 border-t border-border/60 space-y-2">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-primary block">
                          {t({ en: 'Key Treatments:', id: 'Perawatan Utama:' })}
                        </span>
                        <ul className="space-y-2 text-xs text-foreground/85">
                          {phase.treatments.map((item, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                              <span className="leading-tight">{t(item)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Outcome Box */}
                    <div className="mt-5 pt-3 border-t border-border/50">
                      <div className="bg-secondary/30 rounded-xl p-3 text-xs text-foreground/80 border border-border/40 flex items-start gap-2">
                        <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-foreground block mb-0.5">
                            {t({ en: 'Expected Outcome:', id: 'Hasil yang Dicapai:' })}
                          </strong>
                          <span className="text-[11px] leading-relaxed">{t(phase.keyBenefit)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MEMBERSHIP TIERS ── */}
      <section id="membership-tiers" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              {t({ en: 'Select Your Annual Journey', id: 'Pilih Rencana Tahunan Anda' })}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              {t({
                en: 'Which Journey is Right for You?',
                id: 'Program Mana yang Paling Tepat untuk Anda?',
              })}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t({
                en: 'Personalized annual plans engineered for continuous, predictable beauty without unpredictable ad-hoc pricing.',
                id: 'Program keanggotaan tahunan yang dirancang untuk kecantikan berkesinambungan tanpa ketidakpastian biaya perawatan lepas.',
              })}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  'rounded-2xl border bg-card flex flex-col justify-between shadow-xs transition-all duration-300 relative',
                  tier.featured
                    ? 'border-primary ring-2 ring-primary/20 shadow-xl lg:-translate-y-2'
                    : 'border-border/80 hover:shadow-lg'
                )}
              >
                {/* Popular Pill Badge */}
                {tier.featured && (
                  <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {t(tier.badge)}
                    </span>
                  </div>
                )}

                {/* Card Header & Content */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className={cn('text-center space-y-1', tier.featured && 'pt-2')}>
                    {!tier.featured && (
                      <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block">
                        {t(tier.badge)}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                      {tier.name}
                    </h3>
                    <p className="text-xs italic text-muted-foreground min-h-[36px] flex items-center justify-center">
                      {t(tier.tagline)}
                    </p>
                  </div>

                  {/* Pricing Block */}
                  <div className="bg-secondary/30 rounded-xl p-4 border border-border/60 text-center space-y-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block">
                      {t({ en: 'Annual Prepay Investment', id: 'Investasi Program Tahunan' })}
                    </span>
                    <p className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                      {tier.prepayPrice}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t({ en: 'À La Carte Value:', id: 'Nilai Tarif Satuan:' })} <span className="line-through">{tier.alaCartePrice}</span>
                    </p>
                    <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2.5 py-0.5 rounded-full mt-1">
                      {t(tier.savings)}
                    </span>
                    <p className="text-xs text-foreground/75 font-medium pt-1">
                      {tier.monthlyBreakdown}
                    </p>
                  </div>

                  {/* Criteria & Focus */}
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <strong className="text-primary block text-[11px] uppercase tracking-wider mb-0.5">
                        {t({ en: 'Ideal Candidate:', id: 'Profil Pasien Ideal:' })}
                      </strong>
                      <p className="text-foreground/80">{t(tier.idealFor)}</p>
                    </div>

                    <div>
                      <strong className="text-primary block text-[11px] uppercase tracking-wider mb-0.5">
                        {t({ en: 'Clinical Focus:', id: 'Fokus Tindakan:' })}
                      </strong>
                      <p className="text-foreground/80">{t(tier.focus)}</p>
                    </div>

                    <div>
                      <strong className="text-primary block text-[11px] uppercase tracking-wider mb-0.5">
                        {t({ en: 'Phases & Sessions Included:', id: 'Fase & Sesi yang Dicakup:' })}
                      </strong>
                      <p className="text-foreground/80">{t(tier.phasesCovered)} • <strong className="text-foreground">{t(tier.totalSessions)}</strong></p>
                    </div>
                  </div>

                  {/* Exclusive Bonuses */}
                  <div className="pt-2 border-t border-border/60 space-y-2">
                    <strong className="text-[11px] uppercase tracking-wider font-semibold text-primary block">
                      {t({ en: 'Exclusive Membership Privileges:', id: 'Keistimewaan Eksklusif Anggota:' })}
                    </strong>
                    <ul className="space-y-1.5 text-xs text-foreground/80">
                      {tier.bonus.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{t(b)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 sm:p-8 pt-0">
                  <Button
                    asChild
                    size="lg"
                    className={cn(
                      'w-full font-semibold rounded-lg',
                      tier.featured
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                    )}
                  >
                    <Link href="/book-appointment">
                      {t({ en: 'Select Plan & Book', id: 'Pilih Paket & Konsultasi' })}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── SECTION 5: FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              {t({ en: 'Clear Understanding', id: 'Pemahaman Jelas' })}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              {t({
                en: 'Frequently Asked Questions About 369 Harmony',
                id: 'Pertanyaan Umum Seputar 369 Harmony',
              })}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border/80 rounded-xl px-4 sm:px-5 bg-card/50 shadow-xs"
              >
                <AccordionTrigger className="text-left font-medium text-sm sm:text-base py-4 hover:no-underline hover:text-primary">
                  {t(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-foreground/75 leading-relaxed pb-4 pt-1">
                  {t(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── SECTION 6: CONSULTATION CTA BANNER ── */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-primary-foreground/10 via-transparent to-transparent opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary-foreground/80 px-3 py-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 inline-block">
            {t({ en: 'Your Year-Round Beauty Journey', id: 'Perjalanan Kecantikan Sepanjang Tahun Anda' })}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {t({
              en: 'Map Your 369 Harmony Journey Today',
              id: 'Rancang Perjalanan 369 Harmony Anda Hari Ini',
            })}
          </h2>

          <p className="text-base sm:text-lg opacity-90 max-w-xl mx-auto leading-relaxed">
            {t({
              en: 'Start with a comprehensive Remee™ 3D Skin Scan and an in-depth consultation with our aesthetic physician to determine which 369 Harmony plan aligns with your facial architecture.',
              id: 'Awali dengan pemindaian 3D Remee™ dan konsultasi mendalam dengan dokter estetika kami untuk menentukan paket 369 Harmony yang paling sesuai dengan arsitektur wajah Anda.',
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
                {t({ en: 'Book Consultation & 3D Skin Scan', id: 'Jadwalkan Konsultasi & Pindai 3D' })}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
            >
              <Link href="/about">
                {t({ en: 'Learn More About Altruva', id: 'Pelajari Tentang Altruva' })}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
