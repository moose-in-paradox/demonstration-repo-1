# Contributing Guide

This project follows lightweight conventions typical of real-world teams.
Use these during the demo to explain *why* teams standardize this stuff.

## Branch naming

Format: `<type>/<short-kebab-case-description>`

| Prefix      | Use for                                   |
|-------------|--------------------------------------------|
| `feature/`  | New functionality                          |
| `fix/`      | Bug fixes                                  |
| `hotfix/`   | Urgent production fixes                    |
| `chore/`    | Tooling/config changes, no behavior change  |
| `docs/`     | Documentation only                         |
| `refactor/` | Code restructuring, no behavior change      |

Examples:
- `feature/add-bob-card`
- `fix/broken-footer-link`
- `docs/update-readme`

Avoid vague names like `patch1`, `test`, or `mybranch`.

## Commit messages

This project follows the **Conventional Commits** format:

```
<type>(optional-scope): <short summary, present tense>

optional longer description explaining why the change was made
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
```
feat(cards): add profile card for Bob

fix(footer): correct copyright year rendering

docs(readme): clarify local run instructions
```

Guidelines:
- Keep the summary line under ~50 characters
- Use the imperative mood ("add", not "added" or "adds")
- Explain *why*, not just *what*, in the body when the change isn't obvious

## Pull requests

- Open PRs against `main`
- Give the PR a clear title following the same `<type>: summary` style
- Describe what changed and why in the description
- Request review from at least one other collaborator before merging
- Prefer **squash and merge** for feature branches with messy WIP history;
  use a regular **merge commit** when preserving individual commits matters

## Code review

- Reviewers should leave inline comments on specific lines when possible
- Use "Request changes" for blocking issues, "Comment" for suggestions,
  and "Approve" once it's ready to merge
- Authors should respond to each comment (fix, explain, or discuss) before
  re-requesting review