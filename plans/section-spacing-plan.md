# Section Spacing — More Spacious

## Context
The homepage sections (WorkflowExplainer through Footer) currently use `py-20 md:py-28` (80px/112px) vertical padding. The goal is to increase breathing room between these sections for a more spacious, premium feel.

## Current Values

| Section | File | Current Spacing |
|---------|------|----------------|
| WorkflowExplainer | `components/WorkflowExplainerSection.tsx:142` | `py-20 md:py-28` |
| ValueProposition | `app/page.tsx:92` | `py-20 md:py-28` |
| LogoGrid | `app/page.tsx:99` | `py-20 md:py-28` |
| ProcessSection | `app/page.tsx:106` | `py-20 md:py-28` |
| PricingSection | `app/page.tsx:113` | `py-20 md:py-28` |
| Final CTA | `app/page.tsx:120` | `py-20 md:py-28` |
| Footer | `components/Footer.tsx:7` | `py-16 md:py-24` |

## Changes

Increase vertical padding from `py-20 md:py-28` → `py-24 md:py-36` across sections 2-7 (80/112px → 96/144px). Footer from `py-16 md:py-24` → `py-20 md:py-28` (64/96px → 80/112px).

This adds ~20-30% more vertical space — noticeable but not excessive.

### Files to edit
1. **`app/page.tsx`** — Update `py-20 md:py-28` → `py-24 md:py-36` on lines 92, 99, 106, 113, 120 (5 section wrappers)
2. **`components/WorkflowExplainerSection.tsx`** — Update `py-20 md:py-28` → `py-24 md:py-36` on line 142
3. **`components/Footer.tsx`** — Update `py-16 md:py-24` → `py-20 md:py-28` on line 7

## Verification
1. `npm run dev` — check homepage visually at localhost:3000
2. Verify spacing looks balanced on mobile and desktop viewports
3. `npm run build` — confirm no build errors
