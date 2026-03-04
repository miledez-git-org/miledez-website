# ValueProposition Section Redesign — Design Variations

## Context

The current ValueProposition section on the homepage shows 4 flat metrics ("3-7 dias", "100% customizado", "R$0", "10x") with tiny one-line labels. Problems:
1. **Not enough information** — each value prop is just a number + a few words
2. **Low visibility** — small labels don't communicate *why* each point matters
3. **Doesn't differentiate** — doesn't tell the story of what mil&dez does differently

The target audience is Brazilian SMB owners (low-tech, skeptical, want results not details). The section sits after the WorkflowExplainer and before LogoGrid on the homepage.

---

## Variation B: "Two-Column Narrative" (Storytelling)

Left column: strong headline + narrative paragraph explaining the mil&dez model. Right column: stacked benefit items with icons and short descriptions. More editorial, feels premium.

**Left column copy:**

> **Resultados em dias, não meses**
>
> Somos uma agência de automação que entrega soluções prontas para usar. Você não precisa de equipe de TI, não precisa entender de tecnologia, e não precisa esperar meses para ver resultados.
>
> Construímos automações 100% personalizadas para o processo real da sua empresa — conectando os sistemas que você já usa. Cuidamos de tudo: desenvolvimento, hospedagem, manutenção e atualizações.
>
> Você paga só a mensalidade. Sem contrato, sem surpresas, sem risco.

**Right column benefit items:**

| Icon | Title | Description |
|------|-------|-------------|
| Clock | 3-7 dias para automações simples | Projetos maiores em 2-4 semanas. Sem interromper sua operação. |
| Wallet | R$0 de investimento inicial | Desenvolvimento, testes e treinamento por nossa conta. Você só paga quando funcionar. |
| ShieldCheck | Totalmente gerenciado por nós | Sua equipe não precisa fazer nada técnico. Cuidamos de A a Z. |
| CalendarX | Sem contrato, sem multa | Assinatura mensal. Cancele em 30 dias. A automação é sua. |
| Target | ROI claro antes de começar | Análise de retorno apresentada na proposta. Se não fizer sentido, a gente avisa. |

---

## Variation C: "Objection Crusher" (Sales-Oriented)

Reframes the section around client fears/objections. Each card presents a common objection in quotes, then crushes it with a concrete response.

| # | Objection (in quotes) | Response |
|---|----------------------|----------|
| 1 | "Automação custa caro para implementar" | Cobramos R$0 para começar. Desenvolvimento, testes e treinamento são por nossa conta. Você só paga a mensalidade — e só depois de tudo funcionando. |
| 2 | "Preciso de uma equipe de TI" | Não precisa. Nós cuidamos de tudo: desenvolvimento, hospedagem, manutenção e atualizações. Sua equipe só precisa usar o que a gente entrega. |
| 3 | "Demora meses para ficar pronto" | Automações simples ficam prontas em 3-7 dias. Projetos maiores em 2-4 semanas. Trabalhamos em paralelo — sem interromper sua operação. |
| 4 | "Ferramentas genéricas não se adaptam ao meu negócio" | Cada automação é construída do zero para o seu processo específico. Não vendemos software pronto — construímos a solução exata que você precisa. |
| 5 | "E se eu quiser cancelar?" | Assinatura mensal, sem contrato. Cancele em 30 dias, sem multa. A automação que construímos continua sendo sua. |
| 6 | "Não sei se o retorno justifica" | Antes de começar, apresentamos uma análise clara de ROI. Se não fizer sentido financeiramente para o seu negócio, somos os primeiros a dizer. |

---

## Implementation Plan

Build both as separate components rendered on the homepage. Keep current ValueProposition. After reviewing all three live, pick one and delete the others.

### Steps
1. Create `components/ValuePropositionB.tsx` — two-column narrative layout
2. Create `components/ValuePropositionC.tsx` — objection crusher cards
3. Add both as new sections in `app/page.tsx` after existing `#valor` section
4. Each gets a distinct `id` and a small dev label to distinguish when scrolling

### Files to create
- `components/ValuePropositionB.tsx`
- `components/ValuePropositionC.tsx`

### Files to modify
- `app/page.tsx` — import + add two new sections

### Verification
1. `npm run dev` — scroll through all three sections
2. Check responsive: mobile, tablet, desktop
3. Check scroll animations
4. `npm run build` — no TS/lint errors
