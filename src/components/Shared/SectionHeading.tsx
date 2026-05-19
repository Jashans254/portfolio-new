"use client";

// ============================================================
// SectionHeading — Consistent heading style across sections
// ============================================================

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <p className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-[0.2em] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold font-display text-[var(--color-text-primary)] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl">
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div
        className={`mt-5 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent w-24 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
