# Codebase Concerns

**Analysis Date:** 2026-03-31

## Tech Debt

**In-memory backend persistence:**
- Issue: Backend state lives in process-local arrays instead of durable storage, so all messages and tickets disappear on restart and cannot be shared across instances.
- Files: `backend/controllers/formularioController.js`, `backend/controllers/ticketController.js`
- Impact: Any deployment restart, test isolation mistake, or horizontal scaling step causes silent data loss and inconsistent behavior between processes.
- Fix approach: Replace the module-level arrays with a repository/service boundary backed by persistent storage, then keep the current controllers thin HTTP adapters.

**Frontend state diverges from backend state:**
- Issue: The UI stores tickets and messages only in React context initialized as empty arrays and never hydrates from backend GET endpoints.
- Files: `frontend/src/context/MensajesContext.jsx`, `frontend/src/context/TicketsContext.jsx`, `frontend/src/pages/ListaMensajes.jsx`, `frontend/src/pages/Dashboard.jsx`, `frontend/src/pages/Formulario.jsx`, `frontend/src/pages/CrearTicket.jsx`
- Impact: After a page reload the UI shows empty lists even if the backend still holds data, so the product behaves like a demo instead of a system of record.
- Fix approach: Add initial data loading from `GET /api/formulario` and `GET /api/tickets`, then treat context as a client cache instead of the primary source of truth.

**Monolithic styling hotspot:**
- Issue: Almost all frontend visual behavior is concentrated in one 761-line global stylesheet.
- Files: `frontend/src/index.css`
- Impact: Small UI changes require touching a single high-churn file, increasing merge conflicts and making component-level regressions harder to isolate.
- Fix approach: Split styles by feature/component or introduce a clear token/base/components/pages structure while keeping shared variables centralized.

## Known Bugs

**Ticket list ordering does not meet the written spec:**
- Symptoms: Ticket listing returns insertion order, not newest-first.
- Files: `backend/controllers/ticketController.js`, `openspec/specs/ticket-management/spec.md`
- Trigger: Create multiple tickets, then call `GET /api/tickets`; older tickets remain first because `listarTickets` returns the raw `tickets` array.
- Workaround: The frontend prepends newly created tickets in `frontend/src/context/TicketsContext.jsx`, but backend consumers still receive the unsorted array.

**Server boot path is hard to test in isolation:**
- Symptoms: Importing the HTTP entrypoint starts listening immediately instead of exposing an app factory.
- Files: `backend/server.js`
- Trigger: Any future integration test or alternate runtime that requires importing the Express app without binding a socket.
- Workaround: Current tests avoid the server entirely and call controller functions directly in `backend/tests/formularioController.test.js`.

## Security Considerations

**Backend accepts cross-origin requests without restriction:**
- Risk: `app.use(cors())` enables permissive CORS for every origin, which is fine for local development but broad for deployed environments.
- Files: `backend/server.js`
- Current mitigation: None beyond default Express JSON parsing.
- Recommendations: Gate allowed origins by environment, restrict methods/headers explicitly, and document the production CORS contract.

**Input validation is minimal and duplicated:**
- Risk: Validation only checks required fields and whether email contains `@`, leaving room for malformed payloads and divergent frontend/backend behavior.
- Files: `backend/controllers/formularioController.js`, `backend/controllers/ticketController.js`, `frontend/src/pages/Formulario.jsx`, `frontend/src/pages/CrearTicket.jsx`
- Current mitigation: Basic per-handler checks return `400` for missing fields.
- Recommendations: Centralize schema validation on the backend, share validation rules with the frontend where practical, and normalize error payloads.

## Performance Bottlenecks

**Repeated full-array filtering on every dashboard render:**
- Problem: Metrics and filtered lists recompute from the entire ticket collection on each relevant render.
- Files: `frontend/src/pages/Dashboard.jsx`
- Cause: `tickets.filter(...)` is executed multiple times inside `useMemo`, which is acceptable now but scales linearly with the whole ticket list.
- Improvement path: Precompute grouped counts in one pass or move derived selectors into the ticket state layer once real data volume exists.

**Global page animations and heavy visual rules sit on all routes:**
- Problem: Global backgrounds, overlays, shadows, and staggered animations are applied broadly from one stylesheet.
- Files: `frontend/src/index.css`
- Cause: Design effects are global rather than scoped to the components that need them.
- Improvement path: Keep shared tokens global, but scope expensive effects and route-specific animation rules closer to the components that use them.

## Fragile Areas

**Controller logic depends on module-scoped mutable state:**
- Files: `backend/controllers/formularioController.js`, `backend/controllers/ticketController.js`
- Why fragile: Hidden shared state couples requests, tests, and future parallel execution to file-level arrays and reset helpers.
- Safe modification: Introduce explicit data access abstractions first, then migrate controllers incrementally behind tests.
- Test coverage: Only `backend/controllers/formularioController.js` has direct tests in `backend/tests/formularioController.test.js`; ticket flows have no automated coverage.

**UI behavior depends on optimistic local context updates:**
- Files: `frontend/src/context/MensajesContext.jsx`, `frontend/src/context/TicketsContext.jsx`, `frontend/src/pages/Dashboard.jsx`
- Why fragile: The UI mutates local collections after successful POST/PATCH responses but does not reconcile with server state, retries, or failed partial updates.
- Safe modification: Add API-backed query/load flows before introducing more dashboard features or multi-user behavior.
- Test coverage: No frontend test files are present under `frontend/src/` and no frontend test config is tracked in the repo.

## Scaling Limits

**Single-process memory is the storage ceiling:**
- Current capacity: Limited to one Node.js process holding arrays in memory.
- Limit: Data volume, restarts, or multi-instance deployment break consistency immediately.
- Scaling path: Move to persistent storage, add stable IDs, and treat the backend as the system of record for all reads and writes.

**Environment coupling is hard-coded to local ports:**
- Current capacity: Frontend dev proxy points to `http://localhost:3001` and backend listens on fixed port `3001`.
- Limit: Alternate ports, hosted previews, containerized environments, and parallel dev sessions require code edits instead of configuration.
- Scaling path: Read host/port/origin settings from environment variables and provide checked-in examples such as `.env.example` files.

## Dependencies at Risk

**No CI or verification pipeline is tracked:**
- Risk: The repository has no tracked workflow files under `.github/workflows/`, so linting, tests, and packaging checks depend entirely on manual execution.
- Impact: Regressions in backend routes, frontend behavior, and specs drift can merge unnoticed.
- Migration plan: Add a minimal CI workflow that installs `backend/` and `frontend/`, runs backend tests, and adds frontend verification once tests exist.

## Missing Critical Features

**No persistent read model in the frontend:**
- Problem: The app cannot restore previously created tickets or messages after a refresh even though read endpoints exist server-side.
- Blocks: Reliable admin review, multi-session use, and any realistic production workflow.

**No environment example files or setup guide:**
- Problem: `.gitignore` explicitly allows `.env.example`, but none are tracked and there is no root README with startup steps.
- Blocks: Consistent onboarding, predictable local setup, and future deployment automation.

## Test Coverage Gaps

**Ticket backend is untested:**
- What's not tested: `POST /tickets`, `GET /tickets`, and `PATCH /tickets/:id/estado` logic.
- Files: `backend/controllers/ticketController.js`, `backend/routes/tickets.js`
- Risk: State transitions, validation rules, and spec mismatches can break without detection.
- Priority: High

**HTTP wiring is untested:**
- What's not tested: Route registration, JSON middleware behavior, CORS behavior, and health endpoint behavior from `backend/server.js`.
- Files: `backend/server.js`, `backend/routes/formulario.js`, `backend/routes/tickets.js`
- Risk: Controller unit tests can stay green while real HTTP behavior regresses.
- Priority: High

**Frontend behavior is unverified:**
- What's not tested: Route navigation, form submission flows, reload behavior, dashboard filtering, accessibility states, and forced-colors/reduced-motion behavior described in the specs.
- Files: `frontend/src/App.jsx`, `frontend/src/pages/Formulario.jsx`, `frontend/src/pages/CrearTicket.jsx`, `frontend/src/pages/Dashboard.jsx`, `frontend/src/index.css`
- Risk: UI regressions and spec non-compliance are currently detected only by manual inspection.
- Priority: High

**Planning artifacts are duplicated and can drift:**
- What's not tested: Consistency between `specs/`, `openspec/`, `prd.md`, and `frontend/src/UI_PRD.md`.
- Files: `specs/001-add-rest-api/spec.md`, `specs/002-frontend-redesign/spec.md`, `openspec/specs/ticket-management/spec.md`, `prd.md`, `frontend/src/UI_PRD.md`
- Risk: Engineers can implement against conflicting requirements, especially because `specs/*` remain marked Draft while archived OpenSpec changes also exist.
- Priority: Medium

---

*Concerns audit: 2026-03-31*
