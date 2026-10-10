# Homepage Storytelling Copy — Plan (pt-BR)

Scope: the Portuguese homepage (`/`), plus the shared surfaces the story runs through: header, contact modal, meta, and the hand-off to `/industrias` and the industry pages. English (`/en`) mirrors this after the PT copy is approved.

Sources studied: `lib/i18n/pt.ts`, `components/HomePage.tsx`, all homepage section components, `plans/first-clients-marketing-plan.md`.

---

## 1. Diagnosis: why the page reads as separate sections

Each section works on its own, but together they break the story in six places.

| # | Problem | Where | Effect |
|---|---------|-------|--------|
| 1 | **Solution before problem.** The offer (ValuePropositionB, "pronta em dias. Sem risco.") comes before the reader has recognized a problem. | Order: Hero → Valor → Problemas | The offer has nothing to answer yet. The pain section then restarts the argument. |
| 2 | **Three different timelines.** "Resultados em dias, não meses" (hero) · "3–7 dias / 2–4 semanas" (valor) · "Primeiro processo em 2 semanas" (processo). Process steps add up to 30 min + 2–3 dias + 1–2 semanas. | Hero, Valor, Processo | The reader can't tell what is promised. Promises that don't match lower trust. |
| 3 | **Six CTA labels for one action.** "Agendar demonstração" · "Teste grátis uma automação" · "Falar com a gente" (2x) · "Quero testar grátis" · modal "Vamos conversar / Enviar mensagem". | All CTAs | "Demonstração" and "teste grátis" sound like two different offers. The strongest one (free test automation) gets diluted. |
| 4 | **Social proof the business doesn't have yet.** "Negócios como o seu **já automatizam com a gente**" with exact savings figures, while the marketing plan says there are no clients or cases yet. Industry pages show "Resultados típicos" (70%, 50%, 95%…) with no source. | BusinessProfiles, industry pages | Legal and trust risk. One doubtful number makes the reader doubt everything around it. |
| 5 | **Two "Como funciona" sections.** The pain CTA "Como funciona" jumps to #exemplos ("Como funciona uma automação"). There is also "Como trabalhamos" (#como-funciona), and the profiles CTA "Como começar" points to #como-funciona. | Problemas, Exemplos, Processo | Anchors and labels collide. The reader loses track of where they are. |
| 6 | **Unconnected threes.** The hero diagram has 3 branches, the pain section 3 problems, the examples 3 workflows (Saúde/Jurídico/Agro), the profiles 4 businesses (Clínica/Contabilidade/Café/Distribuidora) and pricing 3 tiers by "complexity". None of them refer to each other. | Throughout | The page has a natural spine of threes but doesn't use it. |

Smaller issues:
- Hero "seu trabalho do seu jeito no automático" plus "Reconecte seus sistemas do jeito que quiser" is vague and fails the swap test: a competitor could use it unchanged.
- Pain headline "Automação resolve problemas e aumenta qualidade" talks about the solution and is generic.
- Pricing headline "Quanto custa automatizar o que você recebe de volta" doesn't read clearly. The tier labels ("complexidade média") mean nothing to a buyer.
- Profile subscriptions (R$900, R$3.000) don't match the tiers (R$500 / 2.000 / 6.000).
- There is no objection handling: systems, LGPD/data, cancellation, errors, AI.
- There is no human behind the brand. With no cases yet, the founder is the strongest trust asset available.
- "Indústrias" in pt-BR suggests manufacturing. "Setores" is the natural word.
- Final CTA "Pronto para automatizar? Vamos conversar" is a stock phrase. "Sem compromisso, sem custo" is a negation list.

---

## 2. The story: one thread from top to bottom

**Protagonist:** the owner or manager of a small or medium business (clinic, office, cooperative) whose team loses hours to manual, repetitive work.

**Spine: the "three problems" thread.** The three hero diagram branches become the three problems, then the three examples, then the three ROI cards, then the three price tiers. Each section refers back to the one before it, so the page reads as one argument:

| Thread | Problem 1: A mesma tarefa, todo dia | Problem 2: Informação espalhada | Problem 3: O prazo que ninguém lembrou |
|--------|-------|-------|-------|
| Hero diagram | Tarefas que se repetem rodam sozinhas | Informação reunida em um só lugar | Prazos checados sem ninguém lembrar |
| Example | Saúde: confirmação de consultas (3 etapas) | Agro: cotação de insumos (5 etapas) | Escritórios: renovação de contratos (4 etapas) |
| ROI card | Clínica odontológica | Cooperativa de café | Escritório de contabilidade |
| Price tier | R$500 (ex.: confirmação de consultas) | R$2.000 (ex.: cotação ou contratos) | R$6.000 (vários processos ligados) |

**One promise, stated identically everywhere:**
- **Offer:** primeira automação construída sem custo de desenvolvimento; você testa antes de assinar. `[CONFIRM: pilot terms are an open decision in first-clients-marketing-plan.md]`
- **Timeline:** primeira automação funcionando em **até 2 semanas** (matches the process steps).
- **Model:** mensalidade com construção, hospedagem, manutenção e ajustes inclusos; cancele quando quiser.
- **Primary CTA (all instances):** **"Quero minha automação grátis"**. The modal title matches it.

**Narrative arc (the reader's question at each stop):**

| # | Section | Reader's question | Job of the section | Hand-off to next |
|---|---------|-------------------|--------------------|------------------|
| 1 | Hero | "Is this for me?" | Name the outcome + the offer in one screen | Diagram previews the 3 problems |
| 2 | Problemas | "Do they get my situation?" | Recognition: 3 concrete scenes | "Veja como isso fica automatizado" |
| 3 | Exemplos | "What does it actually look like?" | Same 3 problems, before → after | "Quanto isso vale" |
| 4 | Quanto vale | "Is it worth it for a business my size?" | Honest estimates with open assumptions | "Como começar" |
| 5 | Como trabalhamos | "What do I have to do? What's the risk?" | Process + risk reversal (the offer) | Price is the natural next question |
| 6 | Preços | "How much?" | Tiers tied to the examples already seen | Remaining doubts |
| 7 | Dúvidas (new) | "What about my data / systems / cancelling?" | Remove the last objections | Ready to act |
| 8 | Contato | "Who will I talk to? What happens next?" | Recap + human face + single CTA | Modal |

---

## 3. Recommended section order

| New # | Section | Anchor | Was | Change |
|-------|---------|--------|-----|--------|
| 1 | Hero | — | 1 | Rewrite |
| 2 | Problemas | `#problemas` | 3 | **Move up**, rewrite |
| 3 | Exemplos | `#exemplos` | 4 | Reorder cards to match problems, add a "before" line |
| 4 | Quanto vale | `#quanto-vale` (was `#perfis`) | 5 | 4 cards → 3, relabel as estimates |
| 5 | Como trabalhamos | `#como-funciona` | 6 | Absorbs the ValuePropositionB benefits into the promise card |
| 6 | Preços | `#precos` | 7 | Tie tiers to examples, add an "included" row |
| 7 | Dúvidas | `#duvidas` | — | **New** (FAQ, uses `ui/layout/Accordion`) |
| 8 | Contato | `#contato` | 8 | Rewrite, add founder line |
| — | ~~ValuePropositionB~~ | ~~`#valor`~~ | 2 | **Remove from homepage.** Its 4 benefits move into Processo (promise card) and Preços (included row). |

Why remove ValuePropositionB instead of moving it: all four of its benefits (entrega em dias, sem custo inicial, 100% gerenciado, sob medida) repeat the process and pricing sections. Moving them into the place where the reader asks "what's the risk / what's included" makes them land as answers instead of claims.

---

## 4. Enhanced copy, section by section

Rules applied: brand voice (pt-BR, conversational professional, outcome over mechanism, no English buzzwords), no em dashes in headings, no negation lists (a single absence is kept near the CTA), and no invented numbers (`[NEED]` / `[CONFIRM]` flags instead).

### 4.1 Hero

| Field | Current | New |
|-------|---------|-----|
| line1 / line2 / accent | seu trabalho / do seu jeito / **no automático** | As tarefas repetitivas / da sua empresa / **no automático** |
| subtitle | Reconecte seus sistemas do jeito que quiser… | Lembretes, cobranças, cotações e prazos passam a acontecer sozinhos, nos sistemas que você já usa. Construímos sua primeira automação sem custo de desenvolvimento, pronta em até 2 semanas. |
| cta | Agendar demonstração | **Quero minha automação grátis** |
| secondary | Descubra mais (→ #valor) | Ver exemplos (→ #problemas) |
| diagram.items | Tarefas repetitivas rodam sozinhas · Dados reunidos em um só lugar · Checagem automática | Tarefas que se repetem rodam sozinhas · Informação reunida em um só lugar · Prazos checados sem ninguém lembrar |

Headline alternatives:
- **A (recommended):** "As tarefas repetitivas da sua empresa no automático." Rationale: it says what is automated and for whom, keeps the brand phrase "no automático" (same as the footer tagline) and the 3-line layout.
- **B:** "Sua equipe para de repetir tarefa. O sistema faz por ela." Rationale: centered on the team's relief. Warmer, less specific.
- **C:** "Quantas horas por semana sua equipe gasta repetindo a mesma tarefa?" Rationale: a pain question in the reader's voice. Strong for ad traffic, weaker for organic.

The secondary CTA now points to `#problemas` because the next section is the problem, which keeps the reader inside the story.

### 4.2 Problemas (`#problemas`, moved to position 2)

- **titleLead:** Quanto do dia da sua equipe
- **titleAccent:** vai em copiar, colar e lembrar?
- **subtitle:** Três problemas aparecem em quase toda empresa de pequeno e médio porte. Eles custam horas toda semana e raramente aparecem em algum relatório.

| Point | Title | Description |
|-------|-------|-------------|
| 1 | A mesma tarefa, todo dia | Confirmar consultas, mandar lembretes, atualizar planilhas. Alguém da equipe faz isso à mão, uma mensagem de cada vez. |
| 2 | Informação em cinco lugares | O pedido chegou no WhatsApp, o preço está na planilha e a nota ficou no e-mail. Para responder o cliente, alguém precisa juntar tudo. |
| 3 | O prazo que ninguém lembrou | Contrato que venceu, cobrança que não saiu, licença que expirou. Cada esquecimento vira retrabalho, multa ou cliente perdido. |

- **cta:** Veja como isso fica automatizado (→ `#exemplos`)

Annotation: the titles name scenes, not categories ("Tarefas repetitivas" becomes "A mesma tarefa, todo dia"), and each one maps 1:1 to a diagram branch above and an example below.

### 4.3 Exemplos (`#exemplos`)

- **titleLead:** Os mesmos três problemas,
- **titleAccent:** resolvidos no automático
- **subtitle:** Um exemplo para cada problema acima. Na sua empresa, a automação segue o seu processo e usa os sistemas que você já tem.

Cards reordered to match problems 1 → 2 → 3, each with a new `solves` tag and a `before` line:

| Card | industry / summary | solves (tag) | before (new) | steps |
|------|--------------------|--------------|--------------|-------|
| 1 | Saúde · Confirmação de consultas | A mesma tarefa, todo dia | Antes: a recepção manda mensagem para cada paciente, um por um. | keep current 3 |
| 2 | Agro · Cotação de insumos | Informação em cinco lugares | Antes: alguém pede preço a cada fornecedor e compara tudo à mão. | keep current 5 |
| 3 | Escritórios · Renovação de contratos | O prazo que ninguém lembrou | Antes: a renovação depende de alguém lembrar a data. | keep current 4 |

- Rename "Jurídico" to **"Escritórios"** so it matches the ROI card (contabilidade) and the `/servicos` industry page.
- Remove the "N módulos" counter and the "De 3 a 10+ módulos" subtitle. They describe the mechanism, not the outcome.

### 4.4 Quanto vale (`#quanto-vale`, was `#perfis`)

- **titleLead:** Quanto vale
- **titleAccent:** uma automação dessas
- **subtitle:** Fizemos as contas para três negócios típicos. São estimativas com as premissas à vista, para você comparar com a sua realidade.

| Card | Business | Automation (links to example) | Subscription (must sit inside a tier) | Estimated return | How we calculated (new, `text-sm`) |
|------|----------|-------------------------------|------|------|------|
| 1 | Clínica odontológica · 12 profissionais | Confirmação de consultas | R$500/mês | `[NEED: recalculated]` | `[NEED: e.g. "X faltas a menos por mês × ticket médio de R$Y + Z horas da recepção"]` |
| 2 | Cooperativa de café · 50 produtores | Cotação de insumos | R$2.000/mês | `[NEED]` | `[NEED]` |
| 3 | Escritório de contabilidade · 6 colaboradores | Renovação de contratos | R$2.000/mês | `[NEED]` | `[NEED]` |

- Labels: "Assinatura" → **"Mensalidade"**, and "Economia" → **"Retorno estimado"**.
- Remove the 4th card (Distribuidora de insumos) because it has no matching example.
- **ctaPrimary:** Quero minha automação grátis · **ctaSecondary:** Como começar (→ `#como-funciona`)

Annotation: this replaces implied social proof ("já automatizam com a gente") with transparent math. It is the honest version of the same persuasion. When the first pilots finish, real case cards replace these estimates (marketing plan, Phase 3).

### 4.5 Como trabalhamos (`#como-funciona`)

- **titleLead:** Da primeira conversa
- **titleAccent:** à automação funcionando
- **subtitle:** Você conta como o trabalho é feito hoje. Nós construímos, testamos e cuidamos de tudo depois. Sua equipe não precisa mexer em nada técnico.
- **promiseTitle** (burgundy card): Sua primeira automação em até 2 semanas, sem pagar pelo desenvolvimento
- **promiseItems:** Desenvolvimento por nossa conta · Você testa antes de assinar · Hospedagem, manutenção e ajustes na mensalidade

| Step | Title | Description | Duration |
|------|-------|-------------|----------|
| 1 | Conversa de 30 minutos | Você mostra como a operação funciona hoje e onde o tempo se perde. Nós perguntamos, ouvimos e anotamos. | 30 min |
| 2 | Diagnóstico por escrito | Você recebe um relatório com as automações que mais fazem sentido para o seu negócio, o tempo que cada uma economiza e quanto custa. | 2–3 dias úteis |
| 3 | Construção e teste | Você escolhe por onde começar. Construímos a automação ligada aos seus sistemas e ajustamos com a sua equipe até funcionar do jeito certo. | 1–2 semanas |
| 4 | Funcionando, com acompanhamento | A automação entra no dia a dia. Se o seu processo mudar, nós ajustamos. Isso está incluso na mensalidade. | contínuo |

Annotation: step 2 now produces the same kind of estimate the reader just saw in "Quanto vale", so the page promises it and the process delivers it. The old line "A intenção é inspirar" is removed because it undersold a free deliverable.

### 4.6 Preços (`#precos`)

- **titleLead:** Quanto custa
- **titleAccent:** e o que está incluso
- **subtitle:** Uma mensalidade cobre construção, hospedagem, manutenção e ajustes. Cancele quando quiser.

| Tier | Price | label | example (new) |
|------|-------|-------|---------------|
| 1 | a partir de R$500/mês | Uma automação simples | Ex.: confirmação de consultas por WhatsApp |
| 2 | a partir de R$2.000/mês | Automações com várias etapas e sistemas | Ex.: cotação com fornecedores ou renovação de contratos |
| 3 | a partir de R$6.000/mês | Vários processos ligados, sob medida | Ex.: compras do pedido à nota fiscal |

- **included (new row, shared by all tiers):** Incluso em todos: construção · hospedagem · manutenção · ajustes quando seu processo mudar · suporte por WhatsApp `[CONFIRM: support channel]`
- **cta:** Quero minha automação grátis
- **ctaNote (new, below the button):** O desenvolvimento da primeira automação é por nossa conta.

### 4.7 Dúvidas (`#duvidas`, new)

- **titleLead:** Perguntas
- **titleAccent:** antes de começar

| Question | Answer |
|----------|--------|
| Preciso trocar algum sistema? | Não. Conectamos o que você já usa: WhatsApp, planilhas, e-mail e seu sistema de gestão. `[CONFIRM: limits, e.g. systems without an API]` |
| Minha equipe vai precisar aprender uma ferramenta nova? | Não. A automação trabalha nos bastidores e a equipe continua nos mesmos sistemas, com menos tarefa manual. |
| Como ficam os dados dos meus clientes? | `[CONFIRM: where data is hosted, LGPD posture, data processing agreement]` |
| O que acontece se eu cancelar? | `[CONFIRM: is the automation switched off? Do they keep exports or documentation?]` |
| E se a automação der erro? | Acompanhamos as automações e avisamos quando algo falha. A correção está inclusa na mensalidade. `[CONFIRM: monitoring + response time]` |
| Vocês usam inteligência artificial? | Quando ajuda, sim: para ler mensagens, organizar documentos ou classificar pedidos. Quando uma regra simples resolve, usamos a regra. |

Annotation: the AI answer is deliberately plain. It positions the agency as practical rather than hype-driven, which suits the brand voice.

### 4.8 Contato (`#contato`, final CTA)

- **titleLine1:** Escolha uma tarefa que se repete.
- **titleLine2:** A gente coloca no automático.
- **text:** Conte qual processo mais toma tempo da sua equipe. Respondemos em até 1 dia útil `[CONFIRM]` e construímos a primeira automação sem custo de desenvolvimento.
- **founder (new):** Quem responde é `[NEED: nome]`, fundador da mil&dez, em Belo Horizonte. `[NEED: photo]`
- **button:** Quero minha automação grátis
- **note:** Sem compromisso. (the single absence, next to the CTA)

Annotation: this closes the arc the hero opened (tarefas repetitivas → no automático) and turns the abstract "vamos conversar" into one concrete, small first step.

### 4.9 Shared surfaces

| Surface | Current | New |
|---------|---------|-----|
| `home.meta.title` | mil&dez - Automação de Processos | mil&dez · Automação de processos para pequenas e médias empresas |
| `home.meta.description` | Automatizamos seus processos de negócio. Você foca no que importa. | Lembretes, cobranças, cotações e prazos no automático, nos sistemas que você já usa. Primeira automação em até 2 semanas, sem custo de desenvolvimento. |
| `header.industries` | Indústrias | **Setores** (label only, URL `/industrias` stays) |
| `contactModal.title` | Vamos conversar | Sua automação grátis |
| `contactModal.intro` | Preencha o formulário e entraremos em contato… | Conte qual tarefa mais toma tempo da sua equipe. Respondemos em até 1 dia útil para marcar a conversa de 30 minutos. |
| `contactModal.messagePlaceholder` | Conte um pouco sobre sua empresa… | Ex.: confirmamos 40 consultas por dia por telefone e muitos pacientes ainda faltam. |
| `contactModal.submit` | Enviar mensagem | Enviar |
| `contactModal.successText` | Entraremos em contato em breve… | Recebemos sua mensagem. Respondemos em até 1 dia útil para marcar a conversa de 30 minutos. |

### 4.10 Hand-off to sub-pages (coherence only, no full rewrite)

| Page | Change |
|------|--------|
| `/industrias` | "Automação para **sua indústria**" → "Automação para **o seu setor**" |
| Industry pages (all 3, shared template) | `heroCta` "Agendar conversa" and `ctaButton` "Falar conosco" → **"Quero minha automação grátis"** |
| Industry pages | "Resultados típicos" with unsourced metrics → retitle "Resultados que buscamos" and keep only figures with a stated basis, or remove the metrics grid until the first cases exist. `[NEED: decision]` |
| Industry pages | Add the "até 2 semanas, sem custo de desenvolvimento" line to `ctaText` so the promise matches the homepage |

---

## 5. Component changes

| Component | Change | Dictionary impact |
|-----------|--------|-------------------|
| `HomePage.tsx` | New order (Hero → Problemas → Exemplos → Quanto vale → Processo → Preços → Dúvidas → Contato). Remove `ValuePropositionB`. Hero secondary href → `#problemas`. Rename `#perfis` → `#quanto-vale`. Add founder line + note to the final CTA. | `home.value` removed. `home.cta.founder`, `home.cta.note` added |
| `PainPointSection.tsx` | Copy only. Background `bg-bg-muted` now sits right after the white hero. Fine, but check alternation (see below) | — |
| `WorkflowExplainerSection.tsx` | Reorder workflows. Add a `solves` tag (small uppercase, replaces the module count) and a `before` line (`text-base text-neutral-600`) above the steps. Remove `{n} módulos` | `workflows[].solves`, `workflows[].before` added. `modules` removed |
| `BusinessProfilesSection.tsx` | 4 → 3 cards, `md:grid-cols-3`. Add an `automation` line and an `assumption` footnote (`text-sm`). New labels | `items[].automation`, `items[].assumption` added |
| `ProcessSection.tsx` | Title becomes lead + accent, like every other section | `process.title` → `titleLead` + `titleAccent` |
| `PricingSection.tsx` | Add an `example` per tier, a shared `included` row and a `ctaNote` under the button | `tiers[].example`, `included`, `ctaNote` added |
| **New** `FAQSection.tsx` | Left-aligned header (`max-w-2xl`), `ui/layout/Accordion`, `py-24 md:py-32`, `max-w-7xl mx-auto px-6 md:px-10` | `home.faq` added |
| `HeroAutomationDiagram.tsx` | Copy only (3 items) | — |
| `ContactModal.tsx` | Copy only | — |
| `Header.tsx` | Label only | — |

**Background alternation after the reorder** (white / muted rhythm): Hero white → Problemas muted → Exemplos **white** (was muted) → Quanto vale muted → Processo white → Preços muted → Dúvidas white → Contato muted. This needs `bg-*` swaps on Exemplos, Quanto vale, Processo and Contato.

**i18n:** `en.ts` is typed against `pt`, so every shape change above must also land in `en.ts` in the same commit or `tsc` fails. Option: add English placeholder keys first, then translate in a follow-up.

**Design rules to respect:** no `text-xs` (the profile labels currently use it; switch to `text-sm`), icons stay outline with no background containers, all text on burgundy is full `text-white`, section headers stay left-aligned.

---

## 6. Open items before implementation

1. `[CONFIRM]` Pilot/offer terms: "desenvolvimento por nossa conta + você testa antes de assinar".
2. `[NEED]` Recalculated ROI estimates with written assumptions (3 cards).
3. `[NEED]` Founder name and photo for the final CTA.
4. `[CONFIRM]` Response time (1 dia útil), support channel, monitoring and error response.
5. `[CONFIRM]` FAQ facts: data hosting and LGPD, what happens on cancellation, system limits.
6. `[NEED: decision]` Industry-page metrics: rewrite with sources or remove until the first cases exist.
7. Headline choice: A (recommended), B or C.
