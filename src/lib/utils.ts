// ============================================================
// UTILS — General helpers
// ============================================================

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind + clsx classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Scroll to section by id */
export function scrollToSection(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Format date range string */
export function formatDateRange(start: string, end: string | "Present") {
  return `${start} – ${end}`;
}
