"use client";

/**
 * components/sections/Contact.tsx — PROMPT.md §4.9.
 * Minimal panel: email as large accent link, GitHub/LinkedIn accent links,
 * outline "Download CV" button. No form in Phase 2 (optional per spec).
 */

import { m } from "framer-motion";
import Section from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { contact } from "@/data/content";
import { sectionReveal } from "@/lib/motion";

export default function Contact() {
  return (
    <Section id="contact" index={8} kicker="08 / Contact" title={contact.heading}>
      <m.div {...sectionReveal} className="max-w-3xl">
        <p className="measure-body mb-10 text-body text-ink-secondary">
          {contact.body}
        </p>

        <div className="flex flex-col border-t border-edge">
          <div className="flex flex-col gap-1 border-b border-edge py-6 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="font-mono text-label uppercase text-ink-tertiary">
              Email
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-h3 font-semibold text-accent hover:underline hover:underline-offset-4"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex flex-col gap-1 border-b border-edge py-6 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="font-mono text-label uppercase text-ink-tertiary">
              GitHub
            </span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-body-sm text-accent hover:underline hover:underline-offset-4"
            >
              {contact.github}
            </a>
          </div>

          <div className="flex flex-col gap-1 border-b border-edge py-6 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="font-mono text-label uppercase text-ink-tertiary">
              LinkedIn
            </span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-body-sm text-accent hover:underline hover:underline-offset-4"
            >
              {contact.linkedin}
            </a>
          </div>

          <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-label uppercase text-ink-tertiary">
              Resume
            </span>
            <ButtonLink href={contact.resume.href} variant="secondary">
              {contact.resume.label}
            </ButtonLink>
          </div>
        </div>
      </m.div>
    </Section>
  );
}
