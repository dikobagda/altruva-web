"use client";

import { useLanguage } from '@/context/LanguageContext';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const title = { en: 'Vision & Mission', id: 'Visi & Misi' };
const subtitle = {
  en: 'A philosophy rooted in artistry, expertise, and personalized care.',
  id: 'Filosofi yang berakar pada seni, keahlian, dan perawatan yang dipersonalisasi.',
};

const vision = {
  en: 'To be a leading aesthetic clinic known for a harmonious balance of medical-scientific knowledge and artistic forte in every non-surgical treatment.',
  id: 'Menjadi klinik aesthetic terdepan yang dikenal atas keseimbangan harmonis antara pengetahuan medis-ilmiah dan keahlian artistik dalam setiap perawatan non-bedah.',
};

const mission = {
  en: "To provide the best experience in our patients' aesthetics journey through expertise, artistic flare, and personalized treatments based on their unique ethno-beauty.",
  id: 'Memberikan pengalaman terbaik dalam perjalanan aesthetic pasien melalui keahlian, sentuhan artistik, dan perawatan yang dipersonalisasi berdasarkan etno-kecantikan unik masing-masing.',
};

export default function VisionMission() {
  const { t } = useLanguage();
  return (
    <SectionWrapper>
      <PageTitle title={t(title)} subtitle={t(subtitle)} />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-primary">
              {t({ en: 'Our Vision', id: 'Visi Kami' })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">{t(vision)}</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-primary">
              {t({ en: 'Our Mission', id: 'Misi Kami' })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">{t(mission)}</p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}