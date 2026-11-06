"use client";

/**
 * components/sections/Education.tsx — PROMPT.md §4.6.
 * Horizontal timeline on desktop (square accent nodes on a border line);
 * vertical single line on mobile.
 */

import { m } from "framer-motion";
import Section from "@/components/layout/Section";
import { education } from "@/data/content";
import { childFadeUp, staggerChildren } from "@/lib/motion";

export default function Education() {
  return (
    <Section id="education" index={5} kicker="05 / Education" title="Education">
      {/* Desktop: horizontal timeline */}
      <m.ol
        {...staggerChildren}
        className="relative hidden gap-12 md:flex md:items-start"
      >
        {/* the timeline rail */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-[52px] h-px bg-edge"
        />
        {education.map((entry) => (
          <m.li key={entry.degree} variants={childFadeUp} className="relative flex-1 pt-0">
            <p className="mb-4 font-mono text-caption text-ink-secondary">
              {entry.period}
            </p>
            {/* node: 4px accent square on the rail */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-[50px] h-1 w-1 bg-accent"
            />
            <div className="pt-6">
              <h3 className="text-body font-semibold text-ink">{entry.degree}</h3>
              <p className="mt-1 text-body-sm text-ink-secondary">
                {entry.institution}
              </p>
              <p className="font-mono text-caption text-ink-tertiary">{entry.detail}</p>
              {entry.coursework.length > 0 && (
                <p className="mt-3 font-mono text-caption text-ink-secondary">
                  Coursework: {entry.coursework.join(" · ")}
                </p>
              )}
            </div>
          </m.li>
        ))}
      </m.ol>

      {/* Mobile: vertical single line */}
      <m.ol
        {...staggerChildren}
        className="relative ml-1 border-l border-edge pl-6 md:hidden"
      >
        {education.map((entry) => (
          <m.li key={entry.degree} variants={childFadeUp} className="relative pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[26.5px] top-1.5 h-1 w-1 bg-accent"
            />
            <p className="font-mono text-caption text-ink-secondary">
              {entry.period}
            </p>
            <h3 className="mt-2 text-body font-semibold text-ink">{entry.degree}</h3>
            <p className="mt-1 text-body-sm text-ink-secondary">{entry.institution}</p>
            <p className="font-mono text-caption text-ink-tertiary">{entry.detail}</p>
            {entry.coursework.length > 0 && (
              <p className="mt-3 font-mono text-caption text-ink-secondary">
                Coursework: {entry.coursework.join(" · ")}
              </p>
            )}
          </m.li>
        ))}
      </m.ol>
    </Section>
  );
}
