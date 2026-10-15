import { EXTENSION } from "@/lib/content/landing";
import { LogoMark } from "@/components/ui/LogoMark";

export function ExtensionPreview() {
  return (
    <div className="extension-scene" aria-label="Aperçu extension Chrome SAGEO">
      <div className="browser-back" aria-hidden>
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>chatgpt.com</span>
        </div>
        <div className="fake-lines">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="extension-card">
        <div className="extension-head">
          <LogoMark className="logo-dot" />
          <b>SAGEO</b>
          <span className="active-switch">
            Actif <i />
          </span>
        </div>
        <p className="extension-count">
          Requêtes détectées <span>{EXTENSION.detectedCount}</span>
        </p>
        {EXTENSION.queries.map((query) => (
          <div className="query" key={query.text}>
            <b>{query.text}</b>
            <small>{query.tag}</small>
          </div>
        ))}
        <p className="fine-print">{EXTENSION.previewNote}</p>
      </div>
    </div>
  );
}
