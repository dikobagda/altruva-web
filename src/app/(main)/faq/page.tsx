
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/lib/constants';
import { HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions - Altruva',
  description: 'Find answers to common questions about our services, procedures, and clinic policies at Altruva.',
};

export default function FAQPage() {
  return (
    <SectionWrapper>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-b-primary/20">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline py-4 text-left">
                <div className="flex items-center">
                  {item.Icon ? <item.Icon className="h-5 w-5 mr-3 text-accent shrink-0" /> : <HelpCircle className="h-5 w-5 mr-3 text-accent shrink-0" />}
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 pb-4 pt-2 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
