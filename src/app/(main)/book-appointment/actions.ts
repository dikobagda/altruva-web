'use server';

import { z } from 'zod';

const appointmentFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  treatment: z.string({ required_error: 'Please select a treatment.' }),
  date: z.date({ required_error: 'A date is required.' }),
  time: z.string({ required_error: 'Please select a time.' }),
  notes: z.string().max(500).optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export async function handleAppointmentSubmit(data: AppointmentFormValues) {
  // This is a placeholder. In a real app, you would save this to a database
  // or send it to a booking management system.
  console.log('New Appointment Request:', data);
  return { success: true, message: 'Your appointment request has been submitted!' };
}
