import { OpenAIMark } from "./icons/OpenAIMark";

export type CitationExample = "coach" | "visibility";

type Source = {
  num: string;
  title: string;
  detail: string;
  ours: boolean;
};

const EXAMPLES: Record<
  CitationExample,
  {
    question: [string, string];
    intro: string;
    sources: readonly Source[];
  }
> = {
  coach: {
    question: ["Quel coach en prise de parole", "recommander à Lyon ?"],
    intro:
      "Voici quelques options pertinentes pour un accompagnement en prise de parole à Lyon :",
    sources: [
      {
        num: "1.",
        title: "Formacoach Paris",
        detail: "Ateliers collectifs et modules en ligne.",
        ours: false,
      },
      {
        num: "2.",
        title: "Voix & Scène Lyon",
        detail: "Accompagnement individuel en prise de parole.",
        ours: true,
      },
      {
        num: "3.",
        title: "Oratoria Pro",
        detail: "Programmes intensifs pour dirigeants.",
        ours: false,
      },
    ],
  },
  visibility: {
    question: ["Comment être visible", "dans ChatGPT pour mon activité ?"],
    intro:
      "Voici des approches utiles pour renforcer votre présence dans les réponses générées :",
    sources: [
      {
        num: "1.",
        title: "Guides SEO classiques",
        detail: "Optimisation technique et mots-clés Google.",
        ours: false,
      },
      {
        num: "2.",
        title: "Méthode SAGEO",
        detail: "Partir des sous-requêtes ChatGPT, puis GEO et SEO.",
        ours: true,
      },
      {
        num: "3.",
        title: "Agences contenu IA",
        detail: "Production de textes automatisée en volume.",
        ours: false,
      },
    ],
  },
};

type CitationChatMockProps = {
  example?: CitationExample;
};

/**
 * Mock ChatGPT — 3 sources dont la nôtre mise en évidence.
 * `coach` = parcours méthode · `visibility` = section audiences.
 */
export function CitationChatMock({ example = "coach" }: CitationChatMockProps) {
  const data = EXAMPLES[example];

  return (
    <div
      className="citation-chat"
      aria-label="Exemple de réponse ChatGPT citant une source"
    >
      <div className="citation-chat-head">
        <span className="citation-chat-logo" aria-hidden>
          <OpenAIMark size={18} />
        </span>
        <span className="citation-chat-title">ChatGPT</span>
      </div>

      <div className="citation-chat-bubble">
        {data.question[0]}
        <br />
        {data.question[1]}
      </div>

      <div className="citation-chat-reply">
        <div className="citation-chat-avatar" aria-hidden>
          <OpenAIMark size={14} />
        </div>
        <div className="citation-chat-body">
          <p className="citation-chat-intro">{data.intro}</p>

          <ol className="citation-sources">
            {data.sources.map((source) => (
              <li
                key={source.title}
                className={
                  source.ours
                    ? "citation-source citation-source--ours"
                    : "citation-source"
                }
              >
                {source.ours ? (
                  <span className="citation-ring" aria-hidden />
                ) : null}
                <span className="citation-source-num">{source.num}</span>
                <span className="citation-source-text">
                  <b>{source.title}</b>
                  <small>{source.detail}</small>
                </span>
                {source.ours ? (
                  <span className="citation-badge">Votre source</span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="citation-chat-input" aria-hidden>
        <span>Posez une question…</span>
      </div>
    </div>
  );
}
