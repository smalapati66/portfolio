# AGENTS.md — Personal Portfolio Website

## Project summary
A single, minimalist personal portfolio site. The site introduces the owner, links to a resume, and presents work experience and projects in clearly scannable modules. Priority #1 is readability and scannability — every design and content decision should be checked against that bar before anything else.

## Tech stack
- **React** + **TypeScript**
- Functional components + hooks only (no class components)
- Bring your own bundler/framework choice (Vite or Next.js both fine) unless the repo already has one — if starting fresh, prefer **Vite + React + TypeScript** for simplicity, since this is a static/content site with no need for SSR or routing complexity.
- CSS: plain CSS Modules or Tailwind are both acceptable. Avoid heavy component libraries (MUI, Chakra, etc.) — this is a small, custom-styled site and a library will fight the minimalist aesthetic.
- No backend. Content can live in local TypeScript/JSON data files (see `specs/content.md`) rather than a CMS, unless told otherwise.

## Read these specs, in order
1. `specs/design-system.md` — color palette, typography, the "charcoal art" visual language, spacing rules
2. `specs/content-structure.md` — what content exists and how it's organized (bio, resume, experience, projects)
3. `specs/components.md` — component breakdown, props, and file structure

## Core principles (apply to every decision)
1. **Readability over decoration.** The charcoal-art influence should show up as *restraint* (texture, ink, negative space) — not busy illustration. If a design choice makes scanning slower, cut it.
2. **Scannability.** A visitor should be able to skim experience and project titles in a few seconds. Use consistent visual hierarchy (title → meta → bullets) across every module.
3. **One idea per module.** Each experience gets its own self-contained section; each project gets its own card. No shared run-on paragraphs.
4. **Accessible by default.** Maintain WCAG AA contrast at minimum (see design-system.md for exact color pairs). Semantic HTML (`<section>`, `<article>`, `<h2>`/`<h3>` hierarchy) throughout.
5. **Static content, dynamic-feeling structure.** Content (bio text, experience entries, project entries) should be data-driven from typed objects/arrays, not hardcoded JSX repeated per entry — makes future edits trivial.
6. **No unnecessary dependencies.** Every added package should earn its place given the site's small scope.

## Confirmed decisions
- Single-page site: Bio → Experience → Projects → Full tech stack → Footer, in that order. No routing.
- Display font is **Canela** (see `specs/design-system.md`).
- Resume source: a copy of the resume lives in `docs/` at the repo root (e.g. `docs/resume.pdf`) as the source of truth for the build agent to reference/copy into the site. The live site should serve it from `/public/resume.pdf` (or equivalent static path) and open it in a new tab — see `specs/content-structure.md`.

## Open assumptions (flag if wrong)
- No CMS/backend — content edited directly in source files.
- No dark mode toggle — the off-white/charcoal palette *is* the theme.

## Non-goals
- No blog/CMS functionality
- No animation-heavy interactions or parallax effects (fights readability goal)
- No third-party analytics/tracking unless requested separately
