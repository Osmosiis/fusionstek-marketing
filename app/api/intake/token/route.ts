import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import { createHash } from "crypto";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "change-me-in-production"
);

function hashUserAgent(ua: string): string {
  return createHash("sha256").update(ua).digest("hex").substring(0, 16);
}

export async function GET(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || 
               request.headers.get("x-real-ip") || 
               "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    const uaHash = hashUserAgent(userAgent);

    // Create token bound to IP + UA hash
    const token = await new SignJWT({
      ip,
      uaHash,
      type: "intake_token",
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("10m")
      .sign(JWT_SECRET);

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Token generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate token" },
      { status: 500 }
    );
  }
}
