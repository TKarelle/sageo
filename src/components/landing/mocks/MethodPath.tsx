import { METHOD } from "@/lib/content/landing";
import { CitationChatMock } from "./CitationChatMock";

/**
 * Parcours Apple premium : numéros bleus reliés par pointillés,
 * illustration citation ChatGPT (source mise en évidence).
 */
export function MethodPath() {
  return (
    <div className="method-path" aria-label="Parcours SAGEO vers la citation ChatGPT">
      <ol className="path-checkpoints">
        {METHOD.steps.map((step, index) => (
          <li key={step.title} className="path-checkpoint">
            <div className="path-rail" aria-hidden>
              <span className="path-num">{index + 1}</span>
              {index < METHOD.steps.length - 1 ? (
                <span className="path-dots" />
              ) : (
                <span className="path-dots path-dots-last" />
              )}
            </div>
            <div className="path-checkpoint-copy">
              <span className="path-checkpoint-tag">{step.tag}</span>
              <h3>{step.title}</h3>
              <small>{step.subtitle}</small>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <figure className="path-outcome">
        <CitationChatMock />
        <figcaption className="path-outcome-caption">
          <h3>{METHOD.outcome.title}</h3>
          <p>{METHOD.outcome.body}</p>
        </figcaption>
      </figure>
    </div>
  );
}
