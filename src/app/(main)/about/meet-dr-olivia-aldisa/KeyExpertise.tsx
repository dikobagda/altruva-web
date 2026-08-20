"use client";

import { useLanguage } from '@/context/LanguageContext';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const title = { en: 'Key Expertise', id: 'Keahlian Utama' };
const subtitle = {
  en: 'A commitment to science, artistry, and patient-centric care.',
  id: 'Komitmen terhadap sains, seni, dan perawatan yang berpusat pada pasien.',
};

const keyExpertise = [
  {
    title: {
      en: 'Regenerative Contouring Expert',
      id: 'Ahli Regenerative Contouring',
    },
    description: {
      en: 'Specializes in regenerative contouring, combining ultrasound technology, collagen stimulators, fillers, and Botox to create balanced, natural-looking results.',
      id: 'Spesialis dalam regenerative contouring, menggabungkan teknologi ultrasound, collagen stimulator, filler, dan Botox untuk menciptakan hasil yang seimbang dan alami.',
    },
  },
  {
    title: {
      en: 'Global Key Opinion Leader & International Speaker',
      id: 'Key Opinion Leader Global & Pembicara Internasional',
    },
    description: {
      en: 'A globally recognized Key Opinion Leader and international speaker for Sofwave, GOURI, Plinest, BTL Exion, and CoolSculpting.',
      id: 'Key Opinion Leader yang diakui secara global dan pembicara internasional untuk Sofwave, GOURI, Plinest, BTL Exion, dan CoolSculpting.',
    },
  },
  {
    title: {
      en: 'Medical Director & Founder',
      id: 'Direktur Medis & Pendiri',
    },
    description: {
      en: 'With 13+ years in aesthetic medicine, Dr. Aldisa leads Altruva with a physician-led approach to advanced aesthetic and regenerative treatments.',
      id: 'Dengan pengalaman 13+ tahun di bidang estetika medis, dr. Aldisa memimpin Altruva dengan pendekatan berbasis dokter untuk perawatan estetika dan regeneratif tingkat lanjut.',
    },
  },
  {
    title: {
      en: 'A Distinctly Indonesian Approach to Beauty',
      id: 'Pendekatan Kecantikan Khas Indonesia',
    },
    description: {
      en: 'Dr. Aldisa applies global knowledge and clinical expertise while embracing the diversity of Indonesian features — enhancing natural individuality rather than following a single beauty ideal.',
      id: 'Dr. Aldisa menerapkan pengetahuan global dan keahlian klinis seraya merangkul keberagaman fitur Indonesia — menonjolkan individualitas alami, bukan mengikuti satu standar kecantikan.',
    },
  },
];

export default function KeyExpertise() {
  const { t } = useLanguage();
  return (
    <SectionWrapper id="key-expertise" className="bg-secondary/30">
      <PageTitle title={t(title)} subtitle={t(subtitle)} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyExpertise.map((cred) => (
          <Card key={cred.title.en} className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-primary">{t(cred.title)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{t(cred.description)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}