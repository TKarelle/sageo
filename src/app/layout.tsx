import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { getGlobalJsonLd, serializeJsonLd } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sageolab.fr"),
  title: {
    default: "SAGEO Lab — Search-Augmented Generative Engine Optimization | Kopio",
    template: "%s | SAGEO Lab",
  },
  description:
    "SAGEO Lab est le centre de recherche de Kopio sur le Search-Augmented Generative Engine Optimization, le GEO France et l'Optimisation LLM.",
  keywords: [
    "SAGEO",
    "SAGEO Lab",
    "SAGEO Arena",
    "Search-Augmented Generative Engine Optimization",
    "Kopio",
    "GEO France",
    "Optimisation LLM",
    "Cross-Encoder Reranking",
    "ChatGPT Search",
    "Perplexity",
    "BM25",
    "RAG",
  ],
  authors: [{ name: "Kopio", url: "https://kopio.eu" }],
  creator: "Kopio",
  publisher: "SAGEO Lab",
  alternates: {
    canonical: "https://sageolab.fr/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sageolab.fr/",
    siteName: "SAGEO Lab",
    title: "SAGEO Lab — Search-Augmented Generative Engine Optimization",
    description:
      "SAGEO Lab documente le pipeline RAG à trois stages pour le GEO France et l'Optimisation LLM. Édité par Kopio.",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Pipeline Neural Network Vector Reranking — SAGEO Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAGEO Lab — SAGEO by Kopio",
    description:
      "Search-Augmented Generative Engine Optimization : Retrieval, Rerank, Grounding.",
    images: ["/herosageo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getGlobalJsonLd();

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} relative font-sans`}
      >
        <Header />
        {children}
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
