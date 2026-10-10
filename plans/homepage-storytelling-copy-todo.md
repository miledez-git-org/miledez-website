# Homepage Storytelling Copy — Todo

> Plan: [homepage-storytelling-copy-plan.md](./homepage-storytelling-copy-plan.md)

## Decisions (before coding)
- [ ] Choose hero headline (A / B / C)
- [ ] Confirm offer terms (free development + test before subscribing)
- [ ] Provide recalculated ROI estimates + assumptions for 3 cards
- [ ] Provide founder name + photo
- [ ] Confirm response time, support channel, error monitoring
- [ ] Confirm FAQ facts: data hosting/LGPD, cancellation, system limits
- [ ] Decide on industry-page metrics (source or remove)

## Dictionary (`lib/i18n/pt.ts`)
- [ ] Rewrite `home.meta`
- [ ] Rewrite `home.hero` + `home.diagram.items`
- [ ] Rewrite `home.pain` (3 scene-based points)
- [ ] Rewrite `home.explainer`: reorder workflows, add `solves` + `before`, remove `modules`, rename Jurídico → Escritórios
- [ ] Rewrite `home.profiles`: 3 cards, add `automation` + `assumption`, new labels
- [ ] Rewrite `home.process`: `titleLead`/`titleAccent`, promise card, 4 steps
- [ ] Rewrite `home.pricing`: add `tiers[].example`, `included`, `ctaNote`
- [ ] Add `home.faq` (6 Q&As)
- [ ] Rewrite `home.cta`, add `founder` + `note`
- [ ] Remove `home.value`
- [ ] Update `header.industries` → "Setores"
- [ ] Rewrite `contactModal` title, intro, placeholder, submit, successText
- [ ] Unify CTA label to "Quero minha automação grátis" everywhere
- [ ] Update `industries.titleAccent` → "o seu setor"
- [ ] Update industry pages `heroCta`, `ctaButton`, `ctaText`, metrics block

## Components
- [ ] `HomePage.tsx`: reorder sections, remove ValuePropositionB, hero secondary → `#problemas`, `#perfis` → `#quanto-vale`, founder line + note in final CTA
- [ ] `WorkflowExplainerSection.tsx`: `solves` tag, `before` line, drop module count
- [ ] `BusinessProfilesSection.tsx`: 3-column grid, automation line, assumption footnote, `text-xs` → `text-sm`
- [ ] `ProcessSection.tsx`: lead + accent title
- [ ] `PricingSection.tsx`: per-tier example, included row, CTA note
- [ ] Create `FAQSection.tsx` with `ui/layout/Accordion`
- [ ] Swap section backgrounds for white/muted alternation
- [ ] Fix any in-page anchors that pointed to `#valor` or `#perfis`

## English parity
- [ ] Mirror all shape changes in `lib/i18n/en.ts` (placeholder or translated)

## Verify
- [ ] Run the AI-tells self-check on the final PT copy
- [ ] `pnpm run lint` and `tsc` pass
- [ ] `pnpm run build` (dev server stopped)
- [ ] Visual check at desktop + mobile widths
