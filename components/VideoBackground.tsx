"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  className?: string;
  /** 0 → fully visible, 1 → fully hidden. Default 0.65 keeps text readable on white. */
  overlayOpacity?: number;
}

export function VideoBackground({
  src = "/hero.mp4",
  poster,
  className,
  overlayOpacity = 0.7,
}: VideoBackgroundProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {
      /* browsers may block autoplay — fallback background still shows */
    });
  }, []);

  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 overflow-hidden bg-fond", className)}
    >
      {/* Subtle dot-grid fallback always visible underneath */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26,26,26,0.25) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onCanPlay={() => setLoaded(true)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
      {/* White wash for SaaS-light look */}
      <div
        className="absolute inset-0 bg-blanc"
        style={{ opacity: overlayOpacity }}
      />
      {/* Top & bottom fade into white for seamless section blending */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blanc to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blanc to-transparent" />
    </div>
  );
}
