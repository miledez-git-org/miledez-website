# CLAUDE.md - Website Domain

> **Workspace Context:** For agency-wide guidance, see the root [CLAUDE.md](../../CLAUDE.md) and [WORKSPACE.md](../../WORKSPACE.md)

This file provides development guidance for the mil&dez website.

**Location:** `_tools/website/` (port 3000)

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

- `components/Header.tsx` - Fixed navigation with logo, desktop nav, mobile hamburger menu
- `components/Footer.tsx` - Site footer (server component)
- `components/WorkflowAnimation.tsx` - Reusable animated workflow visualization with Intersection Observer
- `components/DiagnosticoAutomacao.tsx` - Interactive automation quiz with ROI calculator
- `components/SectionNavButton.tsx` - Navigation buttons between sections
- `components/Icons.tsx` - All SVG icons (outline style, 1.5px stroke)

### Assets

- `public/logo.svg` - Website logo (32px height in header)

### Path Aliases

Use `@/` for imports from project root: `import { icons } from '@/components/Icons'`

## Design System

**LOCKED - See `../../brand/brand-direction-locked.md` for complete specifications**

Use `/brand:colors` command for quick color reference, or `/brand:check` to verify compliance.

## Animation Pattern

Workflow animations use Intersection Observer with threshold 0.3 to trigger on viewport entry. See `WorkflowAnimation.tsx` for the reusable pattern with:
- Sequential fade-in for step elements
- Static connection lines (always visible)
- Animated data pulse dots moving along connections

## Static Export Note

The site is configured for static export. To add API routes or SSR, remove `output: 'export'` from next.config.js and set `images.unoptimized: false`.
