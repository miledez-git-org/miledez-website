# mil&dez Website

Agency website for mil&dez - Brazilian B2B AI workflow automation agency.

**Live site:** miledez.com.br  
**Deployment:** Vercel (auto-deploy from main)

---

## Tech Stack

- Next.js 14.2.35
- React 18.3
- Tailwind CSS 3.4
- Framer Motion 12
- TypeScript

---

## Development

```bash
npm install     # Install dependencies
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build
npm run lint    # Run ESLint
```

---

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

---

## Design System

| Element | Value |
|---------|-------|
| **Primary** | `#8b2020` (burgundy) |
| **Text** | `#171717` (headings), `#525252` (body) |
| **Font** | Manrope (300-500) for display, Inter for UI |
| **Style** | Warm, professional, minimal |

Component library in `components/ui/`. Use existing components before creating new ones.

---

## Key Components

- `ContactModal` - Lead capture form (Formspree integration)
- `WorkflowVisual` - Animated workflow demonstrations
- `PricingSection` - Pricing tiers display (requires onContactClick prop)
- `LogoGrid` - Integration partners showcase

---

## Dependency Note

`eslint-config-next` version must match Next.js version to avoid build errors.

---

## Language

- Website content: Portuguese (Brazilian)
- Code/comments: English
