import { AuditCta } from "@/components/ui/AuditCta";
import { Reveal } from "@/components/ui/Reveal";
import { RdfTuple, SemanticChunk } from "@/components/ui/SemanticChunk";

const PILLARS = [
  {
    n: "01",
    name: "SEO Canonique",
    target: "Googlebot & BM25",
    action: "Rendu SSR HTML, balisage Schema.org JSON-LD & maillage sémantique",
    impact:
      "Garantit l'indexation initiale et l'extraction par les scrapers (Trafilatura)",
  },
  {
    n: "02",
    name: "AEO (Answer Engine)",
    target: "SearchGPT, Perplexity & PAA",
    action:
      "Blocs de réponses directes (Direct Answer) & Micro-Chunking (120-180 mots)",
    impact:
      "Permet la capture sous forme de Snippet Position Zéro et citation directe",
  },
  {
    n: "03",
    name: "GEO (Generative Engine)",
    target: "Generative LLMs",
    action:
      "Preuves factuelles, métriques et tuples RDF (Sujet, Prédicat, Objet)",
    impact:
      "Maximise le score de factualité et prévient l'élimination anti-hallucination",
  },
  {
    n: "04",
    name: "Vector Reranking",
    target: "Cross-Encoders (BGE, Cohere)",
    action:
      "Structuration en tableaux Markdown & haute densité d'information",
    impact:
      "Assure la sélection du contenu lors du filtre de reclassement (Stage 2 RAG)",
  },
] as const;

/**
 * 4 Piliers — design premium tech.
 */
export function FourPillars() {
  return (
    <section
      id="piliers"
      className="relative w-full py-12 lg:py-20"
      aria-labelledby="piliers-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade-up" duration={900}>
          <p className="section-label">Méthode SAGEO</p>
          <h2 id="piliers-heading" className="section-title">
            Les 4 piliers SAGEO : SEO, AEO, GEO et Cross-Encoder Reranking
          </h2>
          <p className="section-lead">
            Quatre leviers techniques alignent votre site sur Googlebot, les
            answer engines, les LLM génératifs et le{" "}
            <dfn title="Stage 2 du pipeline RAG">Cross-Encoder Reranking</dfn> —
            méthode{" "}
            <dfn title="Search-Augmented Generative Engine Optimization">
              SAGEO
            </dfn>{" "}
            par SAGEO Lab (Kopio).
          </p>
          <RdfTuple
            subject="La méthode SAGEO"
            verb="repose sur"
            complement="quatre piliers : SEO Canonique, AEO, GEO et Vector Reranking"
          />
        </Reveal>

        <Reveal
          as="ul"
          variant="clip-up"
          stagger
          staggerMs={110}
          className="mt-8 space-y-4 md:hidden"
          aria-label="Les 4 piliers SAGEO"
        >
          {PILLARS.map((p) => (
            <li key={p.n} className="tech-surface tech-surface-hover">
              <div className="border-b border-white/10 bg-slate-950 px-4 py-3.5 text-white">
                <span className="font-mono text-[10px] tracking-wider text-cyan-400">
                  {p.n}
                </span>
                <h3 className="mt-0.5 text-base font-semibold tracking-tight">
                  {p.name}
                </h3>
              </div>
              <dl className="divide-y divide-slate-100/80 px-4 py-1 text-sm">
                <div className="py-3.5">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Cible Algorithmique
                  </dt>
                  <dd className="mt-1.5 font-mono text-xs text-slate-700">
                    {p.target}
                  </dd>
                </div>
                <div className="py-3.5">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Action Technique Clé
                  </dt>
                  <dd className="mt-1.5 text-slate-600">{p.action}</dd>
                </div>
                <div className="py-3.5">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Impact sur l&apos;IA
                  </dt>
                  <dd className="mt-1.5 text-slate-700">{p.impact}</dd>
                </div>
              </dl>
            </li>
          ))}
        </Reveal>

        <Reveal variant="clip-up" delay={120} duration={1000} className="mt-10 hidden md:block">
          <SemanticChunk
            id="table-4-piliers-sageo"
            ariaLabel="Tableau comparatif des 4 piliers SAGEO Lab Kopio pour Cross-Encoder Reranking"
            className="tech-surface"
          >
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">
              Tableau haute densité : les 4 piliers SAGEO (SEO, AEO, GEO, Vector
              Reranking) — cible algorithmique, action technique et impact sur
              l&apos;IA pour le GEO France
            </caption>
            <thead>
              <tr className="table-head">
                <th>Pilier SAGEO</th>
                <th>Cible Algorithmique</th>
                <th>Action Technique Clé</th>
                <th>Impact sur l&apos;IA</th>
              </tr>
            </thead>
            <tbody>
              {PILLARS.map((p) => (
                <tr
                  key={p.n}
                  className="border-b border-slate-100/80 transition-colors last:border-0 hover:bg-slate-50/80"
                >
                  <th scope="row" className="px-5 py-5 lg:px-8">
                    <span className="font-mono text-[10px] tracking-wider text-cyan-600">
                      {p.n}
                    </span>
                    <span className="mt-1 block font-semibold tracking-tight text-slate-900">
                      {p.name}
                    </span>
                  </th>
                  <td className="px-4 py-5 font-mono text-xs text-slate-600">
                    {p.target}
                  </td>
                  <td className="px-4 py-5 text-slate-600">{p.action}</td>
                  <td className="px-4 py-5 text-slate-700">{p.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </SemanticChunk>
        </Reveal>

        <Reveal variant="fade-up" delay={200} className="mt-8 lg:mt-10">
          <AuditCta label="Auditer vos 4 piliers SAGEO" />
        </Reveal>
      </div>
    </section>
  );
}
