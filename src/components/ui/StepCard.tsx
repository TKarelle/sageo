import type { IconTone } from "@/lib/content/landing";

const TONE_CLASS: Record<IconTone, string> = {
  green: "green-bg",
  violet: "violet-bg",
  purple: "purple-bg",
  blue: "blue-bg",
};

type StepCardProps = {
  icon: string;
  tone: IconTone;
  title: string;
  subtitle: string;
  tag?: string;
  body?: string;
  compact?: boolean;
};

export function StepCard({
  icon,
  tone,
  title,
  subtitle,
  tag,
  body,
  compact = false,
}: StepCardProps) {
  if (compact) {
    return (
      <div className="float-step">
        <span className={`step-icon ${TONE_CLASS[tone]}`} aria-hidden>
          {icon}
        </span>
        <b>{title}</b>
        <small>{subtitle}</small>
      </div>
    );
  }

  return (
    <article className="step">
      <div className={`step-icon ${TONE_CLASS[tone]}`} aria-hidden>
        {icon}
      </div>
      <b>{title}</b>
      <small>{subtitle}</small>
      {tag ? <span className="step-tag">{tag}</span> : null}
      {body ? <p>{body}</p> : null}
    </article>
  );
}
