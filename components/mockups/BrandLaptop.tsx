export function BrandLaptop() {
  const palette: { hex: string; name: string; bg: string; text: string }[] = [
    { hex: "#1A1A1A", name: "Noir", bg: "#1A1A1A", text: "#fff" },
    { hex: "#C9A84C", name: "Or", bg: "#C9A84C", text: "#1A1A1A" },
    { hex: "#F5F5F5", name: "Fond", bg: "#F5F5F5", text: "#1A1A1A" },
    { hex: "#FFFFFF", name: "Blanc", bg: "#FFFFFF", text: "#1A1A1A" },
  ];

  return (
    <div
      className="relative w-[480px] max-w-full"
      style={{
        animation: "floatY 6s ease-in-out infinite",
        filter: "drop-shadow(0 32px 64px rgba(26,26,26,0.14))",
      }}
    >
      <div
        className="overflow-hidden rounded-t-lg border-[1.5px] border-noir/10 bg-blanc"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5)" }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-[5px] border-b border-noir/5 bg-[#f0f0f0] px-3 py-[7px]">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <span
              key={c}
              className="h-[9px] w-[9px] rounded-full"
              style={{ background: c }}
            />
          ))}
          <div className="ml-2 flex h-[14px] flex-1 items-center rounded-[3px] bg-[#e4e4e4] pl-2">
            <span className="font-sans text-[0.55rem] tracking-[0.03em] text-[#888]">
              crownagency.be/brand
            </span>
          </div>
        </div>

        {/* Brand guide content */}
        <div className="bg-blanc">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-noir/5 px-5 py-[10px]">
            <span className="font-sans text-[0.46rem] uppercase tracking-[0.2em] text-noir/50">
              CROWN AGENCY · BRAND GUIDELINES v2.1
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="h-[5px] w-[5px] rounded-full bg-[#4caf50]" />
              <span className="font-sans text-[0.42rem] uppercase tracking-[0.14em] text-noir/50">
                Live
              </span>
            </span>
          </div>

          {/* Large wordmark display */}
          <div className="bg-fond px-5 py-6">
            <div className="mb-[6px] font-sans text-[0.42rem] uppercase tracking-[0.2em] text-or">
              — Logotype
            </div>
            <div className="flex flex-col items-center justify-center border border-noir/10 bg-blanc py-5">
              <span className="font-serif text-[1.2rem] uppercase tracking-[0.44em] text-noir">
                CROWN
              </span>
              <span className="mt-[2px] font-serif text-[0.5rem] uppercase tracking-[0.56em] text-or">
                AGENCY
              </span>
            </div>
          </div>

          {/* Color palette */}
          <div className="px-5 py-4">
            <div className="mb-2 font-sans text-[0.42rem] uppercase tracking-[0.2em] text-or">
              — Palette
            </div>
            <div className="grid grid-cols-4 gap-[4px]">
              {palette.map((c) => (
                <div
                  key={c.hex}
                  className="relative aspect-square overflow-hidden border border-noir/10"
                  style={{ background: c.bg }}
                >
                  <div className="absolute inset-x-1 bottom-1">
                    <div
                      className="font-sans text-[0.36rem] uppercase tracking-[0.08em]"
                      style={{ color: c.text, opacity: 0.9 }}
                    >
                      {c.name}
                    </div>
                    <div
                      className="font-mono text-[0.34rem]"
                      style={{ color: c.text, opacity: 0.7 }}
                    >
                      {c.hex}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="grid grid-cols-2 gap-[1px] bg-noir/5 px-5 pb-5">
            <div className="bg-blanc p-3">
              <div className="font-sans text-[0.36rem] uppercase tracking-[0.18em] text-or">
                Display
              </div>
              <div className="mt-[4px] font-serif text-[0.85rem] leading-none text-noir">
                Aa
              </div>
              <div className="mt-[4px] font-sans text-[0.38rem] uppercase tracking-[0.1em] text-noir/50">
                Times New Roman · Regular
              </div>
            </div>
            <div className="bg-blanc p-3">
              <div className="font-sans text-[0.36rem] uppercase tracking-[0.18em] text-or">
                Body
              </div>
              <div className="mt-[4px] font-sans text-[0.85rem] font-normal leading-none text-noir">
                Aa
              </div>
              <div className="mt-[4px] font-sans text-[0.38rem] uppercase tracking-[0.1em] text-noir/50">
                Helvetica Neue · 10–12pt
              </div>
            </div>
          </div>

          {/* Logo variants */}
          <div className="flex items-center justify-between border-t border-noir/5 bg-fond/60 px-5 py-3">
            <span className="font-sans text-[0.42rem] uppercase tracking-[0.18em] text-noir/45">
              Logo variants
            </span>
            <div className="flex gap-[6px]">
              {["stacked", "mark", "wordmark", "mono"].map((v) => (
                <span
                  key={v}
                  className="border border-noir/10 bg-blanc px-[6px] py-[2px] font-sans text-[0.36rem] uppercase tracking-[0.1em] text-noir/60"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div
        className="relative h-[6px] rounded-b-[2px]"
        style={{ background: "linear-gradient(to bottom, #d0d0d0, #b8b8b8)" }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[3px] w-8 -translate-x-1/2 -translate-y-1/2 rounded-[2px]"
          style={{ background: "#c0c0c0" }}
        />
      </div>
      {/* Base */}
      <div
        className="relative -ml-[5%] h-[10px] w-[110%] rounded-b-md"
        style={{ background: "linear-gradient(to bottom, #c8c8c8, #b0b0b0)" }}
      >
        <div className="absolute inset-x-[5%] bottom-0 h-[3px] rounded-b-[4px] bg-noir/10" />
      </div>
    </div>
  );
}
