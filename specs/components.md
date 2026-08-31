# Component Breakdown

Suggested file structure:

```
src/
  content/
    bio.ts
    experience.ts
    projects.ts
    techStack.ts
  components/
    Layout.tsx
    Hero.tsx
    SectionHeading.tsx
    Divider.tsx
    ExperienceSection.tsx
    ExperienceCard.tsx
    ProjectsSection.tsx
    ProjectCard.tsx
    TechStackSection.tsx
    Footer.tsx
  types/
    content.ts        // Bio, Experience, Project, TechStack interfaces (see content-structure.md)
  App.tsx
  main.tsx
  index.css           // design tokens (CSS variables) + base styles
```

## Component responsibilities

**`Layout.tsx`**
Wraps the page: centered max-width content column, applies base spacing rhythm between child sections.

**`Hero.tsx`**
Props: `bio: Bio`. Renders name (H1), optional tagline, blurb paragraph, resume link/button.

**`SectionHeading.tsx`**
Props: `title: string`. Reusable H2 in display font, used by both Experience and Projects sections for consistent hierarchy.

**`Divider.tsx`**
The subtle charcoal-stroke divider (see design-system.md) — used between major sections. One component, reused, so the "hand-drawn" treatment stays consistent instead of being re-implemented per section.

**`ExperienceSection.tsx`**
Props: `experiences: Experience[]`. Renders `SectionHeading` + maps over entries, one `ExperienceCard` per entry, stacked vertically.

**`ExperienceCard.tsx`**
Props: a single `Experience`. Renders role/title, company, date range, bullet list, optional tags. Self-contained `<article>`.

**`ProjectsSection.tsx`**
Props: `projects: Project[]`. Renders `SectionHeading` + a responsive grid (1 column mobile, 2 columns desktop) of `ProjectCard`s.

**`ProjectCard.tsx`**
Props: a single `Project`. Renders title, description, tags, and link(s) (live/repo). Self-contained `<article>`.

**`TechStackSection.tsx`**
Props: `techStack: TechStack`. Renders `SectionHeading` + a flat or grouped tag cloud of the full technical breadth (the exhaustive counterpart to the curated per-entry tags in `ExperienceCard`/`ProjectCard`).

**`Footer.tsx`**
Optional. Renders contact links row.

**`App.tsx`**
Composes: `Layout` > `Hero` > `Divider` > `ExperienceSection` > `Divider` > `ProjectsSection` > `Divider` > `TechStackSection` > `Footer`. Imports content from `src/content/*.ts`.

## Conventions
- All content-bearing components take typed props from `src/types/content.ts` — no inline content in JSX beyond structural/labels (e.g. "Experience" heading text can live in the component or be passed as a prop; actual bio/experience/project data always comes from `src/content/`).
- Use semantic HTML: `<main>` around the page, `<section>` per major block, `<article>` per experience/project entry, correct heading hierarchy (one H1, H2 per section, H3 per entry).
- Keep components presentational/dumb — no data fetching, no state beyond trivial UI state (if any). This is a static content site.
- Style with CSS Modules (`ComponentName.module.css`) or Tailwind utility classes consistently — pick one approach for the whole project, don't mix.
