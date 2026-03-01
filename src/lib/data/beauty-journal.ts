
export interface BeautyJournal {
  id: string;
  title: string;
  issue: string; // e.g., "October 2025"
  coverImage: string;
  downloadUrl?: string; // URL to the PDF file
  slug?: string; // URL slug for reading online
}

export const beautyJournals: BeautyJournal[] = [
  {
    id: '3',
    title: 'Ramadan & Eid Combination Treatments',
    issue: 'March 2026',
    coverImage: '/images/journal/2025/altruva_maret.png',
    slug: 'ramadan-eid-2026',
  },
  {
    id: '2',
    title: 'Menopause Awareness',
    issue: 'September 2025',
    coverImage: '/images/journal/2025/september/cover.png',
    downloadUrl: '/downloads/altruva_september.pdf',
  },
];
