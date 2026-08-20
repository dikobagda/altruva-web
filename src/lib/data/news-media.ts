export interface PressFeature {
  publication: string;
  title: string;
  link: string;
  type: string;
  date: string; // ISO date string or formatted date for ordering and display
  slug: string;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/\s+/g, '-') // replace spaces with -
    .replace(/[^\w\-]+/g, '') // remove all non-word chars
    .replace(/\-\-+/g, '-') // replace multiple - with single -
    .replace(/^-+/, '') // trim leading -
    .replace(/-+$/, ''); // trim trailing -
}

// Exactly the 13 articles specified in the user's document, manually sorted from newest to oldest.
export const rawPressFeatures = [
  {
    publication: 'Kompas.com',
    date: '2026-04-21',
    title: 'Cara Efektif Merangsang Produksi Kolagen di Usia 40-an',
    link: 'https://lifestyle.kompas.com/read/2026/04/21/143300420/cara-efektif-merangsang-produksi-kolagen-di-usia-40-an',
    type: 'article'
  },
  {
    publication: 'Kompas.com',
    date: '2026-04-19',
    title: 'Waspada Efek Wajah Cekung akibat Prosedur Pengencangan Kulit Tak Tepat',
    link: 'https://lifestyle.kompas.com/read/2026/04/19/203300320/waspada-efek-wajah-cekung-akibat-prosedur-pengencangan-kulit-tak-tepat',
    type: 'article'
  },
  {
    publication: 'Peranperempuan.id',
    date: '2026-04-19',
    title: 'Ladies, 90 Persen Penuaan Berasal dari Pola Hidup loh!',
    link: 'https://peranperempuan.id/ladies-90-persen-penuaan-berasal-dari-pola-hidup-loh/',
    type: 'article'
  },
  {
    publication: 'Suara.com',
    date: '2026-04-19',
    title: 'Bukan Cuma Faktor Usia, Kombinasi Kolagen Turun dan Teknik Salah Picu Wajah Kempot',
    link: 'https://www.suara.com/lifestyle/2026/04/19/090703/bukan-cuma-faktor-usia-kombinasi-kolagen-turun-dan-teknik-salah-picu-wajah-kempot',
    type: 'article'
  },
  {
    publication: 'Investor Daily',
    date: '2026-04-18',
    title: 'Perawatan Lifting Sembarangan Justru Percepat Wajah Kempot',
    link: 'https://investor.id/lifestyle/435775/perawatan-lifting-sembarangan-justru-percepat-wajah-kempot',
    type: 'article'
  },
  {
    publication: 'Herstory.co.id',
    date: '2026-04-18',
    title: 'Mau Kulit Kencang tapi Natural? Ini Rahasia Lifting Wajah Tanpa Kempot!',
    link: 'https://herstory.co.id/read158926/mau-kulit-kencang-tapi-natural-ini-rahasia-lifting-wajah-tanpa-kempot',
    type: 'article'
  },
  {
    publication: 'Wartakota.tribunnews.com',
    date: '2026-04-17',
    title: "Fenomena 'Wajah Kempot', Risiko Tersembunyi di Balik Prosedur Lifting yang Tidak Presisi",
    link: 'https://wartakota.tribunnews.com/lifestyle/887444/fenomena-wajah-kempot-risiko-tersembunyi-di-balik-prosedur-lifting-yang-tidak-presisi',
    type: 'article'
  },
  {
    publication: 'Suarakarya.id',
    date: '2026-04-17',
    title: 'Altruva Clinic Tawarkan Solusi "Wajah Kempot" Pasca Liftinng dengan Teknologi Modern yang Presisi',
    link: 'https://www.suarakarya.id/muda/26017009095/altruva-clinic-tawarkan-solusi-wajah-kempot-pasca-liftinng-dengan-teknologi-modern-yang-presisi',
    type: 'article'
  },
  {
    publication: 'Mediaindonesia.com',
    date: '2026-04-17',
    title: 'Waspada Fenomena Wajah Kempot, Ini Pentingnya Presisi Lifting',
    link: 'https://mediaindonesia.com/humaniora/880627/waspada-fenomena-wajah-kempot-ini-pentingnya-presisi-lifting',
    type: 'article'
  },
  {
    publication: 'Wanitaindonesia.co',
    date: '2026-04-17',
    title: 'Efek ‘Wajah Kempot’ Usai Lifting: Ketika Estetika Gagal, Teknologi Harus Bicara',
    link: 'https://wanitaindonesia.co/efek-wajah-kempot-usai-lifting-ketika-estetika-gagal-teknologi-harus-bicara2/?amp=1',
    type: 'article'
  },
  {
    publication: 'Kontan.co.id',
    date: '2026-04-17',
    title: 'Takut Wajah Kempot, Ini Cara dan Teknologi untuk Mencegahnya',
    link: 'https://amp.kontan.co.id/news/takut-wajah-kempot-ini-cara-dan-teknologi-untuk-mencegahnya',
    type: 'article'
  },
  {
    publication: 'Akurat.co',
    date: '2026-04-17',
    title: 'Fenomena Wajah Kempot Usai Treatment Jadi Sorotan: Perlu Solusi Presisi Teknologi Estetika Modern',
    link: 'https://www.akurat.co/health/849544/fenomena-wajah-kempot-usai-treatment-jadi-sorotan-perlu-solusi-presisi-teknologi-estetika-modern',
    type: 'article'
  },
  {
    publication: 'Antaranews.com',
    date: '2026-04-17',
    title: 'Pakar estetika sebut pentingnya presisi energi hindari salah perawatan',
    link: 'https://www.antaranews.com/berita/5530737/pakar-estetika-sebut-pentingnya-presisi-energi-hindari-salah-perawatan?utm_source=antaranews&utm_medium=mobile&utm_campaign=latest_category',
    type: 'article'
  }
];

// Generate unique slugs for all articles to ensure SEO friendly local paths
export const pressFeatures: PressFeature[] = rawPressFeatures.map((item) => {
  // Ensure unique slug by prefixing the publication
  const uniqueTitle = `${item.publication} ${item.title}`;
  return {
    ...item,
    slug: slugify(uniqueTitle)
  };
});
