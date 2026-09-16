import { NextRequest, NextResponse } from "next/server";
import { business } from "@/lib/site-config";

export const runtime = "nodejs";

type QuotePayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  details?: string;
  contactMethod?: "email" | "phone";
  // Honeypot field. Real users never see or fill this.
  companyWebsite?: string;
};

type FieldErrors = Partial<Record<keyof QuotePayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(payload: QuotePayload): FieldErrors {
  const errors: FieldErrors = {};

  if (!payload.fullName || payload.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (!payload.email || !EMAIL_RE.test(payload.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!payload.location || payload.location.trim().length < 2) {
    errors.location = "Please enter your town or ZIP code.";
  }
  if (!payload.details || payload.details.trim().length < 5) {
    errors.details = "Please tell us a bit about what you need cleaned.";
  }
  if (payload.contactMethod !== "email" && payload.contactMethod !== "phone") {
    errors.contactMethod = "Please choose how we should contact you.";
  }
  if (payload.contactMethod === "phone" && !payload.phone?.trim()) {
    errors.phone = "Please add a phone number, or choose email instead.";
  }

  return errors;
}

function isLikelyBot(payload: QuotePayload): boolean {
  if (payload.companyWebsite && payload.companyWebsite.trim().length > 0) {
    return true;
  }
  return false;
}

async function deliverEmail(payload: QuotePayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return { delivered: false, configured: false as const };
  }

  const text = [
    `New quote request from the website`,
    ``,
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "(not provided)"}`,
    `Preferred contact: ${payload.contactMethod}`,
    `Town / ZIP: ${payload.location}`,
    ``,
    `What they'd like cleaned:`,
    payload.details,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `New free quote request — ${payload.fullName}`,
      text,
    }),
  });

  return { delivered: res.ok, configured: true as const };
}

export async function POST(req: NextRequest) {
  let payload: QuotePayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, reason: "invalid", errors: { form: "Malformed request." } },
      { status: 400 }
    );
  }

  if (isLikelyBot(payload)) {
    // Respond as if successful so automated submitters gain no signal,
    // without actually sending or storing anything.
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, reason: "invalid", errors }, { status: 400 });
  }

  try {
    const result = await deliverEmail(payload);

    if (!result.configured) {
      return NextResponse.json(
        {
          ok: false,
          reason: "not_configured",
          message: `Online quote requests aren't connected to email delivery in this preview yet. Please call ${business.phone} or email ${business.email} directly.`,
        },
        { status: 503 }
      );
    }

    if (!result.delivered) {
      return NextResponse.json(
        {
          ok: false,
          reason: "delivery_failed",
          message: `We couldn't send your request just now. Please call ${business.phone} or email ${business.email} directly.`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        reason: "delivery_failed",
        message: `We couldn't send your request just now. Please call ${business.phone} or email ${business.email} directly.`,
      },
      { status: 502 }
    );
  }
}
