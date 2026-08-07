
'use client';

import Link from 'next/link';
import { Instagram, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';

export default function Footer() {
  const { t } = useLanguage();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const openingHours = [
    { day: { en: 'Tuesday', id: 'Selasa' }, hours: '10.00 am–6.00 pm' },
    { day: { en: 'Wednesday', id: 'Rabu' }, hours: '10.00 am–6.00 pm' },
    { day: { en: 'Thursday', id: 'Kamis' }, hours: '10.00 am–6.00 pm' },
    { day: { en: 'Friday', id: 'Jumat' }, hours: '10.00 am–6.00 pm' },
    { day: { en: 'Saturday', id: 'Sabtu' }, hours: '10.00 am–6.00 pm' },
    { day: { en: 'Sunday', id: 'Minggu' }, hours: '9.00 am–5.00 pm' },
    { day: { en: 'Monday', id: 'Senin' }, hours: { en: 'Closed', id: 'Tutup' } },
  ];

  return (
    <footer className="bg-secondary/50 text-secondary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logoaltruvanew.webp"
                width={270}
                height={270}
                className="w-[90px] h-[90px]"
                alt="Altruva Logo"
              />
            </Link>
            <p className="text-sm text-center sm:text-left max-w-xs">
              {t({
                en: "Embrace your beauty. Discover personalized aesthetic care at Altruva.",
                id: "Rangkul kecantikanmu. Temukan perawatan estetika yang dipersonalisasi di Altruva."
              })}
            </p>

          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-serif text-lg font-semibold mb-3 text-primary">{t({ en: 'Opening Hours', id: 'Jam Buka' })}</h3>
            <ul className="space-y-1 text-sm text-center sm:text-left">
              {openingHours.map(item => (
                <li key={t(item.day)} className="flex justify-between w-full max-w-xs sm:max-w-none">
                  <span className="font-medium mr-2">{t(item.day)}</span>
                  <span className="text-right">{typeof item.hours === 'object' ? t(item.hours) : item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-serif text-lg font-semibold mb-3 text-primary">{t({ en: 'Quick Links', id: 'Tautan Cepat' })}</h3>
            <ul className="space-y-2 text-center sm:text-left">
              <li><Link href="/about/meet-dr-olivia-aldisa" className="hover:text-primary transition-colors">{t({ en: 'Meet dr. Olivia Aldisa', id: 'Temui dr. Olivia Aldisa' })}</Link></li>
              <li><Link href="/about/369-harmony" className="hover:text-primary transition-colors">369 Harmony™</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">{t({ en: 'FAQ', id: 'FAQ' })}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t({ en: 'Contact Us', id: 'Hubungi Kami' })}</Link></li>
              <li><Link href="/book-appointment" className="hover:text-primary transition-colors">{t({ en: 'Book Appointment', id: 'Buat Janji Temu' })}</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-serif text-lg font-semibold mb-3 text-primary">{t({ en: 'Follow Us', id: 'Ikuti Kami' })}</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/altruvaclinic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary hover:text-accent transition-colors"
              >
                <Instagram size={24} />
              </Link>
            </div>
            <h3 className="font-serif text-lg font-semibold mb-1 text-primary mt-4">{t({ en: 'Location', id: 'Lokasi' })}</h3>
            <div className="mt-0 text-sm text-center sm:text-left space-y-2" itemScope itemType="https://schema.org/PostalAddress">
              <p className="leading-relaxed">
                <span itemProp="streetAddress">Jl. Ciasem I No.2</span><br />
                <span itemProp="addressLocality">Kebayoran Baru, Jakarta Selatan.</span><br />
                <span itemProp="postalCode">Jakarta 12180</span>
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Jl.+Ciasem+I+No.2+Kebayoran+Baru+Jakarta+Selatan+12180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                  aria-label="Get directions on Google Maps"
                >
                  <MapPin size={16} />
                  <span>{t({ en: 'Get Directions', id: 'Petunjuk Arah' })}</span>
                </a>
              </p>
              <p>
                <a
                  href="mailto:admin@altruva.co.id"
                  className="hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  admin@altruva.co.id
                </a>
              </p>
              <p>
                <a
                  href="tel:+6281216119392"
                  className="hover:text-primary transition-colors"
                  aria-label="Phone"
                >
                  0812-1611-9392
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          {currentYear && <p>&copy; {currentYear} Altruva. {t({ en: 'All rights reserved.', id: 'Seluruh hak cipta dilindungi.' })}</p>}
        </div>
      </div>
    </footer>
  );
}
