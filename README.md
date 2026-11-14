# Fold Ethos

A minimal JavaScript Next.js foundation using the App Router, Tailwind CSS,
and ESLint. GSAP, @gsap/react, and Lenis are installed for future work.

## Development

Use the Node LTS version pinned in `.nvmrc`:

```bash
nvm install
nvm use
npm install
npm run dev
```

## Validation and formatting

```bash
npm run lint
npm run format
npm run build
```

Prettier excludes AGENTS.md and the preserved brand assets to keep them unchanged.
CI runs `npm ci`, lint, and build on every pull request.

## Static hosting

`npm run build` exports the site to `out/`. Deploy that directory to a static
host. Image optimization is disabled. Preview the export with:

```bash
python3 -m http.server 3000 --directory out
```

## Files

- `AGENTS.md`: repository instructions; preserve its content.
- `src/app/`: the minimal black page, layout, and styles.
- `src/data/projects.json`: an empty project list.
- `public/brand/`: all six image assets preserved from the previous project.
- `src/lib/motion.js`: shared charter easing and timing constants (seconds).
- `src/components/` and `src/hooks/`: empty folders reserved for future work.
- `public/work/` and `public/motion/`: empty asset folders.
