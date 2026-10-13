"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FreeformPanel } from "@/components/ui/FreeformPanel";
import { Reveal } from "@/components/ui/Reveal";

type FormState = {
  company: string;
  url: string;
  email: string;
  focus: string;
};

const INITIAL: FormState = {
  company: "",
  url: "",
  email: "",
  focus: "geo-france",
};

const STEPS = [
  "Audit SAGEO & RAG",
  "Balisage JSON-LD",
  "Micro-Chunking 120–180 mots",
  "Ancrage d'entité",
] as const;

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

/**
 * Conversion B2B — envoi Web3Forms (access_key via env).
 */
export function AuditForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", `Audit SAGEO — ${form.company}`);
    formData.append("from_name", "SAGEO Lab");
    formData.set(
      "message",
      [
        `Demande d'audit SAGEO Lab`,
        `Entreprise : ${form.company}`,
        `URL : ${form.url}`,
        `Email : ${form.email}`,
        `Focus : ${form.focus}`,
      ].join("\n")
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { success?: boolean };
      if (data.success) {
        setSubmitted(true);
        setForm(INITIAL);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="audit" className="relative w-full overflow-hidden py-8 lg:py-12">
      {/* ——— Mobile / tablette ——— */}
      <div className="lg:hidden">
        <div className="relative mx-[5px] mt-[5px] aspect-[16/11] min-h-[16rem] max-h-[22rem] overflow-hidden rounded-[1.25rem]">
          <Image
            src="/conversion.jpg"
            alt="Conversion B2B — audit SAGEO Lab"
            fill
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
          <Reveal
            variant="mask-wipe"
            eager
            duration={1000}
            className="absolute inset-0 flex flex-col justify-end px-5 pb-5 pt-12 sm:px-8 sm:pb-6"
          >
            <AuditCopy onPhoto />
          </Reveal>
        </div>

        <Reveal variant="fade-up" delay={120} className="p-4 pt-4">
          <div className="rounded-[2rem] rounded-tl-[2.75rem] border border-slate-200/60 bg-white p-6 shadow-soft ring-1 ring-slate-900/[0.03] sm:p-8">
            <AuditPanelBody
              submitted={submitted}
              form={form}
              setForm={setForm}
              onSubmit={handleSubmit}
              sending={sending}
              error={error}
            />
          </div>
        </Reveal>
      </div>

      {/* ——— Desktop ——— */}
      <div className="relative mx-[5px] hidden min-h-[28rem] overflow-hidden rounded-[1.25rem] lg:block xl:min-h-[30rem]">
        <Image
          src="/conversion.jpg"
          alt="Conversion B2B — audit SAGEO Lab"
          fill
          quality={95}
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-10 flex min-h-[28rem] items-end xl:min-h-[30rem]">
          <Reveal
            variant="fade-left"
            duration={1000}
            className="mb-10 ml-8 w-[min(26rem,38%)] xl:ml-12"
          >
            <div className="rounded-tr-[2.75rem] bg-white/10 p-7 backdrop-blur-md ring-1 ring-white/20 xl:p-8">
              <AuditCopy onPhoto />
            </div>
          </Reveal>

          <Reveal
            variant="fade-right"
            delay={140}
            duration={1100}
            className="ml-auto w-[min(48%,36rem)] xl:w-[min(46%,40rem)]"
          >
            <FreeformPanel
              mirror
              contentClassName="w-full px-8 py-8 xl:px-10 xl:py-10"
            >
              <AuditPanelBody
                submitted={submitted}
                form={form}
                setForm={setForm}
                onSubmit={handleSubmit}
                sending={sending}
                error={error}
              />
            </FreeformPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AuditCopy({ onPhoto = false }: { onPhoto?: boolean }) {
  const label = onPhoto
    ? "font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300"
    : "section-label";
  const title = onPhoto
    ? "hero-text-glow mt-2 font-display text-2xl font-medium leading-tight text-white sm:mt-3 sm:text-3xl lg:text-4xl"
    : "mt-3 font-display text-3xl font-medium leading-tight text-slate-900 sm:text-4xl";
  const body = onPhoto
    ? "hero-text-glow mt-2 hidden text-sm leading-relaxed text-white/90 sm:mt-3 sm:block lg:mt-4"
    : "mt-4 text-sm leading-relaxed text-slate-600";
  const list = onPhoto
    ? "mt-4 hidden space-y-2 font-mono text-xs text-white/90 lg:mt-6 lg:block lg:space-y-2.5"
    : "mt-8 space-y-2.5 font-mono text-sm text-slate-600";
  const arrow = onPhoto ? "text-cyan-300" : "text-blue-600";

  return (
    <>
      <p className={label}>Conversion B2B</p>
      <h2 className={title}>Demander un audit SAGEO</h2>
      <p className={body}>
        Évaluez la préparation de votre site au pipeline Retrieval, Cross-Encoder
        Rerank et LLM Grounding. Densité BM25, micro-chunks et graphe Schema.org
        pour le GEO France.
      </p>
      <ul className={list}>
        {STEPS.map((step) => (
          <li key={step} className="flex gap-2">
            <span className={arrow} aria-hidden>
              →
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function AuditPanelBody({
  submitted,
  form,
  setForm,
  onSubmit,
  sending,
  error,
}: {
  submitted: boolean;
  form: FormState;
  setForm: (f: FormState) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  sending: boolean;
  error: boolean;
}) {
  if (submitted) {
    return (
      <div role="status">
        <p className="section-label">Audit SAGEO</p>
        <h3 className="mt-3 font-display text-2xl font-medium text-slate-900">
          Demande enregistrée
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          SAGEO Lab (Kopio) traite votre demande d&apos;audit Search-Augmented
          Generative Engine Optimization. Un expert GEO France vous contacte sous
          48 heures ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="from_name" value="SAGEO Lab" />

      <label className="block">
        <span className="text-xs font-medium text-slate-500">Entreprise</span>
        <input
          required
          name="company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="mt-1.5 w-full rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-2 focus:ring-cyan-500/15"
          placeholder="Acme"
          autoComplete="organization"
        />
      </label>

      <label className="block">
        <span className="text-xs font-medium text-slate-500">URL canonique</span>
        <input
          required
          type="url"
          name="url"
          value={form.url}
          onChange={(e) => setForm({ ...form, url: e.target.value })}
          className="mt-1.5 w-full rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-2 focus:ring-cyan-500/15"
          placeholder="https://exemple.fr"
          autoComplete="url"
        />
      </label>

      <label className="block">
        <span className="text-xs font-medium text-slate-500">Email pro</span>
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1.5 w-full rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-2 focus:ring-cyan-500/15"
          placeholder="vous@entreprise.fr"
          autoComplete="email"
        />
      </label>

      <label className="block">
        <span className="text-xs font-medium text-slate-500">Focus</span>
        <select
          name="focus"
          value={form.focus}
          onChange={(e) => setForm({ ...form, focus: e.target.value })}
          className="mt-1.5 w-full rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-2 focus:ring-cyan-500/15"
        >
          <option value="geo-france">GEO France</option>
          <option value="optimisation-llm">Optimisation LLM</option>
          <option value="pipeline-rag">Pipeline RAG SAGEO</option>
          <option value="schema-org">Graphe Schema.org</option>
        </select>
      </label>

      <div className="sm:col-span-2 space-y-4">
        <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-slate-500">
          <input
            required
            type="checkbox"
            name="rgpd_consent"
            value="oui"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500/30"
          />
          <span>
            J&apos;accepte que Kopio traite mes données pour répondre à ma
            demande d&apos;audit SAGEO Lab, conformément à la{" "}
            <Link
              href="/politique-confidentialite"
              className="font-medium text-blue-600 underline-offset-2 hover:underline"
            >
              politique de confidentialité (RGPD)
            </Link>{" "}
            et aux{" "}
            <Link
              href="/mentions-legales"
              className="font-medium text-blue-600 underline-offset-2 hover:underline"
            >
              mentions légales
            </Link>
            . Je peux retirer mon consentement à tout moment.
          </span>
        </label>

        <button
          type="submit"
          disabled={sending || !WEB3FORMS_KEY}
          className="group inline-flex items-center gap-3 rounded-full bg-slate-900 py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Envoi…" : "Lancer l'audit SAGEO"}
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 transition group-hover:translate-x-0.5 group-hover:text-blue-600"
          >
            →
          </span>
        </button>
        {error && (
          <p className="text-xs text-red-600" role="alert">
            L&apos;envoi a échoué. Réessayez dans un instant.
          </p>
        )}
        {!WEB3FORMS_KEY && (
          <p className="text-xs text-amber-600" role="status">
            Clé Web3Forms manquante — ajoutez NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
            dans .env.local
          </p>
        )}
      </div>
    </form>
  );
}
