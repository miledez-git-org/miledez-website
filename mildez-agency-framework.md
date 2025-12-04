# mil&dez Agency Management Framework

**Last Updated:** 2025-12-04
**Status:** Active Development
**Owner:** Simon

---

## Executive Summary

mil&dez is an AI workflow automation agency based in Brazil, helping non-technical business owners implement automation solutions. The agency has completed initial brand identity and website development, with ongoing refinements and next phase focused on sales materials.

---

## Current Status Overview

### COMPLETED

| Area | Deliverable | Status | Location |
|------|-------------|--------|----------|
| **Brand Direction** | Design philosophy locked | Complete | `brand/brand-direction-locked.md` |
| **Logo** | SVG logos (black/white variants) | Complete | `brand/logo/` |
| **Website - Next.js** | Full site migrated to Next.js 14 | Complete | `website/` |
| **Website - Landing** | Main landing page | Complete | `website/app/page.tsx` |
| **Website - Healthcare** | Saúde e Clínicas sub-page | Complete | `website/app/saude/` |
| **Website - Professional Services** | Serviços Profissionais sub-page | Complete | `website/app/servicos/` |
| **Website - Retail** | Varejo e E-commerce sub-page | Complete | `website/app/varejo/` |
| **Website - Mobile** | Hamburger menu navigation | Complete | `website/components/Header.tsx` |
| **Website - Animations** | Workflow animations with data pulses | Complete | `website/components/WorkflowAnimation.tsx` |

### IN PROGRESS

| Area | Item | Status | Notes |
|------|------|--------|-------|
| **Website** | Deployment to production | Pending | Ready for Vercel deployment |
| **Sales Materials** | Proposal templates | Planning | Portuguese, follows brand direction |

### NOT STARTED

| Area | Item | Priority | Notes |
|------|------|----------|-------|
| **Sales Materials** | Client proposal template | High | Portuguese, follows brand direction |
| **Sales Materials** | ROI calculator/presentation | High | For sales conversations |
| **Sales Materials** | Case study template | Medium | For future client wins |
| **Operations** | Client onboarding process | Medium | Checklist, templates |
| **Operations** | Project management system | Medium | Track client work |
| **Content** | LinkedIn content strategy | Low | For lead generation |
| **Legal** | Service agreement template | Medium | Contract for clients |

---

## Brand Identity (LOCKED)

### Agency Name
**mil&dez**

### Logo
- Primary: `brand/logo/mildez-logo.svg` (black text, red ampersand)
- Inverted: `brand/logo/mildez-logo-white.svg` (white text, red ampersand)
- Font: Manrope, weight 300, letter-spacing -0.03em
- Website header: 32px height

### Design Philosophy
Extreme minimalism. Every element must justify its existence.

### Color System
```
Background:     #ffffff (white)
Primary Text:   #1a1a1a (black)
Body Text:      #3d3d3d
Secondary:      #5a5a5a
Muted:          #7a7a7a
Accent:         #8b2020 (dark red)
Accent Dark:    #6b1a1a (hover states)
Border:         #e0e0e0
```

### Key Rules
- NO cards, shadows, gradients, rounded corners
- Separation via spacing, dividers, column changes
- Icons: outline only, 1.5px stroke, black
- CTAs: accent color for hero buttons
- Workflow indicators: accent background, white text
- Animations: purposeful workflow demonstrations only

**Full specification:** See `brand/brand-direction-locked.md`

---

## Website Architecture

### Pages Complete

```
mil&dez Website (Next.js 14)
├── / (Landing)
│   ├── Hero: Value proposition + red CTA
│   ├── Como funciona: Animated workflow with data pulses
│   ├── Integrações: 15 software icons (centered labels)
│   ├── Benefícios: 3 columns
│   ├── Processo: Numbered steps
│   ├── Indústrias: Links to sub-pages
│   └── CTA: Contact
│
├── /saude (Healthcare)
│   ├── Hero: Industry badge + headline + red CTA
│   ├── Pain points: 3 columns
│   ├── Workflows: 4 numbered sections with animations
│   ├── Results: Metrics
│   ├── Integrations: Icon grid
│   └── CTA: Contact
│
├── /servicos (Professional Services)
│   ├── Hero: Industry badge + headline + red CTA
│   ├── Pain points: 3 columns
│   ├── Workflows: 4 numbered sections with animations
│   ├── Results: Metrics
│   ├── Integrations: Icon grid
│   └── CTA: Contact
│
└── /varejo (Retail/E-commerce)
    ├── Hero: Industry badge + headline + red CTA
    ├── Pain points: 3 columns
    ├── Workflows: 4 numbered sections with animations
    ├── Results: Metrics
    ├── Integrations: Icon grid
    └── CTA: Contact
```

### Technical Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Export:** Static HTML (configured)
- **Deployment:** Ready for Vercel

### Recent UI Updates (2025-12-04)
- Added SVG logo to header (32px height)
- Changed hero CTAs to accent color (red)
- Redesigned workflow number indicators (square, red bg, white text)
- Made connection lines static (removed fade animation)
- Added center-aligned labels to integration icons
- Removed "Também automatizamos" sections from subpages
- Implemented mobile hamburger menu navigation

---

## File Structure

```
miledez-agency/
├── brand/
│   ├── brand-direction-locked.md    ← Single source of truth for design
│   └── logo/
│       ├── mildez-logo.svg          ← Primary logo (black)
│       ├── mildez-logo-white.svg    ← Inverted logo (white)
│       └── mildez-monogram.svg      ← Compact version
│
├── website/                          ← Next.js 14 website
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                  ← Landing page
│   │   ├── globals.css
│   │   ├── saude/
│   │   ├── servicos/
│   │   └── varejo/
│   ├── components/
│   │   ├── Header.tsx                ← Nav with logo
│   │   ├── Footer.tsx
│   │   ├── WorkflowAnimation.tsx
│   │   ├── SectionNavButton.tsx
│   │   └── Icons.tsx
│   ├── public/
│   │   └── logo.svg                  ← Website logo
│   ├── CLAUDE.md                     ← Dev guidance
│   ├── README.md                     ← Project setup
│   └── mildez-agency-framework.md    ← This document
│
├── sales/                            ← Future: Sales materials
├── clients/                          ← Future: Client projects
└── operations/                       ← Future: Processes
```

---

## Development Workflow

### Getting Started

```bash
cd website
npm install
npm run dev
# Open http://localhost:3000
```

### Deployment to Vercel

```bash
npm install -g vercel
vercel --prod
```

Or connect GitHub repo to Vercel for automatic deployments.

---

## Next Steps (Prioritized)

### Phase 1: Website Launch (Current)

| Step | Action | Status |
|------|--------|--------|
| 1 | Website development | Complete |
| 2 | Logo integration | Complete |
| 3 | UI refinements | Complete |
| 4 | Test all pages locally | Ready |
| 5 | Deploy to Vercel | Pending |
| 6 | Configure custom domain | Pending |

### Phase 2: Sales Materials (Next)

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Proposal Template | Standard client proposal | DOCX/Google Doc |
| ROI Presentation | Value demonstration for sales calls | PPTX or HTML |
| One-Pager | Quick leave-behind for prospects | PDF |
| Follow-up Email Templates | Post-meeting sequences | Text/Email |

### Phase 3: Operations Setup

| System | Purpose | Tool Options |
|--------|---------|--------------|
| Project Tracking | Manage client work | Notion, Linear, or custom |
| Client Onboarding | Standardized intake | Checklist + templates |
| File Organization | Client deliverables | Google Drive structure |
| Invoicing | Billing clients | Stripe, Pagar.me |

---

## Industry Focus Areas

### Primary: Healthcare (Saúde)
- Medical clinics, dental offices, specialist practices
- Focus: Back-office operations (not communication)
- Key workflows: Document management, insurance billing, compliance

### Secondary: Professional Services (Serviços)
- Law firms, accounting, consulting, agencies
- Focus: Billable hours recovery
- Key workflows: Client onboarding, contracts, invoicing

### Tertiary: Retail (Varejo)
- E-commerce, physical retail, D2C brands
- Focus: Operations automation
- Key workflows: Inventory, order processing, financial reconciliation

---

## Key Decisions Made

| Decision | Date | Rationale |
|----------|------|-----------|
| Agency name: mil&dez | 2025-12-02 | Fresh start, memorable, Portuguese-friendly |
| Design: Extreme minimalism | 2025-12-02 | Differentiation, professional positioning |
| Healthcare focus: Back-office | 2025-12-02 | Avoid crowded WhatsApp/chatbot space |
| Tech stack: Next.js 14 | 2025-12-03 | Modern, static export, easy deployment |
| CTAs: Accent color | 2025-12-04 | Better visual hierarchy |
| Single brand doc | 2025-12-04 | Avoid duplication, single source of truth |

---

## Session Continuity Notes

### For Future Claude Sessions

When continuing work on mil&dez, reference:
1. **Brand direction:** `brand/brand-direction-locked.md` - design is LOCKED
2. **Website:** `website/` - Next.js 14 project, 4 pages complete
3. **This document:** For current status and next steps

### Key Context
- Target market: Brazilian non-technical business owners
- Language: Portuguese for client-facing, English for technical
- Positioning: Premium, professional, results-focused
- Differentiator: Extreme minimalism, back-office automation focus

---

## Changelog

| Date | Change |
|------|--------|
| 2025-12-02 | Initial framework created |
| 2025-12-02 | Brand direction locked |
| 2025-12-02 | Landing page completed |
| 2025-12-02 | All 3 industry sub-pages completed |
| 2025-12-03 | Migrated to Next.js 14 |
| 2025-12-04 | Added SVG logo to header |
| 2025-12-04 | Changed hero CTAs to accent color |
| 2025-12-04 | Redesigned workflow number indicators |
| 2025-12-04 | Consolidated brand direction to single file in /brand |
| 2025-12-04 | Updated all documentation files |

---

*This document serves as the central reference for mil&dez agency development. Update as progress is made.*
