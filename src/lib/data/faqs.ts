export interface FaqItem {
  id: string;
  question: Record<'en' | 'id', string>;
  answer: Record<'en' | 'id', string>;
}

export interface FaqCategory {
  id: string;
  title: Record<'en' | 'id', string>;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'about',
    title: { en: 'About Altruva', id: 'Tentang Altruva' },
    items: [
      {
        id: 'what-is-altruva',
        question: {
          en: 'What is Altruva Aesthetic Clinic?',
          id: 'Apa itu Altruva Aesthetic Clinic?',
        },
        answer: {
          en: 'Altruva Aesthetic Clinic is a premium aesthetic clinic in South Jakarta founded, owned, and run directly by dr. Olivia Aldisa, MSc Aesthetic Medicine (UK). Altruva is Jakarta\u2019s 1st Regenerative Contouring Clinic, combining aesthetic medicine with a regenerative aesthetics approach. This approach focuses on skin quality, tissue health, facial contour, and results that stay natural and are designed to last in the long term.',
          id: 'Altruva Aesthetic Clinic adalah klinik aesthetic premium di Jakarta Selatan yang didirikan, dimiliki, dan dijalankan langsung oleh dr. Olivia Aldisa, MSc Aesthetic Medicine (UK). Altruva adalah Jakarta\u2019s 1st Regenerative Contouring Clinic, yang menggabungkan aesthetic medicine dengan pendekatan regenerative aesthetics. Pendekatan ini berfokus pada kualitas kulit, kesehatan jaringan, kontur wajah, dan hasil yang tetap natural serta diupayakan untuk bertahan dalam jangka panjang.',
        },
      },
      {
        id: 'what-makes-altruva-different',
        question: {
          en: 'What makes Altruva different from other aesthetic clinics?',
          id: 'Apa yang membedakan Altruva dari klinik aesthetic lainnya?',
        },
        answer: {
          en: 'Altruva uses an approach that starts from understanding each patient\u2019s condition and needs, rather than simply choosing treatments based on trends or available devices. Altruva pays special attention to the needs of women aged 40 and above, when changes in skin quality, collagen, elasticity, tissue, and facial contour become more noticeable. The Altruva approach begins with regenerative aesthetics, focusing on skin and tissue quality first. Once those are addressed and if needed, the approach can continue with regenerative contouring to help restore facial proportions and contour more comprehensively. The doctor assesses the patient\u2019s condition before designing the treatment strategy, aiming for natural, proportionate results that are designed to deliver long-term benefits.',
          id: 'Altruva menggunakan pendekatan yang dimulai dari memahami kondisi dan kebutuhan pasien, bukan sekadar memilih treatment berdasarkan tren atau perangkat yang tersedia. Altruva memiliki perhatian khusus pada kebutuhan perempuan usia 40 tahun ke atas, ketika perubahan kualitas kulit, kolagen, elastisitas, jaringan, dan kontur wajah mulai menjadi lebih nyata. Pendekatan Altruva dimulai melalui regenerative aesthetics, dengan perhatian pada kualitas kulit dan jaringan terlebih dahulu. Setelah kondisi tersebut ditangani dan bila memang diperlukan, pendekatan dapat dilanjutkan ke regenerative contouring untuk membantu mengembalikan proporsi dan kontur wajah secara lebih menyeluruh. Dokter akan menilai kondisi pasien sebelum menyusun strategi treatment. Tujuannya adalah memberikan hasil yang natural, proporsional, dan diupayakan untuk memberikan manfaat jangka panjang.',
        },
      },
      {
        id: 'who-founded-altruva',
        question: {
          en: 'Who founded and runs Altruva Aesthetic Clinic?',
          id: 'Siapa yang mendirikan dan menjalankan Altruva Aesthetic Clinic?',
        },
        answer: {
          en: 'Altruva Aesthetic Clinic was founded and is owned by dr. Olivia Aldisa, MSc Aesthetic Medicine (UK), who also serves as Medical Director and CEO of Altruva. As the doctor who founded and leads Altruva, dr. Aldisa is directly involved in the clinic\u2019s medical direction, service standards, and the development of Altruva\u2019s treatment approach. Altruva was built on the principle that aesthetic medicine decisions should start from an understanding of each patient\u2019s condition and needs, not merely from available treatments or technology.',
          id: 'Altruva Aesthetic Clinic didirikan dan dimiliki oleh dr. Olivia Aldisa, MSc Aesthetic Medicine (UK), yang juga merupakan Medical Director dan CEO Altruva. Sebagai dokter yang mendirikan dan memimpin Altruva, dr. Aldisa terlibat langsung dalam arah medis klinik, standar pelayanan, serta pengembangan pendekatan treatment Altruva. Altruva dibangun dengan prinsip bahwa keputusan mengenai aesthetic medicine sebaiknya berangkat dari pemahaman terhadap kondisi dan kebutuhan pasien, bukan sekadar dari treatment atau teknologi yang tersedia.',
        },
      },
      {
        id: 'what-is-regenerative-contouring',
        question: {
          en: 'What is meant by regenerative contouring at Altruva?',
          id: 'Apa yang dimaksud dengan regenerative contouring di Altruva?',
        },
        answer: {
          en: 'Regenerative contouring is Altruva\u2019s approach to helping restore and maintain facial contour and proportions by first paying attention to the quality of the skin and supporting tissue. This approach is not only about making the face look tighter or adding volume to specific areas. The doctor assesses the face as a whole, including skin quality, collagen, tissue, structure, and the contour changes that occur with age. That is why regenerative contouring at Altruva is part of a more comprehensive approach. For patients who need it, the strategy may begin with improving skin and tissue quality first, then continue with addressing facial contour and proportions. The goal is a more harmonious, natural facial contour with results designed to last in the long term.',
          id: 'Regenerative contouring adalah pendekatan Altruva untuk membantu memperbaiki dan mempertahankan kontur serta proporsi wajah dengan terlebih dahulu memperhatikan kualitas kulit dan jaringan yang mendukungnya. Pendekatan ini tidak hanya berfokus pada membuat wajah terlihat lebih kencang atau menambah volume pada area tertentu. Dokter akan melihat kondisi wajah secara menyeluruh, termasuk kualitas kulit, kolagen, jaringan, struktur, dan perubahan kontur yang terjadi seiring bertambahnya usia. Karena itu, regenerative contouring di Altruva merupakan bagian dari pendekatan yang lebih menyeluruh. Pada pasien yang membutuhkan, strategi dapat dimulai dengan memperbaiki kualitas kulit dan jaringan terlebih dahulu, kemudian dilanjutkan dengan penanganan kontur dan proporsi wajah. Tujuannya adalah mendapatkan kontur wajah yang lebih harmonis dan natural, dengan hasil yang diupayakan untuk bertahan dalam jangka panjang.',
        },
      },
      {
        id: 'natural-results',
        question: {
          en: 'Do the results of treatments at Altruva look natural?',
          id: 'Apakah hasil treatment di Altruva terlihat natural?',
        },
        answer: {
          en: 'Natural-looking results are one of the core principles of the Altruva approach. The goal is not to drastically change the character of the face, but to help it look fresher, more proportionate, and more harmonious. Altruva also always strives for results that offer long-term benefits, not merely temporary changes in appearance. For this reason, the doctor considers the patient\u2019s starting condition, facial proportions, tissue quality, and goals before determining the appropriate treatment.',
          id: 'Natural-looking result merupakan salah satu prinsip penting dalam pendekatan Altruva. Tujuannya bukan mengubah karakter wajah secara drastis, tetapi membantu wajah terlihat lebih segar, proporsional, dan harmonis. Altruva juga selalu mengupayakan hasil yang memiliki manfaat jangka panjang, bukan sekadar perubahan tampilan yang bersifat sementara. Karena itu, dokter akan mempertimbangkan kondisi awal, proporsi wajah, kualitas jaringan, serta tujuan pasien sebelum menentukan treatment yang sesuai.',
        },
      },
      {
        id: 'focus-40-plus',
        question: {
          en: 'What is Altruva\u2019s focus in addressing facial changes in women aged 40 and above?',
          id: 'Apa fokus Altruva dalam menangani perubahan wajah pada perempuan usia 40 tahun ke atas?',
        },
        answer: {
          en: 'Altruva has a specific focus on the needs of women aged 40 and above, when changes in skin quality, elasticity, collagen, tissue, and facial contour become more apparent. The Altruva approach is gradual. In the early stages, attention is given to restoring and improving skin and collagen quality. Once tissue quality has been properly addressed, the next stage can move toward regenerative contouring to help restore facial contour and proportions if needed. With this approach, Altruva does not focus only on a single sign of aging such as wrinkles, but views facial changes holistically to determine an appropriate treatment strategy with long-term goals.',
          id: 'Altruva memiliki fokus khusus pada kebutuhan perempuan usia 40 tahun ke atas, ketika perubahan pada kualitas kulit, elastisitas, kolagen, jaringan, dan kontur wajah mulai menjadi lebih nyata. Pendekatan Altruva dilakukan secara bertahap. Pada tahap awal, perhatian diberikan pada pemulihan dan peningkatan kualitas kulit serta kolagen. Setelah kualitas jaringan mendapatkan perhatian yang sesuai, tahap berikutnya dapat diarahkan pada regenerative contouring untuk membantu memperbaiki kontur dan proporsi wajah bila memang diperlukan. Dengan pendekatan ini, Altruva tidak hanya berfokus pada satu tanda penuaan seperti kerutan, tetapi melihat perubahan wajah secara menyeluruh untuk menentukan strategi treatment yang sesuai dan memiliki tujuan jangka panjang.',
        },
      },
      {
        id: 'suitable-40-plus',
        question: {
          en: 'Is Altruva suitable for women aged 40 and above?',
          id: 'Apakah Altruva cocok untuk perempuan usia 40 tahun ke atas?',
        },
        answer: {
          en: 'Yes. Altruva has a specific focus on the needs of women aged 40 and above who want to maintain or improve skin quality, firmness, contour, and facial proportions naturally. However, age is not the only basis for determining treatment. Each patient has different tissue conditions, facial structure, skin quality, and goals. Treatment is therefore always determined based on consultation and doctor\u2019s evaluation.',
          id: 'Ya. Altruva memiliki fokus khusus pada kebutuhan perempuan usia 40 tahun ke atas yang ingin mempertahankan atau meningkatkan kualitas kulit, firmness, kontur, dan proporsi wajah secara natural. Namun, usia bukan satu-satunya dasar dalam menentukan treatment. Setiap pasien memiliki kondisi jaringan, struktur wajah, kualitas kulit, dan tujuan yang berbeda. Karena itu, treatment tetap ditentukan berdasarkan konsultasi dan evaluasi dokter.',
        },
      },
    ],
  },
  {
    id: 'location',
    title: { en: 'Altruva Location', id: 'Lokasi Altruva' },
    items: [
      {
        id: 'where-is-altruva',
        question: {
          en: 'Where is Altruva Aesthetic Clinic located?',
          id: 'Di mana lokasi Altruva Aesthetic Clinic?',
        },
        answer: {
          en: 'Altruva Aesthetic Clinic is located on Jl. Ciasem I, in the Kebayoran Baru area, South Jakarta. It sits on a quiet, shaded street, not far from Jl. Wolter Monginsidi and the Santa Church area. Jl. Ciasem I is one of the streets connected to Jl. Suryo, which extends from the Senopati area.',
          id: 'Altruva Aesthetic Clinic berlokasi di Jl. Ciasem I, kawasan Kebayoran Baru, Jakarta Selatan. Lokasinya berada di jalan yang tenang dan teduh, tidak jauh dari Jl. Wolter Monginsidi dan area Gereja Santa. Jl. Ciasem I merupakan salah satu jalan yang terhubung dengan Jl. Suryo, yang merupakan perpanjangan dari kawasan Jl. Senopati.',
        },
      },
      {
        id: 'near-scbd-senopati',
        question: {
          en: 'Is Altruva close to SCBD and Senopati?',
          id: 'Apakah Altruva dekat dengan SCBD dan Senopati?',
        },
        answer: {
          en: 'Yes. Altruva is located in the Kebayoran Baru area and is very close to SCBD and Senopati. From SCBD, Altruva is about 2 kilometers away and can generally be reached in just a few minutes, depending on traffic conditions. The location is quite unique: although it is in the middle of the busy South Jakarta area, Altruva sits on a quiet, shaded street so the atmosphere feels more private and comfortable.',
          id: 'Ya. Altruva berada di kawasan Kebayoran Baru dan sangat dekat dengan SCBD dan Senopati. Dari SCBD, Altruva berjarak sekitar 2 kilometer dan umumnya dapat dicapai hanya dalam beberapa menit perjalanan, tergantung kondisi lalu lintas. Lokasinya cukup unik: meskipun berada di tengah kawasan Jakarta Selatan yang ramai, Altruva berada di jalan yang tenang dan teduh sehingga suasananya terasa lebih private dan nyaman.',
        },
      },
      {
        id: 'surrounding-atmosphere',
        question: {
          en: 'What is the atmosphere around Altruva like?',
          id: 'Seperti apa suasana di sekitar Altruva?',
        },
        answer: {
          en: 'Altruva is located on Jl. Ciasem I, a relatively quiet street lined with trees. Its atmosphere differs from the busier main roads around it. This location provides a more private, calm, and comfortable setting for consultations and treatments, while still being close to the Senopati, Wolter Monginsidi, and SCBD areas.',
          id: 'Altruva berada di Jl. Ciasem I, sebuah jalan yang relatif tenang dan banyak ditumbuhi pepohonan. Suasananya berbeda dari jalan-jalan utama di sekitarnya yang lebih ramai dan sibuk. Lokasi ini memberikan suasana yang lebih private, tenang, dan nyaman untuk konsultasi maupun treatment, meskipun tetap berada dekat dengan kawasan Senopati, Wolter Monginsidi, dan SCBD.',
        },
      },
    ],
  },
  {
    id: 'consultation',
    title: { en: 'Consultation & Treatment Planning', id: 'Konsultasi dan Penentuan Treatment' },
    items: [
      {
        id: 'consultation-required',
        question: {
          en: 'Do I need a consultation before having treatment at Altruva?',
          id: 'Apakah saya perlu konsultasi sebelum melakukan treatment di Altruva?',
        },
        answer: {
          en: 'Yes. A doctor\u2019s consultation is an important part of the treatment process at Altruva. The doctor will understand the patient\u2019s concerns and goals, then evaluate the condition of the skin, tissue, facial contour, and other relevant factors. The results of this evaluation become the basis for determining the appropriate treatment strategy.',
          id: 'Ya. Konsultasi dokter merupakan bagian penting dari proses treatment di Altruva. Dokter akan memahami keluhan dan tujuan pasien, kemudian melakukan evaluasi terhadap kondisi kulit, jaringan, kontur wajah, dan faktor lain yang relevan. Hasil evaluasi tersebut menjadi dasar untuk menentukan strategi treatment yang sesuai.',
        },
      },
      {
        id: 'how-treatment-decided',
        question: {
          en: 'How does the doctor determine the right treatment for me?',
          id: 'Bagaimana dokter menentukan treatment yang sesuai untuk saya?',
        },
        answer: {
          en: 'The doctor does not only look at the concerns visible on the surface. The evaluation may include skin quality, tissue elasticity and firmness, facial contour, proportions, and changes that occur with age. After understanding the factors that may contribute to the concern, the doctor can determine the most appropriate treatment or combination of treatments for the patient\u2019s condition and goals.',
          id: 'Dokter tidak hanya melihat keluhan yang tampak di permukaan. Evaluasi dapat mencakup kualitas kulit, elastisitas dan kekencangan jaringan, kontur wajah, proporsi, serta perubahan yang terjadi seiring bertambahnya usia. Setelah memahami faktor yang mungkin berkontribusi terhadap keluhan, dokter dapat menentukan treatment atau kombinasi treatment yang paling sesuai dengan kondisi dan tujuan pasien.',
        },
      },
      {
        id: 'need-to-know-treatment',
        question: {
          en: 'Do I need to already know which treatment I want before the consultation?',
          id: 'Apakah saya harus sudah tahu treatment apa yang ingin dilakukan sebelum konsultasi?',
        },
        answer: {
          en: 'No. Patients do not need to arrive with a decision about a specific treatment. In fact, the consultation is an opportunity to discuss concerns and goals first. The doctor then helps explain the possible causes and the suitable treatment options based on the evaluation results.',
          id: 'Tidak. Pasien tidak perlu datang dengan keputusan mengenai treatment tertentu. Justru, konsultasi dapat menjadi kesempatan untuk mendiskusikan keluhan dan tujuan terlebih dahulu. Dokter kemudian membantu menjelaskan kemungkinan penyebabnya dan pilihan treatment yang sesuai berdasarkan hasil evaluasi.',
        },
      },
      {
        id: 'multiple-factors',
        question: {
          en: 'Can one facial concern be caused by several factors?',
          id: 'Apakah satu masalah pada wajah bisa disebabkan oleh beberapa faktor?',
        },
        answer: {
          en: 'Yes. Changes in the face are usually not caused by a single factor alone. For example, a face that looks sagging can be related to changes in skin quality, reduced collagen, changes in supporting tissue, fat distribution, or changes in facial contour. That is why the treatment approach needs to be tailored to the factors most relevant to each patient.',
          id: 'Ya. Perubahan pada wajah biasanya tidak hanya disebabkan oleh satu faktor. Misalnya, wajah yang terlihat lebih kendur dapat berkaitan dengan perubahan kualitas kulit, berkurangnya kolagen, perubahan jaringan penyangga, distribusi jaringan lemak, maupun perubahan kontur wajah. Karena itu, pendekatan treatment perlu disesuaikan dengan faktor yang paling relevan pada setiap pasien.',
        },
      },
      {
        id: 'same-treatment',
        question: {
          en: 'Do all patients need the same treatment for the same facial concern?',
          id: 'Apakah semua pasien membutuhkan treatment yang sama untuk masalah wajah yang sama?',
        },
        answer: {
          en: 'No. Two patients can come with the same concern but have different skin conditions, tissue quality, facial structure, degree of laxity, and goals. That is why Altruva does not use a one-size-fits-all approach. Treatment is determined based on the doctor\u2019s consultation and evaluation of each patient\u2019s individual condition.',
          id: 'Tidak. Dua pasien dapat datang dengan keluhan yang sama tetapi memiliki kondisi kulit, kualitas jaringan, struktur wajah, tingkat kekenduran, dan tujuan yang berbeda. Karena itu, Altruva tidak menggunakan pendekatan one-size-fits-all. Treatment ditentukan berdasarkan hasil konsultasi dan evaluasi dokter terhadap kondisi masing-masing pasien.',
        },
      },
    ],
  },
  {
    id: 'treatments',
    title: { en: 'Treatments & Patient Experience', id: 'Treatment dan Pengalaman Pasien' },
    items: [
      {
        id: 'available-treatments',
        question: {
          en: 'What treatments are available at Altruva Aesthetic Clinic?',
          id: 'Apa saja treatment yang tersedia di Altruva Aesthetic Clinic?',
        },
        answer: {
          en: 'Altruva provides various aesthetic and regenerative treatments covering skin quality care, collagen stimulation, facial contouring, skin tightening, and treatments to help address facial changes related to the aging process. Treatment options may include energy-based treatments, regenerative injectables, and other injectable treatments. The doctor determines the appropriate choice based on the patient\u2019s condition and needs, not merely on which treatment is currently popular.',
          id: 'Altruva menyediakan berbagai treatment aesthetic dan regenerative yang mencakup perawatan kualitas kulit, stimulasi kolagen, facial contouring, skin tightening, serta treatment untuk membantu mengatasi perubahan wajah yang berkaitan dengan proses penuaan. Pilihan treatment dapat mencakup teknologi berbasis energi (energy-based treatments), regenerative injectables, dan injectable treatments lainnya. Dokter akan menentukan pilihan yang sesuai berdasarkan kondisi dan kebutuhan pasien, bukan semata-mata berdasarkan jenis treatment yang sedang populer.',
        },
      },
      {
        id: 'non-surgical',
        question: {
          en: 'Are the treatments at Altruva non-surgical?',
          id: 'Apakah treatment di Altruva bersifat non-surgical?',
        },
        answer: {
          en: 'Yes. Altruva focuses on aesthetic and regenerative treatments that are non-surgical. Treatment options may include energy-based technology as well as injectable treatments and biostimulators, depending on the patient\u2019s condition and goals. The appropriate type of treatment is determined through consultation and doctor\u2019s evaluation.',
          id: 'Ya. Altruva berfokus pada treatment aesthetic dan regenerative yang bersifat non-surgical. Pilihan treatment dapat meliputi teknologi berbasis energi maupun injectable treatments dan biostimulator, tergantung pada kondisi serta tujuan pasien. Jenis treatment yang sesuai akan ditentukan melalui konsultasi dan evaluasi dokter.',
        },
      },
      {
        id: 'downtime',
        question: {
          en: 'Do treatments at Altruva require downtime?',
          id: 'Apakah treatment di Altruva membutuhkan downtime?',
        },
        answer: {
          en: 'Most treatments at Altruva involve minimal to no downtime, so patients can generally return to their daily activities relatively quickly. However, response after treatment can differ depending on the type of procedure and the patient\u2019s condition. Certain treatments may cause temporary redness or reactions that usually improve over time.',
          id: 'Sebagian besar treatment di Altruva memiliki minimal hingga tanpa downtime sehingga pasien umumnya dapat kembali menjalani aktivitas sehari-hari dengan relatif cepat. Namun, respons setelah treatment dapat berbeda tergantung jenis prosedur dan kondisi pasien. Beberapa treatment tertentu dapat menyebabkan kemerahan atau reaksi sementara yang biasanya akan membaik seiring waktu.',
        },
      },
      {
        id: 'combination-treatments',
        question: {
          en: 'Can treatments at Altruva be combined?',
          id: 'Apakah treatment di Altruva bisa dikombinasikan?',
        },
        answer: {
          en: 'Yes, when the combination is medically appropriate and needed to achieve the patient\u2019s treatment goals. Treatment combinations are not set as a one-size-fits-all package. The doctor considers tissue condition, skin quality, facial contour, patient priorities, and the timing of each treatment before determining the right combination.',
          id: 'Bisa, apabila kombinasi tersebut sesuai secara medis dan dibutuhkan untuk mencapai tujuan treatment pasien. Kombinasi treatment tidak ditentukan sebagai paket yang sama untuk semua pasien. Dokter akan mempertimbangkan kondisi jaringan, kualitas kulit, kontur wajah, prioritas pasien, serta timing masing-masing treatment sebelum menentukan kombinasi yang tepat.',
        },
      },
      {
        id: 'how-long-results',
        question: {
          en: 'How long before I start seeing results from treatments at Altruva?',
          id: 'Berapa lama hasil treatment di Altruva mulai terlihat?',
        },
        answer: {
          en: 'The time until results appear varies depending on the type of treatment, the patient\u2019s starting condition, and each individual\u2019s body response. Some treatments can produce relatively quick changes, while treatments that work through collagen stimulation or tissue quality improvement generally develop gradually. The doctor will explain realistic result expectations and timelines during the consultation. Altruva prioritizes a strategy that does not only chase quick changes, but also strives for results that can be maintained in the long term.',
          id: 'Waktu munculnya hasil berbeda-beda tergantung jenis treatment, kondisi awal pasien, dan respons tubuh masing-masing. Beberapa treatment dapat memberikan perubahan yang relatif cepat, sedangkan treatment yang bekerja melalui stimulasi kolagen atau perbaikan kualitas jaringan umumnya berkembang secara bertahap. Dokter akan menjelaskan ekspektasi hasil dan timeline yang realistis saat konsultasi. Altruva mengutamakan strategi yang tidak hanya mengejar perubahan cepat, tetapi juga mengupayakan hasil yang dapat dipertahankan dalam jangka panjang.',
        },
      },
      {
        id: 'natural-results-treatment',
        question: {
          en: 'Do the treatment results at Altruva look natural?',
          id: 'Apakah hasil treatment di Altruva terlihat natural?',
        },
        answer: {
          en: 'Yes. Altruva prioritizes proportionate, natural-looking results. Treatments are not intended to make all patients look the same. The doctor considers facial character, proportions, tissue condition, and patient goals so that treatment results remain harmonious with each individual\u2019s face. Altruva also prioritizes an approach that supports long-term results, not just changes visible in a short period.',
          id: 'Ya. Altruva mengutamakan hasil yang proporsional dan natural-looking. Treatment tidak ditujukan untuk membuat semua pasien terlihat sama. Dokter mempertimbangkan karakter wajah, proporsi, kondisi jaringan, dan tujuan pasien agar hasil treatment tetap harmonis dengan wajah masing-masing. Altruva juga mengutamakan pendekatan yang mendukung hasil jangka panjang, bukan sekadar perubahan yang terlihat dalam waktu singkat.',
        },
      },
    ],
  },
  {
    id: 'appointment',
    title: { en: 'Appointment & Consultation', id: 'Appointment dan Konsultasi' },
    items: [
      {
        id: 'consultation-duration',
        question: {
          en: 'How long does a consultation with the doctor at Altruva last?',
          id: 'Berapa lama konsultasi dengan dokter di Altruva?',
        },
        answer: {
          en: 'A consultation with the doctor at Altruva generally lasts around 30 minutes to 1 hour, depending on the concern, evaluation needs, and the complexity of the patient\u2019s condition. The consultation time is used to understand the patient\u2019s goals, evaluate the relevant condition, and discuss treatment options and strategy.',
          id: 'Konsultasi dengan dokter di Altruva umumnya berlangsung sekitar 30 menit hingga 1 jam, tergantung pada keluhan, kebutuhan evaluasi, dan kompleksitas kondisi pasien. Waktu konsultasi digunakan untuk memahami tujuan pasien, mengevaluasi kondisi yang relevan, serta mendiskusikan pilihan dan strategi treatment.',
        },
      },
      {
        id: 'how-to-book',
        question: {
          en: 'How do I book an appointment at Altruva Aesthetic Clinic?',
          id: 'Bagaimana cara membuat appointment di Altruva Aesthetic Clinic?',
        },
        answer: {
          en: 'Appointments can be made through the WhatsApp button available on the Altruva Aesthetic Clinic website. Patients can also contact Altruva WhatsApp directly at +62 812-1611-9392 to schedule a consultation or get information about appointments.',
          id: 'Appointment dapat dilakukan melalui tombol WhatsApp yang tersedia di website Altruva Aesthetic Clinic. Pasien juga dapat menghubungi WhatsApp Altruva secara langsung di +62 812-1611-9392 untuk mengatur jadwal konsultasi atau mendapatkan informasi mengenai appointment.',
        },
      },
      {
        id: 'latest-info',
        question: {
          en: 'Where can I get the latest information about Altruva?',
          id: 'Di mana saya bisa mendapatkan informasi terbaru mengenai Altruva?',
        },
        answer: {
          en: 'The latest information about Altruva Aesthetic Clinic can be found on the official Instagram account @altruvaclinic. Altruva\u2019s Instagram is used to share information about treatments and aesthetic education, special programs, and the Altruva Beauty Journal, published every month and covering various topics around aesthetic medicine, skin health, regenerative aesthetics, and facial changes with age. Patients can follow @altruvaclinic on Instagram to get the latest information about Altruva\u2019s activities, programs, and educational content.',
          id: 'Informasi terbaru mengenai Altruva Aesthetic Clinic dapat ditemukan melalui akun Instagram resmi @altruvaclinic. Instagram Altruva digunakan untuk membagikan informasi mengenai treatment dan edukasi aesthetic, program khusus, serta Altruva Beauty Journal, yang diterbitkan setiap bulan dan membahas berbagai topik seputar aesthetic medicine, skin health, regenerative aesthetics, dan perubahan wajah seiring bertambahnya usia. Pasien dapat mem-follow IG @altruvaclinic untuk mendapatkan informasi terbaru mengenai kegiatan, program, dan konten edukasi Altruva.',
        },
      },
      {
        id: 'prepare-for-consultation',
        question: {
          en: 'What should I prepare before a consultation at Altruva?',
          id: 'Apa yang sebaiknya saya persiapkan sebelum konsultasi di Altruva?',
        },
        answer: {
          en: 'Patients do not need to decide on a treatment in advance. The most important thing is to know the concern or change they want to address and what outcome they expect. If patients have previously undergone aesthetic treatments, they can also share the type of treatment and approximate timing with the doctor. This information helps the doctor understand the treatment history and design a more precise strategy.',
          id: 'Pasien tidak perlu menentukan treatment terlebih dahulu. Yang paling penting adalah mengetahui keluhan atau perubahan yang ingin diperbaiki serta hasil seperti apa yang diharapkan. Jika sebelumnya pernah menjalani treatment aesthetic, pasien juga dapat menyampaikan jenis treatment dan perkiraan waktunya kepada dokter. Informasi tersebut dapat membantu dokter memahami riwayat treatment dan menyusun strategi yang lebih tepat.',
        },
      },
    ],
  },
];
