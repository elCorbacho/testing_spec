# Roadmap

## Phase 1: Foundation (Design System and Shell)
**Goal**: Establish the shared design tokens, global reset, typography, and app shell that every other phase depends on.

**Key outcomes**:
- CSS variable token system in `frontend/src/index.css` (colors, spacing, shadows, motion, typography)
- Global reset removing generic defaults (zero radii, no soft shadows, noise/grid background)
- Serif + monospace font pairing with explicit fallback stacks
- App shell with sticky header, navigation, and active-state styling
- `:focus-visible` foundations and `prefers-reduced-motion` handling

**Requirements satisfied**: R1, R2, R3, NFR2

**Files involved**:
- `frontend/src/index.css`
- `frontend/index.html`
- `frontend/src/App.jsx`
- `frontend/src/components/Button.jsx`
- `frontend/src/components/TextInput.jsx`

**Status**: Implementation complete; verification pending.

---

## Phase 2: Form Experience
**Goal**: Deliver high-contrast, tactile forms for message and ticket submission using shared primitives.

**Key outcomes**:
- Message form (`/formulario`) rebuilt with shared TextInput/Button components
- Ticket form (`/nuevo-ticket`) rebuilt with shared TextInput/Button components
- Both forms share offset-shadow buttons, monospace labels, and visible focus states
- Accessible status messaging (aria-live, role="status") for success/error feedback
- aria-busy wiring for loading states

**Requirements satisfied**: R5, R8, NFR2

**Files involved**:
- `frontend/src/pages/Formulario.jsx`
- `frontend/src/pages/CrearTicket.jsx`
- `frontend/src/index.css`
- `frontend/src/components/TextInput.jsx`
- `frontend/src/components/Button.jsx`

**Status**: Implementation complete; verification pending.

---

## Phase 3: Dashboard (Data View)
**Goal**: Give admins an editorial, data-dense dashboard with asymmetric card layout and controlled motion.

**Key outcomes**:
- Dashboard metric cards with color-coded left strip indicators
- Filter controls using pill-style buttons
- Asymmetric CSS Grid for ticket cards (column-spanning for visual rhythm)
- Staggered reveal animation with CSS-only stagger-index calculation
- Reduced-motion-safe fallback (animations disabled)

**Requirements satisfied**: R7, R6, R8

**Files involved**:
- `frontend/src/pages/Dashboard.jsx`
- `frontend/src/index.css`

**Status**: Implementation complete; verification pending.

---

## Phase 4: Polish and Verification
**Goal**: Verify the complete redesign meets accessibility, performance, and responsiveness requirements.

**Key outcomes**:
- Custom font fallback behavior verified
- Contrast ratios confirmed for high-contrast palette
- Forced-colors fallback behavior verified
- Responsive QA at 320px, 640px, 960px, 1440px
- Lighthouse Accessibility >= 95 and Performance >= 95 on /, /formulario, /dashboard
- Reduced-motion verification for dashboard
- Cross-route visual consistency signoff across all 5 routes

**Requirements satisfied**: R9, R10, R8 (forced-colors), NFR3

**Verification evidence recorded in**: `specs/002-frontend-redesign/quickstart.md`

**Status**: Implementation ready; browser-dependent verification tasks remain open.

---

## Phase 5: Technical Debt (Future)
**Goal**: Address backend and architectural concerns identified during codebase mapping.

**Key areas**:
- Replace in-memory backend persistence with durable storage (repository/service pattern)
- Hydrate frontend context from backend GET endpoints on initial load
- Split monolithic `frontend/src/index.css` into scoped modules
- Tighten CORS policy for production environments
- Fix ticket list ordering to match spec (newest-first from backend)
- Separate server boot from socket binding for integration testing

**Requirements**: To be defined when this phase activates.

**Status**: Not started.
