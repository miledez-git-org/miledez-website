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
pnpm install     # Install dependencies
pnpm run dev     # Start dev server
pnpm run build   # Production build
pnpm run lint    # Run ESLint
```

## Project Structure

```
app/                        # Next.js App Router pages
  saude/                    # Healthcare industry page
  servicos/                 # Professional services page
  agronegocio/              # Agribusiness industry page
  avaliacao/                # AI assessment tool (lead generation)
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
types/                      # TypeScript interfaces (assessment.ts)
docs/                       # n8n workflow specs (JSON + markdown)
supabase/migrations/        # Database migration SQL files
public/
  miledez-agency-logos/     # Brand identity SVGs (logo, monogram)
  software-company-logos/   # Integration partner logos (57 SVGs)
```

## Key Patterns

- **ContactModal** — Lead capture form (Formspree integration)
- **WorkflowVisual** — Animated workflow demonstrations
- **HeroConstellation** — Static icon network with animated connecting lines (chain draw/hold/fade state machine). Icons have fixed positions; chains are pre-defined sequences that cycle deterministically.
- **PricingSection** — Pricing tiers display (requires `onContactClick` prop)
- **LogoGrid** — Integration partners showcase
- **AssessmentTool** — Multi-step lead gen form (4 steps → n8n webhook → Claude API → on-screen results). Direct client-side fetch to n8n (no API route — static export). Types in `types/assessment.ts`. n8n workflow spec in `docs/`.
- Component library in `components/ui/` — use existing components before creating new ones
- **Industry pages** (saude, servicos, agronegocio) share an identical template structure. Changes to one should be applied to all 3. Shared components in `components/industry/` (ChallengeCard, MetricsGrid, IndustryIntegrations) affect all industry pages.

## Color Usage

- Use Tailwind `brand-*` classes — never hardcode hex values
- Teal (primary): `brand-primary` / `brand-primary-dark` / `brand-primary-light` / `brand-primary-subtle`
- Orange (secondary): `brand-secondary` / `brand-secondary-dark` / `brand-secondary-light` / `brand-secondary-subtle`
- Body text: `text-neutral-600` (not `text-brand-muted`)
- Glow shadows: `shadow-accent-glow`, `shadow-secondary-glow`
- **`shadow-card` / `shadow-card-hover` are NOT defined** — use standard Tailwind (`shadow-sm`, `shadow-md`) or inline `boxShadow` style
- **Brand migration pending (2026-04-15):** both the Tailwind `brand-*` tokens and the `--brand-*` CSS custom properties in globals.css still reference the legacy teal/orange palette. They must be migrated to burgundy `#6b0f1a` + sage `#87a96b` (with `#4f6b3e` for small text/links). See root CLAUDE.md Design System block for canonical values.

## Asset Paths
- `public/miledez-agency-logos/` — brand identity SVGs (miledez-logo.svg, miledez-monogram.svg)
- `public/software-company-logos/` — integration partner logos (57 SVGs, consolidated from old logos/ + icons/)
- All components use `/software-company-logos/{name}.svg` — there is no separate icons directory

## Rules

- **Always run `pnpm install` after changing `package.json`** — Vercel CI uses `--frozen-lockfile` (pnpm 10 default). If the lockfile is out of sync, the build fails.
- **`.env.local` required** — contains `NEXT_PUBLIC_N8N_ASSESSMENT_WEBHOOK_URL`. No server-side secrets (static export).
- **Static export (`output: 'export'`)** — no API routes, no server components. External service calls must be client-side fetch (same pattern as Formspree in ContactModal). Do not add `app/api/` routes.
- **Don't run `pnpm run build` while dev server is running** — it corrupts `.next/` cache. Stop the dev server first, or expect to `rm -rf .next && npm run dev` after.
- `eslint-config-next` version must match Next.js version to avoid build errors
- `generated-theme.ts` is the single source of truth for Tailwind color tokens — update it (not individual components) when changing brand colors
- **Min font size:** 14px (`text-sm`) absolute minimum for low-priority info; 16px (`text-base`) for all other text. Never use `text-xs`.
- **Icons:** Always plain outline SVGs (stroke, no fill). Never wrap icons in colored background containers (`bg-brand-*-subtle`). Color via parent text class only.
- **Orange backgrounds (`brand-secondary`):** All text must be full `text-white` — never use `text-white/80`, `text-white/90`, or any opacity-reduced white.
- **Shadows:** User prefers directional lower-right shadows (e.g., `boxShadow: '3px 4px 12px rgba(0,0,0,0.10)'`), not uniform Tailwind shadows.
- **Build trace error:** `npm run build` may fail on `_not-found/page.js.nft.json` — this is a pre-existing Next.js trace collection bug, not a code error. Pages still generate correctly.
- If dev server returns 404s on `_next/static/` assets, delete `.next/` and restart: `rm -rf .next && npm run dev`
- **Section alignment:** All section containers (homepage AND sub pages) use `max-w-7xl mx-auto px-6 md:px-10`. Do NOT use `max-w-6xl` for sections — it breaks left-edge alignment with the hero. The only exception is CTA sections (`max-w-3xl`, intentionally narrower/centered). Legal pages use `max-w-3xl` throughout (prose readability).
- **Side-by-side comparisons:** Use `items-start` (not `items-end`) on flex containers when labels must align horizontally at the top. `items-end` causes misalignment when children have different heights (e.g., one has an accent bar).
- **Puppeteer scroll-reveal:** Headless Puppeteer often fails to trigger `useScrollReveal` IntersectionObserver. Force visibility with `document.querySelectorAll('*').forEach(el => { if (el.style.opacity === '0') { el.style.opacity = '1'; el.style.transform = 'none'; } })` before taking screenshots.
- **Puppeteer SVG/logo rendering:** Tailwind utility classes (`w-6 h-6`, `object-contain`) may not apply in Puppeteer, causing SVG icons and logo images to render at unconstrained sizes. This is a rendering artifact — verify layout correctness from code, not just screenshots.
- **Alignment is critical:** When user requests horizontal/vertical alignment, use CSS structural approaches (`items-stretch` + `justify-between`, grid alignment) rather than manual padding tweaks. Verify with Puppeteer measurements (`getBoundingClientRect`).

## Agency Conventions
<!-- conventions-sync: 2026-04-15 -->

**Design system:** Use the `frontend-minimal-ui` skill for all visual outputs. Dieter Rams / Swiss editorial style, monochrome gray default + mil&dez brand accent (auto-activates inside this workspace).
- Primary: `#6b0f1a` (burgundy) | Accent: `#87a96b` (sage, large surfaces) + `#4f6b3e` (darker sage, small text/links on white — lighter shade fails WCAG AA below 18px)
- Legacy palette superseded 2026-04-15: was `#085042` teal + `#eb5100` orange + Manrope/Source Sans 3. The old `design-system` skill is disabled at `~/.claude/skills/design-system/SKILL.md.disabled` for rollback.
- Font: Inter (300/400/500/600) everywhere | Backgrounds: `#fafafa` page, `#ffffff` cards, `#f5f5f7` surfaces | Icons: SVG line (Lucide/Phosphor)
- Accent surface cap: combined burgundy + sage stays under ~5% of any page — CTAs, active nav, link hovers only. Everything else stays monochrome.

**Language:** Client-facing content in Portuguese (BR). Code, comments, technical docs in English.

**Copy tone:** Use the `brand-voice` skill for all client-facing text. Key rules: Brazilian Portuguese only, zero English buzzwords, conversational professional register, outcome over mechanism. The skill has the full vocabulary glossary, word count limits per channel, and copy patterns.

**Response style:** Concise and actionable. Tables for comparisons. Numbered items for follow-up.

**User preferences:**
- Flat folder structures over nested categorization
- Confirm before destructive commands (rm, mv) — user runs manually
- `/sandbox` folders are off-limits — do not read or reference unless explicitly asked
- `/archive` folders are off-limits — do not read or reference unless explicitly asked
- `business-intelligence/` is off-limits — do not read or reference unless explicitly asked

**Session workflow:**
1. Start: Read CLAUDE.md + check memory. Run `git status` for uncommitted work.
2. Plan: Use plan mode for non-trivial tasks. Use task lists for multi-step work.
3. Execute: After plan approval, switch to bypass-permissions mode.
4. Save: Run `/save` before ending session.
5. Memory: Record architecture decisions and resolved issues to memory before session end.

**Plan workflow:**
When you create or complete a plan (plan mode, architecture analysis, or any multi-step design), automatically save two files to the local `plans/` folder:
1. **Plan file:** `plans/{slug}-plan.md` — the full plan document
2. **Todo file:** `plans/{slug}-todo.md` — actionable checklist derived from the plan

Naming rules:
- Slug: 2-4 words, kebab-case, descriptive of content (e.g., `auth-refactor`, `dashboard-redesign`, `lead-scoring-v2`)
- Plan files end with `-plan.md`, todo files end with `-todo.md`
- Matching slugs link plan and todo (e.g., `auth-refactor-plan.md` + `auth-refactor-todo.md`)

Todo file format:
- Heading: `# {Plan Title} — Todo`
- Reference: `> Plan: [{slug}-plan.md](./{slug}-plan.md)`
- Organize tasks by phase/section from the plan
- Use `- [ ]` checkboxes for each actionable step
- Keep items concrete and single-action

Agent behavior:
- Save to the project's local `plans/` folder (never to `~/.claude/plans/`)
- Generate both files automatically — do not ask for file-save confirmation
- If updating an existing plan, overwrite the plan file and regenerate the todo
- When a plan spans multiple sub-projects, save to the active session's project
