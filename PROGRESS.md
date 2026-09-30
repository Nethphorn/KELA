# Reactify Stitch Screens — Work in Progress

Handoff note. Branch: `reactify-stitch-screens`.

## Goal

Convert the five Stitch HTML screens in `stitch_gamified_kids_math_learning_app/`
into a React + TypeScript app with modular Tailwind CSS, wired into the existing
Express server and validation pipeline.

## Decisions (agreed)

- **Build**: add Vite (`vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`).
  Client builds to `dist/client`; Express serves it with SPA fallback.
- **CSS**: Tailwind v4 with one centralized `@theme` token set derived from
  `stitch_gamified_kids_math_learning_app/kela_playful_math/DESIGN.md` and the
  inline Stitch Tailwind config.
- **Scope**: all screens + routing (`react-router-dom`), shared header/bottom nav.
- **Data**: typed mock content under `src/domain/content/`; remote image URLs kept.

## Done

- Feature branch created; deps installed.
- Tooling: `index.html`, `vite.config.ts`, `src/vite-env.d.ts`; scripts updated
  (`build` = `tsc && vite build`, `dev` = `vite`, `typecheck` runs both tsconfigs).
- tsconfigs: base excludes client (`src/ui`, `src/main.tsx`, `src/App.tsx`,
  `src/styles`); `tsconfig.react.json` scoped to the client.
- Design system: `src/styles/theme.css` (colors, radii, spacing, fonts, text
  scales), `src/styles/base.css`, `src/styles/index.css`.
- Domain: `src/domain/types.ts` + content modules (`assets`, `nav`, `home`,
  `subjects`, `grades`, `lesson`, `wardrobe`).
- UI: primitives (`MaterialIcon`, `ProgressBar`, `ChunkyButton`), tone helpers,
  `useToast` hook, layout (`AppHeader`, `BottomNav`, `AppShell`, `LessonHeader`).
- Screens done: `HomeScreen`, `SubjectsScreen` (+ `home/*`, `subjects/*` parts).

## Remaining

- `GradeScreen` (math grade 2 topics/units) — data in `src/domain/content/grades.ts`.
- `LessonScreen` (lesson arena) — data in `src/domain/content/lesson.ts`.
- `AvatarScreen` (avatar studio / wardrobe) — data in `src/domain/content/wardrobe.ts`.
- `ProgressScreen` — minimal placeholder (no Stitch design exists).
- App wiring: `src/App.tsx` routes + `src/main.tsx` entry.
  Routes: `/`, `/subjects`, `/math`, `/lesson/:id`, `/avatar`, `/progress`.
- `src/server.ts`: serve `dist/client` + Express 5 SPA fallback (`/*splat`).
- Jest: add `moduleNameMapper` for `@/*` → `<rootDir>/src/*`.
- Tests: update `playwright-tests/e2e.spec.ts` for the new home UI; add a
  component unit test under `test/`.
- Run the gate: `pnpm run format && pnpm run lint && pnpm run typecheck &&
pnpm test:unit && pnpm run build && pnpm run test:e2e`. Nothing has been
  built/linted/typechecked yet — expect fixes.

## Notes / gotchas

- Components never import CSS (only `main.tsx` imports `src/styles/index.css`),
  so Jest/ESLint never need a CSS transform.
- Server `tsc` build must not pick up `.tsx`/CSS; client files are excluded.
- `tsconfig.eslint.json` uses `exclude: []` so type-aware ESLint still sees the
  client; base `jsx: react-jsx` added for ts-jest.
- Watch ESLint limits (`max-lines-per-function` 30, file 200, complexity 6) —
  screens are decomposed into small parts already.
- `@/` alias resolves in Vite + tsc, but Jest needs the moduleNameMapper above.
