# CLAUDE.md - Website Domain

> **Workspace Context:** For agency-wide guidance, see the root [CLAUDE.md](../../CLAUDE.md) and [WORKSPACE.md](../../WORKSPACE.md)

This file provides development guidance for the mil&dez website.

**Location:** `_tools/website/` (port 3000)

## Frontend Skill Requirement

**IMPORTANT:** Always use `/frontend-design` skill when working on any frontend enhancements including:
- New components or pages
- UI/UX improvements
- Styling changes
- Animation updates
- Layout modifications

## Build & Development Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production (static export)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a Next.js 14 static website for mil&dez, a Brazilian B2B automation agency. It uses the App Router with static HTML export (`output: 'export'` in next.config.js).

### Routing & Component Pattern

- **App Router**: Routes are in `/app` with file-based routing
- **Server/Client Separation**: Each route has:
  - `page.tsx` - Server component for metadata and SEO
  - `*Content.tsx` - Client component (`'use client'`) for interactive content
- **Routes**: `/` (landing), `/saude` (healthcare), `/servicos` (services), `/varejo` (retail), `/apresentacao` (presentation)

### Key Components

**Layout & Navigation:**
- `components/Header.tsx` - Fixed navigation with logo, desktop nav, mobile hamburger menu
- `components/Footer.tsx` - Site footer (server component)
- `components/SectionNavButton.tsx` - Navigation buttons between sections

**Interactive:**
- `components/DiagnosticoAutomacao.tsx` - Interactive automation quiz with ROI calculator
- `components/WorkflowAutomationVisual.tsx` - Animated workflow visualization with Intersection Observer
- `components/ScrollProgress.tsx` - Scroll progress indicator bar
- `components/PageTransition.tsx` - Page transition animations wrapper
- `components/Skeleton.tsx` - Skeleton loading state components
- `components/ErrorBoundary.tsx` - Error boundary for graceful error handling

**Sections:**
- `components/TechnologyPartners.tsx` - Technology partner logos display
- `components/PricingSection.tsx` - Pricing/plans section
- `components/LogoMarquee.tsx` - Scrolling partner logos
- `components/IntegrationMesh.tsx` - Integration visualization (uses real company logos)
- `components/BenefitsSection.tsx` - Benefits/outcomes display
- `components/ProcessSection.tsx` - Process visualization

**Design System:**
- `components/Icons.tsx` - All SVG icons (outline style, 1.5px stroke)
- `components/AnimatedIcons.tsx` - Animated icon variants

### Custom Hooks

- `hooks/useCountUp.ts` - Number animation counter
- `hooks/useMediaQuery.ts` - Responsive media queries
- `hooks/useScrollReveal.ts` - Scroll reveal animations
- `hooks/useParallax.ts` - Parallax scroll effects

### Assets

- `public/logo.svg` - Website logo (32px height in header)

### Path Aliases

Use `@/` for imports from project root: `import { icons } from '@/components/Icons'`

## Design System

**See `../../brand/brand-direction-locked.md` for complete specifications**

Use `/brand:colors` command for quick color reference, or `/brand:check` to verify compliance.

### Typography Classes

Use these CSS classes for brand-consistent typography:

| Class | Font | Weight | Usage |
|-------|------|--------|-------|
| `.heading-display` | Manrope | 300 | H1, hero headlines |
| `.heading-section` | Manrope | 400 | H2, section headers |
| `.heading-component` | Inter | 500 | H3, card titles |

Also available: `font-display` Tailwind utility for Manrope font family.

### Button Classes

| Class | Usage |
|-------|-------|
| `.btn-primary` | Primary CTAs - adds hover scale, shadow, active states |
| `.btn-secondary` | Secondary CTAs - adds hover/active scale transitions |

Example:
```jsx
<a className="btn-primary bg-brand-accent text-white px-10 py-5">
  Primary CTA
</a>
```

### Accessibility Patterns

All components should follow these patterns:
- Use `aria-hidden="true"` on decorative SVGs and animations
- Ensure 44x44px minimum touch targets on mobile
- Implement focus trap for modals/mobile menus
- Support Escape key to close overlays
- Use `role="menu"` and `role="menuitem"` for navigation menus

## Animation Patterns

### Workflow Animations
Workflow animations use Intersection Observer with threshold 0.3 to trigger on viewport entry. See `WorkflowAutomationVisual.tsx` for the reusable pattern with:
- Sequential fade-in for step elements
- Static connection lines (always visible)
- Animated data pulse dots moving along connections
- Stage indicator overlays

### TypeWriter Animation
Hero sections use a TypeWriter effect for dynamic text. Located in hero components.

### Advanced Interactions

**Scroll Progress** (`components/ScrollProgress.tsx`):
- Shows after scrolling past 50% of viewport
- Smooth animated progress bar at top of page
- Respects reduced motion preference

**Page Transitions** (`app/template.tsx` + `components/PageTransition.tsx`):
- Smooth fade transitions between routes
- Uses Next.js App Router template pattern
- Respects reduced motion preference

**Parallax Effects** (`hooks/useParallax.ts`):
- Decorative elements in hero section have subtle parallax
- Auto-disabled on touch devices and reduced motion

### Loading States & Error Handling

**Skeleton Components** (`components/Skeleton.tsx`):
- `Skeleton` - Base skeleton with pulse/shimmer animation
- `SkeletonText` - Multi-line text skeleton
- `SkeletonCard` - Card with optional image placeholder
- `SkeletonWorkflow` - Workflow steps skeleton
- `SkeletonPricing` - Pricing card skeleton
- `SkeletonHero` - Hero section skeleton
- `SkeletonPage` - Full page loading skeleton

**Error Boundaries** (`components/ErrorBoundary.tsx`):
- `ErrorBoundary` - Class component wrapper for catching errors
- `InlineErrorFallback` - Minimal inline error message
- `SectionErrorFallback` - Section-level error state

**Route-Level Handling**:
- `app/error.tsx` - Global error page with retry button
- `app/loading.tsx` - Route loading state with skeleton

Usage example:
```tsx
import ErrorBoundary from '@/components/ErrorBoundary'
import { SkeletonCard } from '@/components/Skeleton'

// With custom fallback
<ErrorBoundary fallback={<SkeletonCard />}>
  <MyComponent />
</ErrorBoundary>

// With default error UI
<ErrorBoundary showRetry onRetry={() => refetch()}>
  <DataComponent />
</ErrorBoundary>
```

## Static Export Note

The site is configured for static export. To add API routes or SSR, remove `output: 'export'` from next.config.js and set `images.unoptimized: false`.

## Recent Changes

| Date | Change |
|------|--------|
| 2025-12-24 | Loading states: Skeleton components, error boundaries, route-level handling |
| 2025-12-24 | Advanced interactions: Scroll progress, page transitions, parallax effects |
| 2025-12-24 | Typography system: Manrope extended to headlines (heading-display, heading-section classes) |
| 2025-12-24 | Accessibility: Focus trap in mobile menu, keyboard navigation, aria-hidden on decoratives |
| 2025-12-24 | Button states: btn-primary/btn-secondary classes with hover/active transitions |
| 2025-12-24 | Header: Backdrop blur on scroll, current page indicator, 44px touch targets |
| 2025-12-24 | Brand guidelines updated with accessibility standards and animation timing |
| 2025-12-19 | Homepage optimized: 12 sections → 8 |
| 2025-12-18 | Real company logos in IntegrationMesh |
| 2025-12-17 | Stage indicator overlays in workflow animation |
| 2025-12-16 | Alternating section backgrounds added |
| 2025-12-15 | Header logo updated to Manrope 32px |
| 2025-12-14 | TypeWriter animation in hero section |
