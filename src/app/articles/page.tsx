import type { Metadata } from "next";
import { ArticlesIndex } from "@/components/article/ArticlesIndex";
import { JsonLd } from "@/components/seo/JsonLd";
import { ARTICLES_INDEX } from "@/lib/content/qui-fait-sageo";
import { getArticlesIndexJsonLd } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const TITLE = ARTICLES_INDEX.title;
const DESCRIPTION = ARTICLES_INDEX.description;
const url = `${SITE_URL}/articles`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Karelle", url: "https://kopio.eu" }],
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
