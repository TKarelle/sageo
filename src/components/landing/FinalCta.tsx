import { FINAL_CTA } from "@/lib/content/landing";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function FinalCta() {
  return (
    <Section className="final-cta">
      <div>
        <Eyebrow>{FINAL_CTA.eyebrow}</Eyebrow>
        <h2>{FINAL_CTA.title}</h2>
        <p>{FINAL_CTA.description}</p>
      </div>
      <Button href={FINAL_CTA.cta.href} variant="white" size="lg">
        {FINAL_CTA.cta.label}
      </Button>
    </Section>
  );
}
