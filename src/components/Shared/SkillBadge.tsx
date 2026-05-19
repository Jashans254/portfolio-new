"use client";

// ============================================================
// SkillBadge — Reusable skill tag/badge
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
  size?: "sm" | "md";
  glowing?: boolean;
}

export default function SkillBadge({
  name,
  className,
  size = "md",
  glowing = false,
}: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -2 }}
      className={cn(
        "inline-block font-mono rounded-md border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] transition-all duration-200",
        "hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-dim)]",
        size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm",
        glowing && "border-[var(--color-accent)] text-[var(--color-accent)] shadow-[0_0_10px_rgba(0,212,255,0.2)]",
        className
      )}
    >
      {name}
    </motion.span>
  );
}
