type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "brand-mark" }: LogoMarkProps) {
  return (
    <span className={className}>
      {/* Decorative mark: sized in CSS, not a content image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-mark.svg" alt="" width={36} height={36} />
    </span>
  );
}
