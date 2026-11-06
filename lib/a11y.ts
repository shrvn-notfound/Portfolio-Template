"use client";

/**
 * lib/a11y.ts — accessibility utilities.
 * PROMPT.md §5/§6/§7: prefers-reduced-motion must be honored by the
 * 3D canvas and all non-essential UI motion.
 */

import { useSyncExternalStore } from "react";

/**
 * SSR-safe matchMedia hook. Returns true when the user prefers
 * reduced motion. Defaults to false on the server.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      query.addEventListener("change", callback);
      return () => query.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

/**
 * Feature-detect WebGL support (§7 mobile fallback: if unsupported,
 * render the static SVG network instead of the canvas).
 */
export function supportsWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}
