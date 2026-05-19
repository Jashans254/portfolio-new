// ============================================================
// ANIMATION PRESETS
// Centralized Framer Motion configs. Import and reuse anywhere.
// Swap animation styles globally from here.
// ============================================================

import type { Variants, Transition } from "framer-motion";

// --- Base Transitions ---
export const transitions = {
  smooth: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } as Transition,
  spring: { type: "spring", stiffness: 300, damping: 30 } as Transition,
  bouncy: { type: "spring", stiffness: 400, damping: 20 } as Transition,
  slow: { duration: 1, ease: "easeOut" } as Transition,
  fast: { duration: 0.3, ease: "easeOut" } as Transition,
} as const;

// --- Fade Variants ---
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.smooth },
};

// --- Scale Variants ---
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.spring,
  },
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.97 },
  transition: transitions.spring,
};

// --- Stagger Container ---
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// --- Slide Variants ---
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...transitions.smooth, duration: 0.7 },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...transitions.smooth, duration: 0.7 },
  },
};

// --- Special Effects ---
export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 0px rgba(0, 212, 255, 0)",
      "0 0 20px rgba(0, 212, 255, 0.4)",
      "0 0 0px rgba(0, 212, 255, 0)",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export const floatAnimation = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export const rotateLoop = {
  animate: {
    rotate: 360,
    transition: { duration: 20, repeat: Infinity, ease: "linear" },
  },
};

// --- Viewport settings (used with whileInView) ---
export const viewportOnce = { once: true, margin: "-80px" };
