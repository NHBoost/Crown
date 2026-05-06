import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { Contact } from "@/components/sections/Contact";

// SEO Contact — keyword: contact agence marketing Bruxelles
export const metadata: Metadata = {
  title: "Contact — Démarrons votre prochain projet digital",
  description:
    "Décrivez-nous votre projet en quelques lignes. Notre équipe revient sous 24h avec une première lecture stratégique — gratuite et sans engagement. Avenue Louise 250, Bruxelles.",
  keywords: [
    "contact agence marketing Bruxelles",
    "audit digital gratuit",
    "rendez-vous agence digitale",
    "Crown Agency contact",
    "agence Belgique Bruxelles",
    "prendre contact agence",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Crown Agency",
    description:
      "Réponse sous 24h. Premier échange gratuit, sans engagement.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Contact />
    </>
  );
}
