# Requirements

## Functional Requirements

### R1: Design Token System
The frontend MUST implement a custom CSS-variable design token system (colors, typography, spacing, shadows, motion) that enforces the neo-brutalist aesthetic across all components and routes.
- Acceptance: All five primary routes use shared tokens without route-specific fallback styling.

### R2: Font Pairing
The UI MUST use a bold serif for headings and a monospace font for labels/data, with explicit fallback stacks.
- Acceptance: Font-family declarations use token variables; graceful degradation to serif/monospace system fonts.

### R3: Global Reset
The system MUST remove all generic UI defaults: zero border radii, no soft shadows, no standard sans-serif system fonts, and a noise/grid background applied globally.
- Acceptance: Lighthouse audit confirms no generic defaults on key routes.

### R4: Offset Shadows
Buttons, cards, and form surfaces MUST use sharp, solid offset box-shadows instead of soft blur shadows.
- Acceptance: Visual inspection confirms 4px offset shadows on interactive surfaces.

### R5: Form Styling
Form inputs MUST have thick explicit borders, custom focus states (background shift or offset shadow), and monospace labels.
- Acceptance: Keyboard navigation shows visible custom focus states on all form controls.

### R6: Staggered Animations
Ticket cards MUST reveal with staggered CSS-only load animations using snappy easing (cubic-bezier) and MUST gracefully degrade when reduced motion is preferred.
- Acceptance: prefers-reduced-motion disables animations without layout break.

### R7: Asymmetric Grid
The dashboard MUST use an asymmetric CSS Grid layout for ticket cards instead of a uniform list.
- Acceptance: Cards use column-spanning for visual rhythm at desktop widths.

### R8: Accessibility
The UI MUST maintain visible focus states, keyboard usability, readable contrast, reduced-motion support, and forced-colors resilience.
- Acceptance: Lighthouse Accessibility >= 95; forced-colors fallback preserves borders and text.

### R9: Lighthouse Thresholds
The UI MUST meet Lighthouse Accessibility >= 95 and Performance >= 95 on /, /formulario, and /dashboard.
- Acceptance: Browser audit screenshots recorded in quickstart.md.

### R10: Responsive Integrity
The UI MUST remain readable and functional at 320px, 640px, 960px, and 1440px widths with no horizontal overflow.
- Acceptance: Manual check at each breakpoint confirms no clipping or overflow.

## Non-Functional Requirements

### NFR1: Scope Discipline
Frontend-only feature; no backend API, persistence, or schema changes are permitted.

### NFR2: Shared Visual Language
All routes share the same header, navigation, token system, and form primitive styling.

### NFR3: Verification Before Completion
No feature is considered complete until manual QA and any required Lighthouse evidence are documented.

### NFR4: CSS-Only Motion
Animations must use CSS keyframes and transitions; no JS animation libraries are permitted.

## Acceptance Criteria Summary

| ID | Requirement | Status |
|----|-------------|--------|
| R1 | Design token system | Implemented |
| R2 | Font pairing | Implemented |
| R3 | Global reset | Implemented |
| R4 | Offset shadows | Implemented |
| R5 | Form styling | Implemented |
| R6 | Staggered animations | Implemented |
| R7 | Asymmetric grid | Implemented |
| R8 | Accessibility | Implemented |
| R9 | Lighthouse thresholds | Pending (needs browser audit) |
| R10 | Responsive integrity | Pending (needs manual check) |
| NFR1 | Scope discipline | Enforced |
| NFR2 | Shared visual language | Implemented |
| NFR3 | Verification before completion | In progress |
| NFR4 | CSS-only motion | Implemented |
