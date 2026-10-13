import { AuditCta } from "@/components/ui/AuditCta";
import { Reveal } from "@/components/ui/Reveal";
import { RdfTuple, SemanticChunk } from "@/components/ui/SemanticChunk";
import { FAQS } from "@/lib/faqs";

/**
 * FAQ AEO — SSR natif (<details>), réponses directes toujours dans le HTML.
 */
export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative w-full py-12 lg:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="blur-up" duration={900}>
          <p className="section-label">FAQ</p>
          <h2 id="faq-heading" className="section-title">
            Foire Aux Questions SAGEO — ChatGPT Search, Perplexity et GEO France
          </h2>
          <p className="section-lead">
            Réponses directes (30–45 mots) pour Google AI Overviews, Gemini et
            les moteurs RAG — méthode{" "}
            <dfn title="Search-Augmented Generative Engine Optimization">
              SAGEO
            </dfn>{" "}
            par{" "}
            <dfn title="Éditeur de SAGEO Lab">Kopio</dfn>.
          </p>
          <RdfTuple
            subject="SAGEO Lab"
            verb="publie"
            complement="une FAQ AEO calibrée pour le Search-Augmented Generative Engine Optimization et le GEO France"
          />
        </Reveal>

        <Reveal
          variant="blur-up"
          stagger
          staggerMs={80}
          duration={850}
          className="mt-8 space-y-3 lg:mt-10"
        >
          {FAQS.map((item, i) => (
            <SemanticChunk
              key={item.id}
              id={`faq-${item.id}`}
              ariaLabel={`${item.q} — réponse SAGEO Lab Kopio`}
              className="tech-surface tech-surface-hover"
            >
              <details className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 [&::-webkit-details-marker]:hidden">
                  <h3 className="pr-2 text-base font-semibold tracking-tight text-slate-900">
                    <span className="mr-3 font-mono text-[10px] text-cyan-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.q}
                  </h3>
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 font-mono text-sm text-slate-600 transition group-open:rotate-45 group-open:bg-slate-900 group-open:text-white"
                  >
                    +
                  </span>
                </summary>
                <div className="space-y-3 border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-7">
                  <p>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-600">
                      Réponse directe
                    </span>
                    <span className="mt-2 block text-slate-700">
                      {item.direct}
                    </span>
                  </p>
                  <p>{item.detail}</p>
                </div>
              </details>
            </SemanticChunk>
          ))}
        </Reveal>

        <Reveal variant="fade-up" delay={180} className="mt-8 lg:mt-10">
          <AuditCta label="Poser votre question via un audit SAGEO" />
        </Reveal>
      </div>
    </section>
  );
}
