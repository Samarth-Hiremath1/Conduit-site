"use client";

import { useFormState, useFormStatus } from "react-dom";
import { joinWaitlist } from "@/actions/waitlist";
import { AnimatedSection } from "./AnimatedSection";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="shrink-0 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:shadow-emerald-500/30 active:translate-y-0"
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Joining…
        </span>
      ) : (
        "Get early access"
      )}
    </button>
  );
}

export function WaitlistForm() {
  const [state, action] = useFormState(joinWaitlist, null);

  return (
    <section
      id="waitlist"
      className="relative px-6 py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <AnimatedSection className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex mb-6 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 text-emerald-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Be first in line
        </h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          We&apos;re onboarding a limited number of businesses during our early
          access period. Join the waitlist and we&apos;ll reach out when your
          spot is ready.
        </p>

        {state?.success ? (
          <div className="flex flex-col items-center gap-3 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <p className="text-emerald-400 font-semibold text-lg">
              {state.message}
            </p>
            <p className="text-slate-500 text-sm">
              Keep an eye on your inbox — we move fast.
            </p>
          </div>
        ) : (
          <form action={action} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              name="email"
              required
              placeholder="you@yourbusiness.com"
              className="flex-1 rounded-full border border-slate-700 bg-slate-800/50 px-5 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none ring-0 transition-all focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
            />
            <SubmitButton />
          </form>
        )}

        {state && !state.success && (
          <p className="mt-3 text-sm text-red-400">{state.error}</p>
        )}

        {/* Trust signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-600">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
            </svg>
            No spam, ever
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
            </svg>
            Free during early access
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
            </svg>
            Unsubscribe anytime
          </span>
        </div>
      </AnimatedSection>
    </section>
  );
}
