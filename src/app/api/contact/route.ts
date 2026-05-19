import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email sent to yourself
    const mailOptionsToAdmin = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    };

    // 2. Auto-reply email sent to the user
    const mailOptionsToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for reaching out!`,
      text: `Hi ${name},\n\nThank you for getting in touch! I have received your message and will get back to you as soon as possible.\n\nBest regards,\nJashanpreet Singh\n\n---\nYour message:\n${message}`,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(mailOptionsToUser);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
