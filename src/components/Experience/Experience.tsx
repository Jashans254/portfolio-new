"use client";

// ============================================================
// Experience Section — Vertical timeline with expandable cards
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SectionHeading from "@/components/Shared/SectionHeading";
import SkillBadge from "@/components/Shared/SkillBadge";
import { experiences } from "@/data/experience";
import { staggerContainer, fadeInLeft, viewportOnce, fadeInUp } from "@/lib/animations";
import { formatDateRange } from "@/lib/utils";

export default function Experience() {
  const [expanded, setExpanded] = useState<string | null>(experiences[0].id);

  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="03 / Experience"
        title="Where I've Worked"
        subtitle="Professional experience across AI, full-stack, and enterprise engineering."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-secondary)] to-transparent" />

        <div className="space-y-6 pl-16">
          {experiences.map((exp, i) => {
            const isOpen = expanded === exp.id;
            return (
              <motion.div key={exp.id} variants={fadeInLeft}>
                {/* Timeline dot */}
                <div className="absolute left-4 w-4 h-4 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] -translate-x-1/2 mt-6" />

                <div
                  className={`card-glass rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer glow-border`}
                  onClick={() => setExpanded(isOpen ? null : exp.id)}
                >
                  {/* Header */}
                  <div className="p-6 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="font-display font-bold text-lg text-[var(--color-text-primary)]">
                          {exp.role}
                        </h3>
                        {exp.highlight && (
                          <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                            ★ {exp.highlight}
                          </span>
                        )}
                      </div>
                      <p className="text-[var(--color-accent)] font-display font-semibold text-sm">
                        {exp.company}
                      </p>
                      <p className="font-mono text-xs text-[var(--color-text-muted)] mt-1">
                        {formatDateRange(exp.startDate, exp.endDate)} · {exp.location}
                      </p>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="text-[var(--color-text-muted)] text-xl mt-1 shrink-0"
                    >
                      +
                    </motion.span>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 border-t border-[var(--color-border)]">
                          <p className="text-[var(--color-text-secondary)] text-sm mt-4 mb-4">
                            {exp.description}
                          </p>

                          <ul className="space-y-2 mb-5">
                            {exp.bullets.map((b, bi) => (
                              <li
                                key={bi}
                                className="flex gap-3 text-sm text-[var(--color-text-secondary)]"
                              >
                                <span className="text-[var(--color-accent)] shrink-0 mt-0.5">▸</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((t) => (
                              <SkillBadge key={t} name={t} size="sm" />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
