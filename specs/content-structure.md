# Content Structure

Single-page layout, top to bottom:

1. Hero / Bio
2. Experience
3. Projects
4. Tech Stack (full skills summary)
5. (Optional) Footer — contact links

## 1. Hero / Bio section

- **Name** — H1, display font.
- **Short blurb** — 2–3 sentences about who you are / what you do. Plain, direct language; this is the one place on the page that reads as prose rather than a scan-list, so keep it tight.
- **Resume link** — a clearly visible button/link, e.g. "View Résumé" or "Résumé (PDF)", opens the resume in a new tab. Should be visually distinct enough to spot in under a second (this is likely the highest-intent action on the page for a recruiter). Source file: the resume lives in `docs/` at the repo root (source of truth) — copy/reference it into the site's static assets for `resumeUrl` (see `AGENTS.md`).
- Optional: 1-line location/role tag under the name (e.g. "Software Engineer, Chicago").

Data shape:
```ts
interface Bio {
  name: string;
  tagline?: string;       // e.g. "Software Engineer"
  blurb: string;          // 2–3 sentences
  resumeUrl: string;      // path or external link, opens in new tab
}
```

## 2. Experience section

- Section heading: "Experience" (H2, display font).
- Each experience is its **own self-contained module** — not a shared timeline or table. Stacked vertically, one per section.
- Each module contains:
  - Role/title (H3)
  - Company name
  - Date range (e.g. "Jun 2023 – Present")
  - **Shortened bullet points** describing the experience — 2–4 bullets max, each one line where possible, action-verb-led, no full paragraphs. Cut to the highest-impact points only; this is a portfolio, not a full resume (the resume link covers the complete history).
- Tech-stack tags per entry: a small tag list (e.g. "React · TypeScript · Postgres") in `--color-ink-soft`. Keep this to the **most important/defining technologies for that specific role only** — not an exhaustive list. This is a curated highlight, not a full inventory; the complete stack lives in the Tech Stack section below.

Data shape:
```ts
interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  startDate: string;      // "Jun 2023"
  endDate: string | "Present";
  bullets: string[];      // 2–4 short bullets
  tags?: string[];        // optional tech stack / skills
}
```

## 3. Projects section

- Section heading: "Projects" (H2, display font).
- Each project gets its own card/module (may use a 2-column grid on desktop per design-system.md — projects are more visually self-contained than experience entries).
- Each project module contains:
  - Project title (H3)
  - 1–2 sentence description (what it is / what it does, not how you built it)
  - Tags: the important/defining technologies for that project only (curated, not exhaustive — same rule as experience tags)
  - Link(s): live demo and/or source repo, if available

Data shape:
```ts
interface Project {
  id: string;
  title: string;
  description: string;    // 1–2 sentences
  tags: string[];          // tech stack
  liveUrl?: string;
  repoUrl?: string;
}
```

## 4. Tech Stack section

- Section heading: "Tech Stack" (H2, display font).
- A single flat list/cloud of tags covering your **full** technical breadth — this is the exhaustive counterpart to the curated per-entry tags above. Renders as simple pill/text tags, no descriptions, no grouping required (though light grouping by category — e.g. "Languages," "Frameworks," "Tools" — is fine if the list gets long).
- Purpose: lets a scanning visitor confirm breadth at a glance without reading every experience/project entry.

Data shape:
```ts
interface TechStack {
  categories?: { label: string; items: string[] }[];  // optional grouping
  items?: string[];                                     // or a flat list if no grouping
}
```

## 5. Footer (optional)

- Minimal: contact links (email, LinkedIn, GitHub) as plain text/icon row, `--color-ink-soft`.
- No newsletter signup, no social share buttons, no extra CTAs — keep the footer quiet.

## Content principles
- Every bullet and description should pass a "can this be scanned in one glance" test — if a bullet wraps to 3+ lines, shorten it.
- Prefer concrete outcomes/actions over vague descriptors ("Rebuilt checkout flow, cutting load time 40%" over "Worked on performance improvements").
- Content lives in typed data files (e.g. `src/content/experience.ts`, `src/content/projects.ts`) per the interfaces above, not hardcoded inline JSX — see `components.md`.
