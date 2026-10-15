import { SCORE_DEMO, SCORE_SECTION } from "@/lib/content/landing";
import { ScoreBreakdown } from "@/components/ui/ScoreBreakdown";
import { ScoreCircle } from "@/components/ui/ScoreCircle";
import { WindowChrome } from "@/components/ui/WindowChrome";

export function MiniDashboard() {
  return (
    <div className="mini-dashboard" aria-label="Tableau de score SAGEO">
      <WindowChrome />
      <div className="mini-dash-title">Exemple de score</div>
      <div className="mini-dash-body">
        <ScoreCircle value={SCORE_DEMO.total} size="small" />
        <ScoreBreakdown dimensions={SCORE_DEMO.dimensions} />
      </div>
      <p>{SCORE_SECTION.dashboardNote}</p>
    </div>
  );
}
