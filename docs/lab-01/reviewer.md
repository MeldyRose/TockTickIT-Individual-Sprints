# Lab 1 — Peer Review Record  (fill this in)

**Author:** Praewa Thuwatharanimitkul — 67070503432 — GitHub: @MeldyRose
**Peer reviewer:** Suwiwat Sinsomboon — 67070503444 — GitHub: @iceswift

## Pull Requests I authored (reviewed by my partner)
| PR | Branch | Reviewer verdict |
|----|--------|------------------|
|  6  | feature/1-project-foundation | Approved. Issue 1 meets the project-foundation criteria, with the required setup files, README instructions, and successful builds/tests. The `/api/health` issue belongs to Issue 2 and does not block this PR. |
|  7  | feature/2-health-check | Approved. Issue 2 meets all acceptance criteria, including the `/api/health` endpoint, frontend Online/Offline handling, passing tests, and successful client/server builds. The required backend fix was completed and verified. |
|  8  | feature/3-category-seed | Approved. Issue 3 meets all acceptance criteria, including the Category model, migration, idempotent seeding, and successful server build/tests. The unnecessary `SHADOW_DATABASE_URL` configuration was removed and the fresh database setup was re-verified successfully. |
|  9  | feature/4-category-list |  |

Feature 1:Setting up project foundation
Reviewer comment I received: The reviewer confirmed the foundation mostly worked but requested a tracked of `server/.env.example` since I accidentally delete the exclamation mark in the `.gitignore`. Also require to complete README setup instruction, and clarification about the health-check in Issue 2.
How I responded: I addressed the relevant feedback by expanding the README and deffering the health-check test because it belongs to Issue 2. 

Feature 2:Implementing API health check
Reviewer comment I received: The reviewer found that the frontend implementation was working, but the backend `/api/health` endpoint still returned 501 instead of the required 200 response.
How I responded: I fixed the backend health endpoint to return the required responses and re-ran the tests. 

Feature 3:Creating and seeding IT request categories
Reviewer comment I received: The reviewer found that, the implementation met the Issue 3 requirements but identified an unnecessary `shadowDatabaseUrl` and `SHADOW_DATABASE_URL` configuration that caused fresh database setup issues.
How I responded: I removed the unnecessary shadow database configuration and re-verified the migration, build and seed process. 

## Pull Requests I reviewed for my partner
My comment: <...>
Partner's response: <...>
