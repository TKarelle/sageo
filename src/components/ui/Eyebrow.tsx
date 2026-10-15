type Tone = "default" | "mint" | "blue";

type EyebrowProps = {
  children: string;
  tone?: Tone;
};

const TONE_CLASS: Record<Tone, string> = {
  default: "eyebrow",
  mint: "eyebrow mint",
  blue: "eyebrow blue",
};

export function Eyebrow({ children, tone = "default" }: EyebrowProps) {
  return <span className={TONE_CLASS[tone]}>{children}</span>;
}
