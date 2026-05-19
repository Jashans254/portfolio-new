"use client";

// ============================================================
// Skills Section — Categorized interactive skill visualization
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SectionHeading from "@/components/Shared/SectionHeading";
import SkillBadge from "@/components/Shared/SkillBadge";
import { skillCategories } from "@/data/skills";
import { staggerContainerFast, scaleIn, viewportOnce } from "@/lib/animations";

const levelColors = {
  expert: "bg-emerald-400",
  advanced: "bg-[var(--color-accent)]",
  intermediate: "bg-[var(--color-secondary)]",
  learning: "bg-amber-400",
};

const levelWidths = {
  expert: "w-full",
  advanced: "w-4/5",
  intermediate: "w-3/5",
  learning: "w-2/5",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="02 / Skills"
        title="Technical Arsenal"
        subtitle="Tools and technologies I build with, organized by domain."
      />

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-display text-sm font-medium
              transition-all duration-200 border
              ${
                activeCategory === cat.id
                  ? "bg-[var(--color-accent-dim)] border-[var(--color-accent)] text-[var(--color-accent)]"
                  : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
              }
            `}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="card-glass glow-border rounded-2xl p-8"
        >
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            animate="visible"
            className="grid gap-3"
          >
            {active.skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={scaleIn}
                className="flex items-center gap-4 group"
              >
                <span className="font-display text-sm text-[var(--color-text-primary)] w-40 shrink-0">
                  {skill.name}
                </span>
                {/* Level bar */}
                <div className="flex-1 h-1.5 rounded-full bg-[var(--color-bg)] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full ${levelColors[skill.level]} ${levelWidths[skill.level]}`}
                  />
                </div>
                <span className="font-mono text-xs text-[var(--color-text-muted)] w-24 text-right capitalize">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Badge cloud */}
          <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
            <p className="font-mono text-xs text-[var(--color-text-muted)] mb-4">// quick reference</p>
            <div className="flex flex-wrap gap-2">
              {active.skills.map((s) => (
                <SkillBadge
                  key={s.name}
                  name={s.name}
                  glowing={s.level === "expert"}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
