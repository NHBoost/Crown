export function BrandPhone() {
  const swatches: { hex: string; bg: string; text: string }[] = [
    { hex: "#1A1A1A", bg: "#1A1A1A", text: "#fff" },
    { hex: "#C9A84C", bg: "#C9A84C", text: "#1A1A1A" },
    { hex: "#F5F5F5", bg: "#F5F5F5", text: "#1A1A1A" },
  ];

  return (
    <div
      className="absolute -right-5 bottom-10 z-[2] w-[160px]"
      style={{
        animation: "floatY 6s ease-in-out 1.5s infinite",
        filter: "drop-shadow(0 20px 40px rgba(26,26,26,0.18))",
      }}
    >
      <div className="rounded-[22px] border border-blanc/10 bg-noir px-[6px] py-2">
        {/* Notch */}
        <div className="relative mx-auto mb-[6px] h-[6px] w-10 rounded-[3px] bg-[#111]">
          <div className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#222]" />
        </div>

        {/* Screen */}
        <div className="min-h-[260px] overflow-hidden rounded-[14px] bg-blanc">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-noir/5 bg-fond px-3 py-[6px]">
            <span className="font-sans text-[0.36rem] uppercase tracking-[0.18em] text-noir/50">
              Brand · v2.1
            </span>
            <span className="font-sans text-[0.42rem] text-or">★</span>
          </div>

          {/* Large wordmark */}
          <div className="flex flex-col items-center justify-center bg-fond/60 py-5">
            <span className="font-serif text-[0.65rem] uppercase tracking-[0.44em] text-noir">
              CROWN
            </span>
            <span className="mt-[1px] font-serif text-[0.3rem] uppercase tracking-[0.56em] text-or">
              AGENCY
            </span>
          </div>

          {/* Palette strip */}
          <div className="px-3 py-3">
            <div className="mb-[4px] font-sans text-[0.36rem] uppercase tracking-[0.2em] text-or">
              Palette
            </div>
            <div className="grid grid-cols-3 gap-[3px]">
              {swatches.map((s) => (
                <div
                  key={s.hex}
                  className="relative aspect-square border border-noir/10"
                  style={{ background: s.bg }}
                >
                  <div
                    className="absolute bottom-[2px] left-[3px] font-mono text-[0.3rem]"
                    style={{ color: s.text, opacity: 0.8 }}
                  >
                    {s.hex}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Type specimen */}
          <div className="mx-3 mb-3 border border-noir/10 bg-blanc p-[8px]">
            <div className="font-sans text-[0.3rem] uppercase tracking-[0.18em] text-or">
              Display
            </div>
            <div className="mt-[2px] font-serif text-[0.85rem] leading-none text-noir">
              Aa · Bb
            </div>
            <div className="mt-[2px] font-sans text-[0.3rem] uppercase tracking-[0.1em] text-noir/50">
              Times New Roman
            </div>
          </div>

          {/* Variant chips */}
          <div className="flex justify-around border-t border-noir/5 bg-fond/60 px-2 py-2">
            {["◆", "●", "◼"].map((s, i) => (
              <div
                key={i}
                className="flex h-[16px] w-[16px] items-center justify-center border border-noir/10 bg-blanc text-[0.5rem]"
                style={{ color: i === 0 ? "#C9A84C" : "#1A1A1A" }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div className="mx-auto mt-[6px] h-[3px] w-10 rounded-[2px] bg-blanc/20" />
      </div>
    </div>
  );
}
