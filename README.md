# KELA

![License](https://img.shields.io/badge/license-Proprietary-pink)

A gamified kids math learning app: a React + TypeScript client (Vite, Tailwind CSS v4, React Router) served by an Express server, with a hardened engineering pipeline — ESLint, Prettier, Jest, Playwright, Lefthook, and GitHub Actions.

## Summary

The repo ships pre-configured with:

- **React 19 + TypeScript** (strict, `NodeNext`, path alias `@/* → src/*`).
- **Vite** for the client build (`vite build` → `dist/client`) and dev server with HMR.
- **Tailwind CSS v4** via `@tailwindcss/vite`, with a centralized theme token set in `src/styles/theme.css`.
- **React Router v7** for SPA routing (`/`, `/subjects`, `/math`, `/lesson/:id`, `/avatar`, `/progress`).
- **Express 5** (`src/server.ts`) serving the built client with an SPA fallback (`/*splat`).
- **ESLint** (flat config, type-checked, harmonic constraints) + Prettier.
- **Jest** for unit tests (`test/`).
- **Playwright** for E2E browser tests (`playwright-tests/`).
- **Lefthook** for local git hooks (`lefthook.yml`).
- **GitHub Actions** for CI (`ci.yml`) and CD (`cd.yml`).
- **pnpm** as package manager; Node & pnpm versions pinned via Volta.

The UI screens are rebuilt from the original designs in
`stitch_gamified_kids_math_learning_app/` (see `kela_playful_math/DESIGN.md` for the
design-system tokens).

## Prerequisites

- **Node.js `26.5.0`** — pinned in `package.json` via `volta.node`.
- **pnpm `11.3.0`** — pinned via `packageManager`. If you use Corepack:
  ```bash
  corepack enable
  ```

## Setup

```bash
pnpm install          # installs dependencies and installs Lefthook git hooks (prepare script)
pnpm run test:e2e:install   # one-time: downloads the Playwright chromium browser
```

That's it — no other global installs or configuration are required.

## Development

Run the Vite dev server with HMR (client only, serves the SPA at `http://localhost:3000`):

```bash
pnpm run dev
```

Run the full stack (build client + server, start Express on `http://localhost:3000`):

```bash
pnpm start
```

## Scripts

All scripts are run through **pnpm**:

| Script                             | Description                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| `pnpm start`                       | Builds client + server (`tsc && vite build`) then runs Express                |
| `pnpm run dev`                     | Vite dev server with HMR (port 3000)                                          |
| `pnpm run build`                   | `tsc` → `dist/` for the server, then `vite build` → `dist/client/`            |
| `pnpm run typecheck`               | Type-checks server (`tsc --noEmit`) and client (`tsc -p tsconfig.react.json`) |
| `pnpm run test:unit` / `pnpm test` | Runs Jest with coverage                                                       |
| `pnpm run test:e2e`                | Runs Playwright E2E (chromium) — run `test:e2e:install` first                 |
| `pnpm run format` / `format:check` | Prettier write / check                                                        |
| `pnpm run lint`                    | ESLint flat config over the project                                           |
| `pnpm run ci`                      | Full local gate: format → lint → typecheck → unit → build → e2e               |
| `pnpm run watch`                   | Jest watch mode                                                               |
| `pnpm run clean`                   | Removes `node_modules`, `dist`, both lockfiles                                |

## Project Structure

```
src/
  server.ts              # Express app; serves dist/client with SPA fallback
  index.ts               # CLI / action entry point
  main.tsx               # React entry (BrowserRouter)
  App.tsx                # Route table
  domain/                # Types + typed mock content (no React / Node deps)
    types.ts             # Core domain types
    types-arena.ts       # Lesson / wardrobe types
    content/             # Mock content (home, subjects, grades, lesson, wardrobe, nav, assets)
  styles/                # Tailwind v4 theme tokens, base + index CSS
  ui/                    # Client-only code
    components/          # Primitives (MaterialIcon, ProgressBar, ChunkyButton)
    layout/              # AppShell, AppHeader, BottomNav, LessonHeader
    lib/                 # Tones, useToast
    screens/             # Route screens + their parts (home, subjects, grade, lesson, avatar)
test/                    # Jest unit tests
playwright-tests/        # Playwright E2E specs
dist/                    # tsc output (server) + dist/client (Vite build)
stitch_gamified_kids_math_learning_app/   # Original HTML screen designs + DESIGN.md
```

### Layer flow

Code flows **UI → services → domain → utilities**, never reversed. `src/domain`
must not depend on React, the DOM, or Node-only APIs. Components never import CSS —
only `src/main.tsx` imports `src/styles/index.css`.

## Local Git Hooks (Lefthook)

Configured in `lefthook.yml`:

- **pre-commit** (fast, parallel): Prettier check on staged files, ESLint on staged files, `tsc --noEmit`, and Jest on related tests only.
- **pre-push** (full gate): lint → unit tests → build → E2E tests.

## GitHub Actions Workflows

`.github/workflows/`:

- **`ci.yml`** — runs on every push to `main` and on pull requests:
  - `format` (Prettier check)
  - `lint` (ESLint)
  - `typecheck` (`tsc --noEmit` both configs)
  - `unit` (Jest + coverage artifact)
  - `build` (tsc + Vite build artifacts)
  - `e2e` (Playwright chromium, report artifact on failure)
  - Concurrency cancels superseded runs; pnpm store is cached.
- **`cd.yml`** — on successful CI on `main` (or manual dispatch): builds and pushes the Docker image to **GitHub Container Registry** (`ghcr.io/<repo>:latest` and `:<sha>`).
- **`.github/dependabot.yml`** — weekly update PRs for pnpm/npm dependencies and GitHub Actions, grouped.

All jobs use `secrets.GITHUB_TOKEN`, automatically provided by GitHub.

## AI Agent–Optimized Rules

This repository is tuned so that both humans and AI agents can safely read, understand, and modify the code. The most important rules are enforced via [eslint.config.ts](eslint.config.ts):

- **Small, focused units**
  - `max-lines-per-function`: functions are limited to ~30 logical lines.
  - `max-lines`: files are limited to ~200 logical lines (excluding comments/blank lines).
  - `complexity`, `sonarjs/cognitive-complexity`, `max-depth`, `max-nested-callbacks`, and `max-params` keep logic simple and flatten nested control flow.
- **Strict and explicit TypeScript**
  - `@typescript-eslint/strict-boolean-expressions`, `no-floating-promises`, and related rules prevent unsafe runtime behaviour.
  - `@typescript-eslint/no-explicit-any` forces precise typing, which makes code easier to navigate for agents.
  - Unused variables are forbidden (except intentionally ignored ones prefixed with `_`).
- **Consistent, searchable structure**
  - `import/order` enforces grouped and alphabetized imports for predictable file layout.
  - `@typescript-eslint/naming-convention` keeps types/classes/interfaces in `PascalCase`.
  - `no-nested-ternary`, `no-negated-condition`, and `no-console` (warn) avoid patterns that reduce readability.

These constraints intentionally bias the codebase toward short, cohesive functions and predictable structure, which in turn makes it easier for AI agents to generate correct, low-risk changes over time as the project grows.

For detailed behavior constraints for automated agents, see [AGENT.md](AGENT.md).

## Note on Commits

Lefthook hooks run on `git commit` (fast staged checks) and `git push` (full lint/unit/build/e2e gate). If a commit or push is blocked, fix the reported errors rather than bypassing hooks.

## Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

## License

This project is licensed under the terms of the Commercial License Agreement. For more details, see the [LICENSE](LICENSE.md) file.
