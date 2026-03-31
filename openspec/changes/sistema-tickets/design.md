## Context

La app tiene un backend Express con MVC (routes → controllers → memoria) y un frontend React con Router + Context. Ya existe una entidad "formulario/mensaje" que sigue este patrón. El objetivo es agregar una segunda entidad (tickets) replicando el mismo patrón, demostrando cómo escalar el código existente.

**Restricciones:**
- Sin base de datos (almacenamiento en memoria, igual que los mensajes)
- Sin autenticación
- El sistema de mensajes existente NO se modifica

## Goals / Non-Goals

**Goals:**
- CRUD completo de tickets de soporte (crear, listar, cambiar estado)
- Dashboard con métricas (totales por estado) y listado con filtros
- Seguir los mismos patrones que la entidad existente (MVC + Context)

**Non-Goals:**
- Autenticación o permisos
- Base de datos persistente
- Edición de campos del ticket después de creado (solo cambio de estado)
- Eliminación de tickets

## Decisions

### D1: Almacenamiento en memoria (array)
**Por qué:** Consistencia con el sistema de mensajes existente. Es una demo, no necesita persistencia.
**Alternativa:** JSON file o SQLite — descartado por complejidad innecesaria.

### D2: Un solo Context (TicketsContext)
**Por qué:** Un context por entidad es el patrón ya usado (MensajesContext). Simple y claro.
**Alternativa:** Un context genérico — descartado para mantener simplicidad.

### D3: Estados del ticket limitados a 3
**Por qué:** `abierto`, `en progreso`, `cerrado` cubren el flujo básico sin complejidad innecesaria.
**Alternativa:** Más estados (pendiente, resuelto, reabierto) — descartado para mantenerlo simple.

### D4: Dashboard = resumen + lista en la misma página
**Por qué:** Evita crear múltiples páginas. El usuario ve todo en un solo vistazo.
**Alternativa:** Separar resumen en /dashboard y lista en /tickets — descartado por over-engineering.

### D5: Filtros por estado en el frontend (no en el backend)
**Por qué:** Los tickets se cargan todos de una vez (son pocos en memoria). Filtrar en frontend es más simple.
**Alternativa:** Endpoint con query params ?estado=abierto — innecesario para este volumen.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Duplicación de patrón de validación | Extraer validación reutilizable si se repite mucho (por ahora copy-paste es OK para una demo) |
| Ambos contexts cargan al inicio | Solo cargar tickets cuando se visita el dashboard, no en cada página |
| Sin persistencia — datos se pierden al reiniciar | Aceptado como trade-off para mantener simplicidad |
