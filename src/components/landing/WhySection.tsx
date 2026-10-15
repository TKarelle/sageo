import { WHY } from "@/lib/content/landing";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function WhySection() {
  return (
    <Section className="why-section" id="comment-ca-marche" wrap={false}>
      <div className="section-wrap why-inner">
        <header className="why-header">
          <Eyebrow tone="blue">{WHY.eyebrow}</Eyebrow>
          <h2>{WHY.title}</h2>
          <p className="why-intro">{WHY.intro}</p>
        </header>

        <ol className="why-overview">
          {WHY.steps.map((item) => (
            <li
              key={item.step}
              className={
                "highlight" in item && item.highlight
                  ? "why-overview-item why-overview-item--highlight"
                  : "why-overview-item"
              }
            >
              <span className="why-overview-num" aria-hidden>
                {item.step}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="why-cta">
          <Button href={WHY.cta.href}>{WHY.cta.label}</Button>
        </div>
      </div>
    </Section>
  );
}
