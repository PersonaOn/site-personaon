# personaon-site-template

The template every PersonaOn representative site is forked from. Real, buildable **Astro** —
static output (zero-JS, SEO-friendly), token-driven from the slurped brand, with a curated
component library, the persona chat, and capture wired in.

In production: the platform forks this into a per-user repo (under the PersonaOn GitHub org),
the **builder agent** edits `src/site.ts` (content) + composes components, **GitHub Actions**
builds it, and **Cloudflare Pages** deploys it with preview URLs per commit (which double as the
live preview) and instant rollback.

## How it maps to the engine

- `src/site.ts` — the **Representative content** (the artifact the agent edits). One file = one site.
- `src/components/*.astro` — the **module registry as real components** (Hero, ProofStrip, AskAbout, ProjectShowcase, PullQuote, OpportunityCapture, Footer). Quality + motion baked in; the agent composes, never free-designs.
- `src/layouts/Base.astro` — sets brand **design tokens** as CSS variables from `site.brand` (the slurp). Trust the slurp; no hardcoded theme.
- `public/gen/*` — generated on-brand media (committed assets).

## Run

```bash
bun install
bun run build      # → dist/  (static site)
bun run preview    # serve dist/
```

## Constraints (what keeps real-code reliable)

- The agent edits **content + component composition**, not bespoke CSS — the component library and tokens supply the design.
- **OpportunityCapture is required** on every page (capture-first) — enforced in CI.
- The build itself + a screenshot check is the verify loop (catches broken output).
