
'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Zap, Diamond, Star, Heart } from 'lucide-react';
import PageTitle from '@/components/shared/PageTitle';
import { useLanguage } from '@/context/LanguageContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Altruva - Our Philosophy & Commitment to Natural Beauty',
  description: 'Learn about Altruva\'s mission for personalized regenerative care, our expert team, and our commitment to natural, elegant results in Jakarta.',
};

export default function AboutUsPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Philosophy Section */}
      <SectionWrapper className="bg-secondary/30 pt-24 md:pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/filosofi.jpg"
              alt="Altruva's Philosophy - a serene image of a woman"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">{t({ en: 'Our Philosophy', id: 'Filosofi Kami' })}</h2>
            <p className="text-lg text-foreground/80">
              {t({ 
                en: "True beauty is not about transformation, but revelation. We utilize the latest advancements in regenerative medicine and non-surgical treatments to work in harmony with your body, promoting cellular renewal and achieving authentic, lasting results.",
                id: "Kecantikan sejati bukan tentang transformasi, melainkan pengungkapan. Kami memanfaatkan kemajuan terbaru dalam pengobatan regeneratif dan perawatan non-bedah untuk bekerja selaras dengan tubuh Anda, mendorong pembaruan seluler dan mencapai hasil yang otentik dan tahan lama."
              })}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Personalized Care', id: 'Perawatan Pribadi' })}</h4>
                  <p className="text-foreground/70">{t({ en: 'Every journey begins with understanding you. Your treatment plan is as unique as you are.', id: 'Setiap perjalanan dimulai dengan memahami Anda. Rencana perawatan Anda seunik diri Anda.' })}</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Expert Innovation', id: 'Inovasi Ahli' })}</h4>
                  <p className="text-foreground/70">{t({ en: 'Our team is at the forefront of aesthetic science, ensuring safe and effective treatments.', id: 'Tim kami berada di garis depan ilmu estetika, memastikan perawatan yang aman dan efektif.' })}</p>
                </div>
              </li>
               <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Holistic Approach', id: 'Pendekatan Holistik' })}</h4>
                  <p className="text-foreground/70">{t({ en: 'We consider your overall well-being, aiming for results that enhance both appearance and confidence.', id: 'Kami mempertimbangkan kesejahteraan Anda secara keseluruhan, bertujuan untuk hasil yang meningkatkan penampilan dan kepercayaan diri.' })}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us Section */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">{t({ en: 'Why Choose Altruva?', id: 'Mengapa Memilih Altruva?' })}</h2>
            <p className="text-lg text-foreground/80">
              {t({ en: 'Your trust is our highest priority. We are committed to providing an exceptional experience founded on safety, innovation, and results that celebrate your unique beauty.', id: 'Kepercayaan Anda adalah prioritas utama kami. Kami berkomitmen untuk memberikan pengalaman luar biasa yang didasarkan pada keamanan, inovasi, dan hasil yang merayakan kecantikan unik Anda.' })}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Friend first, patient second', id: 'Teman dahulu, pasien kemudian' })}</h4>
                  <p className="text-foreground/70">{t({ en: 'We build relationships based on trust and understanding, ensuring you feel heard and valued.', id: 'Kami membangun hubungan berdasarkan kepercayaan dan pengertian, memastikan Anda merasa didengar dan dihargai.' })}</p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Cutting-Edge Technology', id: 'Teknologi Mutakhir' })}</h4>
                  <p className="text-foreground/70">{t({ en: 'We invest in the latest, clinically-proven technologies to ensure effective and efficient treatments.', id: 'Kami berinvestasi pada teknologi terbaru yang teruji secara klinis untuk memastikan perawatan yang efektif dan efisien.' })}</p>
                </div>
              </li>
               <li className="flex items-start">
                <Diamond className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Natural, Elegant Results', id: 'Hasil Alami dan Elegan' })}</h4>
                  <p className="text-foreground/70">{t({ en: 'Our philosophy is to enhance, not alter. We specialize in creating subtle, beautiful outcomes.', id: 'Filosofi kami adalah untuk menyempurnakan, bukan mengubah. Kami berspesialisasi dalam menciptakan hasil yang halus dan indah.' })}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/altruva-face.jpg"
              alt="Aesthetic professional consulting with a client"
              fill
              className="object-cover"
              data-ai-hint="professional aesthetic consultation"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
       <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{t({ en: 'Begin Your Journey With Us', id: 'Mulailah Perjalanan Anda Bersama Kami' })}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t({ en: 'Experience the Altruva difference. Schedule a personalized consultation to explore how we can help you achieve your aesthetic goals.', id: 'Rasakan perbedaan Altruva. Jadwalkan konsultasi pribadi untuk mengeksplorasi bagaimana kami dapat membantu Anda mencapai tujuan estetika Anda.' })}
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/book-appointment">{t({ en: 'Book Your Consultation', id: 'Pesan Konsultasi Anda' })}</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

    