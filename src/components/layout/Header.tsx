
"use client";

import Link from 'next/link';
import { useState, useEffect, Fragment } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { UkFlagIcon } from '@/components/icons/UkFlagIcon';
import { IdFlagIcon } from '@/components/icons/IdFlagIcon';
import { CnFlagIcon } from '@/components/icons/CnFlagIcon';

export interface NavItem {
  href?: string;
  label: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'About',
    subItems: [
      { href: '/about-us', label: 'About us' },
      { href: '/our-clinic', label: 'Our Clinic' },
      { href: '/news-media', label: 'News & Media' },
      { href: '/about-us/369-harmony', label: '369 Harmony™' },
    ],
  },
  { href: '/skin', label: 'Skin' },
  {
    label: 'Face',
    subItems: [
      { href: '/face/altruva-signature-facial', label: 'Altruva Signature Facial (Pore Clean Facial)' },
      { href: '/face/altruva-hydraglow-facial', label: 'Altruva HydraGlow Facial' },
      {
        label: 'Prejuvenation',
        subItems: [
          { href: '/face/prejuvenation/altruva-lift', label: 'Altruva Lift' },
          { href: '/face/prejuvenation/altruva-lift-signature', label: 'Altruva Lift Signature' },
          { href: '/face/prejuvenation/signature-laser', label: 'Signature Laser' },
          { href: '/face/prejuvenation/signature-peels', label: 'Signature Peels' },
        ],
      },
      {
        label: 'Rejuvenation',
        subItems: [
          { href: '/face/rejuvenation/altruva-lift', label: 'Altruva Lift' },
          { href: '/face/rejuvenation/altruva-lift-signature', label: 'Altruva Lift Signature' },
          { href: '/face/rejuvenation/signature-laser', label: 'Signature Laser' },
          { href: '/face/rejuvenation/signature-peels', label: 'Signature Peels' },
          { href: '/face/rejuvenation/skingeneering-boosters', label: 'Skingeneering Boosters' },
        ],
      },
    ],
  },
  {
    label: 'Hair',
    subItems: [
        { href: '/hair/altruva-micrograft-technology', label: 'Altruva Micrograft Technology' },
        { href: '/hair/altruva-hair-prf', label: 'Altruva Hair PRF' },
        { href: '/hair/altruva-hair-booster', label: 'Altruva Hair Booster' },
    ]
  },
  {
    label: 'Body',
    subItems: [
      { href: '/body/altruva-neocurve', label: 'Altruva NeoCurve by EmSculpt Neo' },
      { href: '/body/altruva-lipo-elixir', label: 'Altruva Lipo Elixir' },
      { href: '/body/altruva-regenerative-rf', label: 'Altruva Regenerative RF (Body)' },
      { href: '/body/altruva-lipofreeze', label: 'Altruva LipoFreeze by CoolSculpting®' },
    ],
  },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

type Language = {
  code: 'en' | 'id' | 'cn';
  label: string;
  Icon: React.ElementType;
};

const languages: Language[] = [
  { code: 'en', label: 'English', Icon: UkFlagIcon },
  { code: 'id', label: 'Bahasa Indonesia', Icon: IdFlagIcon },
  { code: 'cn', label: '中文', Icon: CnFlagIcon },
];

const NavMenuItem = ({ item, isMobile, closeMobileMenu }: { item: NavItem, isMobile: boolean, closeMobileMenu?: () => void }) => {
  const pathname = usePathname();
  const hasSubItems = item.subItems && item.subItems.length > 0;

  const getIsActive = (navItem: NavItem): boolean => {
    if (navItem.href) {
      return pathname === navItem.href || pathname.startsWith(navItem.href + '/');
    }
    if (navItem.subItems) {
      return navItem.subItems.some(sub => getIsActive(sub));
    }
    return false;
  };
  const isActive = getIsActive(item);

  if (item.href) {
    const Comp = isMobile ? 'div' : DropdownMenuItem;
    return (
      <Comp className={isMobile ? 'p-0' : ''}>
        <Link
          href={item.href}
          className={cn(
            "w-full text-left",
            isMobile
              ? "block font-sans font-semibold transition-colors duration-200 py-2 px-3 rounded-md hover:bg-primary/10 hover:text-primary"
              : "font-sans font-semibold transition-colors duration-200 px-3 py-2 rounded-md flex items-center justify-start h-auto",
            isActive ? "text-primary bg-primary/5" : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
          )}
          onClick={closeMobileMenu}
          prefetch={false}
        >
          {item.label}
        </Link>
      </Comp>
    );
  }

  if (hasSubItems) {
    const isNestedSubmenu = item.subItems.some(sub => sub.subItems && sub.subItems.length > 0);

    // Desktop Dropdown
    if (!isMobile) {
      if (item.label === 'Face' || item.label === 'About' || item.label === 'Body' || item.label === 'Hair' || isNestedSubmenu) {
        // Top-level dropdown with more items or nested items
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "font-sans font-semibold transition-colors duration-200 px-3 py-2 rounded-md flex items-center justify-start text-left h-auto",
                  "hover:bg-primary/10 hover:text-primary",
                  isActive ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.label}
                <ChevronDown className="ml-1 h-4 w-4 opacity-70 group-data-[state=open]:rotate-180 transition-transform" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-background shadow-lg mt-1 w-56">
              {item.subItems?.map((subItem) => (
                <NavMenuItem key={subItem.label} item={subItem} isMobile={isMobile} closeMobileMenu={closeMobileMenu} />
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
      
      // Nested Submenu (Prejuvenation, Rejuvenation)
      return (
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={cn(
            "w-full cursor-pointer flex justify-between items-center",
            "font-sans font-semibold transition-colors duration-200 px-3 py-2 rounded-md h-auto",
            isActive ? "text-primary bg-primary/5" : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
          )}>
            <span>{item.label}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-56">
              {item.subItems?.map((subItem) => (
                <NavMenuItem key={subItem.label} item={subItem} isMobile={isMobile} closeMobileMenu={closeMobileMenu} />
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      );
    }
  }

  // Mobile Submenus
  if (isMobile && hasSubItems) {
      return (
        <div>
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                variant="ghost"
                className={cn(
                    "w-full justify-between font-sans font-semibold transition-colors duration-200 py-2 px-3 rounded-md flex items-center h-auto text-left",
                    "hover:bg-primary/10 hover:text-primary",
                    isActive ? "text-primary" : "text-foreground/80"
                )}
                >
                <span>{item.label}</span>
                <ChevronDown className="h-4 w-4 opacity-70 group-data-[state=open]:rotate-180 transition-transform" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="start" className="w-[calc(100vw-theme(spacing.12))] bg-background shadow-lg mt-1">
                {item.subItems?.map((subItem) => (
                    <NavMenuItem key={subItem.label} item={subItem} isMobile={isMobile} closeMobileMenu={closeMobileMenu} />
                ))}
            </DropdownMenuContent>
           </DropdownMenu>
        </div>
      )
  }

  // Fallback for items that are neither links nor have sub-items
  return <span className="px-3 py-2 text-foreground/60">{item.label}</span>;
};


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
      handleScroll(); // Call on mount to set initial state
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
  
  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };


  if (!isMounted) {
    // To prevent hydration mismatch and ensure smooth client-side rendering of dynamic parts.
    // You can return a placeholder or null. A common pattern is to return a static version or null.
    return (
      <header className="absolute top-0 left-0 right-0 z-50 group">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2" prefetch={false}>
            <Image
              src="/images/logo-altruva.png"
              width={90}
              height={90}
              alt="Altruva Logo"
            />
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle mobile menu" className="text-white group-hover:text-primary">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    );
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
              : "px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary", // No hover change for desktop
             !inMobileMenu && "border-none" // Explicitly no border for desktop
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
        "top-0 left-0 right-0 z-50 transition-shadow duration-300 ease-in-out group",
        isScrolled
          ? "fixed bg-background shadow-lg" // Opaque background when scrolled
          : "absolute group-hover:bg-background/80", // Semi-transparent on hover when not scrolled
        isScrolled ? "bg-background" : "bg-transparent group-hover:bg-background/80"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2" prefetch={false}>
           <Image
            src="/images/logo-altruva.png"
            width={90}
            height={90}
            alt="Altruva Logo"
          />
        </Link>

        <nav className="hidden md:flex flex-grow items-center justify-start ml-10 space-x-3">
          {navItems.map((item) => (
            <NavMenuItem key={item.label} item={item} isMobile={false} />
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <LanguageSelector />
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu" 
            className={cn(
              isScrolled ? "text-primary" : "text-foreground/80 group-hover:text-primary"
            )}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background shadow-lg py-4 animate-accordion-down">
          <nav className="flex flex-col space-y-1 px-4">
            {navItems.map((item) => (
               <NavMenuItem key={item.label} item={item} isMobile={true} closeMobileMenu={closeMobileMenu} />
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
    
