import type { Metadata } from "next";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { Hero } from "@/components/landing/Hero";
import { MethodSection } from "@/components/landing/MethodSection";
import { ScoreSection } from "@/components/landing/ScoreSection";
import { ToolSection } from "@/components/landing/ToolSection";
import { WaitlistSection } from "@/components/landing/WaitlistSection";
import { WhySection } from "@/components/landing/WhySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomeJsonLd } from "@/lib/schema";
import { HOME_URL, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: HOME_URL },
  openGraph: {
    url: HOME_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <main id="contenu-principal">
      <JsonLd data={getHomeJsonLd()} />
      <Hero />
      <ScoreSection />
      <MethodSection />
      <ToolSection />
      <WaitlistSection />
      <WhySection />
      <AudienceSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
