import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { Services } from "@/components/sections/Services";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Stratégie d'acquisition, création de sites web, gestion des réseaux sociaux, CRO, branding et conseil. Une expertise sur-mesure pour votre croissance digitale.",
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
