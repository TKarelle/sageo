import { HERO } from "@/lib/content/landing";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { Section } from "@/components/ui/Section";
import { AuditWindow } from "@/components/landing/mocks/AuditWindow";
import { HeroDecor } from "@/components/landing/mocks/HeroDecor";

export function Hero() {
  return (
    <Section className="hero">
      <div className="hero-copy">
        <Eyebrow>{HERO.eyebrow}</Eyebrow>
        <h1>
          Votre site est-il prêt
          <br className="br-desktop" /> à être cité par ChatGPT&nbsp;?
        </h1>
        <p>{HERO.description}</p>
        <div className="hero-actions">
          <Button href={HERO.primaryCta.href}>{HERO.primaryCta.label}</Button>
          <Button href={HERO.secondaryCta.href} variant="light">
            {HERO.secondaryCta.label}
          </Button>
        </div>
      </div>

      <div className="hero-art">
        <HeroDecor />
        <AuditWindow />
      </div>

      <div className="hero-features">
        {HERO.features.map((feature) => (
          <FeatureItem
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        ))}
      </div>
    </Section>
  );
}
