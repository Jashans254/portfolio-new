"use client";

// ============================================================
// SectionWrapper — Reusable section container
// Handles: scroll ID, padding, max-width, fade-in animation
// ============================================================

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className,
  fullWidth = false,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative", !noPadding && "section-padding", className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className={cn("mx-auto px-6", !fullWidth && "max-w-6xl")}
      >
        {children}
      </motion.div>
    </section>
  );
}
