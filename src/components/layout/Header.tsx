"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/lib/content/landing";
import { Brand } from "@/components/ui/Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header-bar">
        <Brand />
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "×" : "☰"}
        </button>
        <nav className={`nav${open ? " open" : ""}`} id="nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="/#liste-attente" onClick={close}>
            Être prévenu gratuitement
          </a>
        </nav>
      </div>
    </header>
  );
}
