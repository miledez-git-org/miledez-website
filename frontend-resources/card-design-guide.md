# mil&dez Workflow Card System — Handoff Package

## Overview

This document defines the finalized workflow card component used across all mil&dez visual demonstrations of workflow automations. It serves as the single source of truth for creating industry-specific workflows, adapting the card for different output formats, and maintaining design consistency.

**Locked-in design decisions:**
- Format: Square (vertical stack)
- Content density: Extended (4-8 word descriptions)
- Header: Custom action label per step (action-outcome phrasing)
- Footer: Static stage label tied to step type, with semantic icon
- Visual style: Filled header, subtle rounded corners (6px), subtle shadow

---

## Card Anatomy

Every card contains 5 elements in fixed order, top to bottom:

```
┌──────────────────────────┐
│ 01  FORMULÁRIO           │ ← Header: step number + custom action label
│     PREENCHIDO           │   (colored by step type, uppercase)
├──────────────────────────┤
│                          │
│ Dados do paciente        │ ← What line: specific action description
│ coletados no formulário  │   (4-8 words, contextual to the workflow)
│ de entrada               │
│                          │
│ [G] [S]                  │ ← Tool icons: colored letter boxes (unlabeled)
│                          │
│ ─────────────────────────│
│ ⚡ Gatilho · Processo    │ ← Stage footer: semantic icon + static stage
│    iniciado              │   label (colored by step type)
└──────────────────────────┘
```

### Element Specifications

| Element | Font | Size (solo / compact) | Weight | Color | Notes |
|---------|------|-----------------------|--------|-------|-------|
| Step number | Manrope | 10px / 8px | 500 | white @ 55% opacity | Always two digits: 01, 02, 03. Letter-spacing 0.04em |
| Action label | Manrope | 12px / 9px | 600 | white | Uppercase, letter-spacing 0.05em |
| What line | Source Sans 3 | 13px / 11px | 400 | #1A1A1A (charcoal) | Line-height 1.45 (solo) / 1.4 (compact), sentence case |
| Icon box | — | 22px / 16px | — | White bg, #E0E0E0 border | Border-radius 3px |
| Icon letter | Manrope | ~45% of box size / ~45% of box size | 700 | Brand color of tool | Single character |
| Stage icon | — | 13px / 13px | 600 | Step-type color | ⚡ (trigger), ⚙ (process), ✓ (result) |
| Stage label | Source Sans 3 | 12px / 10px | 400 | #6B6B6B (gray) | Separated by 1px border-top |

---

## Step-Type System

Every card has exactly one type. The type determines the header background color and the stage icon color.

| Type | CSS Variable | Hex | Stage Label (PT-BR) | Stage Icon | Usage |
|------|-------------|-----|----------------------|------------|-------|
| Trigger | `--trigger` | `#2D5A7B` | Gatilho · Processo iniciado | ⚡ | First card only. The initiating event. |
| Process | `--process` | `#8b2020` | Tarefa automatizada | ⚙ | Middle cards. Can repeat multiple times. |
| Result | `--result` | `#2D6B4A` | Resultado · Entrega final | ✓ | Last card only. The final delivery. |

**Color rationale:** Trigger uses steel blue (neutral, observational — it detects, it doesn't act). Process uses burgundy (brand color — this is where mil&dez's work happens). Result uses muted green (completion, success, delivery).

### Stage Labels — English Equivalents

If creating English-language outputs, use:

| Type | EN Label |
|------|----------|
| Trigger | Trigger · Process started |
| Process | Automated task |
| Result | Result · Final delivery |

---

## Card Dimensions

### Solo Card (single card preview, hero sections)

| Property | Value |
|----------|-------|
| Width | 210px (mobile: 100%, max 280px) |
| Header padding | 10px 16px |
| Body padding | 14px 16px |
| Body gap | 12px |
| Tools gap | 12px |
| Stage margin-top | 10px |
| Stage padding-top | 10px |
| Border | 1px solid #E0E0E0 |
| Border-radius | 6px |
| Shadow | 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04) |

### Compact Card (workflow sequences)

| Property | Value |
|----------|-------|
| Width | 160px (mobile: 100%, max 240px) |
| Min-height | 160px (mobile: auto) |
| Header padding | 7px 12px |
| Body padding | 10px 12px |
| Body gap | 8px |
| Tools gap | 8px |
| Tools margin-top | auto (pushes tools and stage to bottom) |
| Stage margin-top | 6px |
| Stage padding-top | 6px |
| Border | 1px solid #E0E0E0 |
| Border-radius | 6px |
| Shadow | 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04) |

**Important:** All compact cards in a workflow share identical dimensions. Visual differentiation between steps comes from header color, not size.

---

## Connector Specification

Cards in a workflow are joined by directional connectors (flat lines, no arrowheads).

| Property | Horizontal | Vertical |
|----------|-----------|----------|
| Size | 32px wide × 1px tall | 1px wide × 24px tall |
| Color | #E0E0E0 | #E0E0E0 |

**Layout rules:**
- Desktop: horizontal connectors, left-to-right flow
- Mobile (<600px): vertical connectors, top-to-bottom flow
- Connectors appear between cards, never before the first or after the last

---

## Icon Registry

Placeholder icons use a colored letter inside a bordered box. When implementing with real assets, replace the letter with the actual SVG/PNG logo at the same dimensions.

| Key | Letter | Brand Color | Full Name |
|-----|--------|------------|-----------|
| gmail | G | #EA4335 | Gmail |
| sheets | S | #34A853 | Sheets |
| whatsapp | W | #25D366 | WhatsApp |
| excel | E | #217346 | Excel |
| pdf | P | #FF0000 | PDF |
| pix | ₱ | #32BCAD | Pix |
| calendar | C | #4285F4 | Calendar |
| slack | S | #4A154B | Slack |

**Extending the registry:** Add new tools by defining key, letter, brand color, and full name.

**Display in cards:** Icons appear as unlabeled colored-letter boxes in the card body. The CSS supports an optional `.icon-labeled` wrapper with `.icon-name` text for contexts outside the card (documentation, legends) — but within cards, icons are rendered as compact boxes only.

---

## Data Structure

Each card is defined by a single object:

```javascript
{
  step: '01',           // Two-digit step number (string)
  type: 'trigger',      // 'trigger' | 'process' | 'result'
  header: '...',        // 2-4 word action-outcome label (card header)
  what: '...',          // 4-8 word description of the specific action
  icons: ['gmail'],     // Array of icon keys from the registry
}
```

A workflow is an ordered array of these objects. Rules:
- First item must be type `trigger`
- Last item must be type `result`
- Middle items are type `process` (1 or more)
- Step numbers are sequential: 01, 02, 03...
- Each card's `header` should summarize the outcome of that step
- Each card's `what` should describe the concrete action taken
- The stage label and icon are derived automatically from `type`

---

## Writing Guidelines

### Header Line

The header is a short, action-outcome label displayed in the colored header bar. It answers: "What was accomplished in this step?"

**Do:** Use past participle or noun-based outcome phrases: Formulário preenchido, Dados validados, Relatório gerado, Cadastro confirmado, Proposta entregue.

**Don't:** Use gerúndio (present participle) or full sentences. The header is a concise label, not a description.

**Length:** 2-4 words. Uppercase display is handled by CSS.

### What Line

The what line describes the specific, concrete action in more detail. It answers: "What exactly happened in this step?"

**Do:** Use past participle or descriptive phrases in sentence case: Dados do paciente coletados no formulário de entrada, Campos obrigatórios verificados e inconsistências sinalizadas.

**Don't:** Use generic labels like "Processamento de dados" or "Etapa 2". The what line must be specific to the workflow context.

**Length:** 4-8 words for extended content. Can stretch to 10-12 words for complex steps, but shorter is better.

### Header vs. What Line Relationship

The header is the short outcome label; the what line expands on it with specifics. They should complement each other without repeating.

| Header | What line |
|--------|-----------|
| Formulário preenchido | Dados do paciente coletados no formulário de entrada |
| Dados validados | Campos obrigatórios verificados e inconsistências sinalizadas |
| Relatório gerado | Ficha do paciente compilada com histórico clínico |
| Cadastro confirmado | Confirmação enviada por e-mail e WhatsApp ao paciente |

### Header Examples by Sector

**Healthcare:**
- Formulário preenchido
- Dados validados
- Relatório gerado
- Cadastro confirmado

**Professional Services (Law, Accounting):**
- Solicitação recebida
- Serviço categorizado
- Proposta gerada
- Proposta entregue

**Retail:**
- Vencimento detectado
- Boleto atualizado
- Cobrança enviada
- Pagamento confirmado

### What Line Examples by Sector

**Healthcare:**
- Dados do paciente coletados no formulário de entrada
- Campos obrigatórios verificados e inconsistências sinalizadas
- Ficha do paciente compilada com histórico clínico
- Confirmação enviada por e-mail e WhatsApp ao paciente

**Professional Services (Law, Accounting):**
- Nova solicitação de proposta recebida via e-mail
- Serviço categorizado e tabela de preços consultada
- Proposta comercial formatada com escopo e condições
- Proposta aprovada enviada ao cliente com link para assinatura

**Retail:**
- Vencimento de fatura detectado no sistema financeiro
- Boleto atualizado com multa e juros calculados
- Cobrança enviada por e-mail e WhatsApp com boleto anexado
- Confirmação de pagamento registrada e status atualizado

---

## Industry Workflow Templates

### Healthcare — Cadastro de Paciente (4 steps)

```javascript
[
  { step: '01', type: 'trigger', header: 'Formulário preenchido', what: 'Dados do paciente coletados no formulário de entrada', icons: ['gmail', 'sheets'] },
  { step: '02', type: 'process', header: 'Dados validados', what: 'Campos obrigatórios verificados e inconsistências sinalizadas', icons: ['sheets'] },
  { step: '03', type: 'process', header: 'Relatório gerado', what: 'Ficha do paciente compilada com histórico clínico', icons: ['excel', 'pdf'] },
  { step: '04', type: 'result', header: 'Cadastro confirmado', what: 'Confirmação enviada por e-mail e WhatsApp ao paciente', icons: ['gmail', 'whatsapp'] },
]
```

### Professional Services — Proposta Comercial (5 steps)

```javascript
[
  { step: '01', type: 'trigger', header: 'Solicitação recebida', what: 'Nova solicitação de proposta comercial via formulário ou e-mail', icons: ['gmail', 'sheets'] },
  { step: '02', type: 'process', header: 'Serviço categorizado', what: 'Serviço solicitado categorizado e tabela de preços consultada', icons: ['sheets', 'excel'] },
  { step: '03', type: 'process', header: 'Proposta gerada', what: 'Proposta comercial formatada com escopo e condições de pagamento', icons: ['pdf'] },
  { step: '04', type: 'process', header: 'Aprovação solicitada', what: 'Notificação enviada ao gestor com link da proposta para aprovação', icons: ['gmail', 'whatsapp'] },
  { step: '05', type: 'result', header: 'Proposta entregue', what: 'Proposta aprovada enviada ao cliente com link para assinatura digital', icons: ['gmail', 'pdf'] },
]
```

### Retail — Cobrança Automatizada (4 steps)

```javascript
[
  { step: '01', type: 'trigger', header: 'Vencimento detectado', what: 'Vencimento de fatura próximo detectado no sistema financeiro', icons: ['sheets', 'calendar'] },
  { step: '02', type: 'process', header: 'Boleto atualizado', what: 'Boleto gerado com cálculo automático de multa e juros', icons: ['excel', 'pix'] },
  { step: '03', type: 'process', header: 'Cobrança enviada', what: 'Cobrança enviada por e-mail e WhatsApp com boleto e link Pix', icons: ['gmail', 'whatsapp', 'pix'] },
  { step: '04', type: 'result', header: 'Pagamento confirmado', what: 'Confirmação de pagamento registrada e status atualizado no sistema', icons: ['sheets', 'pix'] },
]
```

---

## Output Format Guidelines

### Website / Landing Page
- Use compact cards in horizontal workflow layout
- Background: #F5F5F5 container with 32px padding, 6px border-radius
- Maximum 4-5 cards visible before horizontal scroll or wrapping
- Include color legend above or beside the workflow
- Mobile: stack vertically with vertical connectors

### Sales Deck / Presentation (PPTX, PDF)
- Use solo-sized cards for single-step highlights
- Use compact cards for full workflow overviews
- Place on white or #F5F5F5 background
- Recommended slide layout: workflow centered, title above, brief caption below
- For static export: render as PNG at 2x resolution (320px wide per solo card)

### Client Meeting / Interactive Demo
- Use the HTML source file directly — it's self-contained
- Swap the workflow data array to match the client's industry
- Can be projected or screen-shared directly from a browser

### Social Media / Marketing
- Crop individual solo cards as standalone images
- Always include the color legend when showing a full workflow
- Minimum image width: 1080px for Instagram/LinkedIn (scale cards up proportionally)

### Print Material
- Ensure minimum 300 DPI when rasterizing
- Solo card at print: approximately 2" wide (5cm)
- Compact card at print: approximately 1.5" wide (3.8cm)
- Embed Manrope and Source Sans 3 fonts or convert text to outlines

---

## Layout Patterns

### Horizontal Flow (default desktop)
```
[Card 1] ─── [Card 2] ─── [Card 3] ─── [Card 4]
```
Best for: website sections, presentation slides, horizontal scroll containers.

### Vertical Flow (default mobile)
```
[Card 1]
    │
[Card 2]
    │
[Card 3]
    │
[Card 4]
```
Best for: mobile views, tall infographics, vertical scroll sections, email templates.

### Grid Layout (no connectors)
```
[Card 1]  [Card 2]
[Card 3]  [Card 4]
```
Best for: capability overviews where sequence doesn't matter, feature comparison, portfolio displays. Remove connectors and step numbers when using this layout — add descriptive titles above each card instead.

### Stacked with Labels
```
ETAPA 1
[Card 1]

ETAPA 2
[Card 2]

ETAPA 3
[Card 3]
```
Best for: detailed walkthrough documents, proposals, long-form content where each step needs surrounding explanation text.

---

## CSS Variables Reference

```css
:root {
  /* Brand */
  --color-burgundy: #8b2020;
  --color-charcoal: #1A1A1A;
  --color-gray: #6B6B6B;
  --color-light-gray: #F5F5F5;
  --color-border: #E0E0E0;
  --color-white: #FFFFFF;

  /* Step types */
  --trigger: #2D5A7B;
  --process: #8b2020;
  --result: #2D6B4A;

  /* Typography */
  --font-heading: 'Manrope', sans-serif;
  --font-body: 'Source Sans 3', sans-serif;
}
```

---

## File Inventory

| File | Purpose |
|------|---------|
| `card-system-v3.html` | Production-ready source file. Self-contained HTML/CSS/JS with the healthcare example workflow. Swap the data arrays to create new workflows. |
| `card-system-handoff.md` | This document. Full specification, writing guidelines, templates, and layout patterns. |

---

## Quick Start: Creating a New Workflow

1. Copy `card-system-v3.html`
2. Replace the `SOLO` object with a single card from your new workflow
3. Replace the `WORKFLOW` array with your full step sequence
4. Add any new icons to the `ICONS` object
5. Ensure first step is `trigger`, last is `result`, middle steps are `process`
6. Test at desktop and mobile widths

---

## Prompt Template for Claude

When asking Claude to generate new workflow card content, use this prompt structure:

```
Using the mil&dez workflow card system, create a [NUMBER]-step workflow 
for [INDUSTRY/SECTOR] that demonstrates [SPECIFIC PROCESS].

Each step needs:
- step: two-digit number
- type: trigger (first), process (middle), or result (last)
- header: 2-4 word action-outcome label in Portuguese (past participle)
- what: 4-8 word description in Portuguese (past participle / descriptive)
- icons: relevant tools from the registry

Context: [ADDITIONAL DETAILS ABOUT THE CLIENT OR USE CASE]
```
