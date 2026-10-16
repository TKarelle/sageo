"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileStickyCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className={`mobile-sticky-cta${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <Link href="/#liste-attente" tabIndex={visible ? undefined : -1}>
        Être prévenu gratuitement
      </Link>
    </div>
  );
}
