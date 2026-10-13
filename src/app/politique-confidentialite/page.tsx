import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité — RGPD",
  description:
    "Politique de confidentialité RGPD de SAGEO Lab (Kopio) : données du formulaire d'audit, finalités, durée, droits.",
  alternates: { canonical: `${LEGAL.siteUrl}/politique-confidentialite` },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageShell
      label="RGPD"
      title="Politique de confidentialité"
    >
      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          1. Responsable du traitement
        </h2>
        <p className="mt-3">
          Le responsable du traitement des données collectées sur{" "}
          <strong>{LEGAL.siteName}</strong> est <strong>{LEGAL.editor}</strong>.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            Contact :{" "}
            <a
              href={`mailto:${LEGAL.contactEmail}`}
              className="font-medium text-blue-600 hover:underline"
            >
              {LEGAL.contactEmail}
            </a>
          </li>
          <li>
            Site :{" "}
            <a
              href={LEGAL.editorUrl}
              className="font-medium text-blue-600 hover:underline"
              rel="noopener noreferrer"
            >
              {LEGAL.editorUrl.replace("https://", "")}
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          2. Données collectées
        </h2>
        <p className="mt-3">
          Via le formulaire « Demander un audit SAGEO », nous collectons :
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Nom de l&apos;entreprise</li>
          <li>URL du site (URL canonique)</li>
          <li>Adresse e-mail professionnelle</li>
          <li>Focus demandé (GEO France, Optimisation LLM, pipeline RAG, Schema.org)</li>
        </ul>
        <p className="mt-3">
          Aucune donnée sensible au sens du RGPD n&apos;est demandée. Le site ne
          dépose pas de cookies publicitaires ou de mesure d&apos;audience
          tiers ; seuls des cookies techniques strictement nécessaires au
          fonctionnement éventuel de l&apos;hébergeur peuvent être présents.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          3. Finalités et base légale
        </h2>
        <p className="mt-3">
          Les données sont traitées pour :
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            répondre à votre demande d&apos;audit ou de contact commercial SAGEO
            Lab ;
          </li>
          <li>
            assurer le suivi de la relation commerciale le cas échéant.
          </li>
        </ul>
        <p className="mt-3">
          La base légale est votre <strong>consentement</strong> (case à cocher
          obligatoire avant envoi) et, le cas échéant, l&apos;intérêt légitime
          de {LEGAL.editor} à traiter les demandes professionnelles reçues
          (art. 6 RGPD).
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          4. Destinataires et sous-traitants
        </h2>
        <p className="mt-3">
          Les données du formulaire sont transmises via{" "}
          <strong>{LEGAL.formProcessor.name}</strong> (
          <a
            href={LEGAL.formProcessor.url}
            className="font-medium text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            {LEGAL.formProcessor.url.replace("https://", "")}
          </a>
          ) afin d&apos;assurer {LEGAL.formProcessor.purpose}, puis reçues par{" "}
          {LEGAL.editor}. Elles ne sont pas vendues à des tiers.
        </p>
        <p className="mt-3">
          L&apos;hébergement du site est assuré par {LEGAL.host.name}.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          5. Durée de conservation
        </h2>
        <p className="mt-3">
          Les demandes d&apos;audit sont conservées pendant une durée maximale
          de <strong>{LEGAL.dataRetentionMonths} mois</strong> à compter du
          dernier contact, sauf obligation légale contraire, puis supprimées ou
          anonymisées.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          6. Vos droits (RGPD)
        </h2>
        <p className="mt-3">
          Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique
          et Libertés, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement, de limitation, d&apos;opposition et
          de portabilité, ainsi que du droit de retirer votre consentement à
          tout moment.
        </p>
        <p className="mt-3">
          Pour exercer vos droits :{" "}
          <a
            href={`mailto:${LEGAL.contactEmail}`}
            className="font-medium text-blue-600 hover:underline"
          >
            {LEGAL.contactEmail}
          </a>
          . Vous pouvez également introduire une réclamation auprès de la{" "}
          <a
            href="https://www.cnil.fr"
            className="font-medium text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            CNIL
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          7. Sécurité
        </h2>
        <p className="mt-3">
          {LEGAL.editor} met en œuvre des mesures techniques et organisationnelles
          raisonnables pour protéger les données contre l&apos;accès non
          autorisé, la perte ou l&apos;altération. Le site est servi en HTTPS.
        </p>
      </section>

      <p className="text-xs text-slate-400">
        Dernière mise à jour : {LEGAL.lastUpdated}
      </p>
    </LegalPageShell>
  );
}
