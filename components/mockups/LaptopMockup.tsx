export function LaptopMockup() {
  const barData = [42, 58, 45, 72, 68, 85, 91, 78, 95, 88, 100, 94];
  const metrics: [string, string, string][] = [
    ["Leads", "2,847", "+42%"],
    ["Conv.", "18.4%", "+7%"],
    ["ROI", "€48K", "+128%"],
  ];

  return (
    <div
      className="relative w-[480px] max-w-full"
      style={{
        animation: "floatY 6s ease-in-out infinite",
        filter: "drop-shadow(0 32px 64px rgba(26,26,26,0.14))",
      }}
    >
      {/* Screen */}
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
              crownagency.be/dashboard
            </span>
          </div>
        </div>

        {/* Dashboard */}
        <div className="min-h-[240px] bg-[#fafafa] p-4">
          <div className="mb-[14px] flex items-center justify-between">
            <div>
              <div className="mb-[2px] font-sans text-[0.6rem] tracking-[0.06em] text-[#aaa]">
                PERFORMANCE GLOBALE
              </div>
              <div className="font-serif text-[1.2rem] font-normal text-noir">
                +320%
              </div>
            </div>
            <div className="border border-or/30 bg-or/[0.12] px-[10px] py-1 font-sans text-[0.55rem] tracking-[0.08em] text-or">
              CE MOIS
            </div>
          </div>

          <div className="mb-[10px] rounded border border-noir/5 bg-blanc p-3">
            <div className="mb-2 font-sans text-[0.55rem] tracking-[0.06em] text-[#bbb]">
              CROISSANCE MENSUELLE
            </div>
            <div className="flex h-[52px] items-end gap-1">
              {barData.map((v, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-[2px]"
                  style={{
                    height: `${v}%`,
                    background:
                      i === barData.length - 1
                        ? "#C9A84C"
                        : `rgba(201,168,76,${0.2 + v / 200})`,
                    transition: "height 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[6px]">
            {metrics.map(([l, v, d]) => (
              <div
                key={l}
                className="rounded-[3px] border border-noir/5 bg-blanc px-[10px] py-2"
              >
                <div className="mb-[3px] font-sans text-[0.48rem] tracking-[0.06em] text-[#bbb]">
                  {l}
                </div>
                <div className="font-serif text-[0.8rem] font-medium text-noir">
                  {v}
                </div>
                <div className="mt-[1px] font-sans text-[0.5rem] text-[#4caf50]">
                  {d}
                </div>
              </div>
            ))}
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
