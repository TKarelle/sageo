import Link from "next/link";
import { LEGAL } from "@/lib/legal";

/**
 * Footer — brand + crédit Kopio.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-4 border-t border-slate-200/70 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <section aria-labelledby="footer-brand" className="max-w-xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
            Lab
          </p>
          <h2
            id="footer-brand"
            className="mt-2 text-base font-bold tracking-tight text-slate-900"
          >
            SAGEO Lab
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            SAGEO Lab est le centre de recherche de Kopio. SAGEO désigne le
            Search-Augmented Generative Engine Optimization pour le GEO France
            et l&apos;Optimisation LLM.
          </p>
        </section>

        <p className="text-sm text-slate-500 md:text-right">
          Copywriting et édition par{" "}
          <a
            href={LEGAL.editorUrl}
            className="font-semibold text-slate-900 transition hover:text-blue-600"
            rel="noopener noreferrer"
          >
            Kopio
          </a>
        </p>
      </div>

      <div className="border-t border-slate-100/80">
        <p className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6 text-center font-mono text-[11px] tracking-wide text-slate-400 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <span>
            © {year} {LEGAL.editor} — {LEGAL.siteName}
          </span>
          <span className="flex gap-3">
            <Link href="/mentions-legales" className="hover:text-slate-600">
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-slate-600"
            >
              RGPD
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
