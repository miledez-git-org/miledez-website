# mil&dez Website

Agency website for mil&dez - Brazilian B2B AI workflow automation agency.

**Live site:** miledez.com.br
**Deployment:** Vercel (auto-deploy from main, static export)

---

## Tech Stack

- Next.js 14.2.35 (App Router, static export)
- React 18.3
- Tailwind CSS 3.4
- Framer Motion 12
- TypeScript (strict mode)

---

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build (static export)
npm run lint         # Run ESLint
npm run tokens:sync  # Sync design tokens from brand-tokens.json
```

**Build output:** Static HTML export (`output: 'export'` in `next.config.js`). No API routes or SSR.

---

## Project Structure

```
app/                        # Next.js App Router pages
  layout.tsx                # Root layout (metadata, fonts, lang=pt-BR)
  globals.css               # Global styles, CSS variables, font imports
  page.tsx                  # Landing page
  saude/                    # Healthcare industry vertical
  servicos/                 # Professional services vertical
  varejo/                   # Retail/e-commerce vertical
  termos/                   # Terms of service
  politica-privacidade/     # Privacy policy
components/
  ui/                       # Design system (38 components)
    primitives/             # Button, Input, Checkbox, Select, etc.
    cards/                  # Card, PricingCard, FeatureCard, etc.
    layout/                 # Modal, Accordion, Sidebar, Timeline
    navigation/             # Tabs, Breadcrumb, Pagination
    feedback/               # Alert, Badge, Toast, Tooltip, Skeleton
    data-display/           # Table, List, Avatar, Progress
    typography/             # Heading, Text, Logo, Overline
    tokens/                 # Design tokens + Tailwind sync script
  industry/                 # ChallengeCard, IndustryIntegrations, MetricsGrid
  WorkflowVisual/           # Workflow visualization system + presets
  Header.tsx                # Navigation header
  Footer.tsx                # Site footer
  ContactModal.tsx          # Lead capture form (Formspree)
  PricingSection.tsx        # Pricing tiers (requires onContactClick prop)
  LogoGrid.tsx              # Integration partners showcase
  DiagnosticoAutomacao.tsx  # ROI quiz calculator
  HeroWorkflow*.tsx         # Hero section variants
  WorkflowAnimation*.tsx    # Animation system
  ProcessSection*.tsx       # Process display sections
hooks/
  useMediaQuery.ts          # Responsive breakpoint detection
  useScrollReveal.ts        # Scroll-triggered reveal animations
  useCountUp.ts             # Animated number counting
  useParallax.ts            # Parallax scrolling effects
lib/
  utils.ts                  # Shared utilities (cn, clsx/tailwind-merge)
public/
  logos/                    # Integration logo SVGs (58 files)
  icons/                    # Icon SVGs (48 files)
frontend-resources/
  card-design-guide.md      # WorkflowCard design specification
```

---

## Component Patterns

### Industry page pattern (server + client split)

Every industry vertical follows this pattern:

```
app/[industry]/
  page.tsx              # Server component: metadata + SEO only
  [Industry]Content.tsx # Client component: 'use client', all interactive UI
```

The server `page.tsx` exports metadata and renders the client component. All interactivity, Framer Motion animations, and state live in the `*Content.tsx` file.

### Import alias

Use `@/` for root-relative imports: `import { Button } from '@/components/ui'`

---

## Design System

For visual design decisions, follow the `miledez-design-system` command (`.claude/commands/miledez-design-system.md`).

| Element | Value |
|---------|-------|
| **Primary** | `#8b2020` (burgundy) |
| **Text** | `#1A1A1A` (headings), `#6B6B6B` (body) |
| **Headings font** | Manrope (via `font-display` / `--font-manrope`) |
| **Body font** | Inter (via `font-sans` / `--font-inter`) |
| **Style** | Warm, professional, minimal |

Design tokens live in `components/ui/tokens/generated-theme.ts` and are consumed by `tailwind.config.ts`.

Component library in `components/ui/`. Use existing components before creating new ones.

---

## Key Components

| Component | Purpose | Notes |
|-----------|---------|-------|
| `ContactModal` | Lead capture form | Formspree integration |
| `WorkflowVisual` | Animated workflow demos | See `WorkflowVisual/presets.ts` for config |
| `PricingSection` | Pricing tiers display | Requires `onContactClick` prop |
| `LogoGrid` | Integration partners | SVGs in `public/logos/` |
| `DiagnosticoAutomacao` | ROI automation quiz | Interactive calculator |
| `Header` / `Footer` | Site navigation | Shared across all pages |

---

## WorkflowCard System

The workflow card design spec lives in `frontend-resources/card-design-guide.md`. It defines:
- Card anatomy (header, what-line, icons, stage footer)
- Step types: trigger (blue), process (burgundy), result (green)
- Data structure for workflow definitions
- Industry-specific templates (healthcare, services, retail)
- Writing guidelines for Portuguese content

See `components/WorkflowVisual/` for the React implementation.

---

## Dependency Notes

- `eslint-config-next` version must match Next.js version to avoid build errors
- Fonts loaded via CSS `@import` in `globals.css` (not next/font) to avoid build-time network dependency

---

## Language

- Website content: Portuguese (Brazilian)
- Code, comments, commit messages: English
