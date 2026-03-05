# Brand Color & Typography Overhaul — Todo

> Plan: [brand-color-overhaul-plan.md](./brand-color-overhaul-plan.md)

## Phase 1: Core Tokens & CSS Variables
- [x] Update `generated-theme.ts` brand colors (primary #eb5100, secondary #085042)
- [x] Update `globals.css` CSS variables and button shadows
- [x] Update `tailwind.config.ts` glow shadows

## Phase 2: Hardcoded Primary Color Replacements
- [x] FlipCardsSection.tsx — all #8b2020 and rgba(139,32,32)
- [x] ProcessSectionEnhanced.tsx — card bg + shadows
- [x] WorkflowCard.tsx — STEP_TYPE_COLORS.process
- [x] WorkflowCardFlow.tsx — LEGEND_ITEMS
- [x] WorkflowStep.tsx — connector color
- [x] WorkflowAutomationVisual.tsx — ACCENT_COLOR
- [x] WorkflowDemo.tsx — active variation
- [x] MetricsGrid.tsx — stat value #ff6600
- [x] monogram.svg — fill color
- [x] logo.svg — accent fill

## Phase 3: Secondary Color Application
- [x] Footer.tsx — bg-brand-secondary
- [x] PricingSection.tsx — card background #085042
- [x] AnalyticsDashboard.tsx — sparkline colors
- [x] WorkflowAnimationSection.tsx — connectors
- [x] Header.tsx — Contato button (desktop + mobile)
- [x] ValuePropositionB.tsx — benefit icons to teal

## Phase 4: Body Text Unification
- [x] app/page.tsx — text-brand-muted to text-neutral-600
- [x] WorkflowExplainerSection — subtitle + phase description
- [x] PricingSection — subtitle
- [x] ProcessSection — subtitle
- [x] ProcessSectionEnhanced — subtitle
- [x] LogoGrid — subtitle
- [x] WorkflowAnimationSection — subtitle
- [x] ValuePropositionB — benefit descriptions (neutral-500 to 600)
- [x] WorkflowStep — sublabel text
- [x] AnalyticsDashboard — body text
- [x] ServicosContent — all text-brand-text
- [x] VarejoContent — all text-brand-text

## Phase 5: Typography Size & Weight
- [x] MetricsGrid — stat label spacing mt-4 to mt-6
- [x] WorkflowCard — solo description text-[13px] to text-base

## Phase 6: Section Spacing
- [x] app/page.tsx — all sections py-24/36 to py-28/40 (hero unchanged)
- [x] WorkflowExplainerSection — py-24/36 to py-28/40
- [x] SaudeContent — py-20/28 to py-24/32
- [x] ServicosContent — py-20/28 to py-24/32
- [x] VarejoContent — py-20/28 to py-24/32

## Phase 7: Documentation & Verification
- [x] Update miledez-website CLAUDE.md
- [x] Update root CLAUDE.md
- [x] npm run build — verified passing
- [ ] Run conventions sync script
- [ ] Visual verification on dev server
