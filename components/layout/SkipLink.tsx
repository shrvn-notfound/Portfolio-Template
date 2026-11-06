/**
 * components/layout/SkipLink.tsx — keyboard-only skip-to-content link.
 * PROMPT.md §3.5 keyboard order: this is the first tab stop.
 */

export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent-inverse focus:px-4 focus:py-3 focus:font-mono focus:text-label focus:text-accent focus:outline-2 focus:outline-accent"
    >
      Skip to content
    </a>
  );
}
