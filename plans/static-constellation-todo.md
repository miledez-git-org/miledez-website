# HeroConstellation Static Layout — Todo

> Plan: [static-constellation-plan.md](./static-constellation-plan.md)

## Implementation
- [x] Replace `IconNodeConfig` with `IconNode` interface
- [x] Define `DESKTOP_NODES` (14 icons) with static positions
- [x] Define `MOBILE_NODES` (10 icons) with adjusted positions
- [x] Define `DESKTOP_CHAINS` (6 sequences) and `MOBILE_CHAINS` (5 sequences)
- [x] Remove orbital calculation from animation loop
- [x] Remove repulsion physics
- [x] Remove random chain selection / cooldown system
- [x] Add `chainIndexRef` for deterministic cycling
- [x] Update `updateChainPath` to use `IconNode[]`
- [x] Simplify JSX render (static `transform`)
- [x] Add `useEffect` for mobile/desktop transition reset

## Verification
- [x] Build passes (`npm run build`)
- [x] Desktop visual check (1280px) — all 14 icons visible, static
- [x] Mobile visual check (375px) — 10 icons visible, no clipping
- [x] Chain animation cycles correctly (draw/hold/fade)
- [x] Icons activate/deactivate with chains
- [ ] Manual browser check for fine-tuning positions if needed
