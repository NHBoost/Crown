import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Crown Agency réunit des experts passionnés par la croissance digitale. Découvrez l'équipe, les valeurs et la vision derrière vos résultats.",
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
