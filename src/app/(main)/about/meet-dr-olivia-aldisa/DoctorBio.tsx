"use client";

import { useLanguage } from '@/context/LanguageContext';

const p1 = {
  en: 'Dr. Olivia Aldisa is an aesthetic physician and the Founder and Medical Director of Altruva Aesthetic Clinic, with more than 13 years of experience in aesthetic medicine. Her clinical approach combines global medical knowledge, advanced aesthetic techniques, and an understanding of the diverse features of Indonesian patients. She specializes in regenerative aesthetics and regenerative contouring, using a combination of energy-based treatments, collagen stimulators, fillers, and neuromodulators to create balanced, natural-looking results.',
  id: 'Dr. Olivia Aldisa adalah dokter estetika serta Pendiri dan Direktur Medis Klinik Estetika Altruva, dengan pengalaman lebih dari 13 tahun dalam estetika medis. Pendekatan klinisnya menggabungkan pengetahuan medis global, teknik estetika tingkat lanjut, dan pemahaman tentang fitur wajah unik pasien Indonesia yang beragam. Ia berspesialisasi dalam estetika regeneratif dan pembentukan regeneratif (regenerative contouring), menggunakan kombinasi perawatan berbasis energi (energy-based treatments), stimulator kolagen, filler, dan neuromodulator untuk menciptakan hasil yang seimbang dan tampak alami.',
};

const p2 = {
  en: 'As a Key Opinion Leader, international speaker, and medical trainer for leading aesthetic brands and technologies, including Sofwave, GOURI, Plinest, BTL Exion, Allergan Aesthetics, and CoolSculpting, Dr. Aldisa is actively involved in advancing aesthetic medicine beyond the treatment room. Her work reflects a belief that aesthetic medicine should not simply follow global beauty trends, but should apply the best available knowledge and techniques to enhance each patient’s individual features, proportions, and natural identity.',
  id: 'Sebagai Key Opinion Leader, pembicara internasional, dan trainer medis untuk berbagai merek dan teknologi estetika terkemuka, termasuk Sofwave, GOURI, Plinest, BTL Exion, Allergan Aesthetics, dan CoolSculpting, dr. Aldisa aktif terlibat dalam memajukan estetika medis di luar ruang perawatan. Karyanya mencerminkan keyakinan bahwa estetika medis tidak seharusnya sekadar mengikuti tren kecantikan global, melainkan menerapkan pengetahuan dan teknik terbaik yang tersedia untuk menyempurnakan fitur wajah, proporsi, dan identitas alami setiap pasien secara individual.',
};

const p3 = {
  en: 'At Altruva, she brings this philosophy into a physician-led clinical practice focused on regenerative aesthetics, individualized treatment planning, and natural-looking outcomes.',
  id: 'Di Altruva, ia membawa filosofi ini ke dalam praktik klinis yang dipimpin langsung oleh dokter, dengan fokus pada estetika regeneratif, perencanaan perawatan yang personal (individualized), dan hasil yang tampak alami.',
};

export default function DoctorBio() {
  const { t } = useLanguage();
  return (
    <div className="space-y-4">
      <p className="text-lg text-foreground/80 leading-relaxed">{t(p1)}</p>
      <p className="text-lg text-foreground/80 leading-relaxed">{t(p2)}</p>
      <p className="text-lg text-foreground/80 leading-relaxed">{t(p3)}</p>
    </div>
  );
}