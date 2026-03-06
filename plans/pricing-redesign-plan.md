# Pricing Section Redesign

## Context

The PricingSection (`components/PricingSection.tsx`) has accumulated design system violations and brand voice issues. It uses dark cards (same as BusinessProfilesSection above it, creating visual monotony), English buzzwords in Portuguese copy ("follow-up", "workflow", "dashboard", "enterprise"), mechanism-focused feature descriptions instead of outcomes, `text-sm` for body text (below 16px minimum), inline color styles instead of Tailwind classes, and no risk-removers near the CTA. This plan redesigns it guided by the `miledez-design-system` and `miledez-brand-voice` skills.

---

## Approach: Single-File Rewrite

Only `components/PricingSection.tsx` changes. The existing `PricingCard` component is not used (it has its own sizing issues and a different data model). The `onContactClick` prop and section wrapper in `app/page.tsx` stay unchanged.

---

## Changes

### 1. White Cards (replace dark `#274855` background)

BusinessProfilesSection already uses dark `#274855` cards. Pricing on the same dark creates monotony. Switch to:

- **Non-featured:** `bg-white rounded-xl border border-neutral-200 shadow-card p-8 md:p-10`
- **Featured (Completa):** `bg-white rounded-xl border-2 border-brand-primary shadow-lg p-8 md:p-10 relative` with `md:-mt-4 md:mb-4` for subtle vertical emphasis on desktop
- Grid gap: `gap-6` → `gap-8`

### 2. Featured Tier Badge

Orange pill badge at top of the featured card:

```tsx
{tier.featured && (
  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-sm font-medium px-4 py-1 rounded-full whitespace-nowrap">
    Mais popular
  </span>
)}
```

### 3. Tier Names

| Current | New | Reason |
|---------|-----|--------|
| Simples | Essencial | "Simples" feels dismissive; "Essencial" = foundational |
| Media | Completa | "Media" is vague; "Completa" signals comprehensive |
| Sob Medida | Sob Medida | Clear, keep as-is |

### 4. Copy Rewrite (Outcome-Focused, Zero English)

**Essencial (R$900 - R$2.000/mes)**
- Avisos no WhatsApp sem voce precisar lembrar
- Relatorio de vendas na sua caixa de entrada todo dia
- Planilha e sistema sempre atualizados juntos
- Acompanhamento de clientes acontece sozinho

**Completa (R$2.000 - R$6.000/mes) — featured**
- Pedidos online atualizam o estoque sozinhos
- Aprovacoes passam de etapa sem ninguem empurrar
- Painel com tudo que importa, atualizado em tempo real
- Atendimento por WhatsApp que resolve na hora

**Sob Medida (Sob consulta)**
- Sistema completo desenhado pra sua operacao
- Todos os seus sistemas conversando entre si
- Inteligencia artificial treinada pro seu negocio
- Solucao feita do zero pra o que voce precisa

### 5. Typography & Sizing Fixes

| Element | Current | New |
|---------|---------|-----|
| Tier name | `text-sm` (14px) | `text-base font-medium uppercase tracking-wider text-neutral-500` |
| Price | `text-2xl text-white` | `heading-display text-3xl md:text-4xl text-brand-black` |
| Period label | `text-sm rgba(white,0.85)` | `text-base text-neutral-500 mt-1` |
| Feature items | `text-sm rgba(white,0.9)` | `text-base text-neutral-600` |
| Feature spacing | `space-y-3` | `space-y-4` |
| Checkmark color | `rgba(white,0.8)` | `text-brand-primary` |
| Divider | `rgba(white,0.2)` | `border-t border-neutral-100` |

### 6. Per-Card CTA Buttons

Replace the single bottom CTA with a button in each card:

- Featured: `btn btn-primary btn-lg w-full`
- Non-featured: `btn btn-outline-brand btn-lg w-full`
- Label: "Falar com a gente"

Remove the standalone CTA button below the grid.

### 7. Trust Signal Strip

Add below the card grid (`mt-12`), a centered row of 3 risk-removers:

```
[Shield] Sem contrato, cancele quando quiser
[Wallet] Implementacao por nossa conta
[Clock] Resultados em dias, nao meses
```

Layout: `flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10`
Styling: icon in `text-brand-primary`, text in `text-base text-neutral-600`
Icons: inline SVG, Lucide-style stroke icons (shield-check, wallet, clock)

### 8. Section Header Rewrite

**Current:**
> Preco justo, retorno comprovado
> Baseado na complexidade e escala do seu negocio

**New:**
> Quanto custa automatizar
> (second line in brand-primary:) o que voce recebe de volta
> Sem taxa de entrada. Sem contrato. Voce so paga enquanto fizer sentido.

Uses `text-brand-primary` for the accent line (orange) instead of current `text-[#274855]` (teal), to differentiate from BusinessProfilesSection's heading style.

### 9. Inline Styles Cleanup

Replace all inline color/background styles with Tailwind classes. **Keep** inline `style={{ opacity, transform, transition }}` for scroll-reveal animations — this is the established `useScrollReveal` pattern across the codebase.

### 10. Animation

Keep `useScrollReveal` hook and stagger pattern (cards at `index * 100ms`). Add trust strip with `400ms` delay as a 4th stagger group.

---

## Responsive Edge Cases

- **Price range wrapping:** Add `whitespace-nowrap` on price text
- **Featured card offset:** `md:-mt-4 md:mb-4` only on md+ (stacks normally on mobile)
- **Trust strip:** `flex-col` on mobile, `flex-row` on md+
- **Button width:** `w-full` inside cards ensures consistent sizing

---

## File Modified

`components/PricingSection.tsx` — full rewrite (data + JSX + styles)

## Reference Files (read-only)
- `components/ui/tokens/generated-theme.ts` — available Tailwind tokens
- `components/BusinessProfilesSection.tsx` — adjacent section, visual differentiation target
- `app/globals.css` — button classes (btn, btn-primary, btn-outline-brand, btn-lg)
- `app/page.tsx` — section wrapper (no changes needed)

---

## Verification

1. `npm run dev` — check pricing section visually at `/`
2. Confirm white cards render with proper shadows and borders on `bg-bg-muted` background
3. Featured card has orange border + "Mais popular" badge + primary CTA
4. All copy is Portuguese with zero English words
5. No `text-sm` or smaller in the section (inspect elements)
6. No inline `style` for colors (only for scroll-reveal animation)
7. Trust strip displays correctly on mobile (stacked) and desktop (row)
8. Per-card buttons fire `onContactClick` correctly
9. `npm run build` — no new errors
