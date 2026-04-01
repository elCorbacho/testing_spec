# Quickstart: Frontend UI Redesign Verification

## Prerequisites
- Node.js LTS installed
- Dependencies installed in `frontend/`
- Existing backend available if you want to validate live form submission

## Run the frontend locally
```bash
cd frontend
npm install
npm run dev
```

## Manual verification flow
1. Open `/` and verify the shell, typography, card grid, and navigation.
2. Open `/formulario` and verify labels, focus states, submit button styling, and success/error messages.
3. Open `/nuevo-ticket` and verify the shared form primitive styling and priority select behavior.
4. Open `/dashboard` and verify metric cards, filters, asymmetric card layout, and staggered reveal behavior.
5. Open `/lista` and verify message cards or empty state consistency.

## Responsive checkpoints
- Test at `320px`, `640px`, `960px`, and `1440px`.
- At each width verify:
  - no horizontal overflow
  - sticky header remains usable
  - buttons and fields remain readable/clickable
  - dashboard cards reflow cleanly

## Accessibility and performance audit
- Run Lighthouse on:
  - `/`
  - `/formulario`
  - `/dashboard`
- Pass criteria:
  - Accessibility >= 95
  - Performance >= 95

## Reduced-motion check
- Enable `prefers-reduced-motion` in browser/devtools.
- Re-open `/dashboard` and verify staggered reveal no longer forces motion.

## Evidence to record
- Route tested
- Viewport width
- State tested (empty, populated, success, error)
- Lighthouse scores where applicable
- Any failure notes and reproduction steps
