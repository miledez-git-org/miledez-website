# ValueProposition Section Redesign — Todo

> Plan: [value-proposition-redesign-plan.md](./value-proposition-redesign-plan.md)

## Build Components
- [ ] Create `components/ValuePropositionB.tsx` (two-column narrative + stacked benefits)
- [ ] Create `components/ValuePropositionC.tsx` (objection crusher cards)

## Integrate into Homepage
- [ ] Import both components in `app/page.tsx`
- [ ] Add Variation B section after existing `#valor`
- [ ] Add Variation C section after Variation B

## Verify
- [ ] Run `npm run dev` and review all three sections
- [ ] Test responsive layout (mobile / tablet / desktop)
- [ ] Test scroll reveal animations
- [ ] Run `npm run build` — no errors

## Cleanup (after user decision)
- [ ] Keep chosen variation, rename to `ValueProposition.tsx`
- [ ] Delete unused component files
- [ ] Remove extra sections from `app/page.tsx`
