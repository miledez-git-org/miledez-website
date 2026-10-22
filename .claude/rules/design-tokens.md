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
- Pending migration (tracked in KB `20261021-open-issues`): the type/radius/shadow tokens in `generated-theme.ts` differ from the reference; files not imported by any route (`WorkflowTiersDemo`, `WorkflowVisual/WorkflowStep`, most of `components/ui/cards`) and `public/validador-esocial.html` still carry legacy burgundy tokens. Mapping table: `plans/20261021-design-system-plan.md`.
