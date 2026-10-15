import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
        Page introuvable
      </h1>
      <p className="text-slate-600">
        Cette page n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
