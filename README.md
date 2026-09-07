# KELA

![License](https://img.shields.io/badge/license-Proprietary-pink)

A React + TypeScript engineering pipeline: TypeScript, ESLint, Prettier, Jest, Playwright, Lefthook, and GitHub Actions.

## Summary

The template ships pre-configured with:

- React for building user interfaces.
- TypeScript (strict, `NodeNext`, path alias `@/* → src/*`).
- ESLint (flat config, type-checked, harmonic constraints) + Prettier 🖋️.
- Jest for unit tests (`test/`).
- Playwright for E2E browser tests (`playwright-tests/`).
- Lefthook for local git hooks (`lefthook.yml`).
- GitHub Actions for CI (`ci.yml`) and CD (`cd.yml`).
- Express local dev server (`src/server.ts`), pnpm as package manager, Docker.

## Scripts

All scripts are run through **pnpm**:

| Script                             | Description                                                     |
| ---------------------------------- | --------------------------------------------------------------- |
| `pnpm start`                       | Builds then runs the local server (`node dist/src/server.js`)   |
| `pnpm run build`                   | Compiles TypeScript with `tsc` → `dist/`                        |
| `pnpm run typecheck`               | Type-checks without emitting (`tsc --noEmit`)                   |
| `pnpm run test:unit` / `pnpm test` | Runs Jest with coverage                                         |
| `pnpm run test:e2e`                | Runs Playwright E2E (chromium) — run `test:e2e:install` first   |
| `pnpm run format` / `format:check` | Prettier write / check                                          |
| `pnpm run lint`                    | ESLint flat config over the project                             |
| `pnpm run ci`                      | Full local gate: format → lint → typecheck → unit → build → e2e |
| `pnpm run watch`                   | Jest watch mode                                                 |
| `pnpm run clean`                   | Removes `node_modules`, `dist`, lockfiles                       |

Install: `pnpm install` — the `prepare` script auto-installs lefthook git hooks.

## Local Git Hooks (Lefthook)

Configured in `lefthook.yml`:

- **pre-commit** (fast, parallel): Prettier check on staged files, ESLint on staged files, `tsc --noEmit`, and Jest on related tests only.
- **pre-push** (full gate): lint → unit tests → build → E2E tests.

## GitHub Actions Workflows

`.github/workflows/`:

- **`ci.yml`** — runs on every push to `main` and on pull requests:
  - `format` (Prettier check)
  - `lint` (ESLint)
  - `typecheck` (`tsc --noEmit`)
  - `unit` (Jest + coverage artifact)
  - `build` (tsc → `dist/` artifact)
  - `e2e` (Playwright chromium, report artifact on failure)
  - Concurrency cancels superseded runs; pnpm store is cached.
- **`cd.yml`** — on successful CI on `main` (or manual dispatch): builds and pushes the Docker image to **GitHub Container Registry** (`ghcr.io/<repo>:latest` and `:<sha>`).
- **`.github/dependabot.yml`** — weekly update PRs for pnpm/npm dependencies and GitHub Actions, grouped.

All jobs use `secrets.GITHUB_TOKEN`, automatically provided by GitHub.

## AI Agent–Optimized Rules

This template is tuned so that both humans and AI agents (for example GitHub Copilot powered by GPT-5.1) can safely read, understand, and modify the code. The most important rules are enforced via [eslint.config.ts](eslint.config.ts):

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
