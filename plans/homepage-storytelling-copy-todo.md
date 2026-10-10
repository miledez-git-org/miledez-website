# Homepage Storytelling Copy — Todo

> Plan: [homepage-storytelling-copy-plan.md](./homepage-storytelling-copy-plan.md)

## Decisions (before coding)
- [x] Choose hero headline (A / B / C)
- [x] Confirm offer terms (free development + test before subscribing)
- [x] Provide recalculated ROI estimates + assumptions for 3 cards
- [x] Provide founder name + photo
- [x] Confirm response time, support channel, error monitoring
- [x] Confirm FAQ facts: data hosting/LGPD, cancellation, system limits
- [x] Decide on industry-page metrics (source or remove)

## Dictionary (`lib/i18n/pt.ts`)
- [x] Rewrite `home.meta`
- [x] Rewrite `home.hero` + `home.diagram.items`
- [x] Rewrite `home.pain` (3 scene-based points)
- [x] Rewrite `home.explainer`: reorder workflows, add `solves` + `before`, remove `modules`, rename Jurídico → Escritórios
- [x] Rewrite `home.profiles`: 3 cards, add `automation` + `assumption`, new labels
- [x] Rewrite `home.process`: `titleLead`/`titleAccent`, promise card, 4 steps
- [x] Rewrite `home.pricing`: add `tiers[].example`, `included`, `ctaNote`
- [x] Add `home.faq` (7 Q&As, incl. "E se eu não gostar do teste?")
- [x] Rewrite `home.cta`, add `founder` + `note`
- [ ] Remove `home.value` (kept: deleting needs owner confirmation, see Follow-ups)
- [x] Update `header.industries` → "Setores"
- [x] Rewrite `contactModal` title, intro, placeholder, submit, successText
- [x] Unify CTA label to "Quero minha automação grátis" everywhere
- [x] Update `industries.titleAccent` → "o seu setor"
- [x] Update industry pages `heroCta`, `ctaButton`, `ctaText`, metrics block

## Components
- [x] `HomePage.tsx`: reorder sections, remove ValuePropositionB, hero secondary → `#problemas`, `#perfis` → `#quanto-vale`, founder line + note in final CTA
- [x] `WorkflowExplainerSection.tsx`: `solves` tag, `before` line, drop module count
- [x] `BusinessProfilesSection.tsx`: 3-column grid, automation line, assumption footnote, `text-xs` → `text-sm`
- [x] `ProcessSection.tsx`: lead + accent title
- [x] `PricingSection.tsx`: per-tier example, included row, CTA note
- [x] Create `FAQSection.tsx` with `ui/layout/Accordion`
- [x] Swap section backgrounds for white/muted alternation
- [x] Fix any in-page anchors that pointed to `#valor` or `#perfis`

## English parity
- [x] Mirror all shape changes in `lib/i18n/en.ts` (placeholder or translated)

## Verify
- [x] Run the AI-tells self-check on the final PT copy
- [x] `pnpm run lint` and `tsc` pass
- [x] `pnpm run build` (dev server stopped)
- [x] Visual check at desktop + mobile widths

## Follow-ups
- [ ] Owner verifies drafted FAQ facts (data, cancellation, response time, support channel)
- [ ] Owner decides whether to delete `ValuePropositionB.tsx` + `home.value`
- [ ] Replace estimate cards with real case results after the first pilots
