# Notus Teal Migration — Todo

> Plan: [20261021-design-system-plan.md](./20261021-design-system-plan.md)

## Phase 1 — Foundation
- [x] Point `--brand-accent` / `--brand-accent-dark` at `zinc-900` / `zinc-800` in `app/globals.css`
- [x] Replace hex/rgba in `::selection`, `.btn-*`, `.skeleton-shimmer`, `.card-*` with `theme()` values
- [x] Run lint + build

## Phase 2 — UI primitives
- [x] Button
- [x] Input, Textarea, Select
- [x] Checkbox, Radio, Toggle
- [x] Modal, Accordion, Sidebar, Timeline, EmptyState
- [x] Progress
- [x] Guard grep on `components/ui/` live files returns zero

## Phase 3 — Site chrome
- [x] Header
- [x] Footer, RootShell
- [x] ContactModal
- [x] RouteError, LegalPage, Skeleton, ScrollProgress, `lib/utils.ts`
- [x] Screenshot header + modal at 1280 and 500 px

## Phase 4 — Homepage sections
- [x] HomePage (hero, final CTA)
- [x] PainPointSection
- [x] WorkflowExplainerSection
- [x] BusinessProfilesSection
- [x] ProcessSection
- [x] PricingSection
- [x] FAQSection
- [x] Full-page screenshots PT + EN

## Phase 5 — Industry pages + WorkflowVisual
- [x] IndustryPage, ChallengeCard, IndustryIntegrations
- [x] IndustriasContent
- [x] WorkflowVisualCompact hex → utilities (the other WorkflowVisual/* components are exported but not rendered by any route)
- [x] Screenshots of /industrias, /saude, /servicos, /agronegocio

## Phase 6 — AssessmentTool
- [x] AssessmentTool classes
- [x] Walk steps 1–3 + validation error on /avaliacao (step 4 submit hits the live n8n webhook, not run)

## Phase 7 — Cleanup
- [x] Remove legacy colors from `generated-theme.ts` and the colored glow shadows from `tailwind.config.ts` (dead files only; rule 4 bans colored shadows)
- [x] Remove `--brand-*` / `--bg-*` / `--border-*` vars from `globals.css`
- [x] Guard grep on live files returns zero
- [x] Update `website/CLAUDE.md` migration-state paragraph + memory
- [ ] Merge, push, CLI deploy

## Phase 8 — Type, radius and shadow tokens (approved 2026-10-21, after colors)
- [ ] Compare `generated-theme.ts` fontSize/lineHeight/borderRadius/boxShadow against the reference and list the diffs
- [ ] Decide per token: adopt Tailwind/DS defaults or keep
- [ ] Apply, then screenshot every route at 1280 and 500 px and check alignment
