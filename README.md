# Team Site (Demo Project)

A tiny static website used to demonstrate core Git and GitHub workflows:
cloning, branching, staging, commits, merging (including conflict
resolution), pushing, pull requests, and code review — followed by a
GitHub Actions demo (CI validation + CD to GitHub Pages).

## Files

- `index.html` — the page markup, including the team card grid
- `style.css` — page styling
- `script.js` — a small script that runs on page load
- `CONTRIBUTING.md` — branch naming and commit message conventions used in this repo

## Running locally

No build step needed. Just open `index.html` in a browser, or serve the
folder with any static file server, e.g.:

```
npx serve .
```

## Demo flow (high level)

1. Clone the repo as a collaborator
2. Create a feature branch (see `CONTRIBUTING.md` for naming)
3. Make a change, stage it, commit it (see commit message format below)
4. Push the branch and open a pull request
5. Review, resolve any conflicts, and merge
6. (Later) Add GitHub Actions workflows for CI checks and Pages deployment