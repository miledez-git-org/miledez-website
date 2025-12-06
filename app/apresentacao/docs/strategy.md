# Discovery Meeting Presentation - Strategy Document

**Created:** 2025-12-06
**Status:** Planning
**Purpose:** First client discovery meeting - demonstrate value, understand needs

---

## Strategic Positioning

This presentation enables **conversation**, not information dumping. The goal is to:
- Demonstrate what automation is (demystify for non-technical audience)
- Show potential value without overwhelming
- Transition quickly to understanding client's specific needs
- Position mil&dez as the solution partner

**Target duration:** 10-15 minutes guided content, remainder for conversation.

---

## Key Messages to Emphasize

### 1. No New Software Required
Automations connect existing systems - no installation, no IT changes, no learning curve.

### 2. No Employee Training
Automations work invisibly in the background. Staff continue using familiar tools.

### 3. Fully Customizable
Website workflow examples are ideas only. Every solution is built specifically for the client's needs and can be modified, expanded, or simplified.

### 4. Flexible Scope
- Start with simple 1-3 step workflows
- Expand over time as needed
- Create complex multi-system workflows when required

### 5. Zero Risk / Zero Lock-in
Client can stop automation at any time and return to manual processes. No long-term commitment required.

---

## Value Pillars (Beyond Time Savings)

### 1. Speed
- Input/output in seconds vs. hours or days
- Real-time processing, 24/7 operation

### 2. Quality
- Consistent, error-free output
- No typos, no forgotten steps, no human mistakes

### 3. New Capabilities
- Analysis and reports previously impossible due to time constraints
- New tools and insights the business never had access to

### 4. Better Customer Service
- Faster response times
- More accurate information
- Potential for increased revenue and client retention

### 5. Compliance
- Automatic adherence to industry regulations
- Audit trails and documentation

---

## Presentation Structure (7 Sections)

### Section 1: Opening
**Purpose:** Context only, not pitch
**Content:**
- mil&dez logo
- Meeting title with client name/industry
- Date
**Visual:** Clean, minimal, logo prominent

### Section 2: O que e Automacao?
**Purpose:** Demystify for non-technical audience
**Key Message:** "Automacao nao e software novo. E conexao inteligente."
**Visual:**
- Animated diagram showing existing tools connecting
- Reuse website's IntegrationMesh concept (radial layout)
- Data flow visualization

### Section 3: O que isso resolve?
**Purpose:** Translate benefits into business language
**Structure:** Three value pillars with animated icons
- Tempo: ClockShrinkIcon animation
- Qualidade: DrawCheckIcon animation
- Possibilidades: PuzzleConnectIcon animation
**Visual:** Reuse BenefitsSection pattern with animated icons

### Section 4: Como funciona na pratica?
**Purpose:** Show flexibility without overwhelming
**Key Message:** "Cada solucao e personalizada. Exemplos sao ideias - construimos especificamente para voce."
**Visual:**
- Interactive workflow builder (adapt HeroVisualization)
- Show simple 3-step workflow
- Demonstrate expansion capability
**Interactive Element:** Industry selector to show relevant examples

### Section 5: Por que e seguro comecar?
**Purpose:** Remove objections, reduce perceived risk
**Structure:** Concern/Resolution pairs
- No new software
- No training required
- No lock-in
- Results before commitment
**Visual:** Clean list with checkmarks (adapt ProcessSection style)

### Section 6: Nosso processo
**Purpose:** Set expectations, show simplicity
**Content:**
- Conversa (understand)
- Proposta (propose)
- Implementacao (deliver)
**Visual:** Numbered steps with connecting lines (reuse ProcessSection pattern)

### Section 7: Proximos passos
**Purpose:** Transition to conversation
**Content:**
- Open question: "Quais processos voce gostaria de automatizar?"
- Contact information
**Visual:** Open, inviting dialogue

---

## Design Specifications (Updated)

### Typography
- Font: Inter (via CSS variable --font-inter)
- H1: 3.5rem, weight 500, tracking -0.03em
- H2: 2rem, weight 500, tracking -0.02em
- Body: 1rem (16px), weight 400
- Labels: 0.75rem, uppercase, tracking wider

### Colors
| Role | Value | Tailwind |
|------|-------|----------|
| Background | #FCFCFC | bg-bg-base |
| Surface | #FFFFFF | bg-bg-surface |
| Muted BG | #F7F8FA | bg-bg-muted |
| Primary Text | #1a1a1a | text-brand-black |
| Body Text | #3d3d3d | text-brand-text |
| Muted Text | #5a5a5a | text-brand-muted |
| Accent | #8b2020 | text-brand-accent |
| Border | rgba(0,0,0,0.08) | border-[rgba(0,0,0,0.08)] |

### Components
- Cards: bg-white, 1px border rgba(0,0,0,0.08), subtle shadow
- Buttons: bg-brand-accent, text-white, no border-radius
- Icons: Outline only, 1.5px stroke, black
- Animations: 0.6s cubic-bezier(0.16, 1, 0.3, 1)

### Animation Patterns (from website)
- useScrollReveal hook with 50% threshold
- Transform-based reveals (translateY, scale)
- Staggered delays (100ms between items)
- Draw path animations for SVGs
- Connection pulse for data flow
- Float animation for cards

### Accessibility
- prefers-reduced-motion support
- Focus-visible states with accent outline
- Keyboard navigation support

---

## Industry Selector Feature

Allow switching between industry examples during presentation:
- Saude (Healthcare): Document management, billing, compliance
- Servicos (Professional Services): Contracts, invoicing, client onboarding
- Varejo (Retail): Inventory, orders, financial reconciliation

Each industry shows relevant workflow examples from website sub-pages.

---

## Implementation Notes

### Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (with custom brand config)
- Reuse existing components where possible

### Recommended Component Reuse
| Presentation Section | Website Component |
|---------------------|-------------------|
| Integration diagram | IntegrationMesh.tsx |
| Benefits with icons | BenefitsSection.tsx, AnimatedIcons.tsx |
| Workflow demo | HeroVisualization.tsx |
| Process steps | ProcessSection.tsx |
| Scroll animations | useScrollReveal.ts |

### New Components Needed
- PresentationLayout (slide-style navigation)
- IndustrySelector (toggle between examples)
- ConcernResolution (objection handling display)

### Folder Structure
```
website/app/apresentacao/
├── page.tsx              # Main presentation page
├── components/           # Presentation-specific components
│   ├── SlideNavigation.tsx
│   ├── IndustrySelector.tsx
│   └── ConcernResolution.tsx
└── (or inline if simple)
```

---

## Content Files

- `content.md` - Complete Portuguese copy for all sections
- This `README.md` - Strategy and technical documentation

---

## Next Steps

1. Review and approve this strategy document
2. Finalize Portuguese copy in content.md
3. Implement as Next.js page at /apresentacao
4. Test with keyboard/click navigation
5. Deploy alongside main website

---

*This presentation follows brand direction from brand/brand-direction-locked.md*
