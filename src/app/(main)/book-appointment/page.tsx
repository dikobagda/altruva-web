
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Book an Appointment - Altruva',
  description: 'Schedule your consultation or treatment at Altruva. Easy online booking coming soon.',
};

export default function BookAppointmentPage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="Book Your Appointment"
        subtitle="Take the first step towards your aesthetic transformation. We're excited to welcome you to our clinic."
      />
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-primary">Online Booking Coming Soon!</CardTitle>
            <CardDescription className="text-foreground/70">
              Our convenient online booking system is currently under development. 
              In the meantime, please contact us directly to schedule your appointment.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="flex items-center font-semibold text-lg text-primary mb-2">
                <Phone className="h-5 w-5 mr-2 text-accent" />
                Call Us
              </h3>
              <p className="text-foreground/80">
                Our friendly reception team is available to assist you with scheduling and answer any questions.
              </p>
              <Link href="tel:+1234567890" className="text-accent font-bold text-xl hover:underline block mt-1">
                (123) 456-7890
              </Link>
            </div>
            <div>
              <h3 className="flex items-center font-semibold text-lg text-primary mb-2">
                <CalendarDays className="h-5 w-5 mr-2 text-accent" />
                Clinic Hours
              </h3>
              <ul className="list-disc list-inside text-foreground/80 pl-1">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div className="text-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Information</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
