# Architecture

**Analysis Date:** 2026-03-31

## Pattern Overview

**Overall:** Split frontend/backend monorepo with a React SPA consuming a small Express JSON API, plus parallel spec artifacts under `specs/` and `openspec/` that document and drive changes.

**Key Characteristics:**
- Keep browser UI in `frontend/src/` and HTTP handling in `backend/`; there is no shared runtime package between them.
- Use lightweight layering: route shell -> page components -> shared primitives/context on the frontend, and server -> routes -> controllers -> in-memory arrays on the backend.
- Keep product/change intent outside runtime code in `prd.md`, `specs/*`, and `openspec/*`; implementation paths in those docs match the live source tree.

## Layers

**Frontend Entry + Shell Layer:**
- Purpose: Boot the SPA, install app-wide providers, and define route-level navigation.
- Location: `frontend/src/main.jsx`, `frontend/src/App.jsx`, `frontend/index.html`, `frontend/src/index.css`
- Contains: React root render, `BrowserRouter`, shared header/nav, global CSS tokens, responsive and accessibility rules.
- Depends on: React, React Router, page modules, context providers, Vite dev server proxy in `frontend/vite.config.js`.
- Used by: The browser entry point from `frontend/index.html`.

**Frontend Page Layer:**
- Purpose: Implement each route's screen-level behavior.
- Location: `frontend/src/pages/`
- Contains: `Home.jsx`, `Formulario.jsx`, `ListaMensajes.jsx`, `CrearTicket.jsx`, `Dashboard.jsx`.
- Depends on: Shared components in `frontend/src/components/`, context hooks in `frontend/src/context/`, and `fetch('/api/...')` calls to the backend.
- Used by: Route declarations in `frontend/src/App.jsx`.

**Frontend Shared UI Layer:**
- Purpose: Reuse common form primitives instead of duplicating raw controls.
- Location: `frontend/src/components/Button.jsx`, `frontend/src/components/TextInput.jsx`
- Contains: Styled button and input/textarea/select wrapper components.
- Depends on: Global class names defined in `frontend/src/index.css`.
- Used by: `frontend/src/pages/Formulario.jsx` and `frontend/src/pages/CrearTicket.jsx`.

**Frontend Client State Layer:**
- Purpose: Hold message and ticket collections in SPA memory and expose mutation helpers.
- Location: `frontend/src/context/MensajesContext.jsx`, `frontend/src/context/TicketsContext.jsx`
- Contains: `createContext`, provider components, `useMensajes`, `useTickets`, local `useState` arrays, and update helpers.
- Depends on: React hooks only.
- Used by: `frontend/src/main.jsx` wraps the app with both providers; pages consume the hooks.

**Backend HTTP Layer:**
- Purpose: Start the API server, install middleware, and mount resource routers.
- Location: `backend/server.js`
- Contains: Express app creation, `cors()`, `express.json()`, `/health`, and `/api` route registration.
- Depends on: `backend/routes/formulario.js`, `backend/routes/tickets.js`, Express, CORS.
- Used by: `npm start` / `npm run dev` from `backend/package.json`.

**Backend Routing Layer:**
- Purpose: Map HTTP verbs and paths to controller functions.
- Location: `backend/routes/formulario.js`, `backend/routes/tickets.js`
- Contains: `router.post`, `router.get`, `router.patch` handlers.
- Depends on: Controller exports from `backend/controllers/formularioController.js` and `backend/controllers/ticketController.js`.
- Used by: `backend/server.js`.

**Backend Controller + In-Memory Data Layer:**
- Purpose: Validate input, mutate data, and shape JSON responses.
- Location: `backend/controllers/formularioController.js`, `backend/controllers/ticketController.js`
- Contains: Module-scoped arrays (`formularios`, `tickets`), validation logic, create/list/update handlers, and test-only reset helpers.
- Depends on: Express `req`/`res` objects only; there is no database, service layer, or repository abstraction.
- Used by: Backend route modules and the controller-level test in `backend/tests/formularioController.test.js`.

**Specification / Planning Layer:**
- Purpose: Capture requirements, plans, contracts, and archived design decisions outside runtime code.
- Location: `prd.md`, `specs/001-add-rest-api/`, `specs/002-frontend-redesign/`, `openspec/specs/`, `openspec/changes/archive/`, `.specify/templates/`
- Contains: PRD, feature specs, plans, tasks, contracts, archived OpenSpec proposals/designs.
- Depends on: Project conventions rather than runtime imports.
- Used by: Humans and agent workflows to decide what code to add or change.

## Data Flow

**Message Submission Flow:**

1. `frontend/src/pages/Formulario.jsx` validates local form state and submits `POST /api/formulario`.
2. Vite proxies `/api` to `http://localhost:3001` via `frontend/vite.config.js`; Express receives the request in `backend/server.js` and `backend/routes/formulario.js`.
3. `backend/controllers/formularioController.js` validates input, appends a new object to the in-memory `formularios` array, and returns `{ success, message, data }`.
4. `frontend/src/pages/Formulario.jsx` pushes the returned object into `MensajesContext` with `agregarMensaje`; `frontend/src/pages/ListaMensajes.jsx` renders that provider state.

**Ticket Creation and Dashboard Flow:**

1. `frontend/src/pages/CrearTicket.jsx` submits `POST /api/tickets` and, on success, calls `agregarTicket` from `frontend/src/context/TicketsContext.jsx`.
2. `backend/routes/tickets.js` forwards the request to `backend/controllers/ticketController.js`, which creates a ticket with default state `abierto` in the module-scoped `tickets` array.
3. `frontend/src/pages/Dashboard.jsx` derives metrics and filters from `tickets` in context using `useMemo`.
4. When the user clicks the status button, `frontend/src/pages/Dashboard.jsx` sends `PATCH /api/tickets/:id/estado`; on success it mirrors the change locally through `actualizarEstadoTicket`.

**Control and Documentation Flow:**

1. Product/design intent is captured in `prd.md` and `frontend/src/UI_PRD.md`.
2. Feature-scoped implementation guidance lives in `specs/001-add-rest-api/*` and `specs/002-frontend-redesign/*`.
3. OpenSpec keeps a parallel requirement/archive history in `openspec/specs/ticket-management/spec.md` and `openspec/changes/archive/*`.
4. The runtime code in `frontend/` and `backend/` reflects those artifacts, but the docs are not generated from code at runtime.

**State Management:**
- Use route-local `useState` for form inputs and filters in `frontend/src/pages/Formulario.jsx`, `frontend/src/pages/CrearTicket.jsx`, and `frontend/src/pages/Dashboard.jsx`.
- Use Context API for cross-route client memory in `frontend/src/context/MensajesContext.jsx` and `frontend/src/context/TicketsContext.jsx`.
- Use module-level arrays in `backend/controllers/formularioController.js` and `backend/controllers/ticketController.js` for server-side storage.
- Do not rely on backend hydration on page load today; pages render context state only, and no frontend file calls `GET /api/formulario` or `GET /api/tickets` during mount.

## Key Abstractions

**Route-Oriented SPA Shell:**
- Purpose: Centralize navigation and page composition.
- Examples: `frontend/src/App.jsx`, `frontend/src/pages/Home.jsx`, `frontend/src/pages/Dashboard.jsx`
- Pattern: One top-level router with route components, no nested layout files.

**Context Per Domain Entity:**
- Purpose: Keep messages and tickets isolated while sharing state across routes.
- Examples: `frontend/src/context/MensajesContext.jsx`, `frontend/src/context/TicketsContext.jsx`
- Pattern: Separate provider/hook pair per entity with memoized value objects.

**Controller-Owned Resource Store:**
- Purpose: Keep demo persistence trivial.
- Examples: `backend/controllers/formularioController.js`, `backend/controllers/ticketController.js`
- Pattern: Module-scoped array plus handler functions exported directly to routes.

**Global CSS Token System:**
- Purpose: Apply one visual language across every route and primitive.
- Examples: `frontend/src/index.css`, `frontend/index.html`
- Pattern: Single global stylesheet with CSS custom properties, layout utilities, interaction states, reduced-motion and forced-colors support.

**Spec-Driven Change Artifacts:**
- Purpose: Track intended work separately from source files.
- Examples: `specs/002-frontend-redesign/plan.md`, `specs/001-add-rest-api/contracts/api.md`, `openspec/changes/archive/2026-03-31-ui-redesign/design.md`
- Pattern: Feature folder per change with spec/plan/tasks/contracts, plus archived OpenSpec change packs.

## Entry Points

**Frontend Browser Entry:**
- Location: `frontend/index.html`
- Triggers: Vite serves the page in dev/build preview.
- Responsibilities: Load web fonts, create the `#root` mount node, and import `frontend/src/main.jsx`.

**Frontend React Root:**
- Location: `frontend/src/main.jsx`
- Triggers: Browser module execution from `frontend/index.html`.
- Responsibilities: Create the React root and wrap the app with `MensajesProvider` and `TicketsProvider`.

**Frontend Route Shell:**
- Location: `frontend/src/App.jsx`
- Triggers: Rendered by `frontend/src/main.jsx`.
- Responsibilities: Mount `BrowserRouter`, render the sticky header, and map URLs to page components.

**Backend Server Process:**
- Location: `backend/server.js`
- Triggers: `npm start` or `npm run dev` in `backend/package.json`.
- Responsibilities: Start Express on port `3001`, expose `/health`, and mount `/api` resources.

**Spec Entry Points:**
- Location: `prd.md`, `specs/`, `openspec/`
- Triggers: Planning and documentation workflows.
- Responsibilities: Define requirements, contracts, tasks, and archived design rationale that reference the live code locations.

## Error Handling

**Strategy:** Inline validation and direct JSON responses in controllers/pages; there is no centralized error middleware or shared response helper.

**Patterns:**
- Backend handlers return `400` and `404` directly from controllers, for example in `backend/controllers/formularioController.js` and `backend/controllers/ticketController.js`.
- Frontend pages set local status banners for expected failures in `frontend/src/pages/Formulario.jsx` and `frontend/src/pages/CrearTicket.jsx`.
- Dashboard status changes log to `console.error` in `frontend/src/pages/Dashboard.jsx` and do not surface a user-facing error state.

## Cross-Cutting Concerns

**Logging:** Use `console.log` in `backend/controllers/formularioController.js`, `backend/controllers/ticketController.js`, `frontend/src/context/MensajesContext.jsx`, and `frontend/src/context/TicketsContext.jsx`; use `console.error` in `frontend/src/pages/Dashboard.jsx` for failed status updates.

**Validation:** Duplicate request validation lives in `frontend/src/pages/Formulario.jsx`, `frontend/src/pages/CrearTicket.jsx`, and the backend controllers; there is no shared validation module across runtimes.

**Authentication:** Not detected in `frontend/` or `backend/`; specs such as `specs/001-add-rest-api/spec.md` explicitly treat auth as out of scope.

---

*Architecture analysis: 2026-03-31*
