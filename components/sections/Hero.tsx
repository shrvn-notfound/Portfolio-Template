"use client";

/**
 * components/sections/Hero.tsx — PROMPT.md §4.2.
 * Desktop: 3D canvas left 55% (pointer-events-none decoration),
 * typographic content right 45%.
 * Mobile: canvas collapses to a slim 40px static strip; content stacks,
 * buttons go full-width.
 */

import { m } from "framer-motion";
import NetworkBackground from "@/components/visual/NetworkBackground";
import { ButtonLink } from "@/components/ui/Button";
import { hero } from "@/data/content";
import { EASE_EDITORIAL } from "@/lib/motion";

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
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
          >
            <p className="mb-4 font-mono text-body-lg text-ink-secondary">
              {hero.greeting}
            </p>

            <h1 className="text-[32px] font-bold leading-[1.1] text-ink md:text-[40px] lg:text-h1">
              {hero.headline}
            </h1>

            <p className="mt-6 text-body-lg text-ink">
              {hero.subtitle.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <hr
              aria-hidden="true"
              className="my-8 h-px border-0 bg-accent/40"
            />

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

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
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
            </div>

            <p className="mt-10 font-mono text-label text-ink-secondary">
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
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
