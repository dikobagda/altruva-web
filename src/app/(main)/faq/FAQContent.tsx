
'use client';

import { faqCategories } from '@/lib/data/faqs';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PageTitle from '@/components/shared/PageTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQContent() {
  const { t } = useLanguage();

  return (
    <>
      <SectionWrapper className="bg-secondary/30">
        <PageTitle
          as="h1"
          title={t({ en: 'Frequently Asked Questions', id: 'Pertanyaan yang Sering Diajukan' })}
          subtitle={t({
            en: 'Everything you need to know about Altruva Aesthetic Clinic — our approach, treatments, location, and how to book.',
            id: 'Semua yang perlu Anda ketahui tentang Altruva Aesthetic Clinic — pendekatan kami, treatment, lokasi, dan cara membuat appointment.',
          })}
        />
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category) => (
            <div key={category.id}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6 border-b border-slate-100 pb-3">
                {t(category.title)}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((faq, index) => (
                  <AccordionItem key={faq.id} value={`${category.id}-${faq.id}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-primary/90">
                      {t(faq.question)}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed">
                      {t(faq.answer)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {t({ en: 'Still have questions?', id: 'Masih punya pertanyaan?' })}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t({
              en: 'Talk to our team via WhatsApp and we will be happy to help you.',
              id: 'Hubungi tim kami melalui WhatsApp dan kami akan dengan senang hati membantu Anda.',
            })}
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="https://wa.me/6281216119392" target="_blank" rel="noopener noreferrer">
              {t({ en: 'Chat on WhatsApp', id: 'Chat via WhatsApp' })}
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
