"use client";

// ============================================================
// About Section — Personal narrative + stats
// ============================================================

import { motion } from "framer-motion";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SectionHeading from "@/components/Shared/SectionHeading";
import { portfolioConfig } from "@/config/portfolio.config";
import { staggerContainer, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";

const stats = [
  { value: "8.5", label: "CGPA / 10", icon: "🎓" },
  { value: "3", label: "Internships", icon: "💼" },
  { value: "250+", label: "LeetCode Problems", icon: "🧩" },
  { value: "Top 5", label: "AgirLabs Residency", icon: "🏆" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <SectionHeading
            eyebrow="01 / About"
            title="Engineer by logic, builder by passion."
            subtitle=""
          />

          <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              I'm a final-year Computer Science student at Punjabi University, Patiala, with an
              8.5 CGPA and hands-on experience building{" "}
              <span className="text-[var(--color-text-primary)]">production-grade systems</span> across
              three internships.
            </p>
            <p>
              I've engineered distributed code execution pipelines, AI agent orchestration
              systems, and enterprise-scale XML transformation pipelines. I obsess over
              <span className="text-[var(--color-accent)]"> reliability, observability,</span> and{" "}
              <span className="text-[var(--color-accent)]">clean architecture</span>.
            </p>
            <p>
              When I'm not writing code, I'm solving DSA problems, exploring the intersection of
              AI and Web3, or contributing to developer communities as a{" "}
              <span className="text-[var(--color-secondary)]">Google Cloud Lead</span> and{" "}
              <span className="text-[var(--color-secondary)]">HackQuest Advocate</span>.
            </p>
          </div>

          {/* Education card */}
          <div className="mt-8 p-4 card-glass rounded-xl glow-border">
            <p className="font-mono text-xs text-[var(--color-text-muted)] mb-2">// education</p>
            <p className="font-display font-semibold text-[var(--color-text-primary)]">
              B.Tech Computer Science & Engineering
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Punjabi University, Patiala · 2022–2026
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-mono text-sm text-[var(--color-accent)] font-semibold">8.5 / 10 CGPA</span>
              <span className="text-[var(--color-text-muted)]">·</span>
              <span className="font-mono text-xs text-[var(--color-text-muted)]">Expected 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInRight}
              whileHover={{ scale: 1.03, y: -4 }}
              className="card-glass glow-border rounded-2xl p-6 flex flex-col gap-2 transition-all duration-200 cursor-default"
            >
              <span className="text-2xl">{stat.icon}</span>
              <p className="text-3xl font-bold font-display text-gradient-cyan">{stat.value}</p>
              <p className="text-sm text-[var(--color-text-secondary)] font-display">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
