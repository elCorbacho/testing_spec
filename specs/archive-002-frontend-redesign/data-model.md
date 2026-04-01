# Data Model: Frontend UI Redesign (Neo-Brutalist)

## Entity: DesignToken
- **Purpose**: Encapsulates the visual rules reused across the app.
- **Fields**:
  - `name` - semantic token identifier such as `color-obsidian` or `shadow-offset`
  - `category` - color, typography, spacing, border, motion, shadow, layout
  - `value` - concrete CSS value
  - `usage` - where the token is expected to be applied
- **Validation Rules**:
  - Color tokens must preserve high contrast against primary surfaces.
  - Motion tokens must remain compatible with reduced-motion overrides.

## Entity: FormPrimitive
- **Purpose**: Shared UI building block for message and ticket inputs.
- **Fields**:
  - `type` - input, textarea, select, button
  - `label` - visible field/button text
  - `variant` - primary, secondary, default
  - `interactiveState` - default, hover, focus-visible, disabled, error
  - `ariaHooks` - ids/descriptions used for accessible relationships
- **Validation Rules**:
  - Labels must remain visible and associated with controls.
  - Focus state must remain visible without relying on browser default outline.

## Entity: RouteSurface
- **Purpose**: Represents a page-level contract for visual and interaction coverage.
- **Fields**:
  - `path` - route path
  - `persona` - client, admin, or shared
  - `primaryElements` - header, form, card grid, filters, empty state
  - `testMode` - lighthouse, manual, or both
- **Relationships**:
  - Each `RouteSurface` consumes one or more `FormPrimitive` instances.
  - All `RouteSurface` instances consume `DesignToken` values.

## Entity: AuditScenario
- **Purpose**: Captures verification expectations for the redesign.
- **Fields**:
  - `route` - route under test
  - `viewport` - 320, 640, 960, 1440
  - `state` - empty, populated, loading, success, error
  - `requiredChecks` - contrast, keyboard focus, no horizontal scroll, animation behavior
  - `lighthouseTargets` - accessibility/performance threshold if applicable
- **Validation Rules**:
  - `/`, `/formulario`, and `/dashboard` require Lighthouse thresholds >= 95.
  - All manual scenarios must verify responsive integrity and visible focus states.
