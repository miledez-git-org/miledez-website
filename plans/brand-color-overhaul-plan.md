# Brand Color & Typography Overhaul

## Context

The mil&dez website is transitioning from a dark teal/burgundy color system (`#06392f` primary + `#8b2020` legacy) to a vibrant new two-color palette. The current site has inconsistent body text colors and tight section spacing. This plan replaces all brand colors, unifies body text, bumps minimum text sizes, and adds breathing room between sections.

**New palette:**
- Primary: `#eb5100` (orange) — high-visibility, action-oriented
- Secondary: `#085042` (deep teal) — complementary, professional/trust

---

## Color Application Strategy

### Primary `#eb5100` — Action & Attention

| Element Type | Examples |
|---|---|
| CTA buttons | "Agendar demonstração", all `btn-primary` |
| Heading accent spans | "que trabalha por você", "não meses", "Vamos conversar" |
| Logo ampersand (`&`) | Header, footer |
| Stat numbers | 70%, 50%, 2x, 100% in MetricsGrid |
| Active indicators | Nav underline, progress dots, workflow process steps |
| Focus states & selection | `::selection`, `*:focus-visible` |
| Text links | `btn-text-link`, `btn-ghost-brand` |
| Accent bars | MetricsGrid underlines |
| FlipCards | Heading, highlights, back-card bg, CTA button |
| ProcessSectionEnhanced | Card backgrounds |
| WorkflowCard | Process step header color |
| SVG assets | Logo accent, monogram |

### Secondary `#085042` — Trust & Data

| Element Type | Examples |
|---|---|
| Footer background | Professional anchor color |
| Pricing card backgrounds | Trust/value-oriented |
| Header "Contato" button | Differentiated from in-page CTAs |
| Analytics sparklines | Data visualization elements |
| Workflow connectors | Data-flow lines in WorkflowAnimationSection |

---

## Phase 1: Core Tokens & CSS Variables (cascade to ~80% of site)

### `components/ui/tokens/generated-theme.ts`
Update `colors.brand`:
```
primary:         #eb5100    (was #06392f)
primary-dark:    #c74400    (was #042a22)
primary-light:   #ff6a1a   (was #0a5c4a)
primary-subtle:  rgba(235, 81, 0, 0.08)
secondary:       #085042    (NEW)
secondary-dark:  #063d32    (NEW)
secondary-light: #0a6654   (NEW)
secondary-subtle: rgba(8, 80, 66, 0.08) (NEW)
muted:           #525252    (was #4a5568 — align with neutral-600)
```

### `app/globals.css`
- `--brand-accent: #eb5100` | `--brand-accent-dark: #c74400`
- Add `--brand-secondary: #085042` | `--brand-secondary-dark: #063d32`
- `::selection` → `#eb5100`
- `btn-primary` hover/active shadows → `rgba(235, 81, 0, ...)`
- `btn-ghost-brand` hover bg → `rgba(235, 81, 0, 0.08)`

### `tailwind.config.ts`
- `accent-glow` shadow → `rgba(235, 81, 0, 0.3)`
- `accent-glow-strong` → `rgba(235, 81, 0, 0.4)`
- Add `secondary-glow` → `rgba(8, 80, 66, 0.3)`

**Auto-cascade effect:** All `text-brand-primary`, `bg-brand-primary`, `border-brand-primary` classes site-wide update automatically.

---

## Phase 2: Hardcoded Primary Color Replacements (`#8b2020` → `#eb5100`)

| File | Changes |
|---|---|
| `components/FlipCardsSection.tsx` | ~15 inline `#8b2020` and `rgba(139,32,32,...)` replacements |
| `components/ProcessSectionEnhanced.tsx` | Card bg + shadow rgba (3 instances) |
| `components/WorkflowVisual/WorkflowCard.tsx` | `STEP_TYPE_COLORS.process` |
| `components/WorkflowVisual/WorkflowCardFlow.tsx` | LEGEND_ITEMS "Processo" color |
| `components/WorkflowVisual/WorkflowStep.tsx` | Connector color |
| `components/WorkflowAutomationVisual.tsx` | `ACCENT_COLOR` constant |
| `components/WorkflowDemo.tsx` | Active variation indicator |
| `components/industry/MetricsGrid.tsx` | Stat value `#ff6600` → `#eb5100` |
| `public/monogram.svg` | `fill: #8b2020` → `fill: #eb5100` |
| `public/logo.svg` | `.accent { fill: #8b2020 }` → `#eb5100` |

---

## Phase 3: Secondary Color Application (`#085042`)

| File | Change |
|---|---|
| `components/Footer.tsx` | `bg-brand-primary` → `bg-brand-secondary` |
| `components/PricingSection.tsx` | `backgroundColor: '#06392f'` → `'#085042'` |
| `components/AnalyticsDashboard.tsx` | Sparkline `#8b2020` → `#085042` (4 instances) |
| `components/WorkflowAnimationSection.tsx` | Connector stroke + trigger border `#06392f` → `#085042` |
| `components/Header.tsx` | "Contato" button: add inline `backgroundColor: '#085042'` (desktop + mobile) |
| `components/ValuePropositionB.tsx` | Benefit icons: `text-brand-primary` → `text-brand-secondary` (teal icons complement orange CTAs) |

---

## Phase 4: Body Text Unification → `text-neutral-600`

Replace mixed body text colors with consistent `text-neutral-600`:

| Pattern | Files |
|---|---|
| `text-brand-muted` → `text-neutral-600` | `app/page.tsx`, `WorkflowExplainerSection`, `PricingSection`, `ProcessSection`, `ProcessSectionEnhanced`, `WorkflowAnimationSection`, `LogoGrid` |
| `text-brand-text` → `text-neutral-600` | `ServicosContent`, `VarejoContent`, `AnalyticsDashboard` |
| `text-neutral-500` → `text-neutral-600` | `ValuePropositionB` (line 137), `WorkflowStep` (line 279), `WorkflowExplainerSection` (line 57) |

**Scope:** Only body/description text. Keep `text-neutral-500` on small labels/captions. Keep heading colors (`brand-black`, `neutral-900`) unchanged.

---

## Phase 5: Typography Size & Weight

### MetricsGrid stat descriptions (`components/industry/MetricsGrid.tsx`)
- Stat label spacing: `mt-4` → `mt-6` (16px → 24px gap between number and description)
- Text already `text-base font-medium` — confirmed correct

### WorkflowCard solo descriptions (`components/WorkflowVisual/WorkflowCard.tsx`)
- Solo variant: `text-[13px]` → `text-base` (16px)
- Compact variant: keep `text-[11px]` (miniature UI element)

### ChallengeCard (`components/industry/ChallengeCard.tsx`)
- Already `text-base text-neutral-600` — no change needed

---

## Phase 6: Section Spacing

Increase vertical padding on all sections except hero:

### `app/page.tsx`
| Section | Current | New |
|---|---|---|
| Hero | `min-h-screen` | unchanged |
| Value Proposition | `py-24 md:py-36` | `py-28 md:py-40` |
| Integrations | `py-16 md:py-24` | `py-20 md:py-28` |
| How It Works | `py-24 md:py-36` | `py-28 md:py-40` |
| Pricing | `py-24 md:py-36` | `py-28 md:py-40` |
| CTA | `py-24 md:py-36` | `py-28 md:py-40` |

### `components/WorkflowExplainerSection.tsx`
- `py-24 md:py-36` → `py-28 md:py-40`

### Industry pages (`SaudeContent`, `ServicosContent`, `VarejoContent`)
- Section wrappers `py-20 md:py-28` → `py-24 md:py-32`

---

## Phase 7: Documentation

- Update `CLAUDE.md` accent reference: `#eb5100` (orange) + `#085042` (teal)
- Update root `CLAUDE.md` design system section
- Run `bash scripts/sync-conventions.sh --apply`

---

## Verification

1. `npm run build` — catch type/compilation errors after token changes
2. `npm run dev` — visual inspection of:
   - Hero: orange accent text + orange CTA button
   - Workflow section: orange heading accent
   - Value Proposition: orange accent + benefit icons (should be orange via cascade)
   - Integrations: teal heading accent (via cascade — confirm or adjust)
   - Pricing: teal card backgrounds, correct button contrast
   - CTA: orange accent + orange button
   - Footer: teal background with white text
   - Header: orange `&` in logo, teal "Contato" button
   - Stats: orange numbers, 24px gap to descriptions, 16px/500 weight labels
   - Challenge cards: 16px body text, neutral-600 color
3. Industry pages (`/saude`, `/servicos`, `/varejo`): verify stats, challenge cards, workflow cards
4. Check SVG logo/monogram render in browser
5. Contrast check: white text on `#eb5100` buttons (~4.5:1 AA pass for large text)

---

## Files Modified (Total: ~25)

**Core (3):** `generated-theme.ts`, `globals.css`, `tailwind.config.ts`
**Homepage (1):** `app/page.tsx`
**Components (14):** `FlipCardsSection`, `ProcessSectionEnhanced`, `WorkflowCard`, `WorkflowCardFlow`, `WorkflowStep`, `WorkflowAutomationVisual`, `WorkflowDemo`, `MetricsGrid`, `AnalyticsDashboard`, `PricingSection`, `ValuePropositionB`, `Header`, `Footer`, `WorkflowExplainerSection`, `LogoGrid`, `ProcessSection`, `WorkflowAnimationSection`, `ScrollProgress`
**Industry pages (3):** `SaudeContent`, `ServicosContent`, `VarejoContent`
**Assets (2):** `monogram.svg`, `logo.svg`
**Docs (2):** `CLAUDE.md` (website + root)
