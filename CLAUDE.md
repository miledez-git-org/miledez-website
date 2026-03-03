# mil&dez Website

Agency website for mil&dez — Brazilian B2B AI workflow automation agency.

> Agency context: Part of the mil&dez platform.

## Links

- **Production:** miledez.com.br
- **Local Dev:** http://localhost:3000

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14.2.35 (App Router) |
| UI | React 18.3, Framer Motion 12 |
| Styling | Tailwind CSS 3.4 |
| Language | TypeScript |
| Deployment | Vercel (auto-deploy from main) |

## Commands

```bash
npm install     # Install dependencies
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # Run ESLint
```

## Project Structure

```
app/                        # Next.js App Router pages
  saude/                    # Healthcare industry page
  servicos/                 # Professional services page
  varejo/                   # Retail/e-commerce page
  termos/                   # Terms of service
  politica-privacidade/     # Privacy policy
components/
  ui/                       # Design system components
    primitives/             # Button, Input, Checkbox, etc.
    cards/                  # Card, PricingCard, FeatureCard, etc.
    layout/                 # Modal, Accordion, Sidebar
    navigation/             # Tabs, Breadcrumb, Pagination
    feedback/               # Alert, Badge, Toast, Tooltip
    data-display/           # Table, List, Avatar, Progress
    typography/             # Heading, Text, Logo
    tokens/                 # Theme values, Tailwind sync
  industry/                 # Industry-specific components
  WorkflowVisual/           # Workflow visualization system
hooks/                      # Custom React hooks
lib/                        # Utility functions
public/
  logos/                    # Integration logo SVGs
  icons/                    # Icon SVGs
```

## Key Patterns

- **ContactModal** — Lead capture form (Formspree integration)
- **WorkflowVisual** — Animated workflow demonstrations
- **PricingSection** — Pricing tiers display (requires `onContactClick` prop)
- **LogoGrid** — Integration partners showcase
- Component library in `components/ui/` — use existing components before creating new ones

## Rules

- `eslint-config-next` version must match Next.js version to avoid build errors

## Agency Conventions
<!-- conventions-sync: 2026-03-03 -->

**Design system:** Use the `miledez-design-system` skill for all visual outputs.
- Accent: `#8b2020` (burgundy) | Fonts: Manrope (headings), Source Sans 3 (body)
- Backgrounds: white main, `#F5F5F5` alternating | Icons: SVG line (Lucide/Phosphor)

**Language:** Client-facing content in Portuguese (BR). Code, comments, technical docs in English.

**Response style:** Concise and actionable. Tables for comparisons. Numbered items for follow-up.

**User preferences:**
- Flat folder structures over nested categorization
- Confirm before destructive commands (rm, mv) — user runs manually

**Session workflow:**
1. Start: Read CLAUDE.md + check memory. Run `git status` for uncommitted work.
2. Plan: Use plan mode for non-trivial tasks. Use task lists for multi-step work.
3. Execute: After plan approval, switch to bypass-permissions mode.
4. Save: Run `/save` before ending session.
5. Memory: Record architecture decisions and resolved issues to memory before session end.
