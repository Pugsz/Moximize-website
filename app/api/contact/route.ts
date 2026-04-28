import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, company, service, message } = body;

  if (!email || !firstName) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json({ error: "Email not configured" }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Moximize Website" <${process.env.SMTP_USER}>`,
    to: "Stevenguiao@moximize.net",
    replyTo: email,
    subject: `New inquiry from ${firstName} ${lastName} — ${company ?? "Unknown Company"}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company ?? "—"}</p>
      <p><strong>Service Interest:</strong> ${service ?? "—"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message ?? "").replace(/\n/g, "<br/>")}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
