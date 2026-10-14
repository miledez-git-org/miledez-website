# mil&dez Website

Marketing site for mil&dez, a Brazilian B2B agency for AI workflow automation.
Production: https://miledez.com.br (Vercel, auto-deploys from `main`).

## Stack

Next.js 14 (App Router, static export) · React 18 · TypeScript (strict) · Tailwind CSS 3 · Framer Motion · pnpm

```bash
pnpm install        # always re-run after editing package.json (CI uses --frozen-lockfile)
pnpm run dev        # http://localhost:3000
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build      # stop the dev server first; it shares .next/
```

`.env.local` holds `NEXT_PUBLIC_N8N_ASSESSMENT_WEBHOOK_URL` (assessment tool) and optionally `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

## Layout

```
app/(pt)/            Portuguese pages at root URLs (/, /industrias, /saude, /servicos, /agronegocio, /termos, /politica-privacidade, /avaliacao)
app/(en)/en/         English pages (/en, /en/industries, /en/health, /en/professional-services, /en/agribusiness, /en/terms, /en/privacy-policy)
components/          Page sections (HomePage, Header, Footer, ContactModal, PricingSection, ...)
components/ui/       Design-system primitives, cards, layout, navigation, feedback, typography, tokens
components/industry/ Shared template for the three industry pages (IndustryPage + data)
components/WorkflowVisual/  Workflow diagram system and presets (pt + en)
lib/i18n/            All copy: pt.ts, en.ts, and routes/helpers in index.ts
hooks/               useScrollReveal, useCountUp, useMediaQuery, useParallax
docs/                n8n workflow spec for the assessment tool
supabase/migrations/ Schema used by that n8n workflow (the site itself never calls Supabase)
public/              miledez-agency-logos/ (brand SVGs), software-company-logos/ (partner SVGs)
plans/               Plan and todo files (see Working conventions)
```

Many files in `components/` are no longer mounted (older hero and section variants). Check `components/HomePage.tsx` and the `app/` pages for what is actually rendered before editing a section.

## How the site works

- **Static export.** `next.config.js` sets `output: 'export'`. There are no API routes and no server components. Anything that talks to an external service (Formspree in ContactModal, the n8n webhook in AssessmentTool) is a client-side fetch.
- **Two locales, one codebase.** Each route group has its own root layout so `<html lang>` is correct, and both use `components/RootShell.tsx`. `template`, `loading` and `error` live inside the groups, never at `app/` root. Components take `locale?: Locale` and read copy with `getDict(locale)`. `en` is typed against `pt`, so a key missing from either file fails typecheck.
- **Adding a page.** Add the route pair to `routes` in `lib/i18n/index.ts`, create the page in both groups, add copy to both dictionaries, and add the two country-redirect rules to `vercel.json`. The redirects send non-Brazilian visitors to `/en` and Brazilian visitors to PT unless the `lang` cookie is set or the user agent is a crawler. They only run on Vercel, not in local dev.
- **Industry pages** (saude, servicos, agronegocio) are data-driven through `components/industry/IndustryPage.tsx`. Change the template once; do not fork it per page.
- **Header and PricingSection** need an `onContactClick` prop that opens ContactModal.
- **Pricing.** PT tiers are in BRL, EN tiers in USD. Both live in the dictionaries.
- **`/avaliacao`** exists but is unlinked from navigation on purpose. It is not production-ready.

## Hard rules

1. No `app/api/` routes and no server components. The build is a static export.
2. Run `pnpm install` after any dependency change so `pnpm-lock.yaml` stays in sync. A stale lockfile fails the Vercel build.
3. Every copy change goes into both `lib/i18n/pt.ts` and `lib/i18n/en.ts`. Never hardcode visible text in components.
4. Client-facing text is Brazilian Portuguese (English only in the `en` dictionary). Code, comments and docs are English.
5. Color values come from `components/ui/tokens/generated-theme.ts` via Tailwind `brand-*` and `neutral-*` classes. Change the theme file, not individual components, when the palette changes.
6. Do not run `pnpm run build` while the dev server is running.

## Design guidance

The site follows a restrained editorial style: mostly monochrome gray on `#fafafa`, white cards, Inter, line icons, burgundy `brand-primary` as the single accent. Use burgundy for calls to action, active states and link hovers; let the rest stay neutral. Beyond that, use your judgment and keep these defaults unless there is a reason not to:

- Reuse `components/ui/` before writing a new primitive.
- Keep body text at 16px and never below 14px.
- Sections align to `max-w-7xl mx-auto px-6 md:px-10` with `py-24 md:py-32`, so new sections line up with the hero.
- Prefer plain outline SVG icons and directional soft shadows (for example `3px 4px 12px rgba(0,0,0,0.10)`).
- Text on burgundy backgrounds is plain white.

If the `frontend-minimal-ui` or `brand-voice` skills are available in the session, they hold the full design and copy guidance and take precedence over this summary.

## Before pushing

Run lint, `tsc --noEmit` and a production build. Known non-issues: the build may fail collecting traces for `_not-found/page.js.nft.json` (a Next.js bug, pages still generate), and 404s on `_next/static/` in dev are fixed by `rm -rf .next`. When screenshotting with headless Puppeteer, force reveal-animated elements visible first (`el.style.opacity = '1'`) and verify layout from code rather than the screenshot, since Tailwind sizing classes may not apply.

## Working conventions

- Start a session with `git status`. End it with `/save` (commits and pushes the repo).
- For non-trivial work, plan first. Save the plan as `plans/{slug}-plan.md` and a checklist as `plans/{slug}-todo.md` (slug: 2 to 4 kebab-case words, same slug for both files, `- [ ]` items grouped by phase). Overwrite both when the plan changes.
- Confirm before destructive commands (`rm`, `mv`, history rewrites). The user prefers to run those manually.
- Do not read `sandbox/` or `archive/` folders unless asked.
- Replies: concise and actionable, tables for comparisons, numbered items for follow-ups.
