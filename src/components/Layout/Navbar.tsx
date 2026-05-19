"use client";

// ============================================================
// Navbar — Fixed top nav with active section tracking
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio.config";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import GlowButton from "@/components/Shared/GlowButton";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = portfolioConfig.nav.map((n) => n.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);
  const progress = useScrollProgress();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      {portfolioConfig.features.enableScrollProgress && (
        <motion.div
          className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] z-[100]"
          style={{ width: `${progress * 100}%` }}
        />
      )}

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]"
            : "py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-[var(--color-accent)] font-semibold text-lg tracking-tight"
          >
            js<span className="text-[var(--color-text-secondary)]">.</span>dev
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {portfolioConfig.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-display font-medium rounded-lg transition-colors duration-200",
                      isActive
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-[var(--color-accent-dim)] rounded-lg"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <GlowButton
              href={portfolioConfig.author.resumeUrl}
              target="_blank"
              variant="outline"
              className="text-xs py-2 px-4"
            >
              Resume
            </GlowButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  mobileOpen
                    ? i === 1
                      ? { opacity: 0, scaleX: 0 }
                      : i === 0
                      ? { rotate: 45, y: 8 }
                      : { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                className="block h-0.5 w-6 bg-[var(--color-text-primary)] origin-center"
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] px-6 py-4"
            >
              {portfolioConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] font-display transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
