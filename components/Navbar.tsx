"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800/60 bg-[#0f0f17]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <ConduitLogo />
          <span className="font-bold text-slate-100 tracking-tight text-lg group-hover:text-emerald-400 transition-colors">
            Conduit
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-8 text-sm text-slate-400">
          <a
            href="#how-it-works"
            className="hover:text-slate-200 transition-colors"
          >
            How it works
          </a>
          <a
            href="mailto:hello@conduit.so"
            className="hover:text-slate-200 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-500/20 hover:border-emerald-500/60"
        >
          Get early access
        </a>
      </div>
    </nav>
  );
}

function ConduitLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="7" fill="#10b981" fillOpacity="0.15" />
      <path
        d="M7 14c0-3.866 3.134-7 7-7"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21 14c0 3.866-3.134 7-7 7"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="2.5" fill="#10b981" />
    </svg>
  );
}
