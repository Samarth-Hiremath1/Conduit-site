export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        {/* Logo + copyright */}
        <div className="flex items-center gap-3">
          <ConduitLogo />
          <span className="text-slate-600 text-sm">
            © {year} Conduit Inc. All rights reserved.
          </span>
        </div>

        {/* Center — Built in SF */}
        <div className="flex items-center gap-1.5 text-sm text-slate-600">
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 text-red-500"
            fill="currentColor"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          Built in San Francisco
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="mailto:hello@conduit.so"
            className="text-slate-500 hover:text-emerald-400 transition-colors"
          >
            Contact
          </a>
          <a
            href="#waitlist"
            className="text-slate-500 hover:text-emerald-400 transition-colors"
          >
            Waitlist
          </a>
          <a
            href="#how-it-works"
            className="text-slate-500 hover:text-emerald-400 transition-colors"
          >
            How it works
          </a>
        </div>
      </div>
    </footer>
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
