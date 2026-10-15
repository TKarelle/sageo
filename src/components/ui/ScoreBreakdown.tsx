import type { DotColor } from "@/lib/content/landing";

type Dimension = {
  key: string;
  value: number;
  color: DotColor;
};

type ScoreBreakdownProps = {
  dimensions: readonly Dimension[];
};

export function ScoreBreakdown({ dimensions }: ScoreBreakdownProps) {
  return (
    <div className="score-list">
      {dimensions.map((item) => (
        <div key={item.key}>
          <i className={`dot ${item.color}`} aria-hidden />
          <span>{item.key}</span>
          <b>{item.value}</b>
        </div>
      ))}
    </div>
  );
}
