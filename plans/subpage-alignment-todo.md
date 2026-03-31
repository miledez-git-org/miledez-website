# Sub Page Alignment — Todo

> Plan: [subpage-alignment-plan.md](./subpage-alignment-plan.md)

## Phase 1: Shared Components

- [x] ChallengeCard.tsx — remove orange top accent bar
- [x] ChallengeCard.tsx — remove bg-brand-secondary-subtle icon container, use text-brand-primary only
- [x] MetricsGrid.tsx — change metric value color from text-brand-secondary to text-brand-primary
- [x] MetricsGrid.tsx — reduce label weight from font-semibold to font-medium
- [x] IndustryIntegrations.tsx — change mobile label from text-[11px] to text-sm

## Phase 2: Industry Pages — SaudeContent (template)

- [x] Replace all max-w-6xl with max-w-7xl (6 occurrences)
- [x] Replace py-24 md:py-32 with py-28 md:py-40 (5 sections)
- [x] Hero: change to min-h-screen flex items-center pt-24 md:pt-0
- [x] Hero: change flex layout to grid grid-cols-1 lg:grid-cols-[3fr_2fr]
- [x] Hero H1: change lg:text-[3.5rem] to lg:text-6xl
- [x] Hero tag: border-[#274855] → border-brand-black, text-[#274855] → text-brand-black
- [x] Heading margins: mb-12 md:mb-14 → mb-14 md:mb-16 (4 occurrences)
- [x] CTA section: change inner container to max-w-3xl

## Phase 3: Industry Pages — Apply to Remaining

- [x] ServicosContent.tsx — apply same changes as SaudeContent
- [x] AgronegocioContent.tsx — apply same changes as SaudeContent

## Phase 4: Legal Pages

- [x] termos/page.tsx — H1 + H2: text-neutral-900 → text-brand-black
- [x] termos/page.tsx — padding: add md:pt-40 md:pb-28
- [x] politica-privacidade/page.tsx — H1 + H2: text-neutral-900 → text-brand-black
- [x] politica-privacidade/page.tsx — padding: add md:pt-40 md:pb-28

## Phase 5: Verification

- [x] pnpm run build — no errors
- [x] Puppeteer screenshots (Tailwind CSS rendering issues in Puppeteer — icons/logos render oversized without class constraints — pre-existing, not related to changes)
- [x] Grep verification: zero remaining instances of old patterns (max-w-6xl, hardcoded #274855, py-24 md:py-32, text-neutral-900, bg-brand-secondary-subtle, text-[11px])
