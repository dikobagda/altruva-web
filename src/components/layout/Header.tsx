
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
import { AltruvaLogoIcon } from '@/components/icons/AltruvaLogoIcon'; // Assuming this exists if branding was applied
import { UkFlagIcon } from '@/components/icons/UkFlagIcon';
import { IdFlagIcon } from '@/components/icons/IdFlagIcon';
import Image from 'next/image';

export interface NavSubItem {
  href: string;
  label: string;
}

export interface NavItem {
  href?: string;
  label: string;
  subItems?: NavSubItem[];
}

const navItems: NavItem[] = [
  { href: '/about', label: 'About' },
  { href: '/skin', label: 'Skin' },
  {
    label: 'Face',
    href: '/face',
    subItems: [
      { href: '/face/non-surgical-facelift', label: 'Non-surgical facelift' },
      { href: '/face/wrinkle-treatments', label: 'Wrinkle treatments' },
      { href: '/face/soft-tissue-filler', label: 'Soft tissue filler' },
      { href: '/face/fat-reduction', label: 'Fat reduction' },
      { href: '/face/skin-quality', label: 'Skin quality' },
    ],
  },
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
        <Button
          variant={inMobileMenu ? "ghost" : "default"}
          className={cn(
            "flex items-center space-x-1.5 h-auto transition-none",
            inMobileMenu
              ? "w-full justify-start px-2 py-1"
              : "px-4 py-2 rounded-full hover:bg-primary text-primary-foreground"
          )}
        >
          <selectedLanguage.Icon className={cn("h-4 w-auto", !inMobileMenu && "text-primary-foreground" )} />
          {!inMobileMenu && <span className="text-xs text-primary-foreground">{selectedLanguage.code.toUpperCase()}</span>}
          {inMobileMenu && <span className="text-base font-semibold text-foreground/80">{selectedLanguage.label}</span>}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform group-data-[state=open]:rotate-180",
              inMobileMenu ? "text-foreground/70" : "text-primary-foreground"
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background shadow-lg">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onSelect={() => setSelectedLanguage(lang)} className="space-x-2 cursor-pointer">
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
        "top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ease-in-out group",
        isScrolled
          ? "fixed bg-background shadow-lg"
          : "absolute group-hover:bg-background/80"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2" prefetch={false}>
           <Image
            src="/images/altruva_logo.png" // Ensure this path is correct
            width={90}
            height={90}
            alt="Altruva Logo"
          />
        </Link>

        <nav className="hidden md:flex flex-grow items-center justify-start space-x-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href || pathname.startsWith(sub.href)));
            const baseLinkClasses = "font-sans font-semibold transition-colors duration-200 px-3 py-2 rounded-md flex items-center justify-start text-left h-auto";
            const hoverClasses = "hover:bg-primary/10 hover:text-primary";
            
            let currentTextColorClasses;
            if (isActive) {
              currentTextColorClasses = "text-primary bg-primary/5";
            } else if (isScrolled) {
              currentTextColorClasses = "text-foreground/80";
            } else {
              currentTextColorClasses = "text-white group-hover:text-foreground/80";
            }

            if (item.subItems) {
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(baseLinkClasses, currentTextColorClasses, hoverClasses)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180",
                           isActive ? "opacity-100" : "opacity-70" // Chevron matches text emphasis better
                        )}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-background shadow-lg mt-1">
                    {item.href && (
                      <DropdownMenuItem asChild>
                        <Link
                          href={item.href}
                          prefetch={false}
                          className={cn(
                            "w-full font-medium cursor-pointer",
                            pathname === item.href ? "bg-primary/10 text-primary font-semibold" : "hover:bg-primary/5"
                          )}
                        >
                          {item.label} Overview
                        </Link>
                      </DropdownMenuItem>
                    )}
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link
                          href={subItem.href}
                          prefetch={false}
                          className={cn(
                            "w-full font-medium cursor-pointer",
                            pathname === subItem.href ? "bg-primary/10 text-primary font-semibold" : "hover:bg-primary/5"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(baseLinkClasses, currentTextColorClasses, hoverClasses)}
                prefetch={false}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <LanguageSelector />
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu" className={cn(isScrolled ? "text-primary" : "text-white group-hover:text-primary")}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background shadow-lg py-4 animate-accordion-down">
          <nav className="flex flex-col space-y-1 px-4">
            {navItems.map((item) => {
              const isActiveMobile = pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href || pathname.startsWith(sub.href)));
              
              if (item.subItems) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-between font-sans font-semibold transition-colors duration-200 py-2 px-3 rounded-md flex items-center h-auto text-left",
                          "hover:bg-primary/10 hover:text-primary",
                          isActiveMobile
                            ? "text-primary bg-primary/5"
                            : "text-foreground/80"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4 opacity-70 group-data-[state=open]:rotate-180 transition-transform" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom" align="start" className="w-[calc(100vw-theme(spacing.12))] bg-background shadow-lg mt-1"> {/* Adjusted width and margin */}
                      {item.href && (
                         <DropdownMenuItem asChild>
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            prefetch={false}
                            className={cn(
                              "w-full font-medium cursor-pointer",
                              pathname === item.href ? "bg-primary/10 text-primary font-semibold" : "hover:bg-primary/5"
                            )}
                          >
                            {item.label} Overview
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.href} asChild>
                          <Link
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            prefetch={false}
                            className={cn(
                              "w-full font-medium cursor-pointer",
                              pathname === subItem.href ? "bg-primary/10 text-primary font-semibold" : "hover:bg-primary/5"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={cn(
                    "block font-sans font-semibold transition-colors duration-200 py-2 px-3 rounded-md",
                    "hover:bg-primary/10 hover:text-primary",
                    isActiveMobile ? "text-primary bg-primary/5" : "text-foreground/80"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  prefetch={false}
                >
                  {item.label}
                </Link>
              );
            })}
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

    