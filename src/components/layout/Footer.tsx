import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/content/landing";
import { Brand } from "@/components/ui/Brand";
import { LEGAL } from "@/lib/legal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer section-wrap">
      <Brand />
      <nav aria-label="Pied de page">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="footer-note">
        Méthode de Karelle, fondatrice de{" "}
        <a href={SITE.kopioUrl} target="_blank" rel="noopener noreferrer">
          <b>Kopio</b>
        </a>
        {" · "}
        Mise à jour le {LEGAL.lastUpdated}
      </div>
      <p className="legal">
        © {year} SAGEO · Une méthode de{" "}
        <a href={SITE.kopioUrl} target="_blank" rel="noopener noreferrer">
          Kopio
        </a>
        {" · "}
        <Link href="/mentions-legales">Mentions légales</Link>
        {" · "}
        <Link href="/politique-confidentialite">Confidentialité</Link>
      </p>
    </footer>
  );
}
