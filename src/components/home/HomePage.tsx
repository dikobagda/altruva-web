
"use client";

import { useState, Fragment, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { services } from '@/lib/data/services';
import { testimonials } from '@/lib/data/testimonials';
import type { Blog } from '@/lib/data/blog';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import PageTitle from '@/components/shared/PageTitle';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import dynamic from 'next/dynamic';

// Dynamic imports for below-the-fold components to improve TBT and SI
const Carousel = dynamic(() => import('@/components/ui/carousel').then(mod => mod.Carousel), { ssr: true });
const CarouselContent = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselContent), { ssr: true });
const CarouselItem = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselItem), { ssr: true });
const CarouselNext = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselNext), { ssr: true });
const CarouselPrevious = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselPrevious), { ssr: true });
const TestimonialCard = dynamic(() => import('@/components/testimonials/TestimonialCard'), { ssr: true });
const BlogCard = dynamic(() => import('@/components/blog/BlogCard'), { ssr: true });
const VideoSection = dynamic(() => import('@/components/flyer/VideoSection'), { 
  ssr: false,
  loading: () => <div className="py-20 text-center">Loading videos...</div>
});
const ProvenResultsSection = dynamic(() => import('@/components/flyer/ProvenResultsSection'), { 
  ssr: false,
  loading: () => <div className="py-20 text-center">Loading results...</div>
});
const CertificatesSection = dynamic(() => import('@/components/flyer/CertificatesSection'), { 
  ssr: false,
  loading: () => <div className="py-20 text-center">Loading certificates...</div>
});

type TreatmentCategory = 'Prejuvenation' | 'Rejuvenation';

interface HomePageProps {
  googleReviews?: any[];
}

export default function HomePage({ googleReviews = [] }: HomePageProps = {}) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory | null>(null);
  const [dynamicBlogs, setDynamicBlogs] = useState<Blog[]>([]);

  // Fetch blogs from DB API on mount
  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Urutkan berdasarkan tanggal terbaru
          const sorted = [...data].sort((a, b) => {
            const da = new Date(a.date).getTime() || 0;
            const db = new Date(b.date).getTime() || 0;
            return db - da;
          });
          setDynamicBlogs(sorted);
        }
      })
      .catch((err) => console.error('Error fetching dynamic blogs:', err));
  }, []);

  const filteredServices = activeCategory ? services.filter(service => service.category === activeCategory) : [];

  const whatsappLink = "https://wa.me/6281216119392?text=Hai%20Altruva,%20saya%20tertarik%20booking%20konsultasi%20dengan%20dokter%20untuk%20tahu%20advanced%20treatment%20yang%20paling%20sesuai";

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
      image: '/images/flyer/personalized/personalized4.webp',
      hint: 'regenerative lifting'
    },
    {
      number: '02',
      title: 'A.R.T Lift by Sofwave ',
      description: 'Lifting alami dengan meningkatkan kolagen & elastin secara signifikan untuk wajah kencang, tanpa downtime, dan lebih nyaman dari HIFU generasi lama.',
      image: '/images/flyer/personalized/personalized3.webp',
      hint: 'sofwave treatment'
    },
    {
      number: '03',
      title: 'Advanced Sofwave x Gorgeous Lyft (GOURI)',
      description: 'Ultimate regenerative lifting 10x lebih efektif dalam menstimulasi kolagen untuk mengencangkan kulit dan memperbaiki struktur wajah untuk hasil lifting alami tanpa operasi',
      image: '/images/flyer/personalized/personalized2.webp',
      hint: 'facial contouring'
    },
  ];

  const categoryDetails = {
    Prejuvenation: {
      title: { en: '< 40 years old', id: '< 40 tahun' },
      subtitle: { en: 'Prejuvenation (Preserve & Enhance)', id: 'Prejuvenation (Memelihara & Meningkatkan)' },
      treatmentsTitle: { en: 'Prejuvenation Treatments', id: 'Perawatan Prejuvenation' },
    },
    Rejuvenation: {
      title: { en: '> 40 years old', id: '> 40 tahun' },
      subtitle: { en: 'Rejuvenation (Restore & Lift)', id: 'Rejuvenation (Memulihkan & Mengangkat)' },
      treatmentsTitle: { en: 'Rejuvenation Treatments', id: 'Perawatan Rejuvenation' },
    },
  };

  const groupedServices = useMemo(() => {
    return filteredServices.reduce((acc, service) => {
      const groupName = service.group;
      if (!acc[groupName]) {
        acc[groupName] = {
          description: service.groupDescription,
          subgroups: {},
        };
      }
      
      const subgroupName = service.subgroup;
      if (!acc[groupName].subgroups[subgroupName]) {
        acc[groupName].subgroups[subgroupName] = [];
      }
      
      acc[groupName].subgroups[subgroupName].push(service);
      return acc;
    }, {} as Record<string, { description: Record<'en'|'id', string>; subgroups: Record<string, typeof services> }>);
  }, [filteredServices]);

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="!py-0 min-h-[70vh] md:min-h-[80vh] flex items-center relative overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 z-0">
           {/* Mobile Image */}
          <Image
            src="/images/model1-face.png"
            alt={t({ en: 'An elegant woman with radiant skin', id: 'Wanita elegan dengan kulit bercahaya' })}
            fill
            className="object-cover object-top md:hidden"
            data-ai-hint="elegant woman radiant skin"
            priority
          />
          {/* Desktop Image */}
          <Image
            src="/images/herobackground-new.png"
            alt={t({ en: 'An elegant woman with radiant skin', id: 'Wanita elegan dengan kulit bercahaya' })}
            fill
            className="object-cover hidden md:block"
            data-ai-hint="elegant woman radiant skin"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:pr-8 leading-7">
              <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                {t({ en: "Quiet Luxury treatments for Aging Gracefully and Timeless Beauty", id: "Kemewahan Tenang dari Penuaan yang Anggun untuk Kecantikan Abadi" })}
              </h1>
              <h4 className="text-xl sm:text-xl md:text-xl font-bold text-primary mb-8 leading-tight">
                {t({ en: "Natural facial tightening without surgery and without downtime — at Jakarta's First Regenerative Contouring Clinic", id: "Wajah kencang alami tanpa operasi dan tanpa downtime — di Jakarta’s First Regenerative Contouring Clinic" })}
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
        className="relative"
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/flyer/aging/bg-section.webp"
            alt="background"
            fill
            sizes="(min-width: 1200px) 1400px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">
                Aging is natural,
                <br />
                but don't let it
                <br />
                <span className="italic">take away</span>
                <br />
                <span className="italic">your confidence</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {agingConcerns.map((item) => (
                <div key={item.number} className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg">
                  <Image
                    src={item.image.src}
                    alt={item.text}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={item.image.hint}
                  />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <p className="text-white font-bold text-4xl md:text-5xl drop-shadow-lg italic">{item.number}</p>
                    <p className="text-white font-semibold text-sm md:text-base leading-tight drop-shadow-md">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Jakarta's 1st Regenerative Clinic Section */}
      <section className="relative w-full" style={{ minHeight: '700px' }}>
        <Image
          src="/images/flyer/landingpage_personalize_mobile.webp"
          alt="Jakarta's 1st Regenerative Contouring Clinic"
          fill
          sizes="(min-width: 1200px) 1400px, 100vw"
          className="object-cover object-top md:hidden"
        />
        <Image
          src="/images/flyer/landingpage_banner_desktop.webp"
          alt="Jakarta's 1st Regenerative Contouring Clinic"
          fill
          sizes="(min-width: 1200px) 1400px, 100vw"
          className="object-cover object-top hidden md:block"
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="relative z-20 h-full flex flex-col items-center md:items-start justify-start text-center md:text-left text-primary-foreground p-4 pt-12 md:p-12 md:justify-center" style={{ minHeight: '700px' }}>

          <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: '#4a301b' }}>
            Jakarta's 1st Regenerative
            <br />
            Contouring Clinic
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center" style={{ color: '#4a301b' }}>
              <p className="text-3xl md:text-4xl font-bold">10+</p>
              <p className="text-sm md:text-base">Dokter & Staff<br />Bersertifikasi</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center" style={{ color: '#4a301b' }}>
              <p className="text-3xl md:text-4xl font-bold">12+</p>
              <p className="text-sm md:text-base">Tahun<br />Pengalaman</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center" style={{ color: '#4a301b' }}>
              <p className="text-3xl md:text-4xl font-bold">1000+</p>
              <p className="text-sm md:text-base">Pasien<br />Ditangani</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Age-based Service Selector */}
      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{t({ en: 'Your Regenerative Journey', id: 'Perjalanan Regeneratif Anda' })}</h2>
          <p className="text-lg text-foreground/80 mb-8">{t({ en: 'Choose your age group to discover treatments tailored to meet your unique needs.', id: 'Pilih kelompok usia Anda untuk menemukan perawatan yang disesuaikan untuk memenuhi kebutuhan unik Anda.' })}</p>
          <div className="flex justify-center gap-4 md:gap-8">
            {(Object.keys(categoryDetails) as TreatmentCategory[]).map(key => (
              <button
                key={key}
                onClick={() => setActiveCategory(activeCategory === key ? null : key)}
                className={cn(
                  "flex-1 max-w-sm p-6 rounded-lg border-2 transition-all duration-300",
                  activeCategory === key ? 'bg-primary border-primary text-primary-foreground shadow-xl' : 'bg-card border-border hover:border-primary/50 hover:bg-card/90'
                )}
              >
                <h3 className="text-xl md:text-2xl font-bold font-serif">{t(categoryDetails[key].title)}</h3>
                <p className={cn("text-sm md:text-base", activeCategory === key ? 'text-primary-foreground/90' : 'text-foreground/70')}>{t(categoryDetails[key].subtitle)}</p>
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Overview Section */}
      {activeCategory && (
        <SectionWrapper id="treatments-overview">
          <PageTitle 
            title={t(categoryDetails[activeCategory].treatmentsTitle)}
          />
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {Object.entries(groupedServices).map(([groupName, groupData]) => (
                <div key={groupName}>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">{groupName}</h3>
                  <p className="text-md md:text-lg text-foreground/80 mb-6">{t(groupData.description)}</p>
                  
                  <Card className="shadow-lg p-4 md:p-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[40%] font-semibold text-primary/90">{t({ en: 'Treatment', id: 'Perawatan' })}</TableHead>
                          <TableHead className="w-[60%] font-semibold text-primary/90">{t({ en: 'Description', id: 'Deskripsi' })}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(groupData.subgroups).map(([subgroupName, subgroupServices]) => (
                           <Fragment key={subgroupName}>
                             <TableRow className="bg-secondary/30">
                               <TableCell colSpan={2} className="font-bold text-secondary-foreground text-base py-3">
                                 {subgroupName}
                               </TableCell>
                             </TableRow>
                             {subgroupServices.map((service) => (
                              <TableRow key={service.id}>
                                <TableCell className="font-semibold text-primary">
                                  <Link href={`/treatments/${service.id}`} className="hover:underline">{service.title}</Link>
                                </TableCell>
                                <TableCell className="text-foreground/80">{t(service.description)}</TableCell>
                              </TableRow>
                             ))}
                           </Fragment>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="default">
                <Link href="/book-appointment">{t({ en: 'Book a Consultation', id: 'Jadwalkan Konsultasi' })}</Link>
              </Button>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Personalized Signature Treatments Section */}
      <SectionWrapper
        className="relative"
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/flyer/aging/bg-section.webp"
            alt="background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="container mx-auto py-12 relative z-10"
        >
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold">Personalized Signature Treatments</h2>
            <p className="font-serif text-3xl md:text-4xl text-primary/90 mt-2">for Timeless Beauty</p>
            <div className="mt-4 inline-block">
              <Button variant="default" className="rounded-full bg-[#4a301b] text-white">Altruva Lift Tightening & Contouring</Button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {signatureTreatments.map((treatment) => (
              <div key={treatment.number} className="relative group">
                <div className="relative aspect-[3/4] bg-white rounded-3xl shadow-lg overflow-hidden p-6 flex flex-col justify-end">
                  <div className="absolute inset-0">
                    <Image src={treatment.image} alt={treatment.title} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover rounded-3xl" data-ai-hint={treatment.hint} />
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
            <Link href={whatsappLink} target="_blank" className="inline-block" data-track="whatsapp-cta">
              <Button asChild size="lg" className="rounded-full bg-[#4a301b] text-white hover:bg-[#5a402b] px-10 py-6 text-lg font-semibold">
                <span>Get Your Personalized Assessment</span>
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials Preview Section */}
      <SectionWrapper id="testimonials-preview">
        <PageTitle 
          title={t({ en: "Hear From Our Clients", id: "Dengar dari Klien Kami" })}
          subtitle={t({ en: "Real stories from those who have experienced the Altruva difference.", id: "Kisah nyata dari mereka yang telah merasakan perbedaan Altruva."})} 
        />
        <Carousel
          opts={{
            align: "start",
            loop: testimonials.length > 3,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {[...googleReviews, ...testimonials].slice(0, 10).map((testimonial: any, idx: number) => {
              // Normalize data because Google Reviews have different keys
              const id = testimonial.id ? `local-${testimonial.id}` : `google-${idx}`;
              const name = testimonial.author_name || testimonial.name;
              const rating = testimonial.rating || 5;
              const text = typeof testimonial.text === 'string' 
                ? { en: testimonial.text, id: testimonial.text } 
                : testimonial.text;
              const procedure = testimonial.procedure || (testimonial.relative_time_description ? 'Google Review' : '');

              return (
                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <TestimonialCard 
                      testimonial={{ id, name, procedure, rating, text }} 
                      className="h-full" 
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
        </Carousel>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="default">
            <Link href="/book-appointment">{t({ en: 'Ready for your transformation?', id: 'Siap untuk transformasi Anda?' })}</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* A glimpse of Altruva treatments Section */}
      <VideoSection whatsappLink={whatsappLink} />

      {/* Proven results Section */}
      <ProvenResultsSection whatsappLink={whatsappLink} />

      {/* Featured Blogs Section */}
      <SectionWrapper id="featured-blogs" className="bg-secondary/30">
        <PageTitle 
          title={t({ en: 'Featured Articles', id: 'Artikel Unggulan' })}
          subtitle={t({ en: 'Explore the latest in aesthetic science and wellness from our experts.', id: 'Jelajahi yang terbaru dalam ilmu estetika dan kesehatan dari para ahli kami.' })}
        />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {dynamicBlogs.filter(blog => blog.href).slice(0, 6).map((blog) => (
              <CarouselItem key={blog.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <BlogCard blog={blog} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
        </Carousel>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="default">
            <Link href="/blog">{t({ en: 'Explore All Articles', id: 'Jelajahi Semua Artikel' })}</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Certificates Section */}
      <CertificatesSection />

      {/* Call to Action Section */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{t({ en: 'Ready to Begin Your Transformation?', id: 'Siap Memulai Transformasi Anda?' })}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t({ en: 'Your journey to enhanced beauty and confidence starts here. Schedule your private consultation with our team of experts today.', id: 'Perjalanan Anda menuju kecantikan dan kepercayaan diri yang lebih baik dimulai di sini. Jadwalkan konsultasi pribadi Anda dengan tim ahli kami hari ini.' })}
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/book-appointment">{t({ en: 'Book Your Consultation Now', id: 'Jadwalkan Konsultasi Anda Sekarang' })}</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
