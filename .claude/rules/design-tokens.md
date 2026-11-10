---
paths:
  - "components/**"
  - "app/**/*.css"
  - "tailwind.config.*"
---

# Design tokens

- Palette: Notus Teal from `design-system-agency/docs/palette-teal.js`, vendored in `components/ui/tokens/generated-theme.ts` (`body`, `zinc`, `emerald`, `amber`, `rose`, `sky` only).
- Markup uses raw `zinc/emerald/amber/rose/sky` utilities. Headings and ink `zinc-900`, body copy `text-body`, muted `zinc-500`. In CSS use `theme('colors.zinc.900')`, never hex.
- Accent (D-048): `sky` is the brand accent and the info hue. The one primary button per view is `.btn-primary` (`sky-700`, hover `sky-800`); secondary actions are `.btn-secondary` (teal `zinc-900`) or `.btn-outline`; text links `text-sky-700`; icons and large accent text `sky-600`; on dark surfaces the primary is `.btn-inverted` (`sky-300`, `zinc-950` label) and muted text `zinc-300`.
- Surfaces (rule 13, D-049): sections alternate white and `bg-zinc-100 border-y border-zinc-200`; card grids sit on the band; a card on white carries `border border-zinc-200 shadow-sm`; toolbars and filters sit in a tinted strip; the footer is `bg-zinc-950` dark chrome.
- Light theme only, Inter, no hardcoded hex in components. Copy demo markup via the design-system doc's Copy HTML buttons; never ship its Tailwind CDN script tag.
- Type, radius and shadow use Tailwind's default scales, as in the design system; do not add overrides to `generated-theme.ts`.
- `public/validador-esocial.html` is a standalone page styled by `public/validador-esocial.css`, compiled from this repo's Tailwind config by `pnpm run build:validador` (also run by `pnpm run build`). Rerun it after editing the page, then commit the CSS.
