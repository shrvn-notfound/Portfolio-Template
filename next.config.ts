import type { NextConfig } from "next";

/**
 * next.config.ts — PROMPT.md §8/§12.9: CSP header present in Next.js.
 * Applied in production only so the dev server's HMR inline scripts
 * keep working; the policy itself is strict, flat-origin, no third parties.
 */

const CSP = [
  "default-src 'self'",
  // Next.js prerenders inline bootstrap scripts; static site has no
  // third-party origins, so 'unsafe-inline' here does not widen the
  // trusted origin set (no external script source is allowed).
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'", // framer-motion injects inline styles
  "img-src 'self' data: blob:",
  "font-src 'self' data:", // next/font self-hosts
  "connect-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      // Registers the Tailwind v4 CSS transform for Turbopack
      // (create-next-app default — required for utility generation).
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    if (process.env.NODE_ENV !== "production") return [];
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: CSP },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
