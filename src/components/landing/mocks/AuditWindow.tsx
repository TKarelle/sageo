import { SCORE_DEMO } from "@/lib/content/landing";
import { ScoreBreakdown } from "@/components/ui/ScoreBreakdown";
import { ScoreCircle } from "@/components/ui/ScoreCircle";
import { WindowChrome } from "@/components/ui/WindowChrome";

export function AuditWindow() {
  return (
    <div className="product-window" aria-label="Aperçu audit SAGEO">
      <WindowChrome />
      <div className="tabs">
        <span className="tab active">Audit de page</span>
        <span className="tab">Explorateur ChatGPT</span>
      </div>
      <div className="score-panel">
        <ScoreCircle value={SCORE_DEMO.total} />
        <div className="score-name">Score SAGEO</div>
        <ScoreBreakdown dimensions={SCORE_DEMO.dimensions} />
      </div>
      <div className="recommend-title">Recommandations prioritaires</div>
      {SCORE_DEMO.recommendations.map((item) => (
        <div className="recommend" key={item.label}>
          <i
            className={`priority${item.priority === "Moyenne" ? " medium" : " high"}`}
            aria-hidden
          />
          <span>{item.label}</span>
          <em>{item.priority}</em>
        </div>
      ))}
    </div>
  );
}
