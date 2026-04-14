import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ✅ Initialize HERE (not at top)
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing API key" },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from: "Noventra <onboarding@resend.dev>",
      to: ["pendamtu@gmail.com"], // your email
      subject: "New Contact Form Message",
      html: `
        <h2>New Message from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data);

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}