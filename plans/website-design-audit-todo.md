# mil&dez Website Design Audit — Todo

> Plan: [website-design-audit-plan.md](./website-design-audit-plan.md)

## Phase 1: Critical Fixes (token/color correctness)

- [ ] Fix `--brand-accent` in `app/globals.css` (#d14800 -> #eb5100)
- [ ] Fix `--brand-accent-dark` in `app/globals.css` (#b33d00 -> #c74400)
- [ ] Replace hardcoded `#274855` with `brand-black` Tailwind classes (~30 files)
  - [ ] `components/Header.tsx` — backgroundColor inline style
  - [ ] `components/Footer.tsx` — backgroundColor inline style
  - [ ] `components/PainPointSection.tsx` — text-[#274855]
  - [ ] `components/BusinessProfilesSection.tsx` — bg-[#274855]
  - [ ] `components/PricingSection.tsx` — text and bg references
  - [ ] `app/saude/SaudeContent.tsx` — badge text
  - [ ] `app/servicos/ServicosContent.tsx` — badge text
  - [ ] All remaining files (WorkflowCard, WorkflowStep, FlipCardsSection, etc.)
- [ ] Replace hardcoded `#d14800` with `brand-primary` classes
  - [ ] `components/Header.tsx:90` — "&" logo text
- [ ] Fix undefined `--font-inter` -> `--font-manrope` in WorkflowCard.tsx and WorkflowCardFlow.tsx
- [ ] Fix `border-brand-border` -> `border-neutral-200` in ContactModal.tsx

## Phase 2: Typography Compliance

- [ ] Replace all `text-xs` with `text-sm` across the codebase (77 instances)
  - [ ] `components/Footer.tsx`
  - [ ] `components/Header.tsx`
  - [ ] `components/TestimonialCarousel.tsx`
  - [ ] `components/BenefitsSection.tsx`
  - [ ] `components/ScrollProgress.tsx`
  - [ ] `components/industry/IndustryIntegrations.tsx`
  - [ ] `components/industry/MetricsGrid.tsx`
  - [ ] `components/WorkflowVisual/WorkflowCard.tsx`
  - [ ] `components/ui/primitives/Button.tsx`
  - [ ] `components/ui/feedback/Badge.tsx`
  - [ ] `components/ui/feedback/Tooltip.tsx`
  - [ ] `components/ui/data-display/Table.tsx`
  - [ ] `components/ui/typography/Overline.tsx`
  - [ ] `components/ui/typography/Text.tsx`
  - [ ] All remaining files with text-xs
- [ ] Fix Terms page H2s: add `heading-display`, change `text-neutral-900` -> `text-brand-black`
- [ ] Fix Privacy page H2s: add `heading-display`, change `text-neutral-900` -> `text-brand-black`
- [ ] Replace inline `fontFamily` styles with Tailwind font classes (13 instances)
  - [ ] `components/Header.tsx`
  - [ ] `components/WorkflowExplainerSection.tsx`
  - [ ] `components/WorkflowVisual/WorkflowCard.tsx`
  - [ ] `components/WorkflowVisual/WorkflowCardFlow.tsx`
  - [ ] `components/IntegrationMesh.tsx`

## Phase 3: Alignment Standardization

- [ ] Convert PainPointSection heading to left-aligned
- [ ] Convert WorkflowExplainerSection heading to left-aligned
- [ ] Convert PricingSection heading to left-aligned
- [ ] Convert TestimonialCarousel heading to left-aligned
- [ ] Convert BusinessProfilesSection heading to left-aligned
- [ ] Convert LogoGrid heading to left-aligned
- [ ] Change homepage hero container from `max-w-7xl` to `max-w-6xl`
- [ ] Standardize section padding across homepage (`py-16 md:py-24`)
- [ ] Standardize section padding across industry pages to match homepage

## Phase 4: Minimalism & Polish

- [ ] Remove icon background containers from ChallengeCard (bare outline icons only)
- [ ] Remove decorative orange top-border from ChallengeCards
- [ ] Replace emoji in WorkflowCard with SVG icons
- [ ] Widen WorkflowExplainer pipeline to use full container width
- [ ] Investigate BusinessProfilesSection — why only 1 card visible at desktop
- [ ] Reduce excessive vertical whitespace between sections

## Verification

- [ ] Run `npm run build` — no errors
- [ ] Take screenshots at 1440px — compare before/after
- [ ] Grep: zero `text-xs` in active components
- [ ] Grep: zero `#274855` hardcoded
- [ ] Grep: zero `#d14800` hardcoded
- [ ] Grep: zero `font-inter` references
- [ ] All section headings left-aligned (except Final CTA)
- [ ] All buttons render correct orange (#eb5100)
- [ ] Mobile viewport (375px) — no layout breaks
