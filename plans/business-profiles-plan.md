# Business Profiles Section — Plan

## Context

The homepage currently talks about automation in abstract terms and lists 3 industry verticals, but never shows **specific types of businesses** that are a fit. A visitor running a 10-person accounting office or a 150-bed hospital can't tell if mil&dez is relevant to them. This section shows ~6 concrete business profiles (type, size, location, automations, price range) so potential clients immediately self-identify.

## Placement

After Value Proposition, before Integrations (LogoGrid) in `app/page.tsx`.

## Component: `components/BusinessProfilesSection.tsx`

Single self-contained component with inline SVG icons, data array, section header, responsive 3-col grid, and scroll-reveal animation.

## 6 Profiles

| # | Type | Size | Location | Price Hint |
|---|------|------|----------|------------|
| 1 | Clinica Odontologica | 12 profissionais | BH, MG | a partir de R$900/mes |
| 2 | Escritorio de Contabilidade | 6 colaboradores | Curitiba, PR | a partir de R$900/mes |
| 3 | Loja de Roupas Online | ~800 pedidos/mes | SP, SP | a partir de R$2.000/mes |
| 4 | Clinica de Fisioterapia | 25 profissionais | Recife, PE | a partir de R$2.000/mes |
| 5 | Rede de Pet Shops | 3 unidades, 40 func. | Goiania, GO | a partir de R$2.000/mes |
| 6 | Hospital Regional | 150 leitos | Campinas, SP | sob consulta |

## Files

- CREATE: `components/BusinessProfilesSection.tsx`
- MODIFY: `app/page.tsx` (import + insert between ValueProposition and LogoGrid)
