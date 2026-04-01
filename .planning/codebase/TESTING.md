# Testing Patterns

**Analysis Date:** 2026-03-31

## Test Framework

**Runner:**
- Node.js native test runner via `node --test`.
- Config: no dedicated config file is detected; the command is defined inline in `backend/package.json`.

**Assertion Library:**
- `node:assert/strict` in `backend/tests/formularioController.test.js`.

**Run Commands:**
```bash
cd backend && npm test      # Run all current automated tests
Not detected               # Watch mode
Not detected               # Coverage
```

## Test File Organization

**Location:**
- Automated tests are separated under `backend/tests/`.
- No automated tests are detected under `frontend/`, repository-root `tests/`, or `openspec/`.

**Naming:**
- Use `*.test.js` for backend tests, for example `backend/tests/formularioController.test.js`.

**Structure:**
```text
backend/
├── tests/
│   └── formularioController.test.js
├── controllers/
├── routes/
└── server.js
```

## Test Structure

**Suite Organization:**
```js
const assert = require('node:assert/strict');
const { beforeEach, test } = require('node:test');

beforeEach(() => {
  __resetFormularios();
});

test('crearFormulario guarda un formulario valido', () => {
  const req = { body: { nombre: 'Ada Lovelace', email: 'ada@example.com', mensaje: 'Hola mundo' } };
  const res = createMockResponse();

  crearFormulario(req, res);

  assert.equal(res.statusCode, 201);
});
```

Adapted from `backend/tests/formularioController.test.js`

**Patterns:**
- Test controller functions directly instead of booting Express or making HTTP requests.
- Build minimal `req` objects inline per test case.
- Use a local response double with chainable `status()` and `json()` methods.
- Reset in-memory module state in `beforeEach()` using exported test-only reset hooks.
- Prefer explicit field assertions over snapshot-style comparisons.

## Mocking

**Framework:**
- No dedicated mocking library is used.

**Patterns:**
```js
const createMockResponse = () => {
  let statusCode = 200;
  let jsonBody;

  return {
    status(code) {
      statusCode = code;
      return this;
    },
    json(payload) {
      jsonBody = payload;
      return this;
    },
    get statusCode() {
      return statusCode;
    },
    get jsonBody() {
      return jsonBody;
    },
  };
};
```

Source: `backend/tests/formularioController.test.js`

**What to Mock:**
- Mock `res` explicitly for controller tests.
- Stub only the request shape each controller branch needs.

**What NOT to Mock:**
- Do not mock controller logic itself.
- Do not mock the in-memory arrays; tests reset and exercise the real module state via `__resetFormularios`.

## Fixtures and Factories

**Test Data:**
```js
const req = {
  body: {
    nombre: 'Grace Hopper',
    email: 'grace@example.com',
    mensaje: 'Compiladores para todos',
  },
};
```

Source pattern: `backend/tests/formularioController.test.js`

**Location:**
- Fixtures are inline inside each test.
- No shared factories, builders, or fixture directories are present.

## Coverage

**Requirements:**
- No enforced coverage threshold is detected in code or package scripts.
- Frontend redesign quality targets focus on route QA and Lighthouse scores rather than line coverage, per `specs/002-frontend-redesign/plan.md` and `specs/002-frontend-redesign/quickstart.md`.

**View Coverage:**
```bash
Not detected
```

## Test Types

**Unit Tests:**
- Present for backend controller logic only in `backend/tests/formularioController.test.js`.
- Scope covers valid create flow, invalid email validation, and list retrieval after a create.

**Integration Tests:**
- Planned but not implemented for REST API work. `specs/001-add-rest-api/tasks.md` defines HTTP-oriented tasks `T013` through `T020` and `T024` through `T033`, but no corresponding files exist in `backend/tests/`.

**E2E Tests:**
- Not used.

## Manual Verification Workflow

**Frontend QA source of truth:**
- Use `specs/002-frontend-redesign/quickstart.md` as the current verification checklist.
- Verify routes `/`, `/formulario`, `/nuevo-ticket`, `/dashboard`, and `/lista` per `specs/002-frontend-redesign/contracts/ui-routes.md`.
- Test widths `320px`, `640px`, `960px`, and `1440px`.
- Record route, viewport, tested state, Lighthouse scores, and reproduction notes in `specs/002-frontend-redesign/quickstart.md`.

**Required audits:**
- Run Lighthouse on `/`, `/formulario`, and `/dashboard` with thresholds `Accessibility >= 95` and `Performance >= 95`, per `specs/002-frontend-redesign/spec.md` and `specs/002-frontend-redesign/plan.md`.
- Re-check keyboard focus, forced-colors behavior, and `prefers-reduced-motion` handling because `frontend/src/index.css` implements all three.

## Common Patterns

**Async Testing:**
```js
test('crearFormulario guarda un formulario valido', () => {
  crearFormulario(req, res);
  assert.equal(res.statusCode, 201);
});
```

- Current automated tests are synchronous because controller methods do not await external services.
- Async `fetch` flows in `frontend/src/pages/Formulario.jsx`, `frontend/src/pages/CrearTicket.jsx`, and `frontend/src/pages/Dashboard.jsx` are not covered by automated tests.

**Error Testing:**
```js
test('crearFormulario rechaza emails invalidos', () => {
  crearFormulario(req, res);

  assert.equal(res.statusCode, 400);
  assert.deepEqual(res.jsonBody, {
    success: false,
    message: 'Email invalido',
  });
});
```

Adapted from `backend/tests/formularioController.test.js`

## Verification Signals

- `cd backend && npm test` passes on 2026-03-31 with 3 passing tests and 0 failures from `backend/tests/formularioController.test.js`.
- The passing test run prints mutation logs from `backend/controllers/formularioController.js`, so test output is not clean.
- `specs/002-frontend-redesign/tasks.md` marks foundational implementation tasks complete, but verification tasks `T023` through `T029` remain unchecked.
- Manual QA is part of the constitution, not an optional extra, per `C:\Users\histo\proyecto_test\.specify\memory\constitution.md`.

## Test Coverage Gaps

- No automated coverage exists for `backend/controllers/ticketController.js`, `backend/routes/tickets.js`, `backend/routes/formulario.js`, or `backend/server.js`.
- No frontend component, context, route, accessibility, or interaction tests exist under `frontend/`.
- No automated test verifies `frontend/src/index.css` behaviors such as `:focus-visible`, `@media (prefers-reduced-motion: reduce)`, or `@media (forced-colors: active)`.
- No HTTP-level integration tests verify the actual API surface mounted by `backend/server.js`.
- No artifact currently records completed Lighthouse results or manual QA evidence inside `specs/002-frontend-redesign/quickstart.md`.
- `specs/001-add-rest-api/quickstart.md` describes API behaviors beyond current implementation, so using it as a verification script would fail against today's backend.

---

*Testing analysis: 2026-03-31*
