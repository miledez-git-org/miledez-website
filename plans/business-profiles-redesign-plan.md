# BusinessProfilesSection Redesign

## Context
The "Negocios como o seu ja automatizam com a gente" section has three design issues:
1. Icons use colored background containers (`bg-brand-primary-subtle`), violating the design system rule of plain outline icons
2. Pricing is buried as tiny gray uppercase text — but low pricing is a key selling point
3. No ROI/benefit data — the most compelling conversion hook is missing entirely

## File to Modify
- `components/BusinessProfilesSection.tsx` (single file, no prop changes needed)

## Changes

### 1. Fix icon treatment
Remove the `div.w-10.h-10.rounded-lg.bg-brand-primary-subtle.flex.items-center.justify-center` wrapper. Replace with a bare `<span className="flex-shrink-0 text-brand-primary">`. SVG icons stay unchanged (already stroke-based).

### 2. Update interface
```typescript
interface BusinessProfile {
  type: string
  icon: React.ReactNode
  size: string
  location: string
  automations: string[]
  price: string           // e.g., "R$900"
  priceLabel: string      // e.g., "/mes"
  benefit: string         // e.g., "Economiza ~R$4.500/mes"
  benefitDetail: string   // e.g., "em tempo da equipe administrativa"
}
```

### 3. New card layout (top to bottom)
```
[icon]  Business Type
        size . location

R$900 /mes                          <- large, bold (text-2xl font-bold)

Economiza ~R$4.500/mes              <- green (text-semantic-success), font-semibold
em tempo da equipe administrativa   <- small gray detail

-----------------------------------
check  Automation 1
check  Automation 2
```

### 4. Card container upgrades
```
border border-neutral-200 rounded-xl p-6
shadow-card hover:shadow-card-hover
transition-all duration-base ease-spring
hover:-translate-y-0.5
```

### 5. Updated profile data

| # | Type | Price | Label | Benefit | Detail |
|---|------|-------|-------|---------|--------|
| 1 | Clinica Odontologica | R$900 | /mes | Economiza ~R$4.500/mes | em tempo da equipe administrativa |
| 2 | Escritorio de Contabilidade | R$900 | /mes | Economiza ~40h/mes | da equipe em tarefas manuais |
| 3 | Loja de Roupas Online | R$2.000 | /mes | Reduz perdas em ~R$8.000/mes | com estoque sincronizado e menos erros |
| 4 | Clinica de Fisioterapia | R$2.000 | /mes | Economiza ~R$7.500/mes | em equipe administrativa e glosas |
| 5 | Rede de Pet Shops | R$2.000 | /mes | Economiza ~R$6.000/mes | em gestao de estoque e relatorios |
| 6 | Hospital Regional | Sob consulta | *(empty)* | Retorno estimado em ate 3 meses | com otimizacao de leitos e integracao de sistemas |

### 6. Element styling specifics

- **Price:** `text-2xl font-bold text-brand-black` + suffix `text-sm font-normal text-neutral-500`
- **Benefit:** `text-sm font-semibold text-semantic-success`
- **Benefit detail:** `text-xs text-neutral-500 mt-0.5`
- **Icon:** `<span className="flex-shrink-0 text-brand-primary">`
- **Automations:** unchanged (check icon + text-sm text-neutral-600)

## What stays the same
- All 6 SVG icon components (already outline stroke-based)
- CheckIcon component
- Section header (h2 + subtitle)
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- useScrollReveal + staggered animation
- No new files, dependencies, or prop changes

## Verification
1. `npm run dev` — check section visually at localhost:3000
2. Confirm icons have no colored background boxes
3. Confirm price is large and immediately visible per card
4. Confirm green benefit text is readable and distinct from price
5. `npm run build` — no type or lint errors
