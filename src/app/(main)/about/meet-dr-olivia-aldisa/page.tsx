
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import JsonLd from '@/components/shared/JsonLd';
import DoctorBio from './DoctorBio';
import LinkedInLink from './LinkedInLink';
import VisionMission from './VisionMission';
import KeyExpertise from './KeyExpertise';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, CheckCircle, Briefcase, GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'Meet dr. Olivia Aldisa, dipl. AAAM',
  description: 'Learn about dr. Olivia Aldisa, a leading expert in non-surgical profiloplasty, international KOL, and the founder of Altruva.',
  alternates: {
    canonical: '/about/meet-dr-olivia-aldisa',
  },
  openGraph: {
    url: 'https://altruva.co.id/about/meet-dr-olivia-aldisa',
  },
};

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

const personSchema = {
  "@type": "Person",
  "@id": "https://altruva.co.id/about/meet-dr-olivia-aldisa#person",
  "name": "dr. Olivia Aldisa",
  "honorificPrefix": "dr.",
  "honorificSuffix": "dipl. AAAM",
  "jobTitle": "Aesthetic Doctor & Clinic Founder",
  "description": "Founder and Head Doctor of Altruva Aesthetic Clinic, expert in non-surgical profiloplasty, international Key Opinion Leader and trainer for cutting-edge aesthetic technologies.",
  "url": "https://altruva.co.id/about/meet-dr-olivia-aldisa",
  "image": "https://altruva.co.id/images/draldisanew.jpg",
  "sameAs": [
    "https://www.instagram.com/altruvaclinic/",
    "https://id.linkedin.com/in/droliviaaldisa",
    "https://www.linkedin.com/in/droliviaaldisa",
  ],
  "alumniOf": education.map((edu) => ({
    "@type": edu.university.toLowerCase().includes('american academy')
      ? 'EducationalOrganization'
      : 'CollegeOrUniversity',
    name: edu.university,
  })),
  "worksFor": {
    "@type": "MedicalBusiness",
    "@id": "https://altruva.co.id/#clinic",
    "name": "Altruva Aesthetic Clinic",
  },
  "hasCredential": [
    ...education.map((edu) => ({
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Degree",
      "name": edu.degree,
      "recognizedBy": {
        "@type": "CollegeOrUniversity",
        "name": edu.university,
      },
    })),
    ...certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": cert,
      ...(cert.match(/\(([^)]+)\)$/) ? { "recognizedBy": { "@type": "Organization", "name": cert.match(/\(([^)]+)\)$/)![1] } } : {}),
    })),
  ],
  "knowsAbout": [
    "Non-Surgical Profiloplasty",
    "Dermal Fillers",
    "Botox",
    "Ultherapy",
    "CoolSculpting",
    "Facial Harmonization",
    "Regenerative Aesthetics",
    "Body Contouring",
    "Skin Boosters",
    "Medical Aesthetics",
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "American Academy of Aesthetic Medicine",
  },
  "award": [
    "CoolSculpting Medical Trainer - Allergan",
    "Train The Trainer (Obesity Management) - PT. Soho Industri Pharmasi",
    "International Master Course on Aging Science (IMCAS) World Congress - Paris, France, 2023",
    "Facial Aesthetic Master Class Beverly Hills 2019 - Galderma",
    "MERZ Expert Summit Copenhagen, Denmark - Merz Aesthetics",
  ],
};

const profilePageSchema = {
  "@type": "ProfilePage",
  "@id": "https://altruva.co.id/about/meet-dr-olivia-aldisa#profile",
  "url": "https://altruva.co.id/about/meet-dr-olivia-aldisa",
  "mainEntity": {
    "@id": "https://altruva.co.id/about/meet-dr-olivia-aldisa#person",
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://altruva.co.id",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://altruva.co.id/about",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Meet dr. Olivia Aldisa",
      "item": "https://altruva.co.id/about/meet-dr-olivia-aldisa",
    },
  ],
};


export default function MeetTheDoctorPage() {
  return (
    <>
      <JsonLd schema={[profilePageSchema, personSchema, breadcrumbSchema]} />
      <SectionWrapper className="bg-secondary/30 pt-24 md:pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-xl max-w-md mx-auto">
          <Image
              src="/images/draldisanew.jpg"
              alt="dr. Olivia Aldisa, Founder of Altruva"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">dr. Olivia Aldisa, dipl. AAAM</h1>
            <h2 className="text-xl font-semibold text-accent">A Rising Star in Indonesia's Aesthetics Medicine</h2>
            <DoctorBio />
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/book-appointment">Book a Consultation with Dr. Aldisa</Link>
              </Button>
            </div>
            <LinkedInLink />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background pt-6 pb-0 md:pt-10 md:pb-0">
        <nav aria-label="Quick Links" className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mr-1">Quick Links:</span>
          <Button asChild variant="outline" size="sm">
            <a href="#education">Education</a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href="#experience">Experience</a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href="#certifications">Licenses &amp; Certifications</a>
          </Button>
        </nav>
      </SectionWrapper>

      <VisionMission />

      <KeyExpertise />

       <SectionWrapper id="career-highlights">
        <PageTitle
          title="Medical Career Highlights"
          subtitle="A journey of continuous learning and leadership in aesthetic medicine."
        />
        <div className="grid lg:grid-cols-2 gap-12">
            <Card id="education" className="shadow-lg scroll-mt-28">
                <CardHeader>
                    <h3 className="flex items-center font-serif text-2xl text-primary"><GraduationCap className="mr-3" />Education</h3>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {education.map(edu => (
                            <li key={edu.degree}>
                                <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                                <p className="text-muted-foreground">{edu.university} ({edu.years})</p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card id="experience" className="shadow-lg scroll-mt-28">
                <CardHeader>
                    <h3 className="flex items-center font-serif text-2xl text-primary"><Briefcase className="mr-3" />Experience</h3>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-4">
                        {experiences.map(exp => (
                            <li key={exp.role}>
                                <h4 className="font-semibold text-lg text-foreground">{exp.role}</h4>
                                <p className="text-muted-foreground">{exp.years}</p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        <div className="mt-12">
            <Card id="certifications" className="shadow-lg scroll-mt-28">
                 <CardHeader>
                    <h3 className="flex items-center font-serif text-2xl text-primary"><Award className="mr-3" />Licenses &amp; Certifications</h3>
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
