# AI Assessment Tool — Implementation Plan

## Context

Build an AI-powered lead generation assessment tool for miledez.com.br. A multi-step interactive form collects business context (industry, bottleneck, tools, contact info), sends it to an n8n webhook, receives a Claude API-generated automation blueprint, and displays results on-screen. n8n handles persistence (Supabase, Google Sheets) and follow-up email.

Source prompt: `sandbox/claude-code-prompt-assessment-tool.md`

---

## Key Architecture Decisions

### 1. No API route — direct client-side webhook call
The site uses `output: 'export'` (static HTML). API routes are impossible with static export. Instead, the client calls the n8n webhook directly — same pattern as the existing Formspree integration in `ContactModal.tsx` (line 58). The webhook URL uses a `NEXT_PUBLIC_` env var.

### 2. File paths adapted to actual project structure
No `src/` directory exists. All paths adjusted:
- `components/AssessmentTool.tsx` (not `src/components/`)
- `app/avaliacao/page.tsx` (not `src/app/assessment/`)
- `types/assessment.ts` (not `src/types/`)

### 3. Portuguese URL: `/avaliacao/` not `/assessment/`
All existing pages use Portuguese slugs (`/saude/`, `/servicos/`, `/termos/`). An English slug would be inconsistent.

### 4. Colors use Tailwind `brand-*` classes
Prompt's color references mapped to actual tokens:
| Prompt | Tailwind class |
|--------|---------------|
| "Orange #eb5100" (CTAs) | `brand-secondary` |
| "Dark Teal #274855" (cards) | `brand-black` |
| "Dark Green #085042" | `brand-primary` |
| Body text | `text-neutral-600` |

### 5. Reuse existing UI components
- `Button` (loading state, variants) — `components/ui/primitives/Button.tsx`
- `Input` (error prop, icon slots) — `components/ui/primitives/Input.tsx`
- `Progress` (brand variant = orange) — `components/ui/data-display/Progress.tsx`
- `cn()` utility — `lib/utils.ts`
- Framer Motion `AnimatePresence` for step transitions (v12 installed)

---

## Files to Create (5 total)

| # | File | Purpose |
|---|------|---------|
| 1 | `types/assessment.ts` | TypeScript interfaces |
| 2 | `components/AssessmentTool.tsx` | Multi-step form + loading + results + error states |
| 3 | `app/avaliacao/page.tsx` | Page with metadata |
| 4 | `docs/n8n-assessment-workflow.md` | n8n workflow build spec |
| 5 | `supabase/migrations/001_create_assessment_leads.sql` | Database migration |

No files modified. `next.config.js` stays untouched.

---

## Component Design: AssessmentTool.tsx

### State
```typescript
const [formData, setFormData] = useState<Partial<AssessmentFormData>>({})
const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
const [phase, setPhase] = useState<'form' | 'loading' | 'results' | 'error'>('form')
const [results, setResults] = useState<AssessmentResponse | null>(null)
```

### Step Flow
| Step | Field | UI | Validation |
|------|-------|----|------------|
| 1 | `setor` | Radio cards (3 options) with inline SVG icons | Required |
| 2 | `gargalo` | Radio cards (5-6 options, filtered by `setor`) | Required |
| 3 | `ferramentas` | Multi-select dropdown (categorized tools, industry-aware) | At least 1 selected |
| 4 | `nome`, `email`, `empresa` | Input fields | All required, email regex |

### Step 2: Expanded Bottleneck Options (5-6 per industry)
- **Saúde:** Agendamento, Prontuários, Follow-up pós-consulta, Relatórios e conformidade, Faturamento e cobranças, Comunicação com pacientes
- **Serviços:** Captação de clientes, Gestão de documentos, Emissão de relatórios, Agendamento e follow-up, Faturamento e cobranças, Gestão de contratos
- **Agropecuária:** Rastreamento de equipamentos, Relatórios de produção, Gestão de fornecedores, Conformidade e certificações, Controle de estoque e insumos, Logística e distribuição

### Step 3: Multi-Select Tools Dropdown
Custom dropdown (existing Select is single-select only). Bundled by company/platform. Industry-specific tools shown conditionally (healthcare tools for saúde, agro tools for agropecuária). Always includes "Sistemas próprios" and "Outros" at bottom. Required (at least 1 selection). `ferramentas` field changes to `string[]`.

### Internal Sub-components (non-exported, defined in same file)
- **StepIndicator** — Dot indicators + "Passo N de 4" text
- **RadioCard** — Clickable card with `border-brand-black` selected state, `bg-brand-secondary` accent dot
- **MultiSelectDropdown** — Trigger button + scrollable checkbox list grouped by category
- **LoadingState** — `Progress` component (brand variant) + text transition after 3s
- **ResultCard** — `bg-brand-black` card with workflow details
- **ErrorState** — Error message + retry button

### Step Transitions
Framer Motion `AnimatePresence mode="wait"` with slide direction (enter from right, exit to left).

### API Call
Direct fetch to `NEXT_PUBLIC_N8N_ASSESSMENT_WEBHOOK_URL` with 25s AbortController timeout.

### Results Layout
- 3 workflow cards in `grid-cols-1 md:grid-cols-3` with `bg-brand-black` + light text
- Email confirmation text
- CTA + reset link

---

## Implementation Sequence

1. Types → 2. Component → 3. Page → 4. n8n Spec → 5. Migration → 6. Env var

---

## Verification

1. `pnpm run dev` → navigate to `/avaliacao/` → complete all 4 steps
2. `pnpm run build` must succeed (static export compatible)
3. `pnpm run lint` must pass
4. Test on 375px viewport (mobile-first)
5. Test error/timeout states
