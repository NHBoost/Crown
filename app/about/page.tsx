import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";

// SEO About — keyword: agence digitale belge équipe
export const metadata: Metadata = {
  title: "À propos — L'équipe derrière vos résultats",
  description:
    "Crown Agency réunit depuis 2018 des experts du marketing digital basés à Bruxelles. Découvrez notre méthode, nos valeurs et l'équipe qui pilote vos campagnes d'acquisition et de conversion.",
  keywords: [
    "agence digitale belge",
    "équipe marketing digital Bruxelles",
    "agence performance Belgique",
    "experts acquisition",
    "Crown Agency équipe",
    "valeurs agence digitale",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "À propos — Crown Agency",
    description:
      "Une agence née pour performer. Stratégie, expertise et réactivité depuis 2018.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <About />
      <Testimonials />
    </>
  );
}
