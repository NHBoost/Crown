import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { Services } from "@/components/sections/Services";
import { CtaBand } from "@/components/sections/CtaBand";

// SEO Services — keyword: services marketing digital Belgique
export const metadata: Metadata = {
  title: "Services — Stratégie, sites web, acquisition, branding",
  description:
    "Six modules d'expertise pour votre croissance digitale : stratégie d'acquisition, création de sites web premium, gestion des réseaux sociaux, optimisation de conversion (CRO), branding et audit. Agence à Bruxelles.",
  keywords: [
    "services marketing digital Belgique",
    "stratégie d'acquisition Bruxelles",
    "création site web premium",
    "gestion réseaux sociaux",
    "CRO optimisation conversion",
    "branding agence",
    "audit digital",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Crown Agency",
    description:
      "Six modules d'expertise pour activer chaque levier de votre croissance digitale.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services />
      <CtaBand />
    </>
  );
}
