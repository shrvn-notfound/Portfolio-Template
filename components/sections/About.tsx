"use client";

/**
 * components/sections/About.tsx — PROMPT.md §4.3.
 * Two-column editorial: monogram + bio left, four bordered mini-panels right.
 */

import { m } from "framer-motion";
import Section from "@/components/layout/Section";
import { about, site } from "@/data/content";
import { staggerChildren, childFadeUp } from "@/lib/motion";

export default function About() {
  return (
    <Section id="about" index={2} kicker="02 / About" title="About Me">
      <m.div
        {...staggerChildren}
        className="grid gap-8 lg:grid-cols-[4fr_5fr] lg:gap-12"
      >
        {/* Left: typographic monogram + bio */}
        <m.div variants={childFadeUp}>
          <div
            aria-hidden="true"
            className="mb-8 flex aspect-square w-full max-w-64 items-center justify-center border border-edge bg-surface"
          >
            <span className="font-grotesk text-[64px] font-bold text-ink-tertiary">
              {site.monogram}
            </span>
          </div>
          <p className="measure-body whitespace-pre-line text-body text-ink">
            {about.bio}
          </p>
          <p className="mt-4 font-mono text-caption text-ink-tertiary">
            {site.location}
          </p>
        </m.div>

        {/* Right: four bordered mini-panels */}
        <div className="flex flex-col">
          {about.panels.map((panel) => (
            <m.article
              key={panel.label}
              variants={childFadeUp}
              className="border border-edge bg-surface p-6 [&+&]:-mt-px"
            >
              <p className="mb-2 font-mono text-[11px] font-medium uppercase text-ink-tertiary">
                {panel.label}
              </p>
              <h3 className="mb-2 text-body font-semibold text-ink">
                {panel.title}
              </h3>
              <p className="text-body-sm text-ink-secondary">{panel.body}</p>
            </m.article>
          ))}
        </div>
      </m.div>
    </Section>
  );
}
