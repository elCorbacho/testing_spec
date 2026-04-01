# Codebase Structure

**Analysis Date:** 2026-03-31

## Directory Layout

```text
proyecto_test/
├── backend/                 # Express API service and backend tests
├── frontend/                # Vite + React single-page app
├── specs/                   # Feature specs, plans, contracts, and task lists
├── openspec/                # OpenSpec requirements and archived change packs
├── .specify/                # Speckit templates and helper scripts
├── .planning/codebase/      # Generated architecture/quality/stack mapping docs
├── prd.md                   # Product-level redesign brief
└── AGENTS.md                # Project-specific agent guidance
```

## Directory Purposes

**`backend/`:**
- Purpose: Host the Node/Express API and backend-only tests.
- Contains: `server.js`, route modules under `backend/routes/`, controller modules under `backend/controllers/`, tests under `backend/tests/`, package manifests.
- Key files: `backend/server.js`, `backend/routes/formulario.js`, `backend/routes/tickets.js`, `backend/controllers/formularioController.js`, `backend/controllers/ticketController.js`, `backend/tests/formularioController.test.js`

**`frontend/`:**
- Purpose: Host the browser application and Vite tooling.
- Contains: `frontend/index.html`, Vite config, `frontend/src/` for runtime code, package manifests, ignored build output in `frontend/dist/`.
- Key files: `frontend/index.html`, `frontend/vite.config.js`, `frontend/src/main.jsx`, `frontend/src/App.jsx`, `frontend/src/index.css`

**`frontend/src/pages/`:**
- Purpose: Keep route-level screens together.
- Contains: `Home.jsx`, `Formulario.jsx`, `ListaMensajes.jsx`, `CrearTicket.jsx`, `Dashboard.jsx`.
- Key files: `frontend/src/pages/Formulario.jsx`, `frontend/src/pages/CrearTicket.jsx`, `frontend/src/pages/Dashboard.jsx`

**`frontend/src/components/`:**
- Purpose: Keep reusable UI primitives separate from pages.
- Contains: `Button.jsx`, `TextInput.jsx`.
- Key files: `frontend/src/components/Button.jsx`, `frontend/src/components/TextInput.jsx`

**`frontend/src/context/`:**
- Purpose: Keep client-side shared state grouped by domain entity.
- Contains: `MensajesContext.jsx`, `TicketsContext.jsx`.
- Key files: `frontend/src/context/MensajesContext.jsx`, `frontend/src/context/TicketsContext.jsx`

**`specs/`:**
- Purpose: Store feature-by-feature specification artifacts from the Speckit workflow.
- Contains: One folder per change such as `specs/001-add-rest-api/` and `specs/002-frontend-redesign/`, each with `spec.md`, `plan.md`, `tasks.md`, contracts, and supporting docs.
- Key files: `specs/001-add-rest-api/spec.md`, `specs/001-add-rest-api/contracts/api.md`, `specs/002-frontend-redesign/spec.md`, `specs/002-frontend-redesign/contracts/ui-routes.md`

**`openspec/`:**
- Purpose: Store OpenSpec requirements and archived change history.
- Contains: Active requirements in `openspec/specs/` and archived change packs in `openspec/changes/archive/`.
- Key files: `openspec/specs/ticket-management/spec.md`, `openspec/changes/archive/2026-03-31-sistema-tickets/design.md`, `openspec/changes/archive/2026-03-31-ui-redesign/design.md`, `openspec/config.yaml`

**`.specify/`:**
- Purpose: Hold template-driven planning assets and helper scripts.
- Contains: Markdown templates in `.specify/templates/`, PowerShell scripts in `.specify/scripts/powershell/`, memory docs in `.specify/memory/`.
- Key files: `.specify/templates/plan-template.md`, `.specify/templates/spec-template.md`, `.specify/scripts/powershell/setup-plan.ps1`

## Key File Locations

**Entry Points:**
- `frontend/index.html`: Browser HTML shell and font loading.
- `frontend/src/main.jsx`: React bootstrap and provider composition.
- `frontend/src/App.jsx`: SPA router and persistent header shell.
- `backend/server.js`: Express bootstrap and `/api` mounting.

**Configuration:**
- `frontend/vite.config.js`: Dev server port and `/api` proxy to `http://localhost:3001`.
- `frontend/package.json`: Frontend scripts and dependencies.
- `backend/package.json`: Backend scripts and dependencies.
- `openspec/config.yaml`: OpenSpec project config.
- `AGENTS.md`: Project coding-agent context and active technologies.

**Core Logic:**
- `frontend/src/pages/Formulario.jsx`: Message submission route.
- `frontend/src/pages/CrearTicket.jsx`: Ticket creation route.
- `frontend/src/pages/Dashboard.jsx`: Ticket metrics, filter, and state transition route.
- `frontend/src/context/MensajesContext.jsx`: In-browser message store.
- `frontend/src/context/TicketsContext.jsx`: In-browser ticket store.
- `backend/controllers/formularioController.js`: Message validation and persistence.
- `backend/controllers/ticketController.js`: Ticket validation, listing, and status change logic.

**Testing:**
- `backend/tests/formularioController.test.js`: Native node:test coverage for formulario controller behavior.
- `specs/002-frontend-redesign/quickstart.md`: Manual QA and Lighthouse verification target referenced by tasks.

## Naming Conventions

**Files:**
- React pages/components/contexts use PascalCase filenames: `frontend/src/pages/CrearTicket.jsx`, `frontend/src/components/TextInput.jsx`, `frontend/src/context/TicketsContext.jsx`.
- Backend route/controller files use lower camel or lowercase resource names with suffixes: `backend/routes/tickets.js`, `backend/controllers/ticketController.js`.
- Spec artifacts use fixed lowercase names inside feature folders: `spec.md`, `plan.md`, `tasks.md`, `data-model.md`, `quickstart.md`.

**Directories:**
- Runtime directories are plural, role-based folders: `frontend/src/pages/`, `frontend/src/components/`, `backend/routes/`, `backend/controllers/`, `backend/tests/`.
- Feature/spec directories use prefixed change identifiers: `specs/001-add-rest-api/`, `specs/002-frontend-redesign/`, `openspec/changes/archive/2026-03-31-ui-redesign/`.

## Where to Add New Code

**New Frontend Route / Feature Screen:**
- Primary code: add a new page component under `frontend/src/pages/` and register it in `frontend/src/App.jsx`.
- Shared styles: extend `frontend/src/index.css` unless the project introduces a new styling split later.

**New Shared Frontend Component/Module:**
- Implementation: add reusable primitives to `frontend/src/components/`.
- State logic: add cross-route state to `frontend/src/context/` when more than one page needs it.

**New Backend Endpoint:**
- Request handler: add controller functions in `backend/controllers/`.
- Route registration: wire the handler in `backend/routes/` and mount through `backend/server.js` if a new router is needed.
- Test: add backend tests under `backend/tests/` following the controller-level pattern in `backend/tests/formularioController.test.js`.

**New Specification Artifact:**
- Speckit-style feature docs: create a new numbered folder under `specs/`.
- OpenSpec-style requirement/change docs: update `openspec/specs/` or add a new change pack under `openspec/changes/`.
- Product-wide narrative: update `prd.md` when the change affects broad UX direction.

**Utilities:**
- Shared frontend helpers: no `frontend/src/utils/` directory exists yet; add one under `frontend/src/` if helpers start repeating across pages/components.
- Shared backend helpers: no `backend/utils/` directory exists yet; add one under `backend/` only when controller duplication needs extraction.

## Special Directories

**`frontend/dist/`:**
- Purpose: Frontend production build output.
- Generated: Yes.
- Committed: No; ignored by `frontend/.gitignore` and root `.gitignore`.

**`frontend/node_modules/` and `backend/node_modules/`:**
- Purpose: Installed dependencies.
- Generated: Yes.
- Committed: No; ignored by `frontend/.gitignore`, `backend/.gitignore`, and root `.gitignore`.

**`.planning/codebase/`:**
- Purpose: Store generated repository maps like this document.
- Generated: Yes.
- Committed: Intended for repo documentation; current ignore rules do not exclude it.

**`specs/`:**
- Purpose: Track implementation-ready feature artifacts tied to exact code paths.
- Generated: Yes, by planning workflow.
- Committed: Yes.

**`openspec/changes/archive/`:**
- Purpose: Preserve completed OpenSpec proposals/design/tasks after implementation.
- Generated: Yes.
- Committed: Yes.

**`.specify/templates/`:**
- Purpose: Define the standard shape of feature docs.
- Generated: No, template source.
- Committed: Yes.

## Frontend / Backend / Spec Relationship

- `frontend/` is the consumer layer: pages in `frontend/src/pages/` call `/api` endpoints and render client state.
- `backend/` is the execution layer: `backend/routes/` and `backend/controllers/` implement the endpoints the SPA calls.
- `specs/` describes the intended shape of concrete features in the same repo structure; for example `specs/002-frontend-redesign/plan.md` points directly to files in `frontend/src/`.
- `openspec/` captures broader requirements and archived design rationale; for example `openspec/specs/ticket-management/spec.md` aligns with ticket code in `frontend/src/pages/Dashboard.jsx` and `backend/controllers/ticketController.js`.
- `prd.md` and `frontend/src/UI_PRD.md` provide higher-level UX direction that informs the styling layer in `frontend/src/index.css`.

---

*Structure analysis: 2026-03-31*
