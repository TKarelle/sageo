type Props = {
  label?: string;
  className?: string;
};

/**
 * CTA audit cohérent — lien #audit, style pill bleu.
 */
export function AuditCta({
  label = "Demander un audit SAGEO",
  className = "",
}: Props) {
  return (
    <a
      href="#audit"
      className={`group inline-flex items-center gap-3 rounded-full bg-slate-900 py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-600 ${className}`}
    >
      {label}
      <span
        aria-hidden
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 transition group-hover:translate-x-0.5 group-hover:text-blue-600"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

/**
 * CTA secondaire — lien externe Kopio.
 */
export function KopioCta({
  label = "Découvrir Kopio",
  className = "",
}: Props) {
  return (
    <a
      href="https://kopio.eu"
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-full border border-slate-900/12 bg-white/90 py-2.5 pl-6 pr-2.5 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur-sm transition hover:border-blue-500/40 hover:text-blue-700 ${className}`}
    >
      {label}
      <span
        aria-hidden
        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition group-hover:bg-blue-600"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 3h8v8M13 3 4 12"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

/** Duo CTA hero — Audit + Kopio */
export function HeroCtaGroup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <AuditCta />
      <KopioCta />
    </div>
  );
}
