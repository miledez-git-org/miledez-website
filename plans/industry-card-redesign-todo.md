# Industry Card Redesign — Todo

> Plan: [industry-card-redesign-plan.md](./industry-card-redesign-plan.md)

## Phase 0: Decide
- [ ] Choose approach (A, B, or C)
- [ ] Choose phase indicator style (left border / pill badge / label above)
- [ ] Choose tool icon format (SVG logos / letter badges)

## Phase 1: New Components
- [ ] Create `IndustryNodeCard` component in `components/industry/`
- [ ] Create `IndustryPipelineFlow` component with arrow connectors
- [ ] Extract reusable arrow components from `WorkflowExplainerSection.tsx`

## Phase 2: Healthcare (Saude) Page
- [ ] Refactor `saudeCardData.ts` to new data interface (preserve all copy)
- [ ] Update `ChallengeCard.tsx` with NodeCard styling
- [ ] Update `SaudeContent.tsx` to use new components
- [ ] Validate desktop layout
- [ ] Validate mobile layout

## Phase 3: Remaining Industry Pages
- [ ] Create `servicosCardData.ts` following new interface
- [ ] Create `varejoCardData.ts` following new interface
- [ ] Update `ServicosContent.tsx`
- [ ] Update `VarejoContent.tsx`

## Phase 4: Verify
- [ ] `npm run build` passes
- [ ] All existing copy preserved
- [ ] Hover/animation states working
- [ ] Responsive behavior correct on all 3 pages
