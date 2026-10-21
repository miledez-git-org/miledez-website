# Mockups — miledez.com.br no Notus light design system

Three standalone HTML explorations of the mil&dez website restyled with the Notus light design system (`light-design-system/light_design_system_v2.html`): zinc monochrome, light theme, high contrast, Inter. All copy is the real PT-BR site copy. Open each file directly in a browser (Tailwind Play CDN + Google Fonts require network).

| File | Direction | Sections |
|---|---|---|
| `mockup-1-classico.html` | Classic centered marketing page: eyebrow badge, gradient headline, tilted product shot | Navbar, hero, logo cloud (marquee), benefits grid, how-it-works, pricing (dark featured tier), dark CTA band, footer |
| `mockup-2-editorial.html` | Editorial left-aligned: split hero with workflow prop, story-driven flow | Navbar, split hero, stats band, pain points, alternating workflow features, process timeline, FAQ (native accordion), dark CTA band, footer |
| `mockup-3-resultados.html` | ROI-focused: bento grid of business profiles with one dark anchor card | Navbar, hero, ROI bento grid, three vertical workflow cards, trust band, compact pricing, dark CTA band, footer |

Design-system rules honored: `zinc-900` as the only brand fill, soft accent triples (emerald/amber) in small areas only, `zinc-200`/`zinc-100` borders, one dark card per grid, one dark CTA band per page, Lucide-style stroke icons, sentence-case copy without exclamation marks.

Note: Tailwind Play CDN is used here for standalone preview only — production stays on the Tailwind build pipeline.

## Drafts A/B (2026-10-19) — Notus **Teal** palette

Second round, after the palette moved to Notus Teal (`~/light-design-system/docs/palette-teal.js`
pasted into `tailwind.config`; markup stays raw `zinc/emerald/amber/rose/sky`). Same real PT-BR
copy, section ids match the live site anchors, logos come from `../public/software-company-logos/`.

| File | Direction | Dark band |
|---|---|---|
| `landing-a.html` | Notus-faithful: centered hero with eyebrow badge, gradient display headline and tilted product shot; centered section headers; examples as audience-tagged rows; process as 4 numbered cards with props | Promise spotlight inside "Como funciona"; closing CTA uses the light variant |
| `landing-b.html` | Editorial: split hero (copy left, straight product shot right); left-aligned section headers; examples as 3 vertical cards; process as timeline with a sticky light promise panel; value as one divided panel | Closing CTA |

Shared by both: condensing navbar, logo marquee, pain points, pricing (featured tier is the only
dark card), 3-column FAQ with native `<details>`, footer with brand/setores/contato/legal. Each file
has a bottom-left "Rascunho" chip linking to the other draft.

### Rendering a check
The Puppeteer MCP server times out on launch here; use the cached Chrome binary:

```bash
CHROME=$(ls -d ~/.cache/puppeteer/chrome/*/chrome-linux64/chrome | tail -1)
"$CHROME" --headless=new --no-sandbox --disable-gpu --hide-scrollbars --virtual-time-budget=8000 \
  --window-size=1280,9000 --screenshot=/tmp/landing-a.png "file://$PWD/landing-a.html"
```

Headless Chrome clamps the window to roughly 500px wide, so a `--window-size=390` capture crops
the layout instead of reflowing it; use 500 for the phone check.
