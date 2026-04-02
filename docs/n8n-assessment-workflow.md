# n8n Workflow: Assessment Lead Generation

Build this workflow in the n8n editor. Total nodes: 6. Target execution time: under 15 seconds.

---

## Architecture

```
Webhook (trigger)
    |
Claude API (HTTP Request)
    |
    +---> Supabase Insert ----+
    +---> Google Sheets ------+---> Respond to Webhook
    +---> Gmail Send ---------+
```

Nodes 3, 4, and 5 run **in parallel** after Node 2 to minimize response time.
Node 6 (Respond to Webhook) is the final node.

---

## Node 1: Webhook (Trigger)

| Setting | Value |
|---------|-------|
| Type | Webhook |
| HTTP Method | POST |
| Path | `/assessment` |
| Response Mode | **Respond to Webhook** (critical — holds the HTTP connection open) |
| Authentication | None (or Header Auth — see below) |

**Optional Header Auth:**
Add authentication header to prevent casual probing:
- Header name: `x-assessment-key`
- Header value: a shared secret (store in n8n credentials)
- The website would send this header in the fetch request

**Incoming payload shape:**
```json
{
  "setor": "saude",
  "gargalo": "Agendamento de pacientes",
  "ferramentas": "Google (Gmail, Sheets, Docs, Drive), WhatsApp, iClinic",
  "nome": "Maria Silva",
  "email": "maria@clinica.com.br",
  "empresa": "Clínica Saúde Total"
}
```

---

## Node 2: Claude API Call (HTTP Request)

| Setting | Value |
|---------|-------|
| Type | HTTP Request |
| Method | POST |
| URL | `https://api.anthropic.com/v1/messages` |

**Headers:**
| Header | Value |
|--------|-------|
| `x-api-key` | `{{ $env.ANTHROPIC_API_KEY }}` |
| `anthropic-version` | `2023-06-01` |
| `content-type` | `application/json` |

**Body (JSON):**

```json
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 1500,
  "system": "Você é um consultor especialista em automação de processos para pequenas e médias empresas brasileiras, trabalhando para a agência mil&dez. Seu papel é analisar o contexto do negócio e gerar recomendações específicas e acionáveis de automação.\n\nIMPORTANTE: Responda EXCLUSIVAMENTE em JSON válido, sem markdown, sem backticks, sem texto adicional. O JSON deve seguir exatamente esta estrutura:\n{\n  \"workflows\": [\n    {\n      \"nome\": \"Nome do fluxo de automação\",\n      \"ferramentas\": \"Lista das ferramentas envolvidas\",\n      \"resultado\": \"Descrição concisa do resultado esperado\",\n      \"tempo_economizado\": \"Estimativa de horas economizadas por semana\"\n    }\n  ]\n}\n\nGere exatamente 3 workflows. Seja específico para o setor e as ferramentas mencionadas. Use linguagem profissional mas acessível. Não use jargão técnico excessivo.",
  "messages": [
    {
      "role": "user",
      "content": "Setor: {{ $json.setor }}\nMaior gargalo: {{ $json.gargalo }}\nFerramentas atuais: {{ $json.ferramentas }}\nEmpresa: {{ $json.empresa }}\n\nGere 3 automações específicas para este negócio."
    }
  ]
}
```

**Post-processing:**
After this node, add a **Set** node or **Code** node to extract the Claude response:

```javascript
// Code node — extract and parse Claude's JSON response
const claudeResponse = $input.first().json;
const text = claudeResponse.content[0].text;
const parsed = JSON.parse(text);

return [{
  json: {
    ...$input.first().json,
    workflows: parsed.workflows,
    resultado_ai: parsed,
  }
}];
```

This merges the original webhook data with the parsed Claude output.

---

## Node 3: Supabase Insert

| Setting | Value |
|---------|-------|
| Type | Supabase node (or HTTP Request to Supabase REST API) |
| Operation | Insert |
| Table | `assessment_leads` |

**Fields to map:**

| Column | Expression |
|--------|------------|
| `nome` | `{{ $json.nome }}` |
| `email` | `{{ $json.email }}` |
| `empresa` | `{{ $json.empresa }}` |
| `setor` | `{{ $json.setor }}` |
| `gargalo` | `{{ $json.gargalo }}` |
| `ferramentas` | `{{ $json.ferramentas }}` |
| `resultado_ai` | `{{ JSON.stringify($json.resultado_ai) }}` |

`created_at` is auto-set by the database default.

**If using HTTP Request instead of Supabase node:**
- Method: POST
- URL: `{{ $env.SUPABASE_URL }}/rest/v1/assessment_leads`
- Headers:
  - `apikey`: `{{ $env.SUPABASE_ANON_KEY }}`
  - `Authorization`: `Bearer {{ $env.SUPABASE_ANON_KEY }}`
  - `Content-Type`: `application/json`
  - `Prefer`: `return=representation`

---

## Node 4: Google Sheets Append

| Setting | Value |
|---------|-------|
| Type | Google Sheets |
| Operation | Append Row |
| Spreadsheet | (select your spreadsheet) |
| Sheet Name | `Leads Assessment` |

**Column mapping:**

| Sheet Column | Expression |
|-------------|------------|
| Nome | `{{ $json.nome }}` |
| Email | `{{ $json.email }}` |
| Empresa | `{{ $json.empresa }}` |
| Setor | `{{ $json.setor }}` |
| Gargalo | `{{ $json.gargalo }}` |
| Ferramentas | `{{ $json.ferramentas }}` |
| Data | `{{ $now.format('dd/MM/yyyy HH:mm') }}` |

**Google Sheet setup:**
Create a sheet named "Leads Assessment" with these column headers in row 1:
Nome, Email, Empresa, Setor, Gargalo, Ferramentas, Data

---

## Node 5: Gmail Send

| Setting | Value |
|---------|-------|
| Type | Gmail |
| To | `{{ $json.email }}` |
| Subject | `Seu plano de automação personalizado — mil&dez` |

**HTML Body template:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f8f7f4; font-family: 'Source Sans 3', 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <tr>
      <td style="padding: 32px 32px 24px; background-color: #085042; text-align: center;">
        <img src="https://miledez.com.br/logo.svg" alt="mil&dez" width="120" style="display: inline-block;" />
      </td>
    </tr>

    <!-- Greeting -->
    <tr>
      <td style="padding: 32px 32px 16px;">
        <p style="margin: 0; font-size: 18px; color: #274855; font-weight: 600;">
          Olá {{ $json.nome }},
        </p>
        <p style="margin: 16px 0 0; font-size: 16px; color: #4a4a4a; line-height: 1.5;">
          Analisamos o contexto da {{ $json.empresa }} e preparamos recomendações de automação específicas para o seu negócio.
        </p>
      </td>
    </tr>

    <!-- Workflow Cards -->
    {{ $json.workflows.map((wf, i) => `
    <tr>
      <td style="padding: 8px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #274855; border-radius: 6px;">
          <tr>
            <td style="padding: 24px;">
              <p style="margin: 0 0 8px; font-size: 16px; font-weight: 700; color: #ffffff;">
                ${i + 1}. ${wf.nome}
              </p>
              <p style="margin: 0 0 4px; font-size: 14px; color: #e0e0e0;">
                <strong style="color: #ffffff;">Ferramentas:</strong> ${wf.ferramentas}
              </p>
              <p style="margin: 0 0 4px; font-size: 14px; color: #e0e0e0;">
                <strong style="color: #ffffff;">Resultado:</strong> ${wf.resultado}
              </p>
              <p style="margin: 8px 0 0; font-size: 14px; color: #eb5100; font-weight: 600;">
                ${wf.tempo_economizado} economizados por semana
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    `).join('') }}

    <!-- CTA -->
    <tr>
      <td style="padding: 24px 32px; text-align: center;">
        <a href="https://wa.me/5531999999999" style="display: inline-block; padding: 14px 28px; background-color: #eb5100; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 600;">
          Agendar conversa gratuita
        </a>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 24px 32px; background-color: #f5f5f5; text-align: center;">
        <p style="margin: 0; font-size: 14px; color: #737373;">
          mil&dez — Automação de Processos
        </p>
        <p style="margin: 4px 0 0; font-size: 13px; color: #a3a3a3;">
          Belo Horizonte, MG | miledez.com.br
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
```

**Note:** The email template uses inline CSS (required for email clients). Update the WhatsApp/scheduling link with your actual URL. The `{{ }}` expressions are n8n template syntax — adapt if using a Code node to build the HTML string.

---

## Node 6: Respond to Webhook

| Setting | Value |
|---------|-------|
| Type | Respond to Webhook |
| Response Code | 200 |

**Response Body (JSON):**

```json
{
  "success": true,
  "results": {
    "workflows": {{ $json.workflows }}
  },
  "leadId": "{{ $json.id }}"
}
```

Where `$json.id` comes from the Supabase insert response (the UUID of the new row). If Supabase runs in parallel and the response isn't guaranteed before this node, you can omit `leadId` or use the Merge node to wait for all parallel branches.

---

## Error Handling

Add an **Error Trigger** node connected to a secondary path:

1. If Claude API fails (Node 2):
   - Still insert the lead into Supabase (with `resultado_ai` = null)
   - Still append to Google Sheets
   - Return error response to webhook:
     ```json
     {
       "success": false,
       "error": "Não foi possível gerar as recomendações. Tente novamente."
     }
     ```

2. If Supabase or Google Sheets fails:
   - Do not block the webhook response — the user should still get results
   - Log the error in n8n execution history

---

## Environment Variables (n8n)

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | Anthropic API key for Claude |
| `SUPABASE_URL` | Supabase project URL (if using HTTP Request) |
| `SUPABASE_ANON_KEY` | Supabase anon/public key (if using HTTP Request) |

---

## Parallel Execution Notes

To run Nodes 3, 4, 5 in parallel in n8n:
1. Connect the output of Node 2 (Claude parse) to Node 3, Node 4, and Node 5 separately
2. All three will execute simultaneously
3. Connect the output of Node 2 directly to Node 6 as well (Node 6 doesn't need to wait for 3/4/5)
4. Alternatively, use a **Merge** node set to "Wait for All" to collect results before responding

---

## Testing Checklist

- [ ] Webhook receives POST data correctly
- [ ] Claude API returns valid JSON (test with each setor)
- [ ] Supabase row is created with all fields
- [ ] Google Sheet row is appended
- [ ] Email is delivered with formatted content
- [ ] Webhook response returns the expected JSON shape
- [ ] Error path works when Claude API fails
- [ ] Total execution under 15 seconds
