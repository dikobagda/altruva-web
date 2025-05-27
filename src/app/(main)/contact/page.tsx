
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us - Altruva',
  description: 'Get in touch with Altruva. Find our contact details, address, and send us a message.',
};

// Placeholder for form submission handler
async function handleSubmit(formData: FormData) {
  "use server";
  // This is a placeholder. In a real app, you'd process the form data e.g., send an email.
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  console.log('Form submitted:', { name, email, message });
  // You could redirect or show a success message here.
}


export default function ContactPage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="Get In Touch"
        subtitle="We're here to answer your questions and help you start your journey. Reach out to us through any of the methods below."
      />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-primary">Send Us a Message</CardTitle>
            <CardDescription className="text-foreground/70">
              Fill out the form and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base">Full Name</Label>
                <Input type="text" id="name" name="name" placeholder="Your Name" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-base">Email Address</Label>
                <Input type="email" id="email" name="email" placeholder="your@email.com" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message" className="text-base">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="mt-1" />
              </div>
              <Button type="submit" className="w-full font-semibold">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardContent className="pt-6 space-y-4">
              <h3 className="font-serif text-xl text-primary mb-3">Contact Details</h3>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-accent mr-3" />
                <p className="text-foreground/80">123 Beauty Lane, Serenity City, SC 12345</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-accent mr-3" />
                <Link href="tel:+1234567890" className="text-foreground/80 hover:text-primary">(123) 456-7890</Link>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-accent mr-3" />
                <Link href="mailto:info@altruva.com" className="text-foreground/80 hover:text-primary">info@altruva.com</Link>
              </div>
            </CardContent>
          </Card>
           <Card className="shadow-lg">
            <CardContent className="pt-6 space-y-2">
              <h3 className="font-serif text-xl text-primary mb-3">Clinic Hours</h3>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-accent mr-3 mt-0.5" />
                <ul className="text-foreground/80">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
