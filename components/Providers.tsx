"use client";

/**
 * components/Providers.tsx — framer-motion configuration.
 * PROMPT.md §6: reducedMotion="user" makes all transform animations
 * (reveals, lifts, slides) instant for prefers-reduced-motion users,
 * while keeping essential opacity fades.
 *
 * LazyMotion + `m` components (strict) ship only the domAnimation feature
 * set, keeping the initial bundle lean (§9 bundle budget).
 */

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
