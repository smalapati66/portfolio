# Recruiter Conversion Pass Specification

## Objective

Implement the user's critique decisions so a first-time recruiter immediately understands Siddarth's engineering specialty, can open the résumé deliberately, and can inspect the source for Hoops 2 Head 2.

## Resolved decisions

- **Hero priority:** Engineering specialty, ahead of academic affiliation.
- **Project proof:** Source repository for Hoops 2 Head 2.
- **Scope assumption:** Address the three recruiter-conversion findings only (specialty-first hero, prominent résumé CTA, explicit project destinations). Do not add texture or alter the tech-stack hierarchy in this pass.

## Requirements

### 1. Specialty-first hero

- Replace the location-only tagline with: `Software engineer · fintech infrastructure & real-time systems`.
- Replace the generic bio with concise factual copy grounded in the existing experience: `I build reliable software for financial workflows and real-time products. I'm a senior at the University of Chicago studying Applied Math and Computer Science.`
- Retain Chicago in a lower-emphasis supporting line only if it remains useful; do not let it replace the specialty.
- Keep the University of Chicago seal as a supporting credential, not the hero's competing focal point.

### 2. Explicit résumé action

- Change the visible label to `View résumé (PDF)` with the existing new-tab behavior.
- Preserve the monochrome charcoal visual system. The action must be clearly more discoverable than a plain inline link, without becoming a loud, rounded marketing button.
- Keep keyboard focus and touch-target behavior intact.

### 3. Explicit project proof paths

- Add `repoUrl` to Hoops 2 Head 2 using `https://github.com/vmittal27/hoops-head2head`.
- Make the visible actions explicit: `Live demo ↗` and `Source ↗`.
- Add the supplied factual note `Contributor` adjacent to the source path or project metadata; do not imply ownership.
- Do not make the entire project card an ambiguous link. Keep card content readable while each destination is independently keyboard accessible.

## Constraints

- No new dependencies, invented credentials, or external claims beyond the supplied repository/contributor role.
- Preserve typed, data-driven content and the existing palette tokens.
- Maintain semantic headings, responsive single-column mobile behavior, visible focus, and existing target-size treatment.

## Acceptance criteria

- `npm run build` succeeds.
- The first hero view names engineering specialty and exposes `View résumé (PDF)`.
- Hoops 2 Head 2 shows distinct Live demo and Source links; Source uses the supplied GitHub URL and contributor note.
- All new or modified links remain keyboard-focusable and meet the shared target-size treatment.
