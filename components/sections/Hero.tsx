"use client";

/**
 * components/sections/Hero.tsx — PROMPT.md §4.2.
 * Desktop: 3D canvas left 55% (pointer-events-none decoration),
 * typographic content right 45%.
 * Mobile: canvas collapses to a slim 40px static strip; content stacks,
 * buttons go full-width.
 *
 * Entrance (§6 spirit): staggered line-mask reveal for the headline and
 * subtitle, fade-up for supporting blocks, scaleX divider draw.
 */

import { m } from "framer-motion";
import NetworkBackground from "@/components/visual/NetworkBackground";
import { ButtonLink } from "@/components/ui/Button";
import { hero } from "@/data/content";
import { fadeItem, maskContainer, maskLine } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative border-t border-edge bg-void"
    >
      {/* Mobile: slim 40px static strip — §4.2 / §7 */}
      <div className="h-10 w-full border-b border-edge lg:hidden">
        <NetworkBackground />
      </div>

      <div className="container-editorial lg:grid lg:min-h-[min(100vh,900px)] lg:grid-cols-[55fr_45fr]">
        {/* Desktop canvas — left 55%, decoration only */}
        <div className="relative hidden lg:block">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <NetworkBackground />
          </div>
        </div>

        {/* Content — right 45% */}
        <div className="flex flex-col justify-center py-16 md:py-24 lg:border-l lg:border-edge lg:py-0 lg:pl-16">
          <m.div variants={maskContainer} initial="hidden" animate="show">
            <m.p
              variants={fadeItem}
              className="mb-4 font-mono text-body-lg text-ink-secondary"
            >
              {hero.greeting}
            </m.p>

            {/* Headline: line-mask reveal (h1 preserved for semantics) */}
            <h1 className="text-[32px] font-bold leading-[1.1] text-ink md:text-[40px] lg:text-h1">
              <span className="block overflow-hidden">
                <m.span variants={maskLine} className="block">
                  {hero.headline}
                </m.span>
              </span>
            </h1>

            {/* Subtitle: one masked line each */}
            <span className="mt-6 block">
              {hero.subtitle.map((line) => (
                <span key={line} className="block overflow-hidden">
                  <m.span
                    variants={maskLine}
                    className="block text-body-lg text-ink"
                  >
                    {line}
                  </m.span>
                </span>
              ))}
            </span>

            {/* Divider draws in */}
            <m.div
              aria-hidden="true"
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                show: {
                  scaleX: 1,
                  opacity: 1,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="my-8 h-px origin-left bg-accent/40"
            />

            <m.div variants={fadeItem}>
              <p className="font-mono text-body-sm text-ink-secondary">
                {hero.meta.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>

              <p className="measure-body mt-6 text-body-sm text-ink-secondary">
                {hero.description}
              </p>
            </m.div>

            <m.div
              variants={fadeItem}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
              <ButtonLink
                href={hero.primaryCta.href}
                variant="primary"
                className="w-full sm:w-auto"
              >
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={hero.secondaryCta.href}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta.label}
              </ButtonLink>
            </m.div>

            <m.p
              variants={fadeItem}
              className="mt-10 font-mono text-label text-ink-secondary"
            >
              {hero.socials.map((social, i) => (
                <span key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center transition-colors duration-150 hover:text-accent hover:underline hover:underline-offset-4"
                  >
                    {social.label}
                  </a>
                  {i < hero.socials.length - 1 && (
                    <span aria-hidden="true" className="mx-2 text-ink-tertiary">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </m.p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
