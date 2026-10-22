# mil&dez Website

Agency website for mil&dez — Brazilian B2B AI workflow automation agency.

> Agency context: Part of the mil&dez platform. See the root `CLAUDE.md` for shared conventions.

## Links

- **Production:** miledez.com.br
- **Local Dev:** http://localhost:3000

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14.2.35 (App Router, static export) |
| UI | React 18.3, Framer Motion 12 |
| Styling | Tailwind CSS 3.4 |
| Language | TypeScript |
| Deployment | Vercel, manual CLI deploy (Git auto-deploy is blocked: Hobby plan + private org repo) |

## Commands

```bash
pnpm install     # Install dependencies
pnpm run dev     # Start dev server
pnpm run build   # Production build
pnpm run lint    # Run ESLint
```

**Deploying to production:** pushing to `main` does not update miledez.com.br, and the dashboard Redeploy button only rebuilds the deployment's original commit. After pushing, deploy a clean copy of the commit from the CLI (project `miledez.com.br`, scope `simon-9781s-projects`):

```bash
git archive <sha> | tar -x -C <empty dir>    # committed files only, no .env.local
cd <empty dir>
printf '/sandbox\n/.claude\n/.agents\n/.mcp.json\n/mockups\n/plans\n' > .vercelignore
vercel link --yes --project miledez.com.br --scope simon-9781s-projects
vercel deploy --prod --yes --scope simon-9781s-projects
```

## Project Structure

```
app/
  (pt)/                     # Portuguese routes at root URLs (own root layout)
    industrias/             # Industries overview (links to subpages)
    saude/                  # Healthcare industry page
    servicos/               # Professional services page
    agronegocio/            # Agribusiness industry page
    avaliacao/              # AI assessment tool (not linked from nav — not production-ready)
    termos/                 # Terms of service
    politica-privacidade/   # Privacy policy
  (en)/en/                  # English routes (own root layout)
components/
  ui/                       # Design system components (primitives, cards, layout, navigation,
                            # feedback, data-display, typography, tokens)
  industry/                 # Shared industry page template and parts
  WorkflowVisual/           # Workflow visualization system
hooks/                      # Custom React hooks
lib/i18n/                   # All copy (pt.ts, en.ts) + route/hreflang helpers
types/                      # TypeScript interfaces (assessment.ts)
docs/                       # n8n workflow specs (JSON + markdown)
supabase/migrations/        # Database migration SQL files
public/
  miledez-agency-logos/     # Brand identity SVGs (logo, monogram)
  software-company-logos/   # Integration partner logos (57 SVGs)
```

## Design

Follow the global design reference: `~/light-design-system/light_design_system_v2.html`, rules in `~/light-design-system/CLAUDE.md`, Notus Teal palette from `~/light-design-system/docs/palette-teal.js` pasted into `theme.extend.colors`. Markup uses raw `zinc/emerald/amber/rose/sky` utilities; light theme only, Inter, no hardcoded hex in components. Copy the demo markup via the doc's Copy HTML buttons and never ship its Tailwind CDN script tag.

**Color migration (done 2026-10-21, branch `20261021-design-system`):** every live surface uses Notus Teal. The legacy burgundy `brand-*`, `accent-*`, `neutral-*` and `semantic-*` colors and the `--brand-*`/`--bg-*` CSS vars are gone; `components/ui/tokens/generated-theme.ts` defines only `body`, `zinc`, `emerald`, `amber`, `rose`, `sky`. Headings and ink use `zinc-900`, body copy `text-body`, muted `zinc-500`; in CSS use `theme('colors.zinc.900')`, never hex. Still pending: the type/radius/shadow tokens in `generated-theme.ts` (custom `fontSize` without line heights, `rounded-md` = 4px, layered `shadow-*`) differ from the reference and get their own pass. Files not imported by any route (e.g. `WorkflowTiersDemo`, `WorkflowVisual/WorkflowStep`, most of `components/ui/cards`) were not migrated and may still reference removed tokens. `public/validador-esocial.html` is a standalone page and still burgundy. Mapping table: `plans/20261021-design-system-plan.md`.

## Internationalization (pt-BR + en-US)

- Portuguese stays at the original URLs; English lives under `/en` (`/en/industries`, `/en/health`, `/en/professional-services`, `/en/agribusiness`, `/en/terms`, `/en/privacy-policy`). `/avaliacao` has no English version.
- Route groups `app/(pt)/` and `app/(en)/` each own a root layout (correct `<html lang>`); both use `components/RootShell.tsx`. `template`/`loading`/`error` live inside each group — never at `app/` root (they would wrap `<html>` and break hydration).
- All copy is in `lib/i18n/pt.ts` and `lib/i18n/en.ts` (`en` is typed against `pt`, so a missing key fails `tsc`). Components take `locale?: Locale` (default `'pt'`) and call `getDict(locale)`.
- URL mapping and hreflang helpers: `lib/i18n/index.ts` (`routes`, `localePath`, `alternatesFor`). Add new pages there, and add them to both groups.
- Industry pages share `components/industry/IndustryPage.tsx` (data-driven; one place to change). English workflow presets: `components/WorkflowVisual/presets.en.ts`.
- **Country redirect (`vercel.json` `redirects`):** visitors outside Brazil are sent from a PT page to its EN counterpart, Brazilian visitors from EN to PT (307, based on Vercel's `x-vercel-ip-country` header). Skipped when the `lang` cookie is set (the header language switch sets it) and for crawler/link-preview user agents. Keep the rules in sync with `routes` when adding pages. `has` conditions don't run in `vercel dev`, only when deployed.
- English prices are in USD (tiers $150 / $500 / $1,500); the ROI examples are straight BRL conversions.

## Key Patterns

- **HomePage** (`components/HomePage.tsx`) — shared by both locales; owns the contact modal state and passes `onContactClick` to Header, PricingSection and BusinessProfilesSection.
- **Header** — requires `onContactClick` prop for the Contato button (opens modal). Indústrias links to `/industrias`.
- **ContactModal** — lead capture form (Formspree, client-side fetch).
- **HeroPipeline** — hero right column: three stacked cards (input → automation → output) that rotate through three scenarios every 4 s, with pulses on the connectors. React port of `workflow-pipeline-v3` from the animations repo. Copy in `home.pipeline`; logos from `public/software-company-logos`; Notus Teal utilities; stops rotating under reduced motion and when off screen. `HeroAutomationDiagram` (the previous static diagram) is no longer rendered.
- **PricingSection** — tiers R$500 / R$2.000 / R$6.000 (USD in EN).
- **AssessmentTool** — multi-step lead gen form (4 steps → n8n webhook → Claude API → on-screen results). Direct client-side fetch to n8n. Types in `types/assessment.ts`, workflow spec in `docs/`.
- **Industry pages** (saude, servicos, agronegocio) are rendered by the shared `IndustryPage` template; changing the template or `components/industry/` parts changes all three.
- Use existing `components/ui/` components before creating new ones.

## Homepage Section Order

1. Hero — headline + HeroPipeline
2. PainPointSection — problems clients face
3. WorkflowExplainerSection — what automation is (3 workflow cards)
4. BusinessProfilesSection (#quanto-vale) — ROI profiles + contact CTA
5. ProcessSection (#como-funciona) — promise card + 4-step timeline
6. PricingSection (#precos) — 3 tiers + contact CTA
7. FAQSection
8. Final CTA (#contato)

Each section has its own messaging lane — don't duplicate a message across sections.

## Rules

- **Static export (`output: 'export'`)** — no API routes, no server components that need a runtime. External service calls are client-side fetch (Formspree, n8n). Do not add `app/api/` routes.
- **`.env.local` required** — contains `NEXT_PUBLIC_N8N_ASSESSMENT_WEBHOOK_URL`. No server-side secrets.
- **Run `pnpm install` after changing `package.json`** — Vercel CI uses `--frozen-lockfile`; an out-of-sync lockfile fails the build.
- `eslint-config-next` version must match the Next.js version.
- **Don't run `pnpm run build` while the dev server is running** — it corrupts `.next/`. If the dev server 404s on `_next/static/` assets, delete `.next/` and restart.
- **Build trace error:** `pnpm run build` may fail on `_not-found/page.js.nft.json`. This is a pre-existing Next.js trace bug, not a code error; pages still generate correctly.

## Debugging Tips

- Headless Puppeteer often fails to trigger `useScrollReveal` IntersectionObserver. Before screenshots, force visibility: `document.querySelectorAll('*').forEach(el => { if (el.style.opacity === '0') { el.style.opacity = '1'; el.style.transform = 'none'; } })`.
