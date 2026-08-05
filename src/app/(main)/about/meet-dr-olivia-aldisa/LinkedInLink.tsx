"use client";

import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export default function LinkedInLink() {
  const { t } = useLanguage();
  return (
    <a
      href="https://id.linkedin.com/in/droliviaaldisa"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
    >
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/fluency/24/linkedin.png"
        alt="LinkedIn"
      />
      {t({
        en: "Visit dr. Aldisa's LinkedIn Profile",
        id: 'Kunjungi Profil LinkedIn dr. Aldisa',
      })}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}