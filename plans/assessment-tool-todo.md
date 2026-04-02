# AI Assessment Tool — Todo

> Plan: [assessment-tool-plan.md](./assessment-tool-plan.md)

## Phase 1: Types & Foundation
- [ ] Create `types/assessment.ts` with interfaces (AssessmentFormData, WorkflowRecommendation, AssessmentResponse)

## Phase 2: Core Component
- [ ] Create `components/AssessmentTool.tsx` with multi-step form
- [ ] Implement Step 1: Industry selection (radio cards with SVG icons)
- [ ] Implement Step 2: Bottleneck selection (5-6 options per industry, filtered)
- [ ] Implement Step 3: Multi-select tools dropdown (categorized, industry-aware, required)
- [ ] Implement Step 4: Contact info (nome, email, empresa)
- [ ] Add step indicator (dots + "Passo N de 4")
- [ ] Add Framer Motion step transitions
- [ ] Add per-step validation
- [ ] Implement loading state (Progress bar + text transition)
- [ ] Implement results state (3 workflow cards)
- [ ] Implement error state (message + retry)
- [ ] Add 25s timeout via AbortController

## Phase 3: Page
- [ ] Create `app/avaliacao/page.tsx` with metadata + Header/Footer

## Phase 4: Documentation
- [ ] Create `docs/n8n-assessment-workflow.md` (6-node workflow spec)
- [ ] Create `supabase/migrations/001_create_assessment_leads.sql`

## Phase 5: Configuration
- [ ] Add `NEXT_PUBLIC_N8N_ASSESSMENT_WEBHOOK_URL` to `.env.local`

## Phase 6: Verification
- [ ] Run `pnpm run build` — confirm static export succeeds
- [ ] Run `pnpm run lint` — confirm no lint errors
- [ ] Test form flow in dev server at `/avaliacao/`
- [ ] Test mobile viewport (375px)
- [ ] Test error/timeout states
