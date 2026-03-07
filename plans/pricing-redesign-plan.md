# Pricing Section Redesign — Minimal Approach

## Context

The PricingSection currently displays 3 dark pricing "tier" cards with feature lists, suggesting fixed subscription plans. But mil&dez pricing is fully custom — every solution is priced based on client needs and complexity. The 3-tier layout with feature lists creates a false impression of fixed packages and adds unnecessary copy. The section also has design violations: English words in Portuguese copy, `text-sm` body text, inline color styles, and visual monotony with the dark-card BusinessProfilesSection above it.

**Goal:** Strip the section down to a clean, minimal layout that communicates two things: (1) solutions are accessible at different budget levels, and (2) everything is custom with no risk.

---

## Approach: Minimal Standalone Section

Replace the 3-card tier layout with a clean, cardless section. No feature lists, no badges, no trust strip. Just pricing range metrics + short copy + one CTA.

**Single file change:** `components/PricingSection.tsx` — full rewrite.

---

## Layout

### Section Header
```
Quanto custa automatizar
o que você recebe de volta       ← text-brand-primary
```
Subtitle: "Cada solução é sob medida pra sua operação. Sem contrato. Sem taxa de entrada."

### Price Range Display

Two metric callouts side by side (asymmetric 2-column on desktop, stacked on mobile):

| Left | Right |
|------|-------|
| **R$900/mês** (large heading-display) | **R$2.000/mês** (large heading-display) |
| "automações simples" (text-base, neutral-600) | "soluções mais complexas" (text-base, neutral-600) |
| "A partir de" label above price | "A partir de" label above price |

Grid: `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12`

No cards, no borders, no background containers — just typography on the section's `bg-bg-muted` background. A thin `border-t border-neutral-200` separates the two columns on desktop (using a divider element or left border on the right column).

### CTA
Single centered button below: `btn btn-primary btn-lg` — "Falar com a gente"

---

## Specific Changes

### 1. Data Structure
Replace the `PricingTier` interface and `tiers` array with simple inline content. No data abstraction needed for 2 static items.

### 2. Remove All Cards
Delete the dark card markup (`bg-[#274855]`, shadows, dividers, feature lists, checkmark icons). Replace with clean typographic layout directly on `bg-bg-muted`.

### 3. Typography
| Element | Style |
|---------|-------|
| Section heading | `heading-display text-[2rem] md:text-[2.5rem] text-brand-black` |
| Accent line | `text-brand-primary` (orange, not teal) |
| Subtitle | `text-lg text-neutral-600 max-w-xl` |
| "A partir de" label | `text-base font-medium text-neutral-500 uppercase tracking-wider` |
| Price | `heading-display text-4xl md:text-5xl text-brand-black` |
| Price descriptor | `text-base text-neutral-600 mt-2` |

All text meets the 16px minimum. No `text-sm` anywhere.

### 4. Static — No Animations
Remove `useScrollReveal` hook and all inline `style={{ opacity, transform, transition }}`. The section renders immediately with no scroll-triggered animation.

### 5. Inline Styles → Tailwind
All colors and backgrounds use Tailwind classes. No inline `style` attributes at all (since animations are also removed).

### 6. Copy (Brand Voice)
- Zero English words
- Outcome-focused, conversational Portuguese
- Risk-removers in the subtitle ("Sem contrato. Sem taxa de entrada.")
- CTA label: "Falar com a gente" (conversational, low-commitment)

---

## File Modified

`components/PricingSection.tsx` — full rewrite

## Reference Files (read-only)
- `app/page.tsx:125-129` — section wrapper (unchanged: `bg-bg-muted`, `max-w-6xl`, `#precos` id)
- `app/globals.css:221-276` — button classes (`btn`, `btn-primary`, `btn-lg`)
- `components/ui/tokens/generated-theme.ts` — Tailwind color tokens

---

## Verification

1. `npm run dev` — check section visually at `localhost:3000/#precos`
2. Clean typographic layout with two price metrics side by side on desktop
3. Stacked layout on mobile
4. No cards, no feature lists, no animations
5. All text is Portuguese with zero English
6. No `text-sm` or smaller anywhere in the section
7. No inline `style` attributes
8. CTA button fires `onContactClick`
9. `npm run build` — no new errors
