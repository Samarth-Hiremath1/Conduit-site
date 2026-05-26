# Conduit

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

## Contact

samhiremath@ucdavis.edu
hello@conduit.so
