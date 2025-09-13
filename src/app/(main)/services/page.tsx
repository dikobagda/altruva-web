
'use client';

import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { services } from '@/lib/data/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Fragment } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();

  const groupedServices = services.reduce((acc, service) => {
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

  return (
    <SectionWrapper>
      <PageTitle 
        title={t({ en: "Our Treatments", id: "Perawatan Kami" })} 
        subtitle={t({ en: "Discover our comprehensive range of regenerative and aesthetic treatments, tailored to your unique needs.", id: "Temukan rangkaian lengkap perawatan regeneratif dan estetika kami, yang disesuaikan dengan kebutuhan unik Anda."})} 
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
                         <TableRow className="bg-secondary/30 hover:bg-secondary/40">
                           <TableCell colSpan={2} className="font-bold text-secondary-foreground text-base py-3">
                             {subgroupName}
                           </TableCell>
                         </TableRow>
                         {subgroupServices.map((service) => (
                          <TableRow key={service.id}>
                            <TableCell className="font-semibold text-primary">
                              <Link href={`/services/${service.id}`} className="hover:underline">{service.title}</Link>
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
  );
}

