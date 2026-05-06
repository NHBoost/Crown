"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const GOLD: [number, number, number, number] = [0.788, 0.659, 0.298, 1];

const easeIn = { x: [0.42], y: [1] };
const easeOut = { x: [0.58], y: [0] };
const easeInXYZ = { x: [0.42, 0.42, 0.42], y: [1, 1, 1] };
const easeOutXYZ = { x: [0.58, 0.58, 0.58], y: [0, 0, 0] };

const baseTransform = (overrides: Record<string, unknown> = {}) => ({
  o: { a: 0, k: 100 },
  r: { a: 0, k: 0 },
  p: { a: 0, k: [100, 100, 0] },
  a: { a: 0, k: [0, 0, 0] },
  s: { a: 0, k: [100, 100, 100] },
  ...overrides,
});

const ring = (ind: number, startFrame: number, opEnd: number) => ({
  ddd: 0,
  ind,
  ty: 4,
  nm: `Ring ${ind}`,
  sr: 1,
  ks: {
    o: {
      a: 1,
      k: [
        { t: startFrame, s: [0], i: easeIn, o: easeOut },
        { t: startFrame + 12, s: [70], i: easeIn, o: easeOut },
        { t: startFrame + 90, s: [0] },
      ],
    },
    r: { a: 0, k: 0 },
    p: { a: 0, k: [100, 100, 0] },
    a: { a: 0, k: [0, 0, 0] },
    s: {
      a: 1,
      k: [
        {
          t: startFrame,
          s: [25, 25, 100],
          i: easeInXYZ,
          o: easeOutXYZ,
        },
        { t: startFrame + 90, s: [220, 220, 100] },
      ],
    },
  },
  ao: 0,
  shapes: [
    {
      ty: "gr",
      it: [
        {
          ty: "el",
          d: 1,
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [60, 60] },
          nm: "Ellipse",
        },
        {
          ty: "st",
          c: { a: 0, k: GOLD },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 1.6 },
          lc: 2,
          lj: 2,
          ml: 4,
          bm: 0,
          nm: "Stroke",
        },
        {
          ty: "tr",
          p: { a: 0, k: [0, 0] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
          r: { a: 0, k: 0 },
          o: { a: 0, k: 100 },
          sk: { a: 0, k: 0 },
          sa: { a: 0, k: 0 },
        },
      ],
      nm: "Group",
      bm: 0,
    },
  ],
  ip: 0,
  op: opEnd,
  st: 0,
  bm: 0,
});

// Custom Lottie data — a pulsing digital signal
const digitalPulseData = {
  v: "5.9.0",
  fr: 60,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: "Digital Pulse",
  ddd: 0,
  assets: [],
  layers: [
    // Core gold dot — subtle breathing
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Core",
      sr: 1,
      ks: {
        ...baseTransform({
          s: {
            a: 1,
            k: [
              {
                t: 0,
                s: [100, 100, 100],
                i: easeInXYZ,
                o: easeOutXYZ,
              },
              {
                t: 60,
                s: [120, 120, 100],
                i: easeInXYZ,
                o: easeOutXYZ,
              },
              { t: 120, s: [100, 100, 100] },
            ],
          },
        }),
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              d: 1,
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [16, 16] },
              nm: "Ellipse",
            },
            {
              ty: "fl",
              c: { a: 0, k: GOLD },
              o: { a: 0, k: 100 },
              r: 1,
              bm: 0,
              nm: "Fill",
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
              sk: { a: 0, k: 0 },
              sa: { a: 0, k: 0 },
            },
          ],
          nm: "Group",
          bm: 0,
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
      bm: 0,
    },
    // Ring 1 starts at frame 0
    ring(2, 0, 120),
    // Ring 2 starts at frame 60 (mid-cycle for overlap)
    ring(3, 60, 180),
  ],
};

interface DigitalPulseProps {
  className?: string;
}

export function DigitalPulse({ className }: DigitalPulseProps) {
  return (
    <div className={className} aria-hidden>
      <Lottie animationData={digitalPulseData} loop autoplay />
    </div>
  );
}
