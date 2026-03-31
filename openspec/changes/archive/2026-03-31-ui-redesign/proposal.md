## Why

La interfaz actual tiene un diseño genérico que no transmite profesionalismo. El fondo degradado violeta, fuentes del sistema, y componentes sin carácter no generan confianza en los usuarios. Un sistema de tickets de soporte necesita transmitir autoridad y competencia técnica.

## What Changes

- Nuevo sistema de diseño completo con paleta de colores profesional (off-white, azul indigo profundo, terracota)
- Tipografía distintiva: Fraunces (serif) para títulos, DM Sans (sans) para contenido
- Layout con spacing generoso y jerarquía clara
- Navegación header fija con estilos refined
- Cards con sombras sutiles y bordes delicados
- Formularios con inputs estilizados, estados focus/hover definidos
- Dashboard con métricas en grid, filtros tipo pill, badges de estado coloreados
- Animaciones suaves de entrada y micro-interacciones
- Totalmente responsivo para móvil

## Capabilities

### New Capabilities

- `ui-redesign`: Rediseño completo de la interfaz de usuario - nuevo sistema de diseño, tipografía, colores, componentes y layouts para todas las páginas existentes.

### Modified Capabilities

- Ninguna. Los cambios son puramente visuales, la funcionalidad no cambia.

## Impact

| Area | Impact | Description |
|------|--------|-------------|
| `frontend/index.html` | Modified | Agregar import de fuentes Google (Fraunces, DM Sans) |
| `frontend/index.css` | Modified | Reemplazar completamente con nuevo sistema de diseño |
| `frontend/src/pages/Home.jsx` | Modified | Actualizar estructura para nuevos estilos |
| `frontend/src/pages/Formulario.jsx` | Modified | Actualizar estilos de formulario |
| `frontend/src/pages/ListaMensajes.jsx` | Modified | Actualizar estilos de lista |
| `frontend/src/pages/CrearTicket.jsx` | Modified | Actualizar estilos con selector de prioridad |
| `frontend/src/pages/Dashboard.jsx` | Modified | Actualizar métricas y filtros |
| `frontend/src/App.jsx` | Modified | Actualizar navegación/header |
