import type { Metadata } from "next";
import { ArticlesIndex } from "@/components/article/ArticlesIndex";
import { JsonLd } from "@/components/seo/JsonLd";
import { getArticlesIndexJsonLd } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const TITLE = "Articles";
const DESCRIPTION =
  "Les articles qui expliquent la méthode SAGEO de Kopio : être trouvé, retenu, puis cité.";
const url = `${SITE_URL}/articles`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: `${TITLE} | SAGEO`,
    description: DESCRIPTION,
  },
};

export default function ArticlesPage() {
  return (
    <>
      <JsonLd data={getArticlesIndexJsonLd()} />
      <ArticlesIndex />
    </>
  );
}
