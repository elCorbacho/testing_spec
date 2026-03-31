## Why

La app actual solo tiene un formulario de contacto. Se necesita una segunda entidad funcional — tickets de soporte — para que la app tenga un flujo real de creación + visualización con dashboard. Esto demuestra cómo escalar el patrón MVC + Context a múltiples entidades.

## What Changes

- Nuevo formulario de creación de tickets de soporte (título, descripción, prioridad)
- Nuevo dashboard que muestra resumen de tickets (totales por estado) y listado completo
- Los tickets tienen estado: abierto → en progreso → cerrado
- Se puede cambiar el estado de un ticket desde el dashboard
- Backend con endpoints CRUD completos para tickets

## Capabilities

### New Capabilities

- `ticket-management`: Gestión completa de tickets de soporte — creación, listado, cambio de estado. Incluye backend (rutas, controller, validación) y frontend (formulario, dashboard con métricas, listado con filtros por estado).

### Modified Capabilities

- Ninguna. El sistema de mensajes existente no cambia.

## Impact

| Area | Impact | Description |
|------|--------|-------------|
| `backend/routes/tickets.js` | New | Rutas CRUD para tickets |
| `backend/controllers/ticketController.js` | New | Lógica de negocio para tickets |
| `backend/server.js` | Modified | Agregar rutas de tickets |
| `frontend/src/pages/CrearTicket.jsx` | New | Formulario de creación |
| `frontend/src/pages/Dashboard.jsx` | New | Dashboard con métricas y listado |
| `frontend/src/context/TicketsContext.jsx` | New | Estado global de tickets |
| `frontend/src/App.jsx` | Modified | Agregar rutas nuevas al router |
| `frontend/src/pages/Home.jsx` | Modified | Agregar links a nuevas páginas |
