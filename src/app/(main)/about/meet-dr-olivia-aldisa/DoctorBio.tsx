"use client";

import { useLanguage } from '@/context/LanguageContext';

const intro = {
  en: 'Known for her perfect balance of medical-scientific knowledge and artistic forte, dr. Olivia Aldisa is an expert in non-surgical profiloplasty. As an experienced senior doctor and a Key Opinion Leader, she specializes in cutting-edge treatments that combine global technology with the beauty of Indonesian heritage.',
  id: 'dr. Olivia Aldisa, MSc Aesthetic Medicine (UK) adalah dokter aesthetic dengan pengalaman lebih dari 13 tahun, dengan fokus pada regenerative contouring. Sebagai trainer dan speaker di bidang aesthetic medicine, ia telah berbagi keahliannya di berbagai forum nasional dan internasional, termasuk sebagai speaker di AMWC Monaco 2026, salah satu konferensi aesthetic medicine internasional terkemuka.',
};

const body = {
  en: 'After years as a trainer for an award-winning clinic, Dr. Aldisa is now channeling her expertise into her own brand, Altruva, to provide a uniquely personalized and artistic aesthetic journey for every patient.',
  id: 'Setelah bertahun-tahun menjadi trainer untuk klinik yang telah meraih banyak penghargaan, dr. Aldisa kini menyalurkan keahliannya ke dalam brand miliknya sendiri, Altruva, untuk menghadirkan perjalanan aesthetic yang personal dan artistik bagi setiap pasien.',
};

export default function DoctorBio() {
  const { t } = useLanguage();
  return (
    <>
      <p className="text-lg text-foreground/80">{t(intro)}</p>
      <p className="text-lg text-foreground/80">{t(body)}</p>
    </>
  );
}