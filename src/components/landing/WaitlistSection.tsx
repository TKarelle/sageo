import { Eyebrow } from "@/components/ui/Eyebrow";
import { WaitlistForm } from "@/components/landing/WaitlistForm";

export function WaitlistSection() {
  return (
    <section className="waitlist section-wrap" id="liste-attente" aria-labelledby="liste-attente-titre">
      <div className="waitlist-card">
        <Eyebrow>Liste d’attente</Eyebrow>
        <h2 id="liste-attente-titre">Être prévenu de l’extension gratuite</h2>
        <p>
          L’extension Chrome SAGEO sera gratuite. Laissez votre e-mail pour
          recevoir un message le jour de la sortie.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
}
