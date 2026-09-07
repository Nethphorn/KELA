# 🤝 Contributing

[fork]: https://github.com/Jagoda11/algorithm-practice-extension/fork
[pr]: https://github.com/Jagoda11/algorithm-practice-extension/compare
[code-of-conduct]: CODE_OF_CONDUCT.md

Hello there! 👋 We're thrilled that you're considering contributing to this project. Your help is essential for keeping it great. 🙌

Please note that this project is released with a [Contributor Code of Conduct][code-of-conduct]. By participating in this project, you agree to abide by its terms.

## 🐞 Issues and 🚀 PRs

If you have suggestions for how this project could be improved, or want to report a bug, open an issue! We appreciate all contributions. If you have questions, we'd love to hear them too.

We also welcome PRs. For larger PRs, we advise opening an issue first to discuss it. If you're not sure how to open a PR, check out the links below.

## 📝 Submitting a Pull Request

1. [Fork][fork] and clone the repository.
2. Configure and install the dependencies: `pnpm install`.
3. Make sure the tests pass on your machine: `pnpm run test:unit`. Note: lefthook's pre-commit hook runs lint, typecheck, and related tests automatically before each commit, and pre-push runs the full lint → unit → build → e2e gate.
4. Format your code: `pnpm run format`.
5. Create a new branch: `git checkout -b my-branch-name`.
6. Make your change, add tests, and ensure the tests still pass.
7. Push to your fork and [submit a pull request][pr].
8. Pat yourself on the back 👏 and wait for your pull request to be reviewed and merged.

Here are a few things that will increase the likelihood of your pull request being accepted:

- Write and update tests.
- Keep your changes as focused as possible. If there are multiple changes you'd like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

Work in Progress pull requests are also welcome to get feedback early on, or if there is something blocking you.
