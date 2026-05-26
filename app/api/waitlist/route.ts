import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/db";

/**
 * POST /api/waitlist
 *
 * REST fallback endpoint (Server Action is the primary path).
 * Body: { email: string }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body?.email?.toString().trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required." },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const { error } = await supabase.from("waitlist").insert([{ email }]);

    if (error) {
      if (error.code === "23505") {
        // Already on the list — idempotent
        return NextResponse.json(
          { success: true, message: "Already on the waitlist." },
          { status: 200 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      { success: true, message: "Added to waitlist." },
      { status: 201 }
    );
  } catch (err) {
    console.error("/api/waitlist error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
