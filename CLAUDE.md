# mil&dez Website

Public agency site miledez.com.br: static, bilingual Next.js marketing site that also hosts the eSocial demo and the assessment form.

> mil&dez agency repo. Client-facing content in PT-BR, code and docs in English. Visuals follow `design-system-agency/`; tokens are vendored, change the design system first and regenerate. Commit only via `/agency:save`; in a cloud session (no plugin there), commit to the session branch and open a PR.

## Links

- GitHub: https://github.com/miledez-git-org/miledez-website
- Production: https://miledez.com.br (Vercel project `miledez.com.br`, scope `simon-9781s-projects`)
- Local: http://localhost:3000

## Commands

```bash
pnpm install        # after every package.json change (Vercel CI uses --frozen-lockfile)
pnpm run dev
pnpm run build      # never while the dev server runs (corrupts .next/); runs build:validador first
pnpm run build:validador   # recompile public/validador-esocial.css after editing that page
pnpm run lint
```

Deploy: pushing `main` deploys production through the Vercel Git integration (working since the repo went public on 2026-10-22). Before saying a change is live, check that the production deployment shows that commit. The dashboard Redeploy button rebuilds the deployment's original commit, not the latest.

## Structure

| Path | Purpose |
|---|---|
| `app/(pt)/` | Portuguese routes at root URLs (industrias, saude, servicos, agronegocio, avaliacao, termos, politica-privacidade); own root layout |
| `app/(en)/en/` | English routes; own root layout |
| `components/ui/` | Design-system components; `tokens/generated-theme.ts` is the vendored palette |
| `components/industry/` | Shared industry page template: one change affects all three industry pages |
| `components/WorkflowVisual/`, `components/HeroPipeline*` | Workflow visuals; HeroPipeline is the React port of the animations `workflow-pipeline-v3` |
| `lib/i18n/` | All copy (`pt.ts`, `en.ts`) plus route and hreflang helpers |
| `types/`, `docs/`, `supabase/migrations/` | Assessment types, n8n workflow specs, migration SQL |
| `public/miledez-agency-logos/` | Served copy of the logos in `marketing/resources/brand/` |
| `public/software-company-logos/` | Integration partner logos (one SVG per partner) |

Stack: Next.js 14.2 App Router with `output: 'export'`, React 18.3, Framer Motion 12, Tailwind CSS 3.4, TypeScript.

## Rules

1. Static export: no `app/api/` routes and no server components that need a runtime. External calls are client-side fetch (Formspree, n8n).
2. `.env.local` holds only public `NEXT_PUBLIC_*` values (`NEXT_PUBLIC_N8N_ASSESSMENT_WEBHOOK_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`); no server-side secrets.
3. `eslint-config-next` version matches the Next.js version.
4. Use existing `components/ui/` components before creating new ones.
5. Homepage sections, copy, routes and the country redirect follow `.claude/rules/` (`homepage.md`, `i18n.md`, `design-tokens.md`), loaded when those files are touched.

## Gotchas

- Dev server 404s on `_next/static/` assets: delete `.next/` and restart.
- `pnpm run build` may fail on `_not-found/page.js.nft.json`: pre-existing Next.js trace bug, pages still generate.
- Vercel serves every `.html` file (exported pages and `public/*.html`) only at its extensionless URL; the `.html` path 404s. Share `/validador-esocial`, not `/validador-esocial.html` (a `vercel.json` redirect covers the old link).
- Headless Puppeteer rarely triggers `useScrollReveal`. Before screenshots force visibility: `document.querySelectorAll('*').forEach(el => { if (el.style.opacity === '0') { el.style.opacity = '1'; el.style.transform = 'none'; } })`.

## Tokens

`components/ui/tokens/generated-theme.ts` defines `body`, `zinc`, `emerald`, `amber`, `rose`, `sky` from `design-system-agency/docs/palette-teal.js`; type, radius and shadow use Tailwind's defaults. Usage rules in `.claude/rules/design-tokens.md`. Regenerate from the design system; never edit by hand.
