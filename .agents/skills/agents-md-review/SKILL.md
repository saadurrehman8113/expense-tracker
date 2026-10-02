---
name: agents-md-review
description: Audit and update a repository's AGENTS.md contributor guidance against the current source tree, tooling, and documented conventions. Use when asked to review, synchronize, or create AGENTS.md; do not use for unrelated code changes.
metadata:
  short-description: Keep AGENTS.md accurate
---

# Review and Update AGENTS.md

Use this skill when asked to review or refresh repository guidance. Ground every factual statement in the current repository; existing documentation is input to review, not proof that a claim is still true.

## Workflow

1. Identify the repository root and read the applicable `AGENTS.md` files before editing. Inspect the package manifest and lockfile, source and asset layout, build/lint/test configuration, CI or deployment files, README, and recent commit subjects as relevant to the guide.
2. Compare the guide with those sources. Correct stale commands, paths, architecture descriptions, dependency/tool versions, and test status. Distinguish verified current practices from recommendations. Do not invent test coverage, commit conventions, CI behavior, or PR requirements; label useful advice as guidance when repository evidence does not establish a rule.
3. Keep the document concise, specific, and actionable. Preserve valid project-specific instructions and useful structure. Update only the requested guide; do not make code or configuration changes as part of a documentation review.
4. If the root `AGENTS.md` exists, edit it in place without discarding accurate guidance. If it is absent and the user asked to create or synchronize it, add one at the repository root. Respect nested `AGENTS.md` scope and do not rewrite nested guides unless requested.
5. Review the final diff and verify that every project-specific statement matches the inspected files. For documentation-only changes, report the review and changed sections; do not run unrelated tests or builds.

When evidence is missing or contradictory and the choice would change contributor behavior, ask the user before asserting a new project rule.