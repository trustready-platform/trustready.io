import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, company, phone, query } = body;

    if (!name || !email || !query)
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

    const mail = {
      from: `"TrustReady Web" <${process.env.SMTP_USER}>`,
      to: 'info@trustready.io',
      subject: `Demo request from ${name}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${company || 'n/a'}\n` +
        `Phone: ${phone || 'n/a'}\n\n` +
        `Query:\n${query}`,
      replyTo: email,
    };

    await transporter.sendMail(mail);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Mail failed' }, { status: 500 });
  }
}
