import { Resend } from "resend";
import {
  formatInquiryEmail,
  readInquiry,
  validateInquiry,
} from "@/lib/contact/schema";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 15;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const inquiry = readInquiry(body);
  if (!inquiry) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { errors, isSpam } = validateInquiry(inquiry);
  if (isSpam) {
    return Response.json({ ok: true });
  }

  if (Object.keys(errors).length > 0) {
    return Response.json(
      { error: "Please check the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;

  if (!apiKey || !from) {
    return Response.json(
      { error: "unavailable" },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: inquiry.email.trim(),
      subject: `Project inquiry from ${inquiry.name.trim()}`,
      text: formatInquiryEmail(inquiry),
    });

    if (error) {
      return Response.json(
        { error: "The inquiry could not be sent. Please try again or email me directly." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "The inquiry could not be sent. Please try again or email me directly." },
      { status: 502 },
    );
  }
}
