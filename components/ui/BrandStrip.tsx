/* eslint-disable @next/next/no-img-element */

const brands: { name: string; slug: string; hex: string }[] = [
  { name: "Stripe", slug: "stripe", hex: "635BFF" },
  { name: "Discord", slug: "discord", hex: "5865F2" },
  { name: "Next.js", slug: "nextdotjs", hex: "000000" },
  { name: "Notion", slug: "notion", hex: "000000" },
  { name: "Hostinger", slug: "hostinger", hex: "673DE6" },
  { name: "Webflow", slug: "webflow", hex: "146EF5" },
  { name: "Shopify", slug: "shopify", hex: "7AB55C" },
  { name: "HubSpot", slug: "hubspot", hex: "FF7A59" },
];

export function BrandStrip() {
  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div
        className="flex items-center gap-16"
        style={{
          width: "max-content",
          animation: "marquee 22s linear infinite",
        }}
      >
        {[...brands, ...brands, ...brands].map((b, i) => (
          <img
            key={`${b.slug}-${i}`}
            src={`https://cdn.simpleicons.org/${b.slug}/${b.hex}`}
            alt={b.name}
            draggable={false}
            className="h-6 w-auto shrink-0 select-none transition-transform duration-300 hover:-translate-y-[2px] sm:h-7"
          />
        ))}
      </div>
    </div>
  );
}
