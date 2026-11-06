"use client";

/**
 * components/layout/Header.tsx — PROMPT.md §3.5.
 * Desktop: sticky solid bg-void header (NO backdrop-blur), name left,
 * mono 13px nav, outline resume button right. Active item = accent.
 * Mobile: hamburger → full-bleed overlay, mono 28px items, 32px gaps.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site } from "@/data/content";

const SECTION_IDS = [
  "top",
  "about",
  "projects",
  "skills",
  "education",
  "certifications",
  "learning",
  "contact",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  // Scroll-spy: highlight the nav item for the section in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the overlay with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => {
    const id = href.replace("#", "");
    if (id === "top") return active === "top" || active === "education" || active === "certifications" || active === "learning";
    return active === id;
  };

  return (
    <header className="z-50 border-b border-edge bg-void md:sticky md:top-0">
      <div className="container-editorial flex h-16 items-center justify-between gap-6 md:h-18">
        <Link
          href="#top"
          className="flex min-h-11 items-center font-grotesk text-[17px] font-semibold text-ink"
        >
          {site.name}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive(item.href) ? "true" : undefined}
                  className={`inline-flex min-h-11 items-center font-mono text-label transition-colors duration-150 ease-out hover:text-accent hover:underline hover:underline-offset-4 ${
                    isActive(item.href) ? "text-accent" : "text-ink-secondary"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href="/cv.pdf"
            className="inline-flex min-h-11 items-center border border-edge px-4 py-2 font-mono text-label text-ink transition-colors duration-150 ease-out hover:border-accent"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex min-h-11 min-w-11 flex-col items-end justify-center gap-1.5 md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <span aria-hidden="true" className="h-px w-6 bg-ink" />
          <span aria-hidden="true" className="h-px w-6 bg-ink" />
          <span aria-hidden="true" className="h-px w-6 bg-ink" />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-50 flex flex-col bg-void md:hidden"
        >
          <div className="container-editorial flex h-16 items-center justify-between border-b border-edge">
            <span className="font-grotesk text-[17px] font-semibold text-ink">
              {site.name}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="min-h-11 min-w-11 font-mono text-label text-ink-secondary hover:text-accent"
            >
              <span aria-hidden="true">CLOSE ×</span>
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="container-editorial flex-1 py-12">
            <ul className="flex flex-col gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center font-mono text-[28px] text-ink-secondary hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="container-editorial pb-12">
            <a
              href="/cv.pdf"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 items-center border border-edge px-4 py-3 font-mono text-label text-ink hover:border-accent"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
