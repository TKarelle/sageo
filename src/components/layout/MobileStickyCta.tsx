/**
 * Barre CTA sticky bas d'écran — mobile uniquement.
 */
export function MobileStickyCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href="#audit"
        className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lift ring-1 ring-slate-900/10 transition hover:bg-blue-600"
      >
        Demander un audit SAGEO
        <span
          aria-hidden
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-cyan-300"
        >
          →
        </span>
      </a>
    </div>
  );
}
