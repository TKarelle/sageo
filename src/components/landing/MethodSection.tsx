import { METHOD } from "@/lib/content/landing";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { MethodPath } from "@/components/landing/mocks/MethodPath";

export function MethodSection() {
  return (
    <Section className="method-section" id="methode">
      <div className="section-heading">
        <Eyebrow>{METHOD.eyebrow}</Eyebrow>
        <h2>
          Une méthode en 3 étapes
          <br />
          pour être trouvé, compris et cité
        </h2>
        <p>{METHOD.description}</p>
        <Button href={METHOD.cta.href}>{METHOD.cta.label}</Button>
      </div>
      <MethodPath />
    </Section>
  );
}
