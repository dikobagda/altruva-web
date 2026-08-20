"use client";

import { useLanguage } from '@/context/LanguageContext';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const title = { en: 'Vision & Mission', id: 'Visi & Misi' };
const subtitle = {
  en: 'A philosophy rooted in regenerative aesthetics, medical expertise, artistry, and the belief that beauty should remain uniquely your own.',
  id: 'Filosofi yang berakar pada estetika regeneratif, keahlian medis, seni, dan keyakinan bahwa kecantikan harus tetap menjadi keunikan diri Anda.',
};

const vision = {
  en: 'To advance aesthetic medicine through a regenerative approach—prioritizing tissue quality while enhancing natural beauty, harmony, and individual identity.',
  id: 'Memajukan estetika medis melalui pendekatan regeneratif—memprioritaskan kualitas jaringan seraya meningkatkan kecantikan alami, keharmonisan, dan identitas individu.',
};

const mission = {
  en: 'To provide personalized aesthetic care grounded in global medical knowledge and clinical expertise, using regenerative treatments and advanced aesthetic techniques to enhance each patient’s natural features rather than impose a predetermined beauty ideal.',
  id: 'Memberikan perawatan estetika yang dipersonalisasi berdasarkan pengetahuan medis global dan keahlian klinis, menggunakan perawatan regeneratif dan teknik estetika tingkat lanjut untuk menonjolkan fitur alami setiap pasien daripada memaksakan standar kecantikan yang telah ditentukan.',
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