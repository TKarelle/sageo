import type { Metadata } from "next";
import { QuiFaitArticle } from "@/components/article/QuiFaitArticle";
import { JsonLd } from "@/components/seo/JsonLd";
import { QUI_FAIT } from "@/lib/content/qui-fait-sageo";
import { getQuiFaitJsonLd } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const url = `${SITE_URL}${QUI_FAIT.path}`;

export const metadata: Metadata = {
  title: QUI_FAIT.title,
  description: QUI_FAIT.description,
  authors: [{ name: "Karelle", url: "https://kopio.eu" }],
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    url,
    title: `${QUI_FAIT.title} | SAGEO`,
    description: QUI_FAIT.description,
    publishedTime: QUI_FAIT.dateIso,
    modifiedTime: QUI_FAIT.dateIso,
    authors: ["Karelle"],
  },
};

export default function QuiFaitSageoPage() {
  return (
    <>
      <JsonLd data={getQuiFaitJsonLd()} />
      <QuiFaitArticle />
    </>
  );
}
