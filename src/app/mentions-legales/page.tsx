import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { LEGAL } from "@/lib/legal";
import { getLegalPageJsonLd } from "@/lib/schema";

const TITLE = "Mentions légales";
const DESCRIPTION =
  "Mentions légales du site SAGEO édité par Kopio (Karelle) — éditeur, hébergeur, contact.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${LEGAL.siteUrl}/mentions-legales` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mentions légales | SAGEO",
    description: DESCRIPTION,
    url: `${LEGAL.siteUrl}/mentions-legales`,
  },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageShell label="Légal" title="Mentions légales">
      <JsonLd
        data={getLegalPageJsonLd({
          path: "/mentions-legales",
          name: TITLE,
          description: DESCRIPTION,
        })}
      />
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
          SAGEO (Search-Augmented Generative Engine Optimization) est la
          méthode de {LEGAL.editor}, par Karelle. Elle relie le SEO, l&apos;AEO
          et le GEO : partir des requêtes de ChatGPT, les lire avec
          l&apos;extension, puis auditer la page.
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
          Le formulaire de liste d&apos;attente collecte une adresse e-mail pour
          prévenir de la sortie de l&apos;extension Chrome gratuite et envoyer
          la newsletter, avec le consentement de la personne. Les échanges par
          e-mail et les journaux techniques de l&apos;hébergeur sont décrits
          dans la{" "}
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
