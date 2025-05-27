
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AltruvaLogoIcon } from '@/components/icons/AltruvaLogoIcon';
import { UkFlagIcon } from '@/components/icons/UkFlagIcon';
import { IdFlagIcon } from '@/components/icons/IdFlagIcon';

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

type Language = {
  code: 'en' | 'id';
  label: string;
  Icon: React.ElementType;
};

const languages: Language[] = [
  { code: 'en', label: 'English', Icon: UkFlagIcon },
  { code: 'id', label: 'Bahasa Indonesia', Icon: IdFlagIcon },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isMounted) {
      window.addEventListener('scroll', handleScroll);
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
    return null; 
  }

  const LanguageSelector = ({ inMobileMenu = false }: { inMobileMenu?: boolean }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn("flex items-center space-x-1.5 px-2 py-1 h-auto group-hover:bg-primary/10", inMobileMenu ? "w-full justify-start" : "")}>
          <selectedLanguage.Icon className="h-4 w-auto" />
          {!inMobileMenu && <span className="text-xs text-foreground/70 group-hover:text-primary">{selectedLanguage.code.toUpperCase()}</span>}
          {inMobileMenu && <span className="text-base font-medium text-foreground/80 group-hover:text-primary">{selectedLanguage.label}</span>}
          <ChevronDown className="h-4 w-4 text-foreground/70 group-hover:text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onSelect={() => setSelectedLanguage(lang)} className="space-x-2">
            <lang.Icon className="h-4 w-auto" />
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header 
      className={cn(
        "top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ease-in-out", // Changed transition-all
        isScrolled 
          ? "fixed bg-background shadow-lg" 
          : "absolute group hover:bg-background/80" 
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
          <LanguageSelector />
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu" className={cn("text-primary", isScrolled && "text-primary")}>
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
                 <div className="py-2 px-3">
                    <LanguageSelector inMobileMenu={true} />
                 </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
