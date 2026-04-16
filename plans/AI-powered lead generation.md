I wantt you to Build an AI-powered lead generation assessment tool for the mil&dez website (miledez.com.br). This is a multi-step interactive form embedded natively into the Next.js site that collects business context from the user, sends it to an n8n webhook, receives a Claude API-generated automation blueprint in real-time, and displays the results on-screen — all while persisting the lead data to Supabase and Google Sheets, and sending a follow-up email via n8n.

Read this entire prompt before writing any code. Do not scaffold anything until you understand the full architecture.

---

## PROJECT CONTEXT

- **Project:** miledez.com.br — a Brazilian workflow automation agency website
- **Framework:** Next.js 14 with TypeScript, App Router
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Language:** All user-facing text is in Portuguese (BR). All code comments and variable names in English.

### Brand Design System (MUST follow strictly)
- **Fonts:** Manrope (headings, 700/800 weight), Source Sans 3 (body, 400/600 weight)
- **Primary Orange:** #eb5100 (CTAs, accents, active states)
- **Dark Teal:** #274855 (card backgrounds, section backgrounds, secondary text)
- **Dark Green:** #085042 (alternative dark sections, footer)
- **Light backgrounds:** #f8f7f4 or white
- **Body text:** #4a4a4a on light, #e0e0e0 on dark
- **Border radius:** 6px for cards and inputs
- **Design philosophy:** Clean minimalism. No emojis. No generic AI aesthetics. No purple. No neon gradients. Sharp, professional, Brazilian-market appropriate.

---

## ARCHITECTURE OVERVIEW

```
User fills form on website
        ↓
Next.js API Route (/api/assessment)
        ↓ POST (synchronous)
n8n Webhook (Respond to Webhook mode)
        ↓
n8n internally:
  1. Claude API call → generates automation blueprint in PT-BR
  2. Supabase insert → persists lead + results
  3. Google Sheets append → mirrors key fields for sales visibility
  4. Gmail send → delivers results email to user
  5. Webhook Response → returns Claude output as JSON
        ↓
Next.js API Route receives response
        ↓
Frontend renders personalized results on-screen
```

---

## PART 1: FRONTEND — Multi-Step Assessment Form Component

### File: `src/components/AssessmentTool.tsx`

Create a `"use client"` component with a multi-step form flow. Structure:

**Step 1 — Industry Selection**
- Heading: "Descubra como automatizar seu negócio"
- Subheading: "Responda 4 perguntas rápidas e receba um plano personalizado de automação em segundos."
- Field: `setor` — styled radio card selector (NOT a dropdown) with 3 options:
  - "Saúde" (icon: heart/medical)
  - "Serviços Profissionais" (icon: briefcase)
  - "Agropecuária" (icon: leaf/plant)
- Each option is a clickable card (dark teal border on select, orange accent indicator)

**Step 2 — Bottleneck Identification**
- Heading: "Qual é o maior gargalo no seu dia a dia?"
- Field: `gargalo` — radio card selector with 4-5 options (dynamically filtered by selected `setor`):
  - Healthcare: "Agendamento de pacientes", "Gestão de prontuários", "Follow-up pós-consulta", "Relatórios e conformidade"
  - Professional Services: "Captação de clientes", "Gestão de documentos", "Emissão de relatórios", "Agendamento e follow-up"
  - Agriculture: "Rastreamento de equipamentos", "Relatórios de produção", "Gestão de fornecedores", "Conformidade e certificações"

**Step 3 — Current Tools**
- Heading: "Quais ferramentas você usa hoje?"
- Subheading: "Ex: WhatsApp, Google Sheets, sistema próprio, ERP..."
- Field: `ferramentas` — text input with placeholder
- Helper text below: "Não se preocupe se não souber os nomes exatos."

**Step 4 — Contact Information**
- Heading: "Onde enviamos seu plano personalizado?"
- Fields:
  - `nome` — text input, label "Seu nome"
  - `email` — email input, label "Seu melhor e-mail"
  - `empresa` — text input, label "Nome da empresa"
- Submit button: "Gerar meu plano de automação →" (orange #eb5100 background, white text)

**Loading State (Step 5a)**
- After submit, show a branded loading screen:
  - Centered content with a subtle pulse animation
  - Text: "Analisando seu negócio..." that transitions to "Gerando seu plano personalizado..." after 3 seconds
  - Use a minimal CSS animation — NO spinner wheels. Use a horizontal progress bar or pulsing dots styled in brand colors.
  - The component holds this state while awaiting the API response.

**Results State (Step 5b)**
- Once the API responds, render the results:
  - Heading: "Seu Plano de Automação Personalizado"
  - Subheading: "Baseado no setor de {setor}, focado em {gargalo}"
  - Render 3 automation workflow cards. Each card includes:
    - Workflow name (bold, Manrope)
    - Tools involved
    - Expected outcome
    - Estimated weekly time saved
  - Cards use dark teal (#274855) background with light text, 6px radius, clean spacing
  - Below the cards: "Também enviamos esse plano para {email}."
  - CTA button: "Agendar uma conversa gratuita →" (links to a scheduling page or WhatsApp)
  - Secondary link: "Voltar ao início" to reset the form

**Error State**
- If the API call fails or times out (set 25-second client timeout):
  - Heading: "Algo deu errado"
  - Body: "Não conseguimos gerar seu plano agora. Nosso time já foi notificado. Tente novamente em alguns instantes."
  - Retry button: "Tentar novamente"

### Form behavior requirements:
- Validate each step before allowing progression (required fields, valid email format)
- Step indicator at the top (e.g., "Passo 1 de 4" or minimal dot indicators)
- Smooth transitions between steps (use CSS transitions or framer-motion if already installed — check package.json first)
- Mobile-first responsive design. Form should work perfectly on phone screens.
- NO <form> HTML tags for submit — use onClick handlers on the button
- Store form state in a single useState object

---

## PART 2: NEXT.JS API ROUTE

### File: `src/app/api/assessment/route.ts`

Create a POST route handler that:

1. Receives the form payload: `{ setor, gargalo, ferramentas, nome, email, empresa }`
2. Validates all required fields are present (return 400 if not)
3. Sends a POST request to the n8n webhook URL (stored as `N8N_ASSESSMENT_WEBHOOK_URL` in environment variables)
4. The request body to n8n should be the full form payload as JSON
5. Awaits the response from n8n (synchronous webhook — n8n will process and return)
6. Returns the n8n response JSON to the frontend
7. Handles errors gracefully:
   - n8n timeout (set 30-second fetch timeout) → return 504
   - n8n error response → return 502
   - Validation error → return 400
   - Unknown error → return 500

### Environment variable needed:
```env
N8N_ASSESSMENT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/assessment
```

---

## PART 3: N8N WORKFLOW SPECIFICATION

Do NOT build the n8n workflow in code. Instead, generate a detailed **n8n workflow specification document** as a separate markdown file at `docs/n8n-assessment-workflow.md` that I can follow to build it manually in the n8n editor.

The spec should describe each node in order:

### Node 1: Webhook (Trigger)
- Type: Webhook
- HTTP Method: POST
- Response Mode: "Respond to Webhook" (this is critical — it means n8n holds the HTTP connection open and returns data at the end)
- Path: `/assessment`
- Authentication: None (or Header Auth with a shared secret — specify both options)

### Node 2: Claude API Call (HTTP Request)
- Type: HTTP Request
- Method: POST
- URL: `https://api.anthropic.com/v1/messages`
- Headers:
  - `x-api-key`: `{{$env.ANTHROPIC_API_KEY}}`
  - `anthropic-version`: `2023-06-01`
  - `content-type`: `application/json`
- Body (JSON):
```json
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 1500,
  "system": "Você é um consultor especialista em automação de processos para pequenas e médias empresas brasileiras, trabalhando para a agência mil&dez. Seu papel é analisar o contexto do negócio e gerar recomendações específicas e acionáveis de automação.\n\nIMPORTANTE: Responda EXCLUSIVAMENTE em JSON válido, sem markdown, sem backticks, sem texto adicional. O JSON deve seguir exatamente esta estrutura:\n{\n  \"workflows\": [\n    {\n      \"nome\": \"Nome do fluxo de automação\",\n      \"ferramentas\": \"Lista das ferramentas envolvidas\",\n      \"resultado\": \"Descrição concisa do resultado esperado\",\n      \"tempo_economizado\": \"Estimativa de horas economizadas por semana\"\n    }\n  ]\n}\n\nGere exatamente 3 workflows. Seja específico para o setor e as ferramentas mencionadas. Use linguagem profissional mas acessível. Não use jargão técnico excessivo.",
  "messages": [
    {
      "role": "user",
      "content": "Setor: {{setor}}\nMaior gargalo: {{gargalo}}\nFerramentas atuais: {{ferramentas}}\nEmpresa: {{empresa}}\n\nGere 3 automações específicas para este negócio."
    }
  ]
}
```
- Parse the response to extract `content[0].text` and JSON.parse it

### Node 3: Supabase Insert
- Type: Supabase node (or HTTP Request to Supabase REST API)
- Table: `assessment_leads`
- Fields to insert:
  - `nome` (text)
  - `email` (text)
  - `empresa` (text)
  - `setor` (text)
  - `gargalo` (text)
  - `ferramentas` (text)
  - `resultado_ai` (jsonb — the full Claude response object)
  - `created_at` (timestamptz — auto-set)
- Include the Supabase table creation SQL in the spec

### Node 4: Google Sheets Append
- Type: Google Sheets node
- Operation: Append Row
- Sheet name: "Leads Assessment"
- Columns: Nome, Email, Empresa, Setor, Gargalo, Ferramentas, Data
- Date format: DD/MM/YYYY HH:mm

### Node 5: Gmail Send
- Type: Gmail node
- To: `{{email}}`
- Subject: "Seu plano de automação personalizado — mil&dez"
- Body (HTML): Generate an email template spec that includes:
  - mil&dez logo at top
  - "Olá {nome}," greeting
  - Brief intro paragraph
  - The 3 workflow recommendations formatted as styled sections
  - CTA button: "Agendar conversa gratuita"
  - Footer with mil&dez contact info
  - Use inline CSS. Brand colors. Clean, professional layout.

### Node 6: Respond to Webhook
- Type: Respond to Webhook
- Response Code: 200
- Response Body (JSON):
```json
{
  "success": true,
  "results": {{parsed Claude JSON output}},
  "leadId": {{Supabase inserted row ID}}
}
```

**Important n8n notes to include in the spec:**
- Nodes 3, 4, and 5 should run in parallel (not sequential) after Node 2 to minimize response time
- Node 6 must be the final node in the main execution path
- Include error handling: if Claude API fails, still save the lead to Supabase/Sheets and return an error response
- Total execution target: under 15 seconds

---

## PART 4: SUPABASE TABLE SCHEMA

Generate a SQL migration file at `supabase/migrations/001_create_assessment_leads.sql`:

```sql
CREATE TABLE IF NOT EXISTS assessment_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  empresa TEXT,
  setor TEXT NOT NULL,
  gargalo TEXT NOT NULL,
  ferramentas TEXT,
  resultado_ai JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  converted BOOLEAN DEFAULT FALSE,
  notes TEXT
);

CREATE INDEX idx_assessment_leads_email ON assessment_leads(email);
CREATE INDEX idx_assessment_leads_setor ON assessment_leads(setor);
CREATE INDEX idx_assessment_leads_created ON assessment_leads(created_at DESC);
```

---

## PART 5: WEBSITE INTEGRATION

### Page file: `src/app/assessment/page.tsx` (or wherever the assessment lives)

Create a dedicated page that:
- Imports and renders the `AssessmentTool` component
- Has appropriate metadata (title: "Avaliação Gratuita de Automação | mil&dez", description for SEO)
- Optionally wraps in the existing site layout/nav

Also provide guidance (as code comments) for embedding the component on the homepage as an inline section, using a simple import.

---

## PART 6: TYPE DEFINITIONS

### File: `src/types/assessment.ts`

Define TypeScript interfaces:

```typescript
export interface AssessmentFormData {
  setor: 'saude' | 'servicos' | 'agropecuaria';
  gargalo: string;
  ferramentas: string;
  nome: string;
  email: string;
  empresa: string;
}

export interface WorkflowRecommendation {
  nome: string;
  ferramentas: string;
  resultado: string;
  tempo_economizado: string;
}

export interface AssessmentResponse {
  success: boolean;
  results: {
    workflows: WorkflowRecommendation[];
  };
  leadId?: string;
}

export interface AssessmentError {
  success: false;
  error: string;
  code: number;
}
```

---

## FILE STRUCTURE SUMMARY

Generate these files:
1. `src/components/AssessmentTool.tsx` — main form + results component
2. `src/app/api/assessment/route.ts` — API route
3. `src/app/assessment/page.tsx` — dedicated page
4. `src/types/assessment.ts` — TypeScript interfaces
5. `docs/n8n-assessment-workflow.md` — n8n workflow build spec
6. `supabase/migrations/001_create_assessment_leads.sql` — database migration

---

## CONSTRAINTS & RULES

1. Use ONLY packages already in package.json. Check before importing anything. If framer-motion is not installed, use CSS transitions only.
2. All user-facing strings in Portuguese (BR).
3. No emojis anywhere in the UI.
4. Follow the brand design system exactly — Manrope, Source Sans 3, #eb5100, #274855, #085042, 6px radius.
5. Mobile-first responsive design throughout.
6. Proper loading, error, and empty states for every async operation.
7. Form validation on each step before progression.
8. The API route must handle timeouts gracefully (30s max).
9. No <form> HTML elements — use React event handlers.
10. Generate clean, production-ready code. No placeholder comments like "// TODO" unless specifying something that requires my personal credentials.

Before writing any code, read the existing project structure to understand the current file organization, existing components, layout patterns, and installed dependencies. Adapt to whatever conventions are already established.
```

---