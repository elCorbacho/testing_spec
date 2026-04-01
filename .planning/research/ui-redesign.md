# Research: UI Redesign Approach

## Decision 1: Neo-Brutalist Utility aesthetic
- **Decision**: Adopt neo-brutalist / high-contrast editorial visual system.
- **Rationale**: User feedback noted generic AI-slop appearance; neo-brutalism creates a distinctive, purposeful brand identity.
- **Alternatives considered**:
  - Soft modern SaaS style: rejected because it is the current baseline that needs replacing.
  - Glassmorphism: rejected because it reinforces the generic SaaS look.

## Decision 2: Plain CSS with design tokens
- **Decision**: Use plain CSS custom properties for the design system.
- **Rationale**: The frontend already uses plain CSS; adding Tailwind or CSS-in-JS would introduce a new framework layer for a small codebase that does not need it.
- **Alternatives considered**:
  - Tailwind CSS: rejected because it adds configuration and utility noise for a small codebase already styled with plain CSS.
  - CSS-in-JS: rejected because runtime styling is unnecessary for a static aesthetic system.

## Decision 3: Shared form primitives
- **Decision**: Use shared Button and TextInput primitives for message/ticket forms.
- **Rationale**: Forms need consistent borders, labels, focus states, and button behavior across multiple routes.
- **Alternatives considered**:
  - Style each page independently: rejected because it increases drift and maintenance cost.
  - Adopt a third-party component library: rejected because it conflicts with the anti-generic aesthetic requirement.

## Decision 4: Phase-based implementation
- **Decision**: Foundation first, then forms, then data view.
- **Rationale**: Foundation establishes the shared visual language required before any specific screen redesign.
- **Alternatives considered**:
  - Bottom-up page-by-page: rejected because it would produce inconsistent partial redesigns.
  - Big-bang rewrite: rejected because it is risky for a brownfield frontend.
