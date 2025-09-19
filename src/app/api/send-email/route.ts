import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html } = await request.json();

    // Créer le transporteur nodemailer
    // Vous devrez configurer ces variables d'environnement
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // Votre email
        pass: process.env.SMTP_PASS, // Votre mot de passe d'application
      },
    });

    // Envoyer l'email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: to,
      subject: subject,
      html: html,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}