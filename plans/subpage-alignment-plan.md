# Sub Page Alignment with Homepage Design System

## Context
The homepage establishes a clear structural design language (max-w-7xl containers, py-28/py-40 spacing, full-height hero, brand tokens). The 3 industry pages (saude, servicos, agronegocio) and 2 legal pages (termos, politica-privacidade) deviate in multiple ways — narrower containers, tighter spacing, hardcoded colors, and component-level violations of CLAUDE.md rules. Goal: bring sub pages into structural coherence with the homepage while respecting their content differences.

---

## Industry Pages (saude, servicos, agronegocio)

All 3 share an identical template. Changes apply to all 3 content files + 3 shared components.

### Container & Spacing

- **`max-w-6xl` → `max-w-7xl`** on all 6 section wrappers per page (18 total). CLAUDE.md explicitly says max-w-6xl breaks left-edge alignment with the hero.
- **`py-24 md:py-32` → `py-28 md:py-40`** on all non-hero sections (5 per page, 15 total). Matches homepage vertical rhythm.
- **Heading margin `mb-12 md:mb-14` → `mb-14 md:mb-16`** on section heading wrappers (4 per page). Matches homepage component spacing.

### Hero Section

- **Full-height hero**: change `pt-28 md:pt-40 pb-20 md:pb-28` → `min-h-screen flex items-center pt-24 md:pt-0`. Currently the hero floats in the upper portion; full-height with vertical centering matches homepage impact.
- **CSS Grid layout**: change `flex flex-col lg:flex-row gap-12 lg:gap-16` → `grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-10 items-center`. Matches homepage grid pattern.
- **H1 size**: `lg:text-[3.5rem]` → `lg:text-6xl` (3.75rem). Match homepage scale.
- **Hardcoded hex → brand token**: `border-[#274855]` → `border-brand-black`, `text-[#274855]` → `text-brand-black` on the hero tag/label. Never hardcode hex.

### ChallengeCard.tsx

- **Remove orange accent bar** (`<div className="absolute top-0 ...bg-brand-secondary" />`). No homepage card uses accent bars — shadow already provides differentiation.
- **Remove colored icon container**: `bg-brand-secondary-subtle text-brand-secondary` → just `text-brand-primary`. CLAUDE.md rule: "Never wrap icons in colored background containers."

### MetricsGrid.tsx

- **Metric value color**: `text-brand-secondary` → `text-brand-primary`. Homepage doesn't use orange for large display numbers. Orange should be reserved for CTAs and sparse accent moments — using it on every metric dilutes impact.
- **Label weight**: `text-lg font-semibold` → `text-lg font-medium`. Reduce competition with the metric value above.

### IndustryIntegrations.tsx

- **Mobile label size**: `text-[11px]` → `text-sm` (14px). CLAUDE.md minimum is 14px for low-priority info. 11px is a violation.

### CTA Section

- **Narrow container**: change CTA section inner div from `max-w-7xl` to `max-w-3xl`. Homepage CTA intentionally uses `max-w-3xl` for focused call-to-action. This is the one section where narrower is correct.

---

## Legal Pages (termos, politica-privacidade)

Document pages — deliberately different layout (narrow prose, no animations). Only token/consistency fixes.

- **H1 + H2 color**: `text-neutral-900` → `text-brand-black`. Every other heading on the site uses brand-black; neutral-900 clashes with the teal-tinted palette.
- **Responsive padding**: `pt-32 pb-20` → `pt-32 pb-20 md:pt-40 md:pb-28`. Fixed padding doesn't adapt to larger screens.
- **Keep `max-w-3xl`** — correct for long-form prose readability. No change needed.

---

## Files to Modify

| File | Changes |
|------|---------|
| `components/industry/ChallengeCard.tsx` | Remove accent bar, remove icon bg container |
| `components/industry/MetricsGrid.tsx` | Metric value color, label weight |
| `components/industry/IndustryIntegrations.tsx` | Mobile label min font size |
| `app/saude/SaudeContent.tsx` | Container, padding, hero, headings, tokens, CTA width |
| `app/servicos/ServicosContent.tsx` | Same as saude (identical template) |
| `app/agronegocio/AgronegocioContent.tsx` | Same as saude (identical template) |
| `app/termos/page.tsx` | Heading colors, responsive padding |
| `app/politica-privacidade/page.tsx` | Heading colors, responsive padding |

## Implementation Order

1. Shared components first (ChallengeCard, MetricsGrid, IndustryIntegrations)
2. One industry page (SaudeContent) as template
3. Apply same changes to ServicosContent + AgronegocioContent (mechanical find-replace)
4. Legal pages
5. Visual verification with Puppeteer at each breakpoint
