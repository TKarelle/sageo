"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export function WaitlistForm() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError(false);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "Liste d’attente — extension Chrome SAGEO");
    formData.append("from_name", "SAGEO");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { success?: boolean };
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <p className="waitlist-success" role="status">
        C’est noté. Vous serez prévenu de la sortie de l’extension gratuite, et
        vous recevrez la newsletter. Un e-mail à contact@kopio.eu suffit pour
        vous désinscrire.
      </p>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <div hidden aria-hidden="true">
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="waitlist-field">
        <span>E-mail</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="vous@exemple.fr"
        />
      </label>

      <label className="waitlist-consent">
        <input required type="checkbox" name="notify" value="oui" />
        <span>Je veux être prévenu de la sortie de l’extension Chrome gratuite.</span>
      </label>

      <label className="waitlist-consent">
        <input required type="checkbox" name="newsletter" value="oui" />
        <span>
          J’accepte de recevoir la newsletter SAGEO. Je peux retirer cet accord
          à tout moment, comme indiqué dans la{" "}
          <Link href="/politique-confidentialite">
            politique de confidentialité
          </Link>
          .
        </span>
      </label>

      <button className="btn btn-dark waitlist-submit" type="submit" disabled={sending || !WEB3FORMS_KEY}>
        <span className="btn-label">{sending ? "Envoi…" : "Être prévenu gratuitement"}</span>
      </button>
      <p className="waitlist-reassure">Gratuit. Un e-mail le jour de la sortie, désinscription à tout moment.</p>

      {error ? (
        <p className="waitlist-error" role="alert">
          L’envoi a échoué. Réessayez dans un instant.
        </p>
      ) : null}
    </form>
  );
}
