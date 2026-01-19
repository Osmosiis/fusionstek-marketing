import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { createHash } from "crypto";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "change-me-in-production"
);

const INTAKE_GATEWAY_URL = process.env.NEXT_PUBLIC_INTAKE_GATEWAY_URL;

function hashUserAgent(ua: string): string {
  return createHash("sha256").update(ua).digest("hex").substring(0, 16);
}

async function verifyToken(request: NextRequest): Promise<{ valid: boolean; payload?: any; error?: string }> {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return { valid: false, error: "Missing or invalid authorization header" };
    }

    const token = authHeader.substring(7);
    const { payload } = await jwtVerify(token, JWT_SECRET);

    // Verify token binding
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || 
               request.headers.get("x-real-ip") || 
               "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    const uaHash = hashUserAgent(userAgent);

    if (payload.ip !== ip || payload.uaHash !== uaHash) {
      return { valid: false, error: "Token binding mismatch" };
    }

    if (payload.type !== "intake_token") {
      return { valid: false, error: "Invalid token type" };
    }

    return { valid: true, payload };
  } catch (error) {
    return { valid: false, error: "Token verification failed" };
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get token from request body
    const body = await request.json();
    const token = body.token;

    if (!token) {
      return NextResponse.json(
        { error: "Token required" },
        { status: 401 }
      );
    }

    // Verify token by creating a mock request with the token in the header
    const mockRequest = new NextRequest(request.url, {
      method: request.method,
      headers: new Headers({
        ...Object.fromEntries(request.headers.entries()),
        authorization: `Bearer ${token}`,
      }),
    });

    const verification = await verifyToken(mockRequest);
    if (!verification.valid) {
      return NextResponse.json(
        { error: verification.error || "Invalid token" },
        { status: 401 }
      );
    }

    // Check honeypot
    if (body.honeypot && body.honeypot.length > 0) {
      console.warn("Honeypot triggered", { ip: request.headers.get("x-forwarded-for") });
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    if (!INTAKE_GATEWAY_URL) {
      return NextResponse.json(
        { error: "Intake Gateway not configured" },
        { status: 500 }
      );
    }

    // Forward to Intake Gateway
    const intakeResponse = await fetch(`${INTAKE_GATEWAY_URL}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        company: body.company,
        domains: body.domains,
        notes: body.notes,
        uploadIds: body.uploadIds || [],
        consent: body.consent,
      }),
    });

    if (!intakeResponse.ok) {
      const errorData = await intakeResponse.json().catch(() => ({}));
      
      if (intakeResponse.status === 429) {
        return NextResponse.json(
          { error: "rate_limited" },
          { status: 429 }
        );
      }

      return NextResponse.json(
        { error: errorData.message || "Submission failed" },
        { status: intakeResponse.status }
      );
    }

    const data = await intakeResponse.json();

    return NextResponse.json({
      demo_request_id: data.demo_request_id,
      status: data.status,
    });
  } catch (error: any) {
    console.error("Submit error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
