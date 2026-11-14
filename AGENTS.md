# Fold Ethos website: engineering and design charter

## Role
Act as a senior software engineer working to the standards of a top-tier product company: simple, readable, tested, secure, fast, and maintainable. Prefer boring, proven solutions over clever ones. Explain trade-offs briefly.

## Purpose
This site is our showcase of motion-design craft for the whole studio (not an individual). A brand owner in India should feel "this studio can make my brand move" within 5 seconds, then see our work and enquire.
Studio: Fold Ethos, a creative studio for modern e-commerce brands (listing images, infographics and A+ content for Amazon, Flipkart, Blinkit and brand sites; motion and web later).
Contact: foldethos@gmail.com, Instagram @foldethos. Founders: Aryan (Founder), Rishabh (Co-Founder).

## Stack
- Runtime and tooling: Node.js (current LTS; declare it in package.json "engines" and in .nvmrc), npm with a committed lockfile.
- Framework: Next.js (App Router), React, JavaScript with ES modules.
- Types: JavaScript with JSDoc type annotations and "// @ts-check" on files in src/lib and src/hooks. No TypeScript migration without my approval.
- Styling: Tailwind CSS with design tokens as CSS variables.
- Motion: GSAP (ScrollTrigger, SplitText, Flip, and the @gsap/react useGSAP hook) and Lenis smooth scroll.
- Quality tooling: ESLint (Next.js config) and Prettier, wired into npm scripts: "lint", "format", "build".
- Output: static export (output: "export", images.unoptimized: true) so it hosts free on Cloudflare Pages or Netlify.
- No other dependencies (no Framer Motion, no Three.js, no UI kits, no state libraries) without asking me first. For any new dependency, state the reason, bundle-size impact and license.

## Project structure
- src/app: routes, layout.js, globals.css, metadata.
- src/components/layout: Nav, Footer, Preloader, SmoothScroll provider.
- src/components/sections: Hero, Statement, Work, Services, Process, About, Contact (one folder or file per section).
- src/components/ui: small reusable parts (Button, MagneticButton, Cursor, Reveal, Marquee, Lightbox).
- src/lib: motion.js (all easings, durations, staggers), utils.js.
- src/hooks: reusable hooks (useReveal, useReducedMotion, useMediaQuery).
- src/data/projects.json: the only source of work data.
- public/brand, public/work, public/motion: logos, work images, motion loops.
- .github/workflows/ci.yml: CI (see below).

## Code standards
- One responsibility per component or function. Small files. Clear, descriptive names. No magic numbers: durations, easings and breakpoints live in src/lib/motion.js or Tailwind tokens.
- Comments explain WHY, not what. No dead code, no commented-out code, no console.log in committed code.
- Prefer composition over duplication. Keep components pure where possible; isolate GSAP code inside useGSAP with proper cleanup (context scope, revert on unmount).
- Handle errors and empty states explicitly (missing images, failed video, empty project list).
- Add "use client" only where needed. Keep server components by default.

## Git and review workflow
- Never commit directly to main. One task equals one branch equals one small PR. Branch names: feat/..., fix/..., chore/....
- Conventional commit messages (feat:, fix:, chore:, docs:, refactor:).
- Every PR description includes: what changed, why, how to verify, and known limitations.
- Before opening a PR, run: npm run lint and npm run build. Both must pass. Report the results.
- When asked, add a GitHub Actions workflow (.github/workflows/ci.yml) that runs npm ci, npm run lint and npm run build on every pull request.

## Brand rules (strict)
- The logo is "FOLD" (bold wide caps sans) + "Ethos." (high-contrast serif). Use only files in public/brand. Never redraw, retype, recolour, stretch or substitute fonts for the logo. Clear space equals half the width of the "E". Use the flat logo everywhere; the chromatic-edge hero logo in the hero only.
- Palette: pure black canvas (#000), white type, grey #A1A1A1, hairlines rgba(255,255,255,0.14). No other colours.
- Fonts (via next/font, max 3, with display swap and fallbacks): heading [HEADING FONT], serif accent [SERIF FONT], body [BODY FONT]. TODO: I will confirm exact fonts.

## Design language: Apple x Google x editorial
- Scroll storytelling (Apple-style): a pinned hero where the logo and headline transform with scroll; a pinned Process section that steps through 4 stages with scrubbed progress; a horizontal-scroll work gallery; large type sections that cross-fade.
- Fluid, springy, shape-aware UI motion (Google-style): hover and press states with a spring feel, smooth size and shape transitions, nothing abrupt.
- Signature motion, "the Fold": panels and images reveal by folding open in 3D (perspective plus rotateX or rotateY from a hinge edge). Text lines rise from masks. Hairlines draw in. Use it consistently and sparingly.
- Easing and timing: reveals use cubic-bezier(0.16, 1, 0.3, 1); transitions use power3.inOut; durations 0.6 to 1.2 s; staggers 0.04 to 0.08 s. Define these once in src/lib/motion.js.
- Smooth scroll: Lenis connected to ScrollTrigger through the GSAP ticker.
- Elements: magnetic CTA buttons, custom cursor (disabled on touch), clip-path image reveals, a services marquee, section numbers, a nav that hides on scroll-down and shows on scroll-up, and a logo-build preloader of 2.2 s or less (skippable, once per session).
- Lighting (the "glow"): glow is LIGHT, not gradient fog. Allowed: a tight, low-opacity cursor-reactive spotlight; a 1px animated rim-light or conic border beam on cards; a moving specular highlight across headline text; a very subtle bloom behind one hero element (max 15% opacity). BANNED: large blurred multi-colour gradient blobs, aurora or mesh gradients, purple-blue SaaS gradients, neon glows.
- Motion reel: 3 to 4 short looping motion-graphics videos (WebM or MP4, muted, playsInline, start in view, pause out of view, lazy-loaded, 1.5 MB or less each, with poster images).

## Performance budgets
- Animate only transform and opacity (clip-path sparingly). will-change only during an animation. No layout thrash. A single ScrollTrigger refresh strategy.
- Targets: LCP under 2.5 s, CLS under 0.1, smooth 60 fps. Lighthouse 90+ where realistic; prioritise smoothness and fast first paint.
- Images: WebP, explicit width and height, lazy-load below the fold, 200 KB or less each. Videos: lazy, 1.5 MB or less. On mobile use lighter variants (no custom cursor, simpler pinned scenes).

## Accessibility
- prefers-reduced-motion: replace all motion with simple fades. Keyboard-operable menu and lightbox, visible focus states, AA contrast, skip link, semantic landmarks, descriptive alt text, no flashing content.

## Security
- No secrets, tokens or private keys in the repo. Public form endpoint keys (Web3Forms or Formspree) are fine as environment values marked NEXT_PUBLIC_.
- Validate and sanitise form input. External links use rel="noopener noreferrer". Keep dependencies minimal and lockfile-pinned. Report anything suspicious from npm audit.

## Content rules
- Work data lives only in src/data/projects.json: id, title, category, platform, brandName (mock brand), year, cover, images[], description, deliverables[], isConcept.
- Never invent clients, testimonials, awards, statistics or years in business. Never say we are new or a startup. Label non-client work "Concept work". Do not show third-party logos or trademarks. Use clear placeholders for missing content. Copy is short, confident, simple English.

## Working rules
- One task at a time. Do not touch unrelated files. Never modify files in public/brand.
- After each task: list changed files, give the exact commands run and their results, state assumptions, and say how to verify the result.
- Teach as you go: explain each new concept in about 5 lines so I can learn from it.
- If something is unclear, ask me one question instead of guessing.
<!-- BEGIN:nextjs-agent-rules -->

<!--## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
