'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Activity,
  Clock,
  Target,
  Search,
  ChevronRight,
  HeartHandshake,
  Award,
  Microscope,
} from 'lucide-react';

interface DeviceSpec {
  icon: React.ElementType;
  label: { en: string; id: string };
  value: { en: string; id: string };
}

interface DeviceItem {
  id: string;
  name: string;
  brandTag?: string;
  category: 'lifting' | 'body' | 'skin' | 'diagnostics';
  categoryLabel: { en: string; id: string };
  badge: { en: string; id: string };
  certifications: string[];
  image: string;
  headline: { en: string; id: string };
  description: { en: string; id: string };
  howItWorks: { en: string; id: string };
  specs: DeviceSpec[];
  keyBenefits: { en: string; id: string }[];
  treatmentTitle: { en: string; id: string };
  treatmentHref: string;
  externalUrl?: string;
}

export default function OurDevicesContent() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const devices: DeviceItem[] = [
    {
      id: 'sofwave',
      name: 'Sofwave™',
      brandTag: 'SUPERB™ Ultrasound',
      category: 'lifting',
      categoryLabel: { en: 'Facial Lifting & Wrinkle Reduction', id: 'Pengencangan Wajah & Kerutan' },
      badge: { en: 'Next-Gen Ultrasound', id: 'Ultrasound Generasi Baru' },
      certifications: ['FDA Cleared', 'CE Medical Certified', 'Non-Invasive'],
      image: '/images/devices/sofwave.webp',
      headline: {
        en: 'Synchronous Ultrasound Parallel Beam for Non-Surgical Brow, Neck & Face Lifting',
        id: 'Synchronous Ultrasound Parallel Beam untuk Pengencangan Alis, Leher & Wajah Tanpa Bedah',
      },
      description: {
        en: 'Sofwave™ represents breakthrough innovation in aesthetic ultrasound. Utilizing proprietary SUPERB™ technology, seven high-frequency parallel ultrasound beams heat tissue precisely at 1.5mm mid-dermis—the exact anatomical sweet spot for stimulating massive new collagen and elastin production without damaging nerves, fat, or surface skin.',
        id: 'Sofwave™ merupakan inovasi terobosan dalam teknologi ultrasound estetika. Menggunakan teknologi paten SUPERB™, tujuh sinar ultrasound paralel berfrekuensi tinggi memanaskan jaringan tepat di kedalaman 1,5 mm mid-dermis—kedalaman optimal untuk menstimulasi produksi kolagen dan elastin baru tanpa merusak saraf, lapisan lemak, maupun permukaan kulit.',
      },
      howItWorks: {
        en: 'Integrated Sofcool™ active contact cooling protects the epidermis continuously while delivering controlled fractional thermal coagulative zones (60°C–70°C) deep in the collagen-producing dermis.',
        id: 'Fitur pendingin aktif Sofcool™ melindungi lapisan luar kulit secara terus-menerus selagi menyalurkan energi panas fraksional terukur (60°C–70°C) di lapisan dermis tempat produksi kolagen.',
      },
      specs: [
        {
          icon: Target,
          label: { en: 'Target Depth', id: 'Kedalaman Target' },
          value: { en: '1.5 mm Mid-Dermis', id: '1,5 mm Mid-Dermis' },
        },
        {
          icon: Clock,
          label: { en: 'Duration', id: 'Durasi' },
          value: { en: '30 – 45 Minutes', id: '30 – 45 Menit' },
        },
        {
          icon: Activity,
          label: { en: 'Downtime', id: 'Downtime' },
          value: { en: 'Zero (Return immediately)', id: 'Nol (Dapat langsung beraktivitas)' },
        },
        {
          icon: Sparkles,
          label: { en: 'Peak Results', id: 'Hasil Optimal' },
          value: { en: '12 – 16 Weeks Post-Tx', id: '12 – 16 Minggu Pasca-Tindakan' },
        },
      ],
      keyBenefits: [
        {
          en: 'Lifts eyebrow, submental (under-chin), and loose neck tissue naturally',
          id: 'Mengencangkan alis, area submental (double chin), dan kulit leher kendur secara alami',
        },
        {
          en: 'Preserves facial fat pads—eliminates risk of facial hollowing',
          id: 'Melindungi bantalan lemak wajah—bebas risiko wajah cekung atau kehilangan volume',
        },
        {
          en: 'Suitable for all skin types and tones throughout all seasons',
          id: 'Aman untuk semua jenis dan warna kulit (Fitzpatrick I-VI) di segala musim',
        },
        {
          en: 'Clinically proven neo-collagenesis and elastogenesis in clinical studies',
          id: 'Terbukti secara klinis memicu pembentukan kolagen dan elastin baru',
        },
      ],
      treatmentTitle: { en: 'Altruva A.R.T Lift PRO by dr. Aldisa', id: 'Altruva A.R.T Lift PRO by dr. Aldisa' },
      treatmentHref: '/treatments/art-lyft',
      externalUrl: 'https://sofwave.com/',
    },
    {
      id: 'emsculpt-neo',
      name: 'Emsculpt Neo®',
      brandTag: 'HIFEM+® & Synchronized RF',
      category: 'body',
      categoryLabel: { en: 'Body Sculpting & Muscle Toning', id: 'Pembentukan Tubuh & Penguatan Otot' },
      badge: { en: 'Dual Energy Contouring', id: 'Kontur Tubuh Energi Ganda' },
      certifications: ['FDA Cleared', 'Peer-Reviewed Studies', 'Zero Injections'],
      image: '/images/devices/emsculpt.webp',
      headline: {
        en: 'Simultaneous 30% Fat Reduction and 25% Muscle Building in a Single 30-Minute Session',
        id: 'Pengurangan 30% Lemak dan Peningkatan 25% Otot Sekaligus dalam 1 Sesi 30 Menit',
      },
      description: {
        en: 'Emsculpt Neo® by BTL is the world’s first and only non-invasive body contouring device that blends Synchronized Radiofrequency (RF) and High-Intensity Focused Electromagnetic (HIFEM+®) energy simultaneously. The RF gently heats subcutaneous fat cells to apoptotic levels while HIFEM+ contracts muscle fibers at supramaximal intensities unattainable through conventional exercise.',
        id: 'Emsculpt Neo® dari BTL adalah perangkat pembentukan tubuh non-invasif pertama dan satu-satunya di dunia yang menggabungkan energi Synchronized Radiofrequency (RF) dan High-Intensity Focused Electromagnetic (HIFEM+®) secara bersamaan. RF memanaskan sel lemak subkutan hingga memicu apoptosis (penghancuran alami lemak), sementara HIFEM+ mengontraksi serat otot pada intensitas supramaksimal yang mustahil dicapai lewat olahraga biasa.',
      },
      howItWorks: {
        en: 'In less than 4 minutes, RF raises fat temperature to 42°C–45°C causing permanent fat cell apoptosis, while 20,000 supramaximal contractions force muscle tissue to remodel and thicken.',
        id: 'Dalam waktu kurang dari 4 menit, energi RF meningkatkan suhu lemak hingga 42°C–45°C untuk memicu apoptosis lemak permanen, sedangkan 20.000 kontraksi supramaksimal memaksa otot beradaptasi dan menebal.',
      },
      specs: [
        {
          icon: Zap,
          label: { en: 'Fat Reduction', id: 'Penurunan Lemak' },
          value: { en: '-30% Clinical Avg.', id: 'Rata-rata -30%' },
        },
        {
          icon: Activity,
          label: { en: 'Muscle Mass', id: 'Peningkatan Otot' },
          value: { en: '+25% Clinical Avg.', id: 'Rata-rata +25%' },
        },
        {
          icon: Clock,
          label: { en: 'Session Time', id: 'Durasi Sesi' },
          value: { en: '30 Minutes', id: '30 Menit' },
        },
        {
          icon: Target,
          label: { en: 'Treatable Areas', id: 'Area Tindakan' },
          value: { en: 'Abdomen, Glutes, Arms, Legs', id: 'Perut, Bokong, Lengan, Paha' },
        },
      ],
      keyBenefits: [
        {
          en: 'Equivalent to roughly 20,000 crunches, squats, or curls in one quick session',
          id: 'Setara dengan sekitar 20.000 sit-up atau squat dalam satu sesi singkat',
        },
        {
          en: 'Reduces stubborn visceral-adjacent subcutaneous fat deposits permanently',
          id: 'Mengurangi timbunan lemak membandel secara permanen tanpa sedot lemak',
        },
        {
          en: 'Non-invasive buttock lifting and core stabilization without surgery',
          id: 'Mengencangkan dan menaikkan bokong serta memperkuat stabilitas postur inti',
        },
        {
          en: 'No soreness downtime—relax comfortably while the applicators work',
          id: 'Tanpa waktu pemulihan luka bedah—cukup berbaring rileks selama prosedur',
        },
      ],
      treatmentTitle: { en: 'Altruva NeoCurve by EmSculpt Neo', id: 'Altruva NeoCurve by EmSculpt Neo' },
      treatmentHref: '/treatments/altruva-neocurve',
    },
    {
      id: 'exion',
      name: 'Exion™',
      brandTag: 'AI-Guided Monopolar RF + US',
      category: 'skin',
      categoryLabel: { en: 'Skin Architecture & Hyaluronic Boost', id: 'Kepadatan Kulit & Stimulasi Hyaluronic' },
      badge: { en: 'AI Energy Delivery', id: 'Penghantaran Energi Berbasis AI' },
      certifications: ['FDA Cleared', 'BTL Aesthetics', 'Multi-Applicator'],
      image: '/images/devices/exion.webp',
      headline: {
        en: 'The First Aesthetic Platform Proven to Increase Natural Hyaluronic Acid by +224%',
        id: 'Platform Estetika Pertama yang Terbukti Meningkatkan Asam Hialuronat Alami hingga +224%',
      },
      description: {
        en: 'Exion™ revolutionizes non-invasive tissue remodeling. By synergizing Monopolar Radiofrequency with Targeted Ultrasound and proprietary artificial intelligence energy pulse control, Exion penetrates deep into the reticular dermis to dramatically supercharge cellular fibroblasts without the need for needles or deep trauma.',
        id: 'Exion™ merevolusi pembaruan struktur jaringan kulit non-invasif. Dengan memadukan Monopolar Radiofrequency dan Targeted Ultrasound berteknologi kecerdasan buatan (AI) terintegrasi, Exion menembus dermis retikuler dalam untuk menstimulasi fibroblas seluler secara dramatis tanpa jarum suntik maupun trauma jaringan.',
      },
      howItWorks: {
        en: 'AI algorithms continuously monitor tissue impedance to deliver thermal stress to the deep dermis safely, stimulating the body’s endogenous production of hyaluronic acid, collagen, and elastin.',
        id: 'Algoritma AI terus memonitor impedansi jaringan secara real-time untuk menghantarkan energi termal presisi ke dermis dalam, memicu sintesis endogen asam hialuronat, kolagen, dan elastin alami tubuh.',
      },
      specs: [
        {
          icon: Sparkles,
          label: { en: 'Hyaluronic Acid', id: 'Asam Hialuronat' },
          value: { en: '+224% Natural Boost', id: 'Stimulasi Alami +224%' },
        },
        {
          icon: Layers,
          label: { en: 'Collagen Stim.', id: 'Stimulasi Kolagen' },
          value: { en: '+47% Dermal Collagen', id: '+47% Kolagen Dermis' },
        },
        {
          icon: Activity,
          label: { en: 'Elastin Production', id: 'Produksi Elastin' },
          value: { en: '+50% Skin Elasticity', id: '+50% Elastisitas Kulit' },
        },
        {
          icon: Clock,
          label: { en: 'Comfort', id: 'Kenyamanan' },
          value: { en: 'Gentle warm sensation', id: 'Sensasi hangat yang nyaman' },
        },
      ],
      keyBenefits: [
        {
          en: 'Massive surge in skin hydration and firmness from within—no needle punctures',
          id: 'Peningkatan hidrasi dan kepadatan kulit dari dalam tanpa tusukan jarum',
        },
        {
          en: 'Specialized applicator for delicate periorbital (eye bag) and neck rejuvenation',
          id: 'Aplikator khusus untuk area sensitif sekitar mata (kantong mata) dan leher',
        },
        {
          en: 'AI-monitored pulse delivery ensures uniform results and optimal safety',
          id: 'Kontrol pulsa berbasis AI memastikan hasil merata dengan keamanan maksimal',
        },
        {
          en: 'Ideal complementary therapy following regenerative injectables like GOURI or PN',
          id: 'Terapi pelengkap ideal setelah injeksi regeneratif seperti GOURI atau PN',
        },
      ],
      treatmentTitle: { en: 'Altruva Lumi RF (Exion)', id: 'Altruva Lumi RF (Exion)' },
      treatmentHref: '/treatments/exion-lumi-rf',
    },
    {
      id: 'remee',
      name: 'Remee™ 3D',
      brandTag: 'Multi-Spectral Dermal Imaging',
      category: 'diagnostics',
      categoryLabel: { en: 'Deep Dermal Diagnostics', id: 'Diagnostik Dermis Mendalam' },
      badge: { en: 'Precision Diagnostics', id: 'Diagnostik Presisi 3D' },
      certifications: ['Multi-Spectral Optical', 'Sub-Surface Analysis', '3D Mapping'],
      image: '/images/devices/remee.webp',
      headline: {
        en: 'Multi-Spectral 3D Facial Scanner for Sub-Surface Biological Skin Diagnostics',
        id: 'Pemindai Wajah 3D Multi-Spektral untuk Diagnostik Biologis Kulit Bawah Permukaan',
      },
      description: {
        en: 'Precision treatment planning begins with precision diagnostics. The Remee™ 3D facial imaging system captures cross-polarized, RGB, and UV spectrum images to inspect 8 critical layers of your skin architecture, uncovering hidden sun damage, vascular sensitivity, and moisture deficits long before they emerge on the surface.',
        id: 'Rencana perawatan yang presisi bermula dari diagnostik yang akurat. Sistem pencitraan wajah 3D Remee™ menangkap spektrum cahaya cross-polarized, RGB, dan UV untuk membedah 8 lapisan arsitektur kulit Anda, mengungkap kerusakan UV tersembunyi, sensitivitas pembuluh darah, dan kekurangan hidrasi jauh sebelum terlihat di permukaan.',
      },
      howItWorks: {
        en: 'High-definition optical sensors generate a 3D topographic map of your face, analyzing pore volume, pigment clusters, lipid barrier health, and biological skin age compared against global demographic benchmarks.',
        id: 'Sensor optik beresolusi tinggi menghasilkan peta topografi 3D wajah Anda, menganalisis volume pori-pori, gugus pigmen, kesehatan barier lipid, dan usia biologis kulit dibandingkan tolok ukur demografi global.',
      },
      specs: [
        {
          icon: Search,
          label: { en: 'Diagnostic Spectrum', id: 'Spektrum Analisis' },
          value: { en: 'RGB, UV & Polarized', id: 'RGB, UV & Terpolarisasi' },
        },
        {
          icon: Layers,
          label: { en: 'Depth Mapping', id: 'Pemetaan Kedalaman' },
          value: { en: '8 Dermal Layers', id: '8 Lapisan Dermis' },
        },
        {
          icon: Clock,
          label: { en: 'Scan Duration', id: 'Waktu Pindai' },
          value: { en: 'Under 3 Minutes', id: 'Kurang dari 3 Menit' },
        },
        {
          icon: Microscope,
          label: { en: 'Progression Tracking', id: 'Pelacakan Hasil' },
          value: { en: 'Objective 3D Metrics', id: 'Metrik 3D Objektif' },
        },
      ],
      keyBenefits: [
        {
          en: 'Reveals sub-surface UV hyperpigmentation and early melasma patterns',
          id: 'Mendeteksi hiperpigmentasi UV tersembunyi dan pola awal melasma',
        },
        {
          en: 'Evaluates micro-vascular redness, erythema, and sensitivity thresholds',
          id: 'Mengevaluasi kemerahan mikrovaskular, eritema, dan ambang sensitivitas',
        },
        {
          en: 'Provides objective, visual Before & After metric tracking at every follow-up',
          id: 'Menyediakan data Sebelum & Sesudah yang objektif dan visual pada setiap kontrol',
        },
        {
          en: 'Enables our doctors to design truly personalized, zero-guesswork treatment plans',
          id: 'Memungkinkan dokter merancang rencana perawatan yang terpersonalisasi tanpa tebak-tebakan',
        },
      ],
      treatmentTitle: { en: 'Included in Comprehensive Doctor Consultation', id: 'Termasuk dalam Konsultasi Dokter Komprehensif' },
      treatmentHref: '/book-appointment',
    },
  ];

  const filteredDevices = activeCategory === 'all'
    ? devices
    : devices.filter(d => d.category === activeCategory);

  const categories = [
    { id: 'all', label: { en: 'All Technologies', id: 'Semua Teknologi' } },
    { id: 'lifting', label: { en: 'Facial Lifting (Sofwave)', id: 'Pengencangan (Sofwave)' } },
    { id: 'body', label: { en: 'Body Sculpting (Emsculpt)', id: 'Bentuk Tubuh (Emsculpt)' } },
    { id: 'skin', label: { en: 'Skin & Collagen (Exion)', id: 'Kolagen & Kulit (Exion)' } },
    { id: 'diagnostics', label: { en: '3D Diagnostics (Remee)', id: 'Diagnostik 3D (Remee)' } },
  ];

  const philosophyPillars = [
    {
      icon: ShieldCheck,
      title: { en: 'Zero Trend-Chasing', id: 'Bukan Sekadar Tren' },
      description: {
        en: 'We only invest in medical platforms with proven safety profiles and peer-reviewed clinical validation.',
        id: 'Kami hanya berinvestasi pada platform medis dengan rekam jejak keamanan teruji dan publikasi klinis terverifikasi.',
      },
    },
    {
      icon: HeartHandshake,
      title: { en: 'Doctor-Calibrated Precision', id: 'Kalibrasi Presisi oleh Dokter' },
      description: {
        en: 'Every energy parameter, depth, and pulse count is customized specifically for your individual facial anatomy.',
        id: 'Setiap parameter energi, kedalaman, dan jumlah tembakan disesuaikan spesifik dengan anatomi wajah Anda.',
      },
    },
    {
      icon: Microscope,
      title: { en: 'Synergistic Regeneration', id: 'Regenerasi Sinergis' },
      description: {
        en: 'Energy devices are integrated harmoniously with regenerative bio-stimulators to compound clinical outcomes.',
        id: 'Perangkat energi dipadukan selaras dengan bio-stimulator regeneratif untuk melipatgandakan hasil alami.',
      },
    },
  ];

  const faqs = [
    {
      question: {
        en: 'Are the treatments using these devices painful?',
        id: 'Apakah perawatan menggunakan perangkat ini terasa sakit?',
      },
      answer: {
        en: 'Our devices represent the newest generation of non-invasive aesthetic engineering. Sofwave utilizes integrated Sofcool™ active contact cooling, Emsculpt Neo feels like an intense muscle contraction with a warm sensation, and Exion produces a comfortable soothing warmth. Numbing cream or cooling protocols are provided whenever needed to ensure a comfortable experience.',
        id: 'Perangkat kami merupakan generasi terkini teknologi estetika non-invasif. Sofwave dilengkapi pendingin aktif Sofcool™, Emsculpt Neo terasa seperti kontraksi otot intens dengan sensasi hangat, dan Exion memberikan rasa hangat yang menenangkan. Anestesi topikal atau protokol pendinginan selalu disediakan agar Anda tetap merasa nyaman.',
      },
    },
    {
      question: {
        en: 'How do I know which device is suitable for my concern?',
        id: 'Bagaimana saya tahu perangkat mana yang paling sesuai untuk kondisi saya?',
      },
      answer: {
        en: 'You don’t need to choose on your own. Every patient journey at Altruva starts with our Remee™ 3D Multi-Spectral Skin Scan and a thorough one-on-one consultation with our aesthetic doctors. We assess your dermal elasticity, facial fat balance, and skin health before recommending the ideal platform or combination.',
        id: 'Anda tidak perlu bingung memilih sendiri. Setiap perjalanan perawatan di Altruva diawali dengan pemindaian Remee™ 3D Multi-Spektral dan konsultasi mendalam dengan dokter kami. Kami mengevaluasi elastisitas, bantalan lemak wajah, dan kesehatan kulit sebelum merekomendasikan platform yang tepat.',
      },
    },
    {
      question: {
        en: 'Are the machines at Altruva authentic and authorized?',
        id: 'Apakah perangkat di Altruva terjamin keaslian dan legalitasnya?',
      },
      answer: {
        en: 'Yes, 100%. Altruva Aesthetic Clinic only operates genuine, officially authorized, FDA-cleared and CE-certified medical platforms supplied directly by official distributors (such as BTL Aesthetics and Sofwave Medical). Consumables, tips, and applicators are strictly single-patient authentic originals.',
        id: 'Ya, 100%. Altruva Aesthetic Clinic hanya mengoperasikan perangkat medis original berlisensi resmi, berizin edar resmi, serta tersertifikasi FDA dan CE langsung dari distributor resmi (seperti BTL Aesthetics dan Sofwave Medical). Semua tip dan aplikator dijamin orisinal dan steril.',
      },
    },
    {
      question: {
        en: 'Can energy devices be combined with injectables like GOURI or polynucleotides?',
        id: 'Bisakah perawatan perangkat energi digabungkan dengan injeksi seperti GOURI atau polinukleotida?',
      },
      answer: {
        en: 'Absolutely. In fact, combining energy devices (like Sofwave or Exion) with regenerative bio-stimulators is the hallmark of Altruva’s regenerative contouring approach. Energy devices tighten structural collagen matrices, while bio-stimulators regenerate cellular health and extracellular matrix quality from within.',
        id: 'Tentu saja. Menggabungkan perangkat energi (seperti Sofwave atau Exion) dengan bio-stimulator regeneratif adalah keunggulan utama pendekatan regenerative contouring di Altruva. Perangkat energi mengencangkan matriks kolagen struktural, sedangkan bio-stimulator meremajakan sel dan hidrasi alami dari dalam.',
      },
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[20px] pb-12 md:pb-16 bg-gradient-to-b from-secondary/40 via-background to-background">
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Breadcrumbs: 20px from navbar, 50px gap to title */}
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
                {t({ en: 'Our Technology & Devices', id: 'Teknologi & Perangkat Medis' })}
              </li>
            </ol>
          </nav>

          {/* Header Content */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge
              variant="outline"
              className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider border-primary/30 text-primary bg-primary/5 rounded-full inline-flex items-center gap-1.5 shadow-sm"
            >
              <Award className="h-3.5 w-3.5" />
              {t({
                en: 'FDA-Cleared • Clinically Validated • Gold-Standard Technology',
                id: 'Tersertifikasi FDA • Teruji Klinis • Teknologi Standar Emas',
              })}
            </Badge>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
              {t({
                en: 'World-Class Clinical Technology, Engineered for Natural Results',
                id: 'Teknologi Medis Kelas Dunia untuk Hasil Alami & Presisi',
              })}
            </h1>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed pt-2">
              {t({
                en: 'At Altruva Aesthetic Clinic, every device is selected through rigorous clinical vetting. We invest in the world’s leading FDA-cleared and CE-certified platforms to deliver measurable tissue tightening, lifting, and contouring with maximum safety and zero compromise.',
                id: 'Di Altruva Aesthetic Clinic, setiap perangkat dipilih melalui kurasi klinis ketat. Kami berinvestasi pada platform medis berstandar FDA dan CE terkemuka di dunia untuk memberikan pengencangan jaringan, peremajaan kulit, dan pembentukan kontur tubuh yang terukur dengan keamanan optimal.',
              })}
            </p>

            {/* Quick Trust Highlights Banner */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
              <div className="bg-card/80 border border-border/80 backdrop-blur-sm rounded-lg p-3 shadow-xs">
                <ShieldCheck className="h-5 w-5 text-primary mb-1" />
                <p className="text-xs font-semibold text-foreground">
                  {t({ en: 'FDA & CE Approved', id: 'Berizin Resmi FDA & CE' })}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {t({ en: 'Rigorous safety audits', id: 'Keamanan terverifikasi' })}
                </p>
              </div>

              <div className="bg-card/80 border border-border/80 backdrop-blur-sm rounded-lg p-3 shadow-xs">
                <Microscope className="h-5 w-5 text-primary mb-1" />
                <p className="text-xs font-semibold text-foreground">
                  {t({ en: 'Regenerative Focus', id: 'Fokus Regeneratif' })}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {t({ en: 'Endogenous collagen boost', id: 'Stimulasi kolagen mandiri' })}
                </p>
              </div>

              <div className="bg-card/80 border border-border/80 backdrop-blur-sm rounded-lg p-3 shadow-xs">
                <HeartHandshake className="h-5 w-5 text-primary mb-1" />
                <p className="text-xs font-semibold text-foreground">
                  {t({ en: 'Doctor-Operated', id: 'Dikerjakan Dokter' })}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {t({ en: 'Customized protocols', id: 'Protokol terpersonalisasi' })}
                </p>
              </div>

              <div className="bg-card/80 border border-border/80 backdrop-blur-sm rounded-lg p-3 shadow-xs">
                <Clock className="h-5 w-5 text-primary mb-1" />
                <p className="text-xs font-semibold text-foreground">
                  {t({ en: 'Zero to Low Downtime', id: 'Tanpa Waktu Henti' })}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {t({ en: 'Immediate return to life', id: 'Langsung kembali beraktivitas' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Devices Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer',
                    isActive
                      ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                      : 'bg-card text-foreground/80 border-border hover:bg-secondary/60 hover:text-foreground'
                  )}
                >
                  {t(cat.label)}
                </button>
              );
            })}
          </div>

          {/* Device Showcase Cards */}
          <div className="space-y-16 md:space-y-24">
            {filteredDevices.map((device, index) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={device.id}
                  id={device.id}
                  className="rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xs p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border"
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Device Image / Showcase Stage */}
                    <div
                      className={cn(
                        'lg:col-span-5 flex flex-col items-center justify-center',
                        !isEven && 'lg:order-2'
                      )}
                    >
                      <div className="relative w-full aspect-[4/5] sm:aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-secondary/50 via-secondary/25 to-background border border-border/50 p-6 sm:p-8 flex items-center justify-center group shadow-xs">
                        {/* Soft Glow Ambient Backdrop */}
                        <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Top Badge overlay */}
                        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5">
                          <span className="text-[10px] font-semibold uppercase tracking-wider bg-background/90 text-primary border border-border/80 px-2 py-0.5 rounded-md backdrop-blur-xs shadow-xs">
                            {t(device.categoryLabel)}
                          </span>
                        </div>

                        {/* Device Image */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={device.image}
                            alt={`${device.name} - ${t(device.headline)}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                            className="object-contain p-2 sm:p-4 group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-md"
                            priority={index === 0}
                          />
                        </div>

                        {/* Bottom Pedestal Tag */}
                        <div className="absolute bottom-3 inset-x-4 text-center">
                          <span className="text-[11px] font-medium text-muted-foreground bg-background/80 px-3 py-1 rounded-full border border-border/60 backdrop-blur-xs inline-block">
                            {device.brandTag}
                          </span>
                        </div>
                      </div>

                      {/* Certification Badges */}
                      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                        {device.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="inline-flex items-center gap-1 text-[11px] text-muted-foreground bg-secondary/40 px-2.5 py-0.5 rounded-full border border-border/40"
                          >
                            <CheckCircle2 className="h-3 w-3 text-primary shrink-0" />
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Device Details Side */}
                    <div
                      className={cn(
                        'lg:col-span-7 space-y-6',
                        !isEven && 'lg:order-1'
                      )}
                    >
                      {/* Name & Tagline */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                            {device.name}
                          </h2>
                          {device.externalUrl && (
                            <a
                              href={device.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 border border-border/80 px-2 py-0.5 rounded-md hover:bg-secondary/40"
                              title={`Official ${device.name} Website`}
                            >
                              <span>Official Site</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>

                        <p className="text-base sm:text-lg font-medium text-foreground/90">
                          {t(device.headline)}
                        </p>
                      </div>

                      {/* Descriptive Narrative */}
                      <div className="space-y-3 text-foreground/75 leading-relaxed text-sm sm:text-base">
                        <p>{t(device.description)}</p>
                        <p className="text-xs sm:text-sm text-foreground/70 bg-secondary/30 border-l-2 border-primary/50 p-3 rounded-r-md">
                          <strong className="text-primary font-semibold block mb-0.5">
                            {t({ en: 'Mechanism of Action:', id: 'Mekanisme Kerja:' })}
                          </strong>
                          {t(device.howItWorks)}
                        </p>
                      </div>

                      {/* Clinical Specs Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                        {device.specs.map((spec, sIdx) => {
                          const Icon = spec.icon;
                          return (
                            <div
                              key={sIdx}
                              className="bg-secondary/30 rounded-lg p-2.5 border border-border/40 text-center sm:text-left flex flex-col justify-between"
                            >
                              <div className="flex items-center gap-1.5 text-muted-foreground mb-1 justify-center sm:justify-start">
                                <Icon className="h-3.5 w-3.5 text-primary" />
                                <span className="text-[11px] font-medium truncate">
                                  {t(spec.label)}
                                </span>
                              </div>
                              <span className="text-xs font-semibold text-foreground">
                                {t(spec.value)}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Key Clinical Benefits */}
                      <div className="space-y-2.5 pt-2">
                        <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                          {t({ en: 'Key Clinical Advantages:', id: 'Keunggulan Klinis Utama:' })}
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/80">
                          {device.keyBenefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{t(benefit)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Bar */}
                      <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs sm:text-sm">
                          <span className="text-muted-foreground block text-[11px] uppercase tracking-wider">
                            {t({ en: 'Featured In Protocol:', id: 'Tersedia Dalam Perawatan:' })}
                          </span>
                          <span className="font-semibold text-primary">
                            {t(device.treatmentTitle)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2.5">
                          {device.treatmentHref.startsWith('/treatments') ? (
                            <Button
                              asChild
                              size="sm"
                              className="font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg group"
                            >
                              <Link href={device.treatmentHref}>
                                <span>{t({ en: 'Explore Treatment', id: 'Lihat Perawatan' })}</span>
                                <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          ) : (
                            <Button
                              asChild
                              size="sm"
                              className="font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg group"
                            >
                              <Link href="/book-appointment">
                                <span>{t({ en: 'Book Consultation', id: 'Jadwalkan Konsultasi' })}</span>
                                <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Technology Matters - Altruva Philosophy Section */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              {t({ en: 'Our Technology Philosophy', id: 'Filosofi Teknologi Kami' })}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              {t({
                en: 'Technology as an Instrument, Never a Marketing Gimmick',
                id: 'Teknologi sebagai Instrumen Presisi, Bukan Sekadar Tren',
              })}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t({
                en: 'In modern aesthetics, machines are only as capable as the clinical minds operating them. At Altruva, our approach is defined by cellular respect, safety, and individual anatomic customization.',
                id: 'Dalam dunia estetika medis, keunggulan mesin ditentukan oleh keahlian dokter yang mengoperasikannya. Di Altruva, setiap tindakan berlandaskan keselamatan, anatomi unik, dan regenerasi alami.',
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {philosophyPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-xl p-6 border border-border/80 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {t(pillar.title)}
                    </h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {t(pillar.description)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              {t({ en: 'Clear Answers', id: 'Pertanyaan Umum' })}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              {t({
                en: 'Frequently Asked Questions About Our Devices',
                id: 'Pertanyaan Seputar Perangkat Medis Altruva',
              })}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
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

      {/* Bottom Consultation CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-primary-foreground/10 via-transparent to-transparent opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary-foreground/80 px-3 py-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 inline-block">
            {t({ en: 'Personalized Diagnostic Protocol', id: 'Protokol Diagnostik Terpersonalisasi' })}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {t({
              en: 'Experience the Altruva Difference',
              id: 'Rasakan Keunggulan Perawatan Presisi di Altruva',
            })}
          </h2>

          <p className="text-base sm:text-lg opacity-90 max-w-xl mx-auto leading-relaxed">
            {t({
              en: 'Begin your journey with our Remee™ 3D Multi-Spectral Skin Scan and a personalized consultation with our aesthetic physician to determine the exact protocol tailored to your tissue.',
              id: 'Awali perjalanan Anda dengan pemindaian 3D Remee™ Multi-Spektral dan konsultasi langsung dengan dokter estetika kami untuk menentukan protokol yang paling tepat bagi kulit Anda.',
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
              <Link href="/treatments">
                {t({ en: 'View All Treatments', id: 'Lihat Semua Perawatan' })}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
