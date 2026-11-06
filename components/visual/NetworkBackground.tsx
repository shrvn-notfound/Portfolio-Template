"use client";

/**
 * components/visual/NetworkBackground.tsx — decides what renders.
 * PROMPT.md §5/§7:
 *  - desktop + WebGL + motion allowed → lazy-loaded R3F canvas
 *  - mobile (≤768px / coarse pointer, no hover) → static SVG strip
 *  - prefers-reduced-motion → static SVG (zero rotation, no drift)
 *  - WebGL unsupported → static SVG
 *
 * The canvas is lazy via next/dynamic so it never blocks LCP.
 * Server/hydration snapshot is the static SVG; after mount it upgrades
 * to the canvas when the device qualifies (useSyncExternalStore pattern).
 */

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { m } from "framer-motion";
import Loader from "@/components/visual/Loader";
import NetworkStatic from "@/components/visual/NetworkStatic";
import { supportsWebGL, usePrefersReducedMotion } from "@/lib/a11y";

const NetworkCanvas = dynamic(() => import("./NetworkCanvas"), {
  ssr: false,
  loading: () => <Loader />,
});

type Mode = "canvas" | "static";

function getSnapshot(): Mode {
  const isMobile =
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  return isMobile || !supportsWebGL() ? "static" : "canvas";
}

function subscribe(callback: () => void): () => void {
  const queries = [
    window.matchMedia("(max-width: 768px)"),
    window.matchMedia("(hover: none) and (pointer: coarse)"),
  ];
  queries.forEach((q) => q.addEventListener("change", callback));
  window.addEventListener("resize", callback);
  return () => {
    queries.forEach((q) => q.removeEventListener("change", callback));
    window.removeEventListener("resize", callback);
  };
}

export default function NetworkBackground({ strip = false }: { strip?: boolean }) {
  const reducedMotion = usePrefersReducedMotion();
  const mode = useSyncExternalStore(subscribe, getSnapshot, () => "static");

  // §5 reduced motion: static geometry, no drift, no rotation — everywhere.
  const content =
    reducedMotion || mode === "static" ? (
      <NetworkStatic className="h-full w-full" strip={strip} />
    ) : (
      <NetworkCanvas reducedMotion={false} />
    );

  // Fade the visual in once mounted so the canvas never pops (§6: no flash).
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-full w-full"
    >
      {content}
    </m.div>
  );
}
