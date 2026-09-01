# Audit Remediation Specification

## Objective

Resolve the actionable findings from the Impeccable technical audit while preserving the portfolio's quiet charcoal-art system, its single-page information order, and its data-driven content model.

## Scope

### 1. Accessible contact and action links

All primary links must expose an easy-to-hit target on touch devices without making the page look button-heavy.

- Apply the shared target treatment to the email, LinkedIn, resume, experience-company, project, and footer links.
- Each link target must be at least 24 by 24 CSS pixels. Preserve the existing visible underline behavior and keyboard focus ring.
- On coarse-pointer devices, expand targets to 44px high where this does not cause adjacent links to collide.
- Do not rely on hover to reveal an action; hover remains a visual enhancement only.

### 2. Right-size the University of Chicago seal

- Replace the current 2493px PNG with a transparent, compressed WebP sized for its 84px desktop / 68px mobile display (approximately 168px square for 2x density).
- Keep the existing meaningful alt text, fixed CSS dimensions, and blend behavior.
- Update the hero image import to the optimized asset and remove the superseded source asset.

### 3. Minimal footer

- Add a semantic `<footer>` after Tech Stack.
- Reuse the existing typed bio contact data: email and LinkedIn only. Do not invent a GitHub URL or new biographical claims.
- Render it as a quiet plain-text contact row using the existing `--color-ink-soft` and divider token. External links open safely in a new tab.

## Constraints

- No new runtime dependencies.
- Preserve the off-white/charcoal palette and the existing seven color tokens.
- Maintain one H1, H2 section hierarchy, semantic sections/articles, and the existing responsive one-column mobile layout.
- Use no decorative buttons, icons, or new calls to action.

## Acceptance criteria

- `npm run build` succeeds.
- The seal asset is about 168px square, uses WebP, and is materially smaller than 260 KB.
- At 320px wide, no horizontal overflow occurs and every interactive target meets the defined size treatment.
- Keyboard focus remains clearly visible on all links.
- The footer is present after Tech Stack and contains exactly the supplied contact destinations.
