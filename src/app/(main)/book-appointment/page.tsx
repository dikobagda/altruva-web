import type { Metadata } from 'next';
import BookAppointmentContent from './BookAppointmentContent';

export const metadata: Metadata = {
  title: 'Book an Appointment | Altruva Aesthetic Clinic',
  description: 'Request a consultation at Altruva Aesthetic Clinic Jakarta. Fill out the form and our team will confirm your appointment for personalized regenerative treatments.',
  alternates: {
    canonical: '/book-appointment',
  },
};

export default function BookAppointmentPage() {
  return <BookAppointmentContent />;
}
