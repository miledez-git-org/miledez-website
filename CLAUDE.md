# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
- **Routes**: `/` (landing), `/saude` (healthcare), `/servicos` (services), `/varejo` (retail)

### Key Components

- `components/Header.tsx` - Fixed navigation (client component)
- `components/Footer.tsx` - Site footer (server component)
- `components/WorkflowAnimation.tsx` - Reusable animated workflow visualization with Intersection Observer
- `components/Icons.tsx` - All SVG icons (outline style, 1.5px stroke)

### Path Aliases

Use `@/` for imports from project root: `import { icons } from '@/components/Icons'`

## Design System (LOCKED - See brand-direction-locked.md)

**Do not deviate from these principles:**

- Extreme minimalism - every element must justify existence
- White backgrounds only (no cards, shadows, gradients, rounded corners)
- Outline icons only (1.5px stroke, black)
- Accent color (`brand-accent: #8b2020`) for key CTAs only (max 1-2 per page)
- Separation via spacing (80-140px between sections), not visual containers

### Brand Colors (Tailwind)

```
brand-black:  #1a1a1a  - Headlines, primary text, buttons
brand-dark:   #2d2d2d  - Button hover state
brand-text:   #3d3d3d  - Body text
brand-muted:  #5a5a5a  - Secondary text, nav links
brand-light:  #7a7a7a  - Tertiary info
brand-border: #e0e0e0  - Dividers
brand-accent: #8b2020  - Dark red, use sparingly
```

### Typography

- H1: 3.5rem, weight 500, letter-spacing -0.03em
- H2: 2rem, weight 500, letter-spacing -0.02em
- H3: 1.25rem, weight 500, letter-spacing -0.01em
- Body: 1rem, weight 400, line-height 1.5-1.6

## Animation Pattern

Workflow animations use Intersection Observer with threshold 0.3 to trigger on viewport entry. See `WorkflowAnimation.tsx` for the reusable pattern with:
- Sequential fade-in for steps
- Animated connection lines
- Data pulse animations

## Static Export Note

The site is configured for static export. To add API routes or SSR, remove `output: 'export'` from next.config.js and set `images.unoptimized: false`.
