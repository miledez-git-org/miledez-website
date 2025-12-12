# mil&dez Website (Next.js)

Next.js 14 + TypeScript + Tailwind CSS website for mil&dez automation agency.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Main landing page |
| `/saude` | `app/saude/page.tsx` | Healthcare industry |
| `/servicos` | `app/servicos/page.tsx` | Professional services |
| `/varejo` | `app/varejo/page.tsx` | Retail/E-commerce |
| `/apresentacao` | `app/apresentacao/page.tsx` | Sales presentation |

## Project Structure

```
website/
├── app/
│   ├── layout.tsx           # Root layout (metadata, fonts)
│   ├── globals.css          # Global styles + Tailwind
│   ├── page.tsx             # Landing page
│   ├── saude/
│   │   ├── page.tsx         # Server component (metadata)
│   │   └── SaudeContent.tsx # Client component (interactive)
│   ├── servicos/
│   │   ├── page.tsx
│   │   └── ServicosContent.tsx
│   ├── varejo/
│   │   ├── page.tsx
│   │   └── VarejoContent.tsx
│   └── apresentacao/
│       └── page.tsx              # Sales presentation
├── components/
│   ├── Header.tsx           # Navigation header with logo
│   ├── Footer.tsx           # Site footer
│   ├── WorkflowAnimation.tsx # Reusable animated workflow
│   ├── SectionNavButton.tsx # Section navigation buttons
│   ├── DiagnosticoAutomacao.tsx # ROI quiz calculator
│   └── Icons.tsx            # All SVG icons
├── public/
│   └── logo.svg             # Website logo
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Development with AI

### Claude Code CLI (Recommended)
```bash
# Install globally
npm install -g @anthropic-ai/claude-code

# Run in project directory
claude

# Example prompts:
# "Add a contact form to the landing page"
# "Create a 404 page"
# "Optimize images for Core Web Vitals"
```

### Cursor IDE
- Open folder in Cursor
- Cmd+K for inline edits
- Cmd+L for chat with full codebase context

## Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (first time - will prompt for config)
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments on every push.

## Key Features

### File-Based Routing
No router configuration needed. Create a folder with `page.tsx` and it becomes a route.

### Server Components
Pages use server components by default for better SEO and performance. Interactive parts use `'use client'` directive.

### Static Export
Currently configured for static export (`output: 'export'` in `next.config.js`). Remove this to enable:
- API routes (`app/api/...`)
- Server-side rendering
- Incremental Static Regeneration

### TypeScript
Full TypeScript support with strict mode enabled.

## Brand Reference

**See `../brand/brand-direction-locked.md` for complete design specifications.**

This document is the single source of truth for:
- Logo usage and sizing
- Color palette
- Typography
- Component styles
- Layout principles

The brand direction applies to all mil&dez materials (website, social media, proposals, etc.).

## Key Design Rules

- NO cards, shadows, gradients, rounded corners
- NO colored backgrounds
- NO filled icons
- White background everywhere
- Outline icons only (1.5px stroke)
- Separation via spacing and dividers
- Accent color (#8b2020) for CTAs and indicators

## Custom Colors (Tailwind)

```typescript
// Available as: text-brand-*, bg-brand-*, border-brand-*
colors: {
  brand: {
    black: '#1a1a1a',
    dark: '#2d2d2d',
    text: '#3d3d3d',
    muted: '#5a5a5a',
    light: '#7a7a7a',
    border: '#e0e0e0',
    accent: '#8b2020',
    'accent-dark': '#6b1a1a',
  }
}
```

## Adding New Pages

1. Create folder: `app/new-page/`
2. Add `page.tsx` for metadata:
```tsx
import type { Metadata } from 'next'
import NewPageContent from './NewPageContent'

export const metadata: Metadata = {
  title: 'New Page - mil&dez',
  description: 'Description for SEO',
}

export default function NewPage() {
  return <NewPageContent />
}
```

3. Add `NewPageContent.tsx` with `'use client'` if interactive

## Adding API Routes (requires removing static export)

1. Remove `output: 'export'` from `next.config.js`
2. Create `app/api/contact/route.ts`:
```tsx
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  // Handle form submission
  return NextResponse.json({ success: true })
}
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
