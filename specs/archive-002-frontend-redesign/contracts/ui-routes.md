# UI Route Contracts

## Contract Type
Route-level frontend UI contract for the neo-brutalist redesign.

## Shared Shell Contract
- Sticky header remains visible across all routes.
- Navigation exposes `/`, `/formulario`, `/lista`, `/nuevo-ticket`, and `/dashboard`.
- The shell uses one shared visual language: hard edges, high-contrast palette, serif headings, monospace labels/data, and offset shadows.

## Route: `/`
- **Purpose**: Entry point and navigation hub.
- **Required Elements**:
  - page title and supporting subtitle
  - action card grid linking to the four feature routes
  - responsive layout with no horizontal overflow
- **Verification**:
  - Lighthouse: yes
  - Manual QA: yes

## Route: `/formulario`
- **Purpose**: Submit a message.
- **Required Elements**:
  - labeled name, email, and message controls
  - primary submit action
  - visible success/error feedback area
  - visible focus and hover states on all controls
- **Verification**:
  - Lighthouse: yes
  - Manual QA: yes

## Route: `/lista`
- **Purpose**: Review submitted messages.
- **Required Elements**:
  - message cards or empty state
  - readable metadata and preview text
  - consistent shell and spacing
- **Verification**:
  - Lighthouse: optional
  - Manual QA: yes

## Route: `/nuevo-ticket`
- **Purpose**: Submit a new support ticket.
- **Required Elements**:
  - labeled title, description, and priority controls
  - submit action and feedback area
  - consistent form primitive styling with `/formulario`
- **Verification**:
  - Lighthouse: optional
  - Manual QA: yes

## Route: `/dashboard`
- **Purpose**: Review and act on ticket status.
- **Required Elements**:
  - metric cards
  - filter controls
  - asymmetric ticket card grid
  - staggered load animation with reduced-motion fallback
- **Verification**:
  - Lighthouse: yes
  - Manual QA: yes

## Responsive QA Contract
- Required widths: `320px`, `640px`, `960px`, `1440px`
- Required checks:
  - no horizontal scroll
  - controls remain reachable and readable
  - focus states remain visible
  - cards/forms do not clip or overlap
  - reduced-motion users are not forced to watch stagger animations
