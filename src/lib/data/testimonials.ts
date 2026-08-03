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
      en: 'First time here and honestly this is different from other clinics, more homey. I tried the Exion Reg. Laser 2 weeks ago and my skin literally looks brighter and tighter. Beneran keliatan hasilnya! Very recommended!',
      id: 'Pertama kali kesini, honestly nggak kayak klinik lain, lebih homey. Nyobain Exion Reg. Laser 2 minggu lalu dan kulitku literally jadi lebih cerah dan kencang. Beneran keliatan hasilnya! Very recommended!',
    },
    procedure: 'Regenerative Laser',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sutan Haudhy',
    text: {
      en: 'I accompanied my wife for her acne scar treatment — the place is homey and the waiting room is super chill. My wife is very happy with the results; she just finished treatment but her face is already glowing and the scars look a lot softer. Worth it banget, totally!',
      id: 'I accompanied my wife ke Altruva buat acne scar treatment — tempatnya homie, waiting room-nya juga super chill. Istri gue very happy dengan hasilnya, baru kelar treatment tapi mukanya udah keliatan glowing dan bekas jerawatnya udah jauh lebih halus. Worth it banget, totally!',
    },
    procedure: 'Acne Scar Treatment',
    rating: 5,
  },
  {
    id: '3',
    name: 'Dike Nugroho',
    text: {
      en: 'The doctor is super informative and explains every step of the treatment. She even broke down the technology behind the tools. After one session my skin already feels fresh and looks healthier. Trusst me, hasilnya real!',
      id: 'Dokternya super informative, jelasin setiap langkah treatment dengan jelas, bahkan detail teknologi alat-alatnya. Setelah satu sesi, kulit udah berasa fresh dan keliatan lebih sehat. Trust me, hasilnya real banget!',
    },
    procedure: 'Consultation',
    rating: 5,
  },
  {
    id: '4',
    name: 'Woro Purnamasari',
    text: {
      en: 'Looking for a clinic that is comfortable, private, and gives natural results? Altruva is the answer. Dr. Aldisa has 12+ years of experience, and from the first consultation I was already convinced. My skin looks natural, not overdone — exactly the glow I wanted.',
      id: 'Kalau cari klinik estetik yang nyaman, private, dan hasilnya natural, Altruva jawabannya. dr. Aldisa udah berpengalaman 12+ tahun, jadi dari awal konsultasi udah langsung yakin. Kulitku keliatan natural, nggak overdone — persis glow yang gue mau.',
    },
    procedure: 'Aesthetic Consultation',
    rating: 5,
  },
  {
    id: '5',
    name: 'Dwi Nurul',
    text: {
      en: 'Highly recommended for anyone who wants real results for their facial skin. My skin has genuinely improved — brighter and smoother, and my friends noticed it too. Definitely coming back. Thank you Dr. Aldisa and the Altruva team!😊 🙌✨',
      id: 'Highly recommended buat siapa pun yang mau hasil nyata buat kulit wajah. Kulitku genuinely membaik — lebih cerah dan halus, bahkan temen-temen pada notice. Pasti balik lagi. Thank you Dr. Aldisa dan tim Altruva!😊 🙌✨',
    },
    procedure: 'Facial Treatment',
    rating: 5,
  },
  {
    id: '6',
    name: 'Prassalli Story',
    text: {
      en: 'Feels like home — like coming home and venting to your mom about acne, and she makes medicine for it. But the best part? My acne is actually clearing up, my face feels clean and calm. I literally don\'t want to go home 😁',
      id: 'Feels like home, berasa pulang curhat sama nyokap soal jerawat dan dia bikinin obat. Tapi yang paling keren? Jerawatku beneran mulai hilang, wajah berasa bersih dan tenang. Efeknya, gak pengen pulang 😁',
    },
    procedure: 'Acne Treatment',
    rating: 5,
  }
];
