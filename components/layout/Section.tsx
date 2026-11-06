"use client";

/**
 * components/layout/Section.tsx — shared section shell.
 * PROMPT.md §3.3 rhythm: even sections get a full-width bg-surface panel
 * with a 2px accent/40 top bar; odd sections stay bg-void with borders.
 * Vertical padding: mobile 48px → tablet 64px → desktop 96/128px.
 */

import type { ReactNode } from "react";
import { m } from "framer-motion";
import { sectionReveal } from "@/lib/motion";

interface SectionProps {
  id: string;
  index: number; // 1-based position in the page (§3.3 even/odd rhythm)
  kicker: string; // mono label, e.g. "02 / ABOUT"
  title: string;
  children: ReactNode;
}

export default function Section({ id, index, kicker, title, children }: SectionProps) {
  const even = index % 2 === 0;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative border-t border-edge scroll-mt-20 md:scroll-mt-24 ${
        even ? "bg-surface" : "bg-void"
      }`}
    >
      {even && <div aria-hidden="true" className="h-0.5 w-full bg-accent/40" />}

      <div className="container-editorial py-12 md:py-16 lg:py-24 xl:py-32">
        <m.header {...sectionReveal} className="mb-8 md:mb-12">
          <p className="mb-3 font-mono text-caption font-medium uppercase text-ink-tertiary">
            {kicker}
          </p>
          <h2
            id={`${id}-title`}
            className="text-h3 font-semibold text-ink md:text-h2"
          >
            {title}
          </h2>
        </m.header>

        {children}
      </div>
    </section>
  );
}
