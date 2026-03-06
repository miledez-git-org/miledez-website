# BusinessProfilesSection Redesign — Todo

> Plan: [business-profiles-redesign-plan.md](./business-profiles-redesign-plan.md)

## Interface & Data
- [ ] Update `BusinessProfile` interface (add price, priceLabel, benefit, benefitDetail; remove priceHint)
- [ ] Update all 6 profile objects with new price and benefit data

## Card Template
- [ ] Remove icon colored background wrapper, use bare `<span>` with `text-brand-primary`
- [ ] Add price block: `text-2xl font-bold` with `/mes` suffix
- [ ] Add benefit block: green `text-semantic-success` with detail line
- [ ] Move automations below a divider at card bottom
- [ ] Upgrade card container: add `shadow-card`, `hover:shadow-card-hover`, `hover:-translate-y-0.5`

## Verification
- [ ] Visual check at localhost:3000 — icons, price, benefit, layout
- [ ] `npm run build` passes with no errors
