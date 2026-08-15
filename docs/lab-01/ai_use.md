# Lab 1 — AI Use and Reflection  (fill this in)

**LLM/agent used:** Antigravity

## Selected key prompts (6–10)
| # | Prompt (summarised) | What I did with the result |
|---|---------------------|----------------------------|
| 1 | First, inspect the existing project structure and implementation against for Issue 2 criteria. Do not make any changes yet. Explain the implementation plan. | Antigravity produced a plan for backend, frontend, testing and follow according to plan but it somehow plans for solving both issue 2 + 4 in some parts. |
| 2 | I've added comments to your walkthrough as a review. Please revise the plan based on my comments and focus only on Issue 2 and its criteria. Do not include Issue 4 or make any changes yet. | I implemented Issue 2 while keeping the existing Issue 4 untouched. I've updated the frontend, backend and error handling. |
| 3 | Please compare the version before the PR and the current version for better understand of the PR review | Confirming the implementation of Issue 2 and gaining insight from PR review. |
| 4 | Review the current codebase against Issue 3 criteria. Don’t make changes yet. Summarize what exists, what’s missing, and the implementation plan. Keep it strictly separate from Issue 2. | Reviewed and approved the Issue 3 implementation plan, keeping the database model, migration, idempotent seed, and credential checks isolated from Issue 2. |
| 5 | Rechecking Issue 3 agaisnt the lastest lab1-staging. The implementation is correct but the another `SHADOW_DATABASE_URL` configuration was not required by the criteria. Remove any unnecessary changes related to it and keep the implementation strictly within the given requirements. | Removed the unnecessary `SHADOW_DATABASE_URL` configuration, restored the standard Prisma setup, and cleaned the environment files. Re-verified the schema, migration, build, and seed successfully, including running the seed twice with exactly four unique categories. |
| 6 | Inspect Issue 4, the existing Issue 2 implementation, and repo comments. Do not make changes yet. Provide a plan for implementing the category-list API and React UI, including tests, while reusing Issue 2 and keeping the work limited to Issue 4. | Reviewed the Issue 4 implementation plan and confirmed it builds on the existing Issue 2 and Issue 3 work without introducing unnecessary changes. The plan covers the category API, frontend display, loading/error handling, and required Supertest/Vitest tests while keeping Issue 4 scoped to its acceptance criteria. |
| 7 | Recheck all files involved in the Issue 4 implementation to ensure they fully meet the acceptance criteria. | Rechecked the complete Issue 4 implementation against all acceptance criteria and verified that the backend, frontend, and tests are working correctly without modifying the lab documentation. All 5 automated tests passed. |

## Reflection
My prompts can be more effective by clearly defining the scope, accpetance criteria, and which existing functionality should be reused or kept separate between issues. I should also review more before making changes which will result as less unnecessary change.

