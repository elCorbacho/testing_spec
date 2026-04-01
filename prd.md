# Product Requirements Document (PRD): UI Redesign (Anti-AI Slop)

## 1. Executive Summary

- **Problem Statement**: The current tickets/form system features a generic, uninspired interface that feels templated, predictable, and lacks a distinct brand personality (the typical "AI slop" aesthetic of soft shadows, purple gradients, and system fonts).
- **Proposed Solution**: A complete frontend overhaul adopting a bold **"Neo-Brutalist Utility" / "High-Contrast Editorial"** aesthetic. The design will emphasize raw structural elements, unexpected typography pairings, and purposeful motion to create a memorable, highly professional yet striking experience that completely rejects cookie-cutter SaaS templates.
- **Success Criteria**:
  - 100% elimination of generic defaults (No Inter, Roboto, Arial, soft rounded corners, or generic drop shadows).
  - Lighthouse Accessibility and Performance scores >= 95.
  - Implementation of a distinctive, custom design token system (CSS variables) that strictly enforces the new aesthetic.

## 2. User Experience & Functionality

- **User Personas**: Clients submitting tickets and administrators processing them, who appreciate efficiency, clarity, and intentional, crafted design over generic templates.
- **User Stories**:
  - *As a user*, I want to interact with a clear, high-contrast form so that my focus is entirely on the inputs without visual distraction.
  - *As an admin*, I want to view the ticket list in a data-dense, magazine-like grid layout so that I can scan information quickly and intuitively.
  - *As a user*, I want to experience satisfying, sharp micro-interactions (like brutalist hover states and staggered reveals) so that the interface feels tactile and responsive.
- **Acceptance Criteria**:
  - **Typography**: The UI MUST use a bold, unexpected font pairing. For example, a dramatic serif (e.g., *Playfair Display* or *Fraunces*) for headings, paired with a characterful monospace (e.g., *Space Mono* or *JetBrains Mono*) for data, labels, and inputs.
  - **Color & Theme**: The palette MUST be restricted to high-contrast monochromes (e.g., deep obsidian `#0a0a0a` and stark off-white `#f4f4f0`) with exactly one aggressive, unapologetic accent color (e.g., Safety Orange `#ff4500` or Electric Chartreuse `#dfff00`).
  - **Spatial Composition**: Layouts MUST utilize visible grids, hard edges (0px border-radius), and sharp, solid offset shadows (`box-shadow: 4px 4px 0px #000`).
  - **Backgrounds**: Backgrounds MUST incorporate subtle atmosphere, such as CSS-generated noise textures, grain overlays, or blueprint-style grid lines, rejecting flat, lifeless backgrounds.
- **Non-Goals**:
  - We are NOT adding new backend functionalities, endpoints, or altering the database schema.
  - We are NOT building a soft, generic Web3/SaaS dashboard. No glassmorphism, no glowing borders, no pastel gradients.

## 3. Technical Specifications

- **Architecture Overview**:
  - The frontend architecture remains React/Vite.
  - Styling will be executed via CSS Modules or Tailwind CSS, but requires a strict custom configuration to overwrite all framework defaults and enforce the brutalist design tokens.
- **Integration Points**:
  - Existing Node.js/Express backend APIs for form submission and ticket retrieval.
- **Aesthetic Technical Rules**:
  - **Global CSS**: Implement a global reset that removes all default border radii and sets a baseline noise texture using a base64 SVG or CSS repeating gradients.
  - **Form Elements**: Inputs must have thick, explicit borders (`border: 2px solid var(--color-obsidian)`), no outline on focus, but instead a background color shift or a sharp offset shadow change.
  - **Motion**: Prioritize CSS-only transitions. Use `animation-delay` for staggered, cascading reveals of ticket list items on page load to create a cinematic entrance. Avoid slow, floaty animations; prefer snappy, mechanical easing curves (e.g., `cubic-bezier(0.87, 0, 0.13, 1)`).

## 4. Risks & Roadmap

- **Phased Rollout**:
  - **Phase 1 (Foundation)**: Define CSS variables (fonts, high-contrast colors, strict borders) and apply the global noise/grid background.
  - **Phase 2 (The Form)**: Redesign the ticket submission form with brutalist inputs, monospace labels, and sharp offset-shadow buttons.
  - **Phase 3 (The Data)**: Overhaul the ticket list view using CSS Grid for an editorial, asymmetric layout, implementing staggered load animations.
- **Technical Risks**:
  - *Performance*: Custom web fonts and grain overlays can impact rendering times. **Mitigation**: Optimize font loading (preconnect, woff2) and use efficient CSS-only techniques for noise.
  - *Accessibility*: High-contrast, brutalist designs can sometimes cause eye strain or fail WCAG guidelines if colors vibrate. **Mitigation**: Continuous contrast checking and providing clear focus states for keyboard navigation.
