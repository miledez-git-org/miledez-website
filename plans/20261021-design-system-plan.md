# Notus Teal Migration — Plan

Branch: `20261021-design-system` · Started 2026-10-21

## Goal

Replace the legacy burgundy palette (`brand-*`, `neutral-*`, `semantic-*`, `accent-*` tokens, `--brand-*` CSS vars, hardcoded hex/rgba) on every live surface with the Notus Teal palette from the global design reference (`~/light-design-system/`), then delete the legacy tokens.

**Colors only.** Layouts, spacing, sizes and radii stay as they are, so alignment does not move. The section-layout redesign from `mockups/landing-a.html` / `landing-b.html` is a separate piece of work.

## Starting point

- `components/ui/tokens/generated-theme.ts` already carries the Notus Teal scales (`body`, `zinc`, `emerald`, `amber`, `rose`, `sky`) next to the legacy tokens. No live component uses them yet, except `HeroPipeline`.
- 83 of 149 TS/TSX files are reachable from `app/` routes. 39 of those carry legacy colors (~400 class usages, plus hex/rgba in `WorkflowVisual/*` and `--brand-accent` in `app/globals.css`).
- 64 files are dead (not imported by any route), e.g. `WorkflowTiersDemo`, `HeroAutomationDiagram`, most of `components/ui/{cards,feedback,navigation,typography,data-display}`. They are **not migrated**. Deleting them is a separate decision for the user.
- Two classes reference tokens that were never defined (`border-brand-border`, `bg-brand-border/30`, `text-brand-text`) and render with no color today. They map like any other legacy class.

## Mapping table

| Legacy | Notus Teal | Rule |
|---|---|---|
| `bg-brand-primary` | `bg-zinc-900` | Only brand fill (rule 2) |
| `hover:bg-brand-primary-dark` | `hover:bg-zinc-800` | |
| `text-brand-primary`, `border-brand-primary` | `text-zinc-900`, `border-zinc-900` | Ink |
| `bg-brand-primary-subtle` | `bg-zinc-100` | |
| `ring-brand-primary/NN`, `ring-accent-slate*` | `ring-zinc-900/20` (inputs), `ring-zinc-900` (focus-visible) | DS input/button focus |
| `text-brand-black`, `text-neutral-900` | `text-zinc-900` on headings, `text-body` on body copy | D-036 |
| `text-neutral-600/700/800`, `text-brand-muted`, `text-brand-text` | `text-body` | D-036 — never a teal zinc shade |
| `text-neutral-500` | `text-zinc-500` | Muted; never on `zinc-100` (D-029a) |
| `text-neutral-400/300/200` | `text-zinc-400/300/200` | Placeholder/disabled/decoration only |
| `border-neutral-200`, `border-brand-border` | `border-zinc-200` | Outer borders |
| `border-neutral-300/400` | `border-zinc-300` | Never darker than 300 (rule 3) |
| `bg-neutral-50/100/200/300` | `bg-zinc-50/100/200/300` | |
| `bg-neutral-800/900/950` | `bg-zinc-800/900/950` | |
| `bg-accent-slate` (checked/active) | `bg-zinc-900` | |
| `accent-accent-slate`, `accent-brand-primary` | `accent-zinc-900` | Native checkbox/radio |
| `semantic-error` (text / border / ring) | `text-rose-600` / `border-rose-300` + `bg-rose-50` / `ring-rose-500/20` | DS error input, D-028 |
| `bg-semantic-success` | `bg-emerald-600` | |
| `gray-*`, `red-*`, `green-*`, `blue-*` | `zinc-*`, `rose-*`, `emerald-*`, `sky-*` | Palette only |
| Hex / rgba in components | Tailwind utilities, or `theme('colors.…')` in CSS | No hardcoded hex |
| `--brand-accent`, `--brand-accent-dark` | `theme('colors.zinc.900')`, `theme('colors.zinc.800')` | |

## Phases

1. **Foundation** — `app/globals.css`: `--brand-*` vars, `::selection`, global focus outline, `.btn-*` classes, skeleton shimmer, footer texture, all via `theme()`. Verify: lint + build, no burgundy left in `globals.css`. (`--bg-*`/`--border-*` vars and `.card-*` are unused and go in cleanup.)
2. **UI primitives** — live files in `components/ui/` (Button, Input, Textarea, Select, Checkbox, Radio, Toggle, Modal, Accordion, Sidebar, Timeline, EmptyState, Progress). Verify: grep for legacy tokens in these files returns zero.
3. **Site chrome** — Header, Footer, RootShell, ContactModal, RouteError, LegalPage, Skeleton, ScrollProgress, `lib/utils.ts`. Verify: screenshot header + modal at 1280 and 500 px.
4. **Homepage sections** — HomePage (hero, final CTA), PainPointSection, WorkflowExplainerSection, BusinessProfilesSection, ProcessSection, PricingSection, FAQSection. Verify: full-page screenshot PT + EN.
5. **Industry pages + WorkflowVisual** — `IndustryPage`, `ChallengeCard`, `IndustryIntegrations`, `IndustriasContent`, `WorkflowVisual/*` (hex/rgba → utilities). Verify: screenshots of /industrias, /saude, /servicos, /agronegocio.
6. **AssessmentTool** — `/avaliacao` (not linked from nav). Verify: walk all 4 steps.
7. **Cleanup** — remove legacy `brand/accent/neutral/semantic` colors from `generated-theme.ts` and `--brand-*`/`--bg-*` vars from `globals.css`, the colored glow shadows from `tailwind.config.ts` (dead files only, rule 4); guard grep returns zero on live files; update `website/CLAUDE.md` migration-state paragraph and memory; deploy via CLI after merge.

8. **Type, radius and shadow tokens** (user approved 2026-10-21, after colors are done). See below.

## Out of scope (decide later)

- **Type, radius and shadow tokens → Phase 8.** `generated-theme.ts` overrides `fontSize` without line heights, `rounded-md` = 4px (DS/Tailwind 6px) and replaces the `shadow-*` scale with layered shadows. Aligning them changes spacing and alignment on every page, so it needs its own pass with screenshots.
- Dead components (64 files): list for deletion, user confirms.
- Layout redesign from mockups A/B.

## Guard grep (live files)

```bash
grep -rnE "(brand|neutral|semantic|accent)-(primary|black|muted|border|text|slate|success|warning|error|info|[0-9]{2,3})|\b(gray|red|green|blue)-[0-9]{2,3}|#[0-9a-fA-F]{6}\b|rgba\(" <live files>
```

## Decisions made during execution

- Header wordmark: letters `text-body`, ampersand `text-zinc-900` (teal ink, user choice). Keeps the two-tone mark.
- Hero accent line uses the mockup-B gradient (`from-zinc-700 to-zinc-600`, hero display only, rule 8). Section-title accent spans become plain `zinc-900`, as in both mockups.
- `bg-bg-muted` never existed as a class (all sections rendered white); it now maps to `bg-zinc-50`, giving the alternating bands the mockups use.
- Inline directional card shadows (`4px 6px 16px rgba(...)`) → `shadow-sm`; dropdown overlay → `shadow-xl` (rule 4).
- `AssessmentTool` result cards were all dark (rule 8: max one dark card per grid) → light bordered cards.
- `RouteError` secondary button `btn-secondary` (dark) → `btn-outline`, so only one dark button per view.
- Only `WorkflowVisualCompact` is rendered from `components/WorkflowVisual/`; `WorkflowVisual`, `WorkflowStep`, `WorkflowCard`, `WorkflowCardFlow` are exported but unused, so they count as dead.
- Not migrated: `public/validador-esocial.html` (standalone sales page, still burgundy).
- Phase 8 (2026-10-22): every type/radius/shadow override in `generated-theme.ts` dropped in favor of Tailwind's defaults, which the design system uses (`docs/tokens.json`). Changes: `text-*` sizes now carry their default line heights, `leading-tight` 1.15 → 1.25, `leading-snug` 1.3 → 1.375, `rounded-md` 4 → 6 px, `shadow-sm/md/lg/xl` layered → Tailwind scale, unused `shadow-card*` and `tracking-logo` gone. Page heights moved by under 40 px on all 15 routes at 1280 and 500 px; no alignment breaks in the before/after screenshots.
