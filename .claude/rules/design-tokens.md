---
paths:
  - "components/**"
  - "app/**/*.css"
  - "tailwind.config.*"
---

# Design tokens

- Palette: Notus Teal from `design-system-agency/docs/palette-teal.js`, vendored in `components/ui/tokens/generated-theme.ts` (`body`, `zinc`, `emerald`, `amber`, `rose`, `sky` only).
- Markup uses raw `zinc/emerald/amber/rose/sky` utilities. Headings and ink `zinc-900`, body copy `text-body`, muted `zinc-500`. In CSS use `theme('colors.zinc.900')`, never hex.
- Light theme only, Inter, no hardcoded hex in components. Copy demo markup via the design-system doc's Copy HTML buttons; never ship its Tailwind CDN script tag.
- Type, radius and shadow use Tailwind's default scales, as in the design system; do not add overrides to `generated-theme.ts`.
- Pending migration (tracked in root `plans/agency-roadmap-todo.md`, V3): `public/validador-esocial.html` still carries the legacy burgundy palette.
