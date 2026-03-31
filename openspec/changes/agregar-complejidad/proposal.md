# Proposal: agregar-complejidad

## Intent

Agregar estructura MVC al backend y React Router + Context al frontend para entender mejor cómo Node.js organiza código en producción.

## Scope

### In Scope
- Backend: Separar rutas (`/routes`) y controladores (`/controllers`)
- Frontend: Agregar React Router para múltiples páginas
- Frontend: Implementar Context API para estado global
- Crear página de lista de mensajes enviados

### Out of Scope
- Base de datos real (seguirá usando memoria)
- Autenticación/autorización
- Tests unitarios

## Approach

1. **Backend MVC**: 
   - Crear `routes/formulario.js` para definiciones de endpoints
   - Crear `controllers/formularioController.js` para lógica de negocio
   
2. **Frontend estructurado**:
   - Agregar `react-router-dom`
   - Crear pages: Home, Formulario, ListaMensajes
   - Crear Context para compartir estado de mensajes

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `backend/server.js` | Modified | Eliminar lógica inline, usar routes |
| `backend/routes/` | New | Archivos de rutas |
| `backend/controllers/` | New | Lógica de negocio |
| `frontend/src/App.jsx` | Modified | Agregar Router |
| `frontend/src/pages/` | New | Componentes de página |
| `frontend/src/context/` | New | Context para estado global |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Breaking existing API | Low | Probar endpoint manualmente antes de entregar |
| Router no funciona | Low | Verificar dependencias y configuración |

## Rollback Plan

1. Eliminar carpetas `routes/`, `controllers/`, `pages/`, `context/`
2. Restaurar `server.js` y `App.jsx` a versión anterior
3. `npm install` para limpiar dependencias no usadas

## Dependencies

- `react-router-dom` (agregar al frontend)
- No hay cambios en dependencias del backend

## Success Criteria

- [ ] Backend responde en `/api/formulario` correctamente
- [ ] Frontend navega entre las 3 páginas sin errores
- [ ] Mensajes se guardan y muestran en lista
- [ ] No hay errores en consola del navegador