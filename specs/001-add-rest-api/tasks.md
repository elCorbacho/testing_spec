# Implementation Tasks: Add REST API Methods

**Branch**: `001-add-rest-api` | **Date**: 2026-03-31

## Implementation Strategy

**MVP Scope**: User Story 1 (P1) - Core CRUD operations
**Delivery**: Incremental per user story, each independently testable

## Phase 1: Setup

- [ ] T001 Review existing backend structure in backend/controllers and backend/routes
- [ ] T002 Verify Express and CORS are installed in backend/package.json

## Phase 2: Foundational

- [ ] T003 Create response helper utility for consistent response format in backend/utils/responseHelper.js
- [ ] T004 Add meta object (timestamp, version) to all responses

## Phase 3: User Story 1 - CRUD Operations (P1)

**Goal**: Expose all backend resources via RESTful CRUD endpoints
**Independent Test**: Can test all CRUD operations via HTTP requests without any frontend

### Implementation

- [ ] T005 [P] [US1] Add GET /api/tickets/:id endpoint in backend/controllers/ticketController.js
- [ ] T006 [P] [US1] Add PUT /api/tickets/:id endpoint in backend/controllers/ticketController.js
- [ ] T007 [P] [US1] Add DELETE /api/tickets/:id endpoint in backend/controllers/ticketController.js
- [ ] T008 [P] [US1] Add GET /api/formularios/:id endpoint in backend/controllers/formularioController.js
- [ ] T009 [P] [US1] Add PUT /api/formularios/:id endpoint in backend/controllers/formularioController.js
- [ ] T010 [P] [US1] Add DELETE /api/formularios/:id endpoint in backend/controllers/formularioController.js
- [ ] T011 [US1] Register new endpoints in backend/routes/tickets.js
- [ ] T012 [US1] Register new endpoints in backend/routes/formulario.js

### Integration Tests

- [ ] T013 [US1] Test GET /api/tickets/:id returns 404 for non-existent ID
- [ ] T014 [US1] Test GET /api/tickets/:id returns correct ticket data
- [ ] T015 [US1] Test PUT /api/tickets/:id updates and returns updated ticket
- [ ] T016 [US1] Test DELETE /api/tickets/:id removes ticket and returns confirmation
- [ ] T017 [US1] Test GET /api/formularios/:id returns 404 for non-existent ID
- [ ] T018 [US1] Test GET /api/formularios/:id returns correct formulario data
- [ ] T019 [US1] Test PUT /api/formularios/:id updates and returns updated formulario
- [ ] T020 [US1] Test DELETE /api/formularios/:id removes formulario and returns confirmation

## Phase 4: User Story 2 - Consistent Response Format (P2)

**Goal**: All API responses follow consistent structure with metadata
**Independent Test**: Can verify response structure across different endpoints

### Implementation

- [ ] T021 [P] [US2] Update ticketController.js to include meta object in all responses
- [ ] T022 [P] [US2] Update formularioController.js to include meta object in all responses
- [ ] T023 [US2] Add validation middleware for consistent error response format in backend/middleware/validation.js

### Integration Tests

- [ ] T024 [US2] Verify success responses contain {success, data, meta}
- [ ] T025 [US2] Verify error responses contain {success: false, error: {code, message}}
- [ ] T026 [US2] Verify meta includes timestamp and version for all responses

## Phase 5: User Story 3 - Pagination & Filtering (P3)

**Goal**: Support pagination and filtering on list endpoints
**Independent Test**: Can request paginated results with different page sizes

### Implementation

- [ ] T027 [P] [US3] Create pagination utility in backend/utils/pagination.js
- [ ] T028 [US3] Update GET /api/tickets to support page, pageSize, sort, order params
- [ ] T029 [US3] Update GET /api/formularios to support page, pageSize, sort, order params
- [ ] T030 [US3] Add query parameter validation (max pageSize: 100)

### Integration Tests

- [ ] T031 [US3] Test pagination returns correct total count and page info
- [ ] T032 [US3] Test pageSize limit of 100 is enforced
- [ ] T033 [US3] Test sort and order parameters work correctly

## Phase 6: Polish & Cross-Cutting

- [ ] T034 Verify all endpoints return appropriate HTTP status codes (200, 201, 400, 404, 500)
- [ ] T035 Fix duplicate route /formulario and /formularios (should only be /formularios)
- [ ] T036 Run npm test to verify existing tests still pass
- [ ] T037 Update quickstart.md with all new endpoint examples

## Dependencies

```
Phase 1 (Setup) ──► Phase 2 (Foundational) ──► Phase 3 (US1-CRUD)
                                                         │
                                                         ▼
                              Phase 5 (US3-Pagination) ◄──── Phase 4 (US2-Response Format)
```

## Parallel Opportunities

- T005-T010: Controller methods can be implemented in parallel (different files)
- T021-T022: Response format updates can be done in parallel
- T027-T029: Pagination for both endpoints can be done in parallel

## Summary

| User Story | Task Count | Independent Test |
|------------|------------|------------------|
| US1: CRUD Operations | 16 tasks | All CRUD via HTTP |
| US2: Response Format | 6 tasks | Response structure |
| US3: Pagination | 7 tasks | Paginated requests |
| Setup/Foundational | 4 tasks | - |
| Polish | 4 tasks | - |
| **Total** | **37 tasks** | |

**MVP (User Story 1 only)**: Tasks T001-T020 (20 tasks) - Core CRUD endpoints fully functional