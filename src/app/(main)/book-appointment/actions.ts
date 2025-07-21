
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

export async function handleAppointmentSubmit(data: AppointmentFormValues) {
  const { name, email, phone, treatment, date, time, notes } = data;

  // Log the submission to the server console. This is the primary record of the request.
  console.log('New Appointment Request Received:', data);

  // Attempt to send an email notification, but do not let it block the user's success response.
  try {
    // Configure Nodemailer transporter
    // IMPORTANT: You need to set these environment variables in your .env file
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: 'admin@altruva.co.id',
      subject: 'New Appointment Request',
      html: `
        <h1>New Appointment Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Treatment:</strong> ${treatment}</p>
        <p><strong>Preferred Date:</strong> ${format(date, 'PPP')}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        <p><strong>Notes:</strong></p>
        <p>${notes || 'No additional notes provided.'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Appointment request email sent successfully.');
  } catch (error) {
    // If email sending fails, log the error to the server console for debugging.
    // The user will NOT see this error.
    console.error('Failed to send appointment email. Please check your .env configuration.', error);
  }

  // Always return success to the user. The booking was successfully received by the server.
  // The email is just a notification.
  return { 
    success: true, 
    message: 'Your appointment request has been submitted!',
    data: data,
  };
}
