---
name: deploy
description: Run the repository's validation and production build, then deploy the built site to its configured staging destination when explicitly requested. Do not use for production releases.
metadata:
  short-description: Validate and deploy to staging
---

# Deploy to Staging

Use this skill only when asked to deploy this repository to staging. This is a Vite React static site. The repository currently has no automated test suite, and no staging provider or destination is configured. Re-check the current files and scripts each time; do not assume those facts remain true.

## Workflow

1. Inspect `package.json`, repository guidance, and deployment configuration to identify all configured automated test commands and the staging destination.
2. Run every configured automated test suite before building. If any test fails, stop without building or deploying. If no tests are configured, report that clearly and run the available lint check, but do not present lint as tests passed. Ask whether to continue without automated tests before building.
3. After validation is accepted, run `npm run build`. Stop if it fails; deploy only the generated `dist/` output.
4. Deploy `dist/` only to a staging destination explicitly established by repository configuration or the user. If none is established, ask which staging target to use and stop. Never guess a provider, site, account, URL, branch, or credentials; never deploy to production.
5. Make one staging deployment attempt. If it fails, report the error and stop rather than retrying or switching targets. Report the staging destination and validation/build results when it succeeds.

A user request to deploy to staging authorizes that staging deployment once its destination is known. It does not authorize a production release or changes to deployment configuration, secrets, or hosting accounts.
