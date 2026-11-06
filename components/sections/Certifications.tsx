"use client";

/**
 * components/sections/Certifications.tsx — PROMPT.md §4.7.
 * Bordered rows (like projects): name | provider | date/target | status tag.
 * NEVER invented credentials — the roadmap is explicit about being unearned.
 */

import { m } from "framer-motion";
import Section from "@/components/layout/Section";
import StatusTag from "@/components/ui/StatusTag";
import { certifications } from "@/data/content";
import { sectionReveal } from "@/lib/motion";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      index={6}
      kicker="06 / Credentials"
      title="Certifications"
    >
      <div>
        {certifications.map((cert, i) => (
          <m.div
            key={cert.name}
            {...sectionReveal}
            transition={{ ...sectionReveal.transition, delay: i * 0.05 }}
            className="grid grid-cols-1 gap-2 border border-edge bg-void px-6 py-5 transition-colors duration-150 ease-out hover:bg-surface-hover sm:grid-cols-[2fr_1fr_1fr_auto] sm:items-baseline sm:gap-6 [&+&]:-mt-px"
          >
            <h3 className="text-body font-semibold text-ink">{cert.name}</h3>
            <span className="font-mono text-caption text-ink-secondary">
              {cert.provider}
            </span>
            <span className="font-mono text-caption text-ink-secondary">
              {cert.date}
            </span>
            <StatusTag status={cert.status} label={cert.statusLabel} />
            {cert.verification && (
              <a
                href={cert.verification}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-label text-accent hover:underline hover:underline-offset-4"
              >
                [Verify]
              </a>
            )}
          </m.div>
        ))}
      </div>

      <p className="mt-6 font-mono text-caption text-ink-tertiary">
        No certifications earned yet. Entries above are declared roadmap
        targets — never claimed credentials.
      </p>
    </Section>
  );
}
