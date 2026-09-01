# Design System

Guiding rule: **readability and scannability beat every aesthetic instinct.** The charcoal-art influence is expressed through restraint, texture, and ink-like contrast — never through visual noise, clutter, or anything that slows down skimming.

## Color palette

| Token | Hex (suggested) | Usage |
|---|---|---|
| `--color-bg` | `#F6F4EF` | Page background — warm off-white, not stark white |
| `--color-bg-alt` | `#EFEBE2` | Alternating section background / card background, very subtle contrast from `--color-bg` |
| `--color-ink` | `#232323` | Primary text — near-black charcoal, not pure `#000` (softer, more "drawn" feel) |
| `--color-ink-soft` | `#4A4A47` | Secondary text (meta info: dates, company names, tech stack) |
| `--color-ink-faint` | `#8A8680` | Tertiary/muted text (captions, footer) |
| `--color-accent` | `#7A263A` | Muted maroon for link underlines and focus states, used sparingly |
| `--color-line` | `#D8D3C7` | Hairline borders/dividers between modules |

Only these seven tokens. The muted maroon accent is reserved for interaction feedback; links retain ink text and use the accent through underlines or focus treatment rather than link-blue.

**Contrast check:** `--color-ink` on `--color-bg` and `--color-bg-alt` must both clear WCAG AA (4.5:1) for body text — the pairing above does. Never place `--color-ink-faint` text on `--color-bg-alt` for anything except decorative captions.

## Typography

Two-font system, not more:

1. **Body / UI font** — a humanist sans-serif optimized for on-screen reading: **Inter**, **Söhne**, or **General Sans**. Used for bio text, bullet points, nav, metadata. This carries the scannability goal — no experiments here.
2. **Display font (used sparingly)** — **Canela**. This is where the "charcoal art" feeling lives — a serif with slightly irregular, hand-finished letterforms. Used *only* for: the name/title in the hero, and section headings (H2s: "Experience," "Projects," "Tech Stack"). Never for body copy or bullet text. (If Canela isn't licensable/available for web use in your setup, fall back to a close alternative like Fraunces or Reckless — but default to Canela.)

Rules:
- No more than 2 font families total.
- No decorative/script fonts, no textured or distressed display fonts — "charcoal art" comes through in the *palette and dividers*, not gimmicky type.
- Type scale (suggested, rem-based, 16px root):
  - H1 (name/hero): 2.5–3rem, display font
  - H2 (section titles): 1.5–1.75rem, display font
  - H3 (experience/project titles): 1.125–1.25rem, body font, medium/semibold weight
  - Body: 1rem, line-height 1.6
  - Meta (dates, tags): 0.875rem, `--color-ink-soft`
- Line length: cap body text containers at ~65–75 characters (max-width ~640–720px) for readability.

## The "charcoal art" texture, kept quiet

Pick **at most one** of these, applied subtly — not stacked:
- A very faint (2–4% opacity) grain/noise texture as a full-page background layer, evoking charcoal paper without reading as "dirty" or low-contrast.
- Hand-drawn-style single-stroke dividers (a slightly irregular horizontal line, like a charcoal stroke) between major sections, instead of a perfectly straight `<hr>`.
- A subtle smudge/vignette at page edges only, never behind text blocks.

Do **not**: use illustration, sketch icons, textured cards, rough/torn edges on every element, or multiple textures at once. If it's visible on first glance rather than felt on close inspection, it's too much.

## Spacing & layout

- Generous whitespace between modules — this is the primary tool for scannability, more than any color/type choice. Suggested: 4–6rem vertical gap between major sections (Bio / Experience / Projects), 2–2.5rem between individual experience or project entries within a section.
- Single-column, centered content column (max-width ~720–800px) for a linear, easy-to-scan read. No multi-column grid for experience entries; projects *may* use a 2-column grid on wide viewports since they're more visually self-contained (see `components.md`).
- Consistent left-aligned text (no centered body paragraphs) — centered text hurts scannability at length.

## Interactive states

- Links (resume link, project links): `--color-ink` text with an underline using `--color-line` or `--color-accent`, no color change on hover — instead, thicken/darken the underline or shift to `--color-accent`. Keeps the whole page monochrome-charcoal rather than introducing link-blue.
- Focus states: visible outline (`--color-accent`, 2px, offset) for keyboard accessibility — never remove focus outlines without replacing them.
