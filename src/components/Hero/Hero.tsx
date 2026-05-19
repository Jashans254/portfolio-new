"use client";

// ============================================================
// Hero Section — Animated intro with typing effect + CTAs
// ============================================================

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio.config";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import GlowButton from "@/components/Shared/GlowButton";
import {
  staggerContainer,
  fadeInUp,
  fadeIn,
  floatAnimation,
  viewportOnce,
} from "@/lib/animations";
import { Mail, Download, ArrowRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const SOCIALS = [
  { label: "GitHub", href: portfolioConfig.socials.github, icon: <FiGithub size={18} /> },
  { label: "LinkedIn", href: portfolioConfig.socials.linkedin, icon: <FiLinkedin size={18} /> },
  { label: "Email", href: portfolioConfig.socials.email, icon: <Mail size={18} /> },
];

export default function Hero() {
  const { displayed, isDeleting } = useTypingEffect(portfolioConfig.typingStrings);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-secondary)] opacity-[0.05] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeInUp}
            className="font-mono text-sm text-[var(--color-accent)] tracking-[0.25em] uppercase mb-6"
          >
            &gt; Hello, world. I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold font-display leading-none mb-4 text-[var(--color-text-primary)]"
          >
            Jashanpreet
            <br />
            <span className="text-gradient-cyan">Singh.</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 mb-6 h-10"
          >
            <span className="font-mono text-xl md:text-2xl text-[var(--color-text-secondary)]">
              {displayed}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-0.5 h-6 bg-[var(--color-accent)]"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-xl"
          >
            Final-year CSE student building{" "}
            <span className="text-[var(--color-accent)]">scalable distributed systems</span>,{" "}
            <span className="text-[var(--color-secondary)]">AI agent pipelines</span>, and{" "}
            <span className="text-[var(--color-tertiary)]">real-time applications</span> — from
            enterprise localization engines to online judge infrastructures.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-14">
            <GlowButton href="#projects" variant="primary" icon={<ArrowRight size={16} />}>
              View Projects
            </GlowButton>
            <GlowButton
              href={portfolioConfig.author.resumeUrl}
              target="_blank"
              download
              variant="outline"
              icon={<Download size={16} />}
            >
              Download Resume
            </GlowButton>
            <GlowButton href="#contact" variant="ghost">
              Get in Touch
            </GlowButton>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 border border-[var(--color-border)] hover:border-[var(--color-accent)] rounded px-3 py-1.5"
              >
                {s.icon} {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating badge */}
      <motion.div
        {...floatAnimation}
        className="absolute right-8 bottom-24 hidden lg:block"
      >
        <div className="card-glass rounded-xl p-4 w-48 glow-border">
          <p className="font-mono text-xs text-[var(--color-text-muted)] mb-1">// current status</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-display text-[var(--color-text-primary)]">Open to roles</span>
          </div>
          <p className="font-mono text-xs text-[var(--color-accent)] mt-2">2026 Graduate</p>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-[var(--color-border)] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[var(--color-accent)] opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
