"use client";

/**
 * components/sections/Projects.tsx — PROMPT.md §4.4.
 * Bordered ROWS (never floating cards). Hover/focus expands the row to
 * reveal implementation + results (200ms slide), tech tags, and links.
 * Empty state (§11): honest text, link to Learning Journey. Never fabricate.
 */

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import Section from "@/components/layout/Section";
import { projects, projectsEmptyState, type Project } from "@/data/content";
import { rowExpand, sectionReveal } from "@/lib/motion";

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <m.article
      {...sectionReveal}
      transition={{ ...sectionReveal.transition, delay: index * 0.05 }}
      tabIndex={0}
      aria-expanded={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      className="cursor-default border border-edge bg-void px-6 py-5 transition-colors duration-150 ease-out hover:bg-surface-hover focus-visible:bg-surface-hover focus-visible:outline-2 focus-visible:outline-accent [&+&]:-mt-px"
    >
      {/* Row 1: year / title / stack */}
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <span className="font-mono text-caption text-ink-tertiary">
          {project.year}
        </span>
        <h3 className="flex-1 text-h3 font-semibold text-ink">
          {project.title}
        </h3>
        <span className="font-mono text-caption text-ink-secondary">
          {project.tech.join(" · ")}
        </span>
      </div>

      {/* Row 2: problem statement */}
      <p className="mt-3 text-body-sm text-ink-secondary">{project.problem}</p>

      {/* Expanded: implementation + results + links */}
      <AnimatePresence>
        {open && (
          <m.div {...rowExpand} className="overflow-hidden">
            <div className="mt-4 border-t border-edge-muted pt-4">
              <dl className="grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="mb-1 font-mono text-[11px] uppercase text-ink-tertiary">
                    Implementation
                  </dt>
                  <dd className="text-body-sm text-ink-secondary">
                    {project.implementation}
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 font-mono text-[11px] uppercase text-ink-tertiary">
                    Results
                  </dt>
                  <dd className="text-body-sm text-ink-secondary">
                    {project.results}
                  </dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="font-mono text-[11px] uppercase text-ink-tertiary">
                  Role: <span className="text-ink-secondary">{project.role}</span>
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-label text-accent hover:underline hover:underline-offset-4"
                  >
                    [GitHub]
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-label text-accent hover:underline hover:underline-offset-4"
                  >
                    [Live Demo]
                  </a>
                )}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" index={3} kicker="03 / Work" title="Featured Projects">
      {projects.length === 0 ? (
        <m.div {...sectionReveal} className="border border-edge bg-void p-8 md:p-12">
          <p className="font-mono text-body-sm text-ink-secondary">
            {projectsEmptyState.message}
          </p>
          <a
            href={projectsEmptyState.href}
            className="mt-4 inline-flex min-h-11 items-center font-mono text-label text-accent hover:underline hover:underline-offset-4"
          >
            {projectsEmptyState.linkLabel}
          </a>
        </m.div>
      ) : (
        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>
      )}
    </Section>
  );
}
