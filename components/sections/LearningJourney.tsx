"use client";

/**
 * components/sections/LearningJourney.tsx — PROMPT.md §4.8.
 * "What I'm studying this quarter" — horizontal stack of topics with
 * honest status tags and proficiency targets.
 */

import { m } from "framer-motion";
import Section from "@/components/layout/Section";
import StatusTag from "@/components/ui/StatusTag";
import { learningJourney } from "@/data/content";
import { childFadeUp, staggerChildren } from "@/lib/motion";

export default function LearningJourney() {
  return (
    <Section
      id="learning"
      index={7}
      kicker="07 / In Progress"
      title="Learning Journey"
    >
      <p className="mb-8 font-mono text-body-sm text-ink-secondary">
        {learningJourney.framing}
      </p>

      <m.ul
        {...staggerChildren}
        className="flex flex-col gap-4 md:flex-row md:items-stretch"
      >
        {learningJourney.topics.map((item) => (
          <m.li
            key={item.topic}
            variants={childFadeUp}
            className="flex flex-1 flex-col gap-3 border border-edge bg-void px-6 py-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-mono text-body-sm font-bold text-ink">
                {item.topic}
              </h3>
              <StatusTag
                status={
                  item.status.includes("Currently") ? "learning" : "familiar"
                }
                label={item.status}
              />
            </div>
            <p className="mt-auto font-mono text-caption text-ink-tertiary">
              {item.target}
            </p>
          </m.li>
        ))}
      </m.ul>
    </Section>
  );
}
