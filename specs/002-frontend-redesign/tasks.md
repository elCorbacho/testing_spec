# Tasks: Frontend UI Redesign (Neo-Brutalist)

**Input**: Design documents from `C:\Users\histo\proyecto_test\specs\002-frontend-redesign\`
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/ui-routes.md`, `quickstart.md`

**Tests**: Automated tests are not explicitly requested in the feature spec. Verification tasks use manual QA, keyboard checks, reduced-motion checks, and Lighthouse audits defined in `quickstart.md`.

**Organization**: Tasks are grouped by user story to enable independent implementation and verification.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (`US1`, `US2`, `US3`)
- Every task includes an exact file path

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Align feature docs and frontend entry points with the redesign plan.

- [ ] T001 Reconcile route and component targets in `C:\Users\histo\proyecto_test\specs\002-frontend-redesign\plan.md` and `C:\Users\histo\proyecto_test\specs\002-frontend-redesign\contracts\ui-routes.md`
- [ ] T002 Review frontend entry points and route shell in `C:\Users\histo\proyecto_test\frontend\src\main.jsx` and `C:\Users\histo\proyecto_test\frontend\src\App.jsx`
- [ ] T003 [P] Review existing form and dashboard surfaces in `C:\Users\histo\proyecto_test\frontend\src\pages\Formulario.jsx`, `C:\Users\histo\proyecto_test\frontend\src\pages\CrearTicket.jsx`, and `C:\Users\histo\proyecto_test\frontend\src\pages\Dashboard.jsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared design system and shell used by all user stories.

**⚠️ CRITICAL**: No user story work should start until this phase is complete.

- [ ] T004 Define the global design token system, motion tokens, and brutalist reset in `C:\Users\histo\proyecto_test\frontend\src\index.css`
- [ ] T005 Configure heading/body font loading and fallback strategy in `C:\Users\histo\proyecto_test\frontend\index.html` and `C:\Users\histo\proyecto_test\frontend\src\index.css`
- [ ] T006 [P] Implement shared button primitive variants in `C:\Users\histo\proyecto_test\frontend\src\components\Button.jsx`
- [ ] T007 [P] Implement shared text/select/textarea primitive behavior in `C:\Users\histo\proyecto_test\frontend\src\components\TextInput.jsx`
- [ ] T008 Implement the shared app shell, sticky header, and navigation states in `C:\Users\histo\proyecto_test\frontend\src\App.jsx` and `C:\Users\histo\proyecto_test\frontend\src\index.css`
- [ ] T009 Implement accessibility foundations for `:focus-visible`, status messaging, and `prefers-reduced-motion` handling in `C:\Users\histo\proyecto_test\frontend\src\index.css`

**Checkpoint**: Shared tokens, primitives, shell, and accessibility foundations are ready for story work.

---

## Phase 3: User Story 1 - Apply Global Brutalist Theme & Tokens (Priority: P1) 🎯 MVP

**Goal**: Make the entire application feel visually distinct through the new shell, typography, surfaces, and global layout language.

**Independent Test**: Load `/` and one secondary route, then verify the shell, typography, hard edges, noise/grid background, and accent usage match the spec without checking form-specific interactions.

### Implementation for User Story 1

- [ ] T010 [US1] Redesign the landing page action-card layout in `C:\Users\histo\proyecto_test\frontend\src\pages\Home.jsx` and `C:\Users\histo\proyecto_test\frontend\src\index.css`
- [ ] T011 [P] [US1] Restyle message list cards and empty states in `C:\Users\histo\proyecto_test\frontend\src\pages\ListaMensajes.jsx` and `C:\Users\histo\proyecto_test\frontend\src\index.css`
- [ ] T012 [US1] Ensure shared route-level page headers and spacing remain consistent across `C:\Users\histo\proyecto_test\frontend\src\pages\Home.jsx`, `C:\Users\histo\proyecto_test\frontend\src\pages\Formulario.jsx`, `C:\Users\histo\proyecto_test\frontend\src\pages\CrearTicket.jsx`, `C:\Users\histo\proyecto_test\frontend\src\pages\ListaMensajes.jsx`, and `C:\Users\histo\proyecto_test\frontend\src\pages\Dashboard.jsx`
- [ ] T013 [US1] Verify the global token system is applied consistently across shell, cards, and typography in `C:\Users\histo\proyecto_test\frontend\src\index.css`

**Checkpoint**: User Story 1 is complete when the shell and non-form pages already communicate the neo-brutalist identity.

---

## Phase 4: User Story 2 - Redesign Message and Ticket Submission Forms (Priority: P2)

**Goal**: Deliver a high-contrast, tactile form experience for message and ticket submission using shared primitives.

**Independent Test**: Navigate to `/formulario` and `/nuevo-ticket`, tab through all controls, and verify labels, focus states, shadows, and status feedback without depending on dashboard behavior.

### Implementation for User Story 2

- [ ] T014 [P] [US2] Rebuild the message form with shared primitives in `C:\Users\histo\proyecto_test\frontend\src\pages\Formulario.jsx`
- [ ] T015 [P] [US2] Rebuild the ticket form with shared primitives in `C:\Users\histo\proyecto_test\frontend\src\pages\CrearTicket.jsx`
- [ ] T016 [US2] Align form field, button, select, and feedback styling for both forms in `C:\Users\histo\proyecto_test\frontend\src\index.css`
- [ ] T017 [US2] Preserve accessible label, status, and disabled/loading behavior in `C:\Users\histo\proyecto_test\frontend\src\pages\Formulario.jsx`, `C:\Users\histo\proyecto_test\frontend\src\pages\CrearTicket.jsx`, `C:\Users\histo\proyecto_test\frontend\src\components\TextInput.jsx`, and `C:\Users\histo\proyecto_test\frontend\src\components\Button.jsx`

**Checkpoint**: User Story 2 is complete when both forms feel consistent, readable, and keyboard-friendly on their own.

---

## Phase 5: User Story 3 - Redesign Ticket List View with Asymmetric Grid (Priority: P3)

**Goal**: Give admins a data-dense, editorial dashboard with asymmetric card layout and controlled motion.

**Independent Test**: Open `/dashboard` with ticket data and verify metric cards, filter controls, asymmetric card layout, and staggered animation behavior independent of form submission flows.

### Implementation for User Story 3

- [ ] T018 [US3] Redesign dashboard metric cards, filter controls, and ticket card hierarchy in `C:\Users\histo\proyecto_test\frontend\src\pages\Dashboard.jsx` and `C:\Users\histo\proyecto_test\frontend\src\index.css`
- [ ] T019 [US3] Implement asymmetric dashboard grid behavior and responsive reflow in `C:\Users\histo\proyecto_test\frontend\src\index.css`
- [ ] T020 [US3] Implement staggered reveal timing and reduced-motion-safe fallback for dashboard cards in `C:\Users\histo\proyecto_test\frontend\src\pages\Dashboard.jsx` and `C:\Users\histo\proyecto_test\frontend\src\index.css`
- [ ] T021 [US3] Preserve ticket status interactions and readability with the new styling in `C:\Users\histo\proyecto_test\frontend\src\pages\Dashboard.jsx`

**Checkpoint**: User Story 3 is complete when the admin dashboard is independently usable and visually aligned with the redesign.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finish verification, edge-case handling, and cross-story consistency.

- [ ] T022 [P] Implement and verify custom font fallback behavior in `C:\Users\histo\proyecto_test\frontend\index.html` and `C:\Users\histo\proyecto_test\frontend\src\index.css`
- [ ] T023 [P] Verify contrast ratios, visible focus states, and forced-colors behavior across key routes in `C:\Users\histo\proyecto_test\specs\002-frontend-redesign\quickstart.md`
- [ ] T024 Implement responsive QA fixes for `320px`, `640px`, `960px`, and `1440px` in `C:\Users\histo\proyecto_test\frontend\src\index.css`
- [ ] T025 Run manual route verification and record findings in `C:\Users\histo\proyecto_test\specs\002-frontend-redesign\quickstart.md`
- [ ] T026 Run Lighthouse audits for `/`, `/formulario`, and `/dashboard` and record results in `C:\Users\histo\proyecto_test\specs\002-frontend-redesign\quickstart.md`
- [ ] T027 Implement remediation fixes for any Lighthouse score below 95 in `C:\Users\histo\proyecto_test\frontend\src\index.css`, `C:\Users\histo\proyecto_test\frontend\src\App.jsx`, and affected files under `C:\Users\histo\proyecto_test\frontend\src\pages\`
- [ ] T028 Run reduced-motion verification for `/dashboard` and record findings in `C:\Users\histo\proyecto_test\specs\002-frontend-redesign\quickstart.md`
- [ ] T029 Run cross-route visual consistency signoff for `/`, `/formulario`, `/lista`, `/nuevo-ticket`, and `/dashboard` in `C:\Users\histo\proyecto_test\specs\002-frontend-redesign\quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup completion and blocks all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **User Story 2 (Phase 4)**: Depends on Foundational completion; can proceed after US1 if shared styling needs stabilization
- **User Story 3 (Phase 5)**: Depends on Foundational completion; should follow US1 because it builds on the global shell and grid language
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **US1 (P1)**: No dependency on other stories after Foundation
- **US2 (P2)**: Reuses shared primitives from Foundation and should align with US1 shell styling
- **US3 (P3)**: Reuses shared shell, card language, and motion rules from Foundation/US1

### Parallel Opportunities

- `T006` and `T007` can run in parallel after token decisions are clear
- `T011` can run in parallel with `T010` once the shell is stable
- `T014` and `T015` can run in parallel because they touch different page files
- `T022` and `T023` can run in parallel during polish
- `T028` and `T029` can run in parallel after responsive fixes are complete

---

## Parallel Example: User Story 2

```bash
Task: "Rebuild the message form with shared primitives in C:\Users\histo\proyecto_test\frontend\src\pages\Formulario.jsx"
Task: "Rebuild the ticket form with shared primitives in C:\Users\histo\proyecto_test\frontend\src\pages\CrearTicket.jsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate the global shell and route identity on `/` and `/lista`

### Incremental Delivery

1. Setup + Foundational establish the shared design system
2. Add User Story 1 for the global visual identity
3. Add User Story 2 for the form experience
4. Add User Story 3 for the admin dashboard experience
5. Finish with verification and audit recording in `quickstart.md`

### Suggested MVP Scope

- **MVP**: Phase 1 + Phase 2 + Phase 3 (User Story 1)
- This delivers a visible redesign foundation without waiting for every interaction surface

---

## Notes

- All tasks follow the required checklist format with checkbox, ID, optional markers, story labels, and exact file paths.
- Manual QA and Lighthouse evidence should be recorded in `C:\Users\histo\proyecto_test\specs\002-frontend-redesign\quickstart.md`.
- If Lighthouse scores fail the required threshold, complete `T027` before closing the feature.
