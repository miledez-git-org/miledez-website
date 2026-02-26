# Design Critique: miledez.com.br

## Overall Impression

The site has a clean, minimalist aesthetic that aligns well with the mil&dez brand identity — the burgundy palette, Manrope headings, and generous white space project confidence and professionalism. The biggest opportunity is reducing excessive vertical white space between sections, which currently makes the page feel disjointed, and fixing several accessibility gaps that could hurt both SEO and usability.

---

## Usability

| Finding | Severity | Recommendation |
|---------|----------|----------------|
| Excessive vertical padding between sections creates 300-400px of empty space, making the page feel disconnected and forcing unnecessary scrolling | 🟡 Moderate | Reduce inter-section spacing to 80-120px. The white space principle means *intentional* space — not vast emptiness that breaks narrative flow. |
| Hero illustration (automation flow diagram) is entirely missing on mobile — users only see text and CTAs with no visual context | 🟡 Moderate | Add a simplified mobile version of the flow diagram, or use a static illustration that conveys the Gatilho → Processamento → Resultado concept. |
| Two different primary CTAs use different labels: "Agendar demonstração" (hero) vs. "Agendar conversa" (stats section) vs. "Falar conosco" (pricing/final CTA) | 🟡 Moderate | Standardize CTA language. Pick one primary action phrase and use it consistently — this reduces cognitive load and strengthens the conversion funnel. |
| Pricing cards have no explicit CTA buttons — users see the tiers but have no clear next step within each card | 🔴 Critical | Add a "Começar" or "Falar conosco" button to each pricing card. Without it, the pricing section is informational but not actionable. |
| "Indústrias" dropdown in navigation — unclear what it contains without hovering/clicking | 🟢 Minor | Consider renaming to "Soluções por indústria" or showing the dropdown categories (Saúde, Serviços, Varejo) directly in the nav for better discoverability. |

---

## Visual Hierarchy

- **What draws the eye first**: The H1 headline "Automação inteligente que trabalha por você" — this is correct and well-executed. The two-tone treatment (black + burgundy) naturally splits the value prop into feature + benefit.

- **Reading flow**: On desktop, the eye moves left-to-right from headline to the automation flow diagram, then down to CTAs. This works well. However, after the hero, the flow breaks due to excessive padding — each new section feels like a fresh page rather than a continuation of the story.

- **Emphasis**: The stats section (3-7 days, 100%, R$0, 10x) is a strong proof point, but the large light-burgundy numbers have a slightly washed-out appearance at certain screen sizes. The "COMO FUNCIONA" label above "Automação sob medida" is quite small and uses all-caps tracking — it could be slightly more prominent to signal the section transition.

---

## Consistency

| Element | Issue | Recommendation |
|---------|-------|----------------|
| **CTA button labels** | Three different primary CTA labels across the page: "Agendar demonstração", "Agendar conversa", "Falar conosco" | Unify to one primary label (e.g., "Agendar demonstração") and one secondary (e.g., "Ver casos de uso") |
| **Section heading pattern** | Most section headings use the two-line format with burgundy emphasis on the second line — this is consistent and effective. However, "Automação sob medida" breaks this pattern by being single-line with no color accent. | Apply the same two-tone heading treatment throughout for rhythm. |
| **Pricing card headers** | All three pricing cards use burgundy background with white text, which is consistent. However, the "Sob consulta" tier lacks a price range, making it visually unbalanced next to the other two. | Consider adding "A partir de R$6.000" or similar to maintain visual parity. |
| **Font stack** | The H1 has font-weight 400 (normal), while the design system specifies Manrope at 500/600/700 for headings. | Set H1 to at least font-weight 500 per the brand guidelines. |
| **Body text font** | Computed styles show body text using the same Manrope stack rather than Source Sans 3 as specified in the design system. | Ensure `<p>` elements and body copy use Source Sans 3 for proper type hierarchy differentiation. |

---

## Accessibility

- **Color contrast**: The pricing card subtext ("por mês") renders at `rgba(255,255,255, 0.7)` on the burgundy background — this is approximately 3.2:1 contrast ratio, which **fails WCAG AA** (requires 4.5:1 for small text). The footer text at `rgba(255,255,255, 0.5)` on the dark burgundy background **also fails**. The main burgundy (#8b2020) on white passes AA for large text (4.6:1) but just barely.

- **Image alt text**: Every integration logo (WhatsApp, Gmail, Sheets, Notion, Shopify, etc.) is **missing alt text entirely**. This is a significant accessibility and SEO issue — screen readers will skip these images, and search engines can't index them.

- **Semantic HTML**: The page has `nav`, `footer`, and multiple `section` elements, which is good. However, `<main>` is missing, and the heading hierarchy skips from H1 directly to H3 (no H2 before the flow diagram labels). The `html` element's `lang` attribute is set to `"en"` — it should be `"pt-BR"` for a Portuguese-language site.

- **Touch targets**: CTAs appear adequately sized (44px+ height). The hamburger menu on mobile is appropriately tappable.

- **Skip navigation**: No skip-to-content link exists for keyboard users.

- **Focus styles**: No visible custom focus indicators observed. Keyboard navigation relies on browser defaults, which may not be visible against the white background.

---

## What Works Well

- **Brand coherence**: The burgundy + white + charcoal palette is applied with discipline. The site *feels* like a premium, focused B2B service — not a generic SaaS template.

- **Automation flow diagrams**: The hero illustration and the "Cobrança Automática" step-by-step flow are genuinely useful — they make an abstract concept tangible. The use of real tool icons (Gmail, Sheets, Shopify) builds immediate credibility.

- **Copy quality**: Headlines follow the brand voice — direct, benefit-led, jargon-free. "Resultados em dias, não meses" is punchy and memorable. The pricing section's trust signals (sem contratos, diagnóstico gratuito, retorno garantido) are well-placed.

- **Section rhythm on desktop**: The alternation between centered text sections and visual/interactive sections creates a pleasant reading cadence (when you remove the excessive spacing mentally).

- **Industry tabs (Saúde / Serviços / Varejo)**: This is a smart UX choice — letting prospects self-select their vertical immediately makes the content feel personalized.

---

## Priority Recommendations

1. **Fix accessibility gaps (high impact, moderate effort)** — Add alt text to all integration logos, change `lang="pt-BR"`, fix the white-on-burgundy contrast ratios in pricing and footer, add a `<main>` landmark, and correct the heading hierarchy (H1 → H2 → H3). These are table-stakes for both SEO and usability.

2. **Add CTAs to pricing cards (high impact, low effort)** — Each pricing tier needs an action button. Right now, the pricing section ends abruptly with no clear path forward. Even a simple "Falar conosco" button per card would dramatically improve conversion potential.

3. **Reduce vertical spacing between sections (moderate impact, low effort)** — The current 300-400px gaps break the storytelling flow and make the page feel twice as long as it needs to be. Tightening to 80-120px will make the narrative feel cohesive and reduce scroll fatigue, especially on desktop where the empty space is most pronounced.

4. **Unify CTA language and apply correct font stack (moderate impact, low effort)** — Standardize button labels across the page and ensure body text uses Source Sans 3 (not Manrope) per the design system. Set H1 weight to 500+ as specified. These small consistency fixes compound into a more polished overall impression.

5. **Restore visual content on mobile hero (moderate impact, moderate effort)** — The desktop hero's strongest asset — the automation flow diagram — disappears entirely on mobile. Adding even a simplified version would help mobile visitors immediately understand the product.
