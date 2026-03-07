# Pricing Section Redesign — Todo

> Plan: [pricing-redesign-plan.md](./pricing-redesign-plan.md)

## Rewrite PricingSection.tsx
- [ ] Remove PricingTier interface and tiers array
- [ ] Remove useScrollReveal hook import and usage
- [ ] Remove all dark card markup (bg-[#274855], shadows, feature lists, checkmarks)
- [ ] Remove all inline style attributes

## New Layout
- [ ] Add section header: "Quanto custa automatizar / o que voce recebe de volta"
- [ ] Add subtitle with risk-removers
- [ ] Add 2-column price metric display (R$900 + R$2.000)
- [ ] Add "A partir de" labels above each price
- [ ] Add short descriptors below each price
- [ ] Add single CTA button: "Falar com a gente"

## Design Compliance
- [ ] All text uses Tailwind classes (no inline styles)
- [ ] No text-sm or smaller — minimum text-base (16px)
- [ ] Orange accent (text-brand-primary) on heading, not teal
- [ ] Static section — no scroll animations
- [ ] Responsive: stacked on mobile, side-by-side on desktop

## Verification
- [ ] npm run dev — visual check
- [ ] Responsive behavior at mobile/tablet/desktop
- [ ] CTA fires onContactClick
- [ ] npm run build — no errors
