
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
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.191379435602!2d106.80900997591308!3d-6.238523561088915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f165d09075d7%3A0xab2d38304a455052!2sAltruva%20Aesthetic%20Clinic!5e0!3m2!1sen!2sid!4v1721890332819!5m2!1sen!2sid";

  return (
    <>
      <SectionWrapper>
        <PageTitle title="Contact Us" subtitle="Get in touch with Altruva. We're here to help." />
      </SectionWrapper>
      
      <SectionWrapper className="pt-0">
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
      </SectionWrapper>

      <SectionWrapper className="pt-0">
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
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <p className="text-foreground/80">Jl. Ciasem I No.2, RT.2/RW.4, Rw. Bar, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12180</p>
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
    </>
  );
}
