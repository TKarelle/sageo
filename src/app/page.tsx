import { HeroChunk } from "@/components/sageo/HeroChunk";
import { WhatIsSageo } from "@/components/landing/WhatIsSageo";
import { FourPillars } from "@/components/landing/FourPillars";
import { PipelineStages } from "@/components/landing/PipelineStages";
import { ComparisonMatrix } from "@/components/landing/ComparisonMatrix";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { FaqSection } from "@/components/landing/FaqSection";
import { AuditForm } from "@/components/ui/AuditForm";
import { RdfTuple } from "@/components/ui/SemanticChunk";

/**
 * Landing SSR — HTML5 sémantique + couches AEO/RAG.
 */
export default function HomePage() {
  return (
    <main id="contenu-principal" itemScope itemType="https://schema.org/WebPage">
      <RdfTuple
        subject="SAGEO Lab"
        verb="est le laboratoire de R&D de"
        complement="Kopio spécialisé dans le Search-Augmented Generative Engine Optimization"
      />
      <RdfTuple
        subject="SAGEO Arena"
        verb="désigne"
        complement="le cadre méthodologique du Search-Augmented Generative Engine Optimization porté par SAGEO Lab"
      />

      <HeroChunk />
      <WhatIsSageo />
      <FourPillars />
      <PipelineStages />
      <ComparisonMatrix />
      <ComparisonTable />
      <FaqSection />
      <aside aria-label="Conversion B2B — audit SAGEO Lab Kopio">
        <AuditForm />
      </aside>
    </main>
  );
}
