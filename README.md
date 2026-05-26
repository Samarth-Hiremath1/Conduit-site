# Conduit — Marketing Site

**Booking infrastructure for the agent economy.**

A single-page marketing site for Conduit built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Supabase Postgres.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Geist font |
| Database | Supabase (free tier) |
| Deployment | Vercel |
| Form handling | React Server Actions + `useFormState` |

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase (one-time)

> **You need a free Supabase account.** Create one at [supabase.com](https://supabase.com) — no credit card required.

1. Create a new project in the Supabase dashboard
2. Wait ~1 min for it to provision
3. Go to **SQL Editor** → **New query**, paste the contents of [`migrations/001_create_waitlist.sql`](./migrations/001_create_waitlist.sql), and click **Run**
4. Go to **Settings → API** and copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon / public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`

### 3. Configure environment

```bash
cp .env.example .env.local
# Fill in the three values from step 2
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

### Step 1 — Push to GitHub

```bash
git remote add origin https://github.com/Samarth-Hiremath1/Conduit-site.git
git push -u origin main
```

### Step 2 — Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `Conduit-site` repository
3. Framework preset: **Next.js** (auto-detected)
4. Before clicking Deploy, add environment variables (next step)

### Step 3 — Add environment variables in Vercel

In the Vercel project settings → **Environment Variables**, add:

| Name | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (**keep secret**) |

Then click **Deploy**.

### Step 4 — Run the database migration (if not done locally)

In Supabase dashboard → **SQL Editor** → paste [`migrations/001_create_waitlist.sql`](./migrations/001_create_waitlist.sql) → Run.

---

## Project Structure

```
conduit-site/
├── app/
│   ├── layout.tsx              # Root layout, Geist font, metadata
│   ├── page.tsx                # Single-page composition
│   ├── globals.css             # Tailwind base + custom animations
│   └── api/
│       └── waitlist/
│           └── route.ts        # REST fallback (POST /api/waitlist)
├── components/
│   ├── Navbar.tsx              # Sticky nav with scroll-blur effect
│   ├── Hero.tsx                # Headline, animated agent ticker, SVGs
│   ├── HowItWorks.tsx          # 3-card section + flow diagram
│   ├── WaitlistForm.tsx        # Server Action form, inline success state
│   ├── Footer.tsx              # Copyright, "Built in SF", contact link
│   └── AnimatedSection.tsx     # IntersectionObserver scroll fade-in
├── actions/
│   └── waitlist.ts             # Server Action: joinWaitlist()
├── lib/
│   ├── db.ts                   # Supabase server client
│   └── utils.ts                # cn() Tailwind class merger
├── migrations/
│   └── 001_create_waitlist.sql # Run once in Supabase SQL editor
├── .env.example                # Template for local env vars
├── next.config.mjs
├── tailwind.config.ts
└── README.md
```

---

## Waitlist API

### Via Server Action (primary — used by the form)

The form uses `joinWaitlist()` in `actions/waitlist.ts` — a Next.js Server Action. No client-side fetch needed.

### Via REST endpoint (secondary — for external integrations)

```http
POST /api/waitlist
Content-Type: application/json

{ "email": "you@example.com" }
```

**Responses**

| Status | Body |
|---|---|
| `201` | `{ "success": true, "message": "Added to waitlist." }` |
| `200` | `{ "success": true, "message": "Already on the waitlist." }` |
| `400` | `{ "error": "Valid email is required." }` |
| `500` | `{ "error": "Internal server error." }` |

Duplicate emails are handled gracefully (Postgres `23505` unique-violation → 200 OK).

---

## Environment Variables

| Variable | Where to find it | Exposed to browser? |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API → Project URL | ✅ Yes (safe) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API → anon key | ✅ Yes (safe) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API → service_role key | ❌ **Never** |

The service role key bypasses Row Level Security — keep it server-only.

---

## Contact

hello@conduit.so
