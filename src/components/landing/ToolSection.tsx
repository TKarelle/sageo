import { EXTENSION } from "@/lib/content/landing";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ExtensionPreview } from "@/components/landing/mocks/ExtensionPreview";

export function ToolSection() {
  return (
    <Section className="tool-section" id="outil" wrap={false}>
      <div className="section-wrap tool-inner">
        <div className="tool-copy">
          <Eyebrow tone="blue">{EXTENSION.eyebrow}</Eyebrow>
          <h2>{EXTENSION.title}</h2>
          <p>{EXTENSION.description}</p>
          <Button href={EXTENSION.cta.href}>{EXTENSION.cta.label}</Button>
          <p className="fine-print">{EXTENSION.note}</p>
        </div>
        <ExtensionPreview />
      </div>
    </Section>
  );
}
