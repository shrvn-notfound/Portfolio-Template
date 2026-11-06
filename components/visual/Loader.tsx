/**
 * components/visual/Loader.tsx — PROMPT.md §4.2:
 * "Before canvas hydrates: show static mono text loader (no FOUC)."
 * Also used as the <Suspense> fallback for the lazy-loaded canvas.
 */

export default function Loader() {
  return (
    <div
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center bg-void"
    >
      <p className="animate-pulse font-mono text-caption text-ink-tertiary">
        [ INITIALIZING NETWORK VISUAL ]
      </p>
    </div>
  );
}
