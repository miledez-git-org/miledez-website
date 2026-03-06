# mil&dez Website Design Audit

## Context

Full visual and code-level design audit of the mil&dez website, evaluated against the `miledez-design-system` skill. The goal is to identify inconsistencies in alignment, typography, spacing, and minimalism, and to produce a concrete improvement plan that makes the site lighter, more consistent, and more aligned with the design system principles.

**Pages audited:** Homepage, Saude, Servicos, Varejo (404), Termos, Politica-Privacidade
**Method:** Code analysis of all pages/components + Puppeteer screenshots at 1440px viewport

---

## 1. Overall Assessment

### What works well
- **Hero sections** (homepage + industry pages) are strong: left-aligned text with right visual creates good asymmetric composition
- **ProcessSection** ("Como trabalhamos") is excellent: left-aligned timeline with large numbers, clean hierarchy, good use of orange accent
- **Industry pages** (Saude, Servicos) are well-structured and consistent with each other
- **Typography scale** is mostly correct: large Manrope headings (32-60px) with Source Sans 3 body text
- **Color usage** on marketing sections correctly uses orange at decision points and teal for structural accents
- **PricingSection** is clean: dark cards with clear tier hierarchy, good scanability
- **Workflow step cards** on industry pages communicate process visually (icon + label pairs)

### What needs fixing
Three systemic issues dominate:
1. **Inconsistent alignment** between sections (center vs left)
2. **Token/color drift** (hardcoded hex values, outdated CSS variables)
3. **Typography violations** (text-xs, wrong fonts on legal pages, undefined font references)

---

## 2. Alignment Inconsistency (HIGH PRIORITY)

The site mixes center-aligned and left-aligned sections without a clear pattern, creating a jarring reading experience.

### Current state

| Homepage Section | Heading Alignment | Content Alignment |
|-----------------|-------------------|-------------------|
| Hero | Left | Left text, right visual |
| PainPoints | **Center** | Left (cards) |
| ValueProposition | Left | Left (2-col) |
| BusinessProfiles | **Center** | **Center** (cards) |
| Testimonials | **Center** | **Center** (carousel) |
| WorkflowExplainer | **Center** | **Center** |
| LogoGrid (Integrations) | **Center** | **Center** (grid) |
| ProcessSection | Left | Left (timeline) |
| PricingSection | **Center** | Left (cards) |
| Final CTA | **Center** | **Center** |

| Industry Page Section | Heading Alignment |
|----------------------|-------------------|
| Hero | Left |
| Challenges | Left |
| Workflows | Left |
| Results | Left |
| Integrations | Left |
| CTA | **Center** |

**Problem:** Homepage has 6 centered sections vs 3 left-aligned. Industry pages are almost entirely left-aligned. The two page types feel disconnected.

### Decision: Standardize to left-aligned

Convert ALL homepage section headings to left-aligned. Only the Final CTA stays centered (closing statement).

**Sections to convert to left-aligned headings:**
1. `PainPointSection` — heading-display currently `text-center`, change to left
2. `WorkflowExplainerSection` — centered heading + pipeline, shift heading left
3. `PricingSection` — centered heading, shift left
4. `TestimonialCarousel` — centered heading, shift left
5. `BusinessProfilesSection` — centered heading, shift left
6. `LogoGrid` — centered heading, shift left

**Files to modify:**
- `components/PainPointSection.tsx:34` — remove `text-center`
- `components/WorkflowExplainerSection.tsx` — remove centering from heading wrapper
- `components/PricingSection.tsx` — remove centering from heading wrapper
- `components/TestimonialCarousel.tsx` — remove centering from heading wrapper
- `components/BusinessProfilesSection.tsx` — remove centering from heading wrapper
- `components/LogoGrid.tsx` — remove centering from heading wrapper

---

## 3. Container Width Inconsistency (MEDIUM)

| Context | Width |
|---------|-------|
| Homepage hero | `max-w-7xl` (80rem / 1280px) |
| All other sections | `max-w-6xl` (72rem / 1152px) |
| Legal pages | `max-w-3xl` (48rem / 768px) |
| Final CTA | `max-w-3xl` |

**Problem:** The hero at `max-w-7xl` is 128px wider than every other section.

**Fix:** Change homepage hero from `max-w-7xl` to `max-w-6xl`.

**File:** `app/page.tsx:50` — change `max-w-7xl` to `max-w-6xl`

---

## 4. Section Spacing Inconsistency (MEDIUM)

Current padding varies without clear logic:

| Section Type | Padding |
|-------------|---------|
| Hero | `min-h-screen` (no py) |
| Standard sections | `py-20 md:py-28` |
| Integrations/CTA | `py-16 md:py-20` |
| Industry sections | `py-24 md:py-32` |

**Standardize to two tiers:**
- **Standard sections:** `py-20 md:py-28` (current homepage pattern)
- **Compact sections:** `py-16 md:py-20` (for CTA and transitions)

---

## 5. Typography Issues (CRITICAL + HIGH)

### 5a. CSS variable mismatch (CRITICAL)

In `app/globals.css:23-24`:
```css
--brand-accent: #d14800;
--brand-accent-dark: #b33d00;
```

Design system defines `#eb5100` and hover `#c74400`. The `.btn-primary` class uses `var(--brand-accent)`, meaning **all primary buttons render the wrong orange**.

**Fix:** Update `globals.css` lines 23-24:
```css
--brand-accent: #eb5100;
--brand-accent-dark: #c74400;
```

### 5b. text-xs violations (CRITICAL)

77 instances of `text-xs` (12px) across the codebase. Design system minimum is `text-sm` (14px).

**Most impactful violations (in active pages):**
- `components/Footer.tsx:71,75,81,87` — footer text
- `components/BenefitsSection.tsx:158`
- `components/industry/IndustryIntegrations.tsx:37` — integration labels
- `components/industry/MetricsGrid.tsx:40` — metric labels
- `components/TestimonialCarousel.tsx:117,126` — testimonial metadata
- `components/Header.tsx:183` — dropdown label
- `components/ScrollProgress.tsx:105`
- `components/ui/primitives/Button.tsx:46` — small button size
- `components/ui/feedback/Badge.tsx:53`
- `components/WorkflowVisual/WorkflowCard.tsx:65` — card header labels

**Fix:** Replace all `text-xs` with `text-sm` across all files.

### 5c. Terms/Privacy pages missing Manrope (HIGH)

Both `app/termos/page.tsx` and `app/politica-privacidade/page.tsx`:
- H1 uses `heading-display` (correct) but `text-neutral-900` instead of `text-brand-black`
- H2s use `text-xl font-semibold` without `.heading-display` class — renders in Source Sans 3 instead of Manrope

**Fix:** Add `.heading-display` to all H2 elements and change color to `text-brand-black`.

### 5d. Undefined `--font-inter` reference (HIGH)

`components/WorkflowVisual/WorkflowCard.tsx:103,149` and `WorkflowCardFlow.tsx:41` reference `var(--font-inter)` which is not defined. Falls back to system font.

**Fix:** Replace with `var(--font-manrope)` or use `font-display` Tailwind class.

### 5e. Hardcoded font-family inline styles (MEDIUM)

13 instances of `style={{ fontFamily: ... }}` across components when they should use Tailwind's `font-display` or `font-sans` classes.

**Key files:** Header.tsx:84, WorkflowExplainerSection.tsx:59, WorkflowCard.tsx:86,92,126, IntegrationMesh.tsx:121

---

## 6. Color Token Violations (HIGH)

### 6a. Hardcoded `#274855` (30+ instances)

This is `brand-black` but used as raw hex in:
- `components/Header.tsx:78` — `backgroundColor: '#274855'`
- `components/Footer.tsx:7` — `backgroundColor: '#274855'`
- `components/PainPointSection.tsx:37` — `text-[#274855]`
- `components/BusinessProfilesSection.tsx:166` — `bg-[#274855]`
- `components/PricingSection.tsx:75,89`
- `app/saude/SaudeContent.tsx:91-92` — badge text
- `app/servicos/ServicosContent.tsx:91-92` — badge text

**Fix:** Replace all `#274855` with `text-brand-black`, `bg-brand-black`, or `border-brand-black` Tailwind classes.

### 6b. Hardcoded `#d14800` (old orange)

Header.tsx:90 uses `text-[#d14800]` for the "&" in the logo. Should be `text-brand-primary`.

### 6c. Undefined `border-brand-border` class

Used in `ContactModal.tsx` but not defined in tokens. Should be `border-neutral-200`.

---

## 7. Icon Anti-Patterns (MEDIUM)

### 7a. Orange tinted background containers on icons

PainPoint cards and industry challenge cards wrap icons in `bg-brand-primary-subtle` (orange tint) rounded containers.

Design system anti-pattern: "Never wrap icons in colored background containers. Color via parent text class only."

**Fix:** Remove bg container from icon wrapper in `components/industry/ChallengeCard.tsx`

### 7b. Emoji in WorkflowCard

`WorkflowCard.tsx` uses emoji characters (lightning, gear, checkmark). Design system: "Never emoji."

**Fix:** Replace with inline SVG icons from Lucide/Phosphor.

---

## 8. Minimalism & Weight Reduction

Decision: Full cleanup.

### 8a. Excessive vertical whitespace

- Between PainPoint cards and the next section: ~300px of empty space
- Between BusinessProfiles and Testimonials: ~200px of empty space
- WorkflowExplainer section: pipeline surrounded by ~400px of empty space below

**Fix:** Reduce section padding from `py-20 md:py-28` to `py-16 md:py-24` globally.

### 8b. WorkflowExplainer feels small and isolated

The centered pipeline (Gatilho -> Processo -> Resultado) occupies only ~60% of the viewport width.

**Fix:** Make the pipeline wider (use the full `max-w-6xl` width) or convert to a left-aligned layout with heading on the left and pipeline on the right.

### 8c. BusinessProfilesSection shows only 1 of 3 cards

At desktop width, only 1 dark card appears visible in the screenshot capture. Needs investigation — cards may be overflowing or hidden.

### 8d. Decorative orange top-border on ChallengeCards

The challenge cards have a thick orange gradient top border. This is decorative and doesn't aid comprehension.

**Fix:** Remove the gradient top border. The icon + title hierarchy is sufficient.

---

## 9. Cross-Page Consistency Summary

| Property | Homepage | Industry Pages | Legal Pages | Recommendation |
|----------|----------|---------------|-------------|----------------|
| Container | max-w-7xl (hero), max-w-6xl | max-w-6xl | max-w-3xl | Standardize hero to 6xl |
| Section padding | py-20 md:py-28 | py-24 md:py-32 | pt-32 pb-20 | Align to py-20 md:py-28 |
| Heading alignment | Mixed (center/left) | Left | Left | Standardize to left |
| Heading color | text-brand-black | text-brand-black | text-neutral-900 | Standardize to brand-black |
| H2 font | Manrope (heading-display) | Manrope (heading-display) | Source Sans 3 (no class) | Add heading-display everywhere |
| H2 size | text-[2rem] md:text-[2.5rem] | text-[2rem] md:text-[2.5rem] | text-xl | Align legal to text-2xl |
| Card padding | p-8 | p-8 | n/a | Keep p-8 |
| Heading bottom margin | mb-12 md:mb-14 | mb-12 md:mb-14 | mb-4 | Align legal to mb-8 |

---

## 10. Implementation Priority

### Phase 1: Critical Fixes (token/color correctness)
1. Fix `--brand-accent` in globals.css (#d14800 -> #eb5100)
2. Replace hardcoded `#274855` with `brand-black` classes (30+ files)
3. Replace hardcoded `#d14800` with `brand-primary` classes
4. Fix undefined `--font-inter` references in WorkflowCard
5. Fix `border-brand-border` -> `border-neutral-200` in ContactModal

### Phase 2: Typography Compliance
6. Replace all `text-xs` with `text-sm` (77 instances)
7. Fix Terms/Privacy H2s: add `heading-display`, change color to `brand-black`
8. Replace inline `fontFamily` styles with Tailwind font classes (13 instances)

### Phase 3: Alignment Standardization
9. Convert ALL centered homepage sections to left-aligned headings (only Final CTA stays centered)
10. Standardize homepage hero to `max-w-6xl`
11. Standardize section padding to `py-20 md:py-28` / `py-16 md:py-20`

### Phase 4: Minimalism & Polish
12. Remove icon background containers from ChallengeCard
13. Replace emoji in WorkflowCard with SVG icons
14. Reduce excessive vertical whitespace between sections
15. Improve WorkflowExplainer width/layout
16. Investigate BusinessProfilesSection card visibility

---

## Verification

After implementation:
1. Run `npm run build` to verify no build errors
2. Take full-page screenshots of all pages at 1440px and compare with current
3. Grep for remaining `text-xs`, `#274855`, `#d14800`, `font-inter` to confirm zero violations
4. Visually verify all section headings are left-aligned (except Final CTA)
5. Verify all buttons render correct orange (#eb5100) not old orange (#d14800)
6. Check mobile viewport (375px) for no layout breaks
