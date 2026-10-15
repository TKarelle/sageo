import { AUDIENCE } from "@/lib/content/landing";
import { AudienceCard } from "@/components/ui/AudienceCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CitationChatMock } from "@/components/landing/mocks/CitationChatMock";

export function AudienceSection() {
  return (
    <Section className="audience-section" id="pour-qui" wrap={false}>
      <div className="section-wrap audience-inner">
        <div className="audience-copy">
          <Eyebrow>{AUDIENCE.eyebrow}</Eyebrow>
          <h2>{AUDIENCE.title}</h2>
          <p className="audience-lead">{AUDIENCE.description}</p>
          <div className="audience-grid">
            {AUDIENCE.items.map((item) => (
              <AudienceCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
        <div className="audience-visual">
          <CitationChatMock example="visibility" />
          <p className="audience-visual-note">{AUDIENCE.visualNote}</p>
        </div>
      </div>
    </Section>
  );
}
