import { SCORE_SECTION } from "@/lib/content/landing";
import { DimensionCard } from "@/components/ui/DimensionCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { MiniDashboard } from "@/components/landing/mocks/MiniDashboard";

export function ScoreSection() {
  return (
    <Section className="score-section" id="score">
      <MiniDashboard />
      <div className="score-explainer">
        <Eyebrow tone="mint">{SCORE_SECTION.eyebrow}</Eyebrow>
        <h2>
          Ce que l’audit analyse
          <br className="br-desktop" /> sur votre page
        </h2>
        <p>{SCORE_SECTION.description}</p>
        <div className="dimension-grid">
          {SCORE_SECTION.dimensions.map((item) => (
            <DimensionCard
              key={item.label}
              icon={item.icon}
              label={item.label}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <p className="fine-print">{SCORE_SECTION.note}</p>
      </div>
    </Section>
  );
}
