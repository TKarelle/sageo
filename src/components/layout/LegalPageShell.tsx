import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  label: string;
  children: ReactNode;
};

export function LegalPageShell({ title, label, children }: Props) {
  return (
    <main className="section-wrap py-16 sm:py-20">
      <nav className="breadcrumb" aria-label="Fil d’Ariane">
        <ol>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>
      <span className="eyebrow">{label}</span>
      <h1>{title}</h1>
      <div className="mt-8 space-y-6 text-[13px] leading-relaxed text-[#566174] [&_a]:font-semibold [&_a]:text-[#111a28] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#172033] [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {children}
      </div>
      <p className="mt-12">
        <Link href="/" className="btn btn-light !gap-2">
          ← Retour à SAGEO
        </Link>
      </p>
    </main>
  );
}
