# AGENTS.md

## Commands
- Use `pnpm`; this repo has `pnpm-lock.yaml` and a root-only `pnpm-workspace.yaml` for build dependency approvals, not a multi-package workspace.
- Dev server: `pnpm dev`.
- Production verification: `pnpm build`.
- Lint: `pnpm lint` runs ESLint directly. There is no declared `test` or `typecheck` script; use `pnpm build` when you need Next/TypeScript validation.

## App Structure
- This is a Next 16 App Router app under `src/app`, not root `app/`.
- The homepage composition lives in `src/app/page.tsx`; section components are under `src/components/sections/*`.
- Portfolio content is data-driven from `src/data/*`; update those files before hard-coding copy or project/contact/skill data in components.
- Imports use the `@/*` alias for `src/*` from `tsconfig.json`.

## Styling And UI
- Tailwind CSS v4 is configured through CSS: `src/app/globals.css` imports Tailwind plus `src/styles/theme.css` and `src/styles/base.css`; there is no `tailwind.config.*`.
- Theme tokens are CSS variables in `src/styles/theme.css` and are exposed with `@theme inline`; prefer existing tokens like `bg-surface`, `text-muted`, `border-border`, and `text-primary`.
- Use `cn` from `src/lib/cn.ts` for conditional classes so `clsx` and `tailwind-merge` both apply.
- Font roles from `README.md`: Hanken Grotesk for headings/section titles/project names, Inter for body copy, JetBrains Mono for tags/labels/technical metadata. The font variables are wired in `src/lib/fonts.ts` and `src/app/layout.tsx`.

## Conventions And Gotchas
- ESLint combines Neostandard, TypeScript recommended rules, and Next core-web-vitals. Existing code uses single quotes and no semicolons.
- Empty placeholder files currently exist at `src/components/sections/projects/project-modal.tsx` and `src/components/layout/header/mobile-menu.tsx`; do not assume their features are implemented without reading the files.
- Global base CSS already handles focus-visible outlines, reduced motion, smooth scrolling, selection colors, and modal body locking with `body:has(dialog:modal)`.
