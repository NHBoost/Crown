import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Crown Agency — Stratégie d'acquisition & conversion",
    template: "%s · Crown Agency",
  },
  description:
    "Crown Agency est une agence de marketing digital spécialisée dans la stratégie d'acquisition et de conversion pour les entreprises.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-blanc text-noir" suppressHydrationWarning>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
