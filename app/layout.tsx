import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://crownagency.be";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Crown Agency — Agence marketing digital à Bruxelles",
    template: "%s · Crown Agency",
  },
  description:
    "Agence digitale premium à Bruxelles. Stratégie d'acquisition, sites web, social media, CRO et branding — nous transformons vos idées en résultats mesurables. Audit gratuit sous 24h.",
  applicationName: "Crown Agency",
  keywords: [
    "agence marketing digital Bruxelles",
    "agence digitale Belgique",
    "stratégie d'acquisition",
    "performance media",
    "création site web premium",
    "CRO conversion",
    "branding identité",
    "réseaux sociaux",
    "agence SaaS",
    "Crown Agency",
  ],
  authors: [{ name: "Crown Agency", url: SITE_URL }],
  creator: "Crown Agency",
  publisher: "Crown Agency",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: SITE_URL,
    siteName: "Crown Agency",
    title: "Crown Agency — Agence marketing digital à Bruxelles",
    description:
      "Stratégie, acquisition, conversion. Agence digitale premium à Bruxelles.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Crown Agency — Agence marketing digital à Bruxelles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crown Agency — Agence marketing digital à Bruxelles",
    description:
      "Stratégie, acquisition, conversion. Agence digitale premium à Bruxelles.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col bg-blanc text-noir"
        suppressHydrationWarning
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
