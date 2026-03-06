# Website vs. Agency Profile — Audit & Recommendations

Comprehensive review of miledez.com.br against `agency-profile.md`. Organized by severity: critical misalignments first, then improvements.

---

## A. Critical Misalignments

### 1. Wrong industry vertical — Varejo instead of Agronegocio

The agency profile defines three target verticals: **Healthcare, Professional Services, and Agronegocio**. The website has Healthcare, Professional Services, and **Varejo (Retail/E-commerce)** — a vertical that doesn't exist in the profile at all. Agronegocio is completely absent from the site.

- **Nav dropdown** lists "Varejo e E-commerce" — should be "Agronegocio"
- **`/varejo` page** exists with full content (pain points, workflows, integrations for e-commerce)
- **No `/agronegocio` page** exists
- **BusinessProfilesSection** includes "Loja de Roupas Online" and "Rede de Pet Shops" — neither fits any profile vertical

**Impact:** The website is marketing to an audience the agency doesn't target, while completely ignoring one it does.

### 2. Tagline not used anywhere

The agency tagline is **"seu trabalho no automático"**. It appears nowhere on the website:
- Hero: "Automação inteligente que trabalha por você"
- Footer: "Automação de processos para empresas"

The official tagline is more conversational, memorable, and aligned with the profile's tone guidance. The current hero headline is generic and could belong to any automation company.

### 3. BusinessProfilesSection examples don't match target verticals or client sizes

| Profile Card | Vertical Match? | Size Match? |
|---|---|---|
| Clínica Odontológica (12 prof.) | Healthcare — yes | 3-30 staff — yes |
| Escritório de Contabilidade (6 colab.) | Professional Services — yes | 5-50 employees — yes |
| Loja de Roupas Online (800 pedidos) | **No vertical** | N/A |
| Clínica de Fisioterapia (25 prof.) | Healthcare — yes | 3-30 staff — yes |
| Rede de Pet Shops (3 unidades) | **No vertical** | N/A |
| Hospital Regional (150 leitos) | Healthcare — borderline | **Too large** (profile says 3-30 staff) |

2 of 6 profiles don't match any vertical. 1 is oversized. Need agronegocio examples (cooperative, rural producer, input distributor).

---

## B. Selling Point Prioritization Issues

### 4. Homepage doesn't lead with the client's pain — it leads with the solution mechanism

The profile says clients care about "results in daily operations — fewer manual tasks, fewer errors, less time on repetitive work." But the homepage flow is:

```
Hero (generic automation pitch)
  → How automation works (mechanism — GATILHO → PROCESSO → RESULTADO)
  → Why us (benefits)
  → Business examples
  → ...
```

The WorkflowExplainerSection explains HOW automation works technically (triggers, processing, results). The profile explicitly warns: **"Technical language and implementation details create distance, not trust."** This section answers "how does it work?" before the visitor even understands what problem it solves for them.

**Recommendation:** The homepage should open with problem recognition (pain points the visitor already feels), then show outcomes, THEN explain the mechanism — or move the mechanism section much later.

### 5. Key selling points missing or underweighted

| Selling Point (from profile) | On website? | Prominence |
|---|---|---|
| Free setup (R$0 upfront) | Yes — ValuePropositionB card | Good |
| Fully managed, zero technical burden | Yes — ValuePropositionB card | Good |
| Fast delivery (3-7 days) | Yes — ValuePropositionB card | Good |
| 100% customized | Body text only | **Low** — should be a card |
| No lock-in | Yes — ValuePropositionB card | Good |
| ROI-focused | BusinessProfilesSection | Moderate |
| **Brazil-native** | **Nowhere** | **Missing entirely** |
| Broad integration capability | LogoGrid | Good |

"Brazil-native" is a key differentiator (LGPD, TISS, ANS, Brazilian tools) and is completely absent. "100% customized" — the fact that every solution is built for the client's specific processes — is only in body copy, not highlighted.

### 6. "Retorno garantido" (guaranteed return) is a liability risk

The pricing heading says "Preço justo, retorno garantido." The agency profile says "ROI-focused" with "clear ROI analysis" — not a guarantee. The word "garantido" could create legal/contractual liability. Should be softened to something like "retorno comprovado" or "foco em retorno real."

---

## C. Content & Copy Issues

### 7. No concrete solution examples on the homepage

The profile provides 6 vivid, specific solution examples (appointment reminders via WhatsApp, TISS claim submission, regulatory change alerts, competitor pricing monitor, supplier coordination, client report generation). The homepage WorkflowExplainer shows abstract nodes: "Formulário enviado → IA analisa conteúdo → Equipe notificada."

The profile says what works for clients is **"concrete before/after examples of what changes in their routine."** The workflow explainer is abstract, not concrete.

### 8. No free trial/test automation offer

The profile says: **"Free test solutions they can experience before committing"** is what works. The website only offers "Agendar demonstração" (schedule a demo) via a generic contact form. There's no mention of building a free test automation so the client can experience results before committing. This is a major selling tool that's absent.

### 9. No social proof

No testimonials, case studies, or real client references. The BusinessProfilesSection uses hypothetical examples with projected ROI. For a service targeting non-technical SMB owners, trust signals are critical. Even simple elements (number of clients served, industries covered, years of experience) would help.

### 10. Missing accent marks on industry pages

Workflow visualization text on `/saude` is missing accents:
- "Automacao de Documentos" → "Automação de Documentos"
- "Formularios, docs e organizacao" → "Formulários, docs e organização"
- "Prontuario completo" → "Prontuário completo"

Same pattern likely on other industry pages. Looks unprofessional for a Brazilian audience.

### 11. Intelligence services pricing tier absent

The profile defines 4 pricing tiers. The website shows only 3:

| Profile Tier | Website? |
|---|---|
| Simple (R$900-R$2,000) | Yes |
| Medium (R$2,000-R$6,000) | Yes |
| Custom/enterprise (Sob consulta) | Yes |
| **Intelligence services (R$3,000-R$15,000+)** | **Missing** |

Strategic intelligence (regulatory monitoring, competitor analysis) is a high-value differentiator that's invisible on the site.

---

## D. Layout & Visual Issues

### 12. Excessive whitespace between sections

Screenshots show large empty gaps between sections — especially between BusinessProfilesSection → LogoGrid, and ProcessSection step 4 → PricingSection. These dead zones make the page feel unnecessarily long and reduce momentum. The visitor has to scroll through ~200-300px of empty space between content blocks.

### 13. Hero visual shows enterprise tools

The hero right side displays floating tool logos including Salesforce, Stripe, Pipedrive. These are enterprise/international tools that may not resonate with the target SMB audience (small clinics, law firms, cooperatives in MG). WhatsApp, Google Sheets, ContaAzul, and iClinic would be more relatable.

### 14. Copyright year outdated

Footer says "© 2025" — should be 2026.

---

## E. Structural / Navigation Issues

### 15. No homepage pain-point section

Industry pages each have a strong "Os desafios do dia a dia" (daily challenges) section with 3 pain-point cards. The homepage has no equivalent. A visitor who doesn't click into an industry page never sees problem-recognition content — they go straight to "here's how automation works."

### 16. "Ver casos de uso" button in hero goes nowhere meaningful

The secondary CTA "Ver casos de uso" should take the visitor to concrete, relatable use cases. If it scrolls to the abstract WorkflowExplainer, that's not what the label promises.

### 17. WhatsApp should be more prominent

WhatsApp is the primary business communication tool for the target audience. It's buried in integration grids. Given that appointment reminders via WhatsApp and WhatsApp-based notifications are core use cases, WhatsApp should feature more prominently — perhaps in the hero visual, in workflow examples, or as a contact channel.

---

## F. Summary — Priority Action Items

| # | Issue | Severity | Effort |
|---|---|---|---|
| 1 | Replace Varejo vertical with Agronegocio | Critical | High |
| 2 | Use official tagline "seu trabalho no automático" | Critical | Low |
| 3 | Fix BusinessProfilesSection examples to match verticals | Critical | Medium |
| 4 | Add pain-point section to homepage (before mechanism) | High | Medium |
| 5 | Add "Brazil-native" and "100% customized" as prominent selling points | High | Low |
| 6 | Replace "retorno garantido" with safer copy | High | Low |
| 7 | Add concrete solution examples to homepage | High | Medium |
| 8 | Surface free test/trial automation offer | High | Low |
| 9 | Fix missing accent marks on industry pages | High | Low |
| 10 | Add intelligence services to pricing or elsewhere | Medium | Low |
| 11 | Add social proof (even minimal) | Medium | Medium |
| 12 | Reduce excessive whitespace between sections | Medium | Low |
| 13 | Update hero visual with SMB-relevant tools | Medium | Medium |
| 14 | Update copyright to 2026 | Low | Trivial |
| 15 | Make WhatsApp more prominent | Low | Low |
| 16 | Rethink section order (pain → outcome → mechanism) | Medium | Medium |
