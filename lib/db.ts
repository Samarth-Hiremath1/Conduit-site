/**
 * Supabase server-side client for Conduit.
 *
 * Uses the SERVICE ROLE KEY — never expose this to the browser.
 * The service role bypasses Row Level Security, which is what we want
 * for server-side inserts (Server Actions, API routes).
 *
 * Environment variables (set in .env.local locally):
 *   NEXT_PUBLIC_SUPABASE_URL      — your Supabase project URL
 *   SUPABASE_SERVICE_ROLE_KEY     — service role secret (server-only)
 *
 * @see https://supabase.com/docs/reference/javascript/introduction
 */

import { createClient, SupabaseClient } from "@supabase/supabase-js";

export interface WaitlistEntry {
  id: number;
  email: string;
  created_at: string;
}

let _client: SupabaseClient | null = null;

export function createServerClient(): SupabaseClient {
  if (_client) return _client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. " +
        "Check your .env.local file."
    );
  }

  _client = createClient(url, key, {
    auth: { persistSession: false },
  });

  return _client;
}
