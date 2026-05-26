"use client";

import { useEffect, useState } from "react";

const AGENTS = ["ChatGPT", "Claude", "Perplexity", "Gemini", "Copilot"];

export function Hero() {
  const [agentIndex, setAgentIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setAgentIndex((i) => (i + 1) % AGENTS.length);
        setFading(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-32">
      {/* Background geometric elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      {/* Floating geometric SVGs */}
      <FloatingOrb className="absolute top-20 right-[10%] w-48 h-48 opacity-20" />
      <FloatingOrb
        className="absolute bottom-32 left-[8%] w-32 h-32 opacity-10"
        delay={2}
      />
      <HexGrid className="absolute top-32 left-[12%] opacity-10" />
      <HexGrid className="absolute bottom-40 right-[15%] opacity-5" size={80} />

      {/* Badge */}
      <div className="mb-8 animate-fade-in opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
          Now in early access
        </span>
      </div>

      {/* Headline */}
      <h1 className="max-w-4xl text-center text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
        Booking infrastructure{" "}
        <br className="hidden sm:block" />
        <span className="gradient-text">for the agent economy</span>
      </h1>

      {/* Subheadline */}
      <p className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-slate-400 sm:text-xl animate-fade-in opacity-0 [animation-delay:0.35s] [animation-fill-mode:forwards]">
        Make your business bookable by every AI agent on the planet.{" "}
        <span className="text-slate-300 font-medium">One integration.</span>
      </p>

      {/* Agent ticker */}
      <div className="mt-6 flex items-center gap-3 text-sm text-slate-500 animate-fade-in opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
        <span>Compatible with</span>
        <span
          className={`font-semibold text-emerald-400 transition-all duration-300 ${
            fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
          }`}
        >
          {AGENTS[agentIndex]}
        </span>
        <span>and every agent built on MCP</span>
      </div>

      {/* CTA */}
      <div className="mt-12 animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
        <a
          href="#waitlist"
          className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
        >
          Join the waitlist
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>

      {/* Social proof */}
      <p className="mt-6 text-xs text-slate-600 animate-fade-in opacity-0 [animation-delay:0.75s] [animation-fill-mode:forwards]">
        Free during early access · No credit card required
      </p>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg
          className="w-5 h-5 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 9-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

function FloatingOrb({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={className}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={`grad-${delay}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="80"
          fill={`url(#grad-${delay})`}
          className="animate-float"
          style={{ animationDelay: `${delay}s` }}
        />
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="#10b981"
          strokeWidth="0.5"
          strokeDasharray="4 8"
          opacity="0.4"
        />
        <circle
          cx="100"
          cy="100"
          r="40"
          fill="none"
          stroke="#10b981"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

function HexGrid({
  className,
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {[
        [60, 35],
        [35, 56],
        [85, 56],
        [60, 77],
        [35, 98],
        [85, 98],
      ].map(([cx, cy], i) => (
        <polygon
          key={i}
          points={hexPoints(cx, cy, 18)}
          fill="none"
          stroke="#10b981"
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );
}

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}
