## 1. Backend - Controller de tickets

- [ ] 1.1 Crear `backend/controllers/ticketController.js` con funciones: crearTicket, listarTickets, cambiarEstadoTicket
- [ ] 1.2 Validar que título y descripción sean requeridos en crearTicket
- [ ] 1.3 Validar que estado solo acepte "abierto", "en progreso", "cerrado" en cambiarEstadoTicket

## 2. Backend - Rutas de tickets

- [ ] 2.1 Crear `backend/routes/tickets.js` con POST /api/tickets, GET /api/tickets, PATCH /api/tickets/:id/estado
- [ ] 2.2 Modificar `backend/server.js` para registrar las rutas de tickets

## 3. Frontend - Context de tickets

- [ ] 3.1 Crear `frontend/src/context/TicketsContext.jsx` con provider, estado tickets, agregarTicket y actualizarEstadoTicket
- [ ] 3.2 Modificar `frontend/src/main.jsx` para envolver con TicketsProvider

## 4. Frontend - Página CrearTicket

- [ ] 4.1 Crear `frontend/src/pages/CrearTicket.jsx` con formulario (título, descripción, prioridad)
- [ ] 4.2 Validar campos requeridos en el frontend
- [ ] 4.3 Enviar POST a /api/tickets y agregar al Context

## 5. Frontend - Página Dashboard

- [ ] 5.1 Crear `frontend/src/pages/Dashboard.jsx` con tarjetas de métricas (total, abiertos, en progreso, cerrados)
- [ ] 5.2 Mostrar listado de tickets con filtro por estado
- [ ] 5.3 Agregar botón para cambiar estado de cada ticket (PATCH)

## 6. Integración

- [ ] 6.1 Modificar `frontend/src/App.jsx` para agregar rutas /nuevo-ticket y /dashboard
- [ ] 6.2 Modificar `frontend/src/pages/Home.jsx` para agregar links a las nuevas páginas

## 7. Verificación

- [ ] 7.1 Probar backend: POST, GET, PATCH a /api/tickets con curl
- [ ] 7.2 Probar frontend: crear ticket, verlo en dashboard, cambiar estado
- [ ] 7.3 Verificar que los filtros del dashboard funcionan correctamente
