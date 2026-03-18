# HeroConstellation — Static Layout Redesign

## Context
The HeroConstellation component used orbital mechanics (elliptical paths, repulsion physics, random chain selection) creating a chaotic visual. Icons moved sporadically, the layout changed every refresh, and on mobile icons drifted off-screen. Redesigned to use fixed positions and pre-defined chains while keeping the draw/hold/fade animation.

## Changes Made
Single file: `components/HeroConstellation.tsx`

### Removed
- Orbital data model (`IconNodeConfig` with a, b, speed, phase)
- Ring arrays (`OUTER_RING`, `MIDDLE_RING`, `INNER_RING`)
- Per-frame position calculation and repulsion physics
- Random chain selection (`shuffleArray`, `randInt`, `selectChainIcons`)
- Cooldown system

### Added
- `IconNode` interface with static `{ icon, x, y }` positions
- `DESKTOP_NODES` (14 icons) and `MOBILE_NODES` (10 icons) with hand-placed coordinates
- `DESKTOP_CHAINS` (6 sequences) and `MOBILE_CHAINS` (5 sequences) — pre-defined, verified for no line crossings
- `chainIndexRef` for deterministic chain cycling
- `useEffect` to reset chain state on mobile/desktop transitions

### Kept
- Chain state machine (idle -> drawing -> holding -> fading)
- Stroke-dasharray line drawing animation
- Icon activation transitions (size, opacity, grayscale lerp)
- Reduced motion support
- SVG structure and white background rects

## Status
Completed. Build passes. Visual verification done via Puppeteer on desktop (1280px) and mobile (375px).
