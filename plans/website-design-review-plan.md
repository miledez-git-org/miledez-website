# Website Design & Content Review — Action Plan

## Context

The mil&dez website has accumulated inconsistencies from multiple sessions working on different sections. This review applies the `miledez-design-system` and `miledez-brand-voice` skills to audit every page and produce a prioritized, numbered list of changes focused on: extreme minimalism, consistent design, coherent copy, and conversion optimization (contact form / booking).

**Pages reviewed:** Homepage (`/`), Saúde (`/saude`), Serviços (`/servicos`), Agronegócio (`/agronegocio`)

---

## A. Content Reduction — Cut to the Essential

The homepage is ~8400px tall with 10 sections. Several are redundant or add length without adding conversion value.

| # | Section / Element | Issue | Recommendation |
|---|---|---|---|
| A1 | **PainPointSection** (homepage) | Generic pain points ("tarefas repetitivas", "informação espalhada", "erros") that every visitor already knows. Adds a full screen of content without teaching anything new or differentiating mil&dez. | **Remove entirely.** The WorkflowExplainer immediately after already shows the "before/after" more effectively. |
| A2 | **BusinessProfilesSection** (homepage) | 6 dark cards with hypothetical ROI numbers. Too much content, uses dark backgrounds (design system violation), and the ROI figures are unverified projections that may hurt credibility. | **Remove entirely.** Industry pages already handle vertical-specific messaging. If kept, reduce to 3 cards max on white/light backgrounds. |
| A3 | **ValuePropositionB** left column | 3 paragraphs of continuous prose (violates "no more than 3 sentences" principle). The narrative block competes with the benefit list on the right. | **Cut the left column prose to 2 short sentences max.** Let the 6 benefit items on the right do the work. |
| A4 | **ValuePropositionB** benefit list | 6 benefit items. "Feito para o Brasil" is weak (doesn't describe an outcome). "100% personalizado" and "Totalmente gerenciado" overlap in feel. | **Reduce to 4 strongest benefits:** speed (3-7 dias), zero setup cost (R$0), fully managed, no contract. Cut "Feito para o Brasil" and "100% personalizado". |
| A5 | **LogoGrid** | 32 logos is visually overwhelming and dilutes the trust signal. Many logos (Zapier, Intercom, Zendesk) are unlikely tools for the target audience (clinics, accountants, farms). | **Reduce to 16-20 logos** most relevant to target verticals (WhatsApp, Google Suite, ContaAzul, PIX, Doctoralia, iClinic, Excel, Pipedrive, etc.). Remove niche SaaS logos. |
| A6 | **Final CTA section** copy | "Criamos uma automação de teste gratuita para seu negócio. Sem compromisso, sem custo." — "sem compromisso/sem custo" already appears in ValueProp and Pricing. Redundant. | **Simplify to just the headline + button.** "Vamos conversar" + "Agendar conversa" is enough. The risk-removers are already established earlier. |
| A7 | **Homepage section count** | After A1+A2 removals, the homepage flow becomes: Hero → WorkflowExplainer → ValueProp → LogoGrid → Process → Pricing → CTA → Footer (8 sections → cleaner, faster to scan). | **Confirm new order** (see D1). |

---

## B. Design Consistency Fixes

| # | Element | Issue | Recommendation |
|---|---|---|---|
| B1 | **Header logo accent** | Uses `#d14800` (darker orange) instead of brand primary `#eb5100`. Hardcoded inline. | Change to `brand-primary` (`#eb5100`). Use Tailwind class. |
| B2 | **Header background** | Hardcoded `#274855` inline style. | Use `bg-brand-black` Tailwind class (token already exists in generated-theme.ts as `brand-black: #274855`). |
| B3 | **Footer background** | Same — hardcoded `#274855`. | Use `bg-brand-black` Tailwind class. |
| B4 | **globals.css `--brand-accent`** | Set to `#d14800` (old orange). Conflicts with generated-theme.ts primary `#eb5100`. | Update to `#eb5100` or remove if unused. |
| B5 | **PainPointSection heading** | `text-[#274855]` hardcoded on "esses problemas?" span. Unnecessary — both lines should be the same color. | Remove the span wrapping. Use `text-brand-black` on the entire heading. |
| B6 | **PainPointSection icon containers** | Icons wrapped in `bg-brand-primary-subtle` rounded containers — violates "never colored background containers for icons". | If section kept: remove background containers, apply orange color directly to icon via parent text class. |
| B7 | **WorkflowExplainerSection font** | Phase descriptions use `text-[13px]` — below 14px minimum. | Change to `text-sm` (14px). |
| B8 | **ScrollProgress bar** | Hardcoded `bg-[#274855]`. | Use `bg-brand-black` Tailwind class. |
| B9 | **ProcessSection heading** | `text-[#274855]` hardcoded in heading accent span. | Use `text-brand-black` Tailwind class. |
| B10 | **ValuePropositionB heading** | `text-[#274855]` hardcoded accent span on "não meses". | Use `text-brand-secondary` or `text-brand-black` Tailwind class. |
| B11 | **Header nav active underline** | Uses `#d14800` for active link underline. | Change to `brand-primary` (#eb5100). |
| B12 | **Header "Contato" button** | Uses `#d14800` background. | Change to `bg-brand-primary hover:bg-brand-primary-dark`. |
| B13 | **Icon styling across pages** | Homepage PainPointSection and industry ChallengeCards both use `bg-brand-primary-subtle` icon containers. | Standardize: plain outline icons with `text-brand-primary` color, no background containers. |

---

## C. Copy & CTA Consistency

| # | Element | Issue | Recommendation |
|---|---|---|---|
| C1 | **Hero CTA: "Agendar demonstração"** | "Demonstração" is formal/technical. Industry pages use "Agendar conversa" (warmer, lower commitment per brand voice). Inconsistent across site. | Change to **"Agendar conversa"** — matches industry pages and brand voice ("conversa rápida", "sem compromisso"). |
| C2 | **Hero secondary CTA: "Ver casos de uso"** | "Casos de uso" is a technical term. Scrolls to #valor (ValueProp section). Not intuitive for non-technical business owners. | Change to **"Como funciona"** — scrolls to WorkflowExplainer. More natural, matches curiosity. |
| C3 | **Pricing heading** | "Quanto custa automatizar / o que você recebe de volta" — the two-part heading is confusing. First line asks a question, second line shifts to ROI framing. | Simplify to **"Investimento"** or **"Quanto custa"** as heading. Move "o que você recebe de volta" to subtext if needed. |
| C4 | **Final CTA: "Quero testar grátis"** | "Quero" (I want) is first-person — unusual for a CTA button. Doesn't match any other CTA on the site. | Change to **"Agendar conversa"** for consistency, or **"Teste grátis uma automação"** (matches ValueProp CTA). |
| C5 | **Pricing CTA: "Falar com a gente"** | Uses "a gente" register — website should use "nós" register per brand voice. Inconsistent with other CTAs. | Change to **"Agendar conversa"** or **"Falar conosco"** (matches industry page CTAs). |
| C6 | **CTA label standardization** | Site currently uses 5+ different CTA labels for the same action (open contact modal). Confusing. | **Standardize to 2 labels max:** Primary: "Agendar conversa" (all hero + main CTAs). Secondary: "Falar conosco" (end-of-page CTAs). |
| C7 | **Industry page CTA headings** | Each industry CTA section has a different heading ("Vamos simplificar sua administração?", "Vamos recuperar suas horas produtivas?", "Vamos automatizar sua operação?"). Good variety, but subtext is identical across all three. | Keep the unique headings. **Customize the subtext** for each vertical too, or remove it entirely (it's generic: "Conversa sem compromisso..."). |
| C8 | **Industry workflow section titles** | Saúde: "Automações para sua clínica" (specific). Serviços/Agronegócio: "O que automatizamos" (generic). | **Standardize to industry-specific:** "Automações para seu escritório", "Automações para sua operação". |
| C9 | **Hero subheadline** | "Conectamos seus sistemas e automatizamos os processos que tomam seu tempo." — "sistemas" is borderline technical; sentence is 15 words. | Tighten: **"Automatizamos os processos que tomam seu tempo. Resultados em dias — não meses."** (cut "conectamos seus sistemas"). |

---

## D. Structural & Layout Changes

| # | Element | Issue | Recommendation |
|---|---|---|---|
| D1 | **Homepage section order** | After removing PainPoint + BusinessProfiles (A1, A2), proposed flow: **Hero → WorkflowExplainer → ValueProp → LogoGrid → Process → Pricing → CTA → Footer**. This follows: what is it → why us → trust → how it works → cost → act. | Confirm this order. Consider swapping LogoGrid and Process if "how we work" feels more urgent than "what tools". |
| D2 | **Homepage vertical padding** | Some sections have `py-28 md:py-40` (massive 160px padding on desktop). After removing 2 sections, the remaining ones can breathe more naturally. | **Standardize to `py-24 md:py-32`** across all remaining sections for a tighter, more intentional feel. |
| D3 | **Pricing section heading alignment** | Currently centered with two-column price grid below. The heading wraps awkwardly on some viewports ("automatizar" on one line, "o que você recebe de volta" on next). | After simplifying heading (C3), ensure single-line or intentional two-line break. Left-align heading to match Process/ValueProp sections. |
| D4 | **Footer min-height** | `min-h-[50vh]` (mobile) / `min-h-[40vh]` (md) — footer takes up half the screen. Excessive for the content it holds. | **Remove min-height** or reduce to `min-h-[30vh]`. Let content determine height. |
| D5 | **CLAUDE.md varejo reference** | Project structure lists `varejo/` as a page but the actual route is `/agronegocio`. `/varejo` returns 404. | Update CLAUDE.md to reflect actual structure (`agronegocio/` not `varejo/`). |

---

## E. Verification

After implementing changes:
1. `npm run build` — confirm no build errors
2. Puppeteer screenshots of all pages at 1440px — compare before/after
3. Check mobile viewport (375px) for all pages
4. Verify all CTA buttons open ContactModal
5. Test Header nav links (all 3 industry pages + Preços anchor + Contato)
6. Confirm no hardcoded hex values remain (grep for `#274855`, `#d14800`, `#6ee7b7`)

---

## Files to Modify

| File | Changes |
|---|---|
| `app/page.tsx` | Remove PainPointSection + BusinessProfilesSection imports/sections, update CTA text, adjust section order/padding, simplify final CTA |
| `components/Header.tsx` | Replace hardcoded `#d14800` → brand-primary, `#274855` → brand-black Tailwind classes |
| `components/Footer.tsx` | Replace hardcoded `#274855` → brand-black, reduce min-height |
| `components/ValuePropositionB.tsx` | Trim left column prose, reduce benefits from 6→4, update heading color token |
| `components/PricingSection.tsx` | Simplify heading, update CTA label, adjust alignment |
| `components/LogoGrid.tsx` | Reduce logo count from 32→16-20 |
| `components/WorkflowExplainerSection.tsx` | Fix `text-[13px]` → `text-sm` |
| `components/ScrollProgress.tsx` | Replace hardcoded `#274855` |
| `components/ProcessSection.tsx` | Replace hardcoded heading color |
| `app/globals.css` | Update `--brand-accent` from `#d14800` → `#eb5100` |
| `app/saude/SaudeContent.tsx` | Update workflow section title consistency, customize CTA subtext |
| `app/servicos/ServicosContent.tsx` | Update workflow section title, customize CTA subtext |
| `app/agronegocio/AgronegocioContent.tsx` | Update workflow section title, customize CTA subtext |
| `CLAUDE.md` | Fix varejo → agronegocio reference |
