import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { LEGAL } from "@/lib/legal";
import { getLegalPageJsonLd } from "@/lib/schema";

const TITLE = "Politique de confidentialité — RGPD";
const DESCRIPTION =
  "Politique de confidentialité RGPD de SAGEO (Kopio) : données collectées, finalités, durée de conservation et droits.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${LEGAL.siteUrl}/politique-confidentialite` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Politique de confidentialité | SAGEO",
    description: DESCRIPTION,
    url: `${LEGAL.siteUrl}/politique-confidentialite`,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageShell
      label="RGPD"
      title="Politique de confidentialité"
    >
      <JsonLd
        data={getLegalPageJsonLd({
          path: "/politique-confidentialite",
          name: "Politique de confidentialité",
          description: DESCRIPTION,
        })}
      />
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
          Le formulaire de liste d&apos;attente demande une adresse e-mail,
          l&apos;accord pour être prévenu de la sortie de l&apos;extension
          Chrome gratuite, et l&apos;accord pour recevoir la newsletter SAGEO.
          Aucune autre donnée n&apos;est demandée pour consulter les pages.
          Pour écrire à l&apos;éditeur :{" "}
          <a
            href={`mailto:${LEGAL.contactEmail}`}
            className="font-medium text-blue-600 hover:underline"
          >
            {LEGAL.contactEmail}
          </a>
          .
        </p>
        <p className="mt-3">
          L&apos;hébergeur peut conserver des journaux techniques (adresse IP,
          date, page demandée) pour la sécurité et le fonctionnement du
          service. Le site ne dépose pas de cookies publicitaires ni de mesure
          d&apos;audience. Aucune donnée sensible au sens du RGPD n&apos;est
          demandée.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          3. Finalités et base légale
        </h2>
        <p className="mt-3">
          L&apos;adresse e-mail du formulaire sert à prévenir de la sortie de
          l&apos;extension Chrome gratuite et à envoyer la newsletter. Les deux
          reposent sur le consentement (art. 6.1.a RGPD), recueilli par une
          case distincte pour chaque finalité. Le consentement peut être
          retiré à tout moment en écrivant à {LEGAL.contactEmail}.
        </p>
        <p className="mt-3">
          Un message envoyé à {LEGAL.contactEmail} est traité pour y répondre.
          La base légale est l&apos;intérêt légitime de {LEGAL.editor} à
          traiter les demandes reçues, ou l&apos;exécution de mesures
          précontractuelles lorsque la demande le justifie (art. 6 RGPD).
        </p>
        <p className="mt-3">
          Les journaux techniques de l&apos;hébergeur reposent sur son intérêt
          légitime à sécuriser et faire fonctionner le site.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          4. Destinataires et sous-traitants
        </h2>
        <p className="mt-3">
          Les messages reçus par e-mail sont lus par {LEGAL.editor}. Ils ne
          sont pas vendus à des tiers. Le formulaire est transmis par
          Web3Forms (web3forms.com), qui l&apos;achemine par e-mail vers{" "}
          {LEGAL.editor}. L&apos;hébergement du site est assuré par{" "}
          {LEGAL.host.name}.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium text-slate-900">
          5. Durée de conservation
        </h2>
        <p className="mt-3">
          L&apos;adresse e-mail de la liste d&apos;attente et de la newsletter
          est conservée jusqu&apos;au retrait du consentement. Les échanges par
          e-mail sont conservés pendant une durée maximale de{" "}
          <strong>{LEGAL.dataRetentionMonths} mois</strong> à compter du
          dernier contact, sauf obligation légale contraire, puis supprimés ou
          anonymisés. Les journaux techniques suivent la durée de conservation
          de l&apos;hébergeur.
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
          de portabilité sur les données vous concernant.
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
