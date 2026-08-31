export interface PressFeature {
  publication: string;
  title: string;
  link: string;
  type: string;
  date?: string; // Optional date
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

export const rawPressFeatures = [
  // 1. Articles with dates (newest first)
  {
    publication: 'Aestheticplusonline.com',
    date: '2026-08-31',
    title: 'Gandeng JULÄINE™, Altruva Aesthetic Clinic Hadirkan The Art of Presence untuk Perempuan Eksekutif',
    link: 'https://www.aestheticplusonline.com/2026/08/31/gandeng-julaine-altruva-aesthetic-clinic-hadirkan-the-art-of-presence-untuk-perempuan-eksekutif/',
    type: 'article'
  },
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
  },

  // 2. Old articles without specific exact dates
  {
    publication: 'Fajar',
    title: 'Ingin Awet Muda? Lakukan Perawatan Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://harian.fajar.co.id/2025/08/20/ingin-awet-muda-lakukan-perawatan-regeneratif-dan-filosofi-quiet-luxury/',
    type: 'article'
  },
  {
    publication: 'Lampung Post',
    title: 'Altruva Mengukir Keindahan Alami, Bukan Sekadar Mengubah Wajah',
    link: 'https://lampost.co/ekonomi-dan-bisnis/altruva-mengukir-keindahan-alami-bukan-sekadar-mengubah-wajah',
    type: 'article'
  },
  {
    publication: 'Warta Pontianak',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://wartapontianak.pikiran-rakyat.com/nasional/pr-1179596920/regeneratif-dan-filosofi-quiet-luxury?page=all',
    type: 'article'
  },
  {
    publication: 'Barito Post',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://www.baritopost.co.id/regeneratif-dan-filos',
    type: 'article'
  },
  {
    publication: 'Radar Lampung',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://radarlampung.bacakoran.co/read/25096/regeneratif-dan-filosofi-quiet-luxury',
    type: 'article'
  },
  {
    publication: 'Radar Banjarmasin',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://radarbanjarmasin.jawapos.com/ragam-info/1976477511/regeneratif-dan-filosofi-quiet-luxury?page=all',
    type: 'article'
  },
  {
    publication: 'Manado Post',
    title: 'Altruva Menghadirkan Estetika Regeneratif dengan Filosofi Quiet Luxury',
    link: 'https://manadopost.jawapos.com/ekbis/286477540/altruva-menghadirkan-estetika-regeneratif-dengan-filosofi-quiet-luxury',
    type: 'article'
  },
  {
    publication: 'Pontianak Post',
    title: 'Mengenal Autentisitas yang Jadi Fokus Layanan Estetika di Klinik Altruva',
    link: 'https://pontianakpost.jawapos.com/kesehatan/1466480189/mengenal-autentisitas-yang-jadi-fokus-layanan-estetika-di-klinik-altruva',
    type: 'article'
  },
  {
    publication: 'Balikpapan Pos',
    title: 'Altruva Aesthetic Clinic, Klinik Estetika Regeneratif Berkelas dengan Filosofi Quiet Luxury',
    link: 'https://www.balpos.com/ekonomi/1796482186/altruva-aesthetic-clinic-klinik-estetika-regeneratif-berkelas-dengan-filosofi-quiet-luxury',
    type: 'article'
  },
  {
    publication: 'Samarinda Pos',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://www.sapos.co.id/breaking-news/2456482231/regeneratif-dan-filosofi-quiet-luxury?page=all',
    type: 'article'
  },
  {
    publication: 'GoPos.id',
    title: 'Altruva Aesthetic Clinic Hadirkan Estetika Regeneratif dengan Sentuhan Quiet Luxury',
    link: 'https://gopos.id/altruva-aesthetic-clinic-hadirkan-estetika-regeneratif-dengan-sentuhan-quiet-luxury/',
    type: 'article'
  },
  {
    publication: 'Barometer News',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://barometernewsgo.com/2025/08/25/regeneratif-dan-filosofi-quiet-luxury/',
    type: 'article'
  },
  {
    publication: 'Radar Balikpapan',
    title: 'Altruva Aesthetic Clinic Kini Hadir di Jaksel',
    link: 'https://radarbalikpapan.com/altruva-aesthetic-clinic-kini-hadir-di-jaksel/',
    type: 'article'
  },
  {
    publication: 'Pojok Satu Sulsel',
    title: 'dr. Aldisa Buka Altruva Aesthetic Clinic, Hadir dengan Perawatan Quiet Luxury di Senopati',
    link: 'https://sulsel.pojoksatu.id/lifestyle/1146483693/dr-aldisa-buka-altruva-aesthetic-clinic-hadir-dengan-perawatan-quiet-luxury-di-senopati',
    type: 'article'
  },
  {
    publication: 'Kaltim Post',
    title: 'Enggak Perlu ke Luar Negeri, Rasakan Sensasi Perawatan Internasional di Altruva Aesthetic Clinic',
    link: 'https://kaltimpost.jawapos.com/selebritas/2386491466/enggak-perlu-ke-luar-negeri-rasakan-sensasi-perawatan-internasional-di-altruva-aesthetic-clinic',
    type: 'article'
  },
  {
    publication: 'Antara News Manado',
    title: 'Dokter Estetika: Kecantikan Perempuan Melalui Pendekatan Regeneratif',
    link: 'https://manado.antaranews.com/berita/292417/dokter-estetika-kecantikan-perempuan-melalui-pendekatan-regeneratif',
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
