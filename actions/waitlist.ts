"use server";

import { createServerClient } from "@/lib/db";

type WaitlistResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function joinWaitlist(
  prevState: WaitlistResult | null,
  formData: FormData
): Promise<WaitlistResult> {
  const email = formData.get("email")?.toString().trim().toLowerCase();

  // Validate
  if (!email) {
    return { success: false, error: "Please enter your email address." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const supabase = createServerClient();

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (error) {
      // Postgres unique-violation code: 23505
      if (error.code === "23505") {
        // Treat as success — idempotent
        return {
          success: true,
          message: "You're already on the list — we'll be in touch soon!",
        };
      }
      throw error;
    }

    return {
      success: true,
      message: "You're on the list! We'll be in touch soon.",
    };
  } catch (err) {
    console.error("Waitlist insert error:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
