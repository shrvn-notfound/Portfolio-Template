/**
 * lib/motion.ts — reusable framer-motion presets.
 * PROMPT.md §6: every animation serves comprehension; no gratuitous motion.
 * `MotionConfig reducedMotion="user"` (app/Providers) neutralizes transforms
 * for prefers-reduced-motion users; opacity fades remain.
 */

export const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

/** Section reveal on scroll — 400ms, no bounce (§6) */
export const sectionReveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.4, ease: EASE_EDITORIAL },
} as const;

/** Staggered child reveal inside a section */
export const staggerChildren = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-80px" },
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  },
} as const;

export const childFadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_EDITORIAL },
  },
} as const;

/** Project row expand — 200ms progressive disclosure (§4.4, §6) */
export const rowExpand = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.2, ease: EASE_EDITORIAL },
} as const;
