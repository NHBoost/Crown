import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlez-nous de votre projet. Notre équipe vous recontacte sous 24h pour un premier échange sans engagement.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Contact />
    </>
  );
}
