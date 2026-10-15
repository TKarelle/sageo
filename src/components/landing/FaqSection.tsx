import { FAQS } from "@/lib/faqs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqItem } from "@/components/ui/FaqItem";
import { Section } from "@/components/ui/Section";

export function FaqSection() {
  const midpoint = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, midpoint);
  const right = FAQS.slice(midpoint);

  return (
    <Section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <Eyebrow>FAQ</Eyebrow>
      <h2 id="faq-heading">Vos questions, nos réponses</h2>
      <div className="faq-grid">
        <div className="faq-column">
          {left.map((item, index) => (
            <FaqItem
              key={item.question}
              id={`faq-${index + 1}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <div className="faq-column">
          {right.map((item, index) => (
            <FaqItem
              key={item.question}
              id={`faq-${midpoint + index + 1}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
