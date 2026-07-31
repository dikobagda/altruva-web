
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';
import { format } from 'date-fns';

const appointmentFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  treatment: z.string({ required_error: 'Please select a treatment.' }),
  date: z.date({ required_error: 'A date is required.' }),
  time: z.string({ required_error: 'Please select a time.' }),
  notes: z.string().max(500).optional(),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

async function saveAppointmentToDatabase(data: AppointmentFormValues) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/cms/appointments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        treatment: data.treatment,
        preferred_date: format(data.date, 'yyyy-MM-dd'),
        preferred_time: data.time,
        notes: data.notes || null,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error('Failed to save appointment to database:', err);
    } else {
      console.log('Appointment saved to database successfully.');
    }
  } catch (error) {
    console.error('Error saving appointment to database:', error);
  }
}

async function sendAppointmentEmail(data: AppointmentFormValues) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      auth: {
        user: 'api',
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: 'altruvaofficial@gmail.com',
      cc: 'dikobagda@gmail.com',
      subject: 'New Appointment Request from Altruva Website',
      html: `
        <h1>New Appointment Request</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Treatment:</strong> ${data.treatment}</p>
        <p><strong>Preferred Date:</strong> ${format(data.date, 'PPP')}</p>
        <p><strong>Preferred Time:</strong> ${data.time}</p>
        <p><strong>Notes:</strong></p>
        <p>${data.notes || 'No additional notes provided.'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Appointment request email sent successfully in the background.');
  } catch (error) {
    console.error('Failed to send appointment email in the background. Please check your .env configuration.', error);
  }
}

export async function handleAppointmentSubmit(data: AppointmentFormValues) {
  console.log('New Appointment Request Received:', data);

  // Fire-and-forget: save to DB and send email simultaneously
  (async () => {
    await Promise.allSettled([
      saveAppointmentToDatabase(data),
      sendAppointmentEmail(data),
    ]);
  })();

  return {
    success: true,
    message: 'Your appointment request has been submitted!',
    data: data,
  };
}
