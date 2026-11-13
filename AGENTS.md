# Data-conscious work in this repository

- Prefer local inspection and locally installed tools. Do not run dependency installation or package downloads unless a required dependency is missing and the task cannot proceed without it.
- Prefer project-local executables over `npx` package resolution. Do not run unpinned `npx` commands that might download a package.
- Do not browse the web, open browser pages, capture screenshots, or fetch remote assets unless the task needs current external information or the user asks for it.
- Keep command output narrow: target relevant files, errors, and summaries instead of dumping whole logs, dependency trees, or generated files.
- For builds and checks, run only the smallest relevant command set and reuse the existing dependency installation and caches.
