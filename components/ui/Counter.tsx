"use client";

import { useEffect, useState } from "react";
import { useVisible } from "@/lib/useVisible";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ target, suffix = "", duration = 1800 }: CounterProps) {
  const [ref, visible] = useVisible<HTMLSpanElement>(0.3);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(ease * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setVal(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
