
'use client';

import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { handleSubmit } from './actions';

// Note: Metadata is typically handled on the server.
// For dynamic metadata based on language, a different approach might be needed.
// export const metadata = {
//   title: 'Contact Us - Altruva',
//   description: 'Get in touch with Altruva. Find our contact details, address, and send us a message.',
// };

export default function ContactPage() {
  const { t } = useLanguage();

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.191379435602!2d106.80900997591308!3d-6.238523561088915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f165d09075d7%3A0xab2d38304a455052!2sAltruva%20Aesthetic%20Clinic!5e0!3m2!1sen!2sid!4v1721890332819!5m2!1sen!2sid";
  const openingHours = [
    { day: { en: 'Tuesday', id: 'Selasa' }, hours: '10.00 am – 6.00 pm' },
    { day: { en: 'Wednesday', id: 'Rabu' }, hours: '10.00 am – 6.00 pm' },
    { day: { en: 'Thursday', id: 'Kamis' }, hours: '10.00 am – 6.00 pm' },
    { day: { en: 'Friday', id: 'Jumat' }, hours: '10.00 am – 6.00 pm' },
    { day: { en: 'Saturday', id: 'Sabtu' }, hours: '10.00 am – 6.00 pm' },
    { day: { en: 'Sunday', id: 'Minggu' }, hours: '9.00 am – 5.00 pm' },
    { day: { en: 'Monday', id: 'Senin' }, hours: t({ en: 'Closed', id: 'Tutup' }) },
  ];
  return (
    <>
      <SectionWrapper className="pt-0">
         <Card className="shadow-lg overflow-hidden">
          <div className="aspect-video w-full">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Altruva Clinic Location"
            ></iframe>
          </div>
        </Card>
      
        <div className="grid md:grid-cols-2 gap-12 items-start pt-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary">{t({ en: 'Send Us a Message', id: 'Kirimi Kami Pesan' })}</CardTitle>
              <CardDescription className="text-foreground/70">
                {t({ en: "Fill out the form and we'll get back to you as soon as possible.", id: "Isi formulir dan kami akan menghubungi Anda sesegera mungkin." })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">{t({ en: 'Full Name', id: 'Nama Lengkap' })}</Label>
                  <Input type="text" id="name" name="name" placeholder={t({ en: 'Your Name', id: 'Nama Anda' })} required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base">{t({ en: 'Email Address', id: 'Alamat Email' })}</Label>
                  <Input type="email" id="email" name="email" placeholder={t({ en: 'your@email.com', id: 'email@anda.com' })} required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-base">{t({ en: 'Message', id: 'Pesan' })}</Label>
                  <Textarea id="message" name="message" placeholder={t({ en: 'Your message...', id: 'Pesan Anda...' })} rows={5} required className="mt-1" />
                </div>
                <Button type="submit" className="w-full font-semibold">{t({ en: 'Send Message', id: 'Kirim Pesan' })}</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-serif text-xl text-primary mb-3">{t({ en: 'Contact Details', id: 'Detail Kontak' })}</h3>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <p className="text-foreground/80">Jl. Ciasem I No.2, RT.2/RW.4, Rw. Bar, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12180</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-accent mr-3" />
                  <Link href="tel:+1234567890" className="text-foreground/80 hover:text-primary">+62 812 1611 9392</Link>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-accent mr-3" />
                  <Link href="mailto:admin@altruva.com" className="text-foreground/80 hover:text-primary">admin@altruva.com</Link>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="pt-6 space-y-2">
                <h3 className="font-serif text-xl text-primary mb-3">{t({ en: 'Clinic Hours', id: 'Jam Klinik' })}</h3>
                <div className="flex items-start">
                  <ul className="space-y-1 text-sm text-center sm:text-left">
                    {openingHours.map(item => (
                      <li key={t(item.day)} className="flex justify-between w-full max-w-xs sm:max-w-none">
                        <span className="font-medium mr-2">{t(item.day)}</span>
                        <span className="text-right">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
