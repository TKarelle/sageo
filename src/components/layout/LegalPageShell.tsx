import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  label: string;
  children: ReactNode;
};

/**
 * Shell pages légales — même language premium que le site.
 */
export function LegalPageShell({ title, label, children }: Props) {
  return (
    <main className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <p className="section-label">{label}</p>
      <h1 className="section-title">{title}</h1>
      <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-slate-600 sm:text-base">
        {children}
      </div>
      <p className="mt-12">
        <Link
          href="/"
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          ← Retour à SAGEO Lab
        </Link>
      </p>
    </main>
  );
}
