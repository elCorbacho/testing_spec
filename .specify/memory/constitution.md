# Proyecto Constitution

## Core Principles

### I. Shared Frontend Language
All frontend changes MUST use the shared visual language, design tokens, layout patterns, and reusable primitives defined by the active feature plan or existing application shell.

### II. Accessibility Is Non-Negotiable
All user-facing interfaces MUST preserve semantic structure, visible focus states, keyboard usability, readable contrast, and reduced-motion handling when motion is introduced.

### III. Scope Discipline
Frontend-only features MUST NOT modify backend APIs, persistence, or server-side contracts unless the feature specification explicitly includes and justifies those backend changes.

### IV. Verification Before Completion
No feature MAY be considered complete until its required verification steps have been executed and documented. This includes manual QA for user-facing flows and any explicitly required audits such as Lighthouse thresholds.

### V. Prefer Simplicity Over New Abstractions
New frameworks, architectural layers, or design systems SHOULD NOT be introduced unless the implementation plan clearly explains why the current stack is insufficient.

## Additional Constraints

- React and Vite are the default frontend stack for this repository.
- Plain CSS with shared design tokens is the default styling strategy unless a feature spec explicitly approves another approach.
- Frontend work MUST preserve existing route structure and context providers unless a plan explicitly calls for architectural change.
- Key user-facing routes MUST meet the quality thresholds defined in the active feature plan.

## Development Workflow

- `spec.md`, `plan.md`, and `tasks.md` MUST exist before implementation begins.
- Tasks MUST be organized by user story so each story can be implemented and verified independently.
- Any required QA evidence or audit results MUST be recorded in the feature artifacts before closing verification tasks.
- Analyze findings that reveal critical governance or requirement gaps MUST be addressed or explicitly accepted before implementation proceeds.

## Governance

This constitution supersedes local planning preferences, ad hoc task breakdowns, and undocumented workflow habits.
Any amendment to this constitution MUST be explicit, reviewed, and committed as a deliberate project change.
All future plans, tasks, and reviews are expected to validate compliance against these principles.

**Version**: 1.0.0 | **Ratified**: 2026-03-31 | **Last Amended**: 2026-03-31
