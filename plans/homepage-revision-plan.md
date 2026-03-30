# Homepage Revision Plan — 8 Sections

## Context
Comprehensive homepage revision to improve copy, layout, and visual clarity across all major sections. The changes range from simple text swaps to full component redesigns. All copy in Brazilian Portuguese.

---

## Section 1: Hero (app/page.tsx, lines 45-88)

**Title:** Change to three lines:
```
seu trabalho
do seu jeito
no automático  ← brand-primary span
```

**Subtitle:** "Reconecte seus sistemas do jeito que quiser e automatize os processos que desperdiçam seu tempo. Criamos resultados em dias, não meses."

**Secondary button:** Text → "Descubra mais", href → `#problemas` (anchor to PainPointSection)

---

## Section 2: Pain Points (components/PainPointSection.tsx)

**Layout:** Convert from 3-card grid → 2-column text layout
- Add `id="problemas"` to `<section>` root
- **Left column:** Title + expanded narrative about breadth of problems solved and customization variety
- **Right column:** 3 pain points as simple text items (icon + title + description), no cards
- Remove ChallengeCard import (keep the component — used on industry pages)

---

## Section 3: Workflow Explainer (components/WorkflowExplainerSection.tsx)

**Middle "Processo" column:** Orange background → white background + thick orange border
- `bg-brand-primary` → `bg-white border-[3px] border-brand-primary`
- PhaseLabel variant → always `'default'` (dark text)
- All `onOrange` props → `false`
- VerticalLine color inside process column → `#eb5100` (orange)

---

## Section 4: Value Proposition (components/ValuePropositionB.tsx)

**Title:** "Podemos entregar sua primeira automação em dias." + subtitle "Totalmente personalizada para suas necessidades."

**Body text:** Short and concise — we build them, personalized for your real process, no commitment, no investment, risk-free.

**Selling points:** Reduce from 6 → 4:
1. **Keep** "3-7 dias para automações simples" (speed)
2. **Merge** "R$0 investimento inicial" + "Sem contrato, sem multa" → "Sem custo inicial, sem contrato"
3. **Keep** "Totalmente gerenciado por nós"
4. **Reword** "100% personalizado" → "Feito para o seu processo" (distinct from body text)

**Remove:** "Feito para o Brasil"

**Font size:** Selling point titles from `text-lg` → `text-xl md:text-2xl`

---

## Section 5: Business Profiles (components/BusinessProfilesSection.tsx) — FULL REDESIGN

**Inspired by** industry subpage MetricsGrid (large numbers, 2-column layout).

**New layout:** Vertically stacked 2-column rows per profile:
- **Left:** Business name, type, size, location + benefit description as body text
- **Right:** Large ROI figures — return in `text-4xl lg:text-5xl brand-primary`, multiplier in `text-4xl lg:text-5xl brand-secondary`, with accent bars

**Keep** the orange summary card at the bottom.

---

## Section 6: Logo Grid (components/LogoGrid.tsx)

- Base opacity: `0.60` → `0.85`
- Add visible text labels below each icon (`logo.name`)
- Wrapper: `flex items-center` → `flex flex-col items-center gap-1.5`
- "...e muitas mais" text: `text-base` → `text-lg font-medium`

---

## Section 7: Process Section (components/ProcessSection.tsx)

Data changes only — no layout changes:

| Step | Title | Duration | Description |
|------|-------|----------|-------------|
| 01 | Conversa inicial | 30 min (remove "gratuito") | Focus on getting to know each other, understanding the company |
| 02 | Relatório de ideias | 2-3 dias úteis | Report with ideas, potential solutions, pricing examples — meant to inspire |
| 03 | Definição e construção | 1-2 semanas | Back-and-forth collaboration to define and build the automation |
| 04 | Entrega e acompanhamento | contínuo | Deliver working automation, client tests day-to-day, adjustments included in retainer |

---

## Section 8: Pricing (components/PricingSection.tsx)

**Expand from 2 → 3 columns:**
1. Automações simples — a partir de R$900/mês
2. Soluções de complexidade média — a partir de R$2.000/mês
3. Soluções complexas com alta personalização — a partir de R$6.000/mês

- Grid: `md:grid-cols-2` → `md:grid-cols-3`
- Widen container: `max-w-3xl` → `max-w-5xl`
- Fix alignment: ensure columns align with title/subtitle/CTA

---

## Resolved Questions
1. **BusinessProfiles design:** Use MetricsGrid pattern (confirmed)
2. **4th selling point:** Reworded "Feito para o seu processo" (confirmed)

## Critical Files
- `app/page.tsx`
- `components/PainPointSection.tsx`
- `components/WorkflowExplainerSection.tsx`
- `components/ValuePropositionB.tsx`
- `components/BusinessProfilesSection.tsx`
- `components/LogoGrid.tsx`
- `components/ProcessSection.tsx`
- `components/PricingSection.tsx`
