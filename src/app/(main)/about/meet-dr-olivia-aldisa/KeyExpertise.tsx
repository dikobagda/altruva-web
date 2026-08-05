"use client";

import { useLanguage } from '@/context/LanguageContext';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Award, Briefcase, BookOpen } from 'lucide-react';

const title = { en: 'Key Expertise', id: 'Keahlian Utama' };
const subtitle = {
  en: 'A commitment to science, artistry, and patient-centric care.',
  id: 'Komitmen terhadap sains, seni, dan perawatan yang berpusat pada pasien.',
};

const keyExpertise = [
  {
    Icon: Star,
    title: {
      en: 'Non-Surgical Profiloplasty Expert',
      id: 'Ahli Profiloplasty Non-Bedah',
    },
    description: {
      en: 'Specializes in fillers, botox, and ultherapy to achieve balanced and natural facial harmony.',
      id: 'Spesialis dalam filler, botox, dan ultherapy untuk mencapai keseimbangan keharmonisan wajah secara natural.',
    },
  },
  {
    Icon: Award,
    title: {
      en: 'International KOL & Trainer',
      id: 'KOL & Trainer Internasional',
    },
    description: {
      en: 'A globally recognized Key Opinion Leader and trainer for cutting-edge technologies like CoolSculpting®.',
      id: 'Key Opinion Leader dan trainer yang diakui secara global untuk teknologi mutakhir seperti CoolSculpting®.',
    },
  },
  {
    Icon: Briefcase,
    title: {
      en: 'Experienced Head Doctor & Founder',
      id: 'Head Doctor & Founder Berpengalaman',
    },
    description: {
      en: 'Previously led award-winning clinics and now brings her vision to life with her own brand, Altruva.',
      id: 'Sebelumnya memimpin klinik-klinik pemenang penghargaan dan kini mewujudkan visinya melalui brand-nya sendiri, Altruva.',
    },
  },
  {
    Icon: BookOpen,
    title: {
      en: 'Regenerative Aesthetics Pioneer',
      id: 'Pelopor Regenerative Aesthetics',
    },
    description: {
      en: 'Combines global technology with the beauty of Indonesian heritage for unique, effective treatments.',
      id: 'Menggabungkan teknologi global dengan keindahan warisan Indonesia untuk perawatan yang unik dan efektif.',
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
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                <cred.Icon className="w-6 h-6" />
              </div>
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