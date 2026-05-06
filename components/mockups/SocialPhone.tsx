export function SocialPhone() {
  const grid = [
    { hot: false },
    { hot: true },
    { hot: false },
    { hot: false },
    { hot: false },
    { hot: true },
    { hot: false },
    { hot: false },
    { hot: false },
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
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-noir/5 bg-blanc px-3 py-[6px]">
            <span className="font-sans text-[0.42rem] font-medium text-noir">
              @crown.agency
            </span>
            <span className="font-sans text-[0.48rem] text-noir/60">···</span>
          </div>

          {/* Profile header */}
          <div className="px-3 py-[8px]">
            <div className="flex items-center gap-[8px]">
              <div
                className="h-[30px] w-[30px] rounded-full border border-or/30"
                style={{
                  background:
                    "linear-gradient(135deg, #1A1A1A 0%, #C9A84C 140%)",
                }}
              />
              <div className="grid flex-1 grid-cols-3 gap-1 text-center">
                {[
                  ["128", "Posts"],
                  ["42K", "Abonnés"],
                  ["320", "Suit"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-serif text-[0.55rem] leading-none text-noir">
                      {v}
                    </div>
                    <div className="mt-[1px] font-sans text-[0.3rem] uppercase tracking-[0.08em] text-noir/45">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[6px] font-serif text-[0.48rem] leading-tight text-noir">
              Crown Agency ✦
            </div>
            <div className="font-sans text-[0.38rem] leading-[1.3] text-noir/55">
              Stratégie · Acquisition · Conversion
              <br />
              crownagency.be
            </div>
            <div className="mt-[6px] grid grid-cols-2 gap-[4px]">
              <span className="bg-or py-[4px] text-center font-sans text-[0.38rem] font-medium uppercase tracking-[0.1em] text-blanc">
                Contacter
              </span>
              <span className="border border-noir/15 py-[4px] text-center font-sans text-[0.38rem] uppercase tracking-[0.1em] text-noir/65">
                Partager
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-around border-t border-noir/5 bg-blanc py-[4px]">
            {["◱", "◫", "◈"].map((i, idx) => (
              <span
                key={idx}
                className="text-[0.62rem]"
                style={{ color: idx === 0 ? "#C9A84C" : "#ccc" }}
              >
                {i}
              </span>
            ))}
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-3 gap-[1px] bg-noir/5">
            {grid.map((p, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden"
                style={{
                  background: p.hot
                    ? "linear-gradient(135deg, #1A1A1A 0%, #2a2a2a 100%)"
                    : "#f5f0e3",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: p.hot
                      ? "repeating-linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.18) 2px, transparent 2px, transparent 5px)"
                      : "repeating-linear-gradient(45deg, rgba(26,26,26,0.05), rgba(26,26,26,0.05) 1px, transparent 1px, transparent 4px)",
                  }}
                />
                {p.hot ? (
                  <span className="absolute left-[2px] top-[2px] font-mono text-[0.3rem] text-or">
                    ★
                  </span>
                ) : null}
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
