import type { Metadata } from "next";
import { MethodeArticle } from "@/components/article/MethodeArticle";
import { JsonLd } from "@/components/seo/JsonLd";
import { ARTICLE } from "@/lib/content/methode-article";
import { getArticleJsonLd } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const url = `${SITE_URL}${ARTICLE.path}`;

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  authors: [{ name: "Karelle", url: "https://kopio.eu" }],
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    url,
    title: `${ARTICLE.title} | SAGEO`,
    description: ARTICLE.description,
    publishedTime: ARTICLE.dateIso,
    modifiedTime: ARTICLE.dateIso,
    authors: ["Karelle"],
  },
};

export default function MethodeSageoPage() {
  return (
    <>
      <JsonLd data={getArticleJsonLd()} />
      <MethodeArticle />
    </>
  );
}
