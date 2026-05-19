"use client";

// ============================================================
// GlowButton — Reusable CTA button with glow effect
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  download?: boolean;
  target?: "_blank" | "_self";
  icon?: React.ReactNode;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-hover)] shadow-[0_0_20px_rgba(0,212,255,0.3)]",
  secondary:
    "bg-[var(--color-secondary)] text-white hover:bg-violet-500 shadow-[0_0_20px_rgba(124,58,237,0.3)]",
  ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-dim)]",
  outline:
    "bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent-dim)]",
};

export default function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  download,
  target,
  icon,
  disabled,
}: GlowButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-sm transition-all duration-200 cursor-pointer";

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variantStyles[variant], disabled && "opacity-50 cursor-not-allowed", className)}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
