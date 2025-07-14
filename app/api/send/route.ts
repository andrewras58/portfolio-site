import { verifyCaptcha } from "@/app/lib/verifyCaptcha";

const RESEND_API_KEY = process.env.RESEND_API_KEY

export async function POST(req: Request) {
  const {name, message, email, captcha} = await req.json();

  try{
    await verifyCaptcha(captcha);
  } catch (e: any){
    return Response.json({error: e.message}, {status: 500});
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Andrew Ras <contact@andrewras.dev>',
      to: ['arasmailer@gmail.com'],
      subject: `Message from Portfolio Site ${name}`,
      html: `<div><p>Message from ${name}</p><p>${message}</p><p>This person is reachable at ${email}</p></div>`,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    return Response.json(data, {status: 200});
  }
  return Response.json(data, {status: 500});
}