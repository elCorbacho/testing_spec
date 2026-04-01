# Research: Frontend UI Redesign (Neo-Brutalist)

## Decision 1: Use plain CSS design tokens as the styling foundation
- **Decision**: Implement the redesign with global CSS custom properties in `frontend/src/index.css` and compose route/component styling from that token layer.
- **Rationale**: The project already uses plain CSS, and the redesign needs strong control over typography, hard edges, shadows, backgrounds, and motion without introducing framework defaults.
- **Alternatives considered**:
  - Tailwind CSS: rejected because it adds configuration and utility noise for a small codebase already styled with plain CSS.
  - CSS-in-JS: rejected because runtime styling is unnecessary for a static aesthetic system.

## Decision 2: Keep the existing frontend architecture and page routing
- **Decision**: Preserve the React Router structure under `frontend/src/pages/` and redesign the app shell plus existing routes in place.
- **Rationale**: The feature is visual and interaction-focused, not architectural; existing routes already map to the product flows.
- **Alternatives considered**:
  - Create a new `views/` layer: rejected because it duplicates route concerns without product value.
  - Full component library extraction: rejected as premature for the current scope.

## Decision 3: Introduce shared form primitives
- **Decision**: Use shared `Button` and `TextInput` primitives for message/ticket forms.
- **Rationale**: Forms need consistent borders, labels, focus states, and button behavior across multiple routes.
- **Alternatives considered**:
  - Style each page independently: rejected because it increases drift and maintenance cost.
  - Adopt a third-party component library: rejected because it conflicts with the anti-generic aesthetic requirement.

## Decision 4: Load distinctive fonts with explicit fallbacks
- **Decision**: Use a serif heading font and monospace/data font with fallback stacks, and prefer non-blocking loading guidance in the plan.
- **Rationale**: Typography is a primary requirement in the spec and central to the visual identity.
- **Alternatives considered**:
  - System fonts only: rejected because they do not satisfy the intended brand expression.
  - Large multi-font families: rejected because they increase payload and complexity.

## Decision 5: Accessibility and motion must be first-class constraints
- **Decision**: Keep visible `:focus-visible` states, support `prefers-reduced-motion`, and verify contrast ratios as part of the redesign.
- **Rationale**: The spec requires Lighthouse accessibility targets and mentions motion sensitivity explicitly.
- **Alternatives considered**:
  - Motion-heavy default transitions everywhere: rejected because they risk accessibility regressions.
  - Removing focus outlines without replacement: rejected because it violates accessibility basics.

## Decision 6: Define explicit audit scope for verification
- **Decision**: Treat `/`, `/formulario`, and `/dashboard` as required Lighthouse routes, and manually verify `/lista` and `/nuevo-ticket` as companion surfaces.
- **Rationale**: These routes cover the shell, forms, navigation, cards, filters, and asymmetric layout patterns introduced by the feature.
- **Alternatives considered**:
  - Audit every route equally: rejected because it adds noise without increasing confidence proportionally.
  - Audit only the home route: rejected because it misses core form and dashboard interactions.

## Decision 7: Use fixed viewport checkpoints for manual QA
- **Decision**: Validate at 320px, 640px, 960px, and 1440px widths.
- **Rationale**: These widths align with the layout shifts expected for mobile, tablet, laptop, and large desktop.
- **Alternatives considered**:
  - Device-name-only checks: rejected because CSS responds to width, not brand labels.
  - One mobile and one desktop width only: rejected because it misses intermediate layout failures.
