
export interface BeautyJournal {
  id: string;
  title: string;
  issue: string; // e.g., "October 2025"
  coverImage: string;
  downloadUrl: string; // URL to the PDF file
}

export const beautyJournals: BeautyJournal[] = [
  {
    id: '1',
    title: 'The Regenerative Issue',
    issue: 'October 2025',
    coverImage: 'https://placehold.co/600x800/E8DED5/b76631?text=Beauty+Journal',
    downloadUrl: '/downloads/placeholder-journal.pdf',
  },
  {
    id: '2',
    title: 'The Harmony Issue',
    issue: 'September 2025',
    coverImage: 'https://placehold.co/600x800/E8DED5/b76631?text=Beauty+Journal',
    downloadUrl: '/downloads/placeholder-journal.pdf',
  },
];
