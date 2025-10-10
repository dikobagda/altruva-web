
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
import { useLanguage, type Language as LanguageCode } from '@/context/LanguageContext';

export interface NavItem {
  href?: string;
  label: Record<LanguageCode, string>;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: { en: 'About', id: 'Tentang Kami' },
    subItems: [
      { href: '/about-us', label: { en: 'Philosophy', id: 'Filosofi' } },
      { href: '/about-us/meet-dr-olivia-aldisa', label: { en: 'Meet dr. Olivia Aldisa', id: 'Temui dr. Olivia Aldisa' } },
      { href: '/our-clinic', label: { en: 'Our Clinic', id: 'Klinik Kami' } },
    ],
  },
  { href: '/about-us/369-harmony', label: { en: '369 Harmony™', id: '369 Harmony™' } },
  {
    label: { en: 'Face', id: 'Face' },
    subItems: [
      {
        label: { en: 'Prejuvenation', id: 'Prejuvenation' },
        subItems: [
          {
            label: { en: 'Altruva Lift', id: 'Altruva Lift' },
            subItems: [
                { href: '/services/art-lyft-lite', label: { en: 'Altruva A.R.T Lift (Lite) by dr. Aldisa', id: 'Altruva A.R.T Lift (Lite) by dr. Aldisa' } },
                { href: '/services/gorgeous-lyft-prejuvenation', label: { en: 'Altruva Gorgeous Lyft by dr. Aldisa', id: 'Altruva Gorgeous Lyft by dr. Aldisa' } },
                { href: '/services/exion-lumi-rf', label: { en: 'Altruva Lumi RF', id: 'Altruva Lumi RF' } },
            ]
          },
          {
            label: { en: 'Altruva Lift Signature', id: 'Altruva Lift Signature' },
            subItems: [
                { href: '/services/slim-contour-injection', label: { en: 'Altruva Slim Contour Injection', id: 'Altruva Slim Contour Injection' } },
                { href: '/services/face-modulator-half', label: { en: 'Altruva Face Modulator (Half Dose)', id: 'Altruva Face Modulator (Half Dose)' } },
                { href: '/services/dermal-fillers', label: { en: 'Altruva Dermal Fillers', id: 'Altruva Dermal Fillers' } },
            ]
          },
          {
            label: { en: 'Signature Laser', id: 'Signature Laser' },
            subItems: [
                { href: '/services/exion-lumi-laser', label: { en: 'Altruva Lumi Laser', id: 'Altruva Lumi Laser' } },
                { href: '/services/exion-scar-solver', label: { en: 'Altruva Scar Solver', id: 'Altruva Scar Solver' } },
            ]
          },
          {
            label: { en: 'Signature Peels', id: 'Signature Peels' },
            subItems: [
                { href: '/services/clarify-peel', label: { en: 'Altruva Clarify Peel', id: 'Altruva Clarify Peel' } },
                { href: '/services/korean-luminous-peel', label: { en: 'Altruva Korean Luminous Peel', id: 'Altruva Korean Luminous Peel' } },
            ]
          },
          {
            label: { en: 'Skingeneering booster', id: 'Skingeneering booster' },
            subItems: [
              { href: '/services/glacier-skin', label: { en: 'Altruva Glacier Skin', id: 'Altruva Glacier Skin' } },
              { href: '/services/dark-spot-booster', label: { en: 'Altruva Darkspots-Boosters', id: 'Altruva Darkspots-Boosters' } },
              { href: '/services/purifying-booster', label: { en: 'Altruva Purifying Booster', id: 'Altruva Purifying Booster' } },
              { href: '/services/dna-repair', label: { en: 'Altruva DNA Repair', id: 'Altruva DNA Repair' } },
              { href: '/services/bio-prf', label: { en: 'Altruva Bio-PRF', id: 'Altruva Bio-PRF' } },
            ]
          }
        ],
      },
      {
        label: { en: 'Rejuvenation', id: 'Rejuvenation' },
        subItems: [
           {
            label: { en: 'Altruva Lift', id: 'Altruva Lift' },
            subItems: [
              { href: '/services/art-lyft', label: { en: 'Altruva A.R.T Lift PRO by dr. Aldisa', id: 'Altruva A.R.T Lift PRO by dr. Aldisa' } },
              { href: '/services/gorgeous-lyft-rejuvenation', label: { en: 'Altruva Gorgeous Lyft by dr. Aldisa', id: 'Altruva Gorgeous Lyft by dr. Aldisa' } },
              { href: '/services/radiance-lyft', label: { en: 'Altruva Regenerative RF', id: 'Altruva Regenerative RF' } },
            ],
          },
           {
            label: { en: 'Altruva Lift Signature', id: 'Altruva Lift Signature' },
             subItems: [
              { href: '/services/cocktail-contouring', label: { en: 'Altruva Cocktail Contouring', id: 'Altruva Cocktail Contouring' } },
              { href: '/services/face-modulator-full', label: { en: 'Altruva Face Modulator (Full Dose)', id: 'Altruva Face Modulator (Full Dose)' } },
              { href: '/services/dermal-fillers-pro', label: { en: 'Altruva Dermal Filler Pro', id: 'Altruva Dermal Filler Pro' } },
            ],
          },
          {
            label: { en: 'Signature Laser', id: 'Signature Laser' },
             subItems: [
              { href: '/services/exion-regen-laser', label: { en: 'Altruva Regenerative Laser', id: 'Altruva Regenerative Laser' } },
              { href: '/services/exion-fractiopro', label: { en: 'Altruva FractioPro', id: 'Altruva FractioPro' } },
            ],
          },
           {
            label: { en: 'Signature Peels', id: 'Signature Peels' },
             subItems: [
              { href: '/services/radiant-advanced-peel', label: { en: 'Altruva Radiant Advanced Peel', id: 'Altruva Radiant Advanced Peel' } },
            ],
          },
           {
            label: { en: 'Skingeneering Boosters', id: 'Skingeneering Boosters' },
             subItems: [
              { href: '/services/dna-repair-pro', label: { en: 'Altruva DNA Repair Pro', id: 'Altruva DNA Repair Pro' } },
              { href: '/services/dna-repair-eye', label: { en: 'Altruva DNA Repair Eye', id: 'Altruva DNA Repair Eye' } },
              { href: '/services/exoprime-pro', label: { en: 'Altruva Exoprime Pro', id: 'Altruva Exoprime Pro' } },
              { href: '/services/melabooster', label: { en: 'Altruva Mela-Boosters', id: 'Altruva Mela-Boosters' } },
              { href: '/services/amino-booster', label: { en: 'Altruva Amino Booster', id: 'Altruva Amino Booster' } },
              { href: '/services/bio-prf-rejuvenation', label: { en: 'Altruva Bio-PRF', id: 'Altruva Bio-PRF' } },
              { href: '/services/altruva-youth-elixir', label: { en: 'Altruva Youth Elixir', id: 'Altruva Youth Elixir' } },
            ],
          },
        ],
      },
    ],
  },
  {
    label: { en: 'Body', id: 'Body' },
    subItems: [
      { href: '/services/altruva-neocurve', label: { en: 'Altruva NeoCurve by EmSculpt Neo', id: 'Altruva NeoCurve by EmSculpt Neo' } },
      { href: '/services/altruva-lipo-elixir', label: { en: 'Altruva Lipo Elixir', id: 'Altruva Lipo Elixir' } },
      { href: '/services/altruva-regenerative-rf-body', label: { en: 'Altruva Regenerative RF (Body)', id: 'Altruva Regenerative RF (Body)' } },
      { href: '/services/altruva-lipofreeze', label: { en: 'Altruva LipoFreeze by CoolSculpting®', id: 'Altruva LipoFreeze by CoolSculpting®' } },
    ],
  },
  {
    label: { en: 'Hair', id: 'Hair' },
    subItems: [
        { href: '/services/altruva-micrograft-technology', label: { en: 'Altruva Micrograft Technology', id: 'Altruva Micrograft Technology' } },
        { href: '/services/altruva-hair-prf', label: { en: 'Altruva Hair PRF', id: 'Altruva Hair PRF' } },
        { href: '/services/altruva-hair-booster', label: { en: 'Altruva Hair Booster', id: 'Altruva Hair Booster' } },
    ]
  },
  {
    label: { en: 'Facial', id: 'Facial' },
    subItems: [
      { href: '/services/altruva-signature-facial', label: { en: 'Altruva Signature Facial (Pore Clean Facial)', id: 'Altruva Signature Facial (Pore Clean Facial)' } },
      { href: '/services/altruva-hydraglow-facial', label: { en: 'Altruva HydraGlow Facial', id: 'Altruva HydraGlow Facial' } },
      { href: '/facial/happy-hour', label: { en: 'Happy Hour', id: 'Happy Hour' } },
    ],
  },
  {
    label: { en: 'Publications', id: 'Publikasi' },
    subItems: [
      { href: '/insights', label: { en: 'Insights', id: 'Artikel' } },
      { href: '/beauty-journal', label: { en: 'Beauty Journal', id: 'Jurnal Kecantikan' } },
      { href: '/news-media', label: { en: 'News & Media', id: 'Berita & Media' } },
    ],
  },
  { href: '/contact', label: { en: 'Contact', id: 'Kontak' } },
];

type Language = {
  code: LanguageCode;
  label: string;
  Icon: React.ElementType;
};

const languages: Language[] = [
  { code: 'en', label: 'English', Icon: UkFlagIcon },
  { code: 'id', label: 'Bahasa Indonesia', Icon: IdFlagIcon },
];

const NavMenuItem = ({ item, isMobile, closeMobileMenu }: { item: NavItem, isMobile: boolean, closeMobileMenu?: () => void }) => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    if (closeMobileMenu) {
      closeMobileMenu();
    }
  };

  const itemLabel = t(item.label);

  if (item.href) {
    // For Desktop, top-level links are buttons
    if (!isMobile) {
      return (
        <Button
          variant="ghost"
          asChild
          className={cn(
            "font-sans font-semibold transition-colors duration-200 px-3 py-2 rounded-md flex items-center justify-start text-left h-auto",
            "hover:bg-primary/10 hover:text-primary",
            isActive ? "text-primary bg-primary/5" : "text-foreground/80"
          )}
        >
          <Link href={item.href} prefetch={false} onClick={handleLinkClick}>{itemLabel}</Link>
        </Button>
      );
    }
    
    // For Mobile
    return (
        <div className='p-0'>
            <Link
            href={item.href}
            className={cn(
                "w-full text-left",
                "block font-sans font-semibold transition-colors duration-200 py-2 px-3 rounded-md hover:bg-primary/10 hover:text-primary",
                isActive ? "text-primary bg-primary/5" : "text-foreground/80"
            )}
            onClick={handleLinkClick}
            prefetch={false}
            >
            {itemLabel}
            </Link>
        </div>
    );
  }

  if (hasSubItems) {
    // Desktop Dropdown
    if (!isMobile) {
      // Top-level dropdown with subitems
      return (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "font-sans font-semibold transition-colors duration-200 px-3 py-2 rounded-md flex items-center justify-start text-left h-auto",
                "hover:bg-primary/10 hover:text-primary",
                isActive ? "text-primary" : "text-foreground/80"
              )}
            >
              {itemLabel}
              <ChevronDown className="ml-1 h-4 w-4 opacity-70 group-data-[state=open]:rotate-180 transition-transform" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-popover shadow-lg mt-1 w-56">
            {item.subItems?.map((subItem) => (
              <NavSubMenuItem key={t(subItem.label)} item={subItem} isMobile={isMobile} onLinkClick={handleLinkClick} />
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    
    // Mobile Dropdowns
    if (isMobile) {
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
                  <span>{itemLabel}</span>
                  <ChevronDown className="h-4 w-4 opacity-70 group-data-[state=open]:rotate-180 transition-transform" />
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="bottom" align="start" className="w-[calc(100vw-theme(spacing.12))] bg-popover shadow-lg mt-1">
                  {item.subItems?.map((subItem) => (
                      <NavSubMenuItem key={t(subItem.label)} item={subItem} isMobile={isMobile} onLinkClick={handleLinkClick} />
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
    }
  }

  // Fallback for items that are neither links nor have sub-items
  return <span className="px-3 py-2 text-foreground/60">{itemLabel}</span>;
};


// Helper component for items inside a dropdown menu
const NavSubMenuItem = ({ item, isMobile, onLinkClick }: { item: NavItem, isMobile: boolean, onLinkClick: () => void }) => {
    const { t } = useLanguage();
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
    const itemLabel = t(item.label);

    if (item.href) {
        return (
            <DropdownMenuItem className='p-0'>
                <Link
                    href={item.href}
                    className={cn(
                        "w-full h-full text-left",
                        "font-sans font-semibold transition-colors duration-200 px-3 py-2 rounded-md flex items-center justify-start hover:bg-primary/10",
                        isActive ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-primary"
                    )}
                    onClick={onLinkClick}
                    prefetch={false}
                >
                    {itemLabel}
                </Link>
            </DropdownMenuItem>
        );
    }
    
    if (hasSubItems) {
        return (
            <DropdownMenuSub>
                <DropdownMenuSubTrigger className={cn(
                    "w-full cursor-pointer flex justify-between items-center",
                    "font-sans font-semibold transition-colors duration-200 px-3 py-2 rounded-md h-auto hover:bg-primary/10",
                    isActive ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-primary"
                )}>
                    <span>{itemLabel}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-popover w-56">
                    {item.subItems?.map((subItem) => (
                        <NavSubMenuItem key={t(subItem.label)} item={subItem} isMobile={isMobile} onLinkClick={onLinkClick} />
                    ))}
                    </DropdownMenuSubContent>
                </DropdownMenuPortal>
            </DropdownMenuSub>
        );
    }
    
    return <span className="px-3 py-2 text-foreground/60">{itemLabel}</span>;
}


export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const selectedLanguage = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };


  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
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
            <Button variant="ghost" size="icon" aria-label="Toggle mobile menu" className="text-primary">
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
              : "px-4 py-2 rounded-full bg-primary text-primary-foreground text-foreground/80 hover:bg-primary/10",
             !inMobileMenu && "border-none"
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
      <DropdownMenuContent align="end" className="bg-popover shadow-lg">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onSelect={() => setLanguage(lang.code)} className="space-x-2 cursor-pointer">
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "shadow-lg" : "shadow-none",
        "bg-background"
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
            <NavMenuItem key={t(item.label)} item={item} isMobile={false} />
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <LanguageSelector />
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu" 
            className={cn("text-primary")}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background shadow-lg py-4 animate-accordion-down">
          <nav className="flex flex-col space-y-1 px-4">
            {navItems.map((item) => (
               <NavMenuItem key={t(item.label)} item={item} isMobile={true} closeMobileMenu={closeMobileMenu} />
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

    