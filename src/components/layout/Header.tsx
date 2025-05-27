
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AltruvaLogoIcon } from '@/components/icons/AltruvaLogoIcon';
import { UkFlagIcon } from '@/components/icons/UkFlagIcon';
import { CnFlagIcon } from '@/components/icons/CnFlagIcon';
import { TikTokIcon } from '@/components/icons/TikTokIcon';


const navItems = [
  { href: '/about', label: 'About' },
  { href: '/skin', label: 'Skin' },
  { href: '/face', label: 'Face' },
  { href: '/hair', label: 'Hair' },
  { href: '/body', label: 'Body' },
  { href: '/prices', label: 'Prices' },
  { href: '/shop', label: 'Shop' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isMounted) {
    // Prevent rendering on the server or before hydration to avoid mismatches
    // A loading skeleton or null could be returned here if preferred for SSR
    return null; 
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 group hover:bg-background/80 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2" prefetch={false}>
          <AltruvaLogoIcon className="h-10 w-10 text-primary" /> {/* Slightly larger logo */}
          <span className="font-serif text-3xl font-bold text-primary">Altruva</span>
        </Link>
        
        <nav className="hidden md:flex flex-grow items-center justify-center space-x-1"> {/* Adjusted space-x for padding */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md",
                "hover:bg-primary/10 hover:text-primary",
                pathname === item.href ? "text-primary font-semibold bg-primary/5" : "text-foreground/70" 
              )}
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Link href="/cart" aria-label="Shopping Cart" className="text-primary hover:text-accent transition-colors p-2 hover:bg-primary/10 rounded-md">
            <ShoppingCart size={20} />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-primary hover:text-accent transition-colors p-2 hover:bg-primary/10 rounded-md">
            <Instagram size={20} />
          </Link>
          <Link href="#" aria-label="Facebook" className="text-primary hover:text-accent transition-colors p-2 hover:bg-primary/10 rounded-md">
            <Facebook size={20} />
          </Link>
          <Link href="#" aria-label="YouTube" className="text-primary hover:text-accent transition-colors p-2 hover:bg-primary/10 rounded-md">
            <Youtube size={20} />
          </Link>
          <Link href="#" aria-label="TikTok" className="text-primary hover:text-accent transition-colors p-2 hover:bg-primary/10 rounded-md">
            <TikTokIcon className="h-5 w-5" />
          </Link>
          <UkFlagIcon className="h-4 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
          <CnFlagIcon className="h-4 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background shadow-lg py-4 animate-accordion-down">
          <nav className="flex flex-col space-y-1 px-4"> {/* Adjusted space-y */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block text-base font-medium transition-colors duration-200 py-2 px-3 rounded-md",
                  "hover:bg-primary/10 hover:text-primary",
                  pathname === item.href ? "text-primary bg-primary/5" : "text-foreground/80"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border pt-4 mt-2 space-y-2">
                 <Link href="/cart" className="flex items-center text-foreground/80 hover:text-primary py-2 px-3 rounded-md hover:bg-primary/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <ShoppingCart size={20} className="mr-2"/> Shopping Cart
                 </Link>
                 <div className="flex space-x-3 py-2 px-3">
                    <Link href="#" aria-label="Instagram" className="text-primary hover:text-accent p-2 hover:bg-primary/10 rounded-md"><Instagram size={20} /></Link>
                    <Link href="#" aria-label="Facebook" className="text-primary hover:text-accent p-2 hover:bg-primary/10 rounded-md"><Facebook size={20} /></Link>
                    <Link href="#" aria-label="YouTube" className="text-primary hover:text-accent p-2 hover:bg-primary/10 rounded-md"><Youtube size={20} /></Link>
                    <Link href="#" aria-label="TikTok" className="text-primary hover:text-accent p-2 hover:bg-primary/10 rounded-md"><TikTokIcon className="h-5 w-5" /></Link>
                 </div>
                 <div className="flex space-x-3 py-2 px-3">
                    <UkFlagIcon className="h-5 w-auto cursor-pointer hover:opacity-80" />
                    <CnFlagIcon className="h-5 w-auto cursor-pointer hover:opacity-80" />
                 </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
