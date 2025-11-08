
'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, Star, Video, MapPin, Phone, Mail, ShieldCheck, Zap, Diamond } from 'lucide-react';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import Script from 'next/script';

export default function FlyerPage() {
  const { t } = useLanguage();

  const highlights = [
    "International KOL and Trainer for Sofwave",
    "International KOL and Trainer for GOURI",
    "Creator of Cocktail Contouring ™"
  ];

  const benefits = [
    {
      title: "Hasil kontur wajah yang harmonis dan natural",
      image: { src: "/images/flyer/atiqah1.jpeg" },
      imageHint: "natural facial contour"
    },
    {
      title: "Wajah kencang, kenyal dan cerah tanpa downtime",
      image: { src: "/images/flyer/atiqah2.jpeg" },
      imageHint: "sofwave treatment"
    },
    {
      title: "Memproduksi ulang kolagen yang hilang",
      image: { src: "/images/flyer/maria1.jpeg" },
      imageHint: "collagen stimulation"
    },
    {
      title: "Prosedur yang nyaman berdasarkan standar intenasional",
      image: { src: "/images/flyer/maria2.jpeg" },
      imageHint: "comfortable aesthetic procedure"
    }
  ];
  
  const treatmentVideos = [
    { id: 's3JGxiB-8R4', title: "dr. Aldisa & Atiqah Cocktail Contouring™" },
    { id: 'AEHYP6BJsQU', title: "Paulina's Sofwave Journey" },
    { id: 'gn_1wzedRAA', title: "Indy's Gouri Experience" },
  ];

  const beforeAfters = [
    { src: "/images/flyer/paulina-before-after.png", hint: 'facial contouring before after' },
    { src: "/images/flyer/atiqah-bf.png", hint: 'facial rejuvenation before after' },
    { src: "/images/flyer/unk-bf.png", hint: 'skin tightening before after' },
  ];
  
  const socialVideos = [
    { id: 'fyYd0wE4uDY' },
    { id: '8j5eQI4nYA8' },
    { id: 'm4asSg5piJY' },
    { id: 'dODOyXmNSVA' },
  ];
  
  const certificates = [
    { image: { src: "/images/flyer/cert/cert1.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert2.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert3.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert4.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert5.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert6.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert7.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert8.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert9.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert10.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert11.jpg" }, imageHint: "certificate" },
  ];

  const agingConcerns = [
    {
      number: '01',
      text: 'Kulit kendur di area pipi, rahang, & leher',
      image: { src: '/images/flyer/aging/aging1.webp', hint: 'sagging skin' }
    },
    {
      number: '02',
      text: 'Garis halus & kerutan di sekitar mata dan dahi',
      image: { src: '/images/flyer/aging/aging2.webp', hint: 'wrinkles forehead' }
    },
    {
      number: '03',
      text: 'Kulit kusam efek penuaan dini',
      image: { src: '/images/flyer/aging/aging3.webp', hint: 'dull skin' }
    },
    {
      number: '04',
      text: 'Kontur wajah menurun',
      image: { src: '/images/flyer/aging/aging4.webp', hint: 'drooping face' }
    }
  ];

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.191379435602!2d106.80900997591308!3d-6.238523561088915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f165d09075d7%3A0xab2d38304a455052!2sAltruva%20Aesthetic%20Clinic!5e0!3m2!1sen!2sid!4v1721890332819!5m2!1sen!2sid";
  const openingHours = [
    { day: { en: 'Tuesday', id: 'Selasa' }, hours: '10.00 am – 6.00 pm' },
    { day: { en: 'Wednesday', id: 'Rabu' }, hours: '10.00 am – 6.00 pm' },
    { day: { en: 'Thursday', id: 'Kamis' }, hours: '10.00 am – 6.00 pm' },
    { day: { en: 'Friday', id: 'Jumat' }, hours: '10.00 am – 6.00 pm' },
    { day: { en: 'Saturday', id: 'Sabtu' }, hours: '10.00 am – 6.00 pm' },
    { day: { en: 'Sunday', id: 'Minggu' }, hours: '9.00 am – 5.00 pm' },
    { day: { en: 'Monday', id: 'Senin' }, hours: { en: 'Closed', id: 'Tutup' } },
  ];


  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="!py-0 min-h-screen flex items-start justify-start text-left relative overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/landingpage_banner_desktop_main.webp"
            alt={t({ en: 'An elegant woman with radiant skin', id: 'Wanita elegan dengan kulit bercahaya' })}
            fill
            className="object-contain object-top"
            data-ai-hint="elegant woman radiant skin"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        </div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-start justify-center h-full pt-32 md:pt-48">
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:pr-8 leading-7">
              <h1 className="font-sans text-3xl sm:text-5xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                {t({ en: "Quiet Luxury of Aging Gracefully for Timeless Beauty", id: "Kemewahan Tenang dari Penuaan yang Anggun untuk Kecantikan Abadi" })}
              </h1>
              <h4 className="font-sans text-xl sm:text-xl md:text-xl font-bold text-primary mb-8 leading-tight">
                Wajah kencang alami tanpa operasi dan tanpa downtime — di Jakarta’s First Regenerative Contouring Clinic
              </h4>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white font-semibold text-base px-10 py-6 rounded-full transition-colors duration-200"
              >
                <Link href="/book-appointment">{t({ en: 'Begin Your Transformation', id: 'Mulailah Transformasi Anda' })}</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
      
      {/* Aging is Natural Section */}
      <SectionWrapper 
        className="bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/flyer/aging/bg-section.png')" }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-4">
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">
              Aging is natural,
              <br />
              but don't let it
              <br />
              <span className="italic">take your confidence</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {agingConcerns.map((item) => (
              <div key={item.number} className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg">
                <Image 
                  src={item.image.src} 
                  alt={item.text} 
                  fill 
                  className="object-cover transition-transform duration-300 group-hover:scale-105" 
                  data-ai-hint={item.image.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-white font-bold text-4xl md:text-5xl drop-shadow-lg italic">{item.number}</p>
                  <p className="text-white font-semibold text-sm md:text-base leading-tight drop-shadow-md">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Section 7: Doctor's Profile */}
      <SectionWrapper className="bg-background">
        <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            <div className="md:col-span-1 flex justify-center">
                 <div className="relative aspect-square max-w-xs w-full">
                     <Image src="/images/flyer/draldisa_new.webp" alt="dr Olivia Aldisa" fill className="object-contain" />
                 </div>
            </div>
            <div className="md:col-span-1">
                 <h2 className="font-serif text-3xl font-bold text-primary">dr. Olivia Aldisa M.Sc Aest. Med (UK)</h2>
                 <p className="font-semibold text-lg text-accent">Founder & Medical Director</p>
                 <p className="mt-4 text-lg text-foreground/80 max-w-xl">
                    Berpengalaman lebih dari 12 tahun sebagai dokter estetika dan juga trainer international. Pakar dalam combination treatment yang menggabungkan produk terbaik, presisi tindakan, dengan teknologi medical device terkini untuk hasil yang nyata.
                 </p>
                 <Button asChild size="lg" variant="default" className="mt-6 font-semibold">
                    <Link href="/book-appointment">Book Consultation Now</Link>
                </Button>
            </div>
        </div>
      </SectionWrapper>

      {/* Jakarta's 1st Regenerative Clinic Section */}
      <section className="relative w-full" style={{ minHeight: '700px' }}>
        <Image
          src="/images/flyer/landingpage_banner_desktop.webp"
          alt="Jakarta's 1st Regenerative Contouring Clinic"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="relative z-20 h-full flex flex-col items-start justify-center text-left text-primary-foreground p-4 md:p-12 min-h-[700px]">
            <p className="font-serif text-8xl md:text-9xl text-white" style={{color: '#4a301b'}}>1st</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white" style={{color: '#4a301b'}}>
                Jakarta's Regenerative
                <br />
                Contouring Clinic
            </h2>
            <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center" style={{color: '#4a301b'}}>
                    <p className="text-3xl md:text-4xl font-bold">10+</p>
                    <p className="text-sm md:text-base">Dokter & Staff<br/>Bersertifikasi</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center" style={{color: '#4a301b'}}>
                    <p className="text-3xl md:text-4xl font-bold">12+</p>
                    <p className="text-sm md:text-base">Tahun<br/>Pengalaman</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center" style={{color: '#4a301b'}}>
                    <p className="text-3xl md:text-4xl font-bold">1000+</p>
                    <p className="text-sm md:text-base">Pasien<br/>Ditangani</p>
                </div>
            </div>
        </div>
      </section>
      
      {/* Section 2: Sofwave */}
      <SectionWrapper 
        className="relative !py-20"
        style={{
          backgroundImage: "url('/images/flyer/bg-softwave.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center">
            <h2 className="font-serif text-5xl md:text-6xl text-primary" style={{color: '#4a301b'}}>Sofwave</h2>
            <p className="font-serif text-3xl md:text-4xl text-primary/90" style={{color: '#4a301b'}}>The Luxury of Looking Effortlessly Beautiful</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-xl text-white">
              <Image src={benefit.image.src} alt={benefit.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={benefit.imageHint}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                <p className="font-bold text-6xl md:text-7xl drop-shadow-lg italic opacity-80">0{index+1}</p>
                <p className="font-semibold text-lg md:text-xl leading-tight drop-shadow-md mt-2">{benefit.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#4a301b] text-white hover:bg-[#5a402b] rounded-full px-10 py-6 text-lg font-semibold">
                <Link href="/book-appointment">Begin Your Transformation</Link>
            </Button>
        </div>
      </SectionWrapper>


      {/* Section 3: Glimpse of Treatments */}
      <SectionWrapper className="bg-secondary/30">
        <PageTitle title="A glimpse of Altruva treatments" />
        <div className="grid md:grid-cols-3 gap-8">
            {treatmentVideos.map(video => (
                <Card key={video.id} className="shadow-lg overflow-hidden">
                    <div className="aspect-[9/16] w-full">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    <CardHeader>
                        <CardTitle className="font-serif text-lg text-primary">{video.title}</CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/book-appointment">Book Appointment Now!</Link>
            </Button>
        </div>
      </SectionWrapper>

      {/* Section 4: Proven results */}
      <SectionWrapper>
        <PageTitle title="Proven results" subtitle="Tampil cantik percaya diri di segala usia" />
        <div className="grid md:grid-cols-3 gap-8">
          {beforeAfters.map((item, index) => (
            <div key={index} className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.src}
                alt="Before and after treatment"
                width={600}
                height={300}
                className="w-full h-auto"
                data-ai-hint={item.hint}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/book-appointment">Book Appointment Now!</Link>
          </Button>
        </div>
      </SectionWrapper>


      {/* Section 5: Social Media */}
      <SectionWrapper className="bg-secondary/30">
        <PageTitle title="Get to know us more at @altruvaclinic" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {socialVideos.map(video => (
                 <a href={`https://www.youtube.com/shorts/${video.id}/`} target="_blank" rel="noopener noreferrer" key={video.id} className="block relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg group">
                    <iframe
                        className="w-full h-full absolute inset-0"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={`YouTube Short ${video.id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </a>
            ))}
        </div>
      </SectionWrapper>
      
      {/* Section 6: Certificates */}
      <SectionWrapper>
        <PageTitle title="Certificates and Awards" />
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {certificates.map((cert, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative aspect-video rounded-lg overflow-hidden border shadow-md cursor-pointer group">
                         <Image src={cert.image.src} alt="Certificate" fill className="object-fill group-hover:scale-105 transition-transform" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="p-0 border-0 max-w-4xl">
                       <DialogHeader>
                        <DialogTitle className="sr-only">Certificate</DialogTitle>
                      </DialogHeader>
                      <Image 
                        src={cert.image.src} 
                        alt="Certificate" 
                        width={1200} 
                        height={675}
                        className="w-full h-auto rounded-lg object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </SectionWrapper>

      {/* Why Choose Altruva Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">{t({ en: 'Why Choose Altruva?', id: 'Mengapa Memilih Altruva?' })}</h2>
            <p className="text-lg text-foreground/80">
              {t({ en: 'Your trust is our highest priority. We are committed to providing an exceptional experience founded on safety, innovation, and results that celebrate your unique beauty.', id: 'Kepercayaan Anda adalah prioritas utama kami. Kami berkomitmen untuk memberikan pengalaman luar biasa yang didasarkan pada keamanan, inovasi, dan hasil yang merayakan kecantikan unik Anda.' })}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Friend first, patient second', id: 'Teman dahulu, pasien kemudian' })}</h4>
                  <p className="text-foreground/70">{t({ en: 'We build relationships based on trust and understanding, ensuring you feel heard and valued.', id: 'Kami membangun hubungan berdasarkan kepercayaan dan pengertian, memastikan Anda merasa didengar dan dihargai.' })}</p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Cutting-Edge Technology', id: 'Teknologi Mutakhir' })}</h4>
                  <p className="text-foreground/70">{t({ en: 'We invest in the latest, clinically-proven technologies to ensure effective and efficient treatments.', id: 'Kami berinvestasi pada teknologi terbaru yang teruji secara klinis untuk memastikan perawatan yang efektif dan efisien.' })}</p>
                </div>
              </li>
               <li className="flex items-start">
                <Diamond className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Natural, Elegant Results', id: 'Hasil Alami dan Elegan' })}</h4>
                  <p className="text-foreground/70">{t({ en: 'Our philosophy is to enhance, not alter. We specialize in creating subtle, beautiful outcomes.', id: 'Filosofi kami adalah untuk menyempurnakan, bukan mengubah. Kami berspesialisasi dalam menciptakan hasil yang halus dan indah.' })}</p>
                </div>
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="/book-appointment">{t({ en: 'Begin Your Transformation', id: 'Mulailah Transformasi Anda' })}</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/altruva-desk.webp"
              alt="The modern and welcoming entrance of Altruva Aesthetic Clinic"
              fill
              className="object-cover"
              data-ai-hint="modern clinic reception"
            />
          </div>
        </div>
      </SectionWrapper>
      
      {/* Contact Section */}
      <SectionWrapper>
        <PageTitle title={t({ en: 'Visit Our Clinic', id: 'Kunjungi Klinik Kami' })} />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Altruva Clinic Location"
              ></iframe>
            </div>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-serif text-xl text-primary mb-3">{t({ en: 'Contact Details', id: 'Detail Kontak' })}</h3>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <p className="text-foreground/80">Jl. Ciasem I No.2, RT.2/RW.4, Rw. Bar, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12180</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-accent mr-3" />
                  <Link href="tel:+6281216119392" className="text-foreground/80 hover:text-primary">+62 812 1611 9392</Link>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-accent mr-3" />
                  <Link href="mailto:admin@altruva.com" className="text-foreground/80 hover:text-primary">admin@altruva.com</Link>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="pt-6 space-y-2">
                <h3 className="font-serif text-xl text-primary mb-3">{t({ en: 'Clinic Hours', id: 'Jam Klinik' })}</h3>
                <div className="flex items-start">
                  <ul className="space-y-1 text-sm text-center sm:text-left">
                    {openingHours.map(item => (
                      <li key={t(item.day)} className="flex justify-between w-full max-w-xs sm:max-w-none">
                        <span className="font-medium mr-2">{typeof item.day === 'object' ? t(item.day) : item.day}</span>
                        <span className="text-right">{typeof item.hours === 'object' ? t(item.hours) : item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/book-appointment">Book Your Consultation Now</Link>
            </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
