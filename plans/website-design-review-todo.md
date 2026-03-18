# Website Design & Content Review — Todo

> Plan: [website-design-review-plan.md](./website-design-review-plan.md)

---

## A. Content Reduction

- [ ] A1 — Remove PainPointSection from homepage (`app/page.tsx`)
- [ ] A2 — Remove BusinessProfilesSection from homepage (`app/page.tsx`)
- [ ] A3 — Cut ValuePropositionB left column prose to 2 sentences max (`components/ValuePropositionB.tsx`)
- [ ] A4 — Reduce ValuePropositionB benefits from 6 → 4 (cut "Feito para o Brasil" + "100% personalizado")
- [ ] A5 — Reduce LogoGrid from 32 → 16-20 logos (`components/LogoGrid.tsx`)
- [ ] A6 — Simplify final CTA section to headline + button only (`app/page.tsx`)
- [ ] A7 — Confirm new homepage section order: Hero → WorkflowExplainer → ValueProp → LogoGrid → Process → Pricing → CTA → Footer

## B. Design Consistency Fixes

- [ ] B1 — Header logo accent: `#d14800` → `brand-primary` (#eb5100) (`components/Header.tsx`)
- [ ] B2 — Header background: hardcoded `#274855` → `bg-brand-black` (`components/Header.tsx`)
- [ ] B3 — Footer background: hardcoded `#274855` → `bg-brand-black` (`components/Footer.tsx`)
- [ ] B4 — globals.css: `--brand-accent` from `#d14800` → `#eb5100` (`app/globals.css`)
- [ ] B5 — PainPointSection heading: remove hardcoded `text-[#274855]` span (if section kept)
- [ ] B6 — PainPointSection icons: remove `bg-brand-primary-subtle` containers (if section kept)
- [ ] B7 — WorkflowExplainerSection: `text-[13px]` → `text-sm` (`components/WorkflowExplainerSection.tsx`)
- [ ] B8 — ScrollProgress bar: `bg-[#274855]` → `bg-brand-black` (`components/ScrollProgress.tsx`)
- [ ] B9 — ProcessSection heading: hardcoded `#274855` → `text-brand-black` (`components/ProcessSection.tsx`)
- [ ] B10 — ValuePropositionB heading: hardcoded `#274855` → Tailwind class (`components/ValuePropositionB.tsx`)
- [ ] B11 — Header nav active underline: `#d14800` → `brand-primary` (`components/Header.tsx`)
- [ ] B12 — Header "Contato" button: `#d14800` → `bg-brand-primary` (`components/Header.tsx`)
- [ ] B13 — Icon containers: remove `bg-brand-primary-subtle` wrappers on all ChallengeCards across industry pages

## C. Copy & CTA Consistency

- [ ] C1 — Hero CTA: "Agendar demonstração" → "Agendar conversa" (`app/page.tsx`)
- [ ] C2 — Hero secondary CTA: "Ver casos de uso" → "Como funciona" (update anchor href too)
- [ ] C3 — Pricing heading: simplify to "Quanto custa" or "Investimento" (`components/PricingSection.tsx`)
- [ ] C4 — Final CTA button: "Quero testar grátis" → "Agendar conversa" (`app/page.tsx`)
- [ ] C5 — Pricing CTA: "Falar com a gente" → "Falar conosco" (`components/PricingSection.tsx`)
- [ ] C6 — Audit all CTA labels site-wide — enforce max 2 labels: "Agendar conversa" (primary) + "Falar conosco" (secondary)
- [ ] C7 — Industry page final CTA subtext: customize per vertical or remove generic copy
- [ ] C8 — Industry workflow section titles: standardize to industry-specific naming
- [ ] C9 — Hero subheadline: cut "Conectamos seus sistemas e" — keep "Automatizamos os processos que tomam seu tempo."

## D. Structural & Layout

- [ ] D1 — Reorder homepage sections per new flow after A1+A2 removals
- [ ] D2 — Standardize section padding to `py-24 md:py-32` across homepage
- [ ] D3 — Left-align pricing heading after copy simplification (C3)
- [ ] D4 — Footer: remove or reduce `min-h-[50vh]` / `min-h-[40vh]`
- [ ] D5 — Update CLAUDE.md: `varejo/` → `agronegocio/` in project structure

## E. Verification

- [ ] E1 — `npm run build` passes without errors
- [ ] E2 — Puppeteer screenshots of all 4 pages at 1440px — visual comparison
- [ ] E3 — Mobile viewport (375px) check for all pages
- [ ] E4 — All CTA buttons open ContactModal correctly
- [ ] E5 — Header nav links work (3 industry pages + Preços anchor + Contato)
- [ ] E6 — Grep confirms zero remaining hardcoded `#274855`, `#d14800`, `#6ee7b7`
