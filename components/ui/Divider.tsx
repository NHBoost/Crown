"use client";

import { motion } from "framer-motion";
import { drawLine, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface DividerProps {
  className?: string;
  tone?: "or" | "noir" | "blanc";
}

const tones = {
  or: "bg-or",
  noir: "bg-noir/20",
  blanc: "bg-blanc/20",
} as const;

export function Divider({ className, tone = "or" }: DividerProps) {
  return (
    <motion.span
      aria-hidden
      variants={drawLine}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "block h-px w-full origin-left",
        tones[tone],
        className
      )}
    />
  );
}
