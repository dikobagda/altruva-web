import type { Metadata } from 'next';
import BookAppointmentContent from './BookAppointmentContent';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: 'Request an appointment at Altruva Aesthetic Clinic Jakarta. Fill out the booking form and our team will confirm your personalized consultation.',
  alternates: {
    canonical: '/book-appointment',
  },
};

export default function BookAppointmentPage() {
  return <BookAppointmentContent />;
}
