---
description: Create a new industry vertical page for the mil&dez website. Use when user says 'new industry page', 'add a vertical', 'create sector page', or needs a new industry-specific landing page like saude, servicos, or varejo.
---

Create a new industry vertical page following the established pattern from existing pages (saude, servicos, varejo).

## Before Starting

1. Read an existing industry page for reference: `app/saude/page.tsx` and `app/saude/SaudeContent.tsx`
2. Read the shared industry components: `components/industry/ChallengeCard.tsx`, `components/industry/MetricsGrid.tsx`, `components/industry/IndustryIntegrations.tsx`
3. Read available icons: `components/Icons.tsx`
4. Read the WorkflowCard system: `frontend-resources/card-design-guide.md`

## Required Information

Gather from the user (or infer from context):

| Field | Example | Required |
|-------|---------|----------|
| Industry name (PT-BR) | Saúde e Clínicas | Yes |
| Route slug | saude | Yes |
| SEO description (PT-BR) | Automatizamos documentacao... | Yes |
| 3 industry challenges | Pain points with icon, title, description | Yes |
| 4 metrics | Value + label pairs showing automation impact | Yes |
| Integrations list | Tools relevant to this industry | Yes |
| Workflow steps | 3-5 step automation workflow | Yes |

## File Structure

Create exactly two files:

```
app/[slug]/
  page.tsx              # Server component (metadata only)
  [Name]Content.tsx     # Client component (all UI)
```

### Step 1: Create `app/[slug]/page.tsx`

```tsx
import type { Metadata } from 'next'
import [Name]Content from './[Name]Content'

export const metadata: Metadata = {
  title: '[Industry Name] - mil&dez',
  description: '[SEO description in Portuguese]',
}

export default function [Name]Page() {
  return <[Name]Content />
}
```

### Step 2: Create `app/[slug]/[Name]Content.tsx`

Must include `'use client'` directive. Follow this section structure:

1. **Hero section** — Industry name, value proposition, CTA button, `WorkflowVisualCompact` preview
2. **Challenges section** — 3 `ChallengeCard` components showing industry pain points
3. **Workflow section** — `WorkflowCardFlow` showing the automation process
4. **Metrics section** — `MetricsGrid` with 4 impact metrics
5. **Integrations section** — `IndustryIntegrations` with relevant tool icons
6. **CTA section** — Final call to action with `ContactModal`

### Required imports pattern:

```tsx
'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ChallengeCard from '@/components/industry/ChallengeCard'
import MetricsGrid from '@/components/industry/MetricsGrid'
import { WorkflowVisualCompact, getHeroPreset } from '@/components/WorkflowVisual'
import WorkflowCardFlow from '@/components/WorkflowVisual/WorkflowCardFlow'
import IndustryIntegrations from '@/components/industry/IndustryIntegrations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { icons, stepIcons } from '@/components/Icons'
```

### Required state pattern:

```tsx
export default function [Name]Content() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  // ... component body
}
```

## Data Definitions

### Challenges array (3 items)

```tsx
const challenges = [
  {
    icon: stepIcons.[iconName],
    title: '[PT-BR title, 2-3 words]',
    description: '[PT-BR description, 15-25 words explaining the pain point]',
  },
  // ... 2 more
]
```

### Metrics array (4 items)

```tsx
const metrics = [
  { value: '70%', label: '[PT-BR impact description]', type: 'percentage' as const },
  { value: '2x', label: '[PT-BR impact description]', type: 'multiplier' as const },
  // ... 2 more
]
```

Metric types: `'percentage'` | `'multiplier'` | `'time'`

### Workflow data

If creating new workflow card data, follow the spec in `frontend-resources/card-design-guide.md`:
- First step: type `trigger`
- Middle steps: type `process`
- Last step: type `result`
- Headers: past participle, 2-4 words, Portuguese
- What-lines: specific action, 4-8 words, Portuguese

## Content Language

All user-facing content must be in **Portuguese (Brazilian)**:
- Page titles, descriptions, headings, body text
- CTA buttons: "Falar com especialista", "Agendar demonstração", etc.
- Metric labels, challenge descriptions, workflow steps

Code and comments remain in English.

## Validation

After creating the files:

1. Run `npm run build` to verify static export works
2. Run `npm run lint` to check for TypeScript/ESLint errors
3. Verify the page renders at `localhost:3000/[slug]`
