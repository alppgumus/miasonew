import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone } = body;

    // GoDaddy SMTP ayarları
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Yeni İletişim Formu Mesajı",
      html: `
        <h3>Yeni İletişim Talebi</h3>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>Firma:</strong> ${company}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email başarıyla gönderildi' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email gönderme hatası:', error);
    return NextResponse.json(
      { message: 'Email gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 