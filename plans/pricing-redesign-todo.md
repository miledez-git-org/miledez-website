# Pricing Section Redesign — Todo

> Plan: [pricing-redesign-plan.md](./pricing-redesign-plan.md)

## Data & Copy
- [ ] Rename tiers: Simples → Essencial, Media → Completa
- [ ] Rewrite all feature strings to outcome-focused Portuguese (zero English)
- [ ] Add `cta` label and `featured` badge support to tier interface
- [ ] Update section heading and subtitle copy

## Card Visual Overhaul
- [ ] Switch cards from dark bg (#274855) to white with border/shadow
- [ ] Add rounded-xl, proper border styles (orange for featured, neutral for others)
- [ ] Add "Mais popular" badge on featured tier
- [ ] Add md:-mt-4 vertical emphasis for featured card on desktop
- [ ] Increase grid gap from gap-6 to gap-8

## Typography & Sizing
- [ ] Tier name: text-sm → text-base with uppercase tracking
- [ ] Price: text-2xl → heading-display text-3xl md:text-4xl
- [ ] Period label: text-sm → text-base text-neutral-500
- [ ] Feature items: text-sm → text-base text-neutral-600
- [ ] Feature spacing: space-y-3 → space-y-4
- [ ] Checkmark icons: white → text-brand-primary

## CTA & Trust
- [ ] Add per-card CTA button (primary for featured, outline-brand for others)
- [ ] Remove standalone CTA button below grid
- [ ] Add trust signal strip with 3 risk-removers (shield, wallet, clock icons)

## Cleanup
- [ ] Replace all inline color styles with Tailwind classes
- [ ] Keep inline styles only for scroll-reveal animations
- [ ] Add whitespace-nowrap on price text

## Verification
- [ ] npm run dev — visual check at localhost:3000
- [ ] Responsive: mobile stacked cards, desktop 3-col with featured emphasis
- [ ] Trust strip: stacked on mobile, row on desktop
- [ ] All buttons fire onContactClick
- [ ] npm run build — no new errors
- [ ] No text-sm or smaller in the section
