"use client";

import { useEffect, useState } from "react";
import { Sparkline } from "@/components/ui/Sparkline";

const rows: [string, string][] = [
  ["Impressions", "124K"],
  ["Clics", "8,240"],
  ["Conv.", "1,847"],
];

const chartData = [55, 62, 48, 70, 65, 82, 78, 90, 85, 95];

export function PhoneMockup() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTab((a) => (a + 1) % rows.length), 2000);
    return () => clearInterval(t);
  }, []);

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
        <div className="min-h-[240px] overflow-hidden rounded-[14px] bg-blanc">
          <div className="bg-[#f8f8f8] px-[10px] pb-[6px] pt-[10px]">
            <div className="mb-[2px] font-sans text-[0.5rem] tracking-[0.06em] text-[#aaa]">
              APERÇU CAMPAGNE
            </div>
            <div className="flex items-center justify-between">
              <div className="font-serif text-[0.9rem] text-noir">+128%</div>
              <div className="rounded-[2px] bg-[#4caf50]/10 px-[6px] py-[2px] font-sans text-[0.45rem] text-[#4caf50]">
                ↑ ROI
              </div>
            </div>
          </div>
          <div className="px-[10px] py-2">
            <Sparkline data={chartData} height={40} width={140} />
            <div className="mt-2 flex flex-col gap-[5px]">
              {rows.map(([k, v], i) => (
                <div
                  key={k}
                  className="flex items-center justify-between px-[6px] py-[5px] transition-all duration-400"
                  style={{
                    background:
                      i === activeTab ? "rgba(201,168,76,0.08)" : "transparent",
                    borderLeft:
                      i === activeTab
                        ? "2px solid #C9A84C"
                        : "2px solid transparent",
                  }}
                >
                  <span className="font-sans text-[0.52rem] text-[#999]">{k}</span>
                  <span className="font-sans text-[0.6rem] font-medium text-noir">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom nav */}
          <div className="flex justify-around border-t border-noir/5 pb-1 pt-2">
            {["◈", "◎", "◉"].map((icon, i) => (
              <div
                key={i}
                className="text-[0.7rem]"
                style={{ color: i === 0 ? "#C9A84C" : "#ccc" }}
              >
                {icon}
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
