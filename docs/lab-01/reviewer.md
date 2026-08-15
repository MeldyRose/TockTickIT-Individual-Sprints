# Lab 1 — Peer Review Record  (fill this in)

**Author:** Praewa Thuwatharanimitkul — 67070503432 — GitHub: @MeldyRose
**Peer reviewer:** Suwiwat Sinsomboon — 67070503444 — GitHub: @iceswift

## Pull Requests I authored (reviewed by my partner)
| PR | Branch | Reviewer verdict |
|----|--------|------------------|
|  6  | feature/1-project-foundation | Approved. Issue 1 meets the project-foundation criteria, with the required setup files, README instructions, and successful builds/tests. The `/api/health` issue belongs to Issue 2 and does not block this PR. |
|  7  | feature/2-health-check | Approved. Issue 2 meets all acceptance criteria, including the `/api/health` endpoint, frontend Online/Offline handling, passing tests, and successful client/server builds. The required backend fix was completed and verified. |
|  8  | feature/3-category-seed | Approved. Issue 3 meets all acceptance criteria, including the Category model, migration, idempotent seeding, and successful server build/tests. The unnecessary `SHADOW_DATABASE_URL` configuration was removed and the fresh database setup was re-verified successfully. |
|  9  | feature/4-category-list | Approved. Issue 4 meets the required criteria, with the Prisma migration, idempotent seeding, API integration, successful builds/tests, and correct category ordering. The UI labels were updated to match the lab sheet, with tests added to verify them. |

Feature 1:Setting up project foundation
Reviewer comment I received: The reviewer confirmed the foundation mostly worked but requested a tracked of `server/.env.example` since I accidentally delete the exclamation mark in the `.gitignore`. Also require to complete README setup instruction, and clarification about the health-check in Issue 2.
How I responded: I addressed the relevant feedback by expanding the README and deffering the health-check test because it belongs to Issue 2. 

Feature 2:Implementing API health check
Reviewer comment I received: The reviewer found that the frontend implementation was working, but the backend `/api/health` endpoint still returned 501 instead of the required 200 response.
How I responded: I fixed the backend health endpoint to return the required responses and re-ran the tests. 

Feature 3:Creating and seeding IT request categories
Reviewer comment I received: The reviewer found that, the implementation met the Issue 3 requirements but identified an unnecessary `shadowDatabaseUrl` and `SHADOW_DATABASE_URL` configuration that caused fresh database setup issues.
How I responded: I removed the unnecessary shadow database configuration and re-verified the migration, build and seed process. 

Feature 4:Display the IT request category list
Reviewer comment I received: The reviewer confirmed that the API, Prisma migration, idempotent seeding, tests, and builds met the requirements. However, the success UI was missing the required `System Status: Online` and `Supported Request Categories:` labels, and corresponding Vitest assertions were needed.
How I responded: I updated the success UI to include the required labels and added Vitest assertions to verify them. I then re-ran the client tests and production build, while keeping the existing dynamic API data, loading state, and error handling. The changes were re-reviewed and approved. 


## Pull Requests I reviewed for my partner

**I, Praewa reviewed for : Yoswat Amornvitkijvecha — 67070503494 — GitHub: @Decaa0** 

Feature 1:Setting up project foundation
My comment: The project foundation was mostly complete, but the `README.md` only contained the project name. I requested adding the project overview, prerequisites, setup instructions, environment configuration, database commands, development server commands, and testing commands required by Lab 1.
Partner's response: The partner updated the README.md to include the project overview, prerequisites, setup instructions, database commands, development server commands, and test scripts as requested. After re-reviewing the changes, I confirmed that the README met the Lab 1 requirements and approved the PR.

Feature 2:Implementing API health check
My comment:Looks good to me! I tested your PR:
- `GET /api/health` returns `200` with the expected JSON response.
- Supertest and frontend tests pass successfully.
- The UI correctly displays the Online state when the server is available and Offline when the server is unavailable.
So approved!
Partner's response: -

Feature 3:
My comment:Approved! I've checked your PR and it passed along the Issue 3 criteria. It can complies without Typescript errors, has valid Prisma migrations and safely seeds the required initial category data.
Partner's response: -