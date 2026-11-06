"use client";

/**
 * components/visual/NetworkStatic.tsx — static SVG network.
 * PROMPT.md §5: mobile fallback (≤768px / no hover), no-WebGL fallback,
 * and the prefers-reduced-motion fallback. Kept well under 30KB.
 * Deterministic seeded layout — no hydration mismatch.
 */

import { useMemo } from "react";

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const NODES = 42;
const W = 800;
const H = 400;

export default function NetworkStatic({ className = "" }: { className?: string }) {
  const { nodes, edges } = useMemo(() => {
    const rand = mulberry32(91706);
    const nodes = Array.from({ length: NODES }, () => ({
      x: 40 + rand() * (W - 80),
      y: 30 + rand() * (H - 60),
    }));
    const edges: Array<[number, number]> = [];
    for (let i = 0; i < NODES && edges.length < 48; i++) {
      for (let j = i + 1; j < NODES && edges.length < 48; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        if (Math.sqrt(dx * dx + dy * dy) < 110) edges.push([i, j]);
      }
    }
    return { nodes, edges };
  }, []);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {edges.map(([a, b], i) => (
        <line
          key={`e${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#91A98C"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={`n${i}`}
          cx={n.x}
          cy={n.y}
          r={i % 5 === 0 ? 3 : 1.8}
          fill="#91A98C"
          fillOpacity={i % 3 === 0 ? 0.9 : 0.55}
        />
      ))}
    </svg>
  );
}
