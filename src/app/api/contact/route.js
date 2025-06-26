import { Resend } from 'resend';

export const dynamic = 'force-dynamic'; // <- This line prevents pre-render errors on deploy

const resend = new Resend('re_P9LnjtxT_EKgQppwRbyz7TJSLmiqbChLi');

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ahadsheikh1814@outlook.com',
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <h1>New Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Email failed to send' }), { status: 500 });
  }
}