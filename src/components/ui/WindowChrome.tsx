import { LogoMark } from "@/components/ui/LogoMark";

type WindowChromeProps = {
  title?: string;
};

export function WindowChrome({ title = "SAGEO" }: WindowChromeProps) {
  return (
    <div className="window-top">
      <LogoMark className="logo-dot" />
      <b>{title}</b>
      <span className="window-close" aria-hidden>
        ×
      </span>
    </div>
  );
}
