
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, BookOpen, Mic, Star, CheckCircle, Briefcase, GraduationCap, Target, Eye, Lightbulb } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata = {
  title: 'Meet dr. Olivia Aldisa, dipl. AAAM - Altruva Aesthetic Clinic',
  description: 'Learn about dr. Olivia Aldisa, a leading expert in non-surgical profiloplasty, international KOL, and the founder of Altruva.',
};

const keyExpertise = [
  {
    Icon: Star,
    title: 'Non-Surgical Profiloplasty Expert',
    description: 'Specializes in fillers, botox, and ultherapy to achieve balanced and natural facial harmony.',
  },
  {
    Icon: Award,
    title: 'International KOL & Trainer',
    description: 'A globally recognized Key Opinion Leader and trainer for cutting-edge technologies like CoolSculpting®.',
  },
  {
    Icon: Briefcase,
    title: 'Experienced Head Doctor & Founder',
    description: 'Previously led award-winning clinics and now brings her vision to life with her own brand, Altruva.',
  },
  {
    Icon: BookOpen,
    title: 'Regenerative Aesthetics Pioneer',
    description: 'Combines global technology with the beauty of Indonesian heritage for unique, effective treatments.',
  },
];

const education = [
    { degree: "Doctor of Medicine (MD)", university: "Universitas Padjadjaran", years: "2006 - 2012" },
    { degree: "Master's Degree, Business & Management", university: "Universitas Pelita Harapan", years: "2017 - 2019" },
    { degree: "Diploma in Aesthetic Medicine", university: "American Academy of Aesthetic Medicine", years: "International" },
];

const experiences = [
    { role: "CoolSculpting Medical Trainer", years: "2022 - Present" },
    { role: "Head Doctor - QuickGlam Clinic Kemang", years: "2023 - Present" },
    { role: "Scientific Researcher", years: "2021 - Present" },
    { role: "Head Doctor - De Vie Medical Aesthetics", years: "2021 - 2023" },
    { role: "Medical Doctor - Jakarta Aesthetic Clinic", years: "2015 - 2021" },
    { role: "Medical Doctor - Impressions Aesthetic Clinic", years: "2013 - 2015" },
];

const certifications = [
  "Train The Trainer CoolSculpting - Allergan",
  "Cadaver Joint Research - Merz Aesthetics",
  "CoolSculpting Education Bangkok - Allergan",
  "Facial Aesthetic Master Class Beverly Hills 2019 - Galderma",
  "Non-Surgical Symposium Sydney 2019 - Australasian Society of Aesthetic Plastic Surgeons",
  "Ultherapy University (Phase I & II) - Merz Aesthetics",
  "Train The Trainer (Obesity Management) - PT. Soho Industri Pharmasi",
  "MERZ Expert Summit Copenhagen, Denmark - Merz Aesthetics",
  "IMCAS Asia Bangkok 2018 & 2017 - IMCAS",
  "MD Codes (Unlocking The Code to Lower Face Harmonization) - Allergan",
  "AMWC ASIA Taiwan 2018 - EuroMediCom",
  "Facial Anatomy Master Class Bangkok - Mahidol University",
  "CoolSculpting University Bangkok - ZELTIQ",
  "Member of American Academy of Aesthetic Medicine - International",
  "International Master Course on Aging Science (IMCAS) World Congress - (Paris, France, 2023)",
  "Beauty Through Science (BTS) Congress - Stockholm, Sweden, June 2022",
  "Advanced Filler Techniques - UMA Academy, Netherlands, 2022"
];


export default function MeetTheDoctorPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary/30 pt-24 md:pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-xl max-w-md mx-auto">
          <Image
              src="/images/draldisa.png"
              alt="dr. Olivia Aldisa, Founder of Altruva"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">dr. Olivia Aldisa, dipl. AAAM</h1>
            <h2 className="text-xl font-semibold text-accent">A Rising Star in Indonesia’s Aesthetics Medicine</h2>
            <p className="text-lg text-foreground/80">
              Known for her perfect balance of medical-scientific knowledge and artistic forte, dr. Olivia Aldisa is an expert in non-surgical profiloplasty. As an experienced senior doctor and a Key Opinion Leader, she specializes in cutting-edge treatments that combine global technology with the beauty of Indonesian heritage.
            </p>
            <p className="text-foreground/80">
              After years as a trainer for an award-winning clinic, Dr. Aldisa is now channeling her expertise into her own brand, Altruva, to provide a uniquely personalized and artistic aesthetic journey for every patient.
            </p>
            <Button asChild size="lg">
              <Link href="/book-appointment">Book a Consultation with Dr. Aldisa</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <PageTitle
          title="Vision & Mission"
          subtitle="A philosophy rooted in artistry, expertise, and personalized care."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-serif text-2xl text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/80">To be a leading aesthetic clinic known for a harmonious balance of medical-scientific knowledge and artistic forte in every non-surgical treatment.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-serif text-2xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/80">To provide the best experience in our patients' aesthetics journey through expertise, artistic flare, and personalized treatments based on their unique ethno-beauty.</p>
                </CardContent>
            </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper id="key-expertise" className="bg-secondary/30">
        <PageTitle
          title="Key Expertise"
          subtitle="A commitment to science, artistry, and patient-centric care."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyExpertise.map((cred) => (
            <Card key={cred.title} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                  <cred.Icon className="w-6 h-6" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">{cred.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{cred.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

       <SectionWrapper id="career-highlights">
        <PageTitle
          title="Medical Career Highlights"
          subtitle="A journey of continuous learning and leadership in aesthetic medicine."
        />
        <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center font-serif text-2xl text-primary"><GraduationCap className="mr-3" />Education</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {education.map(edu => (
                            <li key={edu.degree}>
                                <p className="font-semibold text-lg text-foreground">{edu.degree}</p>
                                <p className="text-muted-foreground">{edu.university} ({edu.years})</p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center font-serif text-2xl text-primary"><Briefcase className="mr-3" />Experience</CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-4">
                        {experiences.map(exp => (
                            <li key={exp.role}>
                                <p className="font-semibold text-lg text-foreground">{exp.role}</p>
                                <p className="text-muted-foreground">{exp.years}</p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        <div className="mt-12">
            <Card className="shadow-lg">
                 <CardHeader>
                    <CardTitle className="flex items-center font-serif text-2xl text-primary"><Award className="mr-3" />Licenses & Certifications</CardTitle>
                    <CardDescription>Committed to global standards and continuous professional development.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                       {certifications.map(cert => (
                            <li key={cert} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
                                <span className="text-foreground/80">{cert}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
       </SectionWrapper>
      
      <SectionWrapper className="bg-secondary/30">
        <PageTitle title="Dr. Aldisa in Action" />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/DrqIbRAHoYw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </SectionWrapper>

      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Begin Your Regenerative Journey</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Schedule a personalized consultation with dr. Olivia Aldisa to explore a treatment plan that honors your unique beauty and aesthetic goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/book-appointment">Request Your Consultation</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
