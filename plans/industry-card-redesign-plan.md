# Industry Card Redesign — Plan

## Context

The "Como funciona uma automação" section on the homepage uses a clean NodeCard design (white bg, rounded-lg, subtle shadow, logo+label, connected by arrows in a 3-phase pipeline). We want to adopt this card aesthetic across the three industry sub-pages (saude, servicos, varejo), replacing the current card designs while preserving all existing text/copy. Starting with the healthcare (saude) page.

**Goal:** Unified card visual language across homepage and industry pages, aligned with the miledez-design-system.

---

## Current State

### Source: Homepage NodeCard (`components/WorkflowExplainerSection.tsx`)
- `bg-white rounded-lg px-5 py-4 border border-neutral-200 shadow-card hover:shadow-card-hover`
- Fixed `w-[280px] h-[56px]`, horizontal flex: 32x32 SVG logo + 15px text label
- 3 cards connected by thin-line arrows (horizontal desktop, vertical mobile)
- Phase labels above cards (uppercase, semibold + description)
- Cards cycle content every 2s with Framer Motion AnimatePresence

### Target: Saude Page Cards (`app/saude/SaudeContent.tsx`)

**Section 1 — ChallengeCards ("Os desafios do dia a dia")**
- Component: `components/industry/ChallengeCard.tsx`
- 3 cards in `md:grid-cols-3` grid
- Each: 48x48 icon box + title (text-lg) + description (text-sm)
- Style: `p-6 border border-brand-border hover:bg-highlight`
- Content:
  1. "Documentação dispersa" — scattered patient files
  2. "Faturamento complexo" — insurance billing complexity
  3. "Conformidade constante" — compliance/audit pressure

**Section 2 — WorkflowCardFlow ("Automações para sua clínica")**
- Components: `WorkflowVisual/WorkflowCardFlow.tsx` + `WorkflowCard.tsx`
- 4 workflows × 4 compact cards (160px wide) connected by lines
- Colored header bars: trigger=#2D5A7B, process=#8b2020, result=#2D6B4A
- Body: what-line + letter-badge tool icons (G, S, W) + stage footer
- Data: `WorkflowVisual/saudeCardData.ts`
- Workflows: Cadastro de Paciente, Faturamento de Convênios, Conformidade e Auditoria, Cobrança Automatizada

**Note:** servicos and varejo use `WorkflowVisualCompact` (simpler vertical cards) instead of `WorkflowCardFlow`.

---

## Design Approaches (Decision Pending)

### Approach A: Restyle Both Sections Separately

Keep ChallengeCards and WorkflowCardFlow as two separate sections, but restyle both with NodeCard visual DNA.

**ChallengeCard redesign:**
- `bg-white rounded-lg border border-neutral-200 shadow-card hover:shadow-card-hover`
- Horizontal layout: icon left (48x48, updated to `rounded-lg border-neutral-200`) + title/description stacked right
- Grid stays `md:grid-cols-3`

**WorkflowCard redesign:**
- Width grows from 160px to ~240px, pure white, `rounded-lg shadow-card`
- Remove colored header bar → replace with subtle phase indicator (pill badge or left border)
- Connectors reuse homepage arrow style
- Switch tool icons from letter badges to SVG logos from `/public/logos/`

**Pros:** Minimal restructuring, two sections serve different purposes (pain vs. solution).
**Cons:** Two card sections still look like separate things. Page stays long with 4 workflow rows.

### Approach B: Merge Into Unified Flows

Combine both sections into single flow blocks where each pain point leads into its solution workflow.

**Structure:** 3-4 flow blocks. Each opens with a "challenge" card → arrow → 2-3 workflow step cards → result card.

**Card design:** Universal `w-[280px]` auto-height card with NodeCard styling. Phase indicated by thin 3px left border in phase color. Challenge cards get neutral border.

**Pros:** Strongest narrative — each pain connects to its solution.
**Cons:** Heaviest restructuring. 3 challenges vs 4 workflows creates mapping mismatch. Risk of dense blocks.

### Approach C: Tabbed Pipeline

Replace both sections with a single tabbed pipeline section. Tabs show workflow names, selected tab reveals a horizontal NodeCard pipeline.

**Structure:**
- Tab strip: Cadastro | Faturamento | Conformidade | Cobrança
- Selected tab shows challenge text as one-line subtitle
- Below: horizontal 3-4 card pipeline with phase labels above (identical to homepage)
- Tab auto-cycles every 5s, pause on hover, AnimatePresence transitions

**Card design:** Same as homepage NodeCard but taller (~80-110px) to hold: header text (15px medium) + description (13px neutral-500) + tool logos (24x24 SVGs).

**Pros:** Most minimal. Biggest vertical space savings. Strongest homepage cohesion.
**Cons:** Hides 3/4 workflows behind tabs. Challenge descriptions truncated. New UI pattern.

---

## Open Decisions

1. **Which approach?** A, B, or C (or hybrid)
2. **Phase indicator style:** colored left border vs. pill badge vs. phase label above card
3. **Tool icons:** switch to SVG logos from `/public/logos/` vs. keep letter badges

---

## Implementation Sequence (Once Approach Chosen)

1. Create new `IndustryNodeCard` component in `components/industry/`
2. Create `IndustryPipelineFlow` component with arrow connectors
3. Update/replace `ChallengeCard.tsx` with NodeCard styling
4. Refactor `saudeCardData.ts` to new data interface (preserve all copy)
5. Update `SaudeContent.tsx` to use new components
6. Validate desktop + mobile
7. Create matching data files for servicos and varejo
8. Update `ServicosContent.tsx` and `VarejoContent.tsx`

## Critical Files

| File | Role |
|------|------|
| `components/WorkflowExplainerSection.tsx` | Source of NodeCard design, arrows, animations |
| `components/industry/ChallengeCard.tsx` | Current pain-point cards to restyle |
| `components/WorkflowVisual/WorkflowCard.tsx` | Current workflow cards to replace |
| `components/WorkflowVisual/WorkflowCardFlow.tsx` | Current flow container to replace |
| `components/WorkflowVisual/saudeCardData.ts` | Card data to refactor |
| `app/saude/SaudeContent.tsx` | First page to update |

## Verification

- `npm run build` passes
- Desktop: cards render with NodeCard styling, arrows connect properly
- Mobile: cards stack vertically with vertical arrows
- All existing copy preserved (diff against current text)
- Hover shadows work
- Scroll-reveal animations fire correctly
