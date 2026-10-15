import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className: string;
  wrap?: boolean;
  children: ReactNode;
  "aria-labelledby"?: string;
};

export function Section({
  id,
  className,
  wrap = true,
  children,
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      className={wrap ? `${className} section-wrap` : className}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  );
}
