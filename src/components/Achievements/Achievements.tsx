"use client";

// ============================================================
// Achievements Section — Cards grid
// ============================================================

import { motion } from "framer-motion";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SectionHeading from "@/components/Shared/SectionHeading";
import { achievements } from "@/data/achievements";
import { staggerContainer, scaleIn, viewportOnce } from "@/lib/animations";

const categoryColor: Record<string, string> = {
  coding: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  hackathon: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  leadership: "text-[var(--color-secondary)] bg-[var(--color-secondary-dim)] border-[var(--color-secondary)]/20",
  certification: "text-[var(--color-accent)] bg-[var(--color-accent-dim)] border-[var(--color-accent)]/20",
  recognition: "text-pink-400 bg-pink-400/10 border-pink-400/20",
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading
        eyebrow="05 / Achievements"
        title="Recognition & Milestones"
        subtitle="Highlights from competitions, leadership roles, and professional recognition."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {achievements.map((a) => (
          <motion.div
            key={a.id}
            variants={scaleIn}
            whileHover={{ y: -6, scale: 1.02 }}
            className="card-glass glow-border rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <span className="text-3xl">{a.icon}</span>
              <span
                className={`font-mono text-xs px-2.5 py-1 rounded-full border capitalize ${categoryColor[a.category]}`}
              >
                {a.category}
              </span>
            </div>

            {a.metric && (
              <p className="font-mono text-2xl font-bold text-gradient-cyan">{a.metric}</p>
            )}

            <h3 className="font-display font-semibold text-[var(--color-text-primary)] leading-snug">
              {a.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
              {a.description}
            </p>

            {a.link && (
              <a
                href={a.link}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-[var(--color-accent)] hover:underline mt-auto"
              >
                View →
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
