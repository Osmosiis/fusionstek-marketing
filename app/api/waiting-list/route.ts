import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const ADMIN_EMAIL = "info@fusionstek.com";
const FROM_EMAIL = process.env.WAITING_LIST_FROM_EMAIL ?? "Fusionstek <onboarding@resend.dev>";
const FROM_NAME = "Fusionstek";

function thankYouHtml(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; max-width: 560px; margin: 0 auto; padding: 24px;">
  <p>Hi ${escapeHtml(name)},</p>
  <p>Thank you for joining the Fusionstek waiting list.</p>
  <p>We'll contact you as soon as we go live. We're excited to have you on board.</p>
  <p>— The Fusionstek team</p>
</body>
</html>
`.trim();
}

function adminNotificationHtml(data: { name: string; email: string; company: string; companySize: string }): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; max-width: 560px; margin: 0 auto; padding: 24px;">
  <p><strong>New waiting list sign-up</strong></p>
  <ul style="list-style: none; padding: 0;">
    <li><strong>Name:</strong> ${escapeHtml(data.name)}</li>
    <li><strong>Email:</strong> ${escapeHtml(data.email)}</li>
    <li><strong>Company:</strong> ${escapeHtml(data.company)}</li>
    <li><strong>Company size:</strong> ${escapeHtml(data.companySize)}</li>
  </ul>
</body>
</html>
`.trim();
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const { name, email, company, companySize } = body;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ message: "Name is required (min 2 characters)" }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Valid email is required" }, { status: 400 });
  }
  if (!company || typeof company !== "string" || company.trim().length < 2) {
    return NextResponse.json({ message: "Company is required" }, { status: 400 });
  }
  if (!companySize || typeof companySize !== "string" || !companySize.trim()) {
    return NextResponse.json({ message: "Company size is required" }, { status: 400 });
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    company: company.trim(),
    companySize: companySize.trim(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { message: "Email service is not configured. Please try again later." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  try {
    const [userResult, adminResult] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [trimmed.email],
        subject: "You're on the list — Fusionstek",
        html: thankYouHtml(trimmed.name),
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: `Waiting list: ${trimmed.company} — ${trimmed.name}`,
        html: adminNotificationHtml(trimmed),
      }),
    ]);

    if (userResult.error) {
      console.error("Resend user email error:", userResult.error);
      return NextResponse.json(
        { message: "Failed to send confirmation email. Please try again." },
        { status: 500 }
      );
    }
    if (adminResult.error) {
      console.error("Resend admin email error:", adminResult.error);
      return NextResponse.json(
        { message: "Submission received but admin notification failed. We still have your details." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Waiting list API error:", err);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
