# Coding Conventions

**Analysis Date:** 2026-03-31

## Naming Patterns

**Files:**
- Use `PascalCase.jsx` for React pages, reusable UI, and context files in `frontend/src/pages/`, `frontend/src/components/`, and `frontend/src/context/` such as `frontend/src/pages/Formulario.jsx`, `frontend/src/components/Button.jsx`, and `frontend/src/context/TicketsContext.jsx`.
- Use lowercase or lower-camel backend filenames for server entry points, routes, and controllers in `backend/` such as `backend/server.js`, `backend/routes/tickets.js`, and `backend/controllers/formularioController.js`.
- Use lowercase Markdown artifact names inside feature folders such as `specs/002-frontend-redesign/spec.md`, `specs/002-frontend-redesign/plan.md`, and `specs/002-frontend-redesign/tasks.md`.

**Functions:**
- Use camelCase for handlers, validators, hooks, and helpers: `validarFormulario`, `crearFormulario`, `cambiarEstadoTicket`, `handleSubmit`, `handleCambiarEstado`, `useMensajes`.
- Use `PascalCase` for React components and providers: `App`, `NavLink`, `Formulario`, `MensajesProvider`, `TicketsProvider`.

**Variables:**
- Use camelCase with Spanish domain names for application data: `formData`, `nuevoTicket`, `mensajes`, `ticketsFiltrados`, `errorValidacion` in `frontend/src/pages/Formulario.jsx` and `backend/controllers/ticketController.js`.
- Use descriptive booleans and state objects instead of abbreviations: `loading`, `status`, `isActive`, `statusCode`, `jsonBody`.

**Types:**
- No TypeScript types or runtime schema libraries are present in `frontend/` or `backend/`.
- Use in-file constant maps and arrays to model enumerations, for example `ESTADOS_VALIDOS` in `backend/controllers/ticketController.js` and `ESTADOS` plus `siguienteEstado` in `frontend/src/pages/Dashboard.jsx`.

## Code Style

**Formatting:**
- No formatter config is detected in `C:\Users\histo\proyecto_test` (`.prettierrc`, `biome.json`, and `eslint.config.*` are not present).
- Frontend files in `frontend/src/` follow semicolon-free ES module style with single quotes, trailing commas in multiline objects/props, and compact arrow functions.
- Backend files in `backend/` follow CommonJS style with semicolons and `module.exports`.
- CSS in `frontend/src/index.css` uses one selector block per concern, tokenized custom properties in `:root`, and multiline property formatting for layered backgrounds and transitions.

**Linting:**
- No repository lint command or lint configuration is defined in `frontend/package.json` or `backend/package.json`.
- Conventions are enforced socially through existing code shape and planning artifacts rather than automated lint rules.

## Import Organization

**Order:**
1. Framework or third-party imports first, for example `react` and `react-router-dom` in `frontend/src/App.jsx` and `frontend/src/main.jsx`.
2. Local project modules second, for example `./pages/Home`, `../context/MensajesContext`, and `./components/Button`.
3. Side-effect styles last, for example `./index.css` in `frontend/src/main.jsx`.

**Path Aliases:**
- No path aliases are configured in `frontend/vite.config.js` or any detected `tsconfig.json`.
- Use relative imports only, such as `../components/TextInput` and `./routes/tickets`.

## Error Handling

**Patterns:**
- Validate request payloads early and return immediately with JSON error objects in backend controllers, as shown in `backend/controllers/formularioController.js` and `backend/controllers/ticketController.js`.
- Keep response envelopes consistent within each controller: `success`, `message`, and optional `data`.
- In React forms, reset status first, perform client validation, then branch on `data.success` after `fetch`, as shown in `frontend/src/pages/Formulario.jsx` and `frontend/src/pages/CrearTicket.jsx`.
- In React context hooks, throw immediately when the provider is missing, as shown in `frontend/src/context/MensajesContext.jsx` and `frontend/src/context/TicketsContext.jsx`.
- Dashboard status updates log network failures with `console.error` but do not surface a user-facing error state in `frontend/src/pages/Dashboard.jsx`.

## Logging

**Framework:** console

**Patterns:**
- Use `console.log` for successful mutations in `backend/server.js`, `backend/controllers/formularioController.js`, `backend/controllers/ticketController.js`, `frontend/src/context/MensajesContext.jsx`, and `frontend/src/context/TicketsContext.jsx`.
- Use `console.error` only for dashboard patch failures in `frontend/src/pages/Dashboard.jsx`.
- No structured logger, log level abstraction, or test log suppression is present.

## Comments

**When to Comment:**
- Keep comments sparse and reserved for section markers only. Examples: `// Middleware` and `// Health check` in `backend/server.js`.
- Prefer expressive naming over explanatory comments across both `frontend/src/` and `backend/`.

**JSDoc/TSDoc:**
- Not used in the current codebase.

## Function Design

**Size:**
- Keep components and controllers as single-file units that own one route or one page. Typical examples are `frontend/src/pages/ListaMensajes.jsx` and `backend/controllers/formularioController.js`.
- Extract only the smallest reusable helpers inline when repetition appears, such as `validarFormulario` in `frontend/src/pages/Formulario.jsx` and `createMockResponse` in `backend/tests/formularioController.test.js`.

**Parameters:**
- Backend handlers accept raw Express `(req, res)` parameters.
- Reusable UI primitives destructure props at the signature and forward the rest, as shown in `frontend/src/components/Button.jsx` and `frontend/src/components/TextInput.jsx`.

**Return Values:**
- Backend handlers return `res.status(...).json(...)` directly.
- Context hooks return the resolved context object and throw on invalid usage.
- React components return JSX only and rely on local state plus context rather than custom hooks.

## Module Design

**Exports:**
- Frontend page and component modules default-export one primary component, for example `frontend/src/pages/Home.jsx` and `frontend/src/components/Button.jsx`.
- Frontend context modules named-export provider and hook pairs, for example `MensajesProvider` and `useMensajes` in `frontend/src/context/MensajesContext.jsx`.
- Backend controller modules export an object literal through `module.exports`, including private test reset hooks such as `__resetFormularios` in `backend/controllers/formularioController.js`.

**Barrel Files:**
- Not used. Import from concrete files directly.

## Workflow Conventions

**Specs and planning:**
- Start feature work with `spec.md`, `plan.md`, and `tasks.md` before implementation, per `C:\Users\histo\proyecto_test\.specify\memory\constitution.md`.
- Group tasks by user story and give each story an independent test path, following `C:\Users\histo\proyecto_test\.specify\templates\tasks-template.md`, `specs/001-add-rest-api/tasks.md`, and `specs/002-frontend-redesign/tasks.md`.
- Include exact file paths in task descriptions. The frontend redesign tasks consistently reference absolute paths in `specs/002-frontend-redesign/tasks.md`.
- Record required verification evidence in `quickstart.md` before closing work, per `C:\Users\histo\proyecto_test\.specify\memory\constitution.md` and `specs/002-frontend-redesign/quickstart.md`.

**Quality gates:**
- Frontend work uses constitution rules as hard constraints: shared visual language, accessibility, scope discipline, and documented verification in `C:\Users\histo\proyecto_test\.specify\memory\constitution.md`.
- Frontend plans define route-level Lighthouse targets and manual QA scope in `specs/002-frontend-redesign/plan.md`, `specs/002-frontend-redesign/contracts/ui-routes.md`, and `specs/002-frontend-redesign/data-model.md`.
- Backend planning expects independent HTTP verification and optional automated tests when requested, per `specs/001-add-rest-api/spec.md` and `C:\Users\histo\proyecto_test\.specify\templates\tasks-template.md`.

## Quality Signals and Gaps

- Use shared UI primitives and tokenized CSS rather than page-specific styling. `frontend/src/components/Button.jsx`, `frontend/src/components/TextInput.jsx`, and `frontend/src/index.css` are the current reference implementation.
- Keep frontend route structure and context providers intact unless a plan explicitly allows architectural change, per `specs/002-frontend-redesign/plan.md` and `C:\Users\histo\proyecto_test\.specify\memory\constitution.md`.
- Do not rely on automated linting or formatting; none is configured in `frontend/package.json`, `backend/package.json`, or root config files.
- Do not assume verification is complete just because code exists. `specs/002-frontend-redesign/tasks.md` still has unchecked audit and QA tasks `T023` through `T029`.
- Treat documentation carefully: `specs/001-add-rest-api/quickstart.md` documents endpoints such as `GET /api/tickets/1` and `PUT /api/tickets/1`, while the current backend code in `backend/routes/tickets.js` does not implement them yet.

## Reference Patterns

**Frontend component pattern:**
```jsx
function Button({ children, className = '', variant = 'primary', ...props }) {
  const classes = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ')
  const isDisabled = Boolean(props.disabled)

  return (
    <button className={classes} aria-disabled={isDisabled} {...props}>
      <span className="btn-label">{children}</span>
    </button>
  )
}
```

Source: `frontend/src/components/Button.jsx`

**Backend controller pattern:**
```js
const crearTicket = (req, res) => {
  const { titulo, descripcion, prioridad } = req.body;

  if (!titulo || !descripcion) {
    return res.status(400).json({
      success: false,
      message: 'Titulo y descripcion son requeridos',
    });
  }

  return res.status(201).json({
    success: true,
    message: 'Ticket creado correctamente',
    data: nuevoTicket,
  });
};
```

Adapted from `backend/controllers/ticketController.js`

---

*Convention analysis: 2026-03-31*
