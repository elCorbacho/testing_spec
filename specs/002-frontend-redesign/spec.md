# Feature Specification: Frontend UI Redesign (Neo-Brutalist)

**Feature Branch**: `002-frontend-redesign`
**Created**: 2026-03-31
**Status**: Draft
**Input**: User description: "Rediseño completo del frontend a estética Neo-Brutalista" (Based on prd.md)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Apply Global Brutalist Theme & Tokens (Priority: P1)

As a **client or admin**, I want to **experience a bold, high-contrast visual theme across the entire application**, so that **the interface feels distinctive, purposeful, and rejects generic "AI slop" aesthetics**.

**Why this priority**: Establishing the design tokens (CSS variables), typography, and global resets is the foundational step required before any specific component or view can be redesigned.

**Independent Test**: Can be tested by loading any page and verifying that the background has a noise/grid texture, default border radii are 0, and the new font pairings are active on base elements.

**Acceptance Scenarios**:

1. **Given** the application loads, **When** viewing the global styling, **Then** a noise texture or grid pattern is visible in the background instead of a flat color.
2. **Given** the application loads, **When** inspecting typography, **Then** serif fonts are used for headings and monospace fonts for data/labels.
3. **Given** the application loads, **When** inspecting the color palette, **Then** only high-contrast monochromes (e.g., `#0a0a0a`, `#f4f4f0`) and one aggressive accent color are present.

---

### User Story 2 - Redesign Message and Ticket Submission Forms (Priority: P2)

As a **user submitting a message or ticket**, I want to **interact with clear, high-contrast forms**, so that **my focus is entirely on the inputs without visual distraction**.

**Why this priority**: The message form and ticket form are the primary interaction points for clients. They need to reflect the new aesthetic to provide value to the end user.

**Independent Test**: Can be tested by navigating to `/formulario` and `/nuevo-ticket` and interacting with the inputs, verifying their brutalist styling and sharp hover/focus states.

**Acceptance Scenarios**:

1. **Given** the message form or ticket form, **When** viewing inputs, **Then** they have thick, explicit borders (`2px solid`) and monospace labels.
2. **Given** the message form or ticket form, **When** focusing on an input, **Then** there is no default outline, but instead a background color shift or sharp offset shadow change.
3. **Given** the message form or ticket form, **When** interacting with buttons, **Then** they exhibit sharp offset shadows (`box-shadow: 4px 4px 0px #000`).

---

### User Story 3 - Redesign Ticket List View with Asymmetric Grid (Priority: P3)

As an **admin**, I want to **view the ticket list in a data-dense, magazine-like grid layout**, so that **I can scan information quickly and intuitively**.

**Why this priority**: The list view is the primary interface for admins, completing the redesign for the secondary persona.

**Independent Test**: Can be tested by viewing the ticket list as an admin and verifying the CSS Grid layout and staggered entry animations.

**Acceptance Scenarios**:

1. **Given** the admin ticket list, **When** the page loads, **Then** ticket items reveal in a staggered, cascading animation using snappy easing (`cubic-bezier(0.87, 0, 0.13, 1)`).
2. **Given** the admin ticket list, **When** viewing the layout, **Then** it uses an asymmetric, editorial CSS Grid layout with hard edges.

---

### Edge Cases

- What happens if custom web fonts fail to load? (Fallback to standard serif/monospace).
- How do high-contrast elements behave in an OS-level forced "Dark Mode" or forced-colors mode?
- Do the aggressive animations cause motion sickness for users with `prefers-reduced-motion` enabled?
- How does the asymmetric grid respond to very small mobile screens?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST implement a custom design token system (CSS variables) for the brutalist aesthetic.
- **FR-002**: System MUST use a bold serif (e.g., *Playfair Display* or *Fraunces*) for headings and a monospace font (e.g., *Space Mono* or *JetBrains Mono*) for labels/data.
- **FR-003**: System MUST eliminate all generic UI defaults (no Inter, Roboto, soft rounded corners, or soft drop shadows).
- **FR-004**: System MUST apply sharp, solid offset shadows (`4px 4px 0px #000`) instead of soft blurs.
- **FR-005**: System MUST implement a global reset setting border radii to 0px and applying a noise/grid background texture.
- **FR-006**: System MUST style form inputs with thick explicit borders and replace default focus outlines with background/shadow shifts.
- **FR-007**: System MUST implement staggered CSS-only load animations using snappy mechanical easing (`cubic-bezier`).
- **FR-008**: System MUST maintain Lighthouse Accessibility and Performance scores >= 95.
- **FR-009**: System MUST remain readable and navigable in forced-colors or OS-enforced high-contrast modes, preserving visible boundaries, text legibility, and focus states on key routes.

### Key Entities

- **Design Tokens**: The core set of CSS variables defining colors, typography, spacing, and shadows for the application.
- **Form Components**: The inputs, labels, and buttons used for data entry.
- **Data Grid**: The structural layout used to display collections of tickets.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of generic default styles (soft shadows, rounded corners, standard sans-serif fonts) are removed from the frontend.
- **SC-002**: Lighthouse Accessibility score is >= 95.
- **SC-003**: Lighthouse Performance score is >= 95.
- **SC-004**: All five primary routes (`/`, `/formulario`, `/lista`, `/nuevo-ticket`, `/dashboard`) use the shared design-token system without route-specific fallback styling that bypasses the global visual language.

## Assumptions

- We are NOT adding new backend functionalities, endpoints, or altering the database schema.
- The frontend architecture remains React/Vite.
- Styling will be executed via CSS Modules or Tailwind CSS, with a strict custom configuration.
- Existing Node.js/Express backend APIs are available and functioning for form submission and ticket retrieval.
