# CLAUDE.md

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

**Design system**

- Fluid type scale: `--font-step-0` through `--font-step-4` (generated with Utopia, 360px → 1600px viewport)
- Fluid space scale: `--space-3xs` through `--space-3xl` with one-up pairs
- Color palette: dark theme (`--color-bg: #0c0c0e`) with purple (`--color-p*`) and yellow (`--color-y*`) accent families
- Layout: `--container-max: 80rem`, `.container` utility class centers content
- **No BEM or class-based selectors in component styles.** Use Astro scoped `<style>` blocks with HTML tag selectors and native CSS nesting. Classes are only acceptable for stateful modifiers (e.g. `.active`, `.hidden`) or when targeting a slot child that needs a stable hook — never for structural naming.
- **NEVER** use inline style attributes

**Fonts** — two custom fonts loaded via Astro's font API ([astro.config.mjs](astro.config.mjs)):

- `PPNeueMachinaInktrap` → `--font-title` (used for `h1` and hero text)
- `PPNeueMontrealText` → `--font-main` (body font)

**Interaction**

- All interactive UI elements must be reachable via Keyboard
- All interactive UI elements should at least be checked for sound effects, hover and focus should use the same Click anther one.
- For content switches, a tuple of fade and blur should make the change obvious

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
