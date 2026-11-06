"use client";

/**
 * components/sections/Skills.tsx — PROMPT.md §4.5.
 * Three bordered panels rendered like `man`-page output: typographic lists,
 * mono status tags — NO progress bars, NO skill clouds.
 * Hover/focus on a skill shows its one-line tooltip description.
 * State is never color alone: every tag carries its text label.
 */

import { m } from "framer-motion";
import Section from "@/components/layout/Section";
import StatusTag from "@/components/ui/StatusTag";
import { skillCategories, statusTagLabel, type Skill } from "@/data/skills";
import { childFadeUp, staggerChildren } from "@/lib/motion";

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <li
      tabIndex={0}
      aria-describedby={undefined}
      className="group relative flex items-baseline justify-between gap-4 border-b border-edge-muted px-4 py-2.5 transition-colors duration-150 ease-out last:border-b-0 hover:bg-surface-hover focus-visible:bg-surface-hover focus-visible:outline-2 focus-visible:outline-accent"
    >
      <span className="text-body-sm text-ink">{skill.name}</span>
      <StatusTag status={skill.status} label={statusTagLabel[skill.status]} />

      {/* One-line tooltip — §4.5 interaction */}
      <span
        role="tooltip"
        className="pointer-events-none absolute left-4 top-full z-10 mt-1 hidden border border-edge bg-void px-3 py-1.5 font-mono text-caption text-ink-secondary group-hover:block group-focus-visible:block"
      >
        {skill.name} → {skill.detail}
      </span>
    </li>
  );
}

export default function Skills() {
  return (
    <Section id="skills" index={4} kicker="04 / Capabilities" title="Technical Skills">
      <m.div
        {...staggerChildren}
        className="grid gap-6 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-edge lg:border lg:border-edge"
      >
        {skillCategories.map((category) => (
          <m.div key={category.label} variants={childFadeUp} className="lg:bg-void">
            <h3 className="border border-edge bg-void px-4 py-3 font-mono text-label font-medium uppercase tracking-wide text-ink lg:border-0 lg:border-b lg:border-edge">
              {category.label}
            </h3>
            <ul className="mt-2 border border-edge bg-void lg:mt-0 lg:border-0">
              {category.skills.map((skill) => (
                <SkillRow key={skill.name} skill={skill} />
              ))}
            </ul>
          </m.div>
        ))}
      </m.div>

      <p className="mt-6 font-mono text-caption text-ink-tertiary">
        Status is self-reported: [Experienced] used regularly · [Learning]
        actively studying · [Familiar] fundamentals · [Roadmap] planned.
      </p>
    </Section>
  );
}
