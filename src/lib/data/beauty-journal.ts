
export interface BeautyJournal {
  id: string;
  title: string;
  issue: string; // e.g., "October 2025"
  coverImage: string;
  downloadUrl: string; // URL to the PDF file
}

export const beautyJournals: BeautyJournal[] = [
  {
    id: '2',
    title: 'Menopause Awareness',
    issue: 'September 2025',
    coverImage: '/images/journal/2025/september/cover.png',
    downloadUrl: '/downloads/placeholder-journal.pdf',
  },
];
