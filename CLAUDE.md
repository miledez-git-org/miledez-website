# mil&dez Website

Public agency site miledez.com.br: static, bilingual Next.js marketing site that also hosts the eSocial demo and the pharmacy demo (`/demo-farmacia`, proxied by a `vercel.json` rewrite to the `pharmacy-demo` project, noindex).

> The working rules are in the root `../CLAUDE.md`. In a cloud session (no root, no plugin), commit to the session branch, open a PR and put any output in it.

This repo is public: no secrets, client data or internal plans.

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

Deploy: pushing `main` deploys production through the Vercel Git integration. Before saying a change is live, check that the production deployment shows that commit. The dashboard Redeploy button rebuilds the deployment's original commit, not the latest.

## Structure

| Path | Purpose |
|---|---|
| `app/(pt)/` | Portuguese routes at root URLs; own root layout |
| `app/(en)/en/` | English routes under `/en`; own root layout |
| `components/ui/` | Design-system components; `tokens/generated-theme.ts` is the vendored palette |
| `components/HeroPipeline*` | Animated workflow pipeline in the hero |
| `lib/i18n/` | All copy (`pt.ts`, `en.ts`) plus route and hreflang helpers |
| `public/miledez-agency-logos/` | Served copy of the logos in `marketing/brand/` |
| `public/software-company-logos/` | Integration partner logos (one SVG per partner) |

Stack: Next.js 14.2 App Router with `output: 'export'`, React 18.3, Framer Motion 12, Tailwind CSS 3.4, TypeScript.

## Routes and language

- Route groups `app/(pt)/` and `app/(en)/` each own a root layout (correct `<html lang>`); both use `components/RootShell.tsx`. `template`, `loading` and `error` live inside each group, never at `app/` root (they would wrap `<html>` and break hydration).
- All copy is in `lib/i18n/pt.ts` and `lib/i18n/en.ts` (`en` is typed against `pt`, so a missing key fails `tsc`). Components take `locale?: Locale` (default `'pt'`) and call `getDict(locale)`.
- URL mapping and hreflang helpers: `lib/i18n/index.ts` (`routes`, `localePath`, `alternatesFor`). Add new pages there and to both route groups.
- Country redirect (`vercel.json` `redirects`): visitors outside Brazil go from a PT page to its EN counterpart and Brazilian visitors from EN to PT (307, on `x-vercel-ip-country`). Skipped when the `lang` cookie is set (the header language switch sets it) and for crawler or link-preview user agents. Keep the rules in sync with `routes`. `has` conditions run only when deployed, not in `vercel dev`.

## Rules

1. Static export: no `app/api/` routes and no server components that need a runtime. External calls are client-side fetch (Formspree, n8n).
2. `.env.local` holds only public `NEXT_PUBLIC_*` values (`NEXT_PUBLIC_GA_MEASUREMENT_ID`); no server-side secrets.
3. `eslint-config-next` version matches the Next.js version.
4. Use existing `components/ui/` components before creating new ones.

## Gotchas

- Dev server 404s on `_next/static/` assets: delete `.next/` and restart.
- `pnpm run build` may fail on `_not-found/page.js.nft.json`: pre-existing Next.js trace bug, pages still generate.
- Vercel serves every `.html` file (exported pages and `public/*.html`) only at its extensionless URL; the `.html` path 404s. Share `/validador-esocial`, not `/validador-esocial.html` (a `vercel.json` redirect covers the old link).
- Headless browsers rarely trigger `useScrollReveal`. Before screenshots force visibility: `document.querySelectorAll('*').forEach(el => { if (el.style.opacity === '0') { el.style.opacity = '1'; el.style.transform = 'none'; } })`.

## Tokens

- `components/ui/tokens/generated-theme.ts` defines `body`, `zinc`, `emerald`, `amber`, `rose`, `sky` from `design-system-agency/docs/palette-teal.js`; type, radius and shadow use Tailwind's defaults (no overrides). Regenerate from the design system; never edit by hand.
- Markup uses raw `zinc/emerald/amber/rose/sky` utilities. Headings and ink `zinc-900`, body copy `text-body`, muted `zinc-500`. In CSS use `theme('colors.zinc.900')`, never hex.
- Accent: `sky` is the brand accent and the info hue. The one primary button per view is `.btn-primary` (`sky-700`, hover `sky-800`); secondary actions are `.btn-secondary` (teal `zinc-900`) or `.btn-outline`; text links `text-sky-700`; icons and large accent text `sky-600`; on dark surfaces the primary is `.btn-inverted` (`sky-300`, `zinc-950` label) and muted text `zinc-300`.
- Surfaces: sections alternate white and `bg-zinc-100 border-y border-zinc-200`; card grids sit on the band; a card on white carries `border border-zinc-200 shadow-sm`; toolbars and filters sit in a tinted strip; the footer is `bg-zinc-950` dark chrome.
- Light theme only, Inter, no hardcoded hex in components. Copy demo markup via the design-system doc's Copy HTML buttons; never ship its Tailwind CDN script tag.
- `public/validador-esocial.html` is a standalone page styled by `public/validador-esocial.css`, compiled from this repo's Tailwind config by `pnpm run build:validador` (also run by `pnpm run build`). Rerun it after editing the page, then commit the CSS.
