# Industry Subpages Revision Plan

## Context

The three industry subpages (saude, servicos, varejo) need visual and layout revisions to improve consistency with the homepage design system, enhance visual impact, and fix alignment/sizing issues. Six specific changes across shared components and page files.

---

## Changes Overview

| # | Change | Scope |
|---|--------|-------|
| 1 | Hero cards: constrain to 280px, left-align content | WorkflowVisualCompact + pages |
| 2 | Workflows: 2x2 grid to horizontal row + fix title design | WorkflowVisualCompact + pages |
| 3 | All section headers: left-aligned | Pages (workflows section) |
| 4 | Results: orange figures + two-column layout | MetricsGrid + pages |
| 5 | Integrations: actual company logo SVGs | IndustryIntegrations + pages |
| 6 | Challenges: enhanced card design | ChallengeCard |

---

## Phase 1: Shared Components

### 1a. `components/WorkflowVisual/WorkflowVisualCompact.tsx`

**Title redesign** — Remove black bar, use design-system-consistent heading:
```tsx
// BEFORE (lines 11-16)
<div className="mb-6">
  <span className="text-lg font-bold text-neutral-900 uppercase tracking-wide">{title}</span>
  <div className="h-1 bg-[#16232A] mt-3 rounded-full" />
</div>

// AFTER
<div className="mb-5">
  <h3 className="text-base font-semibold text-brand-black">{title}</h3>
</div>
```

**Card width constraint** — Add `w-[280px]` to step card div (line 25).

**Left-align cards** — Change flex column (line 19) to `items-start` so 280px cards left-align within parent, creating the asymmetric whitespace the user wants.

### 1b. `components/industry/ChallengeCard.tsx`

Redesign from flat bordered cards to elevated cards with brand accents:
- `bg-white rounded-lg p-8 shadow-card hover:shadow-card-hover` (replaces border + hover:bg-highlight)
- Orange top accent bar: `absolute top-0 left-0 right-0 h-1 bg-brand-primary rounded-t-lg`
- Icon container: `rounded-lg bg-brand-primary-subtle text-brand-primary` (replaces black-bordered box)
- Title: `font-semibold` (from `font-medium`)

### 1c. `components/industry/MetricsGrid.tsx`

**Orange values** — Change metric value color from `style={{ color: '#16232A' }}` to `className="text-brand-primary"`.

**Orange accents** — Change AccentBar and GrowthArrow colors from `#16232A` to brand-primary.

**Grid for right-column** — Change from `grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16` to `grid-cols-2 gap-8` (compact 2x2 that sits in the right column).

### 1d. `components/industry/IndustryIntegrations.tsx`

**Interface change:**
```tsx
// BEFORE
interface Integration { name: string; icon: ReactNode }

// AFTER
interface Integration { name: string; logo: string }
```

**Render logo images** instead of icon ReactNodes:
```tsx
<img src={`/logos/${integration.logo}.svg`} alt={integration.name} className="w-8 h-8 object-contain" />
```

Update hover borders from `#16232A` to `brand-primary`. Add `rounded-lg` to containers.

---

## Phase 2: Page Files (apply to all 3)

Files: `app/saude/SaudeContent.tsx`, `app/servicos/ServicosContent.tsx`, `app/varejo/VarejoContent.tsx`

### 2a. Workflows section — left-align + horizontal row
- Remove `text-center` from header wrapper div
- Remove `mx-auto` from subtitle `<p>`
- Change grid from `lg:grid-cols-2` to `md:grid-cols-2 lg:grid-cols-4 gap-6`

### 2b. Results section — two-column layout
Restructure from linear (heading -> metrics -> paragraphs) to two-column:
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
  <div>
    <h2>Resultados tipicos</h2>
    <p>...</p>
    <p>...</p>
  </div>
  <MetricsGrid metrics={metrics} />
</div>
```

### 2c. Integrations data — switch to logo filenames
Change from `{ name: 'X', icon: icons.x }` to `{ name: 'X', logo: 'x' }`.

**Missing logos handling** (drop + substitute):
- Drop: PDF, Email, Prontuario (generic, not brands)
- Substitute: ClickSign -> DocuSign
- Drop: Pixeon, Nibo, Tiny ERP, Melhor Envio (no logo SVGs)

### 2d. Update imports
- Remove `icons` from `import { icons, stepIcons }` (only `stepIcons` still needed for challenges)

---

## Verification

1. `npm run build` — catch type errors
2. Visual QA on each page at `/saude`, `/servicos`, `/varejo`
3. Mobile responsiveness check
