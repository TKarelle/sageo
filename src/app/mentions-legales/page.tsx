import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site SAGEO Lab édité par Kopio — éditeur, hébergeur, contact.",
  alternates: { canonical: `${LEGAL.siteUrl}/mentions-legales` },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageShell label="Légal" title="Mentions légales">
      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          1. Éditeur du site
        </h2>
        <p className="mt-3">
          Le site <strong>{LEGAL.siteUrl.replace("https://", "")}</strong> (
          {LEGAL.siteName}) est édité par <strong>{LEGAL.editor}</strong>.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            Site groupe :{" "}
            <a
              href={LEGAL.editorUrl}
              className="font-medium text-blue-600 hover:underline"
              rel="noopener noreferrer"
            >
              {LEGAL.editorUrl.replace("https://", "")}
            </a>
          </li>
          <li>
            Contact :{" "}
            <a
              href={`mailto:${LEGAL.contactEmail}`}
              className="font-medium text-blue-600 hover:underline"
            >
              {LEGAL.contactEmail}
            </a>
          </li>
          <li>Directeur de la publication : {LEGAL.publicationDirector}</li>
        </ul>
        <p className="mt-3 text-slate-500">
          SAGEO Lab désigne le centre de recherche de {LEGAL.editor} dédié au
          Search-Augmented Generative Engine Optimization (SAGEO), au GEO France
          et à l&apos;Optimisation LLM.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          2. Hébergement
        </h2>
        <p className="mt-3">
          Le site est hébergé par <strong>{LEGAL.host.name}</strong>
          <br />
          {LEGAL.host.address}
          <br />
          Site :{" "}
          <a
            href={LEGAL.host.url}
            className="font-medium text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            {LEGAL.host.url.replace("https://", "")}
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          3. Propriété intellectuelle
        </h2>
        <p className="mt-3">
          L&apos;ensemble des contenus présents sur {LEGAL.siteName} (textes,
          graphismes, logos, structure, méthodologie SAGEO) est protégé par le
          droit de la propriété intellectuelle. Toute reproduction,
          représentation ou diffusion non autorisée est interdite, sauf accord
          écrit de {LEGAL.editor}.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          4. Responsabilité
        </h2>
        <p className="mt-3">
          {LEGAL.editor} s&apos;efforce d&apos;assurer l&apos;exactitude des
          informations publiées sur {LEGAL.siteName}. Toutefois, {LEGAL.editor}{" "}
          ne saurait être tenu responsable des omissions, inexactitudes ou
          carences dans la mise à jour, qu&apos;elles soient de son fait ou du
          fait de tiers partenaires.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          5. Données personnelles
        </h2>
        <p className="mt-3">
          Le traitement des données personnelles collectées via le formulaire
          d&apos;audit est décrit dans la{" "}
          <a
            href="/politique-confidentialite"
            className="font-medium text-blue-600 hover:underline"
          >
            Politique de confidentialité (RGPD)
          </a>
          .
        </p>
      </section>

      <p className="text-xs text-slate-400">
        Dernière mise à jour : {LEGAL.lastUpdated}
      </p>
    </LegalPageShell>
  );
}
