# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Thomas Rutzer's personal portfolio, hosted at thomasrutzer.dev. Thomas' focus is a split between architecture & engineering unique interfaces & interactions. This two aspects are reflected visually, where architecture is visualized with a purple shade, and the execution of the UI in a yellow shaed. Beyond showcasing web development work, the design deliberately reflects his identity as a musician — aesthetic choices should honour both dimensions.

## Commands

```sh
npm run dev       # dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview production build locally
npm run check-ts   # check .astro files
npx prettier --write .  # format all files
```

## Constraints

- **Node.js >=24.17.0 required.** Bun and Deno are not supported.
- **No CSS frameworks.** No Tailwind or any utility/component library. All styling is hand-written CSS — the site is meant to show off modern CSS capabilities directly.
- **SSG only.** Astro is configured for static site generation; avoid patterns that require a server runtime.
- NEVER `cd` into the project, we are starting in the repo

## Architecture

This is an Astro 6 portfolio site — no UI framework (React/Vue/etc.), only `.astro` components. TypeScript is configured in strict mode.

**Content collections** — cases are JSON files in `src/content/cases/`. The collection is defined in [src/content.config.ts](src/content.config.ts) using Astro's glob loader.

**Design system**

- Fluid type scale: `--font-step-0` through `--font-step-4` (generated with Utopia, 360px → 1600px viewport)
- Fluid space scale: `--space-3xs` through `--space-3xl` with one-up pairs
- Color palette: dark theme (`--color-bg: #0c0c0e`) with purple (`--color-p*`) and yellow (`--color-y*`) accent families
- Layout: `--container-max: 80rem`, `.container` utility class centers content
- **No BEM or class-based selectors in component styles.** Use Astro scoped `<style>` blocks with HTML tag selectors and native CSS nesting. Classes are only acceptable for stateful modifiers (e.g. `.active`, `.hidden`) or when targeting a slot child that needs a stable hook — never for structural naming.
- **NEVER** use inline style attributes
- Interactions should be emphasised with sound effects

**Fonts** — two custom fonts loaded via Astro's font API ([astro.config.mjs](astro.config.mjs)):

- `PPNeueMachinaInktrap` → `--font-title` (used for `h1` and hero text)
- `PPNeueMontrealText` → `--font-main` (body font)

**Interaction**

- All interactive UI elements must be reachable via Keyboard
- All interactive UI elements should at least be checked for sound effects, hover and focus should use the same Click anther one.

### Variants

Variants in components should be defined with class:list of Astro and a resulting modifier class

---

```
const { isRed } = Astro.props;

<!-- If `isRed` is truthy, class will be "box red". -->
<!-- If `isRed` is falsy, class will be "box". -->
<div class:list={['box', { red: isRed }]}><slot /></div>

<style>
  .box { border: 1px solid blue; }
  .red { border-color: red; }
</style>
```
