# Specification

## Summary
**Goal:** Prevent invalid custom-domain slugs from reaching deploy by validating `frontend/deploy/custom-domain.json`, and improve README guidance so users avoid DNS-unsafe slugs like ones containing spaces.

**Planned changes:**
- Add a repository-level validation step to check the custom-domain slug in `frontend/deploy/custom-domain.json` follows the documented rules (5–50 chars; letters/numbers/hyphens only; no spaces/dots/special characters) and fail the build/deploy workflow with a clear English error when invalid.
- Update `frontend/README.md` with a short troubleshooting section explaining that slugs with spaces (e.g., “Ai master”) can lead to an apparently successful deployment but an app that cannot be opened, and provide an explicit example mapping (e.g., “Ai master” -> “ai-master”), referencing `frontend/deploy/custom-domain.json` as the source of truth.

**User-visible outcome:** If an invalid custom-domain slug is configured (e.g., contains spaces), the workflow fails early with an English explanation of the allowed format; the README clearly guides users to choose a DNS-safe slug such as “ai-master.”
