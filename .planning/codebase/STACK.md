# Technology Stack

**Analysis Date:** 2026-03-31

## Languages

**Primary:**
- JavaScript (CommonJS) - backend API and controllers in `backend/server.js`, `backend/routes/formulario.js`, `backend/routes/tickets.js`, `backend/controllers/formularioController.js`, and `backend/controllers/ticketController.js`
- JavaScript (ES modules + JSX) - frontend app shell, routing, context, and pages in `frontend/src/main.jsx`, `frontend/src/App.jsx`, and `frontend/src/pages/*.jsx`

**Secondary:**
- CSS - design tokens and page styling in `frontend/src/index.css`
- HTML - Vite entry document in `frontend/index.html`
- Markdown - product/spec artifacts in `prd.md`, `specs/`, and `openspec/`

## Runtime

**Environment:**
- Node.js runtime required by `backend/package.json` scripts (`node server.js`, `node --test tests/*.test.js`) and `frontend/package.json` Vite scripts
- Browser runtime for the React SPA mounted from `frontend/src/main.jsx`

**Package Manager:**
- npm - evidenced by `backend/package-lock.json` and `frontend/package-lock.json`
- Lockfile: present in `backend/package-lock.json` and `frontend/package-lock.json`

## Frameworks

**Core:**
- Express 4.x - REST API server and routing in `backend/package.json` and `backend/server.js`
- React 18 - client UI and stateful components in `frontend/package.json` and `frontend/src/main.jsx`
- React Router DOM 7 - client-side routing in `frontend/package.json` and `frontend/src/App.jsx`

**Testing:**
- Node built-in test runner - backend controller tests via `backend/package.json` script `node --test tests/*.test.js` and `backend/tests/formularioController.test.js`
- `node:assert/strict` - assertions in `backend/tests/formularioController.test.js`

**Build/Dev:**
- Vite 5 - frontend dev server, build, preview, and API proxy in `frontend/package.json` and `frontend/vite.config.js`
- `@vitejs/plugin-react` - React integration for Vite in `frontend/package.json` and `frontend/vite.config.js`

## Key Dependencies

**Critical:**
- `express` - HTTP server, routing, JSON middleware in `backend/package.json` and `backend/server.js`
- `cors` - cross-origin middleware enabled globally in `backend/package.json` and `backend/server.js`
- `react` - component model, hooks, and context in `frontend/package.json` and `frontend/src/context/*.jsx`
- `react-dom` - DOM bootstrap in `frontend/package.json` and `frontend/src/main.jsx`
- `react-router-dom` - navigation and route rendering in `frontend/package.json` and `frontend/src/App.jsx`

**Infrastructure:**
- `vite` - local frontend build/dev tooling in `frontend/package.json`
- `@vitejs/plugin-react` - JSX transform and React refresh support in `frontend/package.json`
- `@types/react` and `@types/react-dom` - installed dev typing packages in `frontend/package.json`; no TypeScript source files detected in the tracked app code

## Configuration

**Environment:**
- No tracked runtime environment variables are consumed by application code; no `process.env` or `import.meta.env` usage is detected in `backend/` or `frontend/src/`
- Environment file patterns are reserved and gitignored in `.gitignore:18`, `.gitignore:22`, and `.gitignore:24`
- Backend port is hard-coded to `3001` in `backend/server.js:7`
- Frontend dev server port is `5173` and `/api` is proxied to `http://localhost:3001` in `frontend/vite.config.js:6`

**Build:**
- Frontend build config lives in `frontend/vite.config.js`
- Frontend HTML entry lives in `frontend/index.html`
- Backend has no separate transpile or bundling config; it runs source directly from `backend/server.js`

## Platform Requirements

**Development:**
- Install backend deps in `backend/package.json` and frontend deps in `frontend/package.json`
- Run backend from `backend/server.js` on port `3001` and frontend via Vite on port `5173` using `frontend/vite.config.js`
- Internet access is needed for hosted fonts loaded from Google Fonts in `frontend/index.html:7`

**Production:**
- Deployment target is not explicitly configured; no Dockerfile, workflow, or hosting manifest is tracked in the repository root, `backend/`, or `frontend/`
- Current runtime shape is a split deployment: Express API from `backend/server.js` plus static/bundled SPA produced by Vite from `frontend/`

---

*Stack analysis: 2026-03-31*
