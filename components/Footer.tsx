import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Services", href: "/services" },
      { label: "À propos", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Acquisition", href: "/services#acquisition" },
      { label: "Sites Web", href: "/services#web" },
      { label: "Social Media", href: "/services#social" },
      { label: "CRO", href: "/services#cro" },
      { label: "Branding", href: "/services#brand" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "contact@crownagency.be", href: "mailto:contact@crownagency.be" },
      { label: "+32 2 123 45 67", href: "tel:+3221234567" },
      { label: "Bruxelles, Belgique", href: "/contact" },
    ],
  },
];

type Social = { label: string; href: string; icon: React.ReactNode };

const socials: Social[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.6v1.64h.05c.5-.9 1.74-1.85 3.58-1.85 3.83 0 4.54 2.37 4.54 5.46V21h-4v-5.47c0-1.3 0-2.97-1.9-2.97-1.9 0-2.19 1.4-2.19 2.88V21h-3.98z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-7H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/3221234567",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden fill="currentColor">
        <path d="M17.47 14.38c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.57-.48-.5-.66-.5h-.57c-.2 0-.51.07-.78.37-.27.3-1.03 1-1.03 2.45s1.05 2.85 1.2 3.05c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.13-.27-.2-.57-.35M12 22c-1.7 0-3.34-.43-4.78-1.27L3 22l1.31-4.07A9.96 9.96 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden fill="currentColor">
        <path d="M18.9 2H22l-7.5 8.58L23 22h-6.78l-5.3-6.93L4.82 22H1.7l8.02-9.17L1 2h6.94l4.8 6.34zm-1.18 18h1.7L6.36 3.88H4.54z" />
      </svg>
    ),
  },
];

const legal = ["Mentions légales", "Politique de confidentialité", "CGU"];

export function Footer() {
  return (
    <footer className="border-t border-or/10 bg-noir px-6 pb-10 pt-16 sm:px-14">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Image
                src="/logo-white.png"
                alt="Crown Agency"
                width={586}
                height={338}
                className="h-14 w-auto"
              />
            </div>
            <p className="max-w-[260px] font-sans text-[0.78rem] font-light leading-[1.7] text-blanc/35">
              Agence de marketing digital premium. Stratégie, création et
              performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-[8px]">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-[34px] w-[34px] items-center justify-center border border-or/20 text-or transition-colors duration-200 hover:bg-or hover:text-noir"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <div className="mb-[18px] font-sans text-[0.62rem] uppercase tracking-[0.15em] text-blanc/25">
                {col.title}
              </div>
              <div className="flex flex-col gap-[10px]">
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="font-sans text-[0.78rem] text-blanc/45 transition-colors duration-200 hover:text-or"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-blanc/5 pt-6 sm:flex-row sm:items-center">
          <div className="font-sans text-[0.68rem] text-blanc/20">
            © {new Date().getFullYear()} Crown Agency. Tous droits réservés.
          </div>
          <div className="flex flex-wrap gap-6">
            {legal.map((l) => (
              <span
                key={l}
                className="cursor-pointer font-sans text-[0.68rem] text-blanc/20 transition-colors duration-200 hover:text-or"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
