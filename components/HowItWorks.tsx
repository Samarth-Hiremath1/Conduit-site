import { AnimatedSection } from "./AnimatedSection";

const STEPS = [
  {
    number: "01",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="8" width="28" height="32" rx="3" stroke="#10b981" strokeWidth="1.5" />
        <rect x="10" y="20" width="16" height="1.5" rx="0.75" fill="#10b981" opacity="0.5" />
        <rect x="10" y="25" width="10" height="1.5" rx="0.75" fill="#10b981" opacity="0.5" />
        <rect x="10" y="30" width="13" height="1.5" rx="0.75" fill="#10b981" opacity="0.5" />
        <circle cx="37" cy="33" r="9" fill="#0f0f17" stroke="#10b981" strokeWidth="1.5" />
        <path d="M33 33l3 3 5-5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="13" width="6" height="4" rx="1" fill="#10b981" opacity="0.3" />
        <rect x="18" y="13" width="6" height="4" rx="1" fill="#10b981" opacity="0.3" />
      </svg>
    ),
    title: "Connect your booking system",
    description:
      "Providers connect their existing booking system — Acuity, Square, Mindbody, or any custom calendar — via a simple OAuth flow. No migration required.",
    pill: "For businesses",
    pillColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  },
  {
    number: "02",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="6" width="36" height="36" rx="8" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="24" cy="18" r="4" stroke="#10b981" strokeWidth="1.5" />
        <path d="M24 26c-5.523 0-10 2.239-10 5v1h20v-1c0-2.761-4.477-5-10-5z" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M30 24l4 4m0 0-4 4m4-4H28" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI agents discover & book",
    description:
      "AI agents — ChatGPT, Claude, Perplexity, and any MCP-compatible system — discover your business, check real-time availability, and book on behalf of users.",
    pill: "Via MCP protocol",
    pillColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    number: "03",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="10" width="36" height="32" rx="3" stroke="#10b981" strokeWidth="1.5" />
        <path d="M6 18h36" stroke="#10b981" strokeWidth="1.5" />
        <rect x="14" y="6" width="2.5" height="8" rx="1.25" fill="#10b981" />
        <rect x="31.5" y="6" width="2.5" height="8" rx="1.25" fill="#10b981" />
        <rect x="13" y="25" width="6" height="6" rx="1.5" fill="#10b981" opacity="0.3" />
        <rect x="21" y="25" width="6" height="6" rx="1.5" fill="#10b981" opacity="0.7" />
        <rect x="29" y="25" width="6" height="6" rx="1.5" fill="#10b981" opacity="0.3" />
      </svg>
    ),
    title: "Bookings land in your calendar",
    description:
      "Every confirmed booking appears in your existing calendar with full client details, notes, and confirmation numbers — exactly like a booking you made yourself.",
    pill: "Zero friction",
    pillColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-32 max-w-7xl mx-auto">
      {/* Section header */}
      <AnimatedSection className="text-center mb-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500 mb-4">
          How it works
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Simple for businesses.{" "}
          <span className="gradient-text">Powerful for agents.</span>
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-slate-400 text-lg leading-relaxed">
          Conduit sits between AI assistants and your booking system,
          translating natural-language intent into confirmed appointments.
        </p>
      </AnimatedSection>

      {/* Flow diagram */}
      <AnimatedSection delay={100} className="mb-20">
        <FlowDiagram />
      </AnimatedSection>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-3">
        {STEPS.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 120}>
            <div className="relative h-full rounded-2xl border border-slate-800 bg-[#13131f] p-8 card-glow transition-all duration-300 group hover:border-slate-700">
              {/* Step number watermark */}
              <div className="absolute top-6 right-6 text-6xl font-black text-slate-800 select-none group-hover:text-slate-700 transition-colors">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-6 p-3 inline-block rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                {step.icon}
              </div>

              {/* Pill */}
              <span
                className={`inline-block mb-4 text-xs font-medium px-2.5 py-1 rounded-full border ${step.pillColor}`}
              >
                {step.pill}
              </span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-100 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function FlowDiagram() {
  return (
    <div className="relative flex items-center justify-center gap-0 overflow-x-auto py-4">
      <div className="flex items-center gap-0 min-w-max mx-auto">
        {/* AI Agents */}
        <FlowNode
          label="AI Agents"
          sublabel="ChatGPT · Claude · Perplexity"
          color="sky"
          icon={
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
            </svg>
          }
        />

        <FlowArrow label="MCP request" />

        {/* Conduit */}
        <div className="relative z-10 flex flex-col items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-4 shadow-lg shadow-emerald-500/10">
          <div className="text-emerald-400">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          </div>
          <span className="text-sm font-bold text-emerald-300 tracking-wide">Conduit</span>
          <span className="text-xs text-emerald-500/70">Booking API</span>
          <div className="absolute -inset-px rounded-2xl border border-emerald-500/20 animate-pulse-slow" />
        </div>

        <FlowArrow label="Confirmed booking" />

        {/* Businesses */}
        <FlowNode
          label="Businesses"
          sublabel="Salons · Dental · Groomers"
          color="violet"
          icon={
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
          }
        />
      </div>
    </div>
  );
}

function FlowNode({
  label,
  sublabel,
  color,
  icon,
}: {
  label: string;
  sublabel: string;
  color: "sky" | "violet";
  icon: React.ReactNode;
}) {
  const colors = {
    sky: "border-sky-500/30 bg-sky-500/5 text-sky-400",
    violet: "border-violet-500/30 bg-violet-500/5 text-violet-400",
  };
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-2xl border px-6 py-4 ${colors[color]}`}
    >
      {icon}
      <span className="text-sm font-semibold text-slate-200">{label}</span>
      <span className="text-xs text-slate-500 text-center">{sublabel}</span>
    </div>
  );
}

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 px-2">
      <span className="text-[10px] text-slate-600 font-medium whitespace-nowrap">
        {label}
      </span>
      <div className="flex items-center gap-0.5">
        <div className="h-px w-16 bg-gradient-to-r from-slate-700 to-emerald-500/50" />
        <svg
          className="w-3 h-3 text-emerald-500/70 -ml-1"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 4l8 8-8 8V4z" />
        </svg>
      </div>
    </div>
  );
}
