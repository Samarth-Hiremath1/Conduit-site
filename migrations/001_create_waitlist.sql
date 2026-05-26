-- migrations/001_create_waitlist.sql
-- Run once in the Supabase SQL editor:
--   Supabase dashboard → your project → SQL Editor → New query → paste → Run

CREATE TABLE IF NOT EXISTS waitlist (
  id          BIGSERIAL    PRIMARY KEY,
  email       VARCHAR(320) NOT NULL,
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  CONSTRAINT waitlist_email_unique UNIQUE (email)
);

-- Fast duplicate-check + admin queries
CREATE INDEX IF NOT EXISTS idx_waitlist_email
  ON waitlist (email);

CREATE INDEX IF NOT EXISTS idx_waitlist_created_at
  ON waitlist (created_at DESC);

-- Row Level Security
-- We insert server-side with the service role key (bypasses RLS),
-- but enabling RLS prevents any accidental anon reads.
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Deny all access via the anon/public key (service role bypasses this)
CREATE POLICY "No public access" ON waitlist
  FOR ALL USING (false);

-- Convenience view for monitoring signups in the SQL editor
CREATE OR REPLACE VIEW waitlist_summary AS
SELECT
  COUNT(*)                                                              AS total_signups,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '24 hours')   AS last_24h,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days')     AS last_7d,
  MIN(created_at)                                                       AS first_signup,
  MAX(created_at)                                                       AS latest_signup
FROM waitlist;
