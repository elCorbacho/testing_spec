## Context

El proyecto consiste en un sistema web con frontend React y backend Node.js. La aplicación actual tiene funcionalidad completa pero carece de identidad visual profesional. El objetivo es elevar la interfaz a un nivel que transmita confianza y competencia técnica.

**Estado actual:**
- Frontend: React con React Router, Context API para estado
- Backend: Express con arquitectura MVC
- CSS actual: Genérico, gradients violeta, system fonts
- Páginas: Home, Formulario, ListaMensajes, CrearTicket, Dashboard

**Restricciones:**
- Mantener toda la funcionalidad existente
- No cambiar APIs ni estructura de datos
- Compatibilidad con navegadores modernos
- Responsive para móvil

## Goals / Non-Goals

**Goals:**
- Crear un sistema de diseño coherente con identidad profesional
- Implementar paleta de colores sofisticada (off-white, indigo, terracota)
- Integrar tipografía distintiva (Fraunces + DM Sans)
- Diseñar componentes reutilizables (cards, inputs, buttons, badges)
- Agregar animaciones suaves y micro-interacciones
- Lograr评分visual que transmita "sistema de soporte profesional"

**Non-Goals:**
- Cambiar la arquitectura de la aplicación
- Agregar nuevas funcionalidades
- Implementar autenticación o autorización
- Crear tests unitarios
- Migrar a otro framework

## Decisions

### D1: Sistema de Diseño Basado en CSS Custom Properties

**Decisión:** Usar CSS custom properties (variables) para todo el theming, sin usar CSS-in-JS ni preprocessors.

**Alternativas consideradas:**
- Styled-components: Overhead de runtime, más complejo de debug
- Tailwind: No permite la granularidad necesaria para este diseño custom
- SCSS: Require build step adicional

**Rationale:** CSS vanilla con custom properties ofrece:
- Theming dinámico sin JavaScript
- Fácil mantenimiento y debugging
- Zero runtime overhead
- Perfecto para este scope de rediseño

### D2: Tipografía Serif para Títulos

**Decisión:** Usar Fraunces (Google Fonts) para todos los títulos y encabezados.

**Alternativas consideradas:**
- Playfair Display: Más clásico, menos flexible
- Cormorant Garamond: Elegante pero difícil de leer en UI
- System fonts: Genérico, sin carácter

**Rationale:** Fraunces es:
- Variable font con optical sizing
- Soft serif con personalidad but readable
- Complementa perfectamente con DM Sans body

### D3: Layout Centralizado con Ancho Fijo

**Decisión:** Contenedor principal de 800px centrado, con padding generoso.

**Alternativas consideradas:**
- Full width con contenedores internos: Más complejo
- Sidebar layout: Requiere cambiar estructura de páginas

**Rationale:**
- Mantiene consistencia visual
- Fácil de hacer responsive
- Matches el layout actual con mejoras

### D4: Animaciones CSS-only

**Decisión:** Todas las animaciones via CSS transitions/keyframes, sin JavaScript animation libraries.

**Alternativas consideradas:**
- Framer Motion: Overhead innecesario
- GSAP: Overkill para este scope

**Rationale:**
- Performance óptimo
- Simplicidad de mantenimiento
- Suficiente para el desired efecto

## Risks / Trade-offs

**[Risk]** → Las animaciones podrían no funcionar en navegadores viejos
- **Mitigation:** Usar estándar CSS transitions, fallback graceful

**[Risk]** → Font loading puede causar flash of unstyled text
- **Mitigation:** Usar `font-display: swap` en Google Fonts

**[Risk]** → CSS muy largo en un solo archivo
- **Mitigation:** Organizar con comentarios claros y secciones

**[Trade-off]** → Flexbox vs Grid para métricas
- **Decision:** Grid con auto-fit para responsividad automática

## Migration Plan

1. **Preparar index.html**: Agregar Google Fonts links
2. **Reemplazar index.css**: Nuevo sistema de diseño completo
3. **Actualizar App.jsx**: Nuevo header/navegación
4. **Actualizar página por página**: Verificar estilos
5. **Verificar responsividad**: Testear breakpoints
6. **Validar funcionalidad**: Todas las interacciones funcionan

**Rollback:** Restaurar index.css desde git.
