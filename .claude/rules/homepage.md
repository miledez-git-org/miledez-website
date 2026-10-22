---
paths:
  - "components/HomePage.tsx"
  - "components/Header.tsx"
  - "components/ContactModal.tsx"
  - "components/HeroPipeline*"
  - "components/*Section*.tsx"
  - "components/AssessmentTool*"
---

# Homepage and key components

## Section order

1. Hero: headline + HeroPipeline
2. PainPointSection: problems clients face
3. WorkflowExplainerSection: what automation is (3 workflow cards)
4. BusinessProfilesSection (`#quanto-vale`): ROI profiles + contact CTA
5. ProcessSection (`#como-funciona`): promise card + 4-step timeline
6. PricingSection (`#precos`): 3 tiers + contact CTA
7. FAQSection
8. Final CTA (`#contato`)

Each section owns one message; never repeat a message across sections.

## Components

- **HomePage** (`components/HomePage.tsx`): shared by both locales; owns the contact modal state and passes `onContactClick` to Header, PricingSection and BusinessProfilesSection.
- **Header**: requires `onContactClick` for the Contato button. Indústrias links to `/industrias`.
- **ContactModal**: lead capture form (Formspree, client-side fetch).
- **HeroPipeline**: three stacked cards (input → automation → output) rotating through three scenarios every 4 s with pulses on the connectors. Copy in `home.pipeline`; logos from `public/software-company-logos`; stops under reduced motion and off screen.
- **PricingSection**: tiers R$500 / R$2.000 / R$6.000 (USD in EN).
- **AssessmentTool**: 4-step lead-gen form → n8n webhook → Claude API → on-screen results, client-side fetch. Types in `types/assessment.ts`, workflow spec in `docs/`.
