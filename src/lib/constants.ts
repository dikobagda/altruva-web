
import type { LucideIcon } from 'lucide-react';
import { HeartPulse, Droplets, Bot, Star, CheckCircle, Shield, Sparkles, Zap, Sun, Dna, Microscope, BookOpen, Layers, Info } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  subtitle?: Record<'en' | 'id', string>;
  description: Record<'en' | 'id', string>;
  longDescription?: Record<'en' | 'id', string>;
  price: string;
  Icon?: LucideIcon;
  imageSrc: string;
  imageHint: string;
  category: 'Prejuvenation' | 'Rejuvenation' | 'Body' | 'Hair' | 'Facial';
  group: 'Altruva Glow' | 'Altruva Lift' | 'Body Contouring' | 'Hair Restoration' | 'Signature Facials';
  groupDescription: Record<'en' | 'id', string>;
  subgroup: string;

  whatIsIt?: {
    title: Record<'en' | 'id', string>;
    description: Record<'en' | 'id', string>;
  };
  mechanism?: {
    title: Record<'en' | 'id', string>;
    description: Record<'en' | 'id', string>;
  }[];
  benefits?: Record<'en' | 'id', string>[];
  indications?: Record<'en' | 'id', string>[];
  protocol?: {
    label: Record<'en' | 'id', string>;
    value: Record<'en' | 'id', string>;
  }[];
  howItDiffers?: Record<'en' | 'id', string>;
  whyLoveIt?: Record<'en' | 'id', string>[];
  quote?: {
    text: Record<'en' | 'id', string>;
    author: Record<'en' | 'id', string>;
  };
}

export const services: Service[] = [
  // --- Signature Facials ---
  {
    id: 'altruva-signature-facial',
    title: 'Altruva Signature Facial (Pore Clean Facial)',
    description: {
      en: 'A deep cleansing facial to purify pores and refresh the skin.',
      id: 'Facial pembersihan mendalam untuk membersihkan pori-pori dan menyegarkan kulit.'
    },
    price: 'Price on consultation',
    category: 'Facial',
    Icon: Sparkles,
    imageSrc: '/images/services/porecleanfacial.jpg',
    imageHint: 'deep pore cleansing',
    group: 'Signature Facials',
    groupDescription: {
      en: 'Customized facials to address your unique skin needs.',
      id: 'Facial yang disesuaikan untuk memenuhi kebutuhan kulit unik Anda.'
    },
    subgroup: 'Core Facials',
    subtitle: {
      en: 'Pore Purity. Cellular Rejuvenation. Personalized Glow.',
      id: 'Kemurnian Pori. Peremajaan Seluler. Cahaya yang Dipersonalisasi.'
    },
    longDescription: {
      en: 'At Altruva, our Signature Facial isn’t just a routine — it’s a custom-engineered skin therapy, crafted for your unique skin biology and life rhythms. Tailored by our in-house skin therapists and supported by clinical-grade protocols, this treatment synergizes deep pore purification, targeted light therapy (PDT), and dermal restoration into one comprehensive facial ritual.',
      id: 'Di Altruva, Signature Facial kami bukan hanya rutinitas — ini adalah terapi kulit yang dirancang khusus untuk biologi kulit dan ritme hidup unik Anda. Disesuaikan oleh terapis kulit internal kami dan didukung oleh protokol tingkat klinis, perawatan ini mensinergikan pemurnian pori-pori mendalam, terapi cahaya yang ditargetkan (PDT), dan restorasi dermal menjadi satu ritual wajah yang komprehensif.'
    },
    quote: {
      text: {
        en: 'True clarity isn’t achieved by stripping skin — it’s by teaching it to function optimally. This facial isn’t just cleansing; it’s re-education.',
        id: 'Kejernihan sejati tidak dicapai dengan mengelupasi kulit — melainkan dengan mengajarkannya untuk berfungsi secara optimal. Facial ini bukan hanya membersihkan; ini adalah pendidikan ulang.'
      },
      author: {
        en: 'dr. Olivia Aldisa, Founder of Altruva & Expert in Skin Health Optimization',
        id: 'dr. Olivia Aldisa, Pendiri Altruva & Ahli Optimasi Kesehatan Kulit'
      }
    },
    whatIsIt: {
      title: {
        en: 'What Makes It Signature?',
        id: 'Apa yang Membuatnya Signature?'
      },
      description: {
        en: `<ul class="list-disc pl-5 space-y-2" style="padding-left: 40px;">
        <li><strong class="text-primary">Fully Personalized Protocol:</strong> Whether you're battling congestion, sensitivity, dullness, or early signs of aging — your facial will be individually customized to treat your skin’s real-time needs.</li>
        <li><strong class="text-primary">PDT Light Technology (Photodynamic Therapy):</strong> Targeted LED wavelengths are incorporated based on your skin goals:
          <ul class="list-disc pl-5 mt-1" style="padding-left: 40px;">
            <li><strong class="text-primary">Blue Light (415 nm):</strong> For acne-prone skin, kills P. acnes bacteria and calms inflammation.</li>
            <li><strong class="text-primary">Red Light (630 nm):</strong> Stimulates collagen, improves circulation, and supports cellular renewal.</li>
            <li><strong class="text-primary">Infrared Light (830 nm):</strong> Penetrates deeply to reduce inflammation, increase elasticity, and accelerate healing — ideal for mature, reactive, or post-procedure skin.</li>
          </ul>
        </li>
        <li><strong class="text-primary">Signature Extraction Method:</strong> Gentle yet thorough extractions ensure deep cleansing without compromising skin barrier or comfort — especially ideal for clogged pores, blackheads, and t-zone buildup.</li>
        <li><strong class="text-primary">Skin Diagnostics & Recovery Mapping:</strong> Every session begins with a detailed consultation and is concluded with barrier repair serums or hydration shields based on your current dermal state.</li>
      </ul>`,
        id: `<ul class="list-disc pl-5 space-y-2" style="padding-left: 40px;">
        <li><strong class="text-primary">Protokol yang Sepenuhnya Dipersonalisasi:</strong> Baik Anda berjuang melawan penyumbatan, sensitivitas, kekusaman, atau tanda-tanda penuaan dini — facial Anda akan disesuaikan secara individual untuk merawat kebutuhan kulit Anda secara real-time.</li>
        <li><strong class="text-primary">Teknologi Cahaya PDT (Photodynamic Therapy):</strong> Panjang gelombang LED yang ditargetkan digabungkan berdasarkan tujuan kulit Anda:
          <ul class="list-disc pl-5 mt-1" style="padding-left: 40px;">
            <li><strong class="text-primary">Cahaya Biru (415 nm):</strong> Untuk kulit berjerawat, membunuh bakteri P. acnes dan menenangkan peradangan.</li>
            <li><strong class="text-primary">Cahaya Merah (630 nm):</strong> Merangsang kolagen, meningkatkan sirkulasi, dan mendukung pembaruan seluler.</li>
            <li><strong class="text-primary">Cahaya Inframerah (830 nm):</strong> Menembus secara mendalam untuk mengurangi peradangan, meningkatkan elastisitas, dan mempercepat penyembuhan — ideal untuk kulit matang, reaktif, atau pasca-prosedur.</li>
          </ul>
        </li>
        <li><strong class="text-primary">Metode Ekstraksi Signature:</strong> Ekstraksi yang lembut namun menyeluruh memastikan pembersihan mendalam tanpa mengorbankan penghalang kulit atau kenyamanan — terutama ideal untuk pori-pori tersumbat, komedo, dan penumpukan di zona-T.</li>
        <li><strong class="text-primary">Diagnostik Kulit & Pemetaan Pemulihan:</strong> Setiap sesi dimulai dengan konsultasi terperinci dan diakhiri dengan serum perbaikan penghalang atau pelindung hidrasi berdasarkan keadaan dermal Anda saat ini.</li>
      </ul>`
      }
    },
    benefits: [
      { en: 'Deeply purifies congested skin and minimizes pores', id: 'Membersihkan kulit tersumbat secara mendalam dan meminimalkan pori-pori' },
      { en: 'Brightens dull or uneven complexion', id: 'Mencerahkan kulit kusam atau tidak rata' },
      { en: 'Soothes inflamed or acne-prone skin with targeted LED', id: 'Menenangkan kulit yang meradang atau berjerawat dengan LED yang ditargetkan' },
      { en: 'Promotes dermal regeneration and collagen synthesis', id: 'Mendorong regenerasi dermal dan sintesis kolagen' },
      { en: 'Improves hydration levels and barrier resilience', id: 'Meningkatkan tingkat hidrasi dan ketahanan penghalang kulit' },
      { en: 'Leaves skin smoother, cleaner, and visibly more luminous', id: 'Membuat kulit lebih halus, bersih, dan tampak lebih bercahaya' },
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '60–75 minutes', id: '60–75 menit' } },
      { label: { en: 'Downtime', id: 'Waktu Henti' }, value: { en: 'None', id: 'Tidak ada' } },
      { label: { en: 'Ideal For', id: 'Ideal Untuk' }, value: { en: 'All skin types, especially oily/acneic, dull, fatigued, or aging skin', id: 'Semua jenis kulit, terutama kulit berminyak/berjerawat, kusam, lelah, atau menua' } },
      { label: { en: 'Frequency', id: 'Frekuensi' }, value: { en: 'Every 2–4 weeks for optimal skin health', id: 'Setiap 2–4 minggu untuk kesehatan kulit yang optimal' } },
      { label: { en: 'Add-ons Available', id: 'Tambahan Tersedia' }, value: { en: 'Enzyme peeling, Oxygeneo infusion, Glass Skin serum therapy', id: 'Pengelupasan enzim, infus Oxygeneo, terapi serum Glass Skin' } }
    ],
    whyLoveIt: [
      { en: 'Because no skin is generic.', id: 'Karena tidak ada kulit yang generik.' },
      { en: 'Altruva’s facial protocols are built on a hybrid model of spa-grade indulgence and medical-grade insight, ensuring your glow isn’t superficial — it’s cellular.', id: 'Protokol facial Altruva dibangun di atas model hibrida dari kemewahan tingkat spa dan wawasan tingkat medis, memastikan cahaya Anda tidak dangkal — melainkan seluler.' },
    ],
  },
  {
    id: 'altruva-hydraglow-facial',
    title: 'Altruva HydraGlow Facial',
    description: {
      en: 'Intense hydration for a luminous, dewy complexion.',
      id: 'Hidrasi intens untuk kulit bercahaya dan lembab.'
    },
    price: 'Price on consultation',
    category: 'Facial',
    Icon: Droplets,
    imageSrc: '/images/services/hydraglowfacial.jpg',
    imageHint: 'hydrated glowing skin',
    group: 'Signature Facials',
    groupDescription: {
      en: 'Customized facials to address your unique skin needs.',
      id: 'Facial yang disesuaikan untuk memenuhi kebutuhan kulit unik Anda.'
    },
    subgroup: 'Core Facials',
    subtitle: {
      en: 'Exfoliate. Infuse. Illuminate. The Gold Standard of Hydrodermabrasion.',
      id: 'Eksfoliasi. Infus. Terangi. Standar Emas Hidrodermabrasi.'
    },
    longDescription: {
      en: 'For skin that craves clarity, hydration, and luminosity in one seamless protocol, Altruva HydraGlow Facial delivers results beyond the surface. This is Altruva’s elevated version of the Dermalinfusion, combining diamond-tip exfoliation, vacuum-assisted extraction, and targeted serum infusion — all in one high-performance session tailored to your skin’s real-time needs. Powered by vortex technology and curated infusions, this facial isn’t just about glow — it’s about deep nourishment, barrier support, and clinical rejuvenation without downtime.',
      id: 'Untuk kulit yang mendambakan kejernihan, hidrasi, dan luminositas dalam satu protokol yang mulus, Altruva HydraGlow Facial memberikan hasil di luar permukaan. Ini adalah versi Dermalinfusion yang ditingkatkan dari Altruva, menggabungkan eksfoliasi ujung berlian, ekstraksi dengan bantuan vakum, dan infus serum yang ditargetkan — semuanya dalam satu sesi berkinerja tinggi yang disesuaikan dengan kebutuhan real-time kulit Anda. Didukung oleh teknologi vortex dan infus yang dikurasi, facial ini bukan hanya tentang kilau — ini tentang nutrisi mendalam, dukungan penghalang, dan peremajaan klinis tanpa waktu henti.'
    },
    quote: {
      text: {
        en: 'Hydration is not a trend — it’s the foundation of skin longevity. This treatment makes your skin feel alive again.',
        id: 'Hidrasi bukanlah tren — ini adalah fondasi umur panjang kulit. Perawatan ini membuat kulit Anda terasa hidup kembali.'
      },
      author: {
        en: 'dr. Olivia Aldisa, Founder of Altruva & Regenerative Skin Strategist',
        id: 'dr. Olivia Aldisa, Pendiri Altruva & Ahli Strategi Kulit Regeneratif'
      }
    },
    whatIsIt: {
      title: {
        en: 'How HydraGlow Works: 3-in-1 Dermal Technology',
        id: 'Cara Kerja HydraGlow: Teknologi Dermal 3-in-1'
      },
      description: {
        en: `<ol class="list-decimal pl-5 space-y-2">
        <li><strong class="text-primary">Exfoliate:</strong> A medical-grade diamond or vortex tip gently removes dull, dead cells from the skin’s surface — revealing smoother, more radiant skin underneath.</li>
        <li><strong class="text-primary">Extract:</strong> Simultaneous suction clears clogged pores, blackheads, and surface impurities — leaving skin feeling clean, light, and less congested.</li>
        <li><strong class="text-primary">Infuse:</strong> While exfoliating and extracting, the device also infuses targeted serums — chosen by your therapist — to address hydration, pigmentation, acne, or dullness. These actives penetrate deeply for immediate and visible impact.</li>
      </ol>
      <h4 class="font-semibold text-primary mt-4">Custom-Infused Serums May Include:</h4>
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong class="text-primary">Hyaluronic Acid:</strong> Deep hydration + plumping</li>
        <li><strong class="text-primary">Salicylic Acid:</strong> Acne, oil control, and decongestion</li>
        <li><strong class="text-primary">Vitamin C:</strong> Brightening and antioxidant protection</li>
        <li><strong class="text-primary">Niacinamide:</strong> Strengthens barrier and evens tone</li>
      </ul>`,
        id: `<ol class="list-decimal pl-5 space-y-2">
        <li><strong class="text-primary">Eksfoliasi:</strong> Ujung berlian atau vortex tingkat medis dengan lembut mengangkat sel-sel kulit mati yang kusam dari permukaan kulit — memperlihatkan kulit yang lebih halus dan bercahaya di bawahnya.</li>
        <li><strong class="text-primary">Ekstraksi:</strong> Pengisapan simultan membersihkan pori-pori tersumbat, komedo, dan kotoran di permukaan — membuat kulit terasa bersih, ringan, dan tidak terlalu tersumbat.</li>
        <li><strong class="text-primary">Infus:</strong> Saat melakukan eksfoliasi dan ekstraksi, perangkat juga menginfuskan serum yang ditargetkan — yang dipilih oleh terapis Anda — untuk mengatasi hidrasi, pigmentasi, jerawat, atau kekusaman. Bahan aktif ini menembus secara mendalam untuk dampak yang langsung dan terlihat.</li>
      </ol>
      <h4 class="font-semibold text-primary mt-4">Serum yang Diinfuskan Secara Khusus Mungkin Termasuk:</h4>
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong class="text-primary">Asam Hialuronat:</strong> Hidrasi mendalam + mengenyalkan</li>
        <li><strong class="text-primary">Asam Salisilat:</strong> Jerawat, kontrol minyak, dan dekongesti</li>
        <li><strong class="text-primary">Vitamin C:</strong> Mencerahkan dan perlindungan antioksidan</li>
        <li><strong class="text-primary">Niasinamida:</strong> Memperkuat penghalang dan meratakan warna</li>
      </ul>`
      }
    },
    benefits: [
      { en: 'Polishes away dead skin without irritation', id: 'Mengangkat kulit mati tanpa iritasi' },
      { en: 'Deeply hydrates and restores skin suppleness', id: 'Menghidrasi secara mendalam dan mengembalikan kekenyalan kulit' },
      { en: 'Brightens and evens skin tone', id: 'Mencerahkan dan meratakan warna kulit' },
      { en: 'Decongests pores and minimizes blackheads', id: 'Membersihkan pori-pori dan meminimalkan komedo' },
      { en: 'Diminishes the appearance of fine lines and early wrinkles', id: 'Mengurangi tampilan garis-garis halus dan kerutan dini' },
      { en: 'Improves the effectiveness of skincare absorption', id: 'Meningkatkan efektivitas penyerapan produk perawatan kulit' },
      { en: 'Delivers an instant “camera-ready” glow', id: 'Memberikan kilau instan yang siap kamera' },
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '45–60 minutes', id: '45–60 menit' } },
      { label: { en: 'Downtime', id: 'Waktu Henti' }, value: { en: 'None', id: 'Tidak ada' } },
      { label: { en: 'Results', id: 'Hasil' }, value: { en: 'Visible immediately; optimal over 24–48 hrs', id: 'Terlihat langsung; optimal setelah 24–48 jam' } },
      { label: { en: 'Frequency', id: 'Frekuensi' }, value: { en: 'Every 4–6 weeks for skin maintenance', id: 'Setiap 4–6 minggu untuk pemeliharaan kulit' } },
      { label: { en: 'Ideal For', id: 'Ideal Untuk' }, value: { en: 'Dehydrated, acne-prone, dull, sensitive, or aging skin types', id: 'Jenis kulit dehidrasi, berjerawat, kusam, sensitif, atau menua' } },
    ],
    whyLoveIt: [
      { en: 'Custom PDT Integration: Add Blue, Red, or Infrared LED for acne control or regenerative glow.', id: 'Integrasi PDT Kustom: Tambahkan LED Biru, Merah, atau Inframerah untuk kontrol jerawat atau kilau regeneratif.' },
      { en: 'Barrier-Safe Approach: No harsh acids. Skin remains calm, hydrated, and non-reactive.', id: 'Pendekatan Aman untuk Penghalang Kulit: Tidak ada asam keras. Kulit tetap tenang, terhidrasi, dan tidak reaktif.' },
      { en: 'Clinically Formulated Protocols: Designed by dr. Olivia Aldisa for enhanced cellular turnover and skin integrity.', id: 'Protokol yang Diformulasikan Secara Klinis: Dirancang oleh dr. Olivia Aldisa untuk meningkatkan pergantian sel dan integritas kulit.' },
      { en: 'Makeup-Optional Finish: Walk out with hydrated, luminous skin ready for the day or night.', id: 'Hasil Akhir Tanpa Riasan: Keluar dengan kulit terhidrasi dan bercahaya, siap untuk siang atau malam hari.' },
    ],
  },
  {
    id: 'glacier-skin',
    title: 'Altruva Glacier Skin',
    subtitle: {
      en: 'Smart Solution for Poreless, Balanced, Radiant Skin',
      id: 'Solusi Cerdas untuk Kulit Tanpa Pori, Seimbang, dan Bercahaya'
    },
    description: {
      en: 'Pore refining & oil control for a smooth, matte finish.',
      id: 'Menghaluskan pori-pori & mengontrol minyak untuk hasil akhir yang halus dan matte.'
    },
    longDescription: {
      en: 'If you struggle with oily skin, enlarged pores, dullness, or occasional breakouts, you don’t need to layer multiple treatments. Altruva Glacier Skin is a signature solution that addresses multiple skin concerns in one intelligent protocol—restoring clarity, hydration, and a refined complexion from the inside out.',
      id: 'Jika Anda berjuang dengan kulit berminyak, pori-pori membesar, kusam, atau jerawat sesekali, Anda tidak perlu melapisi beberapa perawatan. Altruva Glacier Skin adalah solusi khas yang mengatasi berbagai masalah kulit dalam satu protokol cerdas—mengembalikan kejernihan, hidrasi, dan kulit yang halus dari dalam ke luar.'
    },
    price: '4,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Droplets,
    imageSrc: '/images/services/glacierskin.png',
    imageHint: 'refined skin texture',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
      id: 'Strategi penuaan terbaik adalah pencegahan. Altruva Glow memperkuat ketahanan kulit, hidrasi, dan mekanisme pertahanan terhadap penuaan dini, menjaga kulit Anda tetap bercahaya dan siap menghadapi masa depan.'
    },
    subgroup: 'Skingeneering booster',
    whatIsIt: {
      title: {
        en: 'What Is Altruva Glacier Skin?',
        id: 'Apa Itu Altruva Glacier Skin?'
      },
      description: {
        en: `Glacier Skin is a precision-designed treatment that combines microinjections of hyaluronic acid, microdosed botulinum toxin type A, active peptides, amino acids, and essential vitamins to rebalance the skin, minimize pore appearance, and deliver that coveted "jelly-fresh," poreless glow.`,
        id: 'Glacier Skin adalah perawatan yang dirancang dengan presisi yang menggabungkan suntikan mikro asam hialuronat, toksin botulinum tipe A dosis mikro, peptida aktif, asam amino, dan vitamin esensial untuk menyeimbangkan kembali kulit, meminimalkan tampilan pori-pori, dan memberikan kilau "segar seperti jeli" yang didambakan.'
      },
    },
    indications: [
      { en: 'Oily and acne-prone skin', id: 'Kulit berminyak dan rentan berjerawat' },
      { en: 'Dehydrated yet shiny skin', id: 'Kulit dehidrasi namun berkilau' },
      { en: 'Rough texture and visible pores', id: 'Tekstur kasar dan pori-pori terlihat' },
      { en: 'Dullness or loss of skin vitality', id: 'Kusam atau kehilangan vitalitas kulit' },
    ],
    mechanism: [
      {
        title: { en: 'Hyaluronic Acid (HA)', id: 'Asam Hialuronat (HA)' },
        description: {
          en: 'Deep hydration that plumps and smooths the skin from within.',
          id: 'Hidrasi mendalam yang membuat kulit kenyal dan halus dari dalam.'
        },
      },
      {
        title: { en: 'Botulinum Toxin Type A (Microdose)', id: 'Toksin Botulinum Tipe A (Dosis Mikro)' },
        description: {
          en: 'Regulates oil and sweat production, reduces pore size, and relaxes fine muscle tension to refine skin texture.',
          id: 'Mengatur produksi minyak dan keringat, mengurangi ukuran pori-pori, dan merilekskan ketegangan otot halus untuk menghaluskan tekstur kulit.'
        },
      },
      {
        title: { en: 'Peptides & Amino Acids', id: 'Peptida & Asam Amino' },
        description: {
          en: 'Support skin regeneration, improve structural integrity, and promote microbiome health.',
          id: 'Mendukung regenerasi kulit, meningkatkan integritas struktural, dan meningkatkan kesehatan mikrobioma.'
        },
      },
      {
        title: { en: 'Vitamins', id: 'Vitamin' },
        description: {
          en: 'Antioxidant support and skin nourishment for enhanced clarity and resilience.',
          id: 'Dukungan antioksidan dan nutrisi kulit untuk kejernihan dan ketahanan yang lebih baik.'
        },
      },
    ],
    benefits: [
      { en: 'Multi-targeted skin improvement with minimal downtime', id: 'Perbaikan kulit multi-target dengan waktu henti minimal' },
      { en: 'Controls excess oil and reduces visible pores', id: 'Mengontrol minyak berlebih dan mengurangi pori-pori yang terlihat' },
      { en: 'Boosts hydration without heaviness', id: 'Meningkatkan hidrasi tanpa rasa berat' },
      { en: 'Supports barrier repair and smooths texture', id: 'Mendukung perbaikan penghalang dan menghaluskan tekstur' },
      { en: 'Improves skin clarity and natural glow', id: 'Meningkatkan kejernihan kulit dan kilau alami' },
      { en: 'Fully customizable to your skin’s needs and biology', id: 'Dapat disesuaikan sepenuhnya dengan kebutuhan dan biologi kulit Anda' },
    ],
    protocol: [
      {
        label: { en: 'Administration', id: 'Administrasi' },
        value: {
          en: 'Series of ultra-fine microinjections, similar to traditional skinboosters.',
          id: 'Serangkaian suntikan mikro ultra-halus, mirip dengan skinbooster tradisional.'
        },
      },
      {
        label: { en: 'How it feels', id: 'Rasanya' },
        value: {
          en: 'This method allows the actives to be precisely deposited where they are most effective, while also stimulating micro-regeneration for smoother, more even skin.',
          id: 'Metode ini memungkinkan bahan aktif untuk disimpan secara presisi di tempat yang paling efektif, sekaligus merangsang regenerasi mikro untuk kulit yang lebih halus dan lebih rata.'
        }
      }
    ],
    whyLoveIt: [
      { en: 'It is safe. Altruva Glacier Skin uses clinically proven, dermatologist-curated ingredients and is administered under expert medical supervision. Each session is tailored for your unique skin profile and goals.', id: 'Ini aman. Altruva Glacier Skin menggunakan bahan-bahan yang terbukti secara klinis, dikurasi oleh dokter kulit, dan diberikan di bawah pengawasan medis ahli. Setiap sesi disesuaikan dengan profil dan tujuan kulit unik Anda.' },
      { en: 'If you\'re looking to achieve clear, dewy, jelly-like skin that feels balanced and truly breathable, Altruva Glacier Skin is a powerful addition to your skin optimization journey.', id: 'Jika Anda ingin mendapatkan kulit yang jernih, lembap, seperti jeli yang terasa seimbang dan benar-benar bernapas, Altruva Glacier Skin adalah tambahan yang kuat untuk perjalanan optimasi kulit Anda.' },
    ],
  },
  {
    id: 'dna-repair',
    title: 'Altruva DNA Repair',
    description: {
      en: 'Environmental damage repair & skin barrier fortification.',
      id: 'Perbaikan kerusakan lingkungan & fortifikasi penghalang kulit.'
    },
    longDescription: {
      en: `Before aging becomes visible, the skin quietly begins to lose its ability to renew, repair, and defend. Altruva DNA Repair is our signature prejuvenation treatment designed to reinforce your skin’s self-repair mechanisms—before signs of aging emerge. Harnessing high-purity polynucleotides (PN) extracted from ethically sourced salmon DNA, this biocompatible treatment enhances cellular function, hydrates deeply, and sets the foundation for long-term skin health. Infused with non-crosslinked hyaluronic acid, growth factors, and rejuvenating micronutrients, it’s ideal for those in their 20s to early 30s seeking a head start on graceful aging.`,
      id: 'Sebelum penuaan terlihat, kulit secara diam-diam mulai kehilangan kemampuannya untuk memperbarui, memperbaiki, dan bertahan. Altruva DNA Repair adalah perawatan prejuvenation khas kami yang dirancang untuk memperkuat mekanisme perbaikan diri kulit Anda—sebelum tanda-tanda penuaan muncul. Memanfaatkan polinukleotida (PN) kemurnian tinggi yang diekstraksi dari DNA salmon yang bersumber secara etis, perawatan biokompatibel ini meningkatkan fungsi seluler, menghidrasi secara mendalam, dan meletakkan dasar untuk kesehatan kulit jangka panjang. Diinfuskan dengan asam hialuronat yang tidak saling silang, faktor pertumbuhan, dan mikronutrien peremajaan, ini ideal bagi mereka yang berusia 20-an hingga awal 30-an yang mencari awal yang baik dalam penuaan yang anggun.'
    },
    subtitle: {
      en: "Cellular Prejuvenation for Youthful Radiance",
      id: "Prejuvenation Seluler untuk Cahaya Muda"
    },
    price: '5,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Shield,
    imageSrc: '/images/services/dnarepair.jpg',
    imageHint: 'skin barrier protection',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
      id: 'Strategi penuaan terbaik adalah pencegahan. Altruva Glow memperkuat ketahanan kulit, hidrasi, dan mekanisme pertahanan terhadap penuaan dini, menjaga kulit Anda tetap bercahaya dan siap menghadapi masa depan.'
    },
    subgroup: 'Skingeneering booster',
    whatIsIt: {
      title: {
        en: 'How It Works: Smart Regeneration, Seamlessly Delivered',
        id: 'Cara Kerjanya: Regenerasi Cerdas, Disampaikan dengan Mulus'
      },
      description: {
        en: `
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Stimulates Cellular Renewal:</strong> PNs act at the DNA level to repair damaged skin cells and reprogram fibroblasts, boosting collagen and elastin production.</li>
            <li><strong>Deep Hydration & Elasticity Boost:</strong> Non-crosslinked hyaluronic acid penetrates the skin layers, providing intense hydration and a subtle plumping effect that improves suppleness and texture.</li>
            <li><strong>Strengthens Skin Barrier:</strong> The formulation reinforces the skin’s resilience against environmental aggressors and free radicals, minimizing the risk of premature aging.</li>
            <li><strong>Brightens & Balances:</strong> Growth factors and vitamins reduce dullness, uneven tone, and pigmentation irregularities, restoring the skin’s natural glow.</li>
            <li><strong>Reduces Sensitivity & Redness:</strong> Anti-inflammatory properties calm irritation, making it suitable for acne-prone or reactive skin types.</li>
        </ul>`,
        id: `
        <ul class="list-disc pl-5 space-y-2">
            <li><strong>Merangsang Pembaruan Seluler:</strong> PN bekerja pada tingkat DNA untuk memperbaiki sel-sel kulit yang rusak dan memprogram ulang fibroblas, meningkatkan produksi kolagen dan elastin.</li>
            <li><strong>Hidrasi Dalam & Peningkatan Elastisitas:</strong> Asam hialuronat yang tidak saling silang menembus lapisan kulit, memberikan hidrasi intens dan efek pengisian halus yang meningkatkan kekenyalan dan tekstur.</li>
            <li><strong>Memperkuat Penghalang Kulit:</strong> Formulasi ini memperkuat ketahanan kulit terhadap agresor lingkungan dan radikal bebas, meminimalkan risiko penuaan dini.</li>
            <li><strong>Mencerahkan & Menyeimbangkan:</strong> Faktor pertumbuhan dan vitamin mengurangi kekusaman, warna tidak rata, dan ketidakteraturan pigmentasi, mengembalikan kilau alami kulit.</li>
            <li><strong>Mengurangi Sensitivitas & Kemerahan:</strong> Sifat anti-inflamasi menenangkan iritasi, membuatnya cocok untuk jenis kulit yang rentan berjerawat atau reaktif.</li>
        </ul>`
      },
    },
    benefits: [
      { en: 'Boosts skin’s regenerative capacity before visible aging', id: 'Meningkatkan kapasitas regeneratif kulit sebelum penuaan terlihat' },
      { en: 'Refines pores and smoothes early textural irregularities', id: 'Menghaluskan pori-pori dan menghaluskan ketidakteraturan tekstur awal' },
      { en: 'Improves tone, clarity, and hydration in one session', id: 'Meningkatkan warna, kejernihan, dan hidrasi dalam satu sesi' },
      { en: 'Prevents future collagen breakdown and pigmentation', id: 'Mencegah kerusakan kolagen dan pigmentasi di masa depan' },
      { en: 'Enhances skin strength, glow, and elasticity', id: 'Meningkatkan kekuatan, kilau, dan elastisitas kulit' },
      { en: 'No downtime — just fresh, radiant, jelly-like skin', id: 'Tidak ada waktu henti — hanya kulit segar, bercahaya, seperti jeli' }
    ],
    indications: [
      { en: 'Preserve collagen and dermal density', id: 'Menjaga kolagen dan kepadatan dermal' },
      { en: 'Prevent early signs of skin fatigue, pigmentation, or dullness', id: 'Mencegah tanda-tanda awal kelelahan kulit, pigmentasi, atau kekusaman' },
      { en: 'Improve recovery after stress, travel, or environmental exposure', id: 'Meningkatkan pemulihan setelah stres, perjalanan, atau paparan lingkungan' },
      { en: 'Prepare the skin for future regenerative treatments', id: 'Mempersiapkan kulit untuk perawatan regeneratif di masa depan' }
    ],
    whyLoveIt: [
      { en: 'Altruva DNA Repair is often recommended as part of our Altruva Glow Prejuvenation Ritual, where regenerative boosters, skin peels, and gentle energy-based therapies are stacked for amplified results — personalized by Dr. Aldisa and her medical team.', id: 'Altruva DNA Repair sering direkomendasikan sebagai bagian dari Ritual Prejuvenation Altruva Glow kami, di mana booster regeneratif, pengelupasan kulit, dan terapi berbasis energi ringan ditumpuk untuk hasil yang diperkuat — dipersonalisasi oleh Dr. Aldisa dan tim medisnya.' }
    ]
  },
  {
    id: 'purifying-booster',
    title: 'Altruva Purifying Booster',
    description: {
      en: 'Therapy for anti-inflammatory and reduced acne marks.',
      id: 'Terapi anti-inflamasi dan mengurangi bekas jerawat.'
    },
    price: '2,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Sparkles,
    imageSrc: '/images/services/purifyingbooster.jpg',
    imageHint: 'clear skin',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
      id: 'Strategi penuaan terbaik adalah pencegahan. Altruva Glow memperkuat ketahanan kulit, hidrasi, dan mekanisme pertahanan terhadap penuaan dini, menjaga kulit Anda tetap bercahaya dan siap menghadapi masa depan.'
    },
    subgroup: 'Skingeneering booster',
    subtitle: {
      en: 'Smart Sebum Control • Calm Inflammation • Clear Breakouts',
      id: 'Kontrol Sebum Cerdas • Tenangkan Peradangan • Bersihkan Jerawat'
    },
    longDescription: {
      en: `At Altruva, we understand that acne-prone, oily, and inflamed skin requires more than just surface-level solutions. That’s why we created the Altruva Purifying Booster — a science-forward, regeneratively designed treatment to balance, purify, and restore. Formulated with a curated blend of high-performance active ingredients, this booster addresses the root causes of blemishes and congestion while strengthening the skin’s natural defense.`,
      id: 'Di Altruva, kami memahami bahwa kulit yang rentan berjerawat, berminyak, dan meradang membutuhkan lebih dari sekadar solusi tingkat permukaan. Itulah mengapa kami menciptakan Altruva Purifying Booster — perawatan yang dirancang secara regeneratif dan berwawasan sains untuk menyeimbangkan, memurnikan, dan memulihkan. Diformulasikan dengan campuran bahan aktif berkinerja tinggi yang dikurasi, booster ini mengatasi akar penyebab noda dan penyumbatan sekaligus memperkuat pertahanan alami kulit.'
    },
    whatIsIt: {
      title: {
        en: 'Inside the Altruva Purifying Booster: The Synergistic Complex',
        id: 'Di Dalam Altruva Purifying Booster: Kompleks Sinergis'
      },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong>Hyaluronic Acid:</strong> Provides deep hydration without clogging pores, leaving skin smooth, supple, and balanced.</li>
        <li><strong>Acetyl Glucosamine:</strong> A bioavailable sugar molecule that stimulates your skin to naturally produce more hyaluronic acid, helping reduce texture and redness.</li>
        <li><strong>Zinc PCA:</strong> Regulates sebum production, minimizes pores, and helps prevent future breakouts.</li>
        <li><strong>Niacinamide (Vitamin B3):</strong> Brightens uneven tone, strengthens skin barrier function, and calms inflammatory flare-ups.</li>
        <li><strong>Betaine Salicylate:</strong> A gentle BHA exfoliant that decongests pores and accelerates skin cell turnover without irritation.</li>
        <li><strong>Panthenol (Vitamin B5):</strong> Soothes, heals, and calms stressed or sensitized skin.</li>
      </ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong>Asam Hialuronat:</strong> Memberikan hidrasi mendalam tanpa menyumbat pori-pori, membuat kulit halus, kenyal, dan seimbang.</li>
        <li><strong>Asetil Glukosamin:</strong> Molekul gula bioavailable yang merangsang kulit Anda untuk secara alami menghasilkan lebih banyak asam hialuronat, membantu mengurangi tekstur dan kemerahan.</li>
        <li><strong>Zinc PCA:</strong> Mengatur produksi sebum, meminimalkan pori-pori, dan membantu mencegah jerawat di masa depan.</li>
        <li><strong>Niasinamida (Vitamin B3):</strong> Mencerahkan warna kulit yang tidak rata, memperkuat fungsi penghalang kulit, dan menenangkan peradangan.</li>
        <li><strong>Betain Salisilat:</strong> Eksfolian BHA lembut yang membersihkan pori-pori dan mempercepat pergantian sel kulit tanpa iritasi.</li>
        <li><strong>Panthenol (Vitamin B5):</strong> Menenangkan, menyembuhkan, dan menenangkan kulit yang stres atau peka.</li>
      </ul>`
      }
    },
    mechanism: [
      {
        title: { en: 'Hydration Meets Clarity', id: 'Hidrasi Bertemu Kejernihan' },
        description: {
          en: 'Rather than drying out the skin, Altruva Purifying Booster restores moisture balance while purging impurities. Hyaluronic acid and acetyl glucosamine ensure skin remains hydrated, preventing rebound oiliness.',
          id: 'Alih-alih mengeringkan kulit, Altruva Purifying Booster mengembalikan keseimbangan kelembapan sambil membersihkan kotoran. Asam hialuronat dan asetil glukosamin memastikan kulit tetap terhidrasi, mencegah produksi minyak berlebih.'
        }
      },
      {
        title: { en: 'Sebum Regulation Without Compromise', id: 'Regulasi Sebum Tanpa Kompromi' },
        description: {
          en: 'Zinc PCA and niacinamide collaborate to reduce excess oil, tighten pores, and brighten dull, congested skin. The skin appears clearer, more even, and less reactive over time.',
          id: 'Zinc PCA dan niacinamide bekerja sama untuk mengurangi minyak berlebih, mengencangkan pori-pori, dan mencerahkan kulit kusam dan tersumbat. Kulit tampak lebih jernih, lebih rata, dan tidak terlalu reaktif seiring waktu.'
        }
      },
      {
        title: { en: 'Calm & Heal', id: 'Tenang & Sembuh' },
        description: {
          en: 'Whether your acne is hormonal, stress-related, or chronic, the anti-inflammatory actions of panthenol and niacinamide help minimize redness and accelerate healing.',
          id: 'Baik jerawat Anda hormonal, terkait stres, atau kronis, tindakan anti-inflamasi panthenol dan niacinamide membantu meminimalkan kemerahan dan mempercepat penyembuhan.'
        }
      }
    ],
    benefits: [
      { en: 'Lightweight, non-comedogenic, and fast-absorbing.', id: 'Ringan, non-komedogenik, dan cepat menyerap.' },
      {
        en: 'Designed to complement laser treatments, microneedling, or standalone as part of your Altruva Glow ritual.',
        id: 'Dirancang untuk melengkapi perawatan laser, microneedling, atau sebagai bagian dari ritual Altruva Glow Anda.'
      }
    ],
    indications: [
      { en: 'Oily and acne-prone skin', id: 'Kulit berminyak dan rentan berjerawat' },
      { en: 'Enlarged pores and congestion', id: 'Pori-pori membesar dan tersumbat' },
      { en: 'Sensitive and inflamed skin types', id: 'Jenis kulit sensitif dan meradang' },
      { en: 'Pre/Post-procedure calming', id: 'Menenangkan sebelum/sesudah prosedur' },
      { en: 'Adults with adult-onset acne or recurring hormonal breakouts', id: 'Orang dewasa dengan jerawat onset dewasa atau jerawat hormonal berulang' }
    ],
    whyLoveIt: [
      { en: 'Purifying Booster isn’t just about breakouts. It’s a regenerative intervention to rebalance your skin’s ecosystem, improve its resilience, and enhance long-term skin health — without harsh stripping or downtime.', id: 'Purifying Booster bukan hanya tentang jerawat. Ini adalah intervensi regeneratif untuk menyeimbangkan kembali ekosistem kulit Anda, meningkatkan ketahanannya, dan meningkatkan kesehatan kulit jangka panjang — tanpa pengelupasan keras atau waktu henti.' }
    ]
  },
  {
    id: 'dark-spot-booster',
    title: 'Altruva Darkspots-Boosters',
    description: { en: 'Targeted hyperpigmentation correction.', id: 'Koreksi hiperpigmentasi yang ditargetkan.' },
    price: '3,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Sun,
    imageSrc: '/images/services/melabooster.jpg',
    imageHint: 'even skin tone',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
      id: 'Strategi penuaan terbaik adalah pencegahan. Altruva Glow memperkuat ketahanan kulit, hidrasi, dan mekanisme pertahanan terhadap penuaan dini, menjaga kulit Anda tetap bercahaya dan siap menghadapi masa depan.'
    },
    subgroup: 'Skingeneering booster',
    subtitle: {
      en: 'Brightening Science for Stubborn Pigmentation',
      id: 'Ilmu Pencerahan untuk Pigmentasi yang Membandel'
    },
    longDescription: {
      en: `Altruva Darkspot-Boosters is an advanced depigmenting protocol specifically formulated to treat melasma and persistent hyperpigmentation in Asian skin. By synergistically combining the brightening power of Vitamin C, Arbutin, Succinic Acid, and Mulberry Extracts, this multi-targeted treatment works to suppress melanin production, accelerate cellular repair, and calm low-grade inflammation that often exacerbates pigmentation.
    <br/><br/>
    <strong>Why Is Melasma Harder to Treat in Asian Skin?</strong><br/>
    Melasma is a chronic pigmentary disorder characterized by the appearance of brown to gray-brown patches, particularly on the face. In Asian skin, this condition poses greater challenges due to higher melanin production, an exaggerated post-UV inflammatory response, and increased sensitivity to certain active ingredients. Melasma affects both physical appearance and emotional well-being, often causing reduced self-confidence and may be accompanied by symptoms such as itchiness, dryness, or a mild burning sensation.`,
      id: `Altruva Darkspot-Boosters adalah protokol depigmentasi canggih yang diformulasikan khusus untuk mengobati melasma dan hiperpigmentasi persisten pada kulit Asia. Dengan menggabungkan secara sinergis kekuatan pencerahan dari Vitamin C, Arbutin, Asam Suksinat, dan Ekstrak Mulberry, perawatan multi-target ini bekerja untuk menekan produksi melanin, mempercepat perbaikan seluler, dan menenangkan peradangan tingkat rendah yang sering memperburuk pigmentasi.
    <br/><br/>
    <strong>Mengapa Melasma Lebih Sulit Diobati pada Kulit Asia?</strong><br/>
    Melasma adalah gangguan pigmentasi kronis yang ditandai dengan munculnya bercak coklat hingga coklat keabu-abuan, terutama di wajah. Pada kulit Asia, kondisi ini menimbulkan tantangan yang lebih besar karena produksi melanin yang lebih tinggi, respons inflamasi pasca-UV yang berlebihan, dan peningkatan sensitivitas terhadap bahan aktif tertentu. Melasma memengaruhi penampilan fisik dan kesejahteraan emosional, seringkali menyebabkan penurunan kepercayaan diri dan dapat disertai dengan gejala seperti gatal, kering, atau sensasi terbakar ringan.`
    },
    whatIsIt: {
      title: { en: 'Key Active Ingredients', id: 'Bahan Aktif Utama' },
      description: {
        en: `These four components are designed to work synergistically—not only reducing visible pigmentation but also restoring healthy skin structure from within.<br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Vitamin C:</strong> A powerful antioxidant that inhibits tyrosinase activity and promotes collagen synthesis.</li><li><strong>Arbutin:</strong> A gentle melanin-suppressing brightener with minimal irritation risk.</li><li><strong>Succinic Acid:</strong> A natural derivative with anti-inflammatory and antioxidant benefits.</li><li><strong>Mulberry Extract:</strong> A botanical ingredient that brightens skin, soothes irritation, and protects DNA from damage.</li></ul>`,
        id: `Keempat komponen ini dirancang untuk bekerja secara sinergis—tidak hanya mengurangi pigmentasi yang terlihat tetapi juga memulihkan struktur kulit yang sehat dari dalam.<br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Vitamin C:</strong> Antioksidan kuat yang menghambat aktivitas tirosinase dan mendorong sintesis kolagen.</li><li><strong>Arbutin:</strong> Pencerah penekan melanin yang lembut dengan risiko iritasi minimal.</li><li><strong>Asam Suksinat:</strong> Turunan alami dengan manfaat anti-inflamasi dan antioksidan.</li><li><strong>Ekstrak Mulberry:</strong> Bahan botani yang mencerahkan kulit, menenangkan iritasi, dan melindungi DNA dari kerusakan.</li></ul>`
      }
    },
    mechanism: [
      {
        title: { en: 'Inhibits Tyrosinase', id: 'Menghambat Tirosinase' },
        description: { en: 'Blocks the key enzyme involved in melanin synthesis.', id: 'Memblokir enzim kunci yang terlibat dalam sintesis melanin.' }
      },
      {
        title: { en: 'Reduces Micro-inflammation', id: 'Mengurangi Mikro-inflamasi' },
        description: { en: 'Calms the low-grade inflammation that often triggers melasma flare-ups.', id: 'Menenangkan peradangan tingkat rendah yang sering memicu kambuhnya melasma.' }
      },
      {
        title: { en: 'Calms UV-Induced Irritation', id: 'Menenangkan Iritasi Akibat UV' },
        description: { en: 'Soothes sensitivity from sun exposure and harsh products.', id: 'Menenangkan sensitivitas dari paparan sinar matahari dan produk keras.' }
      },
      {
        title: { en: 'Accelerates Skin Regeneration', id: 'Mempercepat Regenerasi Kulit' },
        description: { en: 'Enables faster fading of dark spots by promoting cellular turnover.', id: 'Memungkinkan memudarnya bintik hitam lebih cepat dengan mempromosikan pergantian sel.' }
      },
      {
        title: { en: 'Safe for Sensitive Skin', id: 'Aman untuk Kulit Sensitif' },
        description: { en: 'Suitable for all Fitzpatrick skin types, especially types III–V.', id: 'Cocok untuk semua jenis kulit Fitzpatrick, terutama tipe III–V.' }
      }
    ],
    benefits: [
      { en: 'Safe for long-term use', id: 'Aman untuk penggunaan jangka panjang' },
      { en: 'Does not cause rebound hyperpigmentation', id: 'Tidak menyebabkan hiperpigmentasi kambuh' },
      { en: 'Soothes and strengthens the skin barrier', id: 'Menenangkan dan memperkuat penghalang kulit' },
      { en: 'Effective as a maintenance protocol post-laser or peeling', id: 'Efektif sebagai protokol pemeliharaan pasca-laser atau pengelupasan' },
      { en: 'Non-irritating and does not increase photosensitivity', id: 'Tidak menyebabkan iritasi dan tidak meningkatkan fotosensitivitas' }
    ],
    indications: [
      { en: 'Patients with epidermal or dermal pigmentation', id: 'Pasien dengan pigmentasi epidermal atau dermal' },
      { en: 'Individuals with post-inflammatory hyperpigmentation (PIH) from acne or injury', id: 'Individu dengan hiperpigmentasi pasca-inflamasi (PIH) dari jerawat atau cedera' },
      { en: 'Those seeking overall facial brightening with no downtime', id: 'Mereka yang mencari pencerahan wajah secara keseluruhan tanpa waktu henti' },
      { en: 'Patients intolerant to strong acids such as hydroquinone, retinoids, or oral tranexamic acid', id: 'Pasien yang tidak toleran terhadap asam kuat seperti hidrokuinon, retinoid, atau asam traneksamat oral' },
      { en: 'Breastfeeding mothers or individuals preferring non-invasive, non-hormonal therapies', id: 'Ibu menyusui atau individu yang lebih memilih terapi non-invasif dan non-hormonal' }
    ],
    protocol: [
      {
        label: { en: 'Ideal Combinations', id: 'Kombinasi Ideal' },
        value: { en: 'Can be used alone or with Microneedling, Brightening Infusions, or Energy-Based Devices (e.g., Exion).', id: 'Dapat digunakan sendiri atau dengan Microneedling, Infus Pencerah, atau Perangkat Berbasis Energi (misalnya, Exion).' }
      },
      {
        label: { en: 'Expected Outcomes', id: 'Hasil yang Diharapkan' },
        value: { en: 'Visible improvements may be seen as early as 2–4 weeks. For optimal results, consistent use for 8–12 weeks is recommended.', id: 'Perbaikan yang terlihat dapat dilihat sedini 2–4 minggu. Untuk hasil optimal, penggunaan konsisten selama 8–12 minggu dianjurkan.' }
      }
    ]
  },
  {
    id: 'bio-prf',
    title: 'Altruva Bio-PRF',
    description: { en: 'Platelet-rich fibrin therapy for deep tissue regeneration.', id: 'Terapi platelet-rich fibrin untuk regenerasi jaringan dalam.' },
    price: '2,500,000 IDR',
    category: 'Prejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'regenerative therapy',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
      id: 'Strategi penuaan terbaik adalah pencegahan. Altruva Glow memperkuat ketahanan kulit, hidrasi, dan mekanisme pertahanan terhadap penuaan dini, menjaga kulit Anda tetap bercahaya dan siap menghadapi masa depan.'
    },
    subgroup: 'Skingeneering booster',
    subtitle: { en: 'Next-Generation Regeneration from Within', id: 'Regenerasi Generasi Berikutnya dari Dalam' },
    longDescription: {
      en: `At Altruva, we embrace the future of regenerative medicine. Altruva Bio-PRF (Platelet-Rich Fibrin) is our most advanced autologous treatment, using your body’s own biology to stimulate repair, rejuvenation, and regeneration—naturally.<br/><br/>Unlike traditional PRP, which offers a quick release of growth factors, Bio-PRF is designed for sustained, long-acting regeneration through its intelligent fibrin matrix. This makes it a cornerstone of our regenerative contouring philosophy—supporting structural collagen repair, improved tissue quality, and healing from the inside out.`,
      id: `Di Altruva, kami merangkul masa depan kedokteran regeneratif. Altruva Bio-PRF (Platelet-Rich Fibrin) adalah perawatan autologus kami yang paling canggih, menggunakan biologi tubuh Anda sendiri untuk merangsang perbaikan, peremajaan, dan regenerasi—secara alami.<br/><br/>Tidak seperti PRP tradisional, yang menawarkan pelepasan faktor pertumbuhan yang cepat, Bio-PRF dirancang untuk regenerasi berkelanjutan dan kerja panjang melalui matriks fibrin cerdasnya. Ini menjadikannya landasan filosofi kontur regeneratif kami—mendukung perbaikan kolagen struktural, peningkatan kualitas jaringan, dan penyembuhan dari dalam ke luar.`
    },
    whatIsIt: {
      title: { en: 'What Is Bio-PRF?', id: 'Apa Itu Bio-PRF?' },
      description: {
        en: `Bio-PRF is an evolution of platelet therapy. It contains not only high concentrations of platelets, but also leukocytes (white blood cells) and a natural fibrin scaffold—all prepared without anticoagulants. This allows the formation of a soft gel-like matrix that:
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li>Traps regenerative growth factors</li>
        <li>Releases them slowly over 7–10 days</li>
        <li>Supports long-term tissue healing and collagen induction</li>
      </ul>
      <p class="mt-2">It is completely autologous, meaning it's 100% derived from your own blood—no additives, no foreign substances, and no risk of rejection.</p>`,
        id: `Bio-PRF adalah evolusi dari terapi platelet. Ini tidak hanya mengandung konsentrasi platelet yang tinggi, tetapi juga leukosit (sel darah putih) dan perancah fibrin alami—semua disiapkan tanpa antikoagulan. Ini memungkinkan pembentukan matriks seperti gel lunak yang:
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li>Menjebak faktor pertumbuhan regeneratif</li>
        <li>Melepaskannya secara perlahan selama 7–10 hari</li>
        <li>Mendukung penyembuhan jaringan jangka panjang dan induksi kolagen</li>
      </ul>
      <p class="mt-2">Ini sepenuhnya autologus, artinya 100% berasal dari darah Anda sendiri—tanpa aditif, tanpa zat asing, dan tanpa risiko penolakan.</p>`
      }
    },
    howItDiffers: {
      en: 'Unlike PRP, which requires anticoagulants and offers a quick burst of growth factors, Bio-PRF creates a natural fibrin matrix that allows for a sustained release of growth factors over 7-10 days. This prolonged action provides more robust and lasting regenerative signals to the tissue.',
      id: 'Tidak seperti PRP, yang membutuhkan antikoagulan dan menawarkan ledakan cepat faktor pertumbuhan, Bio-PRF menciptakan matriks fibrin alami yang memungkinkan pelepasan faktor pertumbuhan secara berkelanjutan selama 7-10 hari. Tindakan yang berkepanjangan ini memberikan sinyal regeneratif yang lebih kuat dan tahan lama ke jaringan.'
    },
    benefits: [
      { en: 'Stimulates long-term collagen and elastin production', id: 'Merangsang produksi kolagen dan elastin jangka panjang' },
      { en: 'Improves skin quality, elasticity, and density', id: 'Meningkatkan kualitas, elastisitas, dan kepadatan kulit' },
      { en: 'Enhances wound healing and reduces inflammation', id: 'Meningkatkan penyembuhan luka dan mengurangi peradangan' },
      { en: 'Effective for hair regrowth, acne scars, dark undereyes, and skin rejuvenation', id: 'Efektif untuk pertumbuhan kembali rambut, bekas jerawat, mata panda, dan peremajaan kulit' },
      { en: 'Excellent addition to GOURI, skinboosters, and energy-based devices', id: 'Tambahan yang sangat baik untuk GOURI, skinbooster, dan perangkat berbasis energi' }
    ],
    indications: [
      {
        en: 'Face: Improves dermal thickness, glow, and firmness. A perfect complement to biostimulators or post-laser healing.',
        id: 'Wajah: Meningkatkan ketebalan dermal, kilau, dan kekencangan. Pelengkap sempurna untuk biostimulator atau penyembuhan pasca-laser.'
      },
      {
        en: 'Hair: Encourages follicle repair and growth, ideal for early hair thinning.',
        id: 'Rambut: Mendorong perbaikan dan pertumbuhan folikel, ideal untuk penipisan rambut dini.'
      },
      {
        en: 'Eye Area: Reduces dark circles and crepey skin with natural, regenerative power.',
        id: 'Area Mata: Mengurangi lingkaran hitam dan kulit keriput dengan kekuatan regeneratif alami.'
      },
      {
        en: 'Scars: Reduces acne and atrophic scar depth by promoting healthy tissue remodeling.',
        id: 'Bekas Luka: Mengurangi kedalaman bekas jerawat dan atrofi dengan mendorong perombakan jaringan yang sehat.'
      }
    ],
    whyLoveIt: [
      {
        en: 'In a market saturated with synthetic fillers and quick fixes, Altruva Bio-PRF offers a return to nature—backed by science. It’s biocompatible, chemical-free, and patient-specific. At Altruva, we don’t just treat symptoms—we engineer skin longevity.',
        id: 'Di pasar yang jenuh dengan pengisi sintetis dan perbaikan cepat, Altruva Bio-PRF menawarkan kembali ke alam—didukung oleh sains. Ini biokompatibel, bebas bahan kimia, dan spesifik untuk pasien. Di Altruva, kami tidak hanya mengobati gejala—kami merekayasa umur panjang kulit.'
      }
    ]
  },
  {
    id: 'clarify-peel',
    title: 'Altruva Clarify Peel',
    description: { en: 'Breakout-prone skin detox & renewal.', id: 'Detoks & pembaruan kulit yang rentan berjerawat.' },
    price: '500,000 IDR',
    category: 'Prejuvenation',
    Icon: Sparkles,
    imageSrc: '/images/services/clarifypeel.jpeg',
    imageHint: 'chemical peel',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
      id: 'Strategi penuaan terbaik adalah pencegahan. Altruva Glow memperkuat ketahanan kulit, hidrasi, dan mekanisme pertahanan terhadap penuaan dini, menjaga kulit Anda tetap bercahaya dan siap menghadapi masa depan.'
    },
    subgroup: 'Signature Peels',
    subtitle: { en: 'Targeted Clarity for Blemish-Prone Skin', id: 'Kejernihan Bertarget untuk Kulit Rentan Noda' },
    longDescription: {
      en: 'At Altruva, we understand that breakout-prone skin needs more than just surface-level solutions. Altruva Clarify Peel is our advanced clearing peel that works deep within the skin to calm inflammation, combat acne, and brighten post-inflammatory pigmentation—without harsh disruption to your skin barrier.<br/><br/>Powered by a professional-strength blend of Salicylic Acid, Mandelic Acid, and the innovative Terpineol-Thymol Complex, this peel is curated for patients struggling with recurring blemishes, oil imbalance, and post-acne discoloration.',
      id: 'Di Altruva, kami memahami bahwa kulit yang rentan berjerawat membutuhkan lebih dari sekadar solusi tingkat permukaan. Altruva Clarify Peel adalah pengelupasan pembersih canggih kami yang bekerja jauh di dalam kulit untuk menenangkan peradangan, memerangi jerawat, dan mencerahkan pigmentasi pasca-inflamasi—tanpa gangguan keras pada penghalang kulit Anda.<br/><br/>Didukung oleh campuran kekuatan profesional dari Asam Salisilat, Asam Mandelat, dan Kompleks Terpineol-Timol yang inovatif, pengelupasan ini dikurasi untuk pasien yang berjuang dengan noda berulang, ketidakseimbangan minyak, dan perubahan warna pasca-jerawat.'
    },
    whatIsIt: {
      title: { en: 'How It Works', id: 'Cara Kerjanya' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Salicylic Acid (BHA):</strong> deeply penetrates pores to dissolve sebum, clear blockages, and prevent future breakouts.</li><li><strong>Mandelic Acid (AHA):</strong> offers gentle exfoliation to smooth skin texture and fade dark spots without irritation.</li><li><strong>Terpineol-Thymol Complex:</strong> is a patented antimicrobial technology that reduces redness, supports skin microbiome balance, and strengthens skin’s natural defenses.</li></ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Asam Salisilat (BHA):</strong> menembus pori-pori secara mendalam untuk melarutkan sebum, membersihkan sumbatan, dan mencegah jerawat di masa depan.</li><li><strong>Asam Mandelat (AHA):</strong> menawarkan pengelupasan lembut untuk menghaluskan tekstur kulit dan memudarkan bintik hitam tanpa iritasi.</li><li><strong>Kompleks Terpineol-Timol:</strong> adalah teknologi antimikroba yang dipatenkan yang mengurangi kemerahan, mendukung keseimbangan mikrobioma kulit, dan memperkuat pertahanan alami kulit.</li></ul>`
      }
    },
    benefits: [
      { en: 'Helps clear active acne and reduce future breakouts', id: 'Membantu membersihkan jerawat aktif dan mengurangi jerawat di masa depan' },
      { en: 'Visibly lightens post-inflammatory hyperpigmentation (PIH)', id: 'Mencerahkan hiperpigmentasi pasca-inflamasi (PIH) secara nyata' },
      { en: 'Balances sebum production for oily and congested skin', id: 'Menyeimbangkan produksi sebum untuk kulit berminyak dan tersumbat' },
      { en: 'Calms inflammation and redness without over-drying', id: 'Menenangkan peradangan dan kemerahan tanpa membuat kulit terlalu kering' },
      { en: 'Enhances skin clarity and smoothness after just a few sessions', id: 'Meningkatkan kejernihan dan kehalusan kulit hanya setelah beberapa sesi' }
    ],
    indications: [
      { en: 'Persistent blemishes and acne-prone skin', id: 'Noda persisten dan kulit rentan berjerawat' },
      { en: 'Redness and post-acne marks', id: 'Kemerahan dan bekas jerawat' },
      { en: 'Oily, congested, or rough skin texture', id: 'Tekstur kulit berminyak, tersumbat, atau kasar' }
    ],
    whyLoveIt: [
      {
        en: "Unlike traditional acne peels that may cause flaking or irritation, our protocol is designed with regenerative dermatology in mind. Paired with a personalized Altruva Glow regimen or combined with Exion Lumi Laser, it offers a gentle yet highly effective path to clear, luminous skin—no downtime, no harshness.",
        id: "Tidak seperti pengelupasan jerawat tradisional yang dapat menyebabkan pengelupasan atau iritasi, protokol kami dirancang dengan mempertimbangkan dermatologi regeneratif. Dipasangkan dengan rejimen Altruva Glow yang dipersonalisasi atau dikombinasikan dengan Exion Lumi Laser, ini menawarkan jalur yang lembut namun sangat efektif menuju kulit yang jernih dan bercahaya—tanpa waktu henti, tanpa kekerasan."
      }
    ]
  },
  {
    id: 'korean-luminous-peel',
    title: 'Altruva Korean Luminous Peel',
    description: { en: 'Smoothes & brightens for a luminous glow.', id: 'Menghaluskan & mencerahkan untuk kilau bercahaya.' },
    price: '700,000 IDR',
    category: 'Prejuvenation',
    Icon: Star,
    imageSrc: '/images/services/KoreanLuminousPeel.jpeg',
    imageHint: 'glowing skin',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
      id: 'Strategi penuaan terbaik adalah pencegahan. Altruva Glow memperkuat ketahanan kulit, hidrasi, dan mekanisme pertahanan terhadap penuaan dini, menjaga kulit Anda tetap bercahaya dan siap menghadapi masa depan.'
    },
    subgroup: 'Signature Peels',
    subtitle: { en: 'Effortless Radiance, Minimal Downtime', id: 'Cahaya Mudah, Waktu Henti Minimal' },
    longDescription: {
      en: "Inspired by the elegance of Korean skin philosophy, the Altruva Korean Luminous Peel is a next-generation chemical resurfacing treatment powered by LHA (Lipo-Hydroxy Acid) and HP-Sol™ technology. This gentle yet intelligent exfoliation system is designed for those who seek brighter, smoother, and more refined skin—without irritation, flaking, or social downtime.<br/>Unlike traditional peels that rely on high-acid concentrations to force skin shedding, this protocol honors your skin’s biology by supporting natural turnover, collagen renewal, and barrier integrity—making it ideal for sensitive skin or first-time peel users.",
      id: "Terinspirasi oleh keanggunan filosofi kulit Korea, Altruva Korean Luminous Peel adalah perawatan pelapisan ulang kimia generasi berikutnya yang didukung oleh teknologi LHA (Lipo-Hydroxy Acid) dan HP-Sol™. Sistem pengelupasan yang lembut namun cerdas ini dirancang bagi mereka yang mencari kulit yang lebih cerah, lebih halus, dan lebih halus—tanpa iritasi, pengelupasan, atau waktu henti sosial.<br/>Tidak seperti pengelupasan tradisional yang mengandalkan konsentrasi asam tinggi untuk memaksa pengelupasan kulit, protokol ini menghormati biologi kulit Anda dengan mendukung pergantian alami, pembaruan kolagen, dan integritas penghalang—menjadikannya ideal untuk kulit sensitif atau pengguna pengelupasan pertama kali."
    },
    whatIsIt: {
      title: { en: 'How It Works', id: 'Cara Kerjanya' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>LHA (Lipo-Hydroxy Acid):</strong> A lipid-soluble salicylic acid derivative that penetrates slowly, targeting clogged pores and dull skin with precision while being extremely gentle on the skin barrier.</li><li><strong>HP-Sol™ Complex:</strong> A patented alkaline complex that stimulates fibroblast activity for collagen production, balances skin pH, and supports healing—creating a glow-from-within effect.</li><li><strong>Skin-Friendly Lipids:</strong> Incorporated to hydrate, protect, and soothe, these actives ensure skin comfort during and after exfoliation.</li></ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>LHA (Lipo-Hydroxy Acid):</strong> Turunan asam salisilat yang larut dalam lipid yang menembus secara perlahan, menargetkan pori-pori tersumbat dan kulit kusam dengan presisi sambil sangat lembut pada penghalang kulit.</li><li><strong>Kompleks HP-Sol™:</strong> Kompleks basa yang dipatenkan yang merangsang aktivitas fibroblas untuk produksi kolagen, menyeimbangkan pH kulit, dan mendukung penyembuhan—menciptakan efek bersinar dari dalam.</li><li><strong>Lipid Ramah Kulit:</strong> Dimasukkan untuk menghidrasi, melindungi, dan menenangkan, bahan aktif ini memastikan kenyamanan kulit selama dan setelah pengelupasan.</li></ul>`
      }
    },
    benefits: [
      { en: 'Minimizes pores and clears out congestion', id: 'Meminimalkan pori-pori dan membersihkan sumbatan' },
      { en: 'Fades pigmentation, dullness, and uneven tone', id: 'Memudarkan pigmentasi, kusam, dan warna kulit tidak rata' },
      { en: 'Softens rough texture and smooths fine skin irregularities', id: 'Melembutkan tekstur kasar dan menghaluskan ketidakteraturan kulit halus' },
      { en: 'Boosts collagen production for firmer, more elastic skin', id: 'Meningkatkan produksi kolagen untuk kulit yang lebih kencang dan elastis' },
      { en: 'Calms redness and irritation, even on reactive skin types', id: 'Menenangkan kemerahan dan iritasi, bahkan pada jenis kulit reaktif' },
      { en: 'No downtime—just instantly luminous, makeup-optional skin', id: 'Tanpa waktu henti—hanya kulit bercahaya instan yang siap tanpa riasan' }
    ],
    indications: [
      { en: 'Dull, tired-looking skin', id: 'Kulit kusam dan tampak lelah' },
      { en: 'Enlarged pores and uneven tone', id: 'Pori-pori membesar dan warna kulit tidak rata' },
      { en: 'Mild pigmentation and early signs of aging', id: 'Pigmentasi ringan dan tanda-tanda penuaan dini' },
      { en: 'Patients with sensitive skin who want visible results without harshness', id: 'Pasien dengan kulit sensitif yang menginginkan hasil yang terlihat tanpa kekerasan' }
    ],
    whyLoveIt: [
      {
        en: "This is more than a glow-up. It’s regenerative skin science delivered gently, crafted for modern skin that juggles pollution, stress, and aging. Pair it with our Exion Lumi Laser or Glacier Skin Booster for amplified glow and pore-refining synergy.",
        id: "Ini lebih dari sekadar peningkatan penampilan. Ini adalah ilmu kulit regeneratif yang disampaikan dengan lembut, dibuat untuk kulit modern yang menghadapi polusi, stres, dan penuaan. Pasangkan dengan Exion Lumi Laser atau Glacier Skin Booster kami untuk kilau yang diperkuat dan sinergi penghalusan pori-pori."
      }
    ]
  },
  {
    id: 'exion-lumi-laser',
    title: 'Altruva Lumi Laser',
    description: {
      en: 'Targets light pigmentation, PIH, and mild acne marks.',
      id: 'Menargetkan pigmentasi ringan, PIH, dan bekas jerawat ringan.'
    },
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: '/images/services/lumilaser.jpg',
    imageHint: 'laser treatment',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
      id: 'Strategi penuaan terbaik adalah pencegahan. Altruva Glow memperkuat ketahanan kulit, hidrasi, dan mekanisme pertahanan terhadap penuaan dini, menjaga kulit Anda tetap bercahaya dan siap menghadapi masa depan.'
    },
    subgroup: 'Signature Laser',
    subtitle: {
      en: 'Radiance Redefined – Illuminated From Within',
      id: 'Cahaya Didefinisikan Ulang – Diterangi Dari Dalam'
    },
    longDescription: {
      en: 'The Altruva Lumi Laser is a non-invasive skin optimization treatment that uses next-generation radiofrequency (RF) technology to target skin clarity, pigmentation, and textural refinement—all without downtime. This advanced protocol works deeply within the dermis to stimulate collagen, brighten the complexion, and refine pores, resulting in skin that’s visibly clearer, smoother, and more radiant after each session.<br/><br/>Crafted for those seeking visible results with minimal interruption to daily life, Lumi Laser is a cornerstone treatment in Altruva’s Prejuvenation and Glow Optimization programs.',
      id: 'Altruva Lumi Laser adalah perawatan optimasi kulit non-invasif yang menggunakan teknologi frekuensi radio (RF) generasi berikutnya untuk menargetkan kejernihan kulit, pigmentasi, dan perbaikan tekstur—semua tanpa waktu henti. Protokol canggih ini bekerja jauh di dalam dermis untuk merangsang kolagen, mencerahkan kulit, dan menghaluskan pori-pori, menghasilkan kulit yang tampak lebih jernih, lebih halus, dan lebih bercahaya setelah setiap sesi.<br/><br/>Dibuat untuk mereka yang mencari hasil yang terlihat dengan gangguan minimal pada kehidupan sehari-hari, Lumi Laser adalah perawatan landasan dalam program Prejuvenation dan Glow Optimization Altruva.'
    },
    quote: {
      text: {
        en: 'Because clear skin is more than just cosmetic—it\'s a sign of internal skin vitality. Lumi Laser is tailored to your skin condition, often used as a foundation before bio-stimulator treatments like Gouri or Glacier Skin. It’s clarity, engineered.',
        id: 'Karena kulit jernih lebih dari sekadar kosmetik—ini adalah tanda vitalitas kulit internal. Lumi Laser disesuaikan dengan kondisi kulit Anda, sering digunakan sebagai dasar sebelum perawatan bio-stimulator seperti Gouri atau Glacier Skin. Ini adalah kejernihan, yang direkayasa.'
      },
      author: { en: 'dr. Olivia Aldisa', id: 'dr. Olivia Aldisa' }
    },
    whatIsIt: {
      title: { en: 'Technology in Action', id: 'Teknologi dalam Aksi' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Smart RF Energy Delivery:</strong> Gently penetrates the skin to awaken fibroblasts and trigger natural regeneration, without damaging the surface layer.</li><li><strong>Collagen & Elastin Biostimulation:</strong> Encourages dermal renewal and boosts elasticity for skin that’s visibly firmer and youthfully plump.</li><li><strong>Melanin Modulation:</strong> Reduces the appearance of age spots, sun damage, and uneven pigmentation, restoring a more even and luminous tone.</li><li><strong>Texture Refinement:</strong> Smoothes skin surface, minimizes pores, and restores a polished skin finish.</li></ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Pengiriman Energi RF Cerdas:</strong> Menembus kulit dengan lembut untuk membangunkan fibroblas dan memicu regenerasi alami, tanpa merusak lapisan permukaan.</li><li><strong>Biostimulasi Kolagen & Elastin:</strong> Mendorong pembaruan dermal dan meningkatkan elastisitas untuk kulit yang tampak lebih kencang dan kenyal muda.</li><li><strong>Modulasi Melanin:</strong> Mengurangi munculnya bintik-bintik penuaan, kerusakan akibat sinar matahari, dan pigmentasi tidak rata, mengembalikan warna kulit yang lebih merata dan bercahaya.</li><li><strong>Perbaikan Tekstur:</strong> Menghaluskan permukaan kulit, meminimalkan pori-pori, dan mengembalikan hasil akhir kulit yang halus.</li></ul>`
      }
    },
    benefits: [
      { en: 'Brightens dull, uneven skin tone', id: 'Mencerahkan warna kulit kusam dan tidak rata' },
      { en: 'Fades age spots, pigmentation, and redness', id: 'Memudarkan bintik-bintik penuaan, pigmentasi, dan kemerahan' },
      { en: 'Improves skin texture and clarity', id: 'Meningkatkan tekstur dan kejernihan kulit' },
      { en: 'Tightens pores and supports long-term skin health', id: 'Mengencangkan pori-pori dan mendukung kesehatan kulit jangka panjang' },
      { en: 'Zero downtime, perfect for lunch break treatments', id: 'Waktu henti nol, sempurna untuk perawatan saat istirahat makan siang' },
      { en: 'Safe for all skin types', id: 'Aman untuk semua jenis kulit' }
    ],
    indications: [
      { en: 'Dull or uneven skin', id: 'Kulit kusam atau tidak rata' },
      { en: 'Hyperpigmentation or early sun damage', id: 'Hiperpigmentasi atau kerusakan akibat sinar matahari dini' },
      { en: 'Enlarged pores and textural roughness', id: 'Pori-pori membesar dan kekasaran tekstur' },
      { en: 'Early signs of aging', id: 'Tanda-tanda penuaan dini' },
      { en: 'Those who want non-invasive, no-downtime rejuvenation', id: 'Mereka yang menginginkan peremajaan non-invasif tanpa waktu henti' }
    ]
  },
  {
    id: 'exion-scar-solver',
    title: 'Altruva Scar Solver',
    description: {
      en: 'Smooths textural irregularities and early acne scarring.',
      id: 'Menghaluskan ketidakteraturan tekstur dan bekas jerawat dini.'
    },
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: '/images/services/scarSolver.png',
    imageHint: 'acne scar treatment',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
      id: 'Strategi penuaan terbaik adalah pencegahan. Altruva Glow memperkuat ketahanan kulit, hidrasi, dan mekanisme pertahanan terhadap penuaan dini, menjaga kulit Anda tetap bercahaya dan siap menghadapi masa depan.'
    },
    subgroup: 'Signature Laser',
    subtitle: {
      en: 'Deep Resurfacing. Precision Refinement. Regenerative Healing.',
      id: 'Pelapisan Ulang Dalam. Perbaikan Presisi. Penyembuhan Regeneratif.'
    },
    longDescription: {
      en: "Altruva Scar Solver is our signature skin-texture treatment powered by Exion Fractional RF, an advanced microneedling radiofrequency platform enhanced by AI-optimized precision. Specially curated for those with acne scarring, enlarged pores, stretch marks, and post-inflammatory irregularities, this treatment delivers focused energy into the skin’s deeper layers—stimulating collagen, elastin, and hyaluronic acid regeneration.<br/>By bridging the benefits of controlled dermal injury and intelligent energy delivery, Scar Solver achieves smoother, firmer, and more even-toned skin—naturally, progressively, and with minimal downtime.",
      id: "Altruva Scar Solver adalah perawatan tekstur kulit khas kami yang didukung oleh Exion Fractional RF, platform frekuensi radio microneedling canggih yang ditingkatkan dengan presisi yang dioptimalkan oleh AI. Dikurasi khusus untuk mereka yang memiliki bekas jerawat, pori-pori membesar, stretch mark, dan ketidakteraturan pasca-inflamasi, perawatan ini memberikan energi terfokus ke lapisan kulit yang lebih dalam—merangsang regenerasi kolagen, elastin, dan asam hialuronat.<br/>Dengan menjembatani manfaat cedera dermal yang terkontrol dan pengiriman energi yang cerdas, Scar Solver mencapai kulit yang lebih halus, lebih kencang, dan lebih rata—secara alami, progresif, dan dengan waktu henti minimal."
    },
    quote: {
      text: {
        en: "Because true skin healing starts from within. Our regenerative contouring philosophy ensures that every textural correction is achieved not by force—but by guiding the skin’s own intelligence to remodel, rebuild, and reveal your most refined texture.",
        id: "Karena penyembuhan kulit sejati dimulai dari dalam. Filosofi kontur regeneratif kami memastikan bahwa setiap koreksi tekstur dicapai bukan dengan paksaan—tetapi dengan membimbing kecerdasan kulit sendiri untuk merombak, membangun kembali, dan mengungkapkan tekstur Anda yang paling halus."
      },
      author: { en: "dr. Olivia Aldisa", id: "dr. Olivia Aldisa" }
    },
    whatIsIt: {
      title: { en: 'How It Works', id: 'Cara Kerjanya' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;"><li><strong>Microneedling + RF Synergy:</strong> Ultrathin microneedles penetrate the skin to create micro-channels, triggering the skin’s natural wound-healing response. Simultaneously, radiofrequency energy is delivered into the dermis to heat and remodel tissue, supercharging collagen synthesis.</li><li><strong>AI Energy Delivery:</strong> The device’s smart algorithm tailors RF delivery in real-time based on skin feedback, ensuring maximum results with minimized discomfort or thermal injury.</li><li><strong>8mm Penetration Depth Without Full Needle Insertion:</strong> Unlike traditional RF microneedling, Altruva Scar Solver allows deep dermal targeting without the trauma of full-depth needle insertion—making it highly effective for textural scars and skin laxity, even in delicate zones.</li></ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;"><li><strong>Sinergi Microneedling + RF:</strong> Jarum mikro ultrathin menembus kulit untuk membuat saluran mikro, memicu respons penyembuhan luka alami kulit. Secara bersamaan, energi frekuensi radio dikirim ke dermis untuk memanaskan dan merombak jaringan, meningkatkan sintesis kolagen.</li><li><strong>Pengiriman Energi AI:</strong> Algoritma cerdas perangkat menyesuaikan pengiriman RF secara real-time berdasarkan umpan balik kulit, memastikan hasil maksimal dengan ketidaknyamanan atau cedera termal yang diminimalkan.</li><li><strong>Kedalaman Penetrasi 8mm Tanpa Penyisipan Jarum Penuh:</strong> Tidak seperti microneedling RF tradisional, Altruva Scar Solver memungkinkan penargetan dermal dalam tanpa trauma penyisipan jarum kedalaman penuh—menjadikannya sangat efektif untuk bekas luka tekstur dan kelonggaran kulit, bahkan di zona halus.</li></ul>`
      }
    },
    benefits: [
      { en: 'Softens and smoothes acne scars and textural irregularities', id: 'Melembutkan dan menghaluskan bekas jerawat dan ketidakteraturan tekstur' },
      { en: 'Minimizes enlarged pores', id: 'Meminimalkan pori-pori membesar' },
      { en: 'Refines rough or uneven skin texture', id: 'Menghaluskan tekstur kulit kasar atau tidak rata' },
      { en: 'Reduces fine lines and wrinkles in targeted zones', id: 'Mengurangi garis-garis halus dan kerutan di zona yang ditargetkan' },
      { en: 'Stimulates natural hyaluronic acid production', id: 'Merangsang produksi asam hialuronat alami' },
      { en: 'Improves skin firmness and elasticity', id: 'Meningkatkan kekencangan dan elastisitas kulit' },
      { en: 'Suitable for all skin types, including darker tones', id: 'Cocok untuk semua jenis kulit, termasuk warna kulit yang lebih gelap' }
    ],
    indications: [
      { en: 'Atrophic acne scars (icepick, boxcar, rolling)', id: 'Bekas jerawat atrofi (icepick, boxcar, rolling)' },
      { en: 'Post-acne pigmentation and roughness', id: 'Pigmentasi pasca-jerawat dan kekasaran' },
      { en: 'Enlarged pores on cheeks and nose', id: 'Pori-pori membesar di pipi dan hidung' },
      { en: 'Fine lines with reduced skin elasticity', id: 'Garis-garis halus dengan elastisitas kulit berkurang' },
      { en: 'Stretch marks and dermal texture correction', id: 'Stretch mark dan koreksi tekstur dermal' },
      { en: 'Patients not ready for ablative lasers or surgery', id: 'Pasien yang belum siap untuk laser ablatif atau operasi' }
    ],
    protocol: [
      {
        label: { en: 'Recommended', id: 'Direkomendasikan' },
        value: { en: '3–4 sessions, spaced 4–6 weeks apart', id: '3–4 sesi, dengan jarak 4–6 minggu' }
      },
      {
        label: { en: 'Maintenance', id: 'Pemeliharaan' },
        value: { en: '1–2 sessions annually for long-term dermal integrity', id: '1–2 sesi setiap tahun untuk integritas dermal jangka panjang' }
      },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'Mild redness or sensitivity for 1–3 days', id: 'Kemerahan atau sensitivitas ringan selama 1–3 hari' }
      },
      {
        label: { en: 'Pre/Post-Care', id: 'Perawatan Sebelum/Sesudah' },
        value: { en: 'Avoid sun, retinoids pre-treatment; moisturize and apply SPF diligently post-care', id: 'Hindari matahari, retinoid sebelum perawatan; lembapkan dan oleskan SPF dengan rajin setelah perawatan' }
      },
    ]
  },
  {
    id: 'art-lyft-lite',
    title: 'Altruva A.R.T Lift (Lite) by dr. Aldisa',
    description: {
      en: '(up to 300 shots) Personalized SUPERB Ultrasound-powered deep tissue tightening.',
      id: '(hingga 300 tembakan) Pengencangan jaringan dalam yang didukung SUPERB Ultrasound yang dipersonalisasi.'
    },
    longDescription: {
      en: `Anatomic Regenerative Targeting with Precision Sofwave Ultrasound. For those under 40, the best anti-aging strategy isn't reversal—it's prevention. A.R.T Lift Lite is Altruva’s signature collagen banking protocol, designed by dr. Olivia Aldisa, Sofwave Key Opinion Leader in Asia. This treatment uses SUPERB™ ultrasound technology to target areas of early collagen loss and prevent sagging before it starts. A.R.T (Anatomic Regenerative Targeting) Lift Lite is not just a facial—it’s a strategic investment in your skin’s future.`,
      id: 'Penargetan Regeneratif Anatomis dengan Ultrasound Sofwave Presisi. Bagi mereka yang berusia di bawah 40 tahun, strategi anti-penuaan terbaik bukanlah pembalikan—melainkan pencegahan. A.R.T Lift Lite adalah protokol perbankan kolagen khas Altruva, yang dirancang oleh dr. Olivia Aldisa, Pemimpin Opini Kunci Sofwave di Asia. Perawatan ini menggunakan teknologi ultrasound SUPERB™ untuk menargetkan area kehilangan kolagen dini dan mencegah kendur sebelum dimulai. A.R.T (Anatomic Regenerative Targeting) Lift Lite bukan hanya facial—ini adalah investasi strategis untuk masa depan kulit Anda.'
    },
    subtitle: {
      en: "Signature Prejuvenation for Collagen Banking (<40 years old)",
      id: "Prejuvenation Khas untuk Perbankan Kolagen (<40 tahun)"
    },
    price: '20,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: '/images/services/art.webp',
    imageHint: 'ultrasound facelift',
    group: 'Altruva Lift',
    groupDescription: { en: 'A sculpted face begins with structural integrity.', id: 'Wajah terpahat dimulai dengan integritas struktural.' },
    subgroup: 'Tightening &amp; Contouring',
    quote: {
      text: {
        en: 'At Altruva, we don’t chase aging—we engineer prevention. A.R.T Lift Lite is how we build long-term beauty without filler or surgery.',
        id: 'Di Altruva, kami tidak mengejar penuaan—kami merekayasa pencegahan. A.R.T Lift Lite adalah cara kami membangun kecantikan jangka panjang tanpa pengisi atau operasi.'
      },
      author: { en: 'dr. Olivia Aldisa', id: 'dr. Olivia Aldisa' }
    },
    whatIsIt: {
      title: { en: 'How It Works', id: 'Cara Kerjanya' },
      description: {
        en: `<p>A.R.T. Lift Lite uses precision ultrasound energy (Sofwave) to activate your skin's natural regenerative power. Focused beams of ultrasound energy reach the mid-dermis, heating tissue at just the right depth to stimulate fibroblasts—without damaging the skin surface. The gentle heat activates neocollagenesis, the body’s natural process of forming fresh collagen and elastin. With regenerative mapping by dr. Aldisa, each shot is planned to follow your unique fat pads, ligament structures, and collagen-rich zones to optimize long-term firming while preserving natural beauty.</p>`,
        id: `<p>A.R.T. Lift Lite menggunakan energi ultrasound presisi (Sofwave) untuk mengaktifkan kekuatan regeneratif alami kulit Anda. Sinar ultrasound yang terfokus mencapai pertengahan dermis, memanaskan jaringan pada kedalaman yang tepat untuk merangsang fibroblas—tanpa merusak permukaan kulit. Panas yang lembut mengaktifkan neokollagenesis, proses alami tubuh untuk membentuk kolagen dan elastin baru. Dengan pemetaan regeneratif oleh dr. Aldisa, setiap tembakan direncanakan untuk mengikuti bantalan lemak, struktur ligamen, dan zona kaya kolagen unik Anda untuk mengoptimalkan pengencangan jangka panjang sambil menjaga kecantikan alami.</p>`
      }
    },
    howItDiffers: {
      en: 'Designed by a Global Sofwave Expert. The A.R.T Lift Lite protocol is based on clinical knowledge and field data from dr. Aldisa’s work with thousands of Sofwave pulses. It targets collagen banking to prevent premature sagging and is a strategic prejuvenation for Millennials & Gen Z. It is non-invasive with zero downtime.',
      id: 'Dirancang oleh Pakar Sofwave Global. Protokol A.R.T Lift Lite didasarkan pada pengetahuan klinis dan data lapangan dari pekerjaan dr. Aldisa dengan ribuan pulsa Sofwave. Ini menargetkan perbankan kolagen untuk mencegah kendur prematur dan merupakan prejuvenation strategis untuk Milenial & Gen Z. Ini non-invasif dengan waktu henti nol.'
    },
    whyLoveIt: [
      { en: 'Targeted Collagen Banking: Prevents premature sagging in midface, jawline, and brow.', id: 'Perbankan Kolagen Bertarget: Mencegah kendur prematur di bagian tengah wajah, garis rahang, dan alis.' },
      { en: 'Non-invasive with Zero Downtime: A lunchtime protocol with no redness, peeling, or bruising.', id: 'Non-invasif dengan Waktu Henti Nol: Protokol saat makan siang tanpa kemerahan, pengelupasan, atau memar.' },
      { en: 'Ideal for patients in their late 20s to mid-30s looking to future-proof their facial architecture.', id: 'Ideal untuk pasien berusia akhir 20-an hingga pertengahan 30-an yang ingin mempersiapkan arsitektur wajah mereka di masa depan.' },
    ],
    indications: [
      { en: 'Early signs of facial laxity', id: 'Tanda-tanda awal kelonggaran wajah' },
      { en: 'Flat mid-cheeks or soft jawline definition', id: 'Pipi tengah rata atau definisi garis rahang yang lembut' },
      { en: '“Pre-jowl” or under-chin laxity', id: '“Pra-jowl” atau kelonggaran di bawah dagu' },
      { en: 'Maintenance after filler or threads', id: 'Pemeliharaan setelah pengisi atau benang' },
      { en: 'Skin prep before life events (weddings, media, international travel)', id: 'Persiapan kulit sebelum acara kehidupan (pernikahan, media, perjalanan internasional)' },
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '35–45 minutes', id: '35–45 menit' } },
      { label: { en: 'Protocol', id: 'Protokol' }, value: { en: '200–300 pulses, focused on collagen reservoirs', id: '200–300 pulsa, berfokus pada reservoir kolagen' } },
      { label: { en: 'Pain level', id: 'Tingkat Nyeri' }, value: { en: 'Mild warmth; cooling system ensures comfort', id: 'Kehangatan ringan; sistem pendingin memastikan kenyamanan' } },
      { label: { en: 'Downtime', id: 'Waktu Henti' }, value: { en: 'None', id: 'Tidak ada' } },
      { label: { en: 'Visible results', id: 'Hasil Terlihat' }, value: { en: '3–4 weeks post-treatment, with progressive improvement for up to 12 weeks', id: '3–4 minggu pasca-perawatan, dengan perbaikan progresif hingga 12 minggu' } },
      { label: { en: 'Suggested frequency', id: 'Frekuensi yang Disarankan' }, value: { en: 'Once annually for maintenance; twice yearly for visible lift', id: 'Sekali setahun untuk pemeliharaan; dua kali setahun untuk pengangkatan yang terlihat' } }
    ],
  },
  {
    id: 'gorgeous-lyft-prejuvenation',
    title: 'Altruva Gorgeous Lyft by dr. Aldisa',
    description: { en: 'Injectable liquid type biostimulators for structural longevity.', id: 'Biostimulator tipe cair yang dapat disuntikkan untuk umur panjang struktural.' },
    price: '6,000,000 IDR',
    category: 'Prejuvenation',
    Icon: HeartPulse,
    imageSrc: '/images/services/gorgeous-lift.jpg',
    imageHint: 'biostimulator injection',
    group: 'Altruva Lift',
    groupDescription: { en: 'A sculpted face begins with structural integrity.', id: 'Wajah terpahat dimulai dengan integritas struktural.' },
    subgroup: 'Tightening &amp; Contouring',
    subtitle: {
      en: "The Signature Liquid Collagen Bioactivator Experience",
      id: "Pengalaman Bioaktivator Kolagen Cair Khas"
    },
    longDescription: {
      en: `Precision by Gouri International KOL. Gorgeous Lyft is the ultimate expression of regenerative luxury, exclusively available at Altruva Aesthetic Clinic and masterfully performed by dr. Olivia Aldisa, one of the world’s leading KOLs for Gouri.<br/><br/>This next-generation procedure harnesses the power of liquid Polycaprolactone (PCL) — a fully solubilized collagen biostimulator — to awaken your skin’s innate capacity to rebuild, rejuvenate, and restore youthful architecture. No volumization. No puffiness. Just glow-from-within firmness that whispers elegance.`,
      id: 'Presisi oleh KOL Internasional Gouri. Gorgeous Lyft adalah ekspresi utama kemewahan regeneratif, tersedia secara eksklusif di Klinik Estetika Altruva dan dilakukan secara ahli oleh dr. Olivia Aldisa, salah satu KOL terkemuka di dunia untuk Gouri.<br/><br/>Prosedur generasi berikutnya ini memanfaatkan kekuatan Polycaprolactone (PCL) cair — biostimulator kolagen yang sepenuhnya larut — untuk membangkitkan kapasitas bawaan kulit Anda untuk membangun kembali, meremajakan, dan memulihkan arsitektur muda. Tanpa volumisasi. Tanpa bengkak. Hanya kekencangan dari dalam yang membisikkan keanggunan.'
    },
    quote: {
      text: {
        en: "Collagen is your skin’s inheritance. Gorgeous Lyft helps you protect and grow it—elegantly, safely, and globally.",
        id: "Kolagen adalah warisan kulit Anda. Gorgeous Lyft membantu Anda melindungi dan menumbuhkannya—dengan elegan, aman, dan global."
      },
      author: { en: "dr. Olivia Aldisa, International KOL for Gouri", id: "dr. Olivia Aldisa, KOL Internasional untuk Gouri" }
    },
    whatIsIt: {
      title: { en: 'What is Gorgeous Lyft?', id: 'Apa itu Gorgeous Lyft?' },
      description: {
        en: `Gorgeous Lyft is Altruva’s signature bio-collagen activation protocol using Gouri, the world’s first and only 100% liquid PCL injectable.
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong>Liquid PCL:</strong> Unlike microparticle biostimulators, Gouri flows seamlessly across the dermis.</li>
        <li><strong>Multi-Zone Collagenesis:</strong> A few targeted injections can reach broad facial areas.</li>
        <li><strong>Gradual Lifting, Brightening & Tightening:</strong> As fibroblasts activate, skin begins a months-long journey of self-renewal.</li>
        <li><strong>Doctor-Led Mapping:</strong> Injection patterns are personalized by dr. Aldisa to restore harmony across different facial zones — temples, nasojugal groove, marionette, cheeks, and preauricular area.</li>
      </ul>`,
        id: `Gorgeous Lyft adalah protokol aktivasi bio-kolagen khas Altruva menggunakan Gouri, suntikan PCL cair 100% pertama dan satu-satunya di dunia.
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong>PCL Cair:</strong> Tidak seperti biostimulator mikropartikel, Gouri mengalir mulus melintasi dermis.</li>
        <li><strong>Kolagenesis Multi-Zona:</strong> Beberapa suntikan yang ditargetkan dapat mencapai area wajah yang luas.</li>
        <li><strong>Pengangkatan, Pencerahan & Pengencangan Bertahap:</strong> Saat fibroblas aktif, kulit memulai perjalanan pembaruan diri selama berbulan-bulan.</li>
        <li><strong>Pemetaan yang Dipimpin Dokter:</strong> Pola injeksi dipersonalisasi oleh dr. Aldisa untuk mengembalikan harmoni di berbagai zona wajah — pelipis, alur nasojugal, marionette, pipi, dan area preauricular.</li>
      </ul>`
      }
    },
    mechanism: [
      {
        title: { en: 'Strategic Infiltration', id: 'Infiltrasi Strategis' },
        description: {
          en: "Minimal points are needed to activate widespread collagen induction. For enhanced safety and efficacy, dr. Aldisa always pre-infiltrates with lidocaine to create safe distribution channels.",
          id: "Poin minimal diperlukan untuk mengaktifkan induksi kolagen yang luas. Untuk meningkatkan keamanan dan kemanjuran, dr. Aldisa selalu melakukan pra-infiltrasi dengan lidokain untuk membuat saluran distribusi yang aman."
        }
      },
      {
        title: { en: 'Controlled Dispersion', id: 'Dispersi Terkendali' },
        description: {
          en: "Using the exclusive Gouri Dispersion Method (GDM) and post-injection 1-minute point compression, bruising is minimized and PCL diffusion is optimized.",
          id: "Menggunakan Metode Dispersi Gouri (GDM) eksklusif dan kompresi titik 1 menit pasca-injeksi, memar diminimalkan dan difusi PCL dioptimalkan."
        }
      },
      {
        title: { en: 'Bioregenerative Remodeling', id: 'Perombakan Bioregeneratif' },
        description: {
          en: "Over the next 3–12 weeks, your skin begins producing Type I and III collagen, resulting in firmer texture, lifted contours, and improved glow.",
          id: "Selama 3–12 minggu ke depan, kulit Anda mulai memproduksi kolagen Tipe I dan III, menghasilkan tekstur yang lebih kencang, kontur yang terangkat, dan kilau yang lebih baik."
        }
      }
    ],
    benefits: [
      { en: "Stimulates natural collagen without adding artificial volume", id: "Merangsang kolagen alami tanpa menambahkan volume buatan" },
      { en: "Improves laxity, skin tone, and texture", id: "Meningkatkan kelenturan, warna kulit, dan tekstur" },
      { en: "Reduces wrinkles, tear trough, and marionette shadows", id: "Mengurangi kerutan, kantung mata, dan bayangan marionette" },
      { en: "Minimal downtime, low risk of lumps or overfilling", id: "Waktu henti minimal, risiko benjolan atau pengisian berlebih yang rendah" },
      { en: "Results that build over time and last up to 9–12 months", id: "Hasil yang membangun seiring waktu dan bertahan hingga 9–12 bulan" }
    ],
    indications: [
      { en: "Patients 30–55 seeking refinement rather than reshaping", id: "Pasien 30–55 yang mencari perbaikan daripada pembentukan ulang" },
      { en: "Individuals with early signs of sagging, dullness, or mild volume depletion", id: "Individu dengan tanda-tanda awal kendur, kusam, atau deplesi volume ringan" },
      { en: "Clients wanting a filler-free profile", id: "Klien yang menginginkan profil bebas pengisi" },
      { en: "Postpartum mothers, perimenopausal women, and aesthetic minimalists", id: "Ibu pasca melahirkan, wanita perimenopause, dan minimalis estetika" }
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '~30 minutes', id: '~30 menit' } },
      {
        label: { en: 'Technique', id: 'Teknik' },
        value: {
          en: '5–7 injection points using micro-needle or cannula, depending on face type',
          id: '5–7 titik injeksi menggunakan jarum mikro atau kanula, tergantung pada jenis wajah'
        }
      },
      {
        label: { en: 'Aftercare', id: 'Perawatan Lanjutan' },
        value: { en: 'Avoid excessive facial movement or massage for 24–48 hours', id: 'Hindari gerakan wajah atau pijatan berlebihan selama 24–48 jam' }
      },
      {
        label: { en: 'Redness or swelling', id: 'Kemerahan atau bengkak' },
        value: { en: 'typically subsides within 1–3 days', id: 'biasanya mereda dalam 1–3 hari' }
      }
    ]
  },
  {
    id: 'exion-lumi-rf',
    title: 'Altruva Lumi RF',
    description: {
      en: 'Fusion of RF and Ultrasound Technology. Best for maintenance after A.R.T Lyft.',
      id: 'Perpaduan Teknologi RF dan Ultrasound. Terbaik untuk pemeliharaan setelah A.R.T Lyft.'
    },
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: '/images/services/lumirf.jpg',
    imageHint: 'rf skin tightening',
    group: 'Altruva Lift',
    groupDescription: { en: 'A sculpted face begins with structural integrity.', id: 'Wajah terpahat dimulai dengan integritas struktural.' },
    subgroup: 'Tightening &amp; Contouring',
    subtitle: {
      en: 'Next-Generation Needle-Free Skin Tightening & Radiance Activation',
      id: 'Pengencangan Kulit Tanpa Jarum Generasi Berikutnya & Aktivasi Cahaya'
    },
    longDescription: {
      en: 'Altruva Lumi RF is a non-invasive, regenerative radiofrequency treatment uniquely engineered to awaken your skin’s collagen and elastin without needles, pain, or downtime. Powered by advanced Exion™ technology, Lumi RF delivers intelligent energy deep into the dermis to refine skin texture, tighten sagging areas, and amplify natural hyaluronic acid production—resulting in firmer, smoother, more radiant skin.<br/><br/>This is the future of RF-powered lifting—effortless, elegant, and effective.',
      id: 'Altruva Lumi RF adalah perawatan frekuensi radio regeneratif non-invasif yang dirancang secara unik untuk membangkitkan kolagen dan elastin kulit Anda tanpa jarum, rasa sakit, atau waktu henti. Didukung oleh teknologi Exion™ canggih, Lumi RF memberikan energi cerdas jauh ke dalam dermis untuk menghaluskan tekstur kulit, mengencangkan area yang kendur, dan memperkuat produksi asam hialuronat alami—menghasilkan kulit yang lebih kencang, lebih halus, dan lebih bercahaya.<br/><br/>Ini adalah masa depan pengangkatan bertenaga RF—mudah, elegan, dan efektif.'
    },
    quote: {
      text: { en: "We believe skin should glow from its own wisdom. Lumi RF helps your face remember how.", id: "Kami percaya kulit harus bersinar dari kebijaksanaannya sendiri. Lumi RF membantu wajah Anda mengingat caranya." },
      author: {
        en: "dr. Olivia Aldisa, Medical Director of Altruva Aesthetic Clinic",
        id: "dr. Olivia Aldisa, Direktur Medis Klinik Estetika Altruva"
      }
    },
    whatIsIt: {
      title: { en: 'How Lumi RF Works', id: 'Cara Kerja Lumi RF' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;"><li><strong>Smart Radiofrequency (RF) Energy:</strong> Exion-powered RF heats the deeper dermal layers in a controlled, uniform way—stimulating fibroblasts to regenerate collagen and elastin without damaging the surface. Expect visibly firmer contours and smoother skin over time.</li><li><strong>Targeted Ultrasound Boost:</strong> By combining targeted ultrasound, Lumi RF supercharges the regenerative process—enhancing collagen crosslinking and optimizing skin density in areas prone to laxity, like under the eyes or jawline.</li><li><strong>Needle-Free, AI-Guided Delivery:</strong> Unlike traditional microneedling RF, Lumi RF is completely needle-free and uses AI-driven thermal mapping to ensure safe, consistent energy delivery. The result? A comfortable experience with measurable results.</li></ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;"><li><strong>Energi Frekuensi Radio (RF) Cerdas:</strong> RF bertenaga Exion memanaskan lapisan dermal yang lebih dalam secara terkontrol dan seragam—merangsang fibroblas untuk meregenerasi kolagen dan elastin tanpa merusak permukaan. Harapkan kontur yang tampak lebih kencang dan kulit yang lebih halus seiring waktu.</li><li><strong>Peningkatan Ultrasound Bertarget:</strong> Dengan menggabungkan ultrasound yang ditargetkan, Lumi RF mengisi ulang proses regeneratif—meningkatkan ikatan silang kolagen dan mengoptimalkan kepadatan kulit di area yang rentan kendur, seperti di bawah mata atau garis rahang.</li><li><strong>Pengiriman Tanpa Jarum, Terpandu AI:</strong> Tidak seperti microneedling RF tradisional, Lumi RF sepenuhnya bebas jarum dan menggunakan pemetaan termal yang digerakkan oleh AI untuk memastikan pengiriman energi yang aman dan konsisten. Hasilnya? Pengalaman yang nyaman dengan hasil yang terukur.</li></ul>`
      }
    },
    whyLoveIt: [
      { en: 'Tightens Sagging Skin Naturally', id: 'Mengencangkan Kulit Kendur Secara Alami' },
      { en: 'Improves Hydration from Within', id: 'Meningkatkan Hidrasi dari Dalam' },
      { en: 'Reduces Fine Lines & Refines Texture', id: 'Mengurangi Garis Halus & Menghaluskan Tekstur' },
      { en: 'AI-Guided Precision', id: 'Presisi Terpandu AI' },
      { en: 'Minimal Downtime, Maximal Glow', id: 'Waktu Henti Minimal, Cahaya Maksimal' },
    ],
    indications: [
      { en: 'Women and men 25+ experiencing early signs of laxity or dullness', id: 'Wanita dan pria 25+ yang mengalami tanda-tanda awal kelonggaran atau kekusaman' },
      { en: 'Patients looking for needle-free facial rejuvenation', id: 'Pasien yang mencari peremajaan wajah tanpa jarum' },
      { en: 'Those prepping for important events without the risk of downtime', id: 'Mereka yang mempersiapkan acara penting tanpa risiko waktu henti' },
      { en: 'Individuals with sensitive or thin skin not suited to aggressive procedures', id: 'Individu dengan kulit sensitif atau tipis yang tidak cocok untuk prosedur agresif' }
    ],
    protocol: [
      {
        label: { en: 'Duration', id: 'Durasi' },
        value: { en: '30–45 minutes per session', id: '30–45 menit per sesi' }
      },
      {
        label: { en: 'Sensation', id: 'Sensasi' },
        value: { en: 'Gentle warmth; no pain or numbing required', id: 'Kehangatan lembut; tidak perlu rasa sakit atau mati rasa' }
      },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'Zero to minimal (mild redness may last 1–2 hours)', id: 'Nol hingga minimal (kemerahan ringan dapat bertahan 1–2 jam)' }
      },
      {
        label: { en: 'Frequency', id: 'Frekuensi' },
        value: { en: '3–5 sessions spaced 2–4 weeks apart for optimal results', id: '3–5 sesi dengan jarak 2–4 minggu untuk hasil optimal' }
      },
    ]
  },
  {
    id: 'slim-contour-injection',
    title: 'Altruva Slim Contour Injection',
    description: { en: 'Facial fat detox &amp; contouring.', id: 'Detoks lemak wajah &amp; pembentukan kontur.' },
    price: '2,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Droplets,
    imageSrc: '/images/services/SlimContourInjection.webp',
    imageHint: 'facial contouring',
    group: 'Altruva Lift',
    groupDescription: { en: 'A sculpted face begins with structural integrity.', id: 'Wajah terpahat dimulai dengan integritas struktural.' },
    subgroup: 'Signature Contouring',
    subtitle: {
      en: 'Sculpt Smart. Contour Clean. For a Lighter, Sharper You.',
      id: 'Pahat Cerdas. Kontur Bersih. Untuk Anda yang Lebih Ringan dan Tajam.'
    },
    longDescription: {
      en: `Altruva Slim Contour Injection is a targeted fat-dissolving injectable designed for individuals under 40 who struggle with stubborn facial fat in key areas like the lower cheeks, jawline, and submental (double chin) region. Whether due to genetics or lifestyle, facial heaviness can obscure natural bone structure—even in those with a healthy BMI.<br/><br/>This treatment provides a non-surgical solution to refine contours, improve definition, and reshape the face for a leaner, more V-shaped profile—without downtime.`,
      id: `Altruva Slim Contour Injection adalah suntikan pelarut lemak yang ditargetkan yang dirancang untuk individu di bawah 40 tahun yang berjuang dengan lemak wajah membandel di area utama seperti pipi bawah, garis rahang, dan daerah submental (dagu ganda). Baik karena genetika atau gaya hidup, berat wajah dapat mengaburkan struktur tulang alami—bahkan pada mereka yang memiliki BMI sehat.<br/><br/>Perawatan ini memberikan solusi non-bedah untuk menghaluskan kontur, meningkatkan definisi, dan membentuk kembali wajah untuk profil yang lebih ramping dan berbentuk V—tanpa waktu henti.`
    },
    quote: {
      text: {
        en: "It’s not about changing your face. It’s about unlocking its best version—cleaner lines, lifted confidence, no unnecessary volume.",
        id: "Ini bukan tentang mengubah wajah Anda. Ini tentang membuka versi terbaiknya—garis yang lebih bersih, kepercayaan diri yang terangkat, tanpa volume yang tidak perlu."
      },
      author: {
        en: "dr. Olivia Aldisa, Facial Contouring Specialist & Altruva Founder",
        id: "dr. Olivia Aldisa, Spesialis Kontur Wajah & Pendiri Altruva"
      }
    },
    whatIsIt: {
      title: { en: 'How It Works', id: 'Cara Kerjanya' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;">
            <li><strong>Advanced Lipolytic Complex:</strong> Our formula is powered by clinically proven lipolytic compounds that selectively break down localized fat deposits while preserving skin integrity and surrounding tissues.</li>
            <li><strong>Microinjection Delivery:</strong> Administered via precise microinjections, the solution acts in the subcutaneous fat layer to liquefy fat cells, which are then naturally eliminated through the body’s lymphatic system.</li>
            <li><strong>Targeted Contouring:</strong> By reducing excess volume in specific areas, the treatment restores facial harmony and sharpens structural definition—especially in the jawline, jowl zone, and lower face.</li>
        </ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;">
            <li><strong>Kompleks Lipolitik Canggih:</strong> Formula kami didukung oleh senyawa lipolitik yang terbukti secara klinis yang secara selektif memecah deposit lemak lokal sambil menjaga integritas kulit dan jaringan di sekitarnya.</li>
            <li><strong>Pengiriman Injeksi Mikro:</strong> Diberikan melalui suntikan mikro yang tepat, larutan bekerja di lapisan lemak subkutan untuk mencairkan sel-sel lemak, yang kemudian secara alami dihilangkan melalui sistem limfatik tubuh.</li>
            <li><strong>Pembentukan Kontur Bertarget:</strong> Dengan mengurangi volume berlebih di area tertentu, perawatan mengembalikan harmoni wajah dan mempertajam definisi struktural—terutama di garis rahang, zona jowl, dan wajah bagian bawah.</li>
        </ul>`
      }
    },
    benefits: [
      { en: 'Contours without surgery', id: 'Membentuk kontur tanpa operasi' },
      { en: 'Improves facial proportions', id: 'Meningkatkan proporsi wajah' },
      { en: 'Boosts skin tone and elasticity', id: 'Meningkatkan warna dan elastisitas kulit' },
      { en: 'Gentle and well-tolerated', id: 'Lembut dan dapat ditoleransi dengan baik' },
      { en: 'Clinically backed innovation', id: 'Inovasi yang didukung secara klinis' }
    ],
    indications: [
      { en: 'Men and women under 40 with excess facial fat despite normal weight', id: 'Pria dan wanita di bawah 40 tahun dengan lemak wajah berlebih meskipun berat badan normal' },
      { en: 'Individuals looking to define the V-line, reduce chipmunk cheeks, or lighten lower face heaviness', id: 'Individu yang ingin mendefinisikan garis V, mengurangi pipi tembem, atau meringankan berat wajah bagian bawah' },
      { en: 'Those hesitant about surgical buccal fat removal or invasive procedures', id: 'Mereka yang ragu dengan pengangkatan lemak bukal bedah atau prosedur invasif' },
      { en: 'Patients who want refined facial proportions without adding volume', id: 'Pasien yang menginginkan proporsi wajah yang halus tanpa menambahkan volume' }
    ],
    protocol: [
      { label: { en: 'Session Time', id: 'Waktu Sesi' }, value: { en: '30–45 minutes', id: '30–45 menit' } },
      {
        label: { en: 'Frequency', id: 'Frekuensi' },
        value: { en: '2–4 sessions spaced 2–3 weeks apart', id: '2–4 sesi dengan jarak 2–3 minggu' }
      },
      {
        label: { en: 'Recovery', id: 'Pemulihan' },
        value: { en: 'Mild tenderness or swelling for 1–3 days', id: 'Nyeri ringan atau bengkak selama 1–3 hari' }
      },
      {
        label: { en: 'Maintenance', id: 'Pemeliharaan' },
        value: { en: 'As needed based on lifestyle & metabolism', id: 'Sesuai kebutuhan berdasarkan gaya hidup & metabolisme' }
      }
    ]
  },
  {
    id: 'face-modulator-half',
    title: 'Altruva Face Modulator (Half Dose)',
    description: { en: 'Subtle wrinkle softening while preserving natural expression.', id: 'Pelembutan kerutan halus sambil menjaga ekspresi alami.' },
    price: '5,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Sparkles,
    imageSrc: '/images/services/FaceModulator.jpg',
    imageHint: 'wrinkle treatment',
    group: 'Altruva Lift',
    groupDescription: { en: 'A sculpted face begins with structural integrity.', id: 'Wajah terpahat dimulai dengan integritas struktural.' },
    subgroup: 'Signature Contouring',
    subtitle: {
      en: "Precision Redefined. Subtle Contour, Maximum Harmony — by dr. Aldisa.",
      id: "Presisi Didefinisikan Ulang. Kontur Halus, Harmoni Maksimal — oleh dr. Aldisa."
    },
    longDescription: {
      en: `In a world where subtlety matters, Altruva Face Modulator (Half Dose) offers a refined approach to facial sculpting using microdosed botulinum toxin. Curated for those under 40, this treatment focuses on preventative contour modulation, delivering natural, soft corrections — not frozen expressions.<br/><br/>Whether it’s jawline slimming, temple lifting, or refining the upper face, this procedure enhances your features without overt volume loss or exaggerated stiffness. It’s about precision, personalization, and respecting your facial identity.<br/><br/>Every Altruva Face Modulator treatment is custom-designed by dr. Olivia Aldisa, integrating anatomical mapping and muscle balance principles to ensure precision, proportion, and preservation of your identity.`,
      id: `Di dunia di mana kehalusan penting, Altruva Face Modulator (Setengah Dosis) menawarkan pendekatan yang halus untuk memahat wajah menggunakan toksin botulinum dosis mikro. Dikurasi untuk mereka yang berusia di bawah 40 tahun, perawatan ini berfokus pada modulasi kontur preventif, memberikan koreksi alami dan lembut — bukan ekspresi beku.<br/><br/>Baik itu pelangsingan garis rahang, pengangkatan pelipis, atau penyempurnaan wajah bagian atas, prosedur ini menyempurnakan fitur Anda tanpa kehilangan volume yang jelas atau kekakuan yang berlebihan. Ini tentang presisi, personalisasi, dan menghormati identitas wajah Anda.<br/><br/>Setiap perawatan Altruva Face Modulator dirancang khusus oleh dr. Olivia Aldisa, mengintegrasikan pemetaan anatomis dan prinsip keseimbangan otot untuk memastikan presisi, proporsi, dan pelestarian identitas Anda.`
    },
    quote: {
      text: {
        en: "The most beautiful result is one no one can point out — but everyone notices. That’s the art of natural beautification.",
        id: "Hasil terindah adalah yang tidak dapat ditunjukkan oleh siapa pun — tetapi semua orang menyadarinya. Itulah seni kecantikan alami."
      },
      author: { en: 'dr. Olivia Aldisa', id: 'dr. Olivia Aldisa' }
    },
    whatIsIt: {
      title: { en: 'How It Works', id: 'Cara Kerjanya' },
      description: {
        en: `Botulinum toxin, in a calibrated half dose, is administered strategically to modulate overactive muscles that contribute to undesirable bulk, heaviness, or downward pull:<br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Jawline:</strong> Slims bulky masseter muscles to enhance V-shape contours and reduce facial width.</li><li><strong>Upper Face:</strong> Softens glabella tension, subtly lifts brows, and prevents early wrinkle formation — all without freezing natural movement.</li></ul>`,
        id: `Toksin botulinum, dalam dosis setengah yang terkalibrasi, diberikan secara strategis untuk memodulasi otot yang terlalu aktif yang berkontribusi pada massa, berat, atau tarikan ke bawah yang tidak diinginkan:<br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Garis Rahang:</strong> Melangsingkan otot masseter yang besar untuk meningkatkan kontur bentuk V dan mengurangi lebar wajah.</li><li><strong>Wajah Bagian Atas:</strong> Melembutkan ketegangan glabella, mengangkat alis secara halus, dan mencegah pembentukan kerutan dini — semua tanpa membekukan gerakan alami.</li></ul>`
      }
    },
    howItDiffers: {
      en: 'For those under 40, smaller doses are ideal to prevent dynamic lines and slow early sagging — while preserving natural expression. Rather than full paralysis, the focus is modulation: dialing down overactivity to reshape, contour, and harmonize facial dynamics. Lower doses mean less risk of asymmetry, frozen looks, or unwanted diffusion. This is bespoke aesthetic medicine — not one-size-fits-all.',
      id: 'Bagi mereka yang berusia di bawah 40 tahun, dosis yang lebih kecil ideal untuk mencegah garis dinamis dan memperlambat kendur dini — sambil menjaga ekspresi alami. Alih-alih kelumpuhan total, fokusnya adalah modulasi: mengurangi aktivitas berlebih untuk membentuk kembali, membentuk kontur, dan menyelaraskan dinamika wajah. Dosis yang lebih rendah berarti risiko asimetri yang lebih kecil, penampilan beku, atau difusi yang tidak diinginkan. Ini adalah pengobatan estetika pesanan — bukan satu ukuran untuk semua.'
    },
    benefits: [
      { en: 'Refines jawline and lower face bulkiness without surgery', id: 'Menghaluskan garis rahang dan massa wajah bagian bawah tanpa operasi' },
      { en: 'Gently lifts the brows and eyes for a more rested expression', id: 'Mengangkat alis dan mata dengan lembut untuk ekspresi yang lebih istirahat' },
      { en: 'Softens frown lines and early crow’s feet', id: 'Melembutkan garis kerutan dan kerutan di sudut mata dini' },
      { en: 'Prevents premature skin laxity and facial aging', id: 'Mencegah kelonggaran kulit prematur dan penuaan wajah' },
      { en: 'Allows natural facial movement — no overdone look', id: 'Memungkinkan gerakan wajah alami — tanpa penampilan berlebihan' },
      { en: 'Minimal downtime with visible changes in 5–10 days', id: 'Waktu henti minimal dengan perubahan yang terlihat dalam 5–10 hari' },
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '15–20 minutes', id: '15–20 menit' } },
      { label: { en: 'Downtime', id: 'Waktu Henti' }, value: { en: 'Minimal to none', id: 'Minimal hingga tidak ada' } },
      { label: { en: 'Longevity', id: 'Daya Tahan' }, value: { en: '3–4 months (may vary)', id: '3–4 bulan (dapat bervariasi)' } },
    ],
    indications: [
      { en: 'Jawline softening (masseter reduction)', id: 'Pelembutan garis rahang (pengurangan masseter)' },
      { en: 'Temple lift or brow support', id: 'Pengangkatan pelipis atau dukungan alis' },
      { en: 'Early wrinkle prevention in glabella, forehead, or crow’s feet', id: 'Pencegahan kerutan dini di glabella, dahi, atau kerutan di sudut mata' },
      { en: 'First-time users or toxin-sensitive skin', id: 'Pengguna pertama kali atau kulit sensitif toksin' },
    ]
  },
  {
    id: 'dermal-fillers',
    title: 'Altruva Dermal Fillers',
    description: { en: 'Minimalist volume enhancement for refined definition.', id: 'Peningkatan volume minimalis untuk definisi yang halus.' },
    price: '6,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Star,
    imageSrc: '/images/services/dermal_filler.jpeg',
    imageHint: 'dermal filler',
    group: 'Altruva Lift',
    groupDescription: { en: 'A sculpted face begins with structural integrity.', id: 'Wajah terpahat dimulai dengan integritas struktural.' },
    subgroup: 'Signature Contouring',
    subtitle: {
      en: 'Refined. Personalized. Anatomically Precise — by dr. Aldisa. Signature Beautification for Under 40s',
      id: 'Halus. Dipersonalisasi. Presisi Anatomis — oleh dr. Aldisa. Kecantikan Khas untuk Usia di Bawah 40-an'
    },
    longDescription: {
      en: `Altruva Dermal Fillers are not about chasing trends — they are about strategic enhancement. This protocol is built on the principle of harmonizing features using subtle, anatomically guided injections to enhance your natural bone structure, soften imbalances, and delay facial aging — before it ever becomes visible.<br/><br/>Led by dr. Olivia Aldisa, a trusted name in anatomical regenerative aesthetics, this treatment is fully personalized and intended for discerning patients under 40 who want refinement, not reinvention.`,
      id: `Altruva Dermal Fillers bukan tentang mengikuti tren — ini tentang peningkatan strategis. Protokol ini dibangun di atas prinsip menyelaraskan fitur menggunakan suntikan halus yang dipandu secara anatomis untuk meningkatkan struktur tulang alami Anda, melembutkan ketidakseimbangan, dan menunda penuaan wajah — sebelum terlihat.<br/><br/>Dipimpin oleh dr. Olivia Aldisa, nama tepercaya dalam estetika regeneratif anatomis, perawatan ini sepenuhnya dipersonalisasi dan ditujukan untuk pasien di bawah 40 tahun yang cerdas yang menginginkan perbaikan, bukan penemuan kembali.`
    },
    quote: {
      text: {
        en: "The most beautiful result is one no one can point out — but everyone notices. That’s the art of natural beautification.",
        id: "Hasil terindah adalah yang tidak dapat ditunjukkan oleh siapa pun — tetapi semua orang menyadarinya. Itulah seni kecantikan alami."
      },
      author: {
        en: "dr. Olivia Aldisa, Facial Architect & Regenerative Strategist",
        id: "dr. Olivia Aldisa, Arsitek Wajah & Ahli Strategi Regeneratif"
      }
    },
    whatIsIt: {
      title: {
        en: 'The Philosophy: Face Optimization Before Correction',
        id: 'Filosofi: Optimasi Wajah Sebelum Koreksi'
      },
      description: {
        en: `Instead of reversing aging, Altruva Dermal Fillers focus on:<br/>
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li>Enhancing natural beauty through proportional feature balancing</li>
        <li>Strengthening the facial foundation to delay sagging and volume loss</li>
        <li>Modulating fat compartments to optimize contour and symmetry</li>
        <li>Supporting prejuvenation with regenerative injection techniques</li>
      </ul>
      <h4 class="font-semibold text-primary mt-4">Treatment Areas May Include:</h4>
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong>Chin:</strong> Subtle projection to define your profile</li>
        <li><strong>Jawline:</strong> Soft contouring for a refined lower face</li>
        <li><strong>Cheeks:</strong> Gentle enhancement for structure and midface lift</li>
        <li><strong>Temples:</strong> Filling deflation for smoother transitions</li>
        <li><strong>Tear Troughs:</strong> Brighten tired-looking eyes (when indicated)</li>
        <li><strong>Lips:</strong> Optional volume or structure without distortion</li>
      </ul>`,
        id: `Alih-alih membalikkan penuaan, Altruva Dermal Fillers berfokus pada:<br/>
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li>Meningkatkan kecantikan alami melalui penyeimbangan fitur proporsional</li>
        <li>Memperkuat fondasi wajah untuk menunda kendur dan kehilangan volume</li>
        <li>Memodulasi kompartemen lemak untuk mengoptimalkan kontur dan simetri</li>
        <li>Mendukung prejuvenation dengan teknik injeksi regeneratif</li>
      </ul>
      <h4 class="font-semibold text-primary mt-4">Area Perawatan Mungkin Termasuk:</h4>
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong>Dagu:</strong> Proyeksi halus untuk mendefinisikan profil Anda</li>
        <li><strong>Garis Rahang:</strong> Kontur lembut untuk wajah bagian bawah yang halus</li>
        <li><strong>Pipi:</strong> Peningkatan lembut untuk struktur dan pengangkatan bagian tengah wajah</li>
        <li><strong>Pelipis:</strong> Mengisi deflasi untuk transisi yang lebih halus</li>
        <li><strong>Kantung Mata:</strong> Mencerahkan mata yang tampak lelah (bila diindikasikan)</li>
        <li><strong>Bibir:</strong> Volume atau struktur opsional tanpa distorsi</li>
      </ul>`
      }
    },
    howItDiffers: {
      en: 'Profile Balancing Approach: Each injection supports aesthetic harmony — not isolated features. Minimalism with Intent: We believe in doing less but doing it precisely. Product Synergy: HA fillers are selected based on elasticity, cohesivity, and area-specific need. Microcannula Precision: Safer and less traumatic delivery for most areas. Regenerative Add-ons: Optionally layered with PRF, PN, or skin boosters for longer-term support.',
      id: 'Pendekatan Penyeimbangan Profil: Setiap suntikan mendukung harmoni estetika — bukan fitur yang terisolasi. Minimalisme dengan Niat: Kami percaya dalam melakukan lebih sedikit tetapi melakukannya dengan tepat. Sinergi Produk: Pengisi HA dipilih berdasarkan elastisitas, kohesivitas, dan kebutuhan spesifik area. Presisi Kanula Mikro: Pengiriman yang lebih aman dan tidak terlalu traumatis untuk sebagian besar area. Tambahan Regeneratif: Secara opsional dilapisi dengan PRF, PN, atau pendorong kulit untuk dukungan jangka panjang.'
    },
    whyLoveIt: [
      { en: "Why Start Fillers Under 40?", id: "Mengapa Memulai Pengisi di Bawah 40 Tahun?" },
      { en: "Early Intervention = Preventative Aging", id: "Intervensi Dini = Penuaan Preventif" },
      { en: "Less Product Needed Over Time", id: "Lebih Sedikit Produk yang Dibutuhkan Seiring Waktu" },
      { en: "More Natural-Looking Results", id: "Hasil yang Terlihat Lebih Alami" },
      { en: "Supports Tissue Integrity Before Breakdown Begins", id: "Mendukung Integritas Jaringan Sebelum Kerusakan Dimulai" }
    ],
    benefits: [
      { en: 'Defines and refines features without exaggeration', id: 'Mendefinisikan dan menghaluskan fitur tanpa berlebihan' },
      { en: 'Enhances facial symmetry and proportions', id: 'Meningkatkan simetri dan proporsi wajah' },
      { en: 'Delays signs of structural aging', id: 'Menunda tanda-tanda penuaan struktural' },
      { en: 'Elevates appearance while preserving authenticity', id: 'Meningkatkan penampilan sambil menjaga keaslian' },
      { en: 'Boosts confidence through soft, visible enhancement', id: 'Meningkatkan kepercayaan diri melalui peningkatan yang lembut dan terlihat' },
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '30–60 minutes', id: '30–60 menit' } },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'Minimal – may include temporary swelling or bruising', id: 'Minimal – mungkin termasuk pembengkakan atau memar sementara' }
      },
      {
        label: { en: 'Results', id: 'Hasil' },
        value: { en: 'Immediate structural enhancement; softens within 1–2 weeks', id: 'Peningkatan struktural langsung; melembut dalam 1–2 minggu' }
      },
      {
        label: { en: 'Longevity', id: 'Daya Tahan' },
        value: { en: '9 to 18 months, depending on product and area', id: '9 hingga 18 bulan, tergantung pada produk dan area' }
      },
      {
        label: { en: 'Technique', id: 'Teknik' },
        value: { en: 'Microcannula and needle, based on area and goals', id: 'Kanula mikro dan jarum, berdasarkan area dan tujuan' }
      },
      {
        label: { en: 'Customization', id: 'Kustomisasi' },
        value: { en: 'Fully tailored, with comprehensive facial analysis', id: 'Sepenuhnya disesuaikan, dengan analisis wajah yang komprehensif' }
      },
    ]
  },

  // --- Rejuvenation (> 40) ---
  {
    id: 'exoprime-pro',
    title: 'Altruva Exoprime Pro',
    description: { en: 'Deep regenerative exosome therapy.', id: 'Terapi eksosom regeneratif dalam.' },
    price: '4,500,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: '/images/services/ExoprimePro.jpg',
    imageHint: 'exosome therapy',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
      id: 'Penuaan adalah pergeseran, bukan pemberhentian. Altruva Glow merevitalisasi fungsi kulit, memastikan kekencangan, ketahanan, dan pancaran jangka panjang.'
    },
    subgroup: 'Skingeneering Boosters',
    subtitle: { en: 'Origin & Purity', id: 'Asal & Kemurnian' },
    longDescription: {
      en: 'Altruva Exoprime Pro is an advanced, non-invasive regenerative treatment leveraging the science of exosomes to enhance skin health, promote rejuvenation, and support hair vitality. Exosomes are microscopic vesicles naturally secreted by cells, rich in bioactive compounds such as proteins, lipids, mRNA, and microRNAs—essential for cellular communication and repair. These vesicles act as messengers, triggering key biological processes that lead to improved skin texture, reduced inflammation and pigmentation, enhanced wound healing, and stimulation of hair growth.',
      id: 'Altruva Exoprime Pro adalah perawatan regeneratif non-invasif canggih yang memanfaatkan ilmu eksosom untuk meningkatkan kesehatan kulit, mendorong peremajaan, dan mendukung vitalitas rambut. Eksosom adalah vesikel mikroskopis yang disekresikan secara alami oleh sel, kaya akan senyawa bioaktif seperti protein, lipid, mRNA, dan mikroRNA—penting untuk komunikasi dan perbaikan seluler. Vesikel ini bertindak sebagai pembawa pesan, memicu proses biologis utama yang mengarah pada perbaikan tekstur kulit, mengurangi peradangan dan pigmentasi, meningkatkan penyembuhan luka, dan merangsang pertumbuhan rambut.'
    },
    whatIsIt: {
      title: { en: 'Core Applications', id: 'Aplikasi Inti' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li>Skin Rejuvenation</li><li>Wound and Scar Repair</li><li>Anti-aging and Texture Refinement</li><li>Hair Restoration and Scalp Revitalization</li></ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li>Peremajaan Kulit</li><li>Perbaikan Luka dan Bekas Luka</li><li>Anti-penuaan dan Perbaikan Tekstur</li><li>Restorasi Rambut dan Revitalisasi Kulit Kepala</li></ul>`
      }
    },
    mechanism: [
      {
        title: { en: 'Boosts Collagen & Elastin', id: 'Meningkatkan Kolagen & Elastin' },
        description: {
          en: 'Supports dermal remodeling by accelerating fibroblast activity',
          id: 'Mendukung perombakan dermal dengan mempercepat aktivitas fibroblas'
        }
      },
      {
        title: { en: 'Neutralizes Free Radicals', id: 'Menetralkan Radikal Bebas' },
        description: {
          en: 'Reduces oxidative stress from pollution, UV, and internal aging',
          id: 'Mengurangi stres oksidatif dari polusi, UV, dan penuaan internal'
        }
      },
      {
        title: { en: 'Improves Skin Texture', id: 'Meningkatkan Tekstur Kulit' },
        description: { en: 'Softens unevenness, smoothens skin surface', id: 'Melembutkan ketidakrataan, menghaluskan permukaan kulit' }
      },
      {
        title: { en: 'Deep Skin Hydration', id: 'Hidrasi Kulit Mendalam' },
        description: {
          en: 'Enhances water retention and replenishes the extracellular matrix',
          id: 'Meningkatkan retensi air dan mengisi kembali matriks ekstraseluler'
        }
      },
      {
        title: { en: 'Enhances Microcirculation', id: 'Meningkatkan Sirkulasi Mikro' },
        description: {
          en: 'Improves oxygenation and nutrient flow for a lit-from-within glow',
          id: 'Meningkatkan oksigenasi dan aliran nutrisi untuk kilau dari dalam'
        }
      },
      {
        title: { en: 'Supports Skin Recovery', id: 'Mendukung Pemulihan Kulit' },
        description: {
          en: 'Ideal for post-laser, peeling, or stress-related skin fatigue',
          id: 'Ideal untuk pasca-laser, pengelupasan, atau kelelahan kulit terkait stres'
        }
      },
    ],
    benefits: [
      { en: 'Supports accelerated skin repair and regeneration', id: 'Mendukung perbaikan dan regenerasi kulit yang dipercepat' },
      { en: 'Minimizes fine lines and wrinkles', id: 'Meminimalkan garis-garis halus dan kerutan' },
      { en: 'Improves skin elasticity, tone, and resilience', id: 'Meningkatkan elastisitas, warna, dan ketahanan kulit' },
      { en: 'Boosts collagen synthesis and fibroblast activity', id: 'Meningkatkan sintesis kolagen dan aktivitas fibroblas' },
      { en: 'Enhances overall texture and luminosity', id: 'Meningkatkan tekstur dan luminositas secara keseluruhan' },
      { en: 'Strengthens hair structure and shaft integrity', id: 'Memperkuat struktur rambut dan integritas batang' },
      { en: 'Promotes accelerated hair growth', id: 'Mendorong pertumbuhan rambut yang dipercepat' },
      { en: 'Reduces excessive shedding', id: 'Mengurangi kerontokan berlebihan' },
      { en: 'Optimizes scalp condition for healthier follicles', id: 'Mengoptimalkan kondisi kulit kepala untuk folikel yang lebih sehat' },
    ],
    whyLoveIt: [
      {
        en: '<strong>Synergistic with Energy-Based Devices:</strong> Ideal as a post-treatment bio-repair system following microneedling, lasers, or RF—enhancing outcomes and reducing downtime.',
        id: '<strong>Sinergis dengan Perangkat Berbasis Energi:</strong> Ideal sebagai sistem bio-perbaikan pasca-perawatan setelah microneedling, laser, atau RF—meningkatkan hasil dan mengurangi waktu henti.'
      },
      {
        en: '<strong>Scientifically Validated:</strong> Rigorously tested and developed under stringent laboratory protocols, ensuring quality, safety, and efficacy.',
        id: '<strong>Divalidasi Secara Ilmiah:</strong> Diuji dan dikembangkan secara ketat di bawah protokol laboratorium yang ketat, memastikan kualitas, keamanan, dan kemanjuran.'
      },
      {
        en: '<strong>Visible, Long-Lasting Results:</strong> Improvements are often visible within a week. With consistent use (minimum 3 sessions), results may last 6–12 months depending on individual skin conditions and treatment protocols.',
        id: '<strong>Hasil yang Terlihat dan Tahan Lama:</strong> Perbaikan seringkali terlihat dalam seminggu. Dengan penggunaan yang konsisten (minimal 3 sesi), hasil dapat bertahan 6–12 bulan tergantung pada kondisi kulit individu dan protokol perawatan.'
      }
    ]
  },
  {
    id: 'dna-repair-pro',
    title: 'Altruva DNA Repair Pro',
    description: { en: 'Reinforces skin’s cellular repair system.', id: 'Memperkuat sistem perbaikan seluler kulit.' },
    subtitle: {
      en: 'Advanced Polynucleotide Skin Regeneration by dr. Aldisa',
      id: 'Regenerasi Kulit Polinukleotida Canggih oleh dr. Aldisa'
    },
    longDescription: {
      en: `Altruva DNA Repair Pro is a next-generation regenerative protocol powered by Polynucleotides (PN) — clinically purified DNA fragments that stimulate deep dermal healing, reverse cellular fatigue, and restore skin architecture from the inside out. Far beyond hydration, this treatment reactivates fibroblasts, encourages collagen remodeling, and reestablishes skin homeostasis — making it a cornerstone for age-related skin degeneration, post-acne scarring, and periocular rejuvenation.`,
      id: 'Altruva DNA Repair Pro adalah protokol regeneratif generasi berikutnya yang didukung oleh Polinukleotida (PN) — fragmen DNA yang dimurnikan secara klinis yang merangsang penyembuhan dermal dalam, membalikkan kelelahan seluler, dan memulihkan arsitektur kulit dari dalam ke luar. Jauh melampaui hidrasi, perawatan ini mengaktifkan kembali fibroblas, mendorong perombakan kolagen, dan membangun kembali homeostasis kulit — menjadikannya landasan untuk degenerasi kulit terkait usia, bekas luka pasca-jerawat, dan peremajaan periokular.'
    },
    price: '7,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Shield,
    imageSrc: '/images/services/dnarepairpro.jpg',
    imageHint: 'cellular repair',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
      id: 'Penuaan adalah pergeseran, bukan pemberhentian. Altruva Glow merevitalisasi fungsi kulit, memastikan kekencangan, ketahanan, dan pancaran jangka panjang.'
    },
    subgroup: 'Skingeneering Boosters',
    quote: {
      text: {
        en: "DNA Repair isn’t just about reversing aging — it’s about restoring vitality at a cellular level. That’s regenerative beauty.",
        id: "Perbaikan DNA bukan hanya tentang membalikkan penuaan — ini tentang memulihkan vitalitas pada tingkat seluler. Itulah kecantikan regeneratif."
      },
      author: {
        en: "dr. Olivia Aldisa, Facial Architect & Cellular Rejuvenation Specialist",
        id: "dr. Olivia Aldisa, Arsitek Wajah & Spesialis Peremajaan Seluler"
      }
    },
    whatIsIt: {
      title: { en: 'What Are Polynucleotides (PN)?', id: 'Apa Itu Polinukleotida (PN)?' },
      description: {
        en: 'Polynucleotides are DNA-derived biopolymers extracted and purified from fish sources (with high biocompatibility). When injected into the skin, they act as powerful biomodulators, awakening fibroblasts and enhancing microcirculation — laying the foundation for true skin renewal, not just temporary glow.',
        id: 'Polinukleotida adalah biopolimer turunan DNA yang diekstraksi dan dimurnikan dari sumber ikan (dengan biokompatibilitas tinggi). Ketika disuntikkan ke dalam kulit, mereka bertindak sebagai biomodulator yang kuat, membangunkan fibroblas dan meningkatkan sirkulasi mikro — meletakkan dasar untuk pembaruan kulit sejati, bukan hanya kilau sementara.'
      },
    },
    mechanism: [
      {
        title: { en: 'Fibroblast Activation', id: 'Aktivasi Fibroblas' },
        description: {
          en: 'Stimulates dermal fibroblasts to enhance collagen, elastin, and extracellular matrix (ECM) synthesis.',
          id: 'Merangsang fibroblas dermal untuk meningkatkan sintesis kolagen, elastin, dan matriks ekstraseluler (ECM).'
        }
      },
      {
        title: { en: 'Tissue Repair & Remodeling', id: 'Perbaikan & Perombakan Jaringan' },
        description: {
          en: 'Reactivates damaged skin cells, restores cutaneous density, and accelerates wound healing at the cellular level.',
          id: 'Mengaktifkan kembali sel-sel kulit yang rusak, mengembalikan kepadatan kulit, dan mempercepat penyembuhan luka pada tingkat seluler.'
        }
      },
      {
        title: { en: 'Hydration & Barrier Support', id: 'Dukungan Hidrasi & Penghalang' },
        description: {
          en: 'Increases water retention and strengthens the skin’s defense mechanisms against oxidative stress and pollution.',
          id: 'Meningkatkan retensi air dan memperkuat mekanisme pertahanan kulit terhadap stres oksidatif dan polusi.'
        }
      },
      {
        title: { en: 'Angiogenesis & Oxygenation', id: 'Angiogenesis & Oksigenasi' },
        description: {
          en: 'Improves microvascular perfusion, supporting brighter tone and healthier skin metabolism.',
          id: 'Meningkatkan perfusi mikrovaskular, mendukung warna kulit yang lebih cerah dan metabolisme kulit yang lebih sehat.'
        }
      },
    ],
    benefits: [
      { en: 'Smooths fine lines and early wrinkles', id: 'Menghaluskan garis-garis halus dan kerutan dini' },
      { en: 'Improves skin laxity and firmness', id: 'Meningkatkan kelonggaran dan kekencangan kulit' },
      { en: 'Brightens dull, fatigued skin', id: 'Mencerahkan kulit kusam dan lelah' },
      { en: 'Reduces acne scars and post-inflammatory pigmentation', id: 'Mengurangi bekas jerawat dan pigmentasi pasca-inflamasi' },
      { en: 'Revives under-eye hollowness and crepey texture', id: 'Menghidupkan kembali kekosongan di bawah mata dan tekstur keriput' },
      { en: 'Supports recovery post-laser or peeling', id: 'Mendukung pemulihan pasca-laser atau pengelupasan' },
      { en: 'Safe for sensitive, inflamed, or barrier-compromised skin', id: 'Aman untuk kulit sensitif, meradang, atau dengan penghalang yang terganggu' }
    ],
    indications: [
      { en: 'Early to moderate signs of aging', id: 'Tanda-tanda penuaan dini hingga sedang' },
      { en: 'Periorbital and perioral fine lines', id: 'Garis-garis halus periorbital dan perioral' },
      { en: 'Acne scarring and skin trauma', id: 'Bekas jerawat dan trauma kulit' },
      { en: 'Chronically dry or sensitive skin', id: 'Kulit kering atau sensitif kronis' },
      {
        en: 'Preparation or recovery from energy-based treatments (laser, RF, ultrasound)',
        id: 'Persiapan atau pemulihan dari perawatan berbasis energi (laser, RF, ultrasound)'
      },
      { en: 'Maintenance post-fillers or threads', id: 'Pemeliharaan pasca-pengisi atau benang' }
    ],
    protocol: [
      { label: { en: 'Session Time', id: 'Waktu Sesi' }, value: { en: '20–30 minutes', id: '20–30 menit' } },
      {
        label: { en: 'Protocol', id: 'Protokol' },
        value: { en: '3–4 sessions spaced 2–3 weeks apart', id: '3–4 sesi dengan jarak 2–3 minggu' }
      },
      { label: { en: 'Maintenance', id: 'Pemeliharaan' }, value: { en: 'Every 4–6 months', id: 'Setiap 4–6 bulan' } },
      { label: { en: 'Delivery', id: 'Pengiriman' }, value: { en: 'Microinjections or papule technique', id: 'Teknik suntikan mikro atau papula' } },
      {
        label: { en: 'Add-ons', id: 'Tambahan' },
        value: {
          en: 'Safe to layer with PN eye, PRF, Cellbooster, or light energy devices',
          id: 'Aman untuk dilapisi dengan mata PN, PRF, Cellbooster, atau perangkat energi cahaya'
        }
      },
    ],
    howItDiffers: {
      en: 'Unlike hyaluronic acid fillers that volumize, Altruva DNA Repair Pro works at the cellular and structural level — healing, rebuilding, and reviving skin tissues. Think foundation first, not just finishing touch.',
      id: 'Tidak seperti pengisi asam hialuronat yang memberi volume, Altruva DNA Repair Pro bekerja pada tingkat seluler dan struktural — menyembuhkan, membangun kembali, dan menghidupkan kembali jaringan kulit. Pikirkan fondasi terlebih dahulu, bukan hanya sentuhan akhir.'
    },
    whyLoveIt: [
      { en: 'Non-volumizing, natural result', id: 'Hasil alami tanpa volume' },
      { en: 'Low risk of puffiness or asymmetry', id: 'Risiko rendah bengkak atau asimetri' },
      { en: 'Science-based safety with a long safety profile', id: 'Keamanan berbasis sains dengan profil keamanan yang panjang' },
      { en: 'Suitable for multiple areas: face, neck, under-eyes, and décolleté', id: 'Cocok untuk berbagai area: wajah, leher, bawah mata, dan décolleté' },
      {
        en: 'Noticeably improved skin texture, bounce, and resilience within weeks',
        id: 'Tekstur kulit, kekenyalan, dan ketahanan yang terlihat membaik dalam beberapa minggu'
      }
    ]
  },
  {
    id: 'dna-repair-eye',
    title: 'Altruva DNA Repair Eye',
    description: {
      en: 'Reinforces skin’s cellular repair system for undereye area.',
      id: 'Memperkuat sistem perbaikan seluler kulit untuk area bawah mata.'
    },
    subtitle: {
      en: 'Targeted Polynucleotide Eye Regeneration – Tailored by dr. Aldisa',
      id: 'Regenerasi Mata Polinukleotida Bertarget – Disesuaikan oleh dr. Aldisa'
    },
    longDescription: {
      en: `Altruva DNA Repair Eye is a specialized micro-regeneration protocol powered by ultra-purified polynucleotides (PN) designed specifically for the delicate under-eye area. Crafted to combat dark circles, fine lines, volume thinning, and crepey texture, this treatment reactivates cellular vitality while hydrating and restoring periocular firmness — without puffiness or unnatural volume.<br/><br/>This is not a filler — this is cellular awakening for tired, aging eyes.`,
      id: `Altruva DNA Repair Eye adalah protokol mikro-regenerasi khusus yang didukung oleh polinukleotida (PN) ultra-murni yang dirancang khusus untuk area bawah mata yang halus. Dibuat untuk memerangi lingkaran hitam, garis-garis halus, penipisan volume, dan tekstur keriput, perawatan ini mengaktifkan kembali vitalitas seluler sambil menghidrasi dan memulihkan kekencangan periokular — tanpa bengkak atau volume yang tidak alami.<br/><br/>Ini bukan pengisi — ini adalah kebangkitan seluler untuk mata yang lelah dan menua.`
    },
    price: '5,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Shield,
    imageSrc: '/images/services/eyerepair.jpg',
    imageHint: 'eye treatment',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
      id: 'Penuaan adalah pergeseran, bukan pemberhentian. Altruva Glow merevitalisasi fungsi kulit, memastikan kekencangan, ketahanan, dan pancaran jangka panjang.'
    },
    subgroup: 'Skingeneering Boosters',
    quote: {
      text: {
        en: "The eyes are where fatigue, age, and emotion show first. DNA Repair Eye restores their language to one of radiance.",
        id: "Mata adalah tempat kelelahan, usia, dan emosi pertama kali terlihat. DNA Repair Eye mengembalikan bahasa mereka menjadi salah satu pancaran."
      },
      author: { en: "dr. Olivia Aldisa, Periocular Harmony Specialist", id: "dr. Olivia Aldisa, Spesialis Harmoni Periokular" }
    },
    whatIsIt: {
      title: { en: 'How Altruva DNA Repair Eye Works', id: 'Cara Kerja Altruva DNA Repair Eye' },
      description: {
        en: `The periorbital region is thinner, more vascular, and more prone to early aging due to its fragility and constant micro-movement. Conventional injectables often fail here due to the risk of Tyndall effect, puffiness, or migration. Polynucleotides, with their regenerative but non-volumizing action, offer the ideal solution for this high-risk zone. They work by:
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong>Polynucleotide Power (PN):</strong> DNA fragments derived from marine origin stimulate fibroblast proliferation, enhancing collagen and elastin synthesis while repairing extracellular matrix integrity.</li>
        <li><strong>Microcirculation Activation:</strong> Improves oxygen and nutrient flow in the infraorbital area — reducing dark circles and dullness caused by stagnation or vascular congestion.</li>
        <li><strong>Fibrillar Regeneration:</strong> Targets thinning dermis, reinforcing skin structure without the heaviness of fillers.</li>
        <li><strong>Barrier Protection & Hydration:</strong> Enhances skin’s own hyaluronic acid production, restoring hydration and comfort to dry or sensitive under-eyes.</li>
      </ul>`,
        id: `Daerah periorbital lebih tipis, lebih vaskular, dan lebih rentan terhadap penuaan dini karena kerapuhannya dan gerakan mikro yang konstan. Suntikan konvensional seringkali gagal di sini karena risiko efek Tyndall, bengkak, atau migrasi. Polinukleotida, dengan tindakan regeneratif tetapi non-volumizingnya, menawarkan solusi ideal untuk zona berisiko tinggi ini. Mereka bekerja dengan:
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong>Kekuatan Polinukleotida (PN):</strong> Fragmen DNA yang berasal dari laut merangsang proliferasi fibroblas, meningkatkan sintesis kolagen dan elastin sambil memperbaiki integritas matriks ekstraseluler.</li>
        <li><strong>Aktivasi Sirkulasi Mikro:</strong> Meningkatkan aliran oksigen dan nutrisi di area infraorbital — mengurangi lingkaran hitam dan kekusaman yang disebabkan oleh stagnasi atau kongesti vaskular.</li>
        <li><strong>Regenerasi Fibrillar:</strong> Menargetkan dermis yang menipis, memperkuat struktur kulit tanpa berat pengisi.</li>
        <li><strong>Perlindungan Penghalang & Hidrasi:</strong> Meningkatkan produksi asam hialuronat kulit sendiri, mengembalikan hidrasi dan kenyamanan pada mata yang kering atau sensitif.</li>
      </ul>`
      }
    },
    benefits: [
      { en: 'Reduces dark circles and vascular shadows', id: 'Mengurangi lingkaran hitam dan bayangan vaskular' },
      { en: 'Smooths fine lines and crêpey texture', id: 'Menghaluskan garis-garis halus dan tekstur keriput' },
      { en: 'Tightens and firms thinning under-eye skin', id: 'Mengencangkan dan menguatkan kulit bawah mata yang menipis' },
      { en: 'Restores radiance to tired eyes', id: 'Mengembalikan pancaran pada mata yang lelah' },
      { en: 'Safe for use in tear troughs and eyelid junctions', id: 'Aman untuk digunakan di kantung mata dan persimpangan kelopak mata' },
      { en: 'Non-puffy, filler-free eye rejuvenation', id: 'Peremajaan mata bebas pengisi dan tidak bengkak' },
      { en: 'Gentle, natural outcome with zero distortion', id: 'Hasil alami yang lembut tanpa distorsi' }
    ],
    protocol: [
      { label: { en: 'Session Duration', id: 'Durasi Sesi' }, value: { en: '15–20 minutes', id: '15–20 menit' } },
      {
        label: { en: 'Protocol', id: 'Protokol' },
        value: { en: '3–4 sessions spaced 2–3 weeks apart', id: '3–4 sesi dengan jarak 2–3 minggu' }
      },
      { label: { en: 'Longevity', id: 'Daya Tahan' }, value: { en: '6–9 months (may vary)', id: '6–9 bulan (dapat bervariasi)' } },
      {
        label: { en: 'Technique', id: 'Teknik' },
        value: { en: 'Microinjection or microbolus', id: 'Suntikan mikro atau mikrobolus' }
      },
      {
        label: { en: 'Layering Option', id: 'Opsi Pelapisan' },
        value: {
          en: 'Safe to combine with PRF, skin boosters, or laser-based rejuvenation',
          id: 'Aman untuk digabungkan dengan PRF, pendorong kulit, atau peremajaan berbasis laser'
        }
      },
    ],
    whyLoveIt: [
      { en: 'Zero Tyndall Risk: No blue hue or light reflection', id: 'Risiko Tyndall Nol: Tidak ada warna biru atau pantulan cahaya' },
      { en: 'Volume-Free Approach: No risk of puffiness or overcorrection', id: 'Pendekatan Bebas Volume: Tidak ada risiko bengkak atau koreksi berlebihan' },
      { en: 'Science-Based Safety: Derived from sterile, bio-purified DNA', id: 'Keamanan Berbasis Sains: Berasal dari DNA steril yang dimurnikan secara hayati' },
      {
        en: 'Proven Regeneration: Backed by clinical evidence on dermal repair and collagen activation',
        id: 'Regenerasi Terbukti: Didukung oleh bukti klinis tentang perbaikan dermal dan aktivasi kolagen'
      }
    ]
  },
  {
    id: 'amino-booster',
    title: 'Altruva Amino Booster',
    description: {
      en: 'Dermal protein replenishment for enhanced density.',
      id: 'Pengisian protein dermal untuk kepadatan yang ditingkatkan.'
    },
    price: '6,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Droplets,
    imageSrc: '/images/services/aminobooster.jpeg',
    imageHint: 'skin density',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
      id: 'Penuaan adalah pergeseran, bukan pemberhentian. Altruva Glow merevitalisasi fungsi kulit, memastikan kekencangan, ketahanan, dan pancaran jangka panjang.'
    },
    subgroup: 'Skingeneering Boosters',
    subtitle: {
      en: 'Smart Skin Recharging with Hyaluronic Acid, Amino Acids & Vitamins',
      id: 'Pengisian Ulang Kulit Cerdas dengan Asam Hialuronat, Asam Amino & Vitamin'
    },
    longDescription: {
      en: `Altruva Amino Booster is a multi-functional skinboosters protocol formulated to restore vitality, elasticity, and hydration to the skin. This intradermal injectable cocktail contains hyaluronic acid, essential amino acids, and skin-repairing vitamins, designed to revive dull, tired, and aging skin from the inside out.<br/><br/>It’s more than a glow treatment — it’s cellular nutrition that rewires how your skin behaves.`,
      id: `Altruva Amino Booster adalah protokol skinbooster multi-fungsi yang diformulasikan untuk mengembalikan vitalitas, elastisitas, dan hidrasi pada kulit. Koktail suntik intradermal ini mengandung asam hialuronat, asam amino esensial, dan vitamin perbaikan kulit, yang dirancang untuk menghidupkan kembali kulit kusam, lelah, dan menua dari dalam ke luar.<br/><br/>Ini lebih dari sekadar perawatan kilau — ini adalah nutrisi seluler yang mengubah cara kulit Anda berperilaku.`
    },
    quote: {
      text: {
        en: "Think of it as your skin’s daily supplement — but delivered with clinical precision for real transformation.",
        id: "Anggap saja ini suplemen harian kulit Anda — tetapi diberikan dengan presisi klinis untuk transformasi nyata."
      },
      author: { en: "dr. Olivia Aldisa, Altruva Clinical Director", id: "dr. Olivia Aldisa, Direktur Klinis Altruva" }
    },
    whatIsIt: {
      title: { en: 'What’s Inside & Why It Matters', id: 'Apa Isinya & Mengapa Itu Penting' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;"><li><h4 class="font-semibold text-primary">Hyaluronic Acid</h4><p>Deeply hydrates and plumps the dermis, reducing fine lines</p></li><li><h4 class="font-semibold text-primary">Amino Acids</h4><p>Fundamental for collagen synthesis, skin repair, and resilience</p></li><li><h4 class="font-semibold text-primary">Vitamins (B-complex, C, E)</h4><p>Protects against oxidative stress, supports microcirculation, boosts glow</p></li></ul><p class="mt-4">Together, they reactivate your skin’s metabolic engine for healthier structure, tone, and function.</p>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;"><li><h4 class="font-semibold text-primary">Asam Hialuronat</h4><p>Menghidrasi secara mendalam dan mengenyalkan dermis, mengurangi garis-garis halus</p></li><li><h4 class="font-semibold text-primary">Asam Amino</h4><p>Dasar untuk sintesis kolagen, perbaikan kulit, dan ketahanan</p></li><li><h4 class="font-semibold text-primary">Vitamin (B-kompleks, C, E)</h4><p>Melindungi dari stres oksidatif, mendukung sirkulasi mikro, meningkatkan kilau</p></li></ul><p class="mt-4">Bersama-sama, mereka mengaktifkan kembali mesin metabolisme kulit Anda untuk struktur, warna, dan fungsi yang lebih sehat.</p>`
      }
    },
    mechanism: [
      {
        title: { en: 'Boosts Collagen & Elastin', id: 'Meningkatkan Kolagen & Elastin' },
        description: {
          en: 'Supports dermal remodeling by accelerating fibroblast activity',
          id: 'Mendukung perombakan dermal dengan mempercepat aktivitas fibroblas'
        }
      },
      {
        title: { en: 'Neutralizes Free Radicals', id: 'Menetralkan Radikal Bebas' },
        description: {
          en: 'Reduces oxidative stress from pollution, UV, and internal aging',
          id: 'Mengurangi stres oksidatif dari polusi, UV, dan penuaan internal'
        }
      },
      {
        title: { en: 'Improves Skin Texture', id: 'Meningkatkan Tekstur Kulit' },
        description: { en: 'Softens unevenness, smoothens skin surface', id: 'Melembutkan ketidakrataan, menghaluskan permukaan kulit' }
      },
      {
        title: { en: 'Deep Skin Hydration', id: 'Hidrasi Kulit Mendalam' },
        description: {
          en: 'Enhances water retention and replenishes the extracellular matrix',
          id: 'Meningkatkan retensi air dan mengisi kembali matriks ekstraseluler'
        }
      },
      {
        title: { en: 'Enhances Microcirculation', id: 'Meningkatkan Sirkulasi Mikro' },
        description: {
          en: 'Improves oxygenation and nutrient flow for a lit-from-within glow',
          id: 'Meningkatkan oksigenasi dan aliran nutrisi untuk kilau dari dalam'
        }
      },
      {
        title: { en: 'Supports Skin Recovery', id: 'Mendukung Pemulihan Kulit' },
        description: {
          en: 'Ideal for post-laser, peeling, or stress-related skin fatigue',
          id: 'Ideal untuk pasca-laser, pengelupasan, atau kelelahan kulit terkait stres'
        }
      },
    ],
    benefits: [
      { en: 'Improves skin elasticity and hydration', id: 'Meningkatkan elastisitas dan hidrasi kulit' },
      { en: 'Softens fine lines and crepey texture', id: 'Melembutkan garis-garis halus dan tekstur keriput' },
      { en: 'Brightens dull complexion', id: 'Mencerahkan kulit kusam' },
      { en: 'Supports skin regeneration and tissue repair', id: 'Mendukung regenerasi kulit dan perbaikan jaringan' },
      { en: 'Enhances firmness and barrier resilience', id: 'Meningkatkan kekencangan dan ketahanan penghalang' },
      {
        en: 'Well tolerated, with minimal downtime and suitable for all skin types',
        id: 'Dapat ditoleransi dengan baik, dengan waktu henti minimal dan cocok untuk semua jenis kulit'
      }
    ],
    indications: [
      {
        en: '40+ patients showing early signs of collagen loss or dullness',
        id: 'Pasien 40+ yang menunjukkan tanda-tanda awal kehilangan kolagen atau kekusaman'
      },
      { en: 'Those with fatigue-induced skin damage', id: 'Mereka dengan kerusakan kulit akibat kelelahan' },
      {
        en: 'Patients undergoing skin repair programs after laser, sun exposure, or pollution',
        id: 'Pasien yang menjalani program perbaikan kulit setelah laser, paparan sinar matahari, atau polusi'
      },
      {
        en: 'Individuals with textural irregularities, dehydration, or pigmentary imbalance',
        id: 'Individu dengan ketidakteraturan tekstur, dehidrasi, atau ketidakseimbangan pigmentasi'
      },
    ],
    protocol: [
      {
        label: { en: 'Initial Program', id: 'Program Awal' },
        value: { en: '3–4 sessions, spaced 2–3 weeks apart', id: '3–4 sesi, dengan jarak 2–3 minggu' }
      },
      {
        label: { en: 'Injection Techniques', id: 'Teknik Injeksi' },
        value: { en: 'Papular, microbolus, linear retrograde', id: 'Papular, mikrobolus, retrograd linier' }
      },
      {
        label: { en: 'Maintenance', id: 'Pemeliharaan' },
        value: { en: 'Every 2–3 months as skin maintenance', id: 'Setiap 2–3 bulan sebagai pemeliharaan kulit' }
      },
    ]
  },
  {
    id: 'melabooster',
    title: 'Altruva Mela-Boosters',
    description: { en: 'Powerful melanin modulation.', id: 'Modulasi melanin yang kuat.' },
    price: '4,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Sun,
    imageSrc: '/images/services/melabooster.jpg',
    imageHint: 'pigmentation treatment',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
      id: 'Penuaan adalah pergeseran, bukan pemberhentian. Altruva Glow merevitalisasi fungsi kulit, memastikan kekencangan, ketahanan, dan pancaran jangka panjang.'
    },
    subgroup: 'Skingeneering Boosters',
    subtitle: {
      en: 'Brightening Science for Stubborn Pigmentation',
      id: 'Ilmu Pencerahan untuk Pigmentasi yang Membandel'
    },
    longDescription: {
      en: 'Altruva Mela-Boosters is an advanced depigmenting protocol specifically formulated to treat melasma and persistent hyperpigmentation in Asian skin. By synergistically combining the brightening power of Vitamin C, Arbutin, Succinic Acid, and Mulberry Extracts, this multi-targeted treatment works to suppress melanin production, accelerate cellular repair, and calm low-grade inflammation that often exacerbates pigmentation.<br/><br/>Melasma affects both physical appearance and emotional well-being. It often causes reduced self-confidence and may be accompanied by symptoms such as itchiness, dryness, or a mild burning sensation.',
      id: 'Altruva Mela-Boosters adalah protokol depigmentasi canggih yang diformulasikan khusus untuk mengobati melasma dan hiperpigmentasi persisten pada kulit Asia. Dengan menggabungkan secara sinergis kekuatan pencerahan dari Vitamin C, Arbutin, Asam Suksinat, dan Ekstrak Mulberry, perawatan multi-target ini bekerja untuk menekan produksi melanin, mempercepat perbaikan seluler, dan menenangkan peradangan tingkat rendah yang sering memperburuk pigmentasi.<br/><br/>Melasma memengaruhi penampilan fisik dan kesejahteraan emosional. Ini sering menyebabkan penurunan kepercayaan diri dan dapat disertai dengan gejala seperti gatal, kering, atau sensasi terbakar ringan.'
    },
    whatIsIt: {
      title: { en: 'Key Active Ingredients', id: 'Bahan Aktif Utama' },
      description: {
        en: `These four components are designed to work synergistically—not only reducing visible pigmentation but also restoring healthy skin structure from within.<br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Vitamin C:</strong> A powerful antioxidant that inhibits tyrosinase activity and promotes collagen synthesis.</li><li><strong>Arbutin:</strong> A gentle melanin-suppressing brightener with minimal irritation risk.</li><li><strong>Succinic Acid:</strong> A natural derivative with anti-inflammatory and antioxidant benefits.</li><li><strong>Mulberry Extract:</strong> A botanical ingredient that brightens skin, soothes irritation, and protects DNA from damage.</li></ul>`,
        id: `Keempat komponen ini dirancang untuk bekerja secara sinergis—tidak hanya mengurangi pigmentasi yang terlihat tetapi juga memulihkan struktur kulit yang sehat dari dalam.<br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Vitamin C:</strong> Antioksidan kuat yang menghambat aktivitas tirosinase dan mendorong sintesis kolagen.</li><li><strong>Arbutin:</strong> Pencerah penekan melanin yang lembut dengan risiko iritasi minimal.</li><li><strong>Asam Suksinat:</strong> Turunan alami dengan manfaat anti-inflamasi dan antioksidan.</li><li><strong>Ekstrak Mulberry:</strong> Bahan botani yang mencerahkan kulit, menenangkan iritasi, dan melindungi DNA dari kerusakan.</li></ul>`
      }
    },
    mechanism: [
      {
        title: { en: 'Inhibits Tyrosinase', id: 'Menghambat Tirosinase' },
        description: { en: 'Blocks the key enzyme involved in melanin synthesis.', id: 'Memblokir enzim kunci yang terlibat dalam sintesis melanin.' }
      },
      {
        title: { en: 'Reduces Micro-inflammation', id: 'Mengurangi Mikro-inflamasi' },
        description: { en: 'Calms the low-grade inflammation that often triggers melasma flare-ups.', id: 'Menenangkan peradangan tingkat rendah yang sering memicu kambuhnya melasma.' }
      },
      {
        title: { en: 'Soothes UV-Induced Irritation', id: 'Menenangkan Iritasi Akibat UV' },
        description: { en: 'Calms sensitivity from sun exposure and harsh products.', id: 'Menenangkan sensitivitas dari paparan sinar matahari dan produk keras.' }
      },
      {
        title: { en: 'Accelerates Skin Regeneration', id: 'Mempercepat Regenerasi Kulit' },
        description: { en: 'Enables faster fading of dark spots by promoting cellular turnover.', id: 'Memungkinkan memudarnya bintik hitam lebih cepat dengan mempromosikan pergantian sel.' }
      },
      {
        title: { en: 'Safe for Sensitive Skin', id: 'Aman untuk Kulit Sensitif' },
        description: { en: 'Suitable for all Fitzpatrick skin types, especially types III–V.', id: 'Cocok untuk semua jenis kulit Fitzpatrick, terutama tipe III–V.' }
      }
    ],
    benefits: [
      { en: 'Safe for long-term use', id: 'Aman untuk penggunaan jangka panjang' },
      { en: 'Does not cause rebound hyperpigmentation', id: 'Tidak menyebabkan hiperpigmentasi kambuh' },
      { en: 'Soothes and strengthens the skin barrier', id: 'Menenangkan dan memperkuat penghalang kulit' },
      { en: 'Effective as a maintenance protocol post-laser or peeling', id: 'Efektif sebagai protokol pemeliharaan pasca-laser atau pengelupasan' },
      { en: 'Non-irritating and does not increase photosensitivity', id: 'Tidak menyebabkan iritasi dan tidak meningkatkan fotosensitivitas' }
    ],
    indications: [
      { en: 'Patients with epidermal or dermal melasma', id: 'Pasien dengan melasma epidermal atau dermal' },
      { en: 'Individuals with post-inflammatory hyperpigmentation (PIH) from acne or injury', id: 'Individu dengan hiperpigmentasi pasca-inflamasi (PIH) dari jerawat atau cedera' },
      { en: 'Those seeking overall facial brightening with no downtime', id: 'Mereka yang mencari pencerahan wajah secara keseluruhan tanpa waktu henti' },
      { en: 'Patients intolerant to strong acids such as hydroquinone or retinoids', id: 'Pasien yang tidak toleran terhadap asam kuat seperti hidrokuinon atau retinoid' },
      { en: 'Breastfeeding mothers or individuals preferring non-invasive therapies', id: 'Ibu menyusui atau individu yang lebih memilih terapi non-invasif' }
    ]
  },
  {
    id: 'bio-prf-rejuvenation',
    title: 'Altruva Bio-PRF Rejuvenation',
    description: { en: 'Comprehensive regenerative healing.', id: 'Penyembuhan regeneratif yang komprehensif.' },
    price: '3,000,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: '/images/services/prf.webp',
    imageHint: 'regenerative healing',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
      id: 'Penuaan adalah pergeseran, bukan pemberhentian. Altruva Glow merevitalisasi fungsi kulit, memastikan kekencangan, ketahanan, dan pancaran jangka panjang.'
    },
    subgroup: 'Skingeneering Boosters',
    subtitle: { en: 'Next-Generation Regeneration from Within', id: 'Regenerasi Generasi Berikutnya dari Dalam' },
    longDescription: {
      en: `At Altruva, we embrace the future of regenerative medicine. Altruva Bio-PRF (Platelet-Rich Fibrin) is our most advanced autologous treatment, using your body’s own biology to stimulate repair, rejuvenation, and regeneration—naturally.<br/><br/>Unlike traditional PRP, which offers a quick release of growth factors, Bio-PRF is designed for sustained, long-acting regeneration through its intelligent fibrin matrix. This makes it a cornerstone of our regenerative contouring philosophy—supporting structural collagen repair, improved tissue quality, and healing from the inside out.`,
      id: `Di Altruva, kami merangkul masa depan kedokteran regeneratif. Altruva Bio-PRF (Platelet-Rich Fibrin) adalah perawatan autologus kami yang paling canggih, menggunakan biologi tubuh Anda sendiri untuk merangsang perbaikan, peremajaan, dan regenerasi—secara alami.<br/><br/>Tidak seperti PRP tradisional, yang menawarkan pelepasan faktor pertumbuhan yang cepat, Bio-PRF dirancang untuk regenerasi berkelanjutan dan kerja panjang melalui matriks fibrin cerdasnya. Ini menjadikannya landasan filosofi kontur regeneratif kami—mendukung perbaikan kolagen struktural, peningkatan kualitas jaringan, dan penyembuhan dari dalam ke luar.`
    },
    whatIsIt: {
      title: { en: 'What Is Bio-PRF?', id: 'Apa Itu Bio-PRF?' },
      description: {
        en: `Bio-PRF is an evolution of platelet therapy. It contains not only high concentrations of platelets, but also leukocytes (white blood cells) and a natural fibrin scaffold—all prepared without anticoagulants. This allows the formation of a soft gel-like matrix that:
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li>Traps regenerative growth factors</li>
        <li>Releases them slowly over 7–10 days</li>
        <li>Supports long-term tissue healing and collagen induction</li>
      </ul>
      <p class="mt-2">It is completely autologous, meaning it's 100% derived from your own blood—no additives, no foreign substances, and no risk of rejection.</p>`,
        id: `Bio-PRF adalah evolusi dari terapi platelet. Ini tidak hanya mengandung konsentrasi platelet yang tinggi, tetapi juga leukosit (sel darah putih) dan perancah fibrin alami—semua disiapkan tanpa antikoagulan. Ini memungkinkan pembentukan matriks seperti gel lunak yang:
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li>Menjebak faktor pertumbuhan regeneratif</li>
        <li>Melepaskannya secara perlahan selama 7–10 hari</li>
        <li>Mendukung penyembuhan jaringan jangka panjang dan induksi kolagen</li>
      </ul>
      <p class="mt-2">Ini sepenuhnya autologus, artinya 100% berasal dari darah Anda sendiri—tanpa aditif, tanpa zat asing, dan tanpa risiko penolakan.</p>`
      }
    },
    howItDiffers: {
      en: 'Unlike PRP, which requires anticoagulants and offers a quick burst of growth factors, Bio-PRF creates a natural fibrin matrix that allows for a sustained release of growth factors over 7-10 days. This prolonged action provides more robust and lasting regenerative signals to the tissue.',
      id: 'Tidak seperti PRP, yang membutuhkan antikoagulan dan menawarkan ledakan cepat faktor pertumbuhan, Bio-PRF menciptakan matriks fibrin alami yang memungkinkan pelepasan faktor pertumbuhan secara berkelanjutan selama 7-10 hari. Tindakan yang berkepanjangan ini memberikan sinyal regeneratif yang lebih kuat dan tahan lama ke jaringan.'
    },
    benefits: [
      { en: 'Stimulates long-term collagen and elastin production', id: 'Merangsang produksi kolagen dan elastin jangka panjang' },
      { en: 'Improves skin quality, elasticity, and density', id: 'Meningkatkan kualitas, elastisitas, dan kepadatan kulit' },
      { en: 'Enhances wound healing and reduces inflammation', id: 'Meningkatkan penyembuhan luka dan mengurangi peradangan' },
      { en: 'Effective for hair regrowth, acne scars, dark undereyes, and skin rejuvenation', id: 'Efektif untuk pertumbuhan kembali rambut, bekas jerawat, mata panda, dan peremajaan kulit' },
      { en: 'Excellent addition to GOURI, skinboosters, and energy-based devices', id: 'Tambahan yang sangat baik untuk GOURI, skinbooster, dan perangkat berbasis energi' }
    ],
    indications: [
      {
        en: 'Face: Improves dermal thickness, glow, and firmness. A perfect complement to biostimulators or post-laser healing.',
        id: 'Wajah: Meningkatkan ketebalan dermal, kilau, dan kekencangan. Pelengkap sempurna untuk biostimulator atau penyembuhan pasca-laser.'
      },
      {
        en: 'Hair: Encourages follicle repair and growth, ideal for early hair thinning.',
        id: 'Rambut: Mendorong perbaikan dan pertumbuhan folikel, ideal untuk penipisan rambut dini.'
      },
      {
        en: 'Eye Area: Reduces dark circles and crepey skin with natural, regenerative power.',
        id: 'Area Mata: Mengurangi lingkaran hitam dan kulit keriput dengan kekuatan regeneratif alami.'
      },
      {
        en: 'Scars: Reduces acne and atrophic scar depth by promoting healthy tissue remodeling.',
        id: 'Bekas Luka: Mengurangi kedalaman bekas jerawat dan atrofi dengan mendorong perombakan jaringan yang sehat.'
      }
    ],
    whyLoveIt: [
      {
        en: 'In a market saturated with synthetic fillers and quick fixes, Altruva Bio-PRF offers a return to nature—backed by science. It’s biocompatible, chemical-free, and patient-specific. At Altruva, we don’t just treat symptoms—we engineer skin longevity.',
        id: 'Di pasar yang jenuh dengan pengisi sintetis dan perbaikan cepat, Altruva Bio-PRF menawarkan kembali ke alam—didukung oleh sains. Ini biokompatibel, bebas bahan kimia, dan spesifik untuk pasien. Di Altruva, kami tidak hanya mengobati gejala—kami merekayasa umur panjang kulit.'
      }
    ]
  },
  {
    id: 'altruva-youth-elixir',
    title: 'Altruva Youth Elixir',
    description: {
      en: 'The highest form of regenerative complexes combining polynucleotides, exosomes, HA, amino acids, and micronutrients.',
      id: 'Bentuk tertinggi dari kompleks regeneratif yang menggabungkan polinukleotida, eksosom, HA, asam amino, dan mikronutrien.'
    },
    price: '6,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: '/images/services/YouthElixir.jpg',
    imageHint: 'advanced anti-aging',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
      id: 'Penuaan adalah pergeseran, bukan pemberhentian. Altruva Glow merevitalisasi fungsi kulit, memastikan kekencangan, ketahanan, dan pancaran jangka panjang.'
    },
    subgroup: 'Skingeneering Boosters',
    subtitle: { en: 'The Science of Self-Renewal. Delivered.', id: 'Ilmu Pembaruan Diri. Disampaikan.' },
    longDescription: {
      en: 'Altruva Youth Elixir is an advanced, multi-tiered bioregenerative protocol formulated for individuals seeking long-term skin vitality, healing, and visible rejuvenation. This elite combination treatment merges three of the most potent tools in regenerative aesthetics: Polynucleotides (Plinest®), Cellbooster® Lift, and ProStem Secretome — each selected for their complementary mechanisms in cellular repair, dermal hydration, and collagen renewal.<br/><br/>Created as a biological elixir for the modern skin, this treatment transcends superficial hydration or anti-aging promises. Instead, it directly enhances the skin’s repair architecture, combats oxidative damage, and strengthens the dermal matrix from within.',
      id: 'Altruva Youth Elixir adalah protokol bioregeneratif multi-tingkat canggih yang diformulasikan untuk individu yang mencari vitalitas kulit jangka panjang, penyembuhan, dan peremajaan yang terlihat. Perawatan kombinasi elit ini menggabungkan tiga alat paling kuat dalam estetika regeneratif: Polinukleotida (Plinest®), Cellbooster® Lift, dan ProStem Secretome — masing-masing dipilih karena mekanisme pelengkapnya dalam perbaikan seluler, hidrasi dermal, dan pembaruan kolagen.<br/><br/>Dibuat sebagai eliksir biologis untuk kulit modern, perawatan ini melampaui janji hidrasi superfisial atau anti-penuaan. Sebaliknya, ini secara langsung meningkatkan arsitektur perbaikan kulit, memerangi kerusakan oksidatif, dan memperkuat matriks dermal dari dalam.'
    },
    quote: {
      text: {
        en: "Because beauty isn’t built in a single session. It’s cultivated through cellular intelligence, tissue harmony, and precise bio-signaling. At Altruva, we don’t chase the glow — we rebuild it from the inside out.",
        id: "Karena kecantikan tidak dibangun dalam satu sesi. Itu dibudidayakan melalui kecerdasan seluler, harmoni jaringan, dan pensinyalan hayati yang tepat. Di Altruva, kami tidak mengejar kilau — kami membangunnya kembali dari dalam ke luar."
      },
      author: {
        en: "dr. Olivia Aldisa, International Trainer & Regenerative Aesthetics Expert",
        id: "dr. Olivia Aldisa, Pelatih Internasional & Ahli Estetika Regeneratif"
      }
    },
    whatIsIt: {
      title: { en: 'What Makes Up the Youth Elixir?', id: 'Apa yang Membentuk Youth Elixir?' },
      description: {
        en: `<div class="space-y-4"><div><h4 class="font-semibold text-primary">Polynucleotides</h4><p>Derived from purified DNA fragments, polynucleotides act as bioactive cell messengers, enhancing fibroblast proliferation, tissue healing, and elasticity. Proven to be especially effective in post-acne scarring, wrinkle reduction, and barrier repair.</p></div><div><h4 class="font-semibold text-primary">Amino Acid Boosters</h4><p>A mesotherapy complex containing non-crosslinked hyaluronic acid, amino acids, and vitamins to improve microcirculation, collagen biosynthesis, and dermal hydration. It enhances skin texture, tone, and combats fine lines by feeding essential nutrients directly into the dermis.</p></div><div><h4 class="font-semibold text-primary">Secretome</h4><p>Rich in bio-signals including growth factors, cytokines, and exosomes, this ethically sourced stem cell-derived secretome stimulates deep tissue repair, improves mitochondrial function, reduces inflammation, and orchestrates global dermal rejuvenation.</p></div></div>`,
        id: `<div class="space-y-4"><div><h4 class="font-semibold text-primary">Polinukleotida</h4><p>Berasal dari fragmen DNA yang dimurnikan, polinukleotida bertindak sebagai pembawa pesan sel bioaktif, meningkatkan proliferasi fibroblas, penyembuhan jaringan, dan elastisitas. Terbukti sangat efektif dalam bekas luka pasca-jerawat, pengurangan kerutan, dan perbaikan penghalang.</p></div><div><h4 class="font-semibold text-primary">Pendorong Asam Amino</h4><p>Kompleks mesoterapi yang mengandung asam hialuronat yang tidak saling silang, asam amino, dan vitamin untuk meningkatkan sirkulasi mikro, biosintesis kolagen, dan hidrasi dermal. Ini meningkatkan tekstur kulit, warna, dan memerangi garis-garis halus dengan memberi makan nutrisi penting langsung ke dermis.</p></div><div><h4 class="font-semibold text-primary">Secretome</h4><p>Kaya akan sinyal hayati termasuk faktor pertumbuhan, sitokin, dan eksosom, sekretom turunan sel punca yang bersumber secara etis ini merangsang perbaikan jaringan dalam, meningkatkan fungsi mitokondria, mengurangi peradangan, dan mengatur peremajaan dermal global.</p></div></div>`
      }
    },
    benefits: [
      { en: 'Enhances cell turnover and tissue regeneration', id: 'Meningkatkan pergantian sel dan regenerasi jaringan' },
      {
        en: 'Boosts hydration while promoting long-term collagen production',
        id: 'Meningkatkan hidrasi sambil mendorong produksi kolagen jangka panjang'
      },
      {
        en: 'Reduces the appearance of fine lines, scars, and hyperpigmentation',
        id: 'Mengurangi munculnya garis-garis halus, bekas luka, dan hiperpigmentasi'
      },
      { en: 'Improves skin elasticity, texture, and firmness', id: 'Meningkatkan elastisitas, tekstur, dan kekencangan kulit' },
      {
        en: 'Accelerates post-inflammatory healing, ideal after laser or RF',
        id: 'Mempercepat penyembuhan pasca-inflamasi, ideal setelah laser atau RF'
      },
      {
        en: 'Evens out skin tone and imparts a refined, radiant complexion',
        id: 'Meratakan warna kulit dan memberikan kulit yang halus dan bercahaya'
      }
    ],
    indications: [
      {
        en: 'Patients over 40 seeking long-term collagen banking and wrinkle prevention',
        id: 'Pasien di atas 40 tahun yang mencari perbankan kolagen jangka panjang dan pencegahan kerutan'
      },
      { en: 'Post-acne or atrophic scarring concerns', id: 'Masalah bekas luka pasca-jerawat atau atrofi' },
      { en: 'Dull, dry, or uneven skin tone', id: 'Warna kulit kusam, kering, atau tidak rata' },
      {
        en: 'Individuals undergoing stacked regenerative protocols (e.g., fractional RF, ultrasound lifting)',
        id: 'Individu yang menjalani protokol regeneratif bertumpuk (misalnya, RF fraksional, pengangkatan ultrasound)'
      },
      {
        en: 'Those with stress-induced inflammation, early signs of glycation, or slow dermal healing',
        id: 'Mereka dengan peradangan akibat stres, tanda-tanda awal glikasi, atau penyembuhan dermal yang lambat'
      }
    ],
    protocol: [
      {
        label: { en: 'Sessions', id: 'Sesi' },
        value: { en: '3–4 sessions, spaced 2–4 weeks apart', id: '3–4 sesi, dengan jarak 2–4 minggu' }
      },
      {
        label: { en: 'Customization', id: 'Kustomisasi' },
        value: {
          en: 'Personalized by dr. Olivia Aldisa based on anatomic map and regenerative profile',
          id: 'Dipersonalisasi oleh dr. Olivia Aldisa berdasarkan peta anatomi dan profil regeneratif'
        }
      },
      {
        label: { en: 'Synergy', id: 'Sinergi' },
        value: {
          en: 'Can be combined with A.R.T Lift, Fractional RF, or Regenerative Laser',
          id: 'Dapat dikombinasikan dengan A.R.T Lift, RF Fraksional, atau Laser Regeneratif'
        }
      },
      { label: { en: 'Maintenance', id: 'Pemeliharaan' }, value: { en: '1–2 sessions every 6 months', id: '1–2 sesi setiap 6 bulan' } },
    ]
  },
  {
    id: 'radiant-advanced-peel',
    title: 'Altruva Radiant Advanced Peel',
    description: {
      en: 'Bio-stimulatory resurfacing for skin renewal.',
      id: 'Pelapisan ulang bio-stimulator untuk pembaruan kulit.'
    },
    price: '1,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Sparkles,
    imageSrc: '/images/services/RadiantAdvancedPeel.jpg',
    imageHint: 'advanced chemical peel',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
      id: 'Penuaan adalah pergeseran, bukan pemberhentian. Altruva Glow merevitalisasi fungsi kulit, memastikan kekencangan, ketahanan, dan pancaran jangka panjang.'
    },
    subgroup: 'Signature Peels',
    subtitle: {
      en: 'Reset. Rebuild. Radiate. Age-Evolved Peeling for Skin Over 40',
      id: 'Setel Ulang. Bangun Kembali. Pancarkan. Pengelupasan yang Berkembang Sesuai Usia untuk Kulit di Atas 40 Tahun'
    },
    longDescription: {
      en: `Altruva Radiant Advanced Peel is a prejuvenation-driven chemical resurfacing treatment tailored for mature skin that needs intelligent exfoliation before undergoing regenerative procedures. Designed as the first step in your advanced rejuvenation journey, this peel harnesses Lipo-Hydroxy Acid (LHA) and HP-Sol™ Complex, targeting uneven texture, discoloration, and loss of clarity — all without compromising skin integrity.<br/><br/>Ideal for preparing the skin for lasers, collagen biostimulators, ultrasound lifting, or injectable programs, this protocol sets the foundation for superior clinical outcomes by optimizing cellular turnover, dermal receptivity, and epidermal renewal.`,
      id: `Altruva Radiant Advanced Peel adalah perawatan pelapisan ulang kimia yang didorong oleh prejuvenation yang disesuaikan untuk kulit matang yang membutuhkan pengelupasan cerdas sebelum menjalani prosedur regeneratif. Dirancang sebagai langkah pertama dalam perjalanan peremajaan canggih Anda, pengelupasan ini memanfaatkan Asam Lipo-Hidroksi (LHA) dan Kompleks HP-Sol™, menargetkan tekstur tidak rata, perubahan warna, dan hilangnya kejernihan — semua tanpa mengorbankan integritas kulit.<br/><br/>Ideal untuk mempersiapkan kulit untuk laser, biostimulator kolagen, pengangkatan ultrasound, atau program suntik, protokol ini meletakkan dasar untuk hasil klinis yang unggul dengan mengoptimalkan pergantian sel, penerimaan dermal, dan pembaruan epidermal.`
    },
    quote: {
      text: {
        en: "Think of this peel as your skin’s warm-up routine — aligning surface renewal with deeper regenerative potential.",
        id: "Anggap saja pengelupasan ini sebagai rutinitas pemanasan kulit Anda — menyelaraskan pembaruan permukaan dengan potensi regeneratif yang lebih dalam."
      },
      author: { en: "dr. Olivia Aldisa, Founder & Clinical Director", id: "dr. Olivia Aldisa, Pendiri & Direktur Klinis" }
    },
    whatIsIt: {
      title: { en: 'How It Works', id: 'Cara Kerjanya' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;"><li><h4 class="font-semibold text-primary">Lipo-Hydroxy Acid (LHA)</h4><p>Promotes controlled exfoliation, unclogs pores, and softens fine lines with minimal irritation</p></li><li><h4 class="font-semibold text-primary">HP-Sol™ Complex</h4><p>A patented alkaline matrix that activates fibroblast function, balances pH, and supports collagen synthesis</p></li><li><h4 class="font-semibold text-primary">Dermal Conditioning Lipids</h4><p>Reinforce the skin barrier, ensuring comfort, hydration, and healing throughout the peeling process</p></li></ul><p class="mt-4">This multi-layered approach resets the skin's biological rhythm, laying the groundwork for long-term anti-aging transformations.</p>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;"><li><h4 class="font-semibold text-primary">Asam Lipo-Hidroksi (LHA)</h4><p>Mendorong pengelupasan terkontrol, membuka sumbatan pori-pori, dan melembutkan garis-garis halus dengan iritasi minimal</p></li><li><h4 class="font-semibold text-primary">Kompleks HP-Sol™</h4><p>Matriks basa yang dipatenkan yang mengaktifkan fungsi fibroblas, menyeimbangkan pH, dan mendukung sintesis kolagen</p></li><li><h4 class="font-semibold text-primary">Lipid Kondisioner Dermal</h4><p>Memperkuat penghalang kulit, memastikan kenyamanan, hidrasi, dan penyembuhan selama proses pengelupasan</p></li></ul><p class="mt-4">Pendekatan berlapis-lapis ini mengatur ulang ritme biologis kulit, meletakkan dasar untuk transformasi anti-penuaan jangka panjang.</p>`
      }
    },
    benefits: [
      {
        en: 'Smooths skin texture and primes dermis for deeper treatments',
        id: 'Menghaluskan tekstur kulit dan mempersiapkan dermis untuk perawatan yang lebih dalam'
      },
      { en: 'Fades pigmentation, age spots, and sun damage', id: 'Memudarkan pigmentasi, bintik-bintik penuaan, dan kerusakan akibat sinar matahari' },
      {
        en: 'Prepares skin for better response to energy-based or injectable procedures',
        id: 'Mempersiapkan kulit untuk respons yang lebih baik terhadap prosedur berbasis energi atau suntik'
      },
      { en: 'Stimulates natural collagen for structural skin support', id: 'Merangsang kolagen alami untuk dukungan kulit struktural' },
      { en: 'Minimizes surface roughness, pores, and dull tone', id: 'Meminimalkan kekasaran permukaan, pori-pori, dan warna kusam' },
      { en: 'Zero social downtime — treatment-ready in 24 hours', id: 'Waktu henti sosial nol — siap perawatan dalam 24 jam' }
    ],
    indications: [
      {
        en: 'Individuals 40+ with visible signs of aging (wrinkles, pigmentation, loss of tone)',
        id: 'Individu 40+ dengan tanda-tanda penuaan yang terlihat (kerutan, pigmentasi, kehilangan warna)'
      },
      {
        en: 'Patients preparing for Sofwave, fractional RF, collagen biostimulators (Gouri, PRF, PLLA)',
        id: 'Pasien yang mempersiapkan Sofwave, RF fraksional, biostimulator kolagen (Gouri, PRF, PLLA)'
      },
      {
        en: 'Skin experiencing cumulative photodamage, stress, or sluggish regeneration',
        id: 'Kulit yang mengalami kerusakan foto kumulatif, stres, atau regenerasi yang lamban'
      },
      {
        en: 'Those with sensitive or thinning skin who need an exfoliation alternative without acid trauma',
        id: 'Mereka dengan kulit sensitif atau menipis yang membutuhkan alternatif pengelupasan tanpa trauma asam'
      }
    ],
    whyLoveIt: [
      {
        en: `Unlike traditional peels designed to strip, this protocol is designed to strengthen — making it a cornerstone of Altruva’s regenerative protocol layering strategy.`,
        id: `Tidak seperti pengelupasan tradisional yang dirancang untuk mengupas, protokol ini dirancang untuk memperkuat — menjadikannya landasan strategi pelapisan protokol regeneratif Altruva.`
      },
      {
        en: `<strong>Recommended Pairings:</strong> Before: ART Lift Pro, Gorgeous Lyft, Lumi Laser, or Altruva Youth Elixir. After: Hydration-focused boosters, PN/HA mesotherapy, or low-level light therapy (LLLT).`,
        id: `<strong>Pasangan yang Direkomendasikan:</strong> Sebelum: ART Lift Pro, Gorgeous Lyft, Lumi Laser, atau Altruva Youth Elixir. Setelah: Pendorong yang berfokus pada hidrasi, mesoterapi PN/HA, atau terapi cahaya tingkat rendah (LLLT).`
      }
    ]
  },
  {
    id: 'exion-regen-laser',
    title: 'Altruva Regenerative Laser',
    description: {
      en: 'Lunchtime laser targeting deep pigmentation, restoring skin luminosity without downtime.',
      id: 'Laser saat makan siang yang menargetkan pigmentasi dalam, mengembalikan luminositas kulit tanpa waktu henti.'
    },
    price: 'Price on consultation',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: '/images/services/regenerativeLaser.jpg',
    imageHint: 'no-downtime laser',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
      id: 'Penuaan adalah pergeseran, bukan pemberhentian. Altruva Glow merevitalisasi fungsi kulit, memastikan kekencangan, ketahanan, dan pancaran jangka panjang.'
    },
    subgroup: 'Signature Laser',
    subtitle: { en: "Resurface. Restore. Regenerate.", id: "Lapisi Ulang. Pulihkan. Regenerasi." },
    longDescription: {
      en: "The Altruva Regenerative Laser leverages smart fractional microablation technology to deliver powerful skin resurfacing while preserving the skin barrier—a rare synergy in the world of aesthetic lasers. Designed for those battling visible signs of aging, sun damage, or stubborn pigmentation, this treatment offers precision regeneration with minimal trauma, minimal downtime, and maximum results.<br/>Unlike aggressive CO₂ lasers, this intelligent device respects dermal integrity, making it a preferred choice in our Rejuvenation Program for patients over 40 or with environmentally stressed skin.",
      id: "Altruva Regenerative Laser memanfaatkan teknologi mikroablasi fraksional cerdas untuk memberikan pelapisan ulang kulit yang kuat sambil menjaga penghalang kulit—sinergi langka di dunia laser estetika. Dirancang untuk mereka yang berjuang melawan tanda-tanda penuaan yang terlihat, kerusakan akibat sinar matahari, atau pigmentasi yang membandel, perawatan ini menawarkan regenerasi presisi dengan trauma minimal, waktu henti minimal, dan hasil maksimal.<br/>Tidak seperti laser CO₂ yang agresif, perangkat cerdas ini menghormati integritas dermal, menjadikannya pilihan utama dalam Program Peremajaan kami untuk pasien di atas 40 tahun atau dengan kulit yang stres lingkungan."
    },
    quote: {
      text: {
        en: 'Because resurfacing should be regenerative, not aggressive. At Altruva, we pair smart energy with skin-geneering principles to ensure every treatment fuels skin longevity—not just short-term glow. Ideal as a prep step before biostimulators or as a standalone renewal for aging skin.',
        id: 'Karena pelapisan ulang harus regeneratif, bukan agresif. Di Altruva, kami memasangkan energi cerdas dengan prinsip-prinsip rekayasa kulit untuk memastikan setiap perawatan mendorong umur panjang kulit—bukan hanya kilau jangka pendek. Ideal sebagai langkah persiapan sebelum biostimulator atau sebagai pembaruan mandiri untuk kulit yang menua.'
      },
      author: { en: 'dr. Olivia Aldisa', id: 'dr. Olivia Aldisa' }
    },
    whatIsIt: {
      title: { en: "Technology in Action", id: "Teknologi dalam Aksi" },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Fractional Microablation:</strong> Targets damaged tissue zones while leaving surrounding skin intact for faster recovery and enhanced collagen remodeling.</li><li><strong>Dual Action – Resurfacing + Healing:</strong> Stimulates the skin’s own regenerative pathways, replacing damaged cells with renewed, radiant tissue.</li><li><strong>Smart Depth Control:</strong> Reaches both epidermal and dermal layers, addressing texture, tone, and structural support in one protocol.</li></ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Mikroablasi Fraksional:</strong> Menargetkan zona jaringan yang rusak sambil membiarkan kulit di sekitarnya tetap utuh untuk pemulihan yang lebih cepat dan perombakan kolagen yang ditingkatkan.</li><li><strong>Aksi Ganda – Pelapisan Ulang + Penyembuhan:</strong> Merangsang jalur regeneratif kulit sendiri, menggantikan sel-sel yang rusak dengan jaringan yang diperbarui dan bercahaya.</li><li><strong>Kontrol Kedalaman Cerdas:</strong> Mencapai lapisan epidermal dan dermal, mengatasi tekstur, warna, dan dukungan struktural dalam satu protokol.</li></ul>`
      }
    },
    benefits: [
      { en: 'Fades lentigo, sun spots, melasma, and photoaging', id: 'Memudarkan lentigo, bintik matahari, melasma, dan photoaging' },
      { en: 'Smoothes rough texture and fine lines', id: 'Menghaluskan tekstur kasar dan garis-garis halus' },
      { en: 'Refines pores and boosts overall radiance', id: 'Menghaluskan pori-pori dan meningkatkan pancaran keseluruhan' },
      { en: 'Improves redness and blotchy tone', id: 'Meningkatkan kemerahan dan warna belang-belang' },
      { en: 'Triggers natural collagen remodeling', id: 'Memicu perombakan kolagen alami' },
      { en: 'Minimal downtime with no harsh peeling', id: 'Waktu henti minimal tanpa pengelupasan keras' }
    ],
    indications: [
      { en: 'Skin over 40 showing early to moderate aging', id: 'Kulit di atas 40 tahun yang menunjukkan penuaan dini hingga sedang' },
      { en: 'Hyperpigmentation and dullness', id: 'Hiperpigmentasi dan kekusaman' },
      { en: 'Uneven texture and mild to moderate wrinkling', id: 'Tekstur tidak rata dan kerutan ringan hingga sedang' },
      { en: 'Post-acne discoloration or photo-damaged skin', id: 'Perubahan warna pasca-jerawat atau kulit yang rusak akibat foto' },
      { en: 'Those seeking true regenerative transformation', id: 'Mereka yang mencari transformasi regeneratif sejati' }
    ]
  },
  {
    id: 'exion-fractiopro',
    title: 'Altruva FractioPro',
    description: {
      en: 'Deeper fractionated resurfacing for pronounced pigment and texture correction.',
      id: 'Pelapisan ulang fraksional yang lebih dalam untuk koreksi pigmen dan tekstur yang nyata.'
    },
    price: 'Price on consultation',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: '/images/services/microneedling.webp',
    imageHint: 'fractional laser',
    group: 'Altruva Glow',
    groupDescription: {
      en: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
      id: 'Penuaan adalah pergeseran, bukan pemberhentian. Altruva Glow merevitalisasi fungsi kulit, memastikan kekencangan, ketahanan, dan pancaran jangka panjang.'
    },
    subgroup: 'Signature Laser',
    subtitle: {
      en: "Precision Texture Refinement & Dermal Rejuvenation for Mature Skin",
      id: "Perbaikan Tekstur Presisi & Peremajaan Dermal untuk Kulit Dewasa"
    },
    longDescription: {
      en: "Altruva FractioPro is our most advanced radiofrequency microneedling protocol, expertly designed to address the hallmarks of skin aging—textural deterioration, dermal thinning, and laxity—especially for skin over 40 years old. Powered by AI-enhanced Exion Fractional RF, this treatment stimulates your skin’s own collagen, elastin, and hyaluronic acid regeneration—restoring firmness, structure, and refined smoothness without invasive surgery.<br/>This is not just another skin rejuvenation treatment. Altruva FractioPro recalibrates skin architecture from within, turning back the effects of time intelligently and gracefully.",
      id: "Altruva FractioPro adalah protokol microneedling frekuensi radio kami yang paling canggih, dirancang secara ahli untuk mengatasi ciri-ciri penuaan kulit—kerusakan tekstur, penipisan dermal, dan kelonggaran—terutama untuk kulit di atas 40 tahun. Didukung oleh Exion Fractional RF yang disempurnakan AI, perawatan ini merangsang regenerasi kolagen, elastin, dan asam hialuronat kulit Anda sendiri—mengembalikan kekencangan, struktur, dan kehalusan yang halus tanpa operasi invasif.<br/>Ini bukan hanya perawatan peremajaan kulit lainnya. Altruva FractioPro mengkalibrasi ulang arsitektur kulit dari dalam, memutar kembali efek waktu secara cerdas dan anggun."
    },
    whatIsIt: {
      title: { en: "How It Works", id: "Cara Kerjanya" },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;">
        <li><strong>AI-Controlled Energy Mapping:</strong> Using real-time feedback and smart energy regulation, FractioPro adapts intensity to your skin’s needs—delivering safe, precise, and optimized outcomes with minimal discomfort.</li>
        <li><strong>Fractional RF + Microneedling Fusion:</strong> Ultrathin needles deliver heat into the deep dermal matrix, creating micro-injuries that activate skin repair, while RF energy intensifies collagen remodeling and tissue contraction.</li>
        <li><strong>Deep Dermal Reach (Up to 8mm):</strong> Without full needle insertion, FractioPro reaches deeper layers for effective treatment of skin laxity, deep wrinkles, and midface sagging.</li>
        <li><strong>Full-Spectrum Rejuvenation:</strong> Beyond superficial improvement, FractioPro triggers long-term changes in skin density, texture, and tone—making it ideal for regenerative anti-aging.</li>
      </ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;">
        <li><strong>Pemetaan Energi yang Dikendalikan AI:</strong> Menggunakan umpan balik waktu nyata dan pengaturan energi cerdas, FractioPro menyesuaikan intensitas dengan kebutuhan kulit Anda—memberikan hasil yang aman, tepat, dan dioptimalkan dengan ketidaknyamanan minimal.</li>
        <li><strong>Fusi RF Fraksional + Microneedling:</strong> Jarum ultrathin mengantarkan panas ke dalam matriks dermal dalam, menciptakan cedera mikro yang mengaktifkan perbaikan kulit, sementara energi RF mengintensifkan perombakan kolagen dan kontraksi jaringan.</li>
        <li><strong>Jangkauan Dermal Dalam (Hingga 8mm):</strong> Tanpa penyisipan jarum penuh, FractioPro mencapai lapisan yang lebih dalam untuk perawatan efektif kelonggaran kulit, kerutan dalam, dan kendur di bagian tengah wajah.</li>
        <li><strong>Peremajaan Spektrum Penuh:</strong> Di luar perbaikan superfisial, FractioPro memicu perubahan jangka panjang dalam kepadatan, tekstur, dan warna kulit—menjadikannya ideal untuk anti-penuaan regeneratif.</li>
      </ul>`
      }
    },
    benefits: [
      { en: 'Rebuilds collagen & elastin naturally', id: 'Membangun kembali kolagen & elastin secara alami' },
      {
        en: 'Visibly firms sagging skin on cheeks, jawline, and under-eyes',
        id: 'Mengencangkan kulit kendur di pipi, garis rahang, dan bawah mata secara nyata'
      },
      { en: 'Smooths coarse texture, fine lines, and enlarged pores', id: 'Menghaluskan tekstur kasar, garis-garis halus, dan pori-pori membesar' },
      { en: 'Improves overall tone, resilience, and radiance', id: 'Meningkatkan warna, ketahanan, dan pancaran keseluruhan' },
      { en: 'Supports HA stimulation for improved hydration and bounce', id: 'Mendukung stimulasi HA untuk hidrasi dan kekenyalan yang lebih baik' },
      { en: 'Gentle, adaptable for various Fitzpatrick types', id: 'Lembut, dapat beradaptasi untuk berbagai jenis Fitzpatrick' }
    ],
    indications: [
      {
        en: 'Mature skin (>40 years old) showing visible signs of laxity & thinning',
        id: 'Kulit dewasa (>40 tahun) yang menunjukkan tanda-tanda kelonggaran & penipisan yang terlihat'
      },
      { en: 'Deep wrinkles, fine lines, and early jowling', id: 'Kerutan dalam, garis-garis halus, dan jowling dini' },
      {
        en: 'Uneven, rough skin texture due to age or environmental damage',
        id: 'Tekstur kulit tidak rata dan kasar karena usia atau kerusakan lingkungan'
      },
      {
        en: 'Dehydrated, crepey skin in areas like cheeks, lower face, and neck',
        id: 'Kulit dehidrasi dan keriput di area seperti pipi, wajah bagian bawah, dan leher'
      },
      {
        en: 'Patients looking for an elegant, regenerative alternative to surgical lifting',
        id: 'Pasien yang mencari alternatif regeneratif yang elegan untuk pengangkatan bedah'
      }
    ],
    protocol: [
      {
        label: { en: 'Protocol', id: 'Protokol' },
        value: { en: '3–4 sessions spaced 4–6 weeks apart', id: '3–4 sesi dengan jarak 4–6 minggu' }
      },
      {
        label: { en: 'Maintenance', id: 'Pemeliharaan' },
        value: { en: '1–2 sessions yearly to preserve firmness', id: '1–2 sesi setiap tahun untuk menjaga kekencangan' }
      },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'Mild redness or warmth for 1–2 days', id: 'Kemerahan atau kehangatan ringan selama 1–2 hari' }
      },
      {
        label: { en: 'Prep', id: 'Persiapan' },
        value: { en: 'Discontinue retinoids and avoid sun 3 days before', id: 'Hentikan retinoid dan hindari matahari 3 hari sebelumnya' }
      },
      {
        label: { en: 'Aftercare', id: 'Perawatan Lanjutan' },
        value: { en: 'Intense hydration + SPF protection for optimal healing', id: 'Hidrasi intens + perlindungan SPF untuk penyembuhan optimal' }
      },
    ],
    whyLoveIt: [
      {
        en: "Because skin after 40 deserves intelligent repair, not aggressive resurfacing. We treat aging as an evolution—not a flaw, and FractioPro embodies that philosophy: Restoring the skin’s quiet strength from within.",
        id: "Karena kulit setelah 40 tahun pantas mendapatkan perbaikan cerdas, bukan pelapisan ulang yang agresif. Kami memperlakukan penuaan sebagai evolusi—bukan cacat, dan FractioPro mewujudkan filosofi itu: Mengembalikan kekuatan diam kulit dari dalam."
      }
    ]
  },
  {
    id: 'art-lyft',
    title: 'Altruva A.R.T Lift PRO by dr. Aldisa',
    description: {
      en: '(up to 500 shots) Personalized SUPERB Ultrasound for deep dermal firming.',
      id: '(hingga 500 tembakan) SUPERB Ultrasound yang dipersonalisasi untuk pengencangan dermal dalam.'
    },
    price: '30,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: '/images/services/artpro.jpg',
    imageHint: 'advanced ultrasound lift',
    group: 'Altruva Lift',
    groupDescription: { en: 'Aging is an evolution. Let’s refine the process.', id: 'Penuaan adalah evolusi. Mari kita perbaiki prosesnya.' },
    subgroup: 'Restoration &amp; Lifting',
    subtitle: {
      en: 'Anatomic Regenerative Targeting for Restorative Contour, Lift & Radiance. The Signature Over-40 Protocol | Powered by Sofwave',
      id: 'Penargetan Regeneratif Anatomis untuk Kontur Restoratif, Pengangkatan & Pancaran. Protokol Khas di Atas 40 Tahun | Didukung oleh Sofwave'
    },
    longDescription: {
      en: `For patients entering their 40s and beyond, skin aging isn’t just about fine lines — it's about structural shifts: collagen depletion, ligament laxity, and contour loss. Altruva A.R.T (Anatomic Regenerative Targeting) Lift PRO is a regenerative ultrasound-based protocol designed by dr. Olivia Aldisa, Asia’s Sofwave KOL, to address these challenges with unmatched anatomical precision.<br/><br/>Whether you're looking to reclaim lost volume, achieve superior lifting, or illuminate your complexion, A.R.T Lift PRO provides a data-driven, doctor-performed approach to regenerate your facial framework — without injectables or surgery.`,
      id: `Bagi pasien yang memasuki usia 40-an ke atas, penuaan kulit bukan hanya tentang garis-garis halus — ini tentang pergeseran struktural: deplesi kolagen, kelonggaran ligamen, dan hilangnya kontur. Altruva A.R.T (Anatomic Regenerative Targeting) Lift PRO adalah protokol berbasis ultrasound regeneratif yang dirancang oleh dr. Olivia Aldisa, KOL Sofwave Asia, untuk mengatasi tantangan ini dengan presisi anatomi yang tak tertandingi.<br/><br/>Baik Anda ingin mendapatkan kembali volume yang hilang, mencapai pengangkatan yang superior, atau mencerahkan kulit Anda, A.R.T Lift PRO menyediakan pendekatan berbasis data yang dilakukan oleh dokter untuk meregenerasi kerangka wajah Anda — tanpa suntikan atau operasi.`
    },
    quote: {
      text: {
        en: "Over 40 is when regenerative planning matters most. A.R.T Lift PRO doesn't chase youth—it rebuilds the architecture of it.",
        id: "Di atas 40 tahun adalah saat perencanaan regeneratif paling penting. A.R.T Lift PRO tidak mengejar masa muda—ia membangun kembali arsitekturnya."
      },
      author: {
        en: "dr. Olivia Aldisa, Altruva Founder & Global Sofwave KOL",
        id: "dr. Olivia Aldisa, Pendiri Altruva & KOL Sofwave Global"
      }
    },
    whatIsIt: {
      title: { en: 'What Sets It Apart', id: 'Apa yang Membedakannya' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;">
        <li><strong>Sofwave Technology + Anatomical Mapping:</strong> Utilizing SUPERB™ ultrasound energy, the treatment delivers targeted heating to collagen-rich zones, following dr. Aldisa’s anatomical blueprint of facial ligaments, fat compartments, and dermal layers.</li>
        <li><strong>Doctor-Driven Precision:</strong> Every pulse is guided by years of facial regenerative practice, ensuring customized treatment density whether your priority is volume restoration, tightening, or brightening.</li>
        <li><strong>Multifaceted Outcome:</strong> Beyond skin tightening, A.R.T Lift PRO can visibly improve malar descent, jawline sagging, under-eye hollowness, and even skin tone dullness — an all-in-one anti-aging investment.</li>
      </ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;">
        <li><strong>Teknologi Sofwave + Pemetaan Anatomis:</strong> Memanfaatkan energi ultrasound SUPERB™, perawatan memberikan pemanasan yang ditargetkan ke zona kaya kolagen, mengikuti cetak biru anatomi dr. Aldisa tentang ligamen wajah, kompartemen lemak, dan lapisan dermal.</li>
        <li><strong>Presisi yang Didorong Dokter:</strong> Setiap pulsa dipandu oleh pengalaman praktik regeneratif wajah bertahun-tahun, memastikan kepadatan perawatan yang disesuaikan baik prioritas Anda adalah restorasi volume, pengencangan, atau pencerahan.</li>
        <li><strong>Hasil Multifaset:</strong> Di luar pengencangan kulit, A.R.T Lift PRO dapat secara nyata meningkatkan penurunan malar, kendur garis rahang, kekosongan di bawah mata, dan bahkan kekusaman warna kulit — investasi anti-penuaan all-in-one.</li>
      </ul>`
      }
    },
    mechanism: [
      {
        title: { en: 'Ultrasound-Driven Collagen Induction', id: 'Induksi Kolagen yang Didorong Ultrasound' },
        description: {
          en: 'Sofwave’s 1.5mm depth penetration delivers energy directly to the mid-dermis, bypassing the epidermis — ideal for collagenesis without thermal damage.',
          id: 'Penetrasi kedalaman 1,5mm Sofwave mengantarkan energi langsung ke pertengahan dermis, melewati epidermis — ideal untuk kolagenesis tanpa kerusakan termal.'
        }
      },
      {
        title: { en: 'Anatomic Regenerative Targeting', id: 'Penargetan Regeneratif Anatomis' },
        description: {
          en: 'A proprietary mapping technique by dr. Aldisa that considers individual facial topography, addressing where fat loss or descent starts, rather than where it shows.',
          id: 'Teknik pemetaan eksklusif oleh dr. Aldisa yang mempertimbangkan topografi wajah individu, mengatasi di mana kehilangan atau penurunan lemak dimulai, bukan di mana ia terlihat.'
        }
      },
      {
        title: { en: 'High-Energy Multi-Zonal Delivery', id: 'Pengiriman Multi-Zona Energi Tinggi' },
        description: {
          en: 'Up to 500 pulses, placed strategically across ligament anchor points, mid-cheek lift zones, submental tightening, and peri-orbital glow boost areas.',
          id: 'Hingga 500 pulsa, ditempatkan secara strategis di seluruh titik jangkar ligamen, zona pengangkatan pipi tengah, pengencangan submental, dan area peningkatan cahaya peri-orbital.'
        }
      }
    ],
    benefits: [
      { en: 'Re-lifted midface contour', id: 'Kontur wajah tengah yang terangkat kembali' },
      { en: 'Smoother jawline, reduced jowls', id: 'Garis rahang lebih halus, jowls berkurang' },
      { en: 'Tighter neck profile', id: 'Profil leher lebih kencang' },
      {
        en: 'Improved skin luminosity (from improved dermal oxygenation and perfusion)',
        id: 'Peningkatan luminositas kulit (dari peningkatan oksigenasi dan perfusi dermal)'
      },
      { en: 'Gradual but long-lasting structural renewal', id: 'Pembaruan struktural bertahap namun tahan lama' }
    ],
    indications: [
      { en: 'Midface flattening', id: 'Perataan wajah tengah' },
      { en: 'Jowl formation and loss of mandibular definition', id: 'Pembentukan jowl dan hilangnya definisi mandibula' },
      { en: 'Nasolabial and marionette depth', id: 'Kedalaman nasolabial dan marionette' },
      { en: 'General skin dullness and laxity', id: 'Kekusaman dan kelonggaran kulit umum' },
      { en: 'Post-weight loss sagging', id: 'Kendur pasca penurunan berat badan' },
      {
        en: 'Volume loss due to aging or overfilled correction',
        id: 'Kehilangan volume karena penuaan atau koreksi yang terlalu penuh'
      },
      { en: 'Collagen collapse from chronic sun damage', id: 'Runtuhnya kolagen akibat kerusakan akibat sinar matahari kronis' }
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '45–60 minutes', id: '45–60 menit' } },
      {
        label: { en: 'Sessions', id: 'Sesi' },
        value: { en: 'One treatment per year is recommended; twice annually for advanced aging', id: 'Satu perawatan per tahun direkomendasikan; dua kali setahun untuk penuaan lanjut' }
      },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'Minimal — some mild redness or swelling resolves in hours', id: 'Minimal — beberapa kemerahan atau bengkak ringan sembuh dalam beberapa jam' }
      },
      {
        label: { en: 'Peak Results', id: 'Hasil Puncak' },
        value: { en: '6–12 weeks post-treatment, with ongoing improvement for 3–6 months', id: '6–12 minggu pasca-perawatan, dengan perbaikan berkelanjutan selama 3–6 bulan' }
      }
    ],
  },
  {
    id: 'gorgeous-lyft-rejuvenation',
    title: 'Altruva Gorgeous Lyft by dr. Aldisa',
    description: {
      en: 'Injectable liquid type biostimulators for strong collagen restoration.',
      id: 'Biostimulator tipe cair yang dapat disuntikkan untuk restorasi kolagen yang kuat.'
    },
    price: '11,000,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: '/images/services/gorgeous-lift.jpg',
    imageHint: 'collagen biostimulator',
    group: 'Altruva Lift',
    groupDescription: { en: 'Aging is an evolution. Let’s refine the process.', id: 'Penuaan adalah evolusi. Mari kita perbaiki prosesnya.' },
    subgroup: 'Restoration &amp; Lifting',
    subtitle: {
      en: "The Signature Liquid Collagen Bioactivator Experience",
      id: "Pengalaman Bioaktivator Kolagen Cair Khas"
    },
    longDescription: {
      en: `Precision by Gouri International KOL. Gorgeous Lyft is the ultimate expression of regenerative luxury, exclusively available at Altruva Aesthetic Clinic and masterfully performed by dr. Olivia Aldisa, one of the world’s leading KOLs for Gouri.<br/><br/>This next-generation procedure harnesses the power of liquid Polycaprolactone (PCL) — a fully solubilized collagen biostimulator — to awaken your skin’s innate capacity to rebuild, rejuvenate, and restore youthful architecture. No volumization. No puffiness. Just glow-from-within firmness that whispers elegance.`,
      id: 'Presisi oleh KOL Internasional Gouri. Gorgeous Lyft adalah ekspresi utama kemewahan regeneratif, tersedia secara eksklusif di Klinik Estetika Altruva dan dilakukan secara ahli oleh dr. Olivia Aldisa, salah satu KOL terkemuka di dunia untuk Gouri.<br/><br/>Prosedur generasi berikutnya ini memanfaatkan kekuatan Polycaprolactone (PCL) cair — biostimulator kolagen yang sepenuhnya larut — untuk membangkitkan kapasitas bawaan kulit Anda untuk membangun kembali, meremajakan, dan memulihkan arsitektur muda. Tanpa volumisasi. Tanpa bengkak. Hanya kekencangan dari dalam yang membisikkan keanggunan.'
    },
    quote: {
      text: {
        en: "Collagen is your skin’s inheritance. Gorgeous Lyft helps you protect and grow it—elegantly, safely, and globally.",
        id: "Kolagen adalah warisan kulit Anda. Gorgeous Lyft membantu Anda melindungi dan menumbuhkannya—dengan elegan, aman, dan global."
      },
      author: { en: "dr. Olivia Aldisa, International KOL for Gouri", id: "dr. Olivia Aldisa, KOL Internasional untuk Gouri" }
    },
    whatIsIt: {
      title: { en: 'What is Gorgeous Lyft?', id: 'Apa itu Gorgeous Lyft?' },
      description: {
        en: `Gorgeous Lyft is Altruva’s signature bio-collagen activation protocol using Gouri, the world’s first and only 100% liquid PCL injectable.
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong>Liquid PCL:</strong> Unlike microparticle biostimulators, Gouri flows seamlessly across the dermis.</li>
        <li><strong>Multi-Zone Collagenesis:</strong> A few targeted injections can reach broad facial areas.</li>
        <li><strong>Gradual Lifting, Brightening & Tightening:</strong> As fibroblasts activate, skin begins a months-long journey of self-renewal.</li>
        <li><strong>Doctor-Led Mapping:</strong> Injection patterns are personalized by dr. Aldisa to restore harmony across different facial zones — temples, nasojugal groove, marionette, cheeks, and preauricular area.</li>
      </ul>`,
        id: `Gorgeous Lyft adalah protokol aktivasi bio-kolagen khas Altruva menggunakan Gouri, suntikan PCL cair 100% pertama dan satu-satunya di dunia.
      <ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;">
        <li><strong>PCL Cair:</strong> Tidak seperti biostimulator mikropartikel, Gouri mengalir mulus melintasi dermis.</li>
        <li><strong>Kolagenesis Multi-Zona:</strong> Beberapa suntikan yang ditargetkan dapat mencapai area wajah yang luas.</li>
        <li><strong>Pengangkatan, Pencerahan & Pengencangan Bertahap:</strong> Saat fibroblas aktif, kulit memulai perjalanan pembaruan diri selama berbulan-bulan.</li>
        <li><strong>Pemetaan yang Dipimpin Dokter:</strong> Pola injeksi dipersonalisasi oleh dr. Aldisa untuk mengembalikan harmoni di berbagai zona wajah — pelipis, alur nasojugal, marionette, pipi, dan area preauricular.</li>
      </ul>`
      }
    },
    mechanism: [
      {
        title: { en: 'Strategic Infiltration', id: 'Infiltrasi Strategis' },
        description: {
          en: "Minimal points are needed to activate widespread collagen induction. For enhanced safety and efficacy, dr. Aldisa always pre-infiltrates with lidocaine to create safe distribution channels.",
          id: "Poin minimal diperlukan untuk mengaktifkan induksi kolagen yang luas. Untuk meningkatkan keamanan dan kemanjuran, dr. Aldisa selalu melakukan pra-infiltrasi dengan lidokain untuk membuat saluran distribusi yang aman."
        }
      },
      {
        title: { en: 'Controlled Dispersion', id: 'Dispersi Terkendali' },
        description: {
          en: "Using the exclusive Gouri Dispersion Method (GDM) and post-injection 1-minute point compression, bruising is minimized and PCL diffusion is optimized.",
          id: "Menggunakan Metode Dispersi Gouri (GDM) eksklusif dan kompresi titik 1 menit pasca-injeksi, memar diminimalkan dan difusi PCL dioptimalkan."
        }
      },
      {
        title: { en: 'Bioregenerative Remodeling', id: 'Perombakan Bioregeneratif' },
        description: {
          en: "Over the next 3–12 weeks, your skin begins producing Type I and III collagen, resulting in firmer texture, lifted contours, and improved glow.",
          id: "Selama 3–12 minggu ke depan, kulit Anda mulai memproduksi kolagen Tipe I dan III, menghasilkan tekstur yang lebih kencang, kontur yang terangkat, dan kilau yang lebih baik."
        }
      }
    ],
    benefits: [
      { en: "Stimulates natural collagen without adding artificial volume", id: "Merangsang kolagen alami tanpa menambahkan volume buatan" },
      { en: "Improves laxity, skin tone, and texture", id: "Meningkatkan kelenturan, warna kulit, dan tekstur" },
      { en: "Reduces wrinkles, tear trough, and marionette shadows", id: "Mengurangi kerutan, kantung mata, dan bayangan marionette" },
      { en: "Minimal downtime, low risk of lumps or overfilling", id: "Waktu henti minimal, risiko benjolan atau pengisian berlebih yang rendah" },
      { en: "Results that build over time and last up to 9–12 months", id: "Hasil yang membangun seiring waktu dan bertahan hingga 9–12 bulan" }
    ],
    indications: [
      { en: "Patients 30–55 seeking refinement rather than reshaping", id: "Pasien 30–55 yang mencari perbaikan daripada pembentukan ulang" },
      { en: "Individuals with early signs of sagging, dullness, or mild volume depletion", id: "Individu dengan tanda-tanda awal kendur, kusam, atau deplesi volume ringan" },
      { en: "Clients wanting a filler-free profile", id: "Klien yang menginginkan profil bebas pengisi" },
      { en: "Postpartum mothers, perimenopausal women, and aesthetic minimalists", id: "Ibu pasca melahirkan, wanita perimenopause, dan minimalis estetika" }
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '~30 minutes', id: '~30 menit' } },
      {
        label: { en: 'Technique', id: 'Teknik' },
        value: {
          en: '5–7 injection points using micro-needle or cannula, depending on face type',
          id: '5–7 titik injeksi menggunakan jarum mikro atau kanula, tergantung pada jenis wajah'
        }
      },
      {
        label: { en: 'Aftercare', id: 'Perawatan Lanjutan' },
        value: { en: 'Avoid excessive facial movement or massage for 24–48 hours', id: 'Hindari gerakan wajah atau pijatan berlebihan selama 24–48 jam' }
      },
      {
        label: { en: 'Redness or swelling', id: 'Kemerahan atau bengkak' },
        value: { en: 'typically subsides within 1–3 days', id: 'biasanya mereda dalam 1–3 hari' }
      }
    ]
  },
  {
    id: 'radiance-lyft',
    title: 'Altruva Regenerative RF',
    description: { en: 'Comprehensive deep skin tightening.', id: 'Pengencangan kulit dalam yang komprehensif.' },
    price: '9,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: '/images/services/regenerativerf.png',
    imageHint: 'deep skin tightening',
    group: 'Altruva Lift',
    groupDescription: { en: 'Aging is an evolution. Let’s refine the process.', id: 'Penuaan adalah evolusi. Mari kita perbaiki prosesnya.' },
    subgroup: 'Restoration &amp; Lifting',
    subtitle: {
      en: 'The Intelligent RF Lift for Skin Over 40',
      id: 'Pengangkatan RF Cerdas untuk Kulit di Atas 40 Tahun'
    },
    longDescription: {
      en: 'Altruva Regenerative RF is a needle-free, non-invasive RF-based skin rejuvenation treatment designed specifically for individuals over 40 who are experiencing visible signs of aging—such as sagging skin, fine lines, enlarged pores, and texture loss. Utilizing Exion™ Radiofrequency + Targeted Ultrasound technology, this treatment works deep within the dermis to stimulate collagen, elastin, and hyaluronic acid synthesis, restoring youthful density and definition to mature skin.<br/><br/>This is regenerative science meeting natural elegance.',
      id: 'Altruva Regenerative RF adalah perawatan peremajaan kulit berbasis RF non-invasif tanpa jarum yang dirancang khusus untuk individu di atas 40 tahun yang mengalami tanda-tanda penuaan yang terlihat—seperti kulit kendur, garis-garis halus, pori-pori membesar, dan kehilangan tekstur. Memanfaatkan teknologi Frekuensi Radio Exion™ + Ultrasound Bertarget, perawatan ini bekerja jauh di dalam dermis untuk merangsang sintesis kolagen, elastin, dan asam hialuronat, mengembalikan kepadatan dan definisi muda pada kulit dewasa.<br/><br/>Ini adalah ilmu regeneratif yang bertemu dengan keanggunan alami.'
    },
    quote: {
      text: {
        en: "Aging skin doesn’t need to be fought—it needs to be regenerated. With Altruva Regenerative RF, we respect your skin’s biology and help it perform at its best.",
        id: "Kulit yang menua tidak perlu dilawan—perlu diregenerasi. Dengan Altruva Regenerative RF, kami menghormati biologi kulit Anda dan membantunya bekerja dengan performa terbaiknya."
      },
      author: {
        en: "dr. Olivia Aldisa, Medical Director & Global Regenerative Aesthetic KOL",
        id: "dr. Olivia Aldisa, Direktur Medis & KOL Estetika Regeneratif Global"
      }
    },
    whatIsIt: {
      title: { en: 'How It Works: Dual-Action Technology', id: 'Cara Kerjanya: Teknologi Aksi Ganda' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;">
          <li><strong>Radiofrequency Energy:</strong> Controlled RF waves gently heat the deeper layers of the skin, activating fibroblasts and kickstarting collagen and elastin production—resulting in visibly lifted, firmer, and more resilient skin.</li>
          <li><strong>Targeted Ultrasound Synergy:</strong> Focused ultrasound enhances dermal stimulation, supporting skin remodeling in deeper layers without compromising the surface. It’s ideal for the full face, including fragile areas like the under-eye and jawline.</li>
          <li><strong>AI-Optimized Energy Delivery:</strong> Integrated AI systems read skin impedance in real time, adjusting energy output to deliver uniform heating and minimize risks—ensuring comfort and consistency in every session.</li>
          <li><strong>100% Needle-Free:</strong> Unlike traditional microneedling RF, Altruva Regenerative RF uses no needles, making it a safer, gentler option for aging skin that may be prone to thinning or bruising.</li>
      </ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;">
          <li><strong>Energi Frekuensi Radio:</strong> Gelombang RF yang terkontrol dengan lembut memanaskan lapisan kulit yang lebih dalam, mengaktifkan fibroblas dan memulai produksi kolagen dan elastin—menghasilkan kulit yang tampak terangkat, lebih kencang, dan lebih tangguh.</li>
          <li><strong>Sinergi Ultrasound Bertarget:</strong> Ultrasound terfokus meningkatkan stimulasi dermal, mendukung perombakan kulit di lapisan yang lebih dalam tanpa mengorbankan permukaan. Ini ideal untuk seluruh wajah, termasuk area rapuh seperti bawah mata dan garis rahang.</li>
          <li><strong>Pengiriman Energi yang Dioptimalkan AI:</strong> Sistem AI terintegrasi membaca impedansi kulit secara waktu nyata, menyesuaikan output energi untuk memberikan pemanasan yang seragam dan meminimalkan risiko—memastikan kenyamanan dan konsistensi di setiap sesi.</li>
          <li><strong>100% Bebas Jarum:</strong> Tidak seperti microneedling RF tradisional, Altruva Regenerative RF tidak menggunakan jarum, menjadikannya pilihan yang lebih aman dan lebih lembut untuk kulit yang menua yang mungkin rentan menipis atau memar.</li>
      </ul>`
      }
    },
    benefits: [
      {
        en: 'Firms and tightens sagging skin on the abdomen, thighs, arms, and more',
        id: 'Mengencangkan dan menguatkan kulit kendur di perut, paha, lengan, dan lainnya'
      },
      { en: 'Reduces stubborn fat via mechanical lipolysis', id: 'Mengurangi lemak membandel melalui lipolisis mekanis' },
      {
        en: 'Improves texture and cellulite by remodeling connective tissue',
        id: 'Meningkatkan tekstur dan selulit dengan merombak jaringan ikat'
      },
      {
        en: 'Boosts hydration and elasticity through HA stimulation',
        id: 'Meningkatkan hidrasi dan elastisitas melalui stimulasi HA'
      },
      {
        en: 'Non-invasive & painless with no needles, surgery, or social downtime',
        id: 'Non-invasif & tanpa rasa sakit tanpa jarum, operasi, atau waktu henti sosial'
      }
    ],
    indications: [
      { en: 'Men and women 40+ experiencing visible skin aging', id: 'Pria dan wanita 40+ yang mengalami penuaan kulit yang terlihat' },
      {
        en: 'Clients not yet ready for invasive lifting or injectables',
        id: 'Klien yang belum siap untuk pengangkatan invasif atau suntikan'
      },
      {
        en: 'Individuals with textural decline, sagging contours, and early jowl formation',
        id: 'Individu dengan penurunan tekstur, kontur kendur, dan pembentukan jowl dini'
      },
      {
        en: 'Mature skin seeking regenerative improvement with minimal disruption',
        id: 'Kulit dewasa yang mencari perbaikan regeneratif dengan gangguan minimal'
      }
    ],
    protocol: [
      {
        label: { en: 'Duration', id: 'Durasi' },
        value: { en: '30–60 minutes per area', id: '30–60 menit per area' }
      },
      {
        label: { en: 'Sessions Needed', id: 'Sesi yang Dibutuhkan' },
        value: { en: '4–6 sessions, spaced 1–2 weeks apart', id: '4–6 sesi, dengan jarak 1–2 minggu' }
      },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'Minimal to none', id: 'Minimal hingga tidak ada' }
      },
      {
        label: { en: 'Results Timeline', id: 'Garis Waktu Hasil' },
        value: { en: 'Progressive over 6–12 weeks post-treatment', id: 'Progresif selama 6–12 minggu pasca-perawatan' }
      },
    ]
  },
  {
    id: 'cocktail-contouring',
    title: 'Altruva Cocktail Contouring',
    description: {
      en: 'Personalized bio-stimulator &amp; selected filler fusion.',
      id: 'Fusi bio-stimulator yang dipersonalisasi & pengisi yang dipilih.'
    },
    price: '15,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Sparkles,
    imageSrc: '/images/services/facecontouring.webp',
    imageHint: 'custom contouring',
    group: 'Altruva Lift',
    groupDescription: { en: 'Aging is an evolution. Let’s refine the process.', id: 'Penuaan adalah evolusi. Mari kita perbaiki prosesnya.' },
    subgroup: 'Signature Restoration',
    subtitle: { en: 'Regenerative Sculpting. Intelligent Precision.', id: 'Pahatan Regeneratif. Presisi Cerdas.' },
    longDescription: {
      en: `Altruva Cocktail Contouring is an advanced, physician-personalized facial harmonization protocol that synergizes the volumizing structure of hyaluronic acid (HA) fillers with the collagen-stimulating power of calcium hydroxylapatite (CaHA). This hybrid regenerative approach is ideal for those seeking natural-looking contouring, fat repositioning, and bioactive lifting — without the heaviness or overfilled appearance often associated with traditional volumizing methods.<br/><br/>Inspired and developed from the pioneering methodologies of dr. Jani van Loghem (The Netherlands) and honed under the UMA Academy, this protocol is exclusively delivered by dr. Olivia Aldisa, reflecting her commitment to anatomical precision and cellular-level rejuvenation.`,
      id: `Altruva Cocktail Contouring adalah protokol harmonisasi wajah canggih yang dipersonalisasi oleh dokter yang mensinergikan struktur volumizing pengisi asam hialuronat (HA) dengan kekuatan merangsang kolagen dari kalsium hidroksiapatit (CaHA). Pendekatan regeneratif hibrida ini ideal bagi mereka yang mencari pembentukan kontur yang tampak alami, reposisi lemak, dan pengangkatan bioaktif — tanpa rasa berat atau penampilan yang terlalu penuh yang sering dikaitkan dengan metode volumizing tradisional.<br/><br/>Terinspirasi dan dikembangkan dari metodologi perintis dr. Jani van Loghem (Belanda) dan diasah di bawah UMA Academy, protokol ini secara eksklusif disampaikan oleh dr. Olivia Aldisa, yang mencerminkan komitmennya pada presisi anatomi dan peremajaan tingkat seluler.`
    },
    whatIsIt: {
      title: { en: 'What Is Cocktail Contouring?', id: 'Apa Itu Cocktail Contouring?' },
      description: {
        en: `Cocktail Contouring refers to the intelligent layering and combination of:<br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>CaHA (Calcium Hydroxylapatite):</strong> A biostimulatory filler that acts like a scaffold, triggering collagen and elastin synthesis while offering subtle structure.</li><li><strong>HA (Hyaluronic Acid):</strong> A hydrophilic volumizer that enhances facial contours, corrects asymmetries, and refines projection—delivering immediate, natural results with reversibility when needed.</li></ul><p class="mt-2">These two technologies, when blended precisely, mimic natural fat pads, reposition volume, and revitalize the dermis without excessive projection or puffiness.</p>`,
        id: `Cocktail Contouring mengacu pada pelapisan dan kombinasi cerdas dari:<br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>CaHA (Kalsium Hidroksiapatit):</strong> Pengisi biostimulator yang bertindak seperti perancah, memicu sintesis kolagen dan elastin sambil menawarkan struktur halus.</li><li><strong>HA (Asam Hialuronat):</strong> Volumizer hidrofilik yang meningkatkan kontur wajah, mengoreksi asimetri, dan menghaluskan proyeksi—memberikan hasil langsung dan alami dengan reversibilitas bila diperlukan.</li></ul><p class="mt-2">Kedua teknologi ini, ketika dicampur dengan tepat, meniru bantalan lemak alami, mereposisi volume, dan merevitalisasi dermis tanpa proyeksi atau bengkak yang berlebihan.</p>`
      }
    },
    benefits: [
      { en: 'Repositions deep fat pads without distortion', id: 'Mereposisi bantalan lemak dalam tanpa distorsi' },
      {
        en: 'Stimulates native collagen production for long-term lift and firmness',
        id: 'Merangsang produksi kolagen asli untuk pengangkatan dan kekencangan jangka panjang'
      },
      { en: 'Contours mid-face, jawline, and temple naturally', id: 'Membentuk kontur bagian tengah wajah, garis rahang, dan pelipis secara alami' },
      { en: 'Enhances structural integrity without overfilling', id: 'Meningkatkan integritas struktural tanpa pengisian berlebih' },
      { en: 'Corrects asymmetries and restores facial balance', id: 'Mengoreksi asimetri dan mengembalikan keseimbangan wajah' },
      { en: 'Improves skin quality through dermal regeneration', id: 'Meningkatkan kualitas kulit melalui regenerasi dermal' },
      {
        en: 'Suitable for under 40s looking for contour with minimal filler load',
        id: 'Cocok untuk usia di bawah 40 tahun yang mencari kontur dengan beban pengisi minimal'
      },
      {
        en: 'Ideal for over 40s seeking regenerative contouring and volume repositioning',
        id: 'Ideal untuk usia di atas 40 tahun yang mencari kontur regeneratif dan reposisi volume'
      },
    ],
    indications: [
      { en: 'Subtle mid-face contouring', id: 'Kontur wajah tengah yang halus' },
      { en: 'Jawline and chin refinement', id: 'Perbaikan garis rahang dan dagu' },
      { en: 'Temple hollow correction', id: 'Koreksi cekungan pelipis' },
      { en: 'Volume descent or fat loss in dynamic zones', id: 'Penurunan volume atau kehilangan lemak di zona dinamis' },
      { en: 'Post-weight loss facial reshaping', id: 'Pembentukan kembali wajah pasca penurunan berat badan' },
      {
        en: 'Early signs of skeletal shrinkage without need for invasive lifting',
        id: 'Tanda-tanda awal penyusutan tulang tanpa perlu pengangkatan invasif'
      },
    ],
    protocol: [
      {
        label: { en: 'Protocol', id: 'Protokol' },
        value: { en: '1 session with personalized mapping', id: '1 sesi dengan pemetaan yang dipersonalisasi' }
      },
      { label: { en: 'Follow-up', id: 'Tindak Lanjut' }, value: { en: '6–12 months', id: '6–12 bulan' } },
      {
        label: { en: 'Stackable with', id: 'Dapat Ditumpuk dengan' },
        value: {
          en: 'A.R.T Lift PRO, Altruva Youth Elixir, or Exion Fractio Pro',
          id: 'A.R.T Lift PRO, Altruva Youth Elixir, atau Exion Fractio Pro'
        }
      },
    ],
    whyLoveIt: [
      {
        en: "This technique is refined under the mentorship of dr. Jani van Loghem—a global authority in aesthetic medicine known for developing advanced facial mapping systems, CaHA biostimulation protocols, and profile-balancing techniques. His mentorship through UMA Academy ensures that every Altruva Cocktail Contouring procedure reflects the highest international standards of safety, anatomy, and regenerative results.",
        id: "Teknik ini disempurnakan di bawah bimbingan dr. Jani van Loghem—otoritas global dalam kedokteran estetika yang dikenal karena mengembangkan sistem pemetaan wajah canggih, protokol biostimulasi CaHA, dan teknik penyeimbangan profil. Bimbingannya melalui UMA Academy memastikan bahwa setiap prosedur Altruva Cocktail Contouring mencerminkan standar keselamatan, anatomi, dan hasil regeneratif internasional tertinggi."
      }
    ],
  },
  {
    id: 'dermal-fillers-pro',
    title: 'Altruva Dermal Filler Pro',
    description: { en: 'Precision volumization for facial balance.', id: 'Volumisasi presisi untuk keseimbangan wajah.' },
    price: '6,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: '/images/services/dermalfiller.jpg',
    imageHint: 'advanced dermal filler',
    group: 'Altruva Lift',
    groupDescription: { en: 'Aging is an evolution. Let’s refine the process.', id: 'Penuaan adalah evolusi. Mari kita perbaiki prosesnya.' },
    subgroup: 'Signature Restoration',
    subtitle: {
      en: "Volume Reclaimed. Contours Reawakened. Elegantly Executed by dr. Aldisa",
      id: "Volume Dikembalikan. Kontur Dibangkitkan Kembali. Dilaksanakan dengan Elegan oleh dr. Aldisa"
    },
    longDescription: {
      en: `Aging is not just about wrinkles — it’s about deflation, descent, and disruption of volume harmony. Altruva Dermal Filler Pro is an advanced volumization protocol tailored for those over 40, where the priority shifts from enhancement to restoration.<br/><br/>Led by dr. Olivia Aldisa, a pioneer in regenerative and anatomical aesthetics, this protocol focuses on replacing structural volume loss, especially around the temples, forehead, midface, and preauricular zones, with sophisticated placement that respects your facial dynamics — never overfilling, never distorting.`,
      id: `Penuaan bukan hanya tentang kerutan — ini tentang deflasi, penurunan, dan gangguan harmoni volume. Altruva Dermal Filler Pro adalah protokol volumisasi canggih yang disesuaikan untuk mereka yang berusia di atas 40 tahun, di mana prioritas bergeser dari peningkatan ke restorasi.<br/><br/>Dipimpin oleh dr. Olivia Aldisa, seorang perintis dalam estetika regeneratif dan anatomi, protokol ini berfokus pada penggantian kehilangan volume struktural, terutama di sekitar pelipis, dahi, wajah tengah, dan zona preauricular, dengan penempatan canggih yang menghormati dinamika wajah Anda — tidak pernah mengisi berlebihan, tidak pernah mendistorsi.`
    },
    quote: {
      text: {
        en: "We’re not chasing youth — we’re restoring structure. When you lift the face the right way, you lift the spirit too.",
        id: "Kami tidak mengejar masa muda — kami memulihkan struktur. Ketika Anda mengangkat wajah dengan cara yang benar, Anda juga mengangkat semangat."
      },
      author: {
        en: "dr. Olivia Aldisa, Expert in Volumetric Harmony & Anatomical Restoration",
        id: "dr. Olivia Aldisa, Ahli Harmoni Volumetrik & Restorasi Anatomi"
      }
    },
    whatIsIt: {
      title: { en: 'The Methodology', id: 'Metodologi' },
      description: {
        en: `With Altruva Dermal Filler Pro, dr. Aldisa maps the entire facial framework, identifying where volume has been lost and how to rebuild with tastefully conservative doses, using:<br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Dynamic HA Fillers:</strong> Only premium, FDA-approved fillers with optimal tissue integration, elasticity, and safety profiles</li><li><strong>Microcannula & Needle Strategy:</strong> Safe and precise delivery based on vascular maps and anatomical zones</li><li><strong>Fat Pad Mapping:</strong> Volume is replaced according to fat compartment anatomy for predictable, natural lift</li><li><strong>Tissue Behavior Analysis:</strong> Ensures movement remains dynamic — never stiff or “stuffed”</li></ul>`,
        id: `Dengan Altruva Dermal Filler Pro, dr. Aldisa memetakan seluruh kerangka wajah, mengidentifikasi di mana volume telah hilang dan bagaimana membangun kembali dengan dosis konservatif yang berselera tinggi, menggunakan:<br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Pengisi HA Dinamis:</strong> Hanya pengisi premium yang disetujui FDA dengan integrasi jaringan, elastisitas, dan profil keamanan yang optimal</li><li><strong>Strategi Kanula Mikro & Jarum:</strong> Pengiriman yang aman dan tepat berdasarkan peta vaskular dan zona anatomi</li><li><strong>Pemetaan Bantalan Lemak:</strong> Volume diganti sesuai dengan anatomi kompartemen lemak untuk pengangkatan yang dapat diprediksi dan alami</li><li><strong>Analisis Perilaku Jaringan:</strong> Memastikan gerakan tetap dinamis — tidak pernah kaku atau “penuh”</li></ul>`
      }
    },
    howItDiffers: {
      en: "This isn't just about filling lines; it's about architectural restoration. For mature skin, filler placement must follow different principles: balance, support, and restraint. Restoring this scaffolding amplifies the effects of other treatments like lasers, threads, and collagen-stimulators.",
      id: "Ini bukan hanya tentang mengisi garis; ini tentang restorasi arsitektur. Untuk kulit dewasa, penempatan pengisi harus mengikuti prinsip yang berbeda: keseimbangan, dukungan, dan pengekangan. Memulihkan perancah ini memperkuat efek perawatan lain seperti laser, benang, dan stimulator kolagen."
    },
    benefits: [
      { en: 'Restores youthful curves and volume without puffiness', id: 'Mengembalikan lekuk muda dan volume tanpa bengkak' },
      {
        en: 'Reduces shadowing that contributes to a tired appearance',
        id: 'Mengurangi bayangan yang berkontribusi pada penampilan lelah'
      },
      {
        en: 'Lifts and supports surrounding tissues through volumetric anchoring',
        id: 'Mengangkat dan menopang jaringan di sekitarnya melalui penahan volumetrik'
      },
      {
        en: 'Rejuvenates high-risk zones like temples and forehead safely',
        id: 'Meremajakan zona berisiko tinggi seperti pelipis dan dahi dengan aman'
      },
      {
        en: 'Enhances harmony between upper, mid, and lower face',
        id: 'Meningkatkan harmoni antara wajah bagian atas, tengah, dan bawah'
      },
      { en: 'Rebuilds confidence with visible, yet undetectable change', id: 'Membangun kembali kepercayaan diri dengan perubahan yang terlihat, namun tidak terdeteksi' }
    ],
    indications: [
      { en: 'Temples: Correct hollowing that creates shadowing and skeletal contours', id: 'Pelipis: Memperbaiki kekosongan yang menciptakan bayangan dan kontur tulang' },
      {
        en: 'Forehead: Restore gentle convexity and correct bony exposure or contour dips',
        id: 'Dahi: Mengembalikan konveksitas lembut dan memperbaiki paparan tulang atau penurunan kontur'
      },
      {
        en: 'Midface: Rebuild deep medial cheek fat and support tear trough integrity',
        id: 'Wajah Tengah: Membangun kembali lemak pipi medial dalam dan mendukung integritas kantung mata'
      },
      {
        en: 'Preauricular/Lower Face: Smooth hollowing, replenish lateral support, and contour jawline without heaviness',
        id: 'Preauricular/Wajah Bawah: Menghaluskan kekosongan, mengisi kembali dukungan lateral, dan membentuk kontur garis rahang tanpa rasa berat'
      },
      {
        en: 'Chin & Perioral: Address perioral collapse and restore vertical height when needed',
        id: 'Dagu & Perioral: Mengatasi keruntuhan perioral dan mengembalikan ketinggian vertikal bila diperlukan'
      }
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '45–75 minutes', id: '45–75 menit' } },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'Minimal; mild swelling or bruising possible', id: 'Minimal; kemungkinan bengkak ringan atau memar' }
      },
      {
        label: { en: 'Results', id: 'Hasil' },
        value: { en: 'Immediate soft volume; peak in 1–2 weeks', id: 'Volume lunak langsung; puncak dalam 1–2 minggu' }
      },
      {
        label: { en: 'Longevity', id: 'Daya Tahan' },
        value: { en: '12–18 months, depending on area & product', id: '12–18 bulan, tergantung pada area & produk' }
      },
      { label: { en: 'Method', id: 'Metode' }, value: { en: 'Microcannula and/or needle', id: 'Kanula mikro dan/atau jarum' } },
      {
        label: { en: 'Ideal For', id: 'Ideal Untuk' },
        value: {
          en: 'Volume loss, hollow temples, forehead dips, soft midface support',
          id: 'Kehilangan volume, pelipis cekung, penurunan dahi, dukungan wajah tengah yang lembut'
        }
      },
      {
        label: { en: 'Complementary To', id: 'Pelengkap Untuk' },
        value: { en: 'Sofwave, collagen biostimulators, skinboosters', id: 'Sofwave, biostimulator kolagen, skinbooster' }
      },
    ]
  },
  {
    id: 'face-modulator-full',
    title: 'Altruva Face Modulator (Full Dose)',
    description: { en: 'Dynamic wrinkle refinement.', id: 'Perbaikan kerutan dinamis.' },
    price: '9,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Sparkles,
    imageSrc: '/images/services/FaceModulator.jpg',
    imageHint: 'full wrinkle treatment',
    group: 'Altruva Lift',
    groupDescription: { en: 'Aging is an evolution. Let’s refine the process.', id: 'Penuaan adalah evolusi. Mari kita perbaiki prosesnya.' },
    subgroup: 'Signature Restoration',
    subtitle: {
      en: "Total Muscle Harmony. Signature Precision. By dr. Aldisa.",
      id: "Harmoni Otot Total. Presisi Khas. Oleh dr. Aldisa."
    },
    longDescription: {
      en: `Altruva Face Modulator (Full Dose) is a full-spectrum neuromodulation protocol that redefines facial freshness through strategic, personalized botulinum toxin mapping. Engineered for those over 40, this treatment is not about freezing expression — it’s about resetting facial balance, lifting fatigue, and restoring dynamic symmetry with natural grace.<br/><br/>Dr. Aldisa applies her expertise in facial anatomy, aging patterns, and personalized dosing to harmonize muscle activity across the face — from frown lines and jaw tension to brow positioning and perioral movement. The result? A refreshed, rested, and refined look that feels like you — only better.`,
      id: `Altruva Face Modulator (Dosis Penuh) adalah protokol neuromodulasi spektrum penuh yang mendefinisikan kembali kesegaran wajah melalui pemetaan toksin botulinum yang strategis dan dipersonalisasi. Direkayasa untuk mereka yang berusia di atas 40 tahun, perawatan ini bukan tentang membekukan ekspresi — ini tentang mengatur ulang keseimbangan wajah, mengangkat kelelahan, dan memulihkan simetri dinamis dengan keanggunan alami.<br/><br/>Dr. Aldisa menerapkan keahliannya dalam anatomi wajah, pola penuaan, dan dosis yang dipersonalisasi untuk menyelaraskan aktivitas otot di seluruh wajah — dari garis kerutan dan ketegangan rahang hingga posisi alis dan gerakan perioral. Hasilnya? Tampilan yang segar, beristirahat, dan halus yang terasa seperti Anda — hanya lebih baik.`
    },
    quote: {
      text: {
        en: "Expression is human. Modulation is art. My role is to enhance your face’s natural rhythm — not mute it.",
        id: "Ekspresi adalah manusia. Modulasi adalah seni. Peran saya adalah untuk meningkatkan ritme alami wajah Anda — bukan membungkamnya."
      },
      author: {
        en: "dr. Olivia Aldisa, Architect of Altruva Face Modulator",
        id: "dr. Olivia Aldisa, Arsitek Altruva Face Modulator"
      }
    },
    whatIsIt: {
      title: { en: "How It Works", id: "Cara Kerjanya" },
      description: {
        en: `<p class="mb-2">Utilizing full-dose botulinum toxin, dr. Aldisa performs full-face mapping to:</p>
      <ul class="list-disc pl-5 space-y-1" style="padding-left: 40px;">
        <li><strong>Modulate muscle tone</strong> contributing to fatigue, imbalance, or aged expressions</li>
        <li><strong>Lift areas prone to descent</strong> without the heaviness of dermal filler</li>
        <li><strong>Reset overused muscles</strong> for a more neutral, rested facial state</li>
      </ul>
      <p class="mt-4">This protocol supports muscle balance, not paralysis — delivering a naturally lifted, refreshed result with smooth transitions and intentional preservation of character lines when desired.</p>`,
        id: `<p class="mb-2">Memanfaatkan toksin botulinum dosis penuh, dr. Aldisa melakukan pemetaan seluruh wajah untuk:</p>
      <ul class="list-disc pl-5 space-y-1" style="padding-left: 40px;">
        <li><strong>Memodulasi tonus otot</strong> yang berkontribusi pada kelelahan, ketidakseimbangan, atau ekspresi tua</li>
        <li><strong>Mengangkat area yang rentan turun</strong> tanpa berat pengisi dermal</li>
        <li><strong>Mengatur ulang otot yang terlalu sering digunakan</strong> untuk keadaan wajah yang lebih netral dan beristirahat</li>
      </ul>
      <p class="mt-4">Protokol ini mendukung keseimbangan otot, bukan kelumpuhan — memberikan hasil yang terangkat secara alami dan segar dengan transisi yang mulus dan pelestarian garis karakter yang disengaja bila diinginkan.</p>`
      }
    },
    howItDiffers: {
      en: `Why Full Dose? Post-40 facial shifts deepen lines and create downward vectors; full-dose modulation reverses this. Comprehensive mapping enables precise targeting of asymmetry and tension. This is a bespoke neuromodulation blueprint, where every injection serves a purpose in the harmony of your facial expression.`,
      id: `Mengapa Dosis Penuh? Pergeseran wajah pasca-40 memperdalam garis dan menciptakan vektor ke bawah; modulasi dosis penuh membalikkan ini. Pemetaan komprehensif memungkinkan penargetan asimetri dan ketegangan yang tepat. Ini adalah cetak biru neuromodulasi pesanan, di mana setiap suntikan memiliki tujuan dalam harmoni ekspresi wajah Anda.`
    },
    benefits: [
      { en: 'Custom eyebrow lifting without “surprised” brows', id: 'Pengangkatan alis khusus tanpa alis “terkejut”' },
      { en: 'Reduces tired or tense look around the eyes', id: 'Mengurangi tampilan lelah atau tegang di sekitar mata' },
      {
        en: 'Softens static and dynamic wrinkles (glabella, forehead, crow’s feet)',
        id: 'Melembutkan kerutan statis dan dinamis (glabella, dahi, kerutan di sudut mata)'
      },
      { en: 'Refines jawline and smooths neck bands', id: 'Menghaluskan garis rahang dan menghaluskan pita leher' },
      { en: 'Reduces downward pull around mouth and chin', id: 'Mengurangi tarikan ke bawah di sekitar mulut dan dagu' },
      {
        en: 'Delivers balanced muscle tone for long-term facial wellness',
        id: 'Memberikan tonus otot yang seimbang untuk kesehatan wajah jangka panjang'
      },
      { en: 'Maintains expression integrity — no “overdone” look', id: 'Menjaga integritas ekspresi — tidak ada tampilan “berlebihan”' }
    ],
    indications: [
      {
        en: 'Women and men >40 seeking refreshed, lifted, yet natural expression',
        id: 'Wanita dan pria >40 yang mencari ekspresi segar, terangkat, namun alami'
      },
      { en: 'Facial asymmetry or signs of muscular imbalance', id: 'Asimetri wajah atau tanda-tanda ketidakseimbangan otot' },
      {
        en: 'Long-term neuromodulator users ready for elevated customization',
        id: 'Pengguna neuromodulator jangka panjang yang siap untuk kustomisasi tingkat lanjut'
      },
      {
        en: 'Patients desiring facial lifting without fillers or surgery',
        id: 'Pasien yang menginginkan pengangkatan wajah tanpa pengisi atau operasi'
      },
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '20–30 minutes', id: '20–30 menit' } },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'Minimal (some bruising possible)', id: 'Minimal (kemungkinan memar)' }
      },
      {
        label: { en: 'Onset', id: 'Mulai' },
        value: { en: '5–7 days, with full results in 10–14 days', id: '5–7 hari, dengan hasil penuh dalam 10–14 hari' }
      },
      { label: { en: 'Longevity', id: 'Daya Tahan' }, value: { en: '3–5 months (patient-dependent)', id: '3–5 bulan (tergantung pasien)' } },
    ]
  },
  {
    id: 'sculpt-lift-plus',
    title: 'Sculpt Lift +',
    description: { en: 'Facial contour sculpting &amp; detoxification.', id: 'Pahatan kontur wajah & detoksifikasi.' },
    price: '4,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'face sculpting',
    group: 'Altruva Lift',
    groupDescription: { en: 'Aging is an evolution. Let’s refine the process.', id: 'Penuaan adalah evolusi. Mari kita perbaiki prosesnya.' },
    subgroup: 'Signature Restoration'
  },

  // --- Body Treatments ---
  {
    id: 'altruva-neocurve',
    title: 'Altruva NeoCurve by EmSculpt Neo',
    description: {
      en: 'Advanced body contouring to build muscle and reduce fat.',
      id: 'Pembentukan kontur tubuh tingkat lanjut untuk membangun otot dan mengurangi lemak.'
    },
    price: 'Price on consultation',
    category: 'Body',
    Icon: Zap,
    imageSrc: '/images/services/emsculpt-neo.webp',
    imageHint: 'body sculpting machine',
    group: 'Body Contouring',
    groupDescription: {
      en: 'Sculpt, tone, and refine your body with our advanced treatments.',
      id: 'Pahat, kencangkan, dan sempurnakan tubuh Anda dengan perawatan canggih kami.'
    },
    subgroup: 'Muscle &amp; Fat',
    subtitle: {
      en: 'Shape Redefined. Strength Amplified. Contour, Regenerate, Elevate.',
      id: 'Bentuk Didefinisikan Ulang. Kekuatan Diperkuat. Kontur, Regenerasi, Tingkatkan.'
    },
    longDescription: {
      en: 'When it comes to body contouring, fat reduction is no longer enough. Altruva NeoCurve is the next-generation protocol that delivers dual-action transformation — reducing fat while building real muscle — without needles, downtime, or compromise. This signature treatment harnesses the power of EmSculpt Neo, the only FDA-cleared device that simultaneously uses radiofrequency (RF) and HIFEM+ (High-Intensity Focused Electromagnetic energy) to burn fat and stimulate deep muscle contractions beyond what the human body can achieve naturally. Tailored exclusively at Altruva for clients who demand both aesthetic finesse and physiological performance — NeoCurve is not just about slimming, it’s about recomposition and metabolic renewal.',
      id: 'Dalam hal pembentukan kontur tubuh, pengurangan lemak tidak lagi cukup. Altruva NeoCurve adalah protokol generasi berikutnya yang memberikan transformasi aksi ganda — mengurangi lemak sambil membangun otot nyata — tanpa jarum, waktu henti, atau kompromi. Perawatan khas ini memanfaatkan kekuatan EmSculpt Neo, satu-satunya perangkat yang disetujui FDA yang secara bersamaan menggunakan frekuensi radio (RF) dan HIFEM+ (energi Elektromagnetik Terfokus Intensitas Tinggi) untuk membakar lemak dan merangsang kontraksi otot dalam di luar apa yang dapat dicapai tubuh manusia secara alami. Disesuaikan secara eksklusif di Altruva untuk klien yang menuntut kemahiran estetika dan kinerja fisiologis — NeoCurve bukan hanya tentang pelangsingan, ini tentang rekomposisi dan pembaruan metabolik.'
    },
    quote: {
      text: {
        en: "With NeoCurve, we’re not just sculpting — we’re resetting your physiology. Stronger. Leaner. Sharper.",
        id: "Dengan NeoCurve, kami tidak hanya memahat — kami mengatur ulang fisiologi Anda. Lebih kuat. Lebih ramping. Lebih tajam."
      },
      author: {
        en: "dr. Olivia Aldisa, Functional Aesthetic Strategist & Regenerative Contour Specialist",
        id: "dr. Olivia Aldisa, Ahli Strategi Estetika Fungsional & Spesialis Kontur Regeneratif"
      }
    },
    whatIsIt: {
      title: { en: 'Science Behind the Curve', id: 'Ilmu di Balik Lekuk' },
      description: {
        en: `<strong>Dual-Energy Synergy:</strong><br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Radiofrequency (RF)</strong> gently heats the fat layer, triggering apoptosis (fat cell death). These cells are then eliminated naturally through the lymphatic system over weeks.</li><li><strong>HIFEM+ Energy</strong> penetrates deep into the muscle layer, generating 20,000+ supramaximal contractions per session — the type of muscle engagement that cannot be achieved through exercise alone.</li></ul><p class="mt-2"><strong>Outcome:</strong> Simultaneous fat destruction and muscle hypertrophy — safely, comfortably, and efficiently.</p>`,
        id: `<strong>Sinergi Energi Ganda:</strong><br/><ul class="list-disc pl-5 mt-2 space-y-1" style="padding-left: 40px;"><li><strong>Frekuensi Radio (RF)</strong> dengan lembut memanaskan lapisan lemak, memicu apoptosis (kematian sel lemak). Sel-sel ini kemudian dihilangkan secara alami melalui sistem limfatik selama beberapa minggu.</li><li><strong>Energi HIFEM+</strong> menembus jauh ke dalam lapisan otot, menghasilkan 20.000+ kontraksi supramaksimal per sesi — jenis keterlibatan otot yang tidak dapat dicapai hanya melalui olahraga.</li></ul><p class="mt-2"><strong>Hasil:</strong> Penghancuran lemak dan hipertrofi otot secara bersamaan — dengan aman, nyaman, dan efisien.</p>`
      }
    },
    benefits: [
      { en: 'Up to 25% increase in muscle volume*', id: 'Peningkatan volume otot hingga 25%*' },
      { en: 'Up to 30% subcutaneous fat reduction*', id: 'Pengurangan lemak subkutan hingga 30%*' },
      { en: 'Mild RF-based tightening in superficial layers', id: 'Pengencangan berbasis RF ringan di lapisan superfisial' },
      {
        en: 'Improved posture, core control, and physical tone',
        id: 'Peningkatan postur, kontrol inti, dan nada fisik'
      },
      { en: 'A more defined, athletic, confident silhouette', id: 'Siluet yang lebih jelas, atletis, dan percaya diri' }
    ],
    indications: [
      { en: 'Abdomen', id: 'Perut' },
      { en: 'Arms', id: 'Lengan' },
      { en: 'Thighs', id: 'Paha' },
      { en: 'Buttocks', id: 'Bokong' },
      { en: 'Calves', id: 'Bettis' },
    ],
    protocol: [
      {
        label: { en: 'Sessions', id: 'Sesi' },
        value: { en: '4 treatments, spaced one week apart', id: '4 perawatan, dengan jarak satu minggu' }
      },
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '30 minutes per area', id: '30 menit per area' } },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'None – resume daily activity immediately', id: 'Tidak ada – lanjutkan aktivitas harian segera' }
      },
      {
        label: { en: 'Results', id: 'Hasil' },
        value: { en: 'Begin at 2–4 weeks; peak by 12 weeks post-final session', id: 'Mulai pada 2–4 minggu; puncak pada 12 minggu pasca-sesi terakhir' }
      },
      {
        label: { en: 'Maintenance', id: 'Pemeliharaan' },
        value: {
          en: 'Optional 1–2 booster sessions per quarter for sustained tone',
          id: 'Opsional 1–2 sesi pendorong per kuartal untuk nada yang berkelanjutan'
        }
      },
    ],
    whyLoveIt: [
      {
        en: '<strong>Total Body Recomposition:</strong> not just fat loss, but functional muscular strength.',
        id: '<strong>Rekomposisi Tubuh Total:</strong> bukan hanya kehilangan lemak, tetapi kekuatan otot fungsional.'
      },
      {
        en: '<strong>Safe for All Skin Types:</strong> including post-partum and peri-menopausal patients.',
        id: '<strong>Aman untuk Semua Jenis Kulit:</strong> termasuk pasien pasca-melahirkan dan peri-menopause.'
      },
      {
        en: '<strong>Curated by Dr. Aldisa:</strong> personalized mapping and treatment plans for optimal results.',
        id: '<strong>Dikurasi oleh Dr. Aldisa:</strong> pemetaan yang dipersonalisasi dan rencana perawatan untuk hasil yang optimal.'
      },
      {
        en: '<strong>Metabolic Edge:</strong> improved basal metabolic rate through increased lean mass.',
        id: '<strong>Keunggulan Metabolik:</strong> peningkatan laju metabolisme basal melalui peningkatan massa tanpa lemak.'
      },
      {
        en: '<strong>Fitness Plateau Breakthrough:</strong> perfect for those already training or stuck at a plateau.',
        id: '<strong>Terobosan Dataran Tinggi Kebugaran:</strong> sempurna bagi mereka yang sudah berlatih atau terjebak di dataran tinggi.'
      },
    ],
  },
  {
    id: 'altruva-lipo-elixir',
    title: 'Altruva Lipo Elixir',
    description: {
      en: 'Targeted fat-dissolving injections for stubborn areas.',
      id: 'Suntikan pelarut lemak yang ditargetkan untuk area membandel.'
    },
    price: 'Price on consultation',
    category: 'Body',
    Icon: Droplets,
    imageSrc: '/images/services/lipo-elixir.jpeg',
    imageHint: 'injection treatment',
    group: 'Body Contouring',
    groupDescription: {
      en: 'Sculpt, tone, and refine your body with our advanced treatments.',
      id: 'Pahat, kencangkan, dan sempurnakan tubuh Anda dengan perawatan canggih kami.'
    },
    subgroup: 'Fat Reduction',
    subtitle: {
      en: 'Precision Fat Sculpting Through Science-Driven Apoptosis',
      id: 'Pahatan Lemak Presisi Melalui Apoptosis yang Didorong Sains'
    },
    longDescription: {
      en: `For patients seeking refined facial or body contouring — without surgery or inflammation — Altruva Lipo Elixir offers a cutting-edge approach to fat modulation through controlled fat cell apoptosis. Rooted in biomedical innovation and powered by Alsavique's Fat Apoptosis formulation, this treatment targets stubborn fat deposits with molecular precision, inducing natural cellular clearance without the trauma of necrosis.<br/><br/>Curated for facial debulking, double chin, lower face heaviness, and small localized body fat zones, this protocol is the epitome of non-inflammatory lipolysis — championed by doctors seeking finesse over force.`,
      id: `Bagi pasien yang mencari kontur wajah atau tubuh yang halus — tanpa operasi atau peradangan — Altruva Lipo Elixir menawarkan pendekatan mutakhir untuk modulasi lemak melalui apoptosis sel lemak yang terkontrol. Berakar pada inovasi biomedis dan didukung oleh formulasi Apoptosis Lemak Alsavique, perawatan ini menargetkan deposit lemak membandel dengan presisi molekuler, menginduksi pembersihan seluler alami tanpa trauma nekrosis.<br/><br/>Dikurasi untuk debulking wajah, dagu ganda, berat wajah bagian bawah, dan zona lemak tubuh lokal kecil, protokol ini adalah lambang lipolisis non-inflamasi — diperjuangkan oleh dokter yang mencari kehalusan di atas kekuatan.`
    },
    quote: {
      text: {
        en: "Fat isn’t just about removal — it’s about intelligent repositioning, modulation, and preservation of facial identity. Lipo Elixir lets us sculpt — not shrink — beauty.",
        id: "Lemak bukan hanya tentang penghapusan — ini tentang reposisi cerdas, modulasi, dan pelestarian identitas wajah. Lipo Elixir memungkinkan kita memahat — bukan menyusutkan — kecantikan."
      },
      author: {
        en: "dr. Olivia Aldisa, Regenerative Sculpting Pioneer",
        id: "dr. Olivia Aldisa, Perintis Pahat Regeneratif"
      }
    },
    whatIsIt: {
      title: { en: 'How It Works: Apoptosis-Induced Fat Clearance', id: 'Cara Kerjanya: Pembersihan Lemak yang Diinduksi Apoptosis' },
      description: {
        en: `<p>Unlike aggressive fat-melting injections that cause inflammation or necrosis, Altruva Lipo Elixir induces programmed cell death (apoptosis), a clean and biologically harmonious process in which unwanted fat cells self-destruct and are metabolically cleared over time.</p>
      <h4 class="font-semibold text-primary mt-4">Fenton’s Reaction Mechanism</h4>
      <p>This unique injectable cocktail uses a biochemical process involving ascorbic acid + ferric iron to trigger Fenton’s Reaction, generating reactive oxygen species (ROS) that selectively target and initiate apoptosis in adipocytes (fat cells), while sparing surrounding tissues.</p>
      <h4 class="font-semibold text-primary mt-4">No Swelling, No Necrosis, No Downtime</h4>
      <p>This elegant mechanism avoids inflammatory breakdown and delivers controlled volume reduction — perfect for patients desiring precise sculpting without puffiness or bruising.</p>`,
        id: `<p>Tidak seperti suntikan pelarut lemak agresif yang menyebabkan peradangan atau nekrosis, Altruva Lipo Elixir menginduksi kematian sel terprogram (apoptosis), proses yang bersih dan harmonis secara biologis di mana sel-sel lemak yang tidak diinginkan menghancurkan diri sendiri dan dibersihkan secara metabolik seiring waktu.</p>
      <h4 class="font-semibold text-primary mt-4">Mekanisme Reaksi Fenton</h4>
      <p>Koktail suntik unik ini menggunakan proses biokimia yang melibatkan asam askorbat + besi ferri untuk memicu Reaksi Fenton, menghasilkan spesies oksigen reaktif (ROS) yang secara selektif menargetkan dan memulai apoptosis pada adiposit (sel lemak), sambil menyisakan jaringan di sekitarnya.</p>
      <h4 class="font-semibold text-primary mt-4">Tanpa Bengkak, Tanpa Nekrosis, Tanpa Waktu Henti</h4>
      <p>Mekanisme elegan ini menghindari kerusakan inflamasi dan memberikan pengurangan volume terkontrol — sempurna untuk pasien yang menginginkan pahatan presisi tanpa bengkak atau memar.</p>`
      }
    },
    benefits: [
      { en: 'Non-Inflammatory Fat Reduction', id: 'Pengurangan Lemak Non-Inflamasi' },
      { en: 'Facial and Body Precision', id: 'Presisi Wajah dan Tubuh' },
      { en: 'Natural Clearance Process', id: 'Proses Pembersihan Alami' },
      { en: 'Stackable with Contouring Treatments', id: 'Dapat Ditumpuk dengan Perawatan Kontur' }
    ],
    indications: [
      { en: 'Lower cheeks (“bulldog face”)', id: 'Pipi bawah (“wajah bulldog”)' },
      { en: 'Double chin / submental fullness', id: 'Dagu ganda / kepenuhan submental' },
      { en: 'Jowls', id: 'Jowls' },
      { en: 'Bra bulge / small back rolls', id: 'Tonjolan bra / gulungan punggung kecil' },
      { en: 'Under-butt / banana roll', id: 'Bawah bokong / gulungan pisang' }
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '20–30 minutes', id: '20–30 menit' } },
      { label: { en: 'Injection Points', id: 'Titik Injeksi' }, value: { en: 'Strategic and minimal', id: 'Strategis dan minimal' } },
      {
        label: { en: 'Sessions Needed', id: 'Sesi yang Dibutuhkan' },
        value: { en: '2–4 sessions, spaced 2–3 weeks apart', id: '2–4 sesi, dengan jarak 2–3 minggu' }
      },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'Minimal – mild tenderness or redness only', id: 'Minimal – hanya nyeri ringan atau kemerahan' }
      },
      {
        label: { en: 'Visible Effects', id: 'Efek Terlihat' },
        value: { en: 'Start from 2 weeks; peak at 6–8 weeks', id: 'Mulai dari 2 minggu; puncak pada 6–8 minggu' }
      },
    ],
    whyLoveIt: [
      {
        en: 'Expertly tailored by dr. Olivia Aldisa using anatomical mapping and facial balancing protocols to ensure not only fat reduction — but facial harmony and natural regeneration.',
        id: 'Disesuaikan secara ahli oleh dr. Olivia Aldisa menggunakan pemetaan anatomi dan protokol penyeimbangan wajah untuk memastikan tidak hanya pengurangan lemak — tetapi juga harmoni wajah dan regenerasi alami.'
      }
    ]
  },
  {
    id: 'altruva-regenerative-rf-body',
    title: 'Altruva Regenerative RF (Body)',
    description: {
      en: 'Radiofrequency for skin tightening and cellulite reduction on the body.',
      id: 'Frekuensi radio untuk mengencangkan kulit dan mengurangi selulit di tubuh.'
    },
    price: 'Price on consultation',
    category: 'Body',
    Icon: HeartPulse,
    imageSrc: '/images/services/regenerativerf.png',
    imageHint: 'rf body treatment',
    group: 'Body Contouring',
    groupDescription: {
      en: 'Sculpt, tone, and refine your body with our advanced treatments.',
      id: 'Pahat, kencangkan, dan sempurnakan tubuh Anda dengan perawatan canggih kami.'
    },
    subgroup: 'Skin Tightening',
    subtitle: {
      en: 'Smart Sculpting. Deep Regeneration. Non-Surgical Body Recontouring.',
      id: 'Pahatan Cerdas. Regenerasi Dalam. Pembentukan Ulang Tubuh Non-Bedah.'
    },
    longDescription: {
      en: 'Altruva Regenerative RF (Body) is a needle-free, non-invasive sculpting solution that merges next-generation Radiofrequency (RF) and Ultrasound energy to regenerate the skin from within while reducing stubborn body fat. This dual-action technology enhances collagen, elastin, and hyaluronic acid production, visibly firms loose skin, and refines body contours — with zero downtime.<br/><br/>For patients seeking elegant body reshaping without invasive procedures, this is the ultimate regenerative contouring protocol — and it pairs seamlessly with Altruva Lipo Elixir for amplified fat modulation and tightening.',
      id: 'Altruva Regenerative RF (Tubuh) adalah solusi pahatan non-invasif tanpa jarum yang menggabungkan energi Frekuensi Radio (RF) dan Ultrasound generasi berikutnya untuk meregenerasi kulit dari dalam sambil mengurangi lemak tubuh yang membandel. Teknologi aksi ganda ini meningkatkan produksi kolagen, elastin, dan asam hialuronat, mengencangkan kulit kendur secara nyata, dan menghaluskan kontur tubuh — dengan waktu henti nol.<br/><br/>Bagi pasien yang mencari pembentukan kembali tubuh yang elegan tanpa prosedur invasif, ini adalah protokol kontur regeneratif utama — dan ini berpasangan mulus dengan Altruva Lipo Elixir untuk modulasi dan pengencangan lemak yang diperkuat.'
    },
    quote: {
      text: {
        en: "Body sculpting is no longer about burning fat — it’s about regenerating structure, improving skin integrity, and restoring confidence — the Altruva way.",
        id: "Pahatan tubuh bukan lagi tentang membakar lemak — ini tentang meregenerasi struktur, meningkatkan integritas kulit, dan mengembalikan kepercayaan diri — cara Altruva."
      },
      author: {
        en: "dr. Olivia Aldisa, Advanced Contouring Specialist",
        id: "dr. Olivia Aldisa, Spesialis Kontur Tingkat Lanjut"
      }
    },
    whatIsIt: {
      title: { en: 'How It Works: Dual-Action Technology', id: 'Cara Kerjanya: Teknologi Aksi Ganda' },
      description: {
        en: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;">
          <li><strong>RF-Driven Collagen Remodeling:</strong> Targeted RF energy gently heats the dermis and subdermal tissues, stimulating fibroblasts to increase collagen and elastin synthesis — critical for firm, elastic, youthful-looking skin.</li>
          <li><strong>Ultrasound-Powered Fat Disruption:</strong> Focused ultrasound waves mechanically disrupt fat cell membranes and induce lipolysis, accelerating fat reduction in resistant areas.</li>
          <li><strong>Endogenous HA Booster:</strong> The technology uniquely stimulates natural hyaluronic acid production, enhancing hydration and skin plumpness from the inside out.</li>
      </ul>`,
        id: `<ul class="list-disc pl-5 mt-2 space-y-2" style="padding-left: 40px;">
          <li><strong>Perombakan Kolagen yang Didorong RF:</strong> Energi RF yang ditargetkan dengan lembut memanaskan dermis dan jaringan subdermal, merangsang fibroblas untuk meningkatkan sintesis kolagen dan elastin — penting untuk kulit yang kencang, elastis, dan tampak muda.</li>
          <li><strong>Gangguan Lemak Bertenaga Ultrasound:</strong> Gelombang ultrasound terfokus secara mekanis mengganggu membran sel lemak dan menginduksi lipolisis, mempercepat pengurangan lemak di area yang resistan.</li>
          <li><strong>Pendorong HA Endogen:</strong> Teknologi ini secara unik merangsang produksi asam hialuronat alami, meningkatkan hidrasi dan kekenyalan kulit dari dalam ke luar.</li>
      </ul>`
      }
    },
    benefits: [
      {
        en: 'Firms and tightens sagging skin on the abdomen, thighs, arms, and more',
        id: 'Mengencangkan dan menguatkan kulit kendur di perut, paha, lengan, dan lainnya'
      },
      { en: 'Reduces stubborn fat via mechanical lipolysis', id: 'Mengurangi lemak membandel melalui lipolisis mekanis' },
      {
        en: 'Improves texture and cellulite by remodeling connective tissue',
        id: 'Meningkatkan tekstur dan selulit dengan merombak jaringan ikat'
      },
      {
        en: 'Boosts hydration and elasticity through HA stimulation',
        id: 'Meningkatkan hidrasi dan elastisitas melalui stimulasi HA'
      },
      {
        en: 'Non-invasive & painless with no needles, surgery, or social downtime',
        id: 'Non-invasif & tanpa rasa sakit tanpa jarum, operasi, atau waktu henti sosial'
      }
    ],
    indications: [
      { en: 'Abdomen', id: 'Perut' },
      { en: 'Flanks', id: 'Panggul' },
      { en: 'Arms', id: 'Lengan' },
      { en: 'Thighs', id: 'Paha' },
      { en: 'Buttocks', id: 'Bokong' }
    ],
    protocol: [
      {
        label: { en: 'Duration', id: 'Durasi' },
        value: { en: '30–60 minutes per area', id: '30–60 menit per area' }
      },
      {
        label: { en: 'Sessions Needed', id: 'Sesi yang Dibutuhkan' },
        value: { en: '4–6 sessions, spaced 1–2 weeks apart', id: '4–6 sesi, dengan jarak 1–2 minggu' }
      },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'Minimal to none', id: 'Minimal hingga tidak ada' }
      },
      {
        label: { en: 'Results Timeline', id: 'Garis Waktu Hasil' },
        value: { en: 'Progressive over 6–12 weeks post-treatment', id: 'Progresif selama 6–12 minggu pasca-perawatan' }
      },
    ],
    whyLoveIt: [
      {
        en: '<strong>Why Combine with Lipo Elixir?</strong> Regenerative RF and Lipo Elixir are complementary — one triggers apoptosis to gently reduce fat volume, while the other tightens and regenerates the overlying skin. Together, they deliver smarter debulking, harmonized contours, and long-term regeneration.',
        id: '<strong>Mengapa Menggabungkan dengan Lipo Elixir?</strong> RF Regeneratif dan Lipo Elixir saling melengkapi — satu memicu apoptosis untuk mengurangi volume lemak dengan lembut, sementara yang lain mengencangkan dan meregenerasi kulit di atasnya. Bersama-sama, mereka memberikan debulking yang lebih cerdas, kontur yang selaras, dan regenerasi jangka panjang.'
      }
    ]
  },
  {
    id: 'altruva-lipofreeze',
    title: 'Altruva LipoFreeze by CoolSculpting®',
    description: {
      en: 'Freeze away unwanted fat cells permanently with cryolipolysis.',
      id: 'Bekukan sel-sel lemak yang tidak diinginkan secara permanen dengan cryolipolysis.'
    },
    price: 'Price on consultation',
    category: 'Body',
    Icon: Star,
    imageSrc: '/images/services/lipofreeze.jpg',
    imageHint: 'cryolipolysis machine',
    group: 'Body Contouring',
    groupDescription: {
      en: 'Sculpt, tone, and refine your body with our advanced treatments.',
      id: 'Pahat, kencangkan, dan sempurnakan tubuh Anda dengan perawatan canggih kami.'
    },
    subgroup: 'Fat Reduction',
    subtitle: {
      en: 'Science-Led. Clinically Precise. Zero Downtime Fat Removal — by dr. Aldisa.',
      id: 'Dipimpin Sains. Presisi Klinis. Penghapusan Lemak Tanpa Waktu Henti — oleh dr. Aldisa.'
    },
    longDescription: {
      en: `Altruva LipoFreeze is the signature non-surgical fat reduction protocol at Altruva, powered by the original CoolSculpting® Elite technology and personalized by dr. Olivia Aldisa, official CoolSculpting KOL, international trainer, and finalist at AMWC Monaco 2024 for Non-Surgical Body Shaping.<br/><br/>With over a decade of clinical data and more than 100 peer-reviewed studies, CoolSculpting is the gold standard in cryolipolysis, trusted worldwide for its safety, precision, and long-term results.`,
      id: `Altruva LipoFreeze adalah protokol pengurangan lemak non-bedah khas di Altruva, didukung oleh teknologi CoolSculpting® Elite asli dan dipersonalisasi oleh dr. Olivia Aldisa, KOL resmi CoolSculpting, pelatih internasional, dan finalis di AMWC Monaco 2024 untuk Pembentukan Tubuh Non-Bedah.<br/><br/>Dengan lebih dari satu dekade data klinis dan lebih dari 100 studi yang ditinjau oleh rekan sejawat, CoolSculpting adalah standar emas dalam cryolipolysis, dipercaya di seluruh dunia untuk keamanan, presisi, dan hasil jangka panjangnya.`
    },
    quote: {
      text: {
        en: "The real artistry in body shaping lies in knowing what not to freeze — precision is everything. LipoFreeze is not just technology, it’s a treatment philosophy.",
        id: "Seni sejati dalam pembentukan tubuh terletak pada mengetahui apa yang tidak boleh dibekukan — presisi adalah segalanya. LipoFreeze bukan hanya teknologi, ini adalah filosofi perawatan."
      },
      author: {
        en: "dr. Olivia Aldisa, Global CoolSculpting Trainer & Regenerative Body Shaping Expert",
        id: "dr. Olivia Aldisa, Pelatih CoolSculpting Global & Ahli Pembentukan Tubuh Regeneratif"
      }
    },
    whatIsIt: {
      title: { en: 'The Science Behind LipoFreeze', id: 'Ilmu di Balik LipoFreeze' },
      description: {
        en: `<h4 class="font-semibold text-primary">Cryolipolysis:</h4><p>CoolSculpting delivers controlled cooling to selectively target and freeze fat cells without damaging surrounding tissue. Fat cells, being more sensitive to cold than skin, undergo apoptosis (cell death) and are naturally eliminated by the lymphatic system over time.</p><h4 class="font-semibold text-primary mt-4">No Needles. No Surgery. No Downtime.</h4><p>LipoFreeze is fully non-invasive, offering transformative fat reduction with zero social disruption.</p>`,
        id: `<h4 class="font-semibold text-primary">Cryolipolysis:</h4><p>CoolSculpting memberikan pendinginan terkontrol untuk menargetkan dan membekukan sel-sel lemak secara selektif tanpa merusak jaringan di sekitarnya. Sel-sel lemak, yang lebih sensitif terhadap dingin daripada kulit, mengalami apoptosis (kematian sel) dan secara alami dihilangkan oleh sistem limfatik seiring waktu.</p><h4 class="font-semibold text-primary mt-4">Tanpa Jarum. Tanpa Operasi. Tanpa Waktu Henti.</h4><p>LipoFreeze sepenuhnya non-invasif, menawarkan pengurangan lemak transformatif tanpa gangguan sosial.</p>`
      }
    },
    benefits: [
      { en: 'Up to 27% fat reduction per session (clinical average)', id: 'Pengurangan lemak hingga 27% per sesi (rata-rata klinis)' },
      { en: 'FDA-cleared for 9 body areas', id: 'Disetujui FDA untuk 9 area tubuh' },
      { en: 'No surgery, anesthesia, or needles', id: 'Tanpa operasi, anestesi, atau jarum' },
      { en: 'Clinically proven safety profile', id: 'Profil keamanan yang terbukti secara klinis' },
      { en: 'Immediate return to normal activities', id: 'Kembali ke aktivitas normal segera' },
      { en: 'Natural-looking contour refinement', id: 'Perbaikan kontur yang tampak alami' }
    ],
    indications: [
      { en: 'Abdomen & Flanks', id: 'Perut & Panggul' },
      { en: 'Upper Arms', id: 'Lengan Atas' },
      { en: 'Inner & Outer Thighs', id: 'Paha Dalam & Luar' },
      { en: 'Bra Fat & Back Rolls', id: 'Lemak Bra & Gulungan Punggung' },
      { en: 'Submental (Double Chin)', id: 'Submental (Dagu Ganda)' },
      { en: 'Banana Roll (Under Buttock)', id: 'Gulungan Pisang (Bawah Bokong)' },
    ],
    protocol: [
      {
        label: { en: 'Duration per area', id: 'Durasi per area' },
        value: { en: '35–60 minutes', id: '35–60 menit' }
      },
      {
        label: { en: 'Number of sessions', id: 'Jumlah sesi' },
        value: { en: '1–3 depending on area and fat volume', id: '1–3 tergantung pada area dan volume lemak' }
      },
      {
        label: { en: 'Onset of results', id: 'Mulai hasil' },
        value: { en: 'Visible at 30 days; peak at 12 weeks', id: 'Terlihat pada 30 hari; puncak pada 12 minggu' }
      },
      {
        label: { en: 'Longevity', id: 'Daya Tahan' },
        value: { en: 'Permanent fat cell reduction*', id: 'Pengurangan sel lemak permanen*' }
      },
      { label: { en: 'Downtime', id: 'Waktu Henti' }, value: { en: 'None', id: 'Tidak ada' } },
      {
        label: { en: 'Discomfort', id: 'Ketidaknyamanan' },
        value: { en: 'Mild, mostly cold sensation & tugging', id: 'Ringan, sebagian besar sensasi dingin & tarikan' }
      }
    ],
    whyLoveIt: [
      {
        en: '<strong>Led by a Global Expert:</strong> All treatments are mapped and performed under the guidance of dr. Aldisa, ensuring world-class technique and safety.',
        id: '<strong>Dipimpin oleh Pakar Global:</strong> Semua perawatan dipetakan dan dilakukan di bawah bimbingan dr. Aldisa, memastikan teknik dan keamanan kelas dunia.'
      },
      {
        en: '<strong>DualSculpting Efficiency:</strong> Treat two areas simultaneously with Altruva’s Elite Dual Applicator System, halving treatment time.',
        id: '<strong>Efisiensi DualSculpting:</strong> Rawat dua area secara bersamaan dengan Sistem Aplikator Ganda Elite Altruva, mengurangi separuh waktu perawatan.'
      },
      {
        en: '<strong>Tailored Body Blueprinting:</strong> Every contour plan is custom-created based on fat layer thickness, skin quality, and body proportion, ensuring results that are natural and elegant — never uneven or bulky.',
        id: '<strong>Cetak Biru Tubuh yang Disesuaikan:</strong> Setiap rencana kontur dibuat khusus berdasarkan ketebalan lapisan lemak, kualitas kulit, dan proporsi tubuh, memastikan hasil yang alami dan elegan — tidak pernah tidak rata atau besar.'
      },
      {
        en: '<i>“My clothes fit better, my waist looks sculpted — and no one guessed I had anything done. That’s the Altruva magic.”</i> - A satisfied patient.',
        id: '<i>“Pakaian saya pas lebih baik, pinggang saya terlihat terpahat — dan tidak ada yang menduga saya melakukan apa pun. Itulah keajaiban Altruva.”</i> - Pasien yang puas.'
      },
    ]
  },

  // --- Hair Treatments ---
  {
    id: 'altruva-micrograft-technology',
    title: 'Altruva Micrograft Technology',
    description: {
      en: 'A revolutionary approach to hair restoration using your own tissue.',
      id: 'Pendekatan revolusioner untuk restorasi rambut menggunakan jaringan Anda sendiri.'
    },
    price: 'Price on consultation',
    category: 'Hair',
    Icon: Microscope,
    imageSrc: '/images/services/micrograf.jpg',
    imageHint: 'hair follicle science',
    group: 'Hair Restoration',
    groupDescription: {
      en: 'Advanced solutions for hair thinning and loss.',
      id: 'Solusi canggih untuk penipisan dan kerontokan rambut.'
    },
    subgroup: 'Advanced Restoration',
    subtitle: { en: 'Activate Dormant Follicles. Regrow What’s Yours — Naturally.', id: 'Aktifkan Folikel yang Tidak Aktif. Tumbuhkan Kembali Milik Anda — Secara Alami.' },
    longDescription: {
      en: 'Altruva Micrograft Technology is a cutting-edge autologous cellular regeneration treatment that utilizes your own biological blueprint to restore thinning hair and enhance follicular vitality — without surgery, foreign substances, or downtime.<br/><br/>This next-generation hair rejuvenation protocol isolates progenitor cells, growth factors, and regenerative matrices from your own scalp tissue and reintroduces them into thinning zones — where they reawaken dormant follicles, improve scalp microcirculation, and lay the foundation for thicker, denser, and more resilient hair.',
      id: 'Teknologi Mikrograf Altruva adalah perawatan regenerasi seluler autologus mutakhir yang memanfaatkan cetak biru biologis Anda sendiri untuk memulihkan rambut yang menipis dan meningkatkan vitalitas folikel — tanpa operasi, zat asing, atau waktu henti.<br/><br/>Protokol peremajaan rambut generasi berikutnya ini mengisolasi sel progenitor, faktor pertumbuhan, dan matriks regeneratif dari jaringan kulit kepala Anda sendiri dan memperkenalkannya kembali ke zona penipisan — di mana mereka membangunkan kembali folikel yang tidak aktif, meningkatkan sirkulasi mikro kulit kepala, dan meletakkan dasar untuk rambut yang lebih tebal, lebih padat, dan lebih tangguh.'
    },
    whatIsIt: {
      title: { en: 'How It Works: From You, For You', id: 'Cara Kerjanya: Dari Anda, Untuk Anda' },
      description: {
        en: `<ol class="list-decimal pl-5 space-y-2" >
        <li><strong class="text-primary">Tissue Harvesting:</strong> A small punch biopsy (usually from the occipital scalp) is taken — typically less than 2.5mm, requiring no sutures.</li>
        <li><strong class="text-primary">Cellular Isolation:</strong> Using sterile, closed-loop processing, the tissue is gently fragmented to release a regenerative blend of:
          <ul class="list-disc pl-5 mt-1" style="padding-left: 40px;">
            <li>Progenitor cells</li>
            <li>Fibroblasts</li>
            <li>Growth factors</li>
            <li>Extracellular matrix fragments</li>
          </ul>
        </li>
        <li><strong class="text-primary">Precision Injection:</strong> This bioactive micrograft suspension is then re-injected into areas of thinning, typically the frontal, temporal, and crown regions.</li>
        <li><strong class="text-primary">Regeneration Begins:</strong> These cells work to stimulate angiogenesis, revive follicular niches, and rebalance the hair cycle — from resting (telogen) back to growing (anagen).</li>
      </ol>`,
        id: `<ol class="list-decimal pl-5 space-y-2" >
        <li><strong class="text-primary">Pemanenan Jaringan:</strong> Biopsi punch kecil (biasanya dari kulit kepala oksipital) diambil — biasanya kurang dari 2,5mm, tidak memerlukan jahitan.</li>
        <li><strong class="text-primary">Isolasi Seluler:</strong> Menggunakan pemrosesan loop tertutup yang steril, jaringan dipecah dengan lembut untuk melepaskan campuran regeneratif dari:
          <ul class="list-disc pl-5 mt-1" style="padding-left: 40px;">
            <li>Sel progenitor</li>
            <li>Fibroblas</li>
            <li>Faktor pertumbuhan</li>
            <li>Fragmen matriks ekstraseluler</li>
          </ul>
        </li>
        <li><strong class="text-primary">Injeksi Presisi:</strong> Suspensi mikrograf bioaktif ini kemudian disuntikkan kembali ke area penipisan, biasanya daerah frontal, temporal, dan mahkota.</li>
        <li><strong class="text-primary">Regenerasi Dimulai:</strong> Sel-sel ini bekerja untuk merangsang angiogenesis, menghidupkan kembali ceruk folikel, dan menyeimbangkan kembali siklus rambut — dari istirahat (telogen) kembali ke tumbuh (anagen).</li>
      </ol>`
      }
    },
    benefits: [
      {
        en: 'Autologous & Biocompatible: 100% from your body. No chemicals. No risk of rejection.',
        id: 'Autologus & Biokompatibel: 100% dari tubuh Anda. Tanpa bahan kimia. Tanpa risiko penolakan.'
      },
      {
        en: 'Improves Hair Density: Particularly effective in early to moderate androgenetic alopecia.',
        id: 'Meningkatkan Kepadatan Rambut: Sangat efektif pada alopesia androgenetik dini hingga sedang.'
      },
      {
        en: 'Reawakens Dormant Follicles: Especially beneficial for miniaturized or inactive follicles.',
        id: 'Membangunkan Kembali Folikel yang Tidak Aktif: Sangat bermanfaat untuk folikel yang mengalami miniaturisasi atau tidak aktif.'
      },
      {
        en: 'Minimal Downtime: Return to daily activities almost immediately after the procedure.',
        id: 'Waktu Henti Minimal: Kembali ke aktivitas sehari-hari segera setelah prosedur.'
      },
      {
        en: 'Pairs Synergistically: Amplify results with oral nutricosmetics, hair serums, LLLT (laser caps), or RF microneedling.',
        id: 'Berpasangan Secara Sinergis: Perkuat hasil dengan nutrikosmetik oral, serum rambut, LLLT (topi laser), atau microneedling RF.'
      }
    ],
    protocol: [
      {
        label: { en: 'Duration', id: 'Durasi' },
        value: { en: '45–60 minutes (including harvest + injection)', id: '45–60 menit (termasuk panen + injeksi)' }
      },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'Minimal – mild sensitivity for 24–48 hrs', id: 'Minimal – sensitivitas ringan selama 24–48 jam' }
      },
      {
        label: { en: 'Sessions', id: 'Sesi' },
        value: { en: '1–2 yearly for maintenance (based on severity)', id: '1–2 kali setahun untuk pemeliharaan (berdasarkan tingkat keparahan)' }
      },
      {
        label: { en: 'Results', id: 'Hasil' },
        value: { en: 'Visible improvements from 2–3 months onward', id: 'Perbaikan terlihat dari 2–3 bulan ke depan' }
      },
      {
        label: { en: 'Ideal For', id: 'Ideal Untuk' },
        value: { en: 'Early to moderate hair thinning, both men and women', id: 'Penipisan rambut dini hingga sedang, baik pria maupun wanita' }
      },
      {
        label: { en: 'Not Ideal For', id: 'Tidak Ideal Untuk' },
        value: { en: 'Complete bald areas or scarred scalp zones', id: 'Area botak total atau zona kulit kepala yang terluka' }
      },
    ],
    whyLoveIt: [
      {
        en: 'Each Altruva Micrograft treatment is mapped and performed by dr. Olivia Aldisa, ensuring targeted precision and optimal integration with your scalp’s vascular pattern and follicular anatomy.',
        id: 'Setiap perawatan Mikrograf Altruva dipetakan dan dilakukan oleh dr. Olivia Aldisa, memastikan presisi yang ditargetkan dan integrasi optimal dengan pola vaskular dan anatomi folikel kulit kepala Anda.'
      }
    ]
  },
  {
    id: 'altruva-hair-prf',
    title: 'Altruva Hair PRF',
    description: {
      en: 'Platelet-Rich Fibrin therapy to stimulate hair follicles and promote growth.',
      id: 'Terapi Platelet-Rich Fibrin untuk merangsang folikel rambut dan mendorong pertumbuhan.'
    },
    price: 'Price on consultation',
    category: 'Hair',
    Icon: HeartPulse,
    imageSrc: '/images/services/prf-hair-therapy.png',
    imageHint: 'hair growth therapy',
    group: 'Hair Restoration',
    groupDescription: {
      en: 'Advanced solutions for hair thinning and loss.',
      id: 'Solusi canggih untuk penipisan dan kerontokan rambut.'
    },
    subgroup: 'Growth Boosters',
    subtitle: { en: "Awaken Your Follicles. Heal From Within.", id: "Bangunkan Folikel Anda. Sembuh Dari Dalam." },
    longDescription: {
      en: `Altruva Hair PRF is a powerful regenerative scalp therapy that leverages your body’s own healing intelligence to restore thinning hair, reduce shedding, and improve scalp vitality — all without synthetic additives or foreign substances.<br/><br/>Using Platelet-Rich Fibrin (PRF) — a second-generation regenerative concentrate rich in growth factors, fibrin scaffolds, white blood cells, and stem-like cells — this treatment reactivates dormant follicles and amplifies the scalp’s microenvironment for healthy, resilient hair regrowth.<br/><br/>Curated by dr. Olivia Aldisa, this protocol is ideal for both men and women experiencing early to moderate hair thinning, especially in androgenetic alopecia.`,
      id: `Altruva Hair PRF adalah terapi kulit kepala regeneratif yang kuat yang memanfaatkan kecerdasan penyembuhan tubuh Anda sendiri untuk memulihkan rambut yang menipis, mengurangi kerontokan, dan meningkatkan vitalitas kulit kepala — semua tanpa aditif sintetis atau zat asing.<br/><br/>Menggunakan Platelet-Rich Fibrin (PRF) — konsentrat regeneratif generasi kedua yang kaya akan faktor pertumbuhan, perancah fibrin, sel darah putih, dan sel seperti punca — perawatan ini mengaktifkan kembali folikel yang tidak aktif dan memperkuat lingkungan mikro kulit kepala untuk pertumbuhan kembali rambut yang sehat dan tangguh.<br/><br/>Dikurasi oleh dr. Olivia Aldisa, protokol ini ideal untuk pria dan wanita yang mengalami penipisan rambut dini hingga sedang, terutama pada alopesia androgenetik.`
    },
    quote: {
      text: {
        en: "Hair loss isn’t always about genetics. Sometimes, it’s about giving your follicles the right environment to thrive. And that’s exactly what we do with PRF.",
        id: "Kerontokan rambut tidak selalu tentang genetika. Terkadang, ini tentang memberikan folikel Anda lingkungan yang tepat untuk berkembang. Dan itulah yang kami lakukan dengan PRF."
      },
      author: {
        en: "dr. Olivia Aldisa, Aesthetic Regeneration Specialist",
        id: "dr. Olivia Aldisa, Spesialis Regenerasi Estetika"
      }
    },
    whatIsIt: {
      title: { en: "What is PRF (Platelet-Rich Fibrin)?", id: "Apa itu PRF (Platelet-Rich Fibrin)?" },
      description: {
        en: `Unlike traditional PRP, PRF is spun at a lower centrifugation speed and contains no anticoagulants, allowing for:
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>A natural fibrin matrix that acts as a scaffold for cell signaling</li>
        <li>Slow, sustained release of growth factors for prolonged stimulation</li>
        <li>Higher concentrations of platelets, leukocytes, and CD34+ cells (progenitor-like stem cells)</li>
      </ul>`,
        id: `Tidak seperti PRP tradisional, PRF diputar dengan kecepatan sentrifugasi yang lebih rendah dan tidak mengandung antikoagulan, memungkinkan untuk:
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Matriks fibrin alami yang bertindak sebagai perancah untuk pensinyalan sel</li>
        <li>Pelepasan faktor pertumbuhan yang lambat dan berkelanjutan untuk stimulasi yang berkepanjangan</li>
        <li>Konsentrasi platelet, leukosit, dan sel CD34+ (sel seperti punca progenitor) yang lebih tinggi</li>
      </ul>`
      }
    },
    howItDiffers: {
      en: "PRF is spun at a lower centrifugation speed without anticoagulants, creating a natural fibrin matrix that allows for a slow, sustained release of growth factors over several days. This is in contrast to PRP, which provides a quick burst. PRF also contains a higher concentration of beneficial cells, making it a more advanced regenerative option.",
      id: "PRF diputar dengan kecepatan sentrifugasi yang lebih rendah tanpa antikoagulan, menciptakan matriks fibrin alami yang memungkinkan pelepasan faktor pertumbuhan secara lambat dan berkelanjutan selama beberapa hari. Ini berbeda dengan PRP, yang memberikan ledakan cepat. PRF juga mengandung konsentrasi sel bermanfaat yang lebih tinggi, menjadikannya pilihan regeneratif yang lebih canggih."
    },
    mechanism: [
      {
        title: { en: 'Blood Collection', id: 'Pengambilan Darah' },
        description: { en: 'A small blood sample is drawn in a special PRF tube.', id: 'Sampel darah kecil diambil dalam tabung PRF khusus.' }
      },
      {
        title: { en: 'Centrifugation', id: 'Sentrifugasi' },
        description: {
          en: 'The sample is spun gently to separate components while preserving cellular integrity.',
          id: 'Sampel diputar dengan lembut untuk memisahkan komponen sambil menjaga integritas seluler.'
        }
      },
      {
        title: { en: 'Injection Into the Scalp', id: 'Injeksi ke Kulit Kepala' },
        description: {
          en: 'The golden PRF layer is injected precisely into areas of thinning.',
          id: 'Lapisan PRF emas disuntikkan secara tepat ke area penipisan.'
        }
      },
      {
        title: { en: 'Gradual Activation', id: 'Aktivasi Bertahap' },
        description: {
          en: 'The fibrin matrix releases potent growth signals over several days, rejuvenating hair follicles and improving tissue oxygenation.',
          id: 'Matriks fibrin melepaskan sinyal pertumbuhan yang kuat selama beberapa hari, meremajakan folikel rambut dan meningkatkan oksigenasi jaringan.'
        }
      }
    ],
    benefits: [
      { en: 'Thicker Hair Shafts: Encourages stronger, denser regrowth', id: 'Batang Rambut Lebih Tebal: Mendorong pertumbuhan kembali yang lebih kuat dan lebih padat' },
      { en: 'Slows Hair Loss: Reduces miniaturization and active shedding', id: 'Memperlambat Kerontokan Rambut: Mengurangi miniaturisasi dan kerontokan aktif' },
      {
        en: 'Boosts Scalp Circulation: Enhances delivery of oxygen and nutrients',
        id: 'Meningkatkan Sirkulasi Kulit Kepala: Meningkatkan pengiriman oksigen dan nutrisi'
      },
      {
        en: 'Improves Scalp Health: Anti-inflammatory and reparative for compromised scalps',
        id: 'Meningkatkan Kesehatan Kulit Kepala: Anti-inflamasi dan reparatif untuk kulit kepala yang terganggu'
      },
      { en: 'Completely Natural: No foreign substances, additives, or medications', id: 'Sepenuhnya Alami: Tanpa zat asing, aditif, atau obat-obatan' }
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '30–45 minutes', id: '30–45 menit' } },
      {
        label: { en: 'Downtime', id: 'Waktu Henti' },
        value: { en: 'None (mild tenderness for 1–2 days possible)', id: 'Tidak ada (kemungkinan nyeri ringan selama 1–2 hari)' }
      },
      {
        label: { en: 'Sessions', id: 'Sesi' },
        value: { en: '3–4 sessions, spaced 4–6 weeks apart', id: '3–4 sesi, dengan jarak 4–6 minggu' }
      },
      {
        label: { en: 'Maintenance', id: 'Pemeliharaan' },
        value: { en: '1–2 times yearly for sustained results', id: '1–2 kali setahun untuk hasil yang berkelanjutan' }
      },
      {
        label: { en: 'Ideal For', id: 'Ideal Untuk' },
        value: { en: 'Men and women with mild to moderate hair thinning', id: 'Pria dan wanita dengan penipisan rambut ringan hingga sedang' }
      }
    ],
    whyLoveIt: [
      {
        en: 'Each session is mapped and executed by dr. Olivia Aldisa, who applies her expertise in aesthetic regenerative medicine to ensure precision delivery and custom dosage based on the patient’s needs.',
        id: 'Setiap sesi dipetakan dan dilaksanakan oleh dr. Olivia Aldisa, yang menerapkan keahliannya dalam kedokteran regeneratif estetika untuk memastikan pengiriman presisi dan dosis khusus berdasarkan kebutuhan pasien.'
      }
    ]
  },
  {
    id: 'altruva-hair-booster',
    title: 'Altruva Hair Booster',
    description: {
      en: 'A potent cocktail of nutrients and growth factors injected into the scalp.',
      id: 'Koktail kuat nutrisi dan faktor pertumbuhan yang disuntikkan ke kulit kepala.'
    },
    price: 'Price on consultation',
    category: 'Hair',
    Icon: Droplets,
    imageSrc: '/images/services/hairbooster.png',
    imageHint: 'scalp injection',
    group: 'Hair Restoration',
    groupDescription: {
      en: 'Advanced solutions for hair thinning and loss.',
      id: 'Solusi canggih untuk penipisan dan kerontokan rambut.'
    },
    subgroup: 'Growth Boosters',
    subtitle: {
      en: 'Targeted Scalp Therapy for Thicker, Stronger, Healthier Hair',
      id: 'Terapi Kulit Kepala Bertarget untuk Rambut Lebih Tebal, Kuat, dan Sehat'
    },
    longDescription: {
      en: `Altruva Hair Booster is an advanced mesotherapy solution meticulously designed to combat male and female pattern hair loss (androgenetic alopecia) and revitalize the scalp. Leveraging Fusion Meso F-Hair Men — a clinically proven cocktail of growth factors, peptides, hyaluronic acid, and essential minerals — this treatment activates follicular regeneration, strengthens existing hair shafts, and creates an optimal environment for new hair growth.`,
      id: `Altruva Hair Booster adalah solusi mesoterapi canggih yang dirancang dengan cermat untuk memerangi kerontokan rambut pola pria dan wanita (alopesia androgenetik) dan merevitalisasi kulit kepala. Memanfaatkan Fusion Meso F-Hair Men — koktail faktor pertumbuhan, peptida, asam hialuronat, dan mineral esensial yang terbukti secara klinis — perawatan ini mengaktifkan regenerasi folikel, memperkuat batang rambut yang ada, dan menciptakan lingkungan yang optimal untuk pertumbuhan rambut baru.`
    },
    quote: {
      text: {
        en: "Hair rejuvenation isn’t a one-time fix — it’s a journey. With Altruva Hair Booster, we offer you not just a treatment, but a protocol of follicular rehabilitation.",
        id: "Peremajaan rambut bukan perbaikan satu kali — ini adalah perjalanan. Dengan Altruva Hair Booster, kami tidak hanya menawarkan perawatan, tetapi juga protokol rehabilitasi folikel."
      },
      author: {
        en: "dr. Olivia Aldisa, Expert in Regenerative Aesthetic Medicine",
        id: "dr. Olivia Aldisa, Ahli Kedokteran Estetika Regeneratif"
      }
    },
    whatIsIt: {
      title: { en: 'What It Is', id: 'Apa Itu' },
      description: {
        en: `A high-performance scalp mesotherapy protocol using microinjections of regenerative actives, Altruva Hair Booster nourishes the dermal papilla and reactivates the hair cycle with minimal discomfort or downtime.
Ideal for men and women in early to moderate stages of hair thinning or shedding.`,
        id: `Protokol mesoterapi kulit kepala berkinerja tinggi yang menggunakan suntikan mikro bahan aktif regeneratif, Altruva Hair Booster menutrisi papila dermal dan mengaktifkan kembali siklus rambut dengan ketidaknyamanan atau waktu henti minimal.
Ideal untuk pria dan wanita pada tahap awal hingga sedang penipisan atau kerontokan rambut.`
      }
    },
    mechanism: [
      {
        title: { en: 'EGF, FGF, VEGF (Growth Factors)', id: 'EGF, FGF, VEGF (Faktor Pertumbuhan)' },
        description: {
          en: 'Stimulate hair follicles at a cellular level, prolong the anagen (growth) phase, and enhance microvascular perfusion.',
          id: 'Merangsang folikel rambut pada tingkat seluler, memperpanjang fase anagen (pertumbuhan), dan meningkatkan perfusi mikrovaskular.'
        }
      },
      {
        title: { en: 'Acetyl Tetrapeptide-3 & Red Clover Extract', id: 'Asetil Tetrapeptida-3 & Ekstrak Semanggi Merah' },
        description: {
          en: 'Reinforce anchoring proteins, inhibit DHT-related follicle damage, and reduce inflammation in the scalp.',
          id: 'Memperkuat protein penahan, menghambat kerusakan folikel terkait DHT, dan mengurangi peradangan di kulit kepala.'
        }
      },
      {
        title: { en: 'Hyaluronic Acid', id: 'Asam Hialuronat' },
        description: {
          en: 'Delivers intense hydration to the scalp and improves barrier function, reducing dryness, flakiness, and irritation.',
          id: 'Memberikan hidrasi intens ke kulit kepala dan meningkatkan fungsi penghalang, mengurangi kekeringan, pengelupasan, dan iritasi.'
        }
      },
      {
        title: { en: 'Carnosine & Organic Silica', id: 'Karnosin & Silika Organik' },
        description: {
          en: 'Strengthen connective tissue and protect against oxidative stress that accelerates follicular miniaturization.',
          id: 'Memperkuat jaringan ikat dan melindungi dari stres oksidatif yang mempercepat miniaturisasi folikel.'
        }
      },
      {
        title: {
          en: 'Essential Trace Elements (Zinc, Copper, Calcium, Magnesium)',
          id: 'Elemen Jejak Esensial (Seng, Tembaga, Kalsium, Magnesium)'
        },
        description: {
          en: 'Critical cofactors that support keratin synthesis and optimal follicular metabolism.',
          id: 'Kofaktor penting yang mendukung sintesis keratin dan metabolisme folikel yang optimal.'
        }
      },
    ],
    benefits: [
      { en: 'Reduces active hair loss and thinning', id: 'Mengurangi kerontokan dan penipisan rambut aktif' },
      { en: 'Reactivates dormant follicles', id: 'Mengaktifkan kembali folikel yang tidak aktif' },
      { en: 'Improves hair shaft quality and strength', id: 'Meningkatkan kualitas dan kekuatan batang rambut' },
      { en: 'Hydrates and rebalances the scalp', id: 'Menghidrasi dan menyeimbangkan kembali kulit kepala' },
      { en: 'Supports long-term scalp and follicle health', id: 'Mendukung kesehatan kulit kepala dan folikel jangka panjang' },
      { en: 'Safe and effective for androgenic alopecia', id: 'Aman dan efektif untuk alopesia androgenik' }
    ],
    protocol: [
      { label: { en: 'Duration', id: 'Durasi' }, value: { en: '30–40 minutes', id: '30–40 menit' } },
      { label: { en: 'Discomfort', id: 'Ketidaknyamanan' }, value: { en: 'Mild – numbing optional', id: 'Ringan – mati rasa opsional' } },
      {
        label: { en: 'Sessions', id: 'Sesi' },
        value: { en: '4–6 sessions, spaced 10–14 days apart', id: '4–6 sesi, dengan jarak 10–14 hari' }
      },
      {
        label: { en: 'Maintenance', id: 'Pemeliharaan' },
        value: { en: 'Every 3–6 months depending on individual response', id: 'Setiap 3–6 bulan tergantung pada respons individu' }
      },
      { label: { en: 'Downtime', id: 'Waktu Henti' }, value: { en: 'None to minimal', id: 'Tidak ada hingga minimal' } },
    ],
    whyLoveIt: [
      { en: 'Scientifically backed formulation', id: 'Formulasi yang didukung secara ilmiah' },
      { en: 'FDA-registered ingredients from Fusion Meso (Europe)', id: 'Bahan-bahan terdaftar FDA dari Fusion Meso (Eropa)' },
      {
        en: 'Customized by dr. Olivia Aldisa — KOL and regenerative expert',
        id: 'Disesuaikan oleh dr. Olivia Aldisa — KOL dan ahli regeneratif'
      },
      {
        en: 'Synergistic with PRF, Micrograft, and oral nutricosmetics',
        id: 'Sinergis dengan PRF, Mikrograf, dan nutrikosmetik oral'
      }
    ]
  },
  {
    id: 'altruva-lift-signature',
    title: 'Altruva Lift Signature',
    description: {
      en: 'A combination therapy for maximum lift and rejuvenation, tailored to you.',
      id: 'Terapi kombinasi untuk pengangkatan dan peremajaan maksimal, disesuaikan untuk Anda.'
    },
    price: 'Price on consultation',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'signature facelift procedure',
    group: 'Altruva Lift',
    groupDescription: { en: 'Aging is an evolution. Let’s refine the process.', id: 'Penuaan adalah evolusi. Mari kita perbaiki prosesnya.' },
    subgroup: 'Restoration &amp; Lifting'
  }
];


export interface GalleryImage {
  id: string;
  beforeSrc: string;
  afterSrc: string;
  procedure: string;
  description: string;
  beforeHint: string;
  afterHint: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    beforeSrc: 'https://placehold.co/400x400.png',
    afterSrc: 'https://placehold.co/400x400.png',
    procedure: 'Age-Defy Injections',
    description: 'Significant reduction in forehead lines and crow\'s feet.',
    beforeHint: 'wrinkled forehead',
    afterHint: 'smooth forehead'
  },
  {
    id: '2',
    beforeSrc: 'https://placehold.co/400x400.png',
    afterSrc: 'https://placehold.co/400x400.png',
    procedure: 'Laser Rejuvenation',
    description: 'Improved skin tone and texture, reduction in sun spots.',
    beforeHint: 'sun damaged skin',
    afterHint: 'clear skin'
  },
  {
    id: '3',
    beforeSrc: 'https://placehold.co/400x400.png',
    afterSrc: 'https://placehold.co/400x400.png',
    procedure: 'Divine Glow Facial',
    description: 'Enhanced radiance and clarity after a series of facials.',
    beforeHint: 'dull skin',
    afterHint: 'glowing skin'
  },
  {
    id: '4',
    beforeSrc: 'https://placehold.co/400x400.png',
    afterSrc: 'https://placehold.co/400x400.png',
    procedure: 'Lip Enhancement',
    description: 'Fuller, more defined lips with a natural look.',
    beforeHint: 'thin lips',
    afterHint: 'full lips'
  },
];

export interface Testimonial {
  id: string;
  name: string;
  text: Record<'en' | 'id', string>;
  procedure: string;
  rating: number; // 1-5 stars
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Indy Natalia',
    text: {
      en: 'First time here, honestly not like other clinics. It feels more homey. I am learning about the concept of regenerative treatment & tried the Exion reg. Laser 2 weeks ago. Looks good on me! Very recommended!',
      id: 'Pertama kali kesini, honestly nggak kayak klinik lain. Lebih homey ya, lagi belajar konsep treatment regeneratif & nyobain Exion reg. Laser 2 weeks ago. Looks good on me! Very recommended!',
    },
    procedure: 'Regenerative Laser',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sutan Haudhy',
    text: {
      en: 'I accompanied my wife to Altruva Clinic for her acne scar treatment — the place is homey, the waiting room is also super chill. My wife is very happy with the results, she just finished the treatment but the glowing results are already visible. So far, Altruva is totally worth it!',
      id: 'I accompanied my wife to Altruva Clinic for her acne scar treatment — tempatnya homie, waiting room-nya juga super chill. Istri gue very happy with the results, baru kelar treatment tp udah keliatan glowing hasilnya. So far sih, Altruva worth it banget!',
    },
    procedure: 'Acne Scar Treatment',
    rating: 5,
  },
  {
    id: '3',
    name: 'Dike Nugroho',
    text: {
      en: 'The doctor is very informative, explaining every step of the treatment clearly. She even explained in detail what technology the tools have.',
      id: 'Dokternya sangat informatif, menjelaskan setiap langkah treatment dengan jelas. Bahkan menjelaskan dg detail alat-alatnya tuh punya teknologi apa aja',
    },
    procedure: 'Consultation',
    rating: 5,
  },
  {
    id: '4',
    name: 'Woro Purnamasari',
    text: {
      en: 'If you are looking for an aesthetic clinic that is comfortable, private, and gives natural results, Altruva is the answer. This clinic is owned by dr. Aldisa who has more than 12 years of experience, so from the initial consultation, I was immediately convinced.',
      id: 'Kalau cari klinik estetik yang nyaman, private, dan hasilnya kelihatan natural, Altruva adalah jawabannya. Klinik ini milik dr. Aldisa yang sudah berpengalaman lebih dari 12 tahun, jadi dari awal konsultasi pun udah langsung yakin.',
    },
    procedure: 'Aesthetic Consultation',
    rating: 5,
  },
  {
    id: '5',
    name: 'Dwi Nurul',
    text: {
      en: 'Highly recommended for anyone who wants to treat their facial skin with real results. I will definitely come here again. Thank you Dr. Aldisa and the Altruva team for the outstanding service!😊 🙌✨',
      id: 'Highly recommended untuk siapa pun yang ingin merawat kulit wajah dengan hasil nyata. Saya pasti akan datang ke sini lagi. Terima kasih Dr.Aldisa dan tim Altruva atas pelayanannya yang luar biasa!😊 🙌✨',
    },
    procedure: 'Facial Treatment',
    rating: 5,
  },
  {
    id: '6',
    name: 'Prassalli Story',
    text: {
       en: 'Feels like home. It feels like coming home and venting to your mom about acne. Then mom goes to the kitchen to make medicine for acne. Meanwhile, dad invites you to chat on the terrace while having coffee and fried bananas. The effect is, you don\'t want to go home 😁',
       id: 'Feels like home. Berasa pulang ke rumah dan curhat sama nyokap soal jerawat. Lalu nyokap ke dapur bikin obat buat jerawat. Sementara itu bokap ngajak ngobrol di teras sambil ngopi dan ngemil pisang goreng. Efeknya, gak pengen pulang 😁'
    },
    procedure: 'Acne Treatment',
    rating: 5,
  }
];


export interface aiAnalysisFeature {
    Icon: LucideIcon;
    title: Record<'en' | 'id', string>;
    description: Record<'en' | 'id', string>;
}

export const aiAnalysisFeatures: aiAnalysisFeature[] = [
    {
      Icon: Bot,
      title: {
        en: "Personalized Insights",
        id: "Wawasan yang Dipersonalisasi"
      },
      description: {
        en: "Receive skin type and condition analysis tailored to you.",
        id: "Terima analisis jenis dan kondisi kulit yang disesuaikan untuk Anda."
      }
    },
    {
      Icon: Star,
      title: {
        en: "Custom Recommendations",
        id: "Rekomendasi Khusus"
      },
      description: {
        en: "Get product and routine suggestions based on your unique needs.",
        id: "Dapatkan saran produk dan rutinitas berdasarkan kebutuhan unik Anda."
      }
    },
    {
      Icon: Sun,
      title: {
        en: "Targeted Treatments",
        id: "Perawatan yang Ditargetkan"
      },
      description: {
        en: "Discover suitable treatments for your specific skin concerns.",
        id: "Temukan perawatan yang sesuai untuk masalah kulit spesifik Anda."
      }
    }
];

export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageHint: string;
  date: string;
  href: string;
  content?: string;
}

export const insights: Insight[] = [
  {
    id: 'lip-wrinkles-101',
    title: 'Kerutan Bibir Bikin 10 Tahun Lebih Tua? No way!',
    excerpt: 'Keriput bibir, yang kadang-kadang disebut garis bibir, garis lipstik, atau garis perokok, adalah garis vertikal kecil yang terbentuk di bibir orang dewasa yang lebih tua. Garis-garis ini terkenal sulit untuk disembunyikan. Daripada ditutupi terus-menerus, lebih baik kita bahas cara untuk memperbaikinya.',
    imageSrc: '',
    imageHint: '',
    date: 'August 12, 2024',
    href: '/insights/lip-wrinkles-101',
    content: `
      <p>By dr. Olivia Aldisa</p>
      <h2>Penyebab Kerutan Bibir</h2>
      <p>Kulit yang menua juga menghasilkan lebih sedikit minyak, yang dapat menyebabkan kekeringan kronis. Cuaca yang kering dan kurang minum air putih juga dapat memperparah hal ini. Penyebab utama lain dari garis bibir adalah paparan sinar matahari. Kulit di bibir Anda sangat halus dan sering kali tidak terlindungi. Paparan sinar ultraviolet matahari adalah penyebab utama penuaan dini. Proses ini disebut photoaging. Kerutan pada bibir atas sering disebabkan oleh rokok. Merokok menghasilkan radikal bebas dalam tubuh, yang berkontribusi terhadap penuaan dini. Gerakan menghisap rokok dapat menyebabkan kerutan pada bibir. Kerutan pada bibir juga dapat menyebabkan mengerucutkan bibir yang berhubungan dengan minum menggunakan sedotan atau ekspresi wajah yang berulang.</p>
      
      <h2>Mencegah Bibir Berkerut Sejak Dini</h2>
      <p>Meskipun ada daftar panjang faktor yang harus dihindari, cara termudah untuk mencegah garis bibir adalah sebagai berikut: Jangan merokok (atau vape), hindari minum dari sedotan sebisa mungkin, tetap terhidrasi dan minum air putih minimal 2 liter sehari, hidrasi bibir dengan produk pelembab, terutama pelembab bibir yang mengandung tabir surya minimal SPF 30.</p>
      
      <h2>Treatment yang Tepat Untuk Bibir Berkerut</h2>
      <p>Ada beberapa hal yang dapat Anda lakukan di rumah untuk memperbaiki tanda-tanda penuaan pada dan di sekitar mulut Anda. Krim dan serum yang merangsang produksi kolagen adalah awal yang baik. Gunakan terutama setiap malam sebelum tidur agar Anda dapat merasakan manfaatnya. Ada beberapa produk di pasaran yang mengklaim sebagai lip plumper, meskipun ini tidak akan membantu jika bibir Anda menipis dan berkerut selama bertahun-tahun. Apabila bibir Anda sudah terlanjur menunjukkan tanda-tanda kerutan, jangan panik. Treatment sedini mungkin dan tepat guna dapat memudarkan kerutan bibir Anda sebelum menjadi lebih dalam lagi. Dr. Aldisa akan memeriksa area sekitar bibir Anda secara menyeluruh tidak hanya di bibir saja. Hal ini akan sangat membantu tidak hanya bibir Anda tampak sehat, namun juga harmonis pada wajah Anda. Setelah itu, bibir Anda akan di-teratment sesuai dengan diagnosis dokter. Treatment Lip Flip untuk kerutan bibir ini bisa berupa atau kombinasi dari : neuromodulator (Botox) untuk merilekskan garis-garis halus di atas bibir Anda karena smoker’s line, lip dermal filllers yaitu penyuntikan produk asam hialuronat khusus bibir pada area yang membutuhkan. Treatment ini tidak hanya membuat bibir tampak segar dan mengisi garis-garis bibir, namun juga sekaligus melembabkannya. Yang terakhir, yaitu treatment mutakhir hanya dari dr. Aldisa yaitu “Inflammaging Savior”. Selain untuk kulit wajah, treatment ini juga sangat cocok sebagai penangkal kerutan di sekitar bibir. Terutama untuk para pemula yang belum berani untuk melakukan treatment injeksi.</p>
      <p>Treatment ini menggunakan teknologi micro-infused microneedling dengan gawai tercanggih di kelasnya untuk membentuk saluran-saluran mikro di mana serum unik racikan dokter ahli yang mengandung 135 multi vitamin, mineral, dan anti-oksidan serta asam hialuronat akan meresap ke lapisan dermal kulit. Hasilnya, dalam 2-3 kali perawatan kerutan di sekitar bibir Anda akan memudar secara signifikan. Treatment ini juga dapat dikombinasikan dengan perawatan lainnya. Konsultasikan kebutuhan Anda kepada dr. Aldisa untuk segera tampil awet muda dengan bibir sehat bebas kerut!</p>
    `
  },
  {
    id: '2',
    title: 'Prejuvenation: The Philosophy of "Future-Proofing" Your Skin',
    excerpt: 'Discover why the best anti-aging strategy is starting early. We explain the concept of prejuvenation and how it preserves your skin\'s youthful vitality.',
    imageSrc: '',
    imageHint: '',
    date: 'July 28, 2024',
    href: '/insights/prejuvenation-philosophy',
    content: `
      <h2>An Investment in Your Future Self</h2>
      <p>Prejuvenation is a proactive approach to skincare and aesthetics that focuses on preventing the signs of aging before they become prominent. Instead of waiting to correct wrinkles, sagging, and volume loss, prejuvenation uses targeted, minimally invasive treatments to maintain the skin's structural integrity and youthful function. This might include treatments that boost collagen production, protect against environmental damage, and optimize skin hydration. By starting early, you can significantly slow down the aging process, ensuring your skin stays healthier and more vibrant for longer.</p>
    `
  },
  {
    id: '3',
    title: 'A.R.T Lyft by Sofwave: The Future of Non-Surgical Lifting',
    excerpt: 'Learn how SUPERB™ (Synchronous Ultrasound Parallel Beam) technology is setting a new standard for non-invasive facelifts, delivering natural results without the downtime.',
    imageSrc: '',
    imageHint: '',
    date: 'July 21, 2024',
    href: '/insights/art-lyft-sofwave',
    content: `
      <h2>Lifting, Redefined</h2>
      <p>For those seeking a noticeable lift without the surgery, A.R.T Lyft by Sofwave offers a groundbreaking solution. Using SUPERB™ (Synchronous Ultrasound Parallel Beam) technology, this treatment delivers controlled thermal energy to the mid-dermis, the precise depth where collagen production is most critical. This process stimulates a powerful healing response, leading to the creation of new collagen and elastin. The result is a significant reduction in fine lines and wrinkles and a visible lifting and tightening of the skin, all with minimal to no downtime.</p>
    `
  },
  {
    id: '4',
    title: 'Understanding Your Skin Type: An AI-Powered Approach',
    excerpt: 'Our AI Skin Analysis tool demystifies your unique skin needs. Find out how technology can guide you to your most effective skincare routine ever.',
    imageSrc: '',
    imageHint: '',
    date: 'July 14, 2024',
    href: '/insights/ai-skin-analysis',
    content: `
      <h2>Personalization Through Technology</h2>
      <p>The one-size-fits-all approach to skincare is a thing of the past. To achieve the best results, you need to understand your skin's unique characteristics and concerns. Our AI Skin Analysis tool takes the guesswork out of the equation. By analyzing a photo of your skin and your answers to a brief questionnaire, our advanced algorithm can identify your skin type, detect underlying conditions, and provide personalized recommendations for both at-home products and in-clinic treatments. It's the first step toward a truly effective, data-driven skincare journey.</p>
    `
  },
];


// Glow Quiz Data
export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export const glowQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What’s your current skin/aesthetic priority?",
    options: [
      { text: "I want glowing, hydrated skin and to delay signs of aging", score: 1 },
      { text: "I want to firm up some areas and to reduce pigmentation or early sagging", score: 2 },
      { text: "I want visible lift, volume restoration, and long-term rejuvenation", score: 3 },
    ],
  },
  {
    id: 2,
    question: "How often are you realistically able to visit the clinic in a year?",
    options: [
      { text: "2–3 times a year (quarterly or less)", score: 1 },
      { text: "Every 2–3 months, I can commit", score: 2 },
      { text: "Monthly visits are fine if structured", score: 3 },
    ],
  },
  {
    id: 3,
    question: "What’s your comfort level with injectable treatments (e.g., Skinboosters, Botox, Biostimulators, Fillers)?",
    options: [
      { text: "Prefer minimal or light injections", score: 1 },
      { text: "I’m open to injectables if they’re gradual", score: 2 },
      { text: "I’m comfortable with structural injections and fillers", score: 3 },
    ],
  },
  {
    id: 4,
    question: "Which outcome matters most to you?",
    options: [
      { text: "Skin quality, glow, and maintaining youthful texture", score: 1 },
      { text: "Preventing aging signs like mild laxity or pigmentation", score: 2 },
      { text: "Sculpting, restoring contour, and reversing deeper aging signs", score: 3 },
    ],
  },
  {
    id: 5,
    question: "What is your intended investment per year (approximate)?",
    options: [
      { text: "Up to IDR 25–35 million/year", score: 1 },
      { text: "IDR 50–60 million/year", score: 2 },
      { text: "IDR 70–80+ million/year", score: 3 },
    ],
  },
];

export interface QuizResult {
  tier: 'LUMI' | 'AURA' | 'ÉLEVÉ';
  icon: string;
  profile: string;
  description: string;
}

export const quizResults: Record<string, QuizResult> = {
  LUMI: {
    tier: 'LUMI',
    icon: '✨',
    profile: 'Young glow seeker, prejuvenation-focused, minimalist.',
    description: "Your focus is on prevention and maintaining that beautiful glow. The LUMI plan is designed to give your skin the foundational support it needs."
  },
  AURA: {
    tier: 'AURA',
    icon: '🌸',
    profile: 'Balanced maintenance, Botox-friendly, mid-life glow builder.',
    description: "You're looking for balance and a gentle lift. The AURA plan offers consistent support to restore harmony and keep you looking refreshed."
  },
  ELEVÉ: {
    tier: 'ÉLEVÉ',
    icon: '💎',
    profile: 'Committed sculpting, collagen investor, structure corrector.',
    description: "You are ready for a transformative journey. The ÉLEVÉ plan provides comprehensive, deep support for visible and lasting rejuvenation."
  },
};
