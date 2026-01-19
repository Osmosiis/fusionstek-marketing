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

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Token required" },
        { status: 401 }
      );
    }

    const verification = await verifyToken(request);
    if (!verification.valid) {
      return NextResponse.json(
        { error: verification.error || "Invalid token" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const demoRequestId = searchParams.get("demo_request_id");

    if (!demoRequestId) {
      return NextResponse.json(
        { error: "demo_request_id required" },
        { status: 400 }
      );
    }

    if (!INTAKE_GATEWAY_URL) {
      return NextResponse.json(
        { error: "Intake Gateway not configured" },
        { status: 500 }
      );
    }

    const token = authHeader.substring(7);

    // Forward to Intake Gateway
    const intakeResponse = await fetch(
      `${INTAKE_GATEWAY_URL}/status?demo_request_id=${demoRequestId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!intakeResponse.ok) {
      const errorData = await intakeResponse.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || "Status check failed" },
        { status: intakeResponse.status }
      );
    }

    const data = await intakeResponse.json();

    return NextResponse.json({
      status: data.status,
      demo_request_id: data.demo_request_id,
    });
  } catch (error: any) {
    console.error("Status check error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
