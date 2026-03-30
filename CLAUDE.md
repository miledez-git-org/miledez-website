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
- **HeroConstellation** — Static icon network with animated connecting lines (chain draw/hold/fade state machine). Icons have fixed positions; chains are pre-defined sequences that cycle deterministically.
- **PricingSection** — Pricing tiers display (requires `onContactClick` prop)
- **LogoGrid** — Integration partners showcase
- Component library in `components/ui/` — use existing components before creating new ones

## Color Usage

- Use Tailwind `brand-*` classes — never hardcode hex values
- **Note:** CSS class names are swapped vs. brand convention. `brand-primary` = orange (#eb5100), `brand-secondary` = teal (#085042). A token rename is pending to align with the brand (teal = primary, orange = secondary).
- Orange: `brand-primary` / `brand-primary-dark` / `brand-primary-light` / `brand-primary-subtle`
- Teal: `brand-secondary` / `brand-secondary-dark` / `brand-secondary-light` / `brand-secondary-subtle`
- Body text: `text-neutral-600` (not `text-brand-muted`)
- Glow shadows: `shadow-accent-glow`, `shadow-secondary-glow`

## Rules

- **No `.env` required** — no API keys or secrets. `process.env.NODE_ENV` is set automatically by Next.js.
- **Don't run `pnpm run build` while dev server is running** — it corrupts `.next/` cache. Stop the dev server first, or expect to `rm -rf .next && npm run dev` after.
- `eslint-config-next` version must match Next.js version to avoid build errors
- `generated-theme.ts` is the single source of truth for Tailwind color tokens — update it (not individual components) when changing brand colors
- **Min font size:** 14px (`text-sm`) absolute minimum for low-priority info; 16px (`text-base`) for all other text. Never use `text-xs`.
- **Icons:** Always plain outline SVGs (stroke, no fill). Never wrap icons in colored background containers (`bg-brand-*-subtle`). Color via parent text class only.
- **Build trace error:** `npm run build` may fail on `_not-found/page.js.nft.json` — this is a pre-existing Next.js trace collection bug, not a code error. Pages still generate correctly.
- If dev server returns 404s on `_next/static/` assets, delete `.next/` and restart: `rm -rf .next && npm run dev`

## Agency Conventions
<!-- conventions-sync: 2026-03-18 -->

**Design system:** Use the `design-system` skill for all visual outputs.
- Primary: `#085042` (deep teal) | Secondary: `#eb5100` (orange) | Fonts: Manrope (headings), Source Sans 3 (body)
- Backgrounds: `#fafafa` page, `#ffffff` cards, `#f5f5f7` surfaces | Icons: SVG line (Lucide/Phosphor)

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
