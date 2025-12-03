# mil&dez - Brand Direction (LOCKED)

**Decision Date:** 2025-12-02
**Status:** ✅ LOCKED - All future work follows this direction
**Review Date:** 2026-06-01

---

## Design Philosophy

**Core Principle:** Extreme minimalism. Every element must justify its existence.

**Visual Tone:** Clean, quiet confidence. Let whitespace speak. Remove until it breaks, then add back one thing.

---

## Color System

| Role | Value | Usage |
|------|-------|-------|
| Background | `#ffffff` | All sections, all pages |
| Primary Text | `#1a1a1a` | Headlines, body text |
| Body Text | `#3d3d3d` | Paragraphs, descriptions |
| Secondary Text | `#5a5a5a` | Supporting text, nav links |
| Muted Text | `#7a7a7a` | Tertiary info, timestamps |
| Accent | `#8b2020` | Sparingly - key CTAs, important highlights only |
| Border | `#e0e0e0` | Section dividers, subtle separations |

**Rules:**
- Accent color used ONLY for specific emphasis (1-2 instances per page max)
- No background colors on sections
- No gradients
- No shadows

---

## Typography

**Font Stack:** System fonts
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
```

**Scale:**
| Element | Size | Weight | Letter-spacing |
|---------|------|--------|----------------|
| H1 | 3.5rem (56px) | 500 | -0.03em |
| H2 | 2rem (32px) | 500 | -0.02em |
| H3 | 1.25rem (20px) | 500 | -0.01em |
| Body | 1rem (16px) | 400 | normal |
| Small | 0.9rem (14.4px) | 400 | normal |

**Rules:**
- Generous line-height (1.5-1.6)
- Tight letter-spacing on headlines
- No bold except for occasional emphasis
- No italic
- No underlines (except hover states on links)

---

## Layout Principles

### Separation Without Cards
- **NO CARDS** - ever
- Use spacing (80-140px between sections)
- Use column changes (1 col → 2 col → 3 col)
- Use horizontal dividers (1px, `#e0e0e0`)
- Use alignment shifts

### Grid
- Max width: 1200px
- Side padding: 40px (24px mobile)
- Section padding: 120-140px vertical

### Column Patterns
| Content Type | Layout |
|--------------|--------|
| Hero | Single column, left-aligned |
| Benefits | 3 columns |
| Process/Steps | 2 columns (text + visual) |
| Lists | Single column with numbers |
| Industry links | Full-width rows |

---

## Components

### Buttons
```
Background: #1a1a1a
Text: #ffffff
Padding: 16px 32px
Corners: STRAIGHT (no border-radius)
Hover: #2d2d2d
```

**Rules:**
- Maximum 1-2 buttons per page
- Primary action only
- No outline/ghost buttons
- No icons in buttons

### Icons
- Style: Outline only (stroke, no fill)
- Stroke width: 1.5px
- Color: `#1a1a1a` (black)
- Size: 32px (small), 48px (medium), 64px (large)
- No colored icons
- No filled icons

### Software/Integration Icons
- Simplified outline representations of software logos
- Consistent stroke width (1.5px)
- Black only, no brand colors
- Recognizable but adapted to minimalist style
- Grid layout: 5 columns desktop, responsive

### Links (Navigation)
- Color: `#6b6b6b` (muted)
- Hover: `#1a1a1a` (black)
- No underline (except on hover if needed)
- Accent link: `#8b2020` (used once, for primary CTA in nav)

### Lists
- Numbered with muted numbers
- Separated by 1px borders
- No bullets
- No nested lists

---

## Animation Principles

### Use Cases
- Workflow demonstrations
- Process visualizations
- Subtle entrance animations (fade up)
- Data flow indicators

### Rules
- Subtle and purposeful
- Timing: 0.3-0.6s for transitions
- Easing: ease-out for entrances
- No decorative animations
- No hover animations on cards (no cards exist)
- Connection lines can animate to show flow

### Workflow Animation Pattern
```
1. Elements fade in sequentially (0.2s delay between)
2. Connection lines expand after elements appear
3. Optional: Data pulse moves along connections
```

---

## Page Structure

### Landing Page (/)
1. Hero: Value prop + single CTA
2. How it works: Animated workflow visualization
3. Benefits: 3 columns, icon + text
4. Process: Numbered steps
5. Industries: Links to sub-pages
6. CTA: Simple close

### Industry Sub-pages (/saude, /servicos, etc.)
1. Hero: Industry-specific headline
2. Problems: What they face (minimal list)
3. Solutions: Specific automations we provide
4. Example workflow: Animated demonstration
5. CTA: Contact

### Rules
- Maximum 5-6 sections per page
- Each section has ONE purpose
- No redundant content
- No testimonials (unless absolutely necessary, then text only)
- No logos carousel
- No stats counters

---

## What We DON'T Use

❌ Cards with borders/backgrounds
❌ Rounded corners
❌ Gradients
❌ Shadows
❌ Colored backgrounds
❌ Multiple accent colors
❌ Filled icons
❌ Decorative elements
❌ Stock photos
❌ Testimonial carousels
❌ Logo walls
❌ Counters/statistics with icons
❌ Floating elements
❌ Parallax effects
❌ Hamburger menus (keep nav simple enough to show)

---

## Implementation Notes

### For Presentations
- White backgrounds
- Same typography scale (adjusted for slides)
- Same icon style
- Animations for workflow demonstrations
- No slide templates with colored headers

### For Web Apps/Dashboards
- Can use subtle background tints for functional separation
- Same typography
- Same button styles
- Same icon style
- Functional UI can have more density

### For Documents
- White background
- Same typography (Georgia/Arial pairing acceptable)
- Minimal formatting
- No colored headers

---

## File Reference

This direction is demonstrated in:
- `mildez-landing-page.html` - Full landing page implementation
- `saude.html` - Healthcare industry sub-page
- `servicos.html` - Professional services sub-page  
- `varejo.html` - Retail/E-commerce sub-page
- Future: Component library for reuse

---

*This document supersedes all previous design explorations. Any deviation requires explicit approval and documentation.*
