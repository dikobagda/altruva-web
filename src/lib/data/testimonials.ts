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
