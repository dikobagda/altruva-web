
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 text-secondary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/altruva_logo.png"
                width={90}
                height={90}
                alt="Altruva Logo"
              />
            </Link>
            <p className="text-sm text-center md:text-left max-w-xs">
              Embrace your beauty. Discover personalized aesthetic care at Altruva.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/book-appointment" className="hover:text-primary transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram" className="text-primary hover:text-accent transition-colors"><Instagram size={24} /></Link>
              <Link href="#" aria-label="Facebook" className="text-primary hover:text-accent transition-colors"><Facebook size={24} /></Link>
              <Link href="#" aria-label="Twitter" className="text-primary hover:text-accent transition-colors"><Twitter size={24} /></Link>
            </div>
            <p className="mt-4 text-sm">123 Beauty Lane, Serenity City, SC 12345</p>
            <p className="text-sm">(123) 456-7890</p>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Altruva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
