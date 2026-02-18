---
description: mil&dez design system guide for visual consistency. Use when creating UI components, styling pages, choosing colors, fonts, spacing, or making any visual design decision for the mil&dez website.
---

Apply the mil&dez design system for all visual outputs. This command defines the brand identity, component patterns, and styling rules.

## Brand Identity

| Element | Value |
|---------|-------|
| **Primary color** | `#8b2020` (burgundy) |
| **Primary dark** | `#6a1818` |
| **Primary light** | `#c53030` |
| **Primary subtle** | `rgba(139, 32, 32, 0.08)` |
| **Headings font** | Manrope (`font-display` / `--font-manrope`) |
| **Body font** | Inter (`font-sans` / `--font-inter`) |
| **Heading color** | `#1A1A1A` |
| **Body text color** | `#6B6B6B` |
| **Style** | Warm, professional, minimal |

## Color System

Use the semantic color tokens defined in `components/ui/tokens/generated-theme.ts`:

### Brand
- `brand-primary` — Main accent, CTAs, active states
- `brand-primary-dark` — Hover states, emphasis
- `brand-primary-light` — Error-adjacent, strong highlights
- `brand-primary-subtle` — Tinted backgrounds, subtle accents

### Accent
- `accent-slate` — Secondary text, icons
- `accent-slate-light` — Muted labels
- `accent-slate-subtle` — Secondary tinted backgrounds

### Neutral scale
`neutral-950` through `neutral-50` plus `neutral-white`. Use `neutral-50` (`#fafafa`) for page backgrounds, `neutral-white` for cards/surfaces.

### Semantic
- `semantic-success` / `semantic-success-light` — Positive states, results
- `semantic-warning` / `semantic-warning-light` — Caution states
- `semantic-error` / `semantic-error-light` — Error states
- `semantic-info` / `semantic-info-light` — Informational

## Typography

### Heading classes (defined in `globals.css`)

| Class | Font | Weight | Letter-spacing | Line-height | Use for |
|-------|------|--------|---------------|-------------|---------|
| `.heading-display` | Manrope | 400 | -0.025em | 1.15 | Page hero titles |
| `.heading-section` | Manrope | 400 | -0.02em | 1.2 | Section headings |
| `.heading-component` | Inter | 500 | -0.01em | 1.3 | Card titles, labels |

### Tailwind font utilities

- `font-display` — Manrope (headings, display text)
- `font-sans` — Inter (body, UI text)

### Scale

Use the Tailwind font size scale: `text-xs` through `text-7xl`. These map to the design token values in `generated-theme.ts`.

## Spacing & Layout

- Section vertical padding: `py-16` to `py-24`
- Content max-width: `max-w-7xl mx-auto`
- Component gaps: `gap-4` (tight), `gap-6` (normal), `gap-8` (loose)
- Card padding: `p-6` to `p-8`

## Shadows

| Token | Usage |
|-------|-------|
| `shadow-card` | Default card state |
| `shadow-card-hover` | Card hover state |
| `shadow-card-float` | Elevated/floating cards |
| `shadow-card-soft` | Subtle card presence |
| `shadow-accent-glow` | Burgundy glow effect |

## Border Radius

Use the token scale: `rounded-sm` (2px), `rounded-md` (4px), `rounded-lg` (8px), `rounded-xl` (12px).

Default for cards: `rounded-lg` or `rounded-xl`.

## Transitions

| Token | Duration | Use for |
|-------|----------|---------|
| `duration-fast` | 150ms | Hover states, small interactions |
| `duration-base` | 250ms | Standard transitions |
| `duration-slow` | 400ms | Complex animations |
| `duration-entrance` | 700ms | Page/section entrances |

Easing: `ease-smooth` (standard), `ease-spring` (energetic).

## Component Patterns

### Buttons (CTA)
- Primary: `bg-brand-primary text-white` with `hover:bg-brand-primary-dark`
- Use `components/ui/primitives/Button.tsx`
- Burgundy is the CTA color across the site

### Cards
- White background, `shadow-card`, `rounded-lg`
- Hover: `shadow-card-hover` with `transition-shadow duration-base ease-smooth`
- Use components from `components/ui/cards/`

### Sections
- Alternate between `bg-white` and `bg-neutral-50` sections
- Each section: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Icons
- Integration logos: SVGs in `public/logos/` (58 files)
- UI icons: SVGs in `public/icons/`
- Prefer outline-style icons

## Framer Motion Patterns

Standard reveal animation for sections:

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
```

Use the custom hooks: `useScrollReveal`, `useParallax`, `useCountUp`.

## WorkflowCard Visual System

For workflow card design, refer to `frontend-resources/card-design-guide.md`. Key rules:
- Step types: trigger (`#2D5A7B`), process (`#8b2020`), result (`#2D6B4A`)
- Card header: action-outcome label, past participle, 2-4 words
- Card what-line: specific action description, 4-8 words
- Content language: Portuguese (Brazilian)

## Before Creating New Components

1. Check `components/ui/` — there are 38 existing design system components
2. Check if a variant of an existing component can serve the need
3. Follow the existing patterns for naming and file structure
4. New UI primitives go in `components/ui/[category]/`
5. Page-specific components go in root `components/`
