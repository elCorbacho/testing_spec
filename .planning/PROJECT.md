# Project: Tickets/Form System with Neo-Brutalist UI

**Type:** brownfield
**Status:** active

## Vision
Complete frontend overhaul of a tickets/form management system. Replace the current generic, AI-slop interface with a bold Neo-Brutalist Utility aesthetic emphasizing raw structural elements, unexpected typography pairings, and purposeful motion. No backend scope changes.

## Success Criteria
- 100% of generic default styles removed (no Inter, Roboto, soft corners, soft shadows)
- Lighthouse Accessibility and Performance >= 95
- Custom CSS-variable design token system enforced across all components
- Neo-brutalist identity applied consistently across 5 routes

## Constraints
- Frontend architecture stays React/Vite (no framework migration)
- Plain CSS with design tokens (no Tailwind/CSS-in-JS unless spec approves)
- Backend is unchanged; features are frontend-only
- Must support prefers-reduced-motion and forced-colors
- Responsive support from 320px to 1440px+

## Stakeholders
- Client persona: submits tickets and messages via forms
- Admin persona: views and manages tickets via dashboard
- Development team: implements frontend redesign

## Timeline
- Immediate: verify remaining Lighthouse and manual QA tasks
- Short-term: close frontend verification tasks and stabilize
- Medium-term: address technical debt in backend (in-memory persistence, CORS policy)
