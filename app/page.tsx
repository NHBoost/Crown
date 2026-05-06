import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { CtaBand } from "@/components/sections/CtaBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

// SEO Home — keyword: agence marketing digital Bruxelles
export const metadata: Metadata = {
  title: {
    absolute: "Crown Agency — Agence marketing digital à Bruxelles",
  },
  description:
    "Agence digitale premium à Bruxelles. Stratégie d'acquisition, sites web, social media, CRO et branding — nous transformons vos idées en résultats mesurables. Audit gratuit sous 24h.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Crown Agency — Agence marketing digital à Bruxelles",
    description:
      "Stratégie, acquisition, conversion. Agence digitale premium à Bruxelles.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <CtaBand />
      <Testimonials />
      <Contact />
    </>
  );
}
