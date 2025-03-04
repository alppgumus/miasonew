import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

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
      subject: "Yeni İş Başvurusu",
      html: `
        <h3>Yeni İş Başvurusu</h3>
        <p><strong>İsim:</strong> ${formData.name}</p>
        <p><strong>E-posta:</strong> ${formData.email}</p>
        <p><strong>Lokasyon:</strong> ${formData.location}</p>
        <p><strong>Pozisyon:</strong> ${formData.role}</p>
        <p><strong>Açıklama:</strong> ${formData.explanation}</p>
        <p><strong>Kanıt Linki:</strong> <a href="${formData.proofLink}">${formData.proofLink}</a></p>
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