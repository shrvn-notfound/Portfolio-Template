# Portfolio — Aspiring Cybersecurity Engineer

Premium, minimalist, dark-editorial portfolio. Single-page scroll site built to the
specification in [`PROMPT.md`](./PROMPT.md) (Phase 2 handoff document).

**Design concept:** *Swiss Typographic Editor* (Concept A) — rigid Swiss grid with
visible borders, typography as the hero, mono labels as "security console metadata,"
and one restrained 3D particle-network canvas. Projects are bordered table **rows**
(not cards). Skills are typographic **lists** with honest status tags (not progress
bars). No gradients, no glassmorphism, no rounded panels, no icon libraries.

> Design provenance and skill documentation: [`USED-SKILL-DETAILED.md`](./USED-SKILL-DETAILED.md)

## Run it

```bash
npm install
npm run dev        # development server → http://localhost:3000
```

## Build & verify

```bash
npm run build      # production build (fully static output)
npm run start      # serve the production build
npm run lint       # ESLint (zero errors required)
npm run typecheck  # tsc --noEmit (zero type errors required)
npm audit          # dependency audit
```

## Deploy

Static-friendly Next.js app — deploy to Vercel with zero configuration
(framework preset: Next.js), or any host that runs `next start`.

## Update content

All copy lives in two data files — edit these, nothing else:

| File | Contains |
|---|---|
| `data/content.ts` | Name, contact links, hero copy, about panels, projects, education, certifications, learning journey |
| `data/skills.ts` | Skill categories, status tags (`experienced` / `learning` / `familiar` / `roadmap`), one-line tooltip descriptions |

Placeholders are marked with square brackets, e.g. `[YOUR FULL NAME HERE]`.
**Honesty rule:** never replace a placeholder with an invented project, credential,
or skill claim. Certifications are declared roadmap items until actually earned.

Replace `public/cv.pdf` (currently an explicit placeholder) with the real resume.

## Architecture

- **Framework:** Next.js 16 (App Router, static prerender) + React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS v4 — CSS-first tokens in `app/globals.css` (`@theme`),
  exact palette from PROMPT.md §3.1
- **Fonts:** Inter + Space Mono, self-hosted via `next/font`
- **Motion:** framer-motion 12 (`MotionConfig reducedMotion="user"`)
- **3D:** three + @react-three/fiber 9 + drei — "Defensive Network": ~500 instanced
  nodes (`InstancedMesh`), capped `dpr [1, 1.5]`, fog, lazy-loaded via `next/dynamic`
  (never the LCP element). Fallbacks: static SVG on mobile / no-WebGL /
  `prefers-reduced-motion`.

```
app/            layout (fonts, metadata, semantic shell), page, tokens
components/
  layout/       Header (scroll-spy nav + mobile overlay), Footer, SkipLink, Section
  sections/     Hero, About, Projects, Skills, Education, Certifications,
                LearningJourney, Contact
  ui/           Button, StatusTag
  visual/       NetworkCanvas (R3F), NetworkStatic (SVG fallback),
                NetworkBackground (mode switch), Loader
data/           content.ts, skills.ts — single source of truth for copy
lib/            motion.ts (animation presets), a11y.ts (reduced-motion, WebGL check)
public/         cv.pdf (placeholder)
```

## Accessibility

WCAG 2.2 AA baseline: semantic landmarks, single `h1` with logical heading order,
skip-to-content link, visible 2px accent focus rings, keyboard-operable project rows
and mobile menu (Escape closes), contrast per the §3.1 token table, and all
non-essential motion honors `prefers-reduced-motion`.

## Security

Production responses carry a strict Content-Security-Policy (self-only, no
third-party origins), `X-Content-Type-Options: nosniff`, `X-Frame-Options`,
`Referrer-Policy`, and a locked-down `Permissions-Policy`. No secrets in source;
`.env.example` documents (currently zero) environment variables.

## Environment variables

None required in Phase 2. See `.env.example` for the placeholder convention.
