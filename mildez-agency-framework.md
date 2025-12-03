# mil&dez Agency Management Framework

**Last Updated:** 2025-12-02
**Status:** Active Development
**Owner:** Simon

---

## Executive Summary

mil&dez is an AI workflow automation agency based in Brazil, helping non-technical business owners implement automation solutions. The agency is currently in infrastructure buildout phase, establishing brand identity, website, sales materials, and operational processes.

---

## Current Status Overview

### ✅ COMPLETED

| Area | Deliverable | Status | Location |
|------|-------------|--------|----------|
| **Brand Direction** | Design philosophy locked | ✅ Complete | `brand-direction-locked.md` |
| **Website - Landing** | Main landing page | ✅ Complete | `mildez-landing-page.html` |
| **Website - Healthcare** | Saúde e Clínicas sub-page | ✅ Complete | `saude.html` |
| **Website - Professional Services** | Serviços Profissionais sub-page | ✅ Complete | `servicos.html` |
| **Website - Retail** | Varejo e E-commerce sub-page | ✅ Complete | `varejo.html` |
| **React Project** | Full site with routing | ✅ Complete | `mildez-site/` |
| **Design Exploration** | Healthcare presentation concepts | ✅ Complete | `healthcare-design-exploration.pptx` |
| **Folder Structure Script** | PowerShell setup script | ✅ Complete | `setup-folder-structure.ps1` |

### 🔄 IN PROGRESS

| Area | Item | Status | Notes |
|------|------|--------|-------|
| **Website** | VS Code migration | 🔄 Starting | Moving dev from Claude Desktop to VS Code |
| **Website** | Deployment | 🔄 Pending | Need hosting setup (Vercel recommended) |

### ⏳ NOT STARTED

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
**mil&dez** (previously Larsen Invest)

### Design Philosophy
Extreme minimalism. Every element must justify its existence.

### Color System
```
Background:     #ffffff (white)
Primary Text:   #1a1a1a (black)
Body Text:      #3d3d3d
Secondary:      #5a5a5a
Muted:          #7a7a7a
Accent:         #8b2020 (dark red - sparingly)
Border:         #e0e0e0
```

### Typography
System fonts, weight 400-500, tight letter-spacing on headlines

### Key Rules
- NO cards, shadows, gradients, rounded corners
- Separation via spacing, dividers, column changes
- Icons: outline only, 1.5px stroke, black
- Accent color: max 1-2 uses per page
- Animations: purposeful workflow demonstrations only

**Full specification:** See `brand-direction-locked.md`

---

## Website Architecture

### Pages Complete

```
mil&dez Website
├── / (Landing)
│   ├── Hero: Value proposition
│   ├── Como funciona: Animated workflow
│   ├── Integrações: 15 software icons
│   ├── Benefícios: 3 columns
│   ├── Processo: Numbered steps
│   ├── Indústrias: Links to sub-pages
│   └── CTA: Contact
│
├── #saude (Healthcare)
│   ├── Focus: Back-office operations
│   ├── Workflows: Documents, Billing, Compliance, Collections
│   └── Integrations: Operational tools
│
├── #servicos (Professional Services)
│   ├── Focus: Billable hours recovery
│   ├── Workflows: Onboarding, Contracts, Billing, Reports
│   └── Integrations: Professional tools
│
└── #varejo (Retail/E-commerce)
    ├── Focus: Operations automation
    ├── Workflows: Inventory, Orders, Financial, Reports
    └── Integrations: Commerce tools
```

### Technical Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Routing:** Hash-based (no dependencies)
- **Deployment:** Ready for Vercel

### File Inventory

| File | Type | Purpose |
|------|------|---------|
| `mildez-site/` | React Project | Full website source |
| `mildez-site.zip` | Archive | Downloadable project |
| `mildez-landing-page.html` | Standalone | Landing page (no build) |
| `saude.html` | Standalone | Healthcare page (no build) |
| `servicos.html` | Standalone | Professional Services page (no build) |
| `varejo.html` | Standalone | Retail page (no build) |

---

## VS Code Development Workflow

### Migration from Claude Desktop

The website development is moving from Claude Desktop chat to VS Code for:
- Better file management and version control
- Live preview and hot reload
- Git integration
- More efficient iteration cycles

### Recommended Setup

#### Option A: Claude Code CLI
```bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Navigate to project
cd path/to/mildez-site

# Start Claude Code
claude

# Example commands in Claude Code:
# "Add a contact form to the landing page"
# "Fix the mobile navigation"
# "Deploy to Vercel"
```

#### Option B: Cursor IDE
- Install Cursor (cursor.sh)
- Open `mildez-site/` folder
- Use Cmd+K for inline edits
- Use Cmd+L for chat with codebase context

#### Option C: VS Code + Continue Extension
- Install Continue extension
- Configure with Anthropic API key
- Chat with codebase context

### Getting Started

1. **Extract the project:**
   ```bash
   unzip mildez-site.zip
   cd mildez-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Access locally:**
   - Landing: http://localhost:5173
   - Healthcare: http://localhost:5173/#saude
   - Services: http://localhost:5173/#servicos
   - Retail: http://localhost:5173/#varejo

### Deployment to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (first time)
vercel

# Deploy updates
vercel --prod
```

Or connect GitHub repo to Vercel for automatic deployments.

---

## Next Steps (Prioritized)

### Phase 1: Website Launch (This Week)

| Step | Action | Tool |
|------|--------|------|
| 1 | Extract `mildez-site.zip` to local folder | Terminal |
| 2 | Open in VS Code/Cursor | IDE |
| 3 | Run `npm install` and `npm run dev` | Terminal |
| 4 | Test all pages locally | Browser |
| 5 | Make any refinements needed | Claude Code/Cursor |
| 6 | Deploy to Vercel | Vercel CLI |
| 7 | Configure custom domain (if ready) | Vercel Dashboard |

### Phase 2: Sales Materials (Next 2 Weeks)

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Proposal Template | Standard client proposal | DOCX/Google Doc |
| ROI Presentation | Value demonstration for sales calls | PPTX or HTML |
| One-Pager | Quick leave-behind for prospects | PDF |
| Follow-up Email Templates | Post-meeting sequences | Text/Email |

### Phase 3: Operations Setup (Next Month)

| System | Purpose | Tool Options |
|--------|---------|--------------|
| Project Tracking | Manage client work | Notion, Linear, or custom |
| Client Onboarding | Standardized intake | Checklist + templates |
| File Organization | Client deliverables | Google Drive structure |
| Invoicing | Billing clients | Stripe, Pagar.me |

### Phase 4: Growth (Ongoing)

| Activity | Frequency | Purpose |
|----------|-----------|---------|
| LinkedIn Posts | 2-3x/week | Lead generation |
| Case Studies | Per completed project | Social proof |
| Referral Outreach | Monthly | Network growth |

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
| Tech stack: React + Vite | 2025-12-02 | Modern, fast, easy deployment |
| Development: Move to VS Code | 2025-12-02 | Better iteration workflow |

---

## File Locations Reference

### Outputs Folder (Claude Desktop)
```
/mnt/user-data/outputs/
├── brand-direction-locked.md      ← Brand spec (REFERENCE)
├── mildez-site/                   ← React project source
├── mildez-site.zip                ← Downloadable archive
├── mildez-landing-page.html       ← Standalone landing
├── saude.html                     ← Standalone healthcare
├── servicos.html                  ← Standalone services
├── varejo.html                    ← Standalone retail
├── healthcare-design-exploration.pptx
└── setup-folder-structure.ps1
```

### Recommended Local Structure
```
~/Projects/mildez/
├── website/                       ← Extract mildez-site.zip here
│   ├── src/
│   ├── package.json
│   └── ...
├── brand/
│   └── brand-direction-locked.md  ← Copy for reference
├── sales/
│   ├── proposals/
│   ├── presentations/
│   └── templates/
├── clients/
│   └── [client-name]/
└── operations/
    ├── processes/
    └── templates/
```

---

## Session Continuity Notes

### For Future Claude Sessions

When continuing work on mil&dez, reference:
1. **Brand direction:** `brand-direction-locked.md` - design is LOCKED
2. **Website:** `mildez-site/` - React project with 4 pages complete
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
| 2025-12-02 | VS Code migration decision made |

---

*This document serves as the central reference for mil&dez agency development. Update as progress is made.*
