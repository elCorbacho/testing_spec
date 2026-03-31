# UI/UX Redesign PRD

## Project Overview

Rediseñar completamente la interfaz de usuario del sistema de tickets y mensajes para lograr un look profesional, sofisticado y memorable que transmita confianza y competencia técnica.

## Design Direction

**Aesthetic**: Editorial Minimal - Refined, understated, authoritative.

```
┌─────────────────────────────────────────────────────────┐
│                    DESIGN PILLARS                       │
├─────────────────────────────────────────────────────────┤
│ 1. Authority     → Serif headings, confident layout   │
│ 2. Clarity       → Generous spacing, clear hierarchy  │
│ 3. Trust         → Stable animations, no flashy effects │
│ 4. Polish        → Every detail considered             │
└─────────────────────────────────────────────────────────┘
```

---

## Visual Design

### Color Palette

| Role | Color | Usage |
|------|-------|-------|
| Background Primary | `#FAF9F7` | Main page background (warm off-white) |
| Background Secondary | `#FFFFFF` | Cards, elevated surfaces |
| Background Tertiary | `#F0EEEB` | Subtle sections, hover states |
| Text Primary | `#1A1A1A` | Headings, important text |
| Text Secondary | `#5A5A5A` | Body text, descriptions |
| Text Muted | `#8A8A8A` | Labels, timestamps, hints |
| Accent Primary | `#1E3A5F` | Buttons, links, highlights (deep indigo) |
| Accent Hover | `#2D4F7A` | Button hover states |
| Accent Tertiary | `#E07A5F` | Status badges, alerts (terracotta) |
| Border | `#E8E5E0` | Subtle dividers, card edges |
| Success | `#2D6A4F` | Success states |
| Error | `#9B2C2C` | Error states |

### Typography

| Element | Font | Weight | Size | Line Height |
|---------|------|--------|------|-------------|
| Page Title | Fraunces | 700 | 42px | 1.2 |
| Section Header | Fraunces | 600 | 28px | 1.3 |
| Card Title | DM Sans | 600 | 18px | 1.4 |
| Body Text | DM Sans | 400 | 15px | 1.6 |
| Labels | DM Sans | 500 | 13px | 1.4 |
| Buttons | DM Sans | 600 | 14px | 1 |

**Font Sources**:
- Fraunces: Google Fonts (variable, optical size)
- DM Sans: Google Fonts (variable)

### Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight gaps |
| `--space-sm` | 8px | Component internal |
| `--space-md` | 16px | Standard gaps |
| `--space-lg` | 24px | Section spacing |
| `--space-xl` | 32px | Major sections |
| `--space-2xl` | 48px | Page padding top |

### Shadows & Depth

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.08);
--shadow-card: 0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
```

### Animations

| Property | Value | Easing |
|----------|-------|--------|
| Duration Fast | 150ms | ease-out |
| Duration Normal | 250ms | ease-out |
| Duration Slow | 400ms | ease-out |
| Page Enter | fade + translateY(8px) | 400ms ease-out |

---

## Layout Specification

### Main Container

```
┌─────────────────────────────────────────────────────────┐
│                    PAGE LAYOUT                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                   HEADER                        │   │
│  │  [Logo/Title]              [Navigation Tabs]   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                   │   │
│  │              PAGE CONTENT                        │   │
│  │                                                   │   │
│  │  [Hero/Title]                                    │   │
│  │  [Subtitle]                                      │   │
│  │                                                   │   │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐         │   │
│  │  │ Metric  │  │ Metric  │  │ Metric  │         │   │
│  │  │  Card   │  │  Card   │  │  Card   │         │   │
│  │  └─────────┘  └─────────┘  └─────────┘         │   │
│  │                                                   │   │
│  │  [Content Area / Forms / Lists]                 │   │
│  │                                                   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

- Max content width: `800px`
- Centered with auto margins
- Page padding: `48px` horizontal, `32px` vertical on desktop
- Mobile: Stack layout, `24px` padding

### Navigation (Header)

- Height: `72px`
- Logo/title on left: `Fraunces` 24px, weight 700
- Navigation links on right: `DM Sans` 14px, weight 500
- Active link: underline accent color, `2px` offset
- Hover: text color shifts to accent
- Sticky positioning

### Card Components

- Border radius: `12px`
- Padding: `24px`
- Background: `#FFFFFF`
- Border: `1px solid var(--border)`
- Hover: slight lift with `--shadow-md`

### Metric Cards (Dashboard)

```
┌──────────────────────────┐
│                          │
│         123             │  ← Number: DM Sans 700, 48px
│         Total            │  ← Label: DM Sans 500, 13px
│                          │
└──────────────────────────┘
```

- Grid: `repeat(auto-fit, minmax(180px, 1fr))`
- Gap: `16px`
- Each card has subtle left accent border (4px) in category color

---

## Page Specifications

### 1. Home Page (`/`)

```
┌─────────────────────────────────────────────────────────┐
│  Formulario de Contacto                      [nav]      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Bienvenido                                            │
│  ──────────────────────────                             │
│  Sistema de gestión de mensajes y tickets de soporte.  │
│  Elegí una opción para comenzar:                       │
│                                                         │
│  ┌────────────────────┐  ┌────────────────────┐        │
│  │   Contact Form     │  │   Sent Messages   │        │
│  │   ─────────────    │  │   ─────────────    │        │
│  │   [Icon]           │  │   [Icon]           │        │
│  │   Send us a        │  │   View your        │        │
│  │   message          │  │   past messages    │        │
│  └────────────────────┘  └────────────────────┘        │
│                                                         │
│  ┌────────────────────┐  ┌────────────────────┐        │
│  │   Create Ticket    │  │   Dashboard        │        │
│  │   ─────────────    │  │   ─────────────    │        │
│  │   [Icon]           │  │   [Icon]           │        │
│  │   Open a new       │  │   View all         │        │
│  │   support ticket   │  │   tickets         │        │
│  └────────────────────┘  └────────────────────┘        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

- Hero section with large serif heading
- 2x2 grid of action cards
- Cards have: icon, title, description, subtle hover animation
- Icons: Use simple geometric SVG (envelope, list, ticket, chart)

### 2. Formulario Page (`/formulario`)

```
┌─────────────────────────────────────────────────────────┐
│  Enviar Mensaje                             [nav]     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Nuevo Mensaje                                         │
│  ─────────────                                          │
│  Completá el formulario para guardar un nuevo mensaje. │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Nombre                                          │   │
│  │  ───────────────────────────────────────────     │   │
│  │  Tu nombre                                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Email                                           │   │
│  │  ───────────────────────────────────────────     │   │
│  │  tu@email.com                                    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Mensaje                                         │   │
│  │  ───────────────────────────────────────────     │   │
│  │  Escribí tu mensaje...                          │   │
│  │                                                  │   │
│  │                                                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              Enviar Mensaje                      │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [Success/Error Message]                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

- Input fields: Full width, `56px` height
- Label above input: `DM Sans` 500, 13px, uppercase tracking
- Input border: `1px solid var(--border)`, `8px` radius
- Focus: Border changes to accent, subtle glow
- Textarea: `140px` min-height
- Submit button: Full width, `56px` height, accent color

### 3. Lista Mensajes Page (`/lista`)

```
┌─────────────────────────────────────────────────────────┐
│  Mensajes Enviados                            [nav]   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Historial de Mensajes                                 │
│  ──────────────────────                                │
│  Todos los mensajes que has enviado al sistema.        │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  📧 Juan Pérez                           2h ago  │   │
│  │  juan@email.com                                  │   │
│  │  ───────────────────────────────────────────     │   │
│  │  Necesito información sobre los servicios de    │   │
│  │  consultoría que ofrecen...                     │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  📧 María García                        1d ago  │   │
│  │  maria@correo.com                               │   │
│  │  ───────────────────────────────────────────     │   │
│  │  Quería consultar por el horario de atención...│   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

- Message cards in vertical list
- Each card shows: icon, name, email, time ago, preview of message
- Empty state: Centered message with icon

### 4. Crear Ticket Page (`/nuevo-ticket`)

Same layout as Formulario, with:
- Priority selector: Custom styled select dropdown
- Priority options: Baja (green), Media (amber), Alta (red)

### 5. Dashboard Page (`/dashboard`)

```
┌─────────────────────────────────────────────────────────┐
│  Dashboard de Tickets                         [nav]   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Resumen de Tickets                                     │
│  ───────────────────                                    │
│  Estado actual de todos los tickets de soporte.        │
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │   42     │ │    8     │ │   12     │ │   22     │  │
│  │  Total   │ │ Abiertos │ │En Progreso│ │ Cerrados │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [Todos ▼] [Abiertos ▼] [En Progreso ▼] [Cerrados]│  │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 🔴 No puedo acceder al panel de control          │   │
│  │    descripción del problema...                  │   │
│  │    Prioridad: Alta · 15/03/2024 10:30    [→]   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 🟡 Error en la exportación de datos             │   │
│  │    descripción del problema...                  │   │
│  │    Prioridad: Media · 14/03/2024 16:45    [→]  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

- Metrics in 4-column grid (responsive to 2 on mobile)
- Each metric card has colored left border
- Filter buttons: Horizontal pill style, active has filled background
- Ticket list: Full width cards
- State badge: Colored pill (abierto=red, en progreso=amber, cerrado=green)
- Status transition button: Arrow icon, transforms to next state

---

## Component States

### Buttons

| State | Background | Text | Border | Shadow |
|-------|------------|------|--------|--------|
| Default | `#1E3A5F` | `#FFFFFF` | none | `--shadow-sm` |
| Hover | `#2D4F7A` | `#FFFFFF` | none | `--shadow-md` |
| Active | `#152B47` | `#FFFFFF` | none | none |
| Disabled | `#E8E5E0` | `#8A8A8A` | none | none |

### Input Fields

| State | Border | Background | Shadow |
|-------|--------|------------|--------|
| Default | `#E8E5E0` | `#FFFFFF` | none |
| Focus | `#1E3A5F` | `#FFFFFF` | `0 0 0 3px rgba(30,58,95,0.1)` |
| Error | `#9B2C2C` | `#FFF5F5` | `0 0 0 3px rgba(155,44,44,0.1)` |
| Disabled | `#F0EEEB` | `#F0EEEB` | none |

---

## Implementation Steps

### Step 1: Foundation
1. Import fonts (Fraunces, DM Sans) in `index.html`
2. Define CSS custom properties in `index.css`
3. Set base typography and colors
4. Reset browser defaults with refined defaults

### Step 2: Layout & Navigation
1. Update `.container` styles (max-width, padding, shadows)
2. Rebuild navigation with new header component
3. Add sticky header behavior
4. Style navigation links with hover/active states

### Step 3: Core Components
1. Style buttons (primary, secondary variants)
2. Style input fields and textareas
3. Style selects with custom arrow
4. Create card component styles
5. Add message/toast component styles

### Step 4: Page-Specific Styles
1. Home: Hero section, action cards grid
2. Formulario: Form layout, validation states
3. ListaMensajes: Message list layout
4. CrearTicket: Priority selector
5. Dashboard: Metrics grid, filters, ticket cards

### Step 5: Animations & Polish
1. Add page entrance animations
2. Add micro-interactions (button hover, card hover)
3. Add loading states
4. Add empty states
5. Review mobile responsiveness
6. Polish spacing and alignment

### Step 6: Validation
1. Test all pages render correctly
2. Verify all interactions work
3. Check mobile responsiveness
4. Test form validation displays correctly
5. Verify accessibility (contrast, focus states)

---

## Success Criteria

- [ ] All 5 pages render with new design
- [ ] Navigation works correctly
- [ ] Forms submit and show validation
- [ ] Dashboard displays metrics and filters
- [ ] All hover/focus states work
- [ ] Mobile layout is usable
- [ ] No console errors
- [ ] Lighthouse accessibility score > 90

---

## Technical Notes

- Use CSS custom properties exclusively for theming
- Keep all animation durations consistent with tokens
- Ensure focus states are visible for accessibility
- Test at 320px, 768px, and 1440px widths
- No JavaScript for styling - CSS handles all visual states
