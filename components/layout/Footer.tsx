/**
 * components/layout/Footer.tsx — PROMPT.md §4.9 footer.
 */

import { footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-void">
      <div className="container-editorial flex flex-col gap-2 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-caption text-ink-secondary">{footer.line}</p>
        <p className="font-mono text-caption text-ink-tertiary">{footer.updated}</p>
      </div>
    </footer>
  );
}
