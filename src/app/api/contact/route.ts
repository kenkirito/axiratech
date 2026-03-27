import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'AxiraTech Contact <onboarding@resend.dev>',
    to: 'reyansh@axiratech.in',
    replyTo: email,
    subject: `New Project Inquiry from ${name}`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#f5f5f7;padding:32px;border-radius:16px;">
        <h2 style="font-family:sans-serif;color:#0f0f0f;margin:0 0 24px;font-size:24px;">New Contact from AxiraTech</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;width:120px;">Name</td><td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#0f0f0f;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;">Email</td><td style="padding:12px 0;border-bottom:1px solid #e5e7eb;"><a href="mailto:${email}" style="color:#f59e0b;font-weight:600;">${email}</a></td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;">Service</td><td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#0f0f0f;">${service || '—'}</td></tr>
          <tr><td style="padding:12px 0;color:#6b7280;font-size:13px;vertical-align:top;">Message</td><td style="padding:12px 0;color:#0f0f0f;line-height:1.7;">${message.replace(/\n/g, '<br>')}</td></tr>
        </table>
        <p style="margin:24px 0 0;font-size:12px;color:#9ca3af;">Sent from axiratech.com contact form</p>
      </div>
    `,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
