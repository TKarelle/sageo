"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#definition-sageo", label: "SAGEO" },
  { href: "#piliers", label: "Piliers" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#comparaison", label: "Comparaison" },
  { href: "#faq", label: "FAQ" },
  { href: "#audit", label: "Audit" },
] as const;

/**
 * Navbar sticky — orbe au scroll, hamburger mobile.
 */
export function Header() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function onScroll() {
      if (menuOpen) return;
      setCompact(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setCompact(false), 750);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  const showOrb = compact && !menuOpen;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div
        className={`pointer-events-auto relative mx-auto transition-[width,max-width,height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showOrb ? "h-14 w-14" : "h-14 w-full max-w-4xl"
        }`}
      >
        {/* Orbe Siri — scroll compact */}
        <a
          href="#audit"
          aria-label="Demander un audit SAGEO"
          aria-hidden={!showOrb}
          tabIndex={showOrb ? 0 : -1}
          className={`siri-orb absolute left-1/2 top-1/2 block h-14 w-14 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showOrb
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-75 opacity-0"
          }`}
        >
          <span className="siri-orb__aura" aria-hidden />
          <span className="siri-orb__track" aria-hidden />
          <span className="siri-orb__arc siri-orb__arc--a" aria-hidden />
          <span className="siri-orb__arc siri-orb__arc--b" aria-hidden />
          <span className="siri-orb__shell" aria-hidden />
          <span className="siri-orb__core" aria-hidden />
          <span className="siri-orb__spec" aria-hidden />
        </a>

        {/* Pill naviguation */}
        <div
          className={`absolute inset-0 flex items-center justify-between gap-2 overflow-hidden rounded-full border border-white/70 bg-white/90 px-3 shadow-[0_8px_32px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl ring-1 ring-slate-900/[0.04] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-4 sm:px-4 ${
            showOrb
              ? "pointer-events-none scale-[0.35] opacity-0"
              : "scale-100 opacity-100 delay-100"
          }`}
        >
          <Link
            href="/"
            className="shrink-0 px-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            onClick={closeMenu}
          >
            SAGEO
          </Link>

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-1 md:flex"
          >
            {LINKS.filter((l) => l.href !== "#audit").map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-[13px] font-medium text-slate-500 transition-colors hover:bg-slate-900/[0.04] hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#audit"
              className="hidden shrink-0 rounded-full bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-blue-600 sm:inline-flex sm:px-5"
              onClick={closeMenu}
            >
              Audit
            </a>

            {/* Hamburger mobile / tablette */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-900 transition hover:border-blue-200 hover:text-blue-600 md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="relative block h-3.5 w-4" aria-hidden>
                <span
                  className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition duration-300 ${
                    menuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-4 rounded-full bg-current transition duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-4 rounded-full bg-current transition duration-300 ${
                    menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Panneau menu mobile */}
      <div
        id="mobile-nav-panel"
        className={`pointer-events-auto fixed inset-x-0 top-[4.5rem] z-50 px-4 transition duration-300 sm:px-6 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav
          aria-label="Navigation mobile"
          className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-lift backdrop-blur-xl ring-1 ring-slate-900/[0.04]"
        >
          <ul className="divide-y divide-slate-100">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="flex items-center justify-between px-5 py-4 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-blue-600"
                  onClick={closeMenu}
                >
                  {l.label}
                  <span className="font-mono text-[10px] text-cyan-600" aria-hidden>
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <button
          type="button"
          aria-label="Fermer le menu"
          className="pointer-events-auto fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-[2px] md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
