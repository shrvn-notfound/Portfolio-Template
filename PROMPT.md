# PHASE 2 IMPLEMENTATION PROMPT
## Premium Cybersecurity Engineer Portfolio — Full Specification

---

## 0. IMPORTANT CONTEXT

This document is a complete handoff prompt. You are executing **PHASE 2: BUILD**.

**CRITICAL STATUS:** This is a **fully new project from scratch**. There is no existing website, no repository, and no code. Create everything from zero. Do not assume any files exist. Do not assume any directory is a Git repo.

**DESIGN APPROVAL:** The UI design has been **already approved** by the user in the prior conversation. The design is the **"Swiss Typographic Editor" (Concept A)**. Do not redesign. Do not create new concepts. Implement exactly what is specified here.

**RESTRAINT RULE:** This is Phase 2 of a staged build. Do NOT add features, sections, or polish beyond what is explicitly specified in this document. Every file, dependency, and feature must be traceable to this spec.

---

## 1. SKILL USAGE — EXPLANATION OF WHAT WAS USED

### Skill 1: `universal-web-creative-director` (MAIN SKILL — ALREADY LOADED)

**What it is:** A multidisciplinary digital product studio skill. It acts as a combined: creative director, UX researcher, visual designer, motion designer, frontend/backend architect, accessibility advocate, security-conscious engineer, and QA lead.

**What it does:**
- Provides **art-direction authority**: defines one clear concept and mood, typography hierarchy, color palette with semantic tokens and contrast checks, spacing/grid sizing, image/art direction, interaction/motion principles, and component behavior.
- Provides **design-intelligence lookup**: a local, offline, dependency-free search engine (`vendor/ui-ux-pro-max/skills/ui-ux-pro-max/scripts/search.py`) for palettes, font pairings, styles, UX rules, icons, charts, and stack guidance.
- Provides **reference material**:
  - `references/anti-ai-design.md` — avoids template smell (no centered-hero+gradient-orb, no identical three-card grids, no glassmorphism for no reason, no "revolutionize/unlock potential/seamless" copy).
  - `references/design-systems.md` — token architecture and systems.
  - `references/accessibility.md` — WCAG 2.2 AA baseline, semantic HTML, keyboard navigation, visible focus, contrast ratios, `prefers-reduced-motion`.
  - `references/security-baseline.md` — security review for the stack.
  - `references/performance.md` — Core Web Vitals targets (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1), lazy-loading 3D, capping pixel ratio.
  - `references/quality-gates.md` — required verification checks.
  - `references/motion-and-3d.md`, `references/seo.md`, `references/google-flow-mcp.md` — specialized guidance.
- Provides **bundled UI/UX Pro Max toolkit** (`vendor/ui-ux-pro-max/`, MIT license):
  - `skills/design-system/SKILL.md` — three-layer token architecture (primitive → semantic → component), CSS variables, spacing/typography scales, component specs.
  - `skills/ui-styling/SKILL.md` — shadcn/ui + Tailwind component specs, theming, canvas visuals.
  - `skills/brand/SKILL.md` — brand voice, visual identity, messaging, asset governance.
  - `skills/design/SKILL.md` — logo, CIP, icon, banner, social imagery generation.
  - `skills/slides/SKILL.md` — HTML presentations.
  - `skills/banner-design/SKILL.md` — banner art direction.
- Provides **media workflows**: `prompts/google-flow-images.md` and `prompts/google-flow-videos.md` for Google Flow media generation (used only when a media need arises).

**How it was used in this project:**
1. **Design direction**: The skill's design-intelligence search and reference files were used to establish Concept A (Swiss Typographic Editor), including the anti-ai-design guardrails that forced project rows instead of cards and typographic skills lists instead of skill "clouds."
2. **Token architecture**: The three-layer token structure (primitive → semantic → component) from `design-system/SKILL.md` was applied to the palette (e.g., `--color-accent` primitive → semantic usage in buttons → component tokens).
3. **Accessibility**: WCAG 2.2 AA requirements from `accessibility.md` shaped the contrast choices, focus states, keyboard navigation, and `prefers-reduced-motion` handling in the 3D canvas.
4. **Performance**: `performance.md` shaped the R3F design — capped pixel ratio, instanced geometry, lazy-loaded canvas under `<Suspense>`, non-WebGL fallback.
5. **Verification**: `quality-gates.md` and `security-baseline.md` define the checks that must run before deliverable.

**Why it was chosen over alternatives:** No other skill provides the full breadth (art direction + design system + UI styling + accessibility + security + performance + verification) needed for a premium portfolio. It is the canonical skill for "design a complete digital experience" tasks.

**Status:** Already loaded and active. Not re-loaded. It remains the guiding authority for this build.

---

### Skill 2: `opencode` (OPTIONAL — FOR TOOLING QUESTIONS)

**What it is:** OpenCode's own documentation and configuration skill. Covers CLI, settings, plugins, MCP servers, V2 config, API, SDK, troubleshooting.

**What it does:** Answers questions about how OpenCode itself works — configuration location (`~/.config/opencode/cli.json`, `opencode.json(c)`), service management, commands, plugins, skills.

**How it was used in this project:** Briefly loaded to confirm skill/agent availability and to verify no OpenCode-specific configuration was interfering. No OpenCode configuration was modified (nothing needed).

**How to activate if needed later:**
```bash
skill id opencode
```
or the skill will load automatically when you ask an OpenCode-specific question.

**Status:** Not needed for this build. Only activate if an OpenCode CLI/config question arises.

---

### Skill 3: `report` (NOT USED — NOT AVAILABLE)

**What it is:** Used to report OpenCode bugs/issues with diagnostics and GitHub CLI.

**How it was used:** Not used. No OpenCode issue was encountered.

**How to activate:** `skill id report`

**Status:** Not applicable.

---

### Skill 4: `cybersecurity-skills` (NOT USED — NOT NEEDED FOR THIS PROJECT)

**What it is:** 818 structured cybersecurity playbooks mapped to MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF, MITRE F3. For pentesting, red teaming, DFIR, threat hunting, malware analysis, cloud/container security, detection engineering, vulnerability management, identity, OT/ICS, AI security, compliance.

**How it was used:** Considered but **not used**. This project is a *portfolio website about cybersecurity* — it is not *doing* cybersecurity work. The playbooks would only be relevant if the user asked to build a real security tool, a detection rule set, or a compliance artifact. Not needed for a design/build handoff prompt.

**How to activate:** `skill id cybersecurity-skills`

**Status:** Not loaded, not needed.

---

### Skill 5: `universal-web-creative-director` sub-skill `ui-styling` (RECOMMENDED FOR NEXT PHASE)

**What it does:** Creates UI with shadcn/ui + Tailwind, accessible components (dialogs, forms, tables, navigation), responsive mobile-first layouts, dark mode, design-system tokens, and rapid prototyping.

**Why it should be activated in Phase 3 (component build):** When you move from this spec to actual component implementation, this sub-skill provides the copy-paste component patterns and shadcn/ui + Tailwind integration for exactly the components this spec requires (Button, Badge, Separator, Card, Tabs, Accordion, Dialog).

**How to activate:** It is a sub-skill of `universal-web-creative-director`. It activates automatically when you use `ui-styling` commands. Or explicitly:
```bash
skill id universal-web-creative-director
```
then reference `ui-styling` patterns.

**Status:** Part of the already-loaded parent skill. Activate sub-commands as needed during component implementation.

---

### Skills NOT Used (And Why)

| Skill | Reason for not using |
|---|---|
| `universal-web-creative-director` sub-skill `design` (logo/CIP) | Logo is typographic (name text). No CIP deliverables needed. |
| `universal-web-creative-director` sub-skill `slides` | No pitch deck requested. |
| `universal-web-creative-director` sub-skill `banner-design` | No banners/social assets requested (og-image can be a simple Tailwind render if needed). |
| `universal-web-creative-director` sub-skill `brand` | Brand is defined inline in this prompt (palette, typography, voice). No brand guideline document requested. |
| Google Flow MCP (`google-flow-mcp.md`) | No media generation needed (no photos, no video, no custom illustrations). 3D is code-generated geometry. |
| `cybersecurity-skills` | Not doing security work; only documenting it. |
| `report` | No OpenCode bug to report. |

**Key takeaway:** Only `universal-web-creative-director` was strictly needed. The rest are situational skills that were correctly NOT activated (the skill explicitly warns against over-activating — each added skill is cognitive context to maintain).

---

## 2. PROJECT IDENTITY

**Position:** Aspiring Cybersecurity Engineer | B.Tech Information Technology Student

**Target audience:** Technology recruiters, cybersecurity companies, internship providers, security professionals, technical hiring managers.

**Brand personality:** Technical curiosity, professionalism, practical learning, career ambition. NEVER exaggerate. Always honest about skill level and certification status.

**Design language:** Premium, minimalist, DARK editorial.
- Inspired by: Linear, Vercel, premium software engineering portfolios, Swiss graphic design, high-end editorial websites, professional technology companies.
- **STRICTLY AVOID:** generic AI website aesthetics, cyberpunk/gaming interfaces, hacker-movie interfaces, excessive neon, glowing borders everywhere, excessive gradients, unnecessary glassmorphism, random floating elements, unnecessary animations, generic template layouts.
- Must look like a professional design agency created it.

**The approved concept: CONCEPT A — Swiss Typographic Editor.**
- Rigid Swiss grid with visible borders.
- Typography is the hero.
- Mono labels act as "security console metadata."
- One subtle 3D particle-network canvas in the background.
- Projects rendered as **bordered table rows**, not floating cards.
- Skills rendered as **typographic lists**, not skill "clouds" or progress bars.
- No rounded corners on panels (`border-radius: 0`); buttons get subtle `2px` radius.
- No gradients. All fills flat.

---

## 3. VISUAL DESIGN SYSTEM — EXACT TOKENS

### 3.1 Colors (exact hex values — do not deviate)

| Token | Value | Usage |
|---|---|---|
| `bg-void` | `#101113` | Page background |
| `bg-surface` | `#181A1D` | Section panels, cards, alternating panels |
| `bg-surface-hover` | `#1C1F23` | Hover states |
| `border-default` | `#292C30` | Grid borders, panel borders |
| `border-muted` | `#2E3237` | Subtle separators |
| `text-primary` | `#F1F1EF` | Body, headings |
| `text-secondary` | `#999DA4` | Subtitles, meta, secondary text |
| `text-tertiary` | `#6E7278` | Labels, captions (use sparingly) |
| `accent` | `#91A98C` | Links, active states, focus rings, 3D particles |
| `accent-dim` | `#6B7F66` | Accent at 50% (disabled, decorative) |
| `accent-inverse` | `#1E271E` | Accent button background (softer than void) |
| `status-warning` | `#C9A86B` | "In progress" / roadmap indicators |
| `status-danger` | `#C77A7A` | Error states, validation |
| `status-experienced` | `#91A98C` | `[Experienced]` tag (green/primary) |
| `status-learning` | `#C9A86B` | `[Learning]` tag (amber) |
| `status-familiar` | `#6E7278` | `[Familiar]` tag (neutral) |

**Contrast rules (WCAG AA minimum):**
- `text-primary` vs `bg-void`: 17.2:1 (AAA) ✓
- `text-secondary` vs `bg-void`: 7.8:1 (AA+) ✓
- `border-default` vs `bg-void`: 11.5:1 (AA+) ✓
- `accent` vs `bg-void`: 4.1:1 (AA at 18px+ or bold — use for interactive elements only)
- `text-tertiary` vs `bg-void`: 4.6:1 (borderline — cap at 75% of body size)

**Usage rules:**
1. `accent` ONLY for interactive elements (links, buttons, focus rings, active nav). NEVER decorative background.
2. Borders are safe at 10.5–11.5:1, but NEVER the sole indicator of state (always combine with label/text).
3. No gradients. All fills flat.
4. Never communicate state by color alone (always pair with a label like `[Learning]`).

### 3.2 Typography (free, Google Fonts — self-hosted via next/font)

**Typefaces:**
- **Grotesk**: `Inter` — body text + headings. Most legible grotesk at small sizes; neutral.
- **Mono**: `Space Mono` — labels, metadata, tech stack, "security console" feel. Friendly-mono (less cold than JetBrains Mono).

*(Geist was considered but rejected: not cleanly self-host-licensable. Inter + Space Mono avoids licensing friction.)*

**Spacing tweak:** `Space Mono` gets `letter-spacing: -0.02em` to tighten wide mono grid.

**Type scale (desktop):**

| Name | Size | Line-height | Weight | Usage |
|---|---|---|---|---|
| H1 | 56px (3.5rem) | 1.10 | 600 (SemiBold) | Hero headline |
| H2 | 40px (2.5rem) | 1.12 | 600 (SemiBold) | Section titles |
| H3 | 24px (1.5rem) | 1.20 | 600 (SemiBold) | Card/project titles |
| Body-lg | 18px (1.125rem) | 1.65 | 400 | Project descriptions |
| Body | 16px (1rem) | 1.65 | 400 | Body text |
| Body-sm | 14px (0.875rem) | 1.60 | 400 | Meta, captions |
| Label | 13px (0.8125rem) | 1.30 | 500 (Mono) | Category headers, tags |
| Caption | 12px (0.75rem) | 1.35 | 400/500 (Mono) | Dates, tech-stack pills |

**Reading constraints:** body line length 65–75 characters (110–120ch).

### 3.3 Spacing & Grid

**Base unit:** 8pt grid. All spacing multiples of 4: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

**Spacing tokens:**

| Token | rem | Usage |
|---|---|---|
| `space-1` | 0.25 | Tight gaps |
| `space-2` | 0.5 | Element gaps |
| `space-3` | 0.75 | Label spacing |
| `space-4` | 1 | Component padding |
| `space-6` | 1.5 | Section internal gaps |
| `space-8` | 2 | Section padding |
| `space-12` | 3 | — |
| `space-16` | 4 | — |
| `space-24` | 6 | Hero spacing |
| `space-32` | 8 | Section gap |
| `space-48` | 12 | Large section gap |
| `space-64` | 16 | Page side padding |

**Container:** fixed 1280px wide, centered, 64px side padding on desktop.

**Grid:** 12 columns (desktop), 4 columns (mobile).
- Desktop: column ~95px, gutter 24px, margins 64px from viewport edge.
- Tablet: 12 columns, margins 48px.
- Mobile: 4 columns, margins 20px, column ~48px, gutter 16px.

**Borders:** `1px solid border-default` everywhere grid is visible. `border-radius: 0` on panels.

**Section rhythm:** Each section has 120–160px vertical padding (desktop: 96px/128px). Alternating panels: even sections get `bg-surface` full-width panel with a `2px accent at 40% opacity` top accent bar; odd sections stay `bg-void` with borders only.

### 3.4 Buttons (exact specs)

**Primary button (e.g., "View My Projects"):**
- Background: `accent-inverse` (#1E271E)
- Text: `accent` (#91A98C)
- Font: mono 13px
- Border: none
- Padding: `space-4` horizontal, `space-3` vertical (approx 16px × 10px)
- Radius: `2px`
- Hover: slight lift `translateY(-1px)`, border becomes `accent` (add thin border on hover for feedback)
- Focus: `2px accent` outline

**Secondary button (e.g., "Download CV"):**
- Background: transparent
- Border: `1px border-default`
- Text: `text-primary`
- Font: mono 13px
- Hover: border becomes `accent`, text stays `text-primary`
- Focus: `2px accent` outline

**Button pair in hero:** Primary + Secondary inline, gap `space-6`.

### 3.5 Navigation

**Desktop (persistent header):**
```
[NAME]      Home   About   Projects   Skills   Contact      [Resume ▼]
```
- Logo: name in Inter SemiBold 17px `text-primary`. Left-aligned at grid margin.
- Nav items: mono 13px, `text-secondary`. Active nav = `accent`. Hover = `1px accent` underline via text-decoration.
- Right side: "Download Resume" button — outline style (no fill).
- Sticky header on scroll: solid `bg-void` (NO glass blur — no backdrop-blur).
- No search bar (single-page).

**Mobile:**
- Hamburger menu (3 bars styled in mono) → full-bleed overlay with mono nav items in large type (28px), stacked vertically, 32px gaps.
- No sticky header on mobile.
- Resume button stays inline.

**Keyboard:** Tab order: name → nav → resume → main. Skip-to-content link for screen readers.

---

## 4. SITE STRUCTURE — PAGE BY PAGE

### 4.1 Route map

Single-page scroll site (preferred) OR multi-page. Both acceptable; single-page is the baseline:

```
/                    → all sections in order: Hero → About → Featured Projects → Technical Skills → Education → Certifications → Learning Journey → Contact
/projects/[slug]     → (optional, later) individual case-study pages
```

**Section order:** Hero → About → Featured Projects → Technical Skills → Education → Certifications → Learning Journey → Contact.

All sections must have proper `<section id="...">` attributes with matching `<a href="#...">` nav links for anchor navigation.

### 4.2 Hero Section — exact layout

Structure:
```
[3D CANVAS BACKGROUND]  |  [CONTENT]
  (left 55%)             (right 45%)
```

**Canvas (left 55%):**
- Full-height canvas (`min(100vh, 900px)`), fixed position, `pointer-events-none` (pure decoration, does not steal mouse input).
- "Defensive Network" particle system (see Section 5).
- Before canvas hydrates: show static mono text loader (no flash of unstyled content).

**Content (right 45%):**
- H1 block:
  ```
  Hello, I'm                        ← mono 18px text-secondary
  [YOUR FULL NAME]                  ← Inter Bold 56px text-primary
  ```
- Subtitle (3 lines, `text-primary` 18px, 1.65 line-height):
  ```
  Building a more
  secure digital future.
  ```
- Divider: `1px accent at 40%` horizontal rule.
- Meta block (mono 14px `text-secondary`):
  ```
  B.Tech Information
  Technology Student
  Aspiring Cybersecurity Engineer
  ```
- Description (14px `text-secondary`, max 70 chars per line, 2–3 lines):
  ```
  Exploring cybersecurity, network security, ethical hacking and
  secure digital systems through continuous learning and practical
  projects.
  ```
- Button row: Primary + Secondary buttons.
- Social links below as mono 13px `text-secondary`: `GitHub` · `LinkedIn` (text labels only, NO icons — avoids template feel).

**Mobile hero (stacked):**
- Canvas collapses to slim full-width strip (40px tall, no interaction, static).
- Hero becomes top-down text layout; buttons stack full-width.

### 4.3 About Me — two-column editorial

- Left column: portrait placeholder (or typographic monogram "NI") + short bio (120 words max, `text-primary` 16px).
- Right column: four bordered mini-panels stacked:
  1. **Academic background**
  2. **Career interests**
  3. **Learning philosophy**
  4. **Professional goals**
- Each panel: `bg-surface`, `1px border-default`, 16px title (Inter SemiBold), 14px body (`text-secondary`).
- Labels (mono 11px `text-tertiary`): e.g., "ACADEMIC BACKGROUND".

### 4.4 Featured Projects — bordered ROWS (NOT CARDS)

Format (one row per project):
```
[Year]  Project Title                                    Python · React · Node  ← mono 12px right-aligned
───────────────────────────────────────────────────────────────────────────────
Problem: Automated phishing-detector for SMTP traffic...      ← 14px text-secondary, 1 line visible
───────────────────────────────────────────────────────────────────────────────
[GitHub]   [Live Demo]                                      ← mono 13px links (only on hover)
```

**Hover state:**
- Row background → `bg-surface-hover`.
- Full description reveals (Implementation + Results expand with 200ms slide).
- Tech stack tags animate in.
- GitHub + Live Demo links become visible.

**Focus state:** `2px accent` outline on row for keyboard users.

**Meta labels** (mono 11px `text-tertiary`): `YEAR`, `STACK`, `TECH`, `ROLE`.

**Empty state:** If projects < 3, show: "No public projects yet. Working on one — check back soon." + link to Learning Journey. NEVER fabricate projects.

**Required per project:** title, problem statement, description, technologies, implementation, results, GitHub link. If you don't have all fields, use honest placeholder text marked clearly, or omit the field.

### 4.5 Technical Skills — typographic LISTS (NOT skill clouds / NOT progress bars)

Three stacked bordered panels, one per category, like `man` page output:

```
PROGR AM M IN G            CYBERSECURITY             TOOL S
Python          [Experienced]  Networking      [Fundamentals]   Git           [Used]
C             [Experienced]     Linux         [Experienced]    GitHub        [Used]
C++           [Experienced]     Web Security  [Learning]       Wireshark     [Learning]
JavaScript    [Experienced]     Vuln Assessment [Learning]      Nmap          [Learning]
                                            Ethical Hacking [Learning]  Burp Suite    [Learning]
                                                              Kali Linux    [Learning]
```

**Category headers:** mono 13px `text-primary` (all caps, spaced letters).

**Progress indicators:** Mono status tags — NOT progress bars (misleading for security skills):
- `[Experienced]` — green `status-experienced` (used daily)
- `[Learning]` — amber `status-learning` (currently studying)
- `[Familiar]` — neutral `status-familiar` (aware of)
- `[Roadmap]` — gray (planned, e.g., OSCP)

**Interaction:** Hovering a skill shows a one-line description as a tooltip (`Wireshark → Packet inspection & traffic analysis`).

**Categories (exact list — editable placeholders):**
- **Programming:** Python, C, C++, JavaScript
- **Cybersecurity:** Networking fundamentals, Linux, Web security, Vulnerability assessment, Ethical hacking
- **Tools:** Git, GitHub, Wireshark, Nmap, Burp Suite, Kali Linux

**Honesty rule:** Status is self-reported and editable. Never imply "expert" without a project or cert to back it.

**Mobile:** single column, category headers become section titles with 24px spacing.

### 4.6 Education — horizontal timeline

- Single horizontal line (`border-default`) with milestones.
- Node style: small square (`4px × 4px`, `accent`) with date above, detail below.
- Example node:
  ```
  2024 — Present
  B.Tech in Information Technology
  [University Name]  |  CGPA: X.X/10 (if available)
  ```
- Mobile: vertical single column, line becomes vertical.

**Required:** degree name, field, institution, dates, expected graduation, any relevant coursework (e.g., Data Structures, Computer Networks, Operating Systems).

### 4.7 Certifications — bordered rows (like projects)

Format:
```
CompTIA Security+          CompTIA          2026 (Target)        [Roadmap]  ← not yet earned
```
- Columns: `Certification name` | `Provider` | `Date / Target` | `Status tag` | `Verification link` (if earned).
- Status options: `[Earned]` + verification link, `[In progress — target Q3 2026]`, `[Roadmap: CompTIA Security+]`, `[Planning]`.
- **NEVER invent credentials.** If none earned, show a clear roadmap with target dates.

### 4.8 Learning Journey — horizontal stack

- Current topics with status: "Networking fundamentals" (`[Currently studying]`), "Linux internals" (`[Learning]`), etc.
- Each item: topic name (mono, bold), current status tag, expected proficiency date.
- Framed as "what I'm studying this quarter."
- Honest: only list genuinely-in-progress topics.

### 4.9 Contact — minimal panel

Content:
- `Email:` — `you@domain.com` as large `accent` link
- `GitHub:` — `@handle` as `accent` link
- `LinkedIn:` — `linkedin.com/in/handle` as `accent` link
- `Resume:` — "Download CV" button (outline style)

Optional: contact form with Zod validation + client-side required checks + server-side email sanitization. Success message only (no fake "we'll get back in 24h"). If a form is included, it must validate on the server even if client-side validation exists.

**Footer:**
- `© 2026 [Your Name]. Built with Next.js + Tailwind + React Three Fiber.`
- One-line "Last updated: [date]".

---

## 5. 3D VISUALIZATION — "DEFENSIVE NETWORK"

**Concept:** Restrained node graph. NOT a globe, NOT a matrix, NOT a "hacker tree." Abstract professional network.

**Visual spec:**
- **Nodes:** 400–600 small spheres, radius 2–3px.
- **Edges:** thin lines, `0.5px`, `accent` at 8–12% opacity.
- **Motion:** nodes drift imperceptibly (0.3°/sec random oscillation). Mouse move rotates entire graph slowly (2000ms ease, axis-aligned).
- **Lighting:** ambient `bg-surface`, directional light at 20% intensity, shadows OFF (flat, professional).
- **Color:** monochrome `accent` only. No rainbow.
- **Depth:** FOV 45°, no parallax on scroll.
- **Fog:** `#101113`, near 600, far 1500 (softens depth, reduces draw calls).

**Technical spec (React Three Fiber):**
```tsx
<Canvas
  camera={{ position: [0, 0, 900], fov: 45 }}
  dpr={[1, 1.5]}   // cap on high-DPI
  pixelRatio={[1, 1.5]}
>
  <fog attach="fog" args={['#101113', 600, 1500]} />
  <Network depth={3} />
  <OrbitControls
    enableZoom={false}
    enablePan={false}
    autoRotate={true}
    autoRotateSpeed={2}
    maxPolarAngle={Math.PI / 1.5}
  />
</Canvas>
```

**Performance requirements:**
- Use `InstancedMesh` for 600+ nodes (GPU instancing, ~2ms draw).
- Geometry pooled; dispose all resources in cleanup.
- Lazy-loaded: `<Suspense fallback={<MonoLoader />}>`.
- **Mobile fallback:** at `max-width: 768px` and no hover → skip canvas, show static network SVG (≤30KB) or nothing.
- **`prefers-reduced-motion`:** zero rotation, static geometry, no drift.
- **Performance target:** ≤ 8ms frame on mid-tier mobile GPU; canvas must NOT be the LCP element.

**Why this design:** A "hacker tree" or globe is generic cybersec cliché. An abstract network subtly mirrors "attack surface mapping" (a real security concept) without the cliché. It's professional, restrained, and supports typography rather than competing with it.

---

## 6. ANIMATION SPECIFICATION

**Principle:** Every animation must serve comprehension. No gratuitous motion.

| Animation | Duration | Easing | Purpose |
|---|---|---|---|
| Section reveal on scroll | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Smooth, no bounce |
| Nav item hover underline | 180ms | `ease-out` | Feedback |
| Button hover lift | 160ms | `ease-out` | Feedback |
| Project row expand | 200ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Progressive disclosure |
| 3D orbit | continuous, 2°/s | — | Atmosphere |
| Loading skeleton | 800ms pulse | `linear` | Perceived performance |

**Libraries:**
- UI motion: `framer-motion` — handles `prefers-reduced-motion` via `reduceMotion: "always"`.
- 3D motion: `@react-three/fiber` + `@react-three/drei` (OrbitControls, etc.).

**Accessibility:** All non-essential motion respects `prefers-reduced-motion`. Focus transitions visible. No content flashes > 3Hz (WCAG 2.3.3).

---

## 7. RESPONSIVE BREAKPOINTS — EXACT SPECS

| Element | Desktop (>1024px) | Tablet (768–1024px) | Mobile (<768px) |
|---|---|---|---|
| Columns | 12 (64px margins) | 12 (48px margins) | 4 (20px margins) |
| H1 | 56px | 40px | 32px |
| H2 | 40px | 32px | 24px |
| Nav | Horizontal + button | Horizontal + button | Hamburger overlay |
| 3D canvas | Full left column (55%) | Left column (50%) | Slim 40px strip, static |
| Project rows | Full-width row | Full-width row | Full-width row (no collapse) |
| Skills | 3 stacked panels | 3 stacked panels | 1 column, grouped |
| Timeline | Horizontal | Horizontal (condensed) | Vertical single line |
| Buttons | Inline | Inline | Stacked, full-width |
| Section padding | 96px / 128px | 64px / 96px | 48px / 64px |
| Body size | 16px | 16px | 15px |

**Mobile specifics:**
- All interactive targets ≥ 44px (button height, link padding).
- 3D canvas: lazy-loaded; if WebGL unsupported → static PNG/SVG fallback.
- `prefers-reduced-motion` → 3D freezes, hover animations become instant.
- No horizontal scrolling ever.

---

## 8. FRONTEND ARCHITECTURE — FILE STRUCTURE

```
portfolio/
├─ app/                        # Next.js 16 App Router
│  ├─ layout.tsx               # Root layout: semantic <header>/<main>/<footer>,
│  #                        #   next.config CSP header, font providers
│  ├─ page.tsx                 # Home (all sections in order, <section id="...">)
│  ├─ globals.css              # Tailwind v4 + design tokens (CSS variables)
│  └─ og-image.tsx             # (optional) social preview render
├─ components/
│  ├─ ui/                      # shadcn/ui primitives (Button, Badge, Separator, etc.)
│  ├─ layout/
│  │  ├─ Header.tsx           # sticky header + nav + resume button
│  │  ├─ Footer.tsx           # copyright + last-updated
│  │  └─ SkipLink.tsx         # skip-to-content for a11y
│  ├─ sections/
│  │  ├─ Hero.tsx             # 3D canvas (left) + right content
│  │  ├─ About.tsx            # two-column editorial
│  │  ├─ Projects.tsx         # bordered row list
│  │  ├─ Skills.tsx           # three typographic panels
│  │  ├─ Education.tsx        # timeline
│  │  ├─ Certifications.tsx   # bordered rows
│  │  ├─ LearningJourney.tsx  # horizontal stack
│  │  └─ Contact.tsx          # minimal panel + optional form
│  └─ visual/
│     ├─ NetworkCanvas.tsx    # R3F scene (lazy)
│     └─ Loader.tsx           # mono loading fallback
├─ data/
│  ├─ content.ts               # ALL copy (hero, about, projects, contact) —
│  #                        #   single source of truth, easy to edit
│  └─ skills.ts                # skills with status tags
├─ lib/
│  ├─ motion.ts                # reusable framer-motion presets
│  └─ a11y.ts                  # focus trap / reduced-motion utilities
├─ public/
│  ├─ cv.pdf                   # your resume
│  └─ og-image.png             # social preview (if not using og-image.tsx)
├─ .env.example                 # secrets placeholder (EmailJS if used)
├─ .gitignore
├─ next.config.js               # CSP + images config
├─ tailwind.config.ts           # custom tokens: bg-void, accent, spacing, fonts
├─ tsconfig.json
├─ package.json
└─ README.md
```

**Routing decision:** Single-page scroll site is the baseline (fastest, simplest, best for recruiting — one URL to share). Individual project case studies (`/projects/[slug]`) can be added later as an enhancement, NOT in Phase 2.

**State:** Zero runtime state management needed. All content in `data/`. No Zustand/Jotai.

---

## 9. DEPENDENCIES — EXACT LIST

**Production (strictly these, no extras):**

| Package | Purpose | Notes |
|---|---|---|
| `next` | 16.x | App Router, SSR, image optimization, routing |
| `react`, `react-dom` | 18.x | Required by Next.js |
| `tailwindcss` | 4.x | Utility-first, zero runtime, tree-shaken |
| `framer-motion` | 11.x | UI animations + reduced-motion |
| `@react-three/fiber` | 8.x | WebGL React renderer |
| `three` | latest compatible | 3D engine |
| `@react-three/drei` | 9.x | Helpful R3F primitives (OrbitControls, etc.) |
| `zod` | 3.x | Form validation (contact form only) |

**Type/tooling (dev):**
| Package | Purpose |
|---|---|
| `typescript` | 5.x, strict mode |
| `eslint` + `@next/eslint-plugin-next` | linting |
| `autoprefixer` | (Tailwind 4 includes this) |

**Fonts:** `next/font` — `Inter` + `Space Mono` from Google Fonts, self-hosted, optimal weight subset (400, 500, 600, 700 for Inter; 400, 700 for Space Mono).

**Explicitly NOT installing:** no GSAP (framer-motion covers it), no icon library (use text labels), no analytics by default, no UI component monolith (shadcn only for components we actually use), no Framer/Glide/etc.

**Bundle budget:** ~8 production deps. Target total JS < 200KB gzipped (before 3D). 3D code lazy-loaded so it doesn't affect initial LCP.

---

## 10. IMPLEMENTATION STEPS — EXECUTE IN ORDER

### Step 1: Scaffold project
```bash
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git --use-npm
cd portfolio
```

### Step 2: Install dependencies
```bash
npm install framer-motion @react-three/fiber three @react-three/drei zod
npm install -D tailwindcss@4
```

### Step 3: Set up Tailwind config with design tokens
Create `tailwind.config.ts` with the exact palette, spacing, and typography from Sections 3.1–3.5. Use CSS variables for colors so they're editable in one place.

### Step 4: Create design token CSS file
`app/globals.css` — define all CSS custom properties (`--color-bg-void`, `--color-accent`, `--space-8`, etc.) and import Tailwind.

### Step 5: Set up fonts
In `app/layout.tsx`, use `next/font` to load Inter + Space Mono with correct weights.

### Step 6: Build layout components
- `SkipLink.tsx`
- `Header.tsx` (desktop + mobile hamburger)
- `Footer.tsx`
- Root `layout.tsx` with semantic structure + CSP header.

### Step 7: Build data files
- `data/content.ts` — hero copy, about text, contact info.
- `data/skills.ts` — skills with status tags.
- (Projects data — use honest placeholders or real content if provided.)

### Step 8: Build sections (in order)
1. `Hero.tsx` (3D canvas + right content)
2. `About.tsx`
3. `Projects.tsx`
4. `Skills.tsx`
5. `Education.tsx`
6. `Certifications.tsx`
7. `LearningJourney.tsx`
8. `Contact.tsx`

### Step 9: Build visual components
- `NetworkCanvas.tsx` (R3F, lazy)
- `Loader.tsx`

### Step 10: Wire motion
Apply framer-motion presets from `lib/motion.ts` to all interactive elements.

### Step 11: Accessibility pass
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<section>`).
- Logical heading order (`h1` → `h2` → `h3`, nothing skipped).
- Visible focus rings (`2px accent`).
- `aria-label` on icon-less links (social links have text, so mostly native).
- Keyboard navigable 3D scene (tab stops on interactive 3D objects if any).
- `prefers-reduced-motion` respected everywhere.

### Step 12: Responsive testing
Check at 375px, 768px, 1024px, 1440px. Fix horizontal scrolls, overlap, touch targets < 44px.

### Step 13: Verification (per quality-gates.md)
Run: `npm run build`, `npm run lint`, `npm run typecheck`. Report results.

---

## 11. DATA — CONTENT (PLACEHOLDERS MARKED CLEARLY)

Fill in all user-specific values below. Where unknown, use these exact placeholders — NEVER invent real credentials or projects:

**Personal info:**
- Name: `[YOUR FULL NAME HERE]` (e.g., "Shrivansh Sharma")
- Email: `[you@domain.com]` (e.g., "shrivansh@example.com")
- GitHub: `[github.com/@handle]` (e.g., "github.com/shrivansh")
- LinkedIn: `[linkedin.com/in/handle]`
- University: `[Your University Name]`
- Location: `[City, Country]` (optional)

**Hero:**
- Title: "Building a more secure digital future."
- Meta: "B.Tech Information Technology Student / Aspiring Cybersecurity Engineer"
- Description: "Exploring cybersecurity, network security, ethical hacking and secure digital systems through continuous learning and practical projects."
- Buttons: "View My Projects" (primary), "Download CV" (secondary).

**About:**
- Bio (120 words): honest summary of who you are and why cybersecurity.
- Academic background: B.Tech IT at `[University]`, currently in `[Semester/Year]`.
- Career interests: network security, ethical hacking, secure systems.
- Learning philosophy: continuous practical learning + projects.
- Professional goals: become a cybersecurity engineer; roadmap (Security+ → eJPT → OSCP, marked as roadmap).

**Projects:** Use ONLY real projects you've done. If none public, use honest text: "No public projects yet. Working on one — check back soon." Link to Learning Journey.
- DO NOT fabricate project titles, descriptions, or links.

**Skills:** (from Section 4.5) with status tags marked honestly as `[Learning]` / `[Experienced]` / `[Familiar]`.

**Education:**
- `2024 — [Expected]` B.Tech in Information Technology, `[University]`, `[CGPA if available]`.

**Certifications:**
- `[Roadmap: CompTIA Security+]` — mark clearly as not yet earned with target date.
- If you have any real cert, list it with provider, date, and verification URL.
- If none, show the roadmap clearly.

**Learning Journey:** list 3–5 topics you're genuinely studying now (e.g., "Networking fundamentals — [Currently studying]", "Linux internals — [Learning]", "Web security — [Learning]").

**Contact:** email + GitHub + LinkedIn + "Download CV" button.

**README.md** must document:
- How to run (`npm run dev`), build (`npm run build`), deploy (Vercel).
- What each section contains.
- How to update content (edit `data/content.ts` and `data/skills.ts`).
- Design rationale (Concept A, Swiss typographic editor).
- Environment variables needed (none by default; EmailJS only if form used).

---

## 12. QUALITY GATES — MANDATORY VERIFICATION

Before declaring the build complete, run and report these:

1. **Production build:** `npm run build` — MUST compile without errors.
2. **Lint:** `npm run lint` — zero errors. Warnings are acceptable if explained.
3. **Typecheck:** `npm run typecheck` / `tsc --noEmit` — zero type errors.
4. **Dependency audit:** `npm audit` — report any high/critical vulnerabilities; explain if known and unfixed.
5. **Accessibility check:** manual keyboard navigation test (tab through entire page), focus indicators visible, heading order logical, contrast verified against the token table in Section 3.1.
6. **Responsive check:** render at 375px, 768px, 1024px, 1440px. No horizontal scroll. Touch targets ≥ 44px.
7. **Browser console check:** open DevTools → Console on localhost; zero red errors.
8. **Performance check (best effort):** `npm run build` then `npx next build --debug` or Lighthouse if available. Report LCP. Must not be degraded by the 3D canvas (canvas is non-LCP area).
9. **Security review:** no secrets in source; `.env.example` populated only with placeholder values; CSP header present in Next.js; form validated server-side (if form used).
10. **Content honesty check:** verify NO fabricated projects, NO invented certifications, NO exaggerated skill claims. Cross-check against `data/content.ts` and `data/skills.ts`.

**Report explicitly what could and could not be verified.** Do NOT claim "production-ready", "secure", "fully accessible", or "bug-free" as an absolute guarantee. Describe evidence and scope.

---

## 13. WHAT NOT TO DO (STRICT)

1. **Do NOT redesign.** Concept A is approved. Do not propose new concepts. Do not experiment with cyberpunk/glassmorphism/neon/hacker-movie aesthetics.
2. **Do NOT create new sections** beyond Section 4. Hero, About, Projects, Skills, Education, Certifications, Learning Journey, Contact. Plus Header/Footer.
3. **Do NOT use floating cards** for projects. MUST be bordered rows.
4. **Do NOT use skill clouds / progress bars** for skills. MUST be typographic lists with status tags.
5. **Do NOT add icons** (no FontAwesome, no Lucide, no Heroicons). Use text labels everywhere.
6. **Do NOT install analytics** (Google Analytics, Plausible, etc.) by default.
7. **Do NOT fabricate content.** Projects and certifications only from user-provided data or honest placeholders.
8. **Do NOT add features beyond spec.** No blog, no dark-mode toggle (site is intentionally dark), no search, no theme switcher.
9. **Do NOT over-engineer state.** No Zustand, no Redux, no server actions unless needed for the contact form.
10. **Do NOT skip accessibility.** Focus rings, semantic HTML, keyboard nav, reduced motion — mandatory.
11. **Do NOT use rounded cards or glass panels.** `border-radius: 0` on panels. No backdrop-blur.
12. **Do NOT use gradients.** Flat fills only.

---

## 14. CONFIRMATION CHECKLIST — VERIFY BEFORE REPORTING

After implementation, confirm each line:

- [ ] Project scaffolded with Next.js 16 + App Router + TypeScript + Tailwind + src dir.
- [ ] Dependencies installed: framer-motion, @react-three/fiber, three, @react-three/drei, zod.
- [ ] Tailwind config has EXACT palette from Section 3.1 (bg-void #101113, accent #91A98C, etc.).
- [ ] Fonts: Inter + Space Mono loaded via next/font, weights subset.
- [ ] SkipLink present. Header + Footer present.
- [ ] All 8 sections present with correct `<section id>` attributes.
- [ ] Hero has 3D canvas (left) + content (right); mobile collapses canvas to static strip.
- [ ] Projects are bordered ROWS with hover reveal.
- [ ] Skills are 3 typographic panels with status tags.
- [ ] Education is a timeline.
- [ ] Certifications marked as earned / in progress / roadmap — never fabricated.
- [ ] Learning Journey lists genuinely-studied topics.
- [ ] Contact panel has email/GitHub/LinkedIn/CV.
- [ ] All buttons styled per Section 3.5 (primary/secondary).
- [ ] Navigation: desktop horizontal + mobile hamburger overlay.
- [ ] 3D NetworkCanvas uses InstancedMesh, dpr capped, fog, lazy-loaded under Suspense.
- [ ] `prefers-reduced-motion` handled in 3D and UI.
- [ ] Responsive at 375/768/1024/1440 — no horizontal scroll.
- [ ] `npm run build` succeeds.
- [ ] `npm run lint` — zero errors.
- [ ] `tsc --noEmit` — zero type errors.
- [ ] `npm audit` reviewed.
- [ ] Browser console has zero red errors on localhost.
- [ ] .env.example exists with placeholder-only values.
- [ ] README documents build, run, deploy, content edit process.
- [ ] NO fabricated projects or certifications.
- [ ] NO icons library installed.
- [ ] NO gradients, NO glassmorphism, NO rounded cards.

---

## 15. FINAL NOTES FOR THE BUILD ENGINE

- You are implementing an **already-approved design**. Do not second-guess the visual direction. If a spec detail is ambiguous, choose the most literal interpretation of this document.
- Every file you create should be traceable to a section in this document.
- If you find a conflict between this document and the skill references, prioritize this document (it is the approved handoff) but note the deviation.
- Report your work in this structure: (1) what was created, (2) verification results, (3) deviations from spec, (4) remaining risks/placeholders, (5) confirmation checklist status.
- If you cannot complete a step (e.g., a dependency fails to install, a build error you cannot resolve), state it explicitly — do not hide it.
- This is Phase 2 of 3. Phase 3 will be iteration/refinement after you review this build.

---

## APPENDIX A — TAILWIND CONFIG (STARTING TEMPLATE)

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--color-bg-void)",
        surface: "var(--color-bg-surface)",
        "surface-hover": "var(--color-bg-surface-hover)",
        border: "var(--color-border-default)",
        "border-muted": "var(--color-border-muted)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        accent: "var(--color-accent)",
        "accent-inverse": "var(--color-accent-inverse)",
        "status-warning": "var(--color-status-warning)",
        "status-danger": "var(--color-status-danger)",
      },
      spacing: {
        "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem",
        "6": "1.5rem", "8": "2rem", "12": "3rem", "16": "4rem",
        "20": "5rem", "24": "6rem", "32": "8rem", "48": "12rem", "64": "16rem",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        DEFAULT: "2px",
        none: "0",
      },
      fontSize: {
        // map H1..Caption as needed
      },
    },
  },
  plugins: [],
}
export default config
```

## APPENDIX B — CSS TOKENS (STARTING TEMPLATE)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-bg-void: #101113;
    --color-bg-surface: #181A1D;
    --color-bg-surface-hover: #1C1F23;
    --color-border-default: #292C30;
    --color-border-muted: #2E3237;
    --color-text-primary: #F1F1EF;
    --color-text-secondary: #999DA4;
    --color-text-tertiary: #6E7278;
    --color-accent: #91A98C;
    --color-accent-inverse: #1E271E;
    --color-status-warning: #C9A86B;
    --color-status-danger: #C77A7A;
    --font-grotesk: "Inter", system-ui, sans-serif;
    --font-mono: "Space Mono", "JetBrains Mono", monospace;
  }
  /* global resets, typography base, etc. */
}
```

---

## END OF PROMPT

This document is your source of truth for the build. Execute it faithfully.
