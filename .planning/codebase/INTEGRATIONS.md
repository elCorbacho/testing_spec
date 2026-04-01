# External Integrations

**Analysis Date:** 2026-03-31

## APIs & External Services

**Internal HTTP APIs:**
- Express REST API - frontend pages call backend routes under `/api`
  - Client usage: `frontend/src/pages/Formulario.jsx`, `frontend/src/pages/CrearTicket.jsx`, `frontend/src/pages/Dashboard.jsx`
  - Server routes: `backend/routes/formulario.js`, `backend/routes/tickets.js`
  - Proxy path: `frontend/vite.config.js` forwards `/api` to `http://localhost:3001`

**External UI Assets:**
- Google Fonts - typography assets are loaded from `fonts.googleapis.com` and `fonts.gstatic.com`
  - Integration point: `frontend/index.html:7`
  - SDK/Client: Browser `<link rel="preconnect">` and stylesheet import
  - Auth: None

## Data Storage

**Databases:**
- None detected
  - Application state is stored in in-memory arrays inside `backend/controllers/formularioController.js` and `backend/controllers/ticketController.js`
  - Frontend view state is held in React context providers in `frontend/src/context/MensajesContext.jsx` and `frontend/src/context/TicketsContext.jsx`

**File Storage:**
- Local repository assets only; no storage SDK or upload flow is detected in `backend/` or `frontend/src/`

**Caching:**
- None detected; no cache layer, Redis client, or browser persistence API usage is present in `backend/` or `frontend/src/`

## Authentication & Identity

**Auth Provider:**
- None detected
  - Implementation: No auth middleware, login routes, tokens, sessions, or identity SDKs are present in `backend/server.js`, `backend/routes/`, or `frontend/src/`

## Monitoring & Observability

**Error Tracking:**
- None detected; no Sentry, Datadog, or similar client/server SDK is present in `backend/package.json` or `frontend/package.json`

**Logs:**
- Console logging only
  - Backend logs server start and created records in `backend/server.js:21`, `backend/controllers/formularioController.js:36`, and `backend/controllers/ticketController.js:26`
  - Frontend logs context updates and dashboard PATCH failures in `frontend/src/context/MensajesContext.jsx:9`, `frontend/src/context/TicketsContext.jsx:9`, and `frontend/src/pages/Dashboard.jsx:44`

## CI/CD & Deployment

**Hosting:**
- Not detected; the repo contains no platform-specific deployment config in the root, `backend/`, `frontend/`, or `.github/workflows/`

**CI Pipeline:**
- None detected; `.github/workflows/` is absent

## Environment Configuration

**Required env vars:**
- None detected in tracked application code; no `process.env` or `import.meta.env` references are present in `backend/` or `frontend/src/`

**Secrets location:**
- `.env` patterns are reserved and ignored by git in `.gitignore:18` through `.gitignore:25`
- No tracked secret or credential files are detected in the repository root, `backend/`, or `frontend/`

## Webhooks & Callbacks

**Incoming:**
- None detected; backend exposes standard app routes only in `backend/routes/formulario.js`, `backend/routes/tickets.js`, and the health endpoint in `backend/server.js:17`

**Outgoing:**
- Browser-initiated calls from the frontend to the local backend API
  - `POST /api/formulario` from `frontend/src/pages/Formulario.jsx:47`
  - `POST /api/tickets` from `frontend/src/pages/CrearTicket.jsx:33`
  - `PATCH /api/tickets/:id/estado` from `frontend/src/pages/Dashboard.jsx:32`

---

*Integration audit: 2026-03-31*
