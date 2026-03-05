# Industry Subpages Revision — Todo

> Plan: [industry-subpages-revision-plan.md](./industry-subpages-revision-plan.md)

## Phase 1: Shared Components

- [ ] WorkflowVisualCompact: remove black bar from title, use `h3 text-base font-semibold text-brand-black`
- [ ] WorkflowVisualCompact: add `w-[280px]` to step card divs
- [ ] WorkflowVisualCompact: add `items-start` to flex column for left-alignment
- [ ] ChallengeCard: redesign with `bg-white rounded-lg p-8 shadow-card`
- [ ] ChallengeCard: add orange top accent bar (`h-1 bg-brand-primary`)
- [ ] ChallengeCard: change icon container to `bg-brand-primary-subtle text-brand-primary rounded-lg`
- [ ] MetricsGrid: change value color to `text-brand-primary`
- [ ] MetricsGrid: change AccentBar and GrowthArrow colors to brand-primary
- [ ] MetricsGrid: change grid to `grid-cols-2 gap-8`
- [ ] IndustryIntegrations: change interface from `icon: ReactNode` to `logo: string`
- [ ] IndustryIntegrations: render `<img>` tags from `/logos/` instead of icon ReactNodes
- [ ] IndustryIntegrations: update hover borders to brand-primary, add rounded-lg

## Phase 2: SaudeContent.tsx

- [ ] Workflows section: remove `text-center` from header, remove `mx-auto` from subtitle
- [ ] Workflows grid: change to `md:grid-cols-2 lg:grid-cols-4 gap-6`
- [ ] Results section: restructure to two-column layout (title+text left, metrics right)
- [ ] Integrations data: change to `{ name, logo }` format, drop missing logos, substitute ClickSign -> DocuSign
- [ ] Update imports: remove `icons` from Icons import

## Phase 3: ServicosContent.tsx

- [ ] Apply same workflows, results, integrations, and import changes as SaudeContent

## Phase 4: VarejoContent.tsx

- [ ] Apply same workflows, results, integrations, and import changes as SaudeContent

## Phase 5: Verification

- [ ] Run `npm run build` — no type errors
- [ ] Visual QA: hero cards 280px, left-aligned
- [ ] Visual QA: challenge cards with orange accents and shadows
- [ ] Visual QA: workflows in horizontal row, no black bars on titles
- [ ] Visual QA: results two-column, orange figures
- [ ] Visual QA: integration logos rendering correctly
- [ ] Visual QA: all section headers left-aligned
- [ ] Mobile responsiveness check
