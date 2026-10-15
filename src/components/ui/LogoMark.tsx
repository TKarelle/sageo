type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "brand-mark" }: LogoMarkProps) {
  return (
    <span className={className}>
      <img src="/logo-mark.svg" alt="" width={36} height={36} />
    </span>
  );
}
