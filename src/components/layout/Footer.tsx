
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const openingHours = [
    { day: 'Thursday', hours: '10.00 am–6.00 pm' },
    { day: 'Friday', hours: '10.00 am–6.00 pm' },
    { day: 'Saturday', hours: '10.00 am–6.00 pm' },
    { day: 'Sunday', hours: '9.00 am–5.00 pm' },
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '10.00 am–6.00 pm' },
    { day: 'Wednesday', hours: '10.00 am–6.00 pm' },
  ];

  return (
    <footer className="bg-secondary/50 text-secondary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo-altruva.png"
                width={90}
                height={90}
                alt="Altruva Logo"
              />
            </Link>
            <p className="text-sm text-center sm:text-left max-w-xs">
              Embrace your beauty. Discover personalized aesthetic care at Altruva.
            </p>
            
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Opening Hours</h4>
            <ul className="space-y-1 text-sm text-center sm:text-left">
              {openingHours.map(item => (
                <li key={item.day} className="flex justify-between w-full max-w-xs sm:max-w-none">
                  <span className="font-medium mr-2">{item.day}</span>
                  <span className="text-right">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-center sm:text-left">
              <li><Link href="/about-us/369-harmony" className="hover:text-primary transition-colors">369 Harmony™</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/book-appointment" className="hover:text-primary transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram" className="text-primary hover:text-accent transition-colors"><Instagram size={24} /></Link>
              <Link href="#" aria-label="Facebook" className="text-primary hover:text-accent transition-colors"><Facebook size={24} /></Link>
            </div>
            <div className="mt-4 text-sm text-center sm:text-left">
              <p>Jl. Ciasem I No.2, RT.2/RW.4, Rw. Bar, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12180</p>
              <p>0812-1611-9392</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Altruva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
