
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Removed ShoppingCart
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AltruvaLogoIcon } from '@/components/icons/AltruvaLogoIcon';
import { UkFlagIcon } from '@/components/icons/UkFlagIcon';
import { CnFlagIcon } from '@/components/icons/CnFlagIcon';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isMounted) {
      window.addEventListener('scroll', handleScroll);
      // Call handleScroll once to set initial state based on current scroll position
      handleScroll(); 
    }

    return () => {
      if (isMounted) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isMounted]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isMounted) {
    // Prevent rendering on the server or before hydration to avoid mismatches
    return null; 
  }

  return (
    <header 
      className={cn(
        "top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out group hover:bg-background/80",
        isScrolled 
          ? "fixed bg-background/95 shadow-lg" 
          : "absolute"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2" prefetch={false}>
          <AltruvaLogoIcon className="h-10 w-10 text-primary" />
          <span className="font-serif text-3xl font-bold text-primary">Altruva</span>
        </Link>
        
        <nav className="hidden md:flex flex-grow items-center justify-center space-x-1">
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
          {/* Shopping cart icon removed */}
          <UkFlagIcon className="h-4 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
          <CnFlagIcon className="h-4 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu" className="text-primary">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background shadow-lg py-4 animate-accordion-down">
          <nav className="flex flex-col space-y-1 px-4">
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
                 {/* Shopping cart link removed from mobile menu */}
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
