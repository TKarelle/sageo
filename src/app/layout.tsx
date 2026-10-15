import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteJsonLd } from "@/lib/schema";
import { HOME_URL, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";
import "./sageo-landing.css";
import "./mockup.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | SAGEO",
  },
  description: SITE_DESCRIPTION,
  authors: [
    { name: "Karelle", url: "https://kopio.eu" },
    { name: "Kopio", url: "https://kopio.eu" },
  ],
  creator: "Karelle — Kopio",
  publisher: "SAGEO",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: HOME_URL,
    siteName: "SAGEO",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpeg",
        width: 1376,
        height: 768,
        alt: "Visuel abstrait : sphère de points bleus sur fond sombre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/logo-venn.svg", type: "image/svg+xml", sizes: "any" }],
  },
  other: {
    "theme-color": "#f8fafc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <JsonLd data={getSiteJsonLd()} />
      </head>
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        <Header />
        {children}
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
