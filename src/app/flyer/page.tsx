
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
  const whatsappLink = "https://wa.me/6281216119392";

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
      image: { src: "/images/flyer/softwave1.jpeg" },
      imageHint: "collagen stimulation"
    },
    {
      title: "Prosedur yang nyaman berdasarkan standar international",
      image: { src: "/images/flyer/softwave2.jpeg" },
      imageHint: "comfortable aesthetic procedure"
    }
  ];
  
  const treatmentVideos = [
    { id: 's3JGxiB-8R4', title: "dr. Aldisa & Atiqah Cocktail Contouring™" },
    { id: 'AEHYP6BJsQU', title: "Paulina's Sofwave Journey" },
    { id: 'gn_1wzedRAA', title: "Indy's Gouri Experience" },
  ];

  const beforeAfters = [
    { src: "/images/flyer/paulina-before-after-2.jpeg", hint: 'facial contouring before after' },
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
    { image: { src: "/images/flyer/cert/cert7.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert8.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert9.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert1.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert2.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert3.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert4.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert5.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert6.jpg" }, imageHint: "certificate" },
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

  const signatureTreatments = [
    {
      number: '01',
      title: 'Altruva Cocktail Contouring',
      description: 'Rasakan transformasi kulit dari dalam dengan menstimulasi kolagen dan meningkatkan struktur alami wajah untuk hasil natural, tanpa downtime, dan tahan lama.',
      image: '/images/flyer/personalized/personalized1.webp',
      hint: 'regenerative lifting'
    },
    {
      number: '02',
      title: 'A.R.T Lift by Sofwave ',
      description: 'Lifting alami dengan meningkatkan kolagen & elastin secara signifikan untuk wajah kencang, tanpa downtime, dan lebih nyaman dari HIFU generasi lama.',
      image: '/images/flyer/personalized/personalized2.webp',
      hint: 'sofwave treatment'
      
    },
    {
      number: '03',
      title: 'Advanced Sofwave x Gorgeous Lyft (GOURI)',
    
      description: 'Ultimate regenerative lifting 10x lebih efektif dalam menstimulasi kolagen untuk mengencangkan kulit dan memperbaiki struktur wajah untuk hasil lifting alami tanpa operasi',
      image: '/images/flyer/personalized/personalized3.webp',
      hint: 'facial contouring'
    },
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
      <SectionWrapper className="!py-0 min-h-screen flex flex-col justify-between text-left relative overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 z-0">
           <Image
            src="/images/flyer/landingpage_banner_mobile.webp"
            alt={t({ en: 'An elegant woman with radiant skin', id: 'Wanita elegan dengan kulit bercahaya' })}
            fill
            className="object-cover object-top md:hidden"
            data-ai-hint="elegant woman radiant skin"
            priority
          />
          <Image
            src="/images/landingpage_banner_desktop_main.webp"
            alt={t({ en: 'An elegant woman with radiant skin', id: 'Wanita elegan dengan kulit bercahaya' })}
            fill
            className="object-cover object-top hidden md:block"
            data-ai-hint="elegant woman radiant skin"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        </div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-start justify-start h-full pt-8 md:pt-32">
          
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
                className="hidden md:inline-flex bg-primary text-white font-semibold text-base px-10 py-6 rounded-full transition-colors duration-200"
              >
                <Link href={whatsappLink} target="_blank">{t({ en: 'Begin Your Transformation', id: 'Mulailah Transformasi Anda' })}</Link>
              </Button>
            </div>
          </div>
        </div>
         <div className="relative z-20 w-full container mx-auto px-6 pb-8 md:hidden">
            <Button
              asChild
              size="lg"
              className="w-full bg-primary text-white font-semibold text-base px-10 py-6 rounded-full transition-colors duration-200"
            >
              <Link href={whatsappLink} target="_blank">{t({ en: 'Begin Your Transformation', id: 'Mulailah Transformasi Anda' })}</Link>
            </Button>
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
                    <Link href={whatsappLink} target="_blank">Book Consultation Now</Link>
                </Button>
            </div>
        </div>
      </SectionWrapper>

      {/* Jakarta's 1st Regenerative Clinic Section */}
      <section className="relative w-full" style={{ minHeight: '700px' }}>
        <Image
          src="/images/flyer/landingpage_personalize_mobile.webp"
          alt="Jakarta's 1st Regenerative Contouring Clinic"
          fill
          className="object-cover object-top md:hidden"
        />
        <Image
          src="/images/flyer/landingpage_banner_desktop.webp"
          alt="Jakarta's 1st Regenerative Contouring Clinic"
          fill
          className="object-cover object-top hidden md:block"
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="relative z-20 h-full flex flex-col items-center md:items-start justify-start text-center md:text-left text-primary-foreground p-4 pt-12 md:p-12 md:justify-center" style={{minHeight: '700px'}}>
            <p className="font-serif text-xl md:text-9xl text-white" style={{color: '#4a301b'}}>1st</p>
            <h2 className="font-serif text-3xl md:text-5xl text-white" style={{color: '#4a301b'}}>
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

      {/* Personalized Signature Treatments Section */}
      <SectionWrapper
        className="bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/flyer/bg-section.png')" }}
      >
        <div 
          className="py-12"
        >
          <div className="text-center mb-8">
              <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold">Personalized Signature Treatments</h2>
              <p className="font-serif text-3xl md:text-4xl text-primary/90">for Timeless Beauty</p>
              <div className="mt-4 inline-block">
                <Button variant="default" className="rounded-full bg-[#4a301b] text-white">Altruva Lift Tightening & Contouring</Button>
              </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {signatureTreatments.map((treatment) => (
              <div key={treatment.number} className="relative group">
                <div className="relative aspect-[3/4] bg-white rounded-3xl shadow-lg overflow-hidden p-6 flex flex-col justify-end">
                    <div className="absolute inset-0">
                       <Image src={treatment.image} alt={treatment.title} fill className="object-cover rounded-3xl" data-ai-hint={treatment.hint} />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
                    </div>
                    <div className="relative text-white z-10 text-left">
                        <p className="font-serif text-8xl font-bold opacity-80">{treatment.number}</p>
                        <h3 className="font-serif text-2xl font-bold">{treatment.title}</h3>
                        <p className="text-sm mt-2">{treatment.description}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full bg-[#4a301b] text-white hover:bg-[#5a402b] px-10 py-6 text-lg font-semibold">
              <Link href={whatsappLink} target="_blank">Get Your Personalized Assessment</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
      
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
                <Link href={whatsappLink} target="_blank">Begin Your Transformation</Link>
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
                <Link href={whatsappLink} target="_blank">Book Appointment Now!</Link>
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
            <Link href={whatsappLink} target="_blank">Book Appointment Now!</Link>
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

      <SectionWrapper className="!py-16 bg-primary">
        <div className="text-center">
            <p className="font-serif text-4xl italic text-primary-foreground">Your skin has a story</p>
            <p className="font-serif text-4xl italic text-primary-foreground mt-2">let's make it a beautiful one</p>
        </div>
      </SectionWrapper>
    </>
  );
}
