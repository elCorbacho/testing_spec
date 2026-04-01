# Implementation Plan: Frontend UI Redesign (Neo-Brutalist)

**Branch**: `002-frontend-redesign` | **Date**: 2026-03-31 | **Spec**: `C:\Users\histo\proyecto_test\specs\002-frontend-redesign\spec.md`
**Input**: Feature specification from `C:\Users\histo\proyecto_test\specs\002-frontend-redesign\spec.md`

## Summary

Redesign the React/Vite frontend with a neo-brutalist visual system built on global CSS tokens, shared form primitives, route-level consistency, and CSS-only motion. The work covers the app shell, message and ticket forms, dashboard grid, and validation/audit guidance without changing backend behavior.

## Technical Context

**Language/Version**: JavaScript (ES modules) on React 18 + Vite 5  
**Primary Dependencies**: React, React DOM, React Router DOM, plain CSS with design tokens  
**Storage**: N/A for frontend UI layer; existing in-memory/backend APIs remain unchanged  
**Testing**: Manual route QA, keyboard/accessibility checks, Lighthouse audits for selected routes  
**Target Platform**: Modern desktop and mobile browsers  
**Project Type**: Web application frontend  
**Performance Goals**: Lighthouse Accessibility >= 95 and Performance >= 95 on `/`, `/formulario`, and `/dashboard`  
**Constraints**: No backend or schema changes; preserve existing routes/context providers; CSS-only staggered motion; support `prefers-reduced-motion`; high-contrast palette with one accent color  
**Scale/Scope**: 5 routes, 2 shared form primitives, global shell redesign, responsive support for 320px to 1440px+

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Shared frontend language is required: the redesign must use common tokens, reusable primitives, and the existing application shell consistently.
- Accessibility is mandatory: visible focus states, keyboard usability, readable contrast, and reduced-motion handling must be preserved.
- Scope discipline is enforced: this frontend-only feature must not change backend APIs or persistence.
- Verification before completion is required: manual QA and Lighthouse evidence must be documented before closing the feature.
- Gate status: PASS.

## Project Structure

### Documentation (this feature)

```text
specs/002-frontend-redesign/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-routes.md
└── tasks.md
```

### Source Code (repository root)

```text
frontend/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Button.jsx
│   │   └── TextInput.jsx
│   ├── context/
│   │   ├── MensajesContext.jsx
│   │   └── TicketsContext.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Formulario.jsx
│       ├── ListaMensajes.jsx
│       ├── CrearTicket.jsx
│       └── Dashboard.jsx
backend/
└── ... existing API unchanged
```

**Structure Decision**: Keep the existing React/Vite single-frontend structure and implement the redesign in `frontend/src/index.css`, `frontend/src/components/`, and `frontend/src/pages/`. The feature does not introduce a new `views/` layer.

## Phase 0: Research

- Confirm styling strategy for a distinctive but maintainable redesign.
- Define font loading, focus states, reduced-motion handling, and responsive verification scope.
- Resolve audit scope for Lighthouse and manual viewport QA.

## Phase 1: Design & Contracts

- Define UI-facing entities and validation expectations in `data-model.md`.
- Document route-level UI contracts and verification surfaces in `contracts/ui-routes.md`.
- Document manual validation flow and audit expectations in `quickstart.md`.
- Update agent context after design artifacts are generated.

## Post-Design Constitution Check

- Re-checked after design planning: the feature remains aligned with the constitution's frontend consistency, accessibility, and scope-discipline requirements.
- The planned verification flow in `quickstart.md` supports the constitution rule that completion requires documented QA and audit evidence.

## Complexity Tracking

No constitution violations require justification at this time.
