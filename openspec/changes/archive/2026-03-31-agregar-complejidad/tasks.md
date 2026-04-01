# Tasks: agregar-complejidad

## Phase 1: Backend MVC (Foundation)

- [x] 1.1 Crear `backend/controllers/formularioController.js` con funciones crearFormulario y listarFormularios
- [x] 1.2 Crear `backend/routes/formulario.js` definiendo POST y GET /api/formulario
- [x] 1.3 Modificar `backend/server.js` para usar las routes en lugar de lógica inline

## Phase 2: Frontend Context (Foundation)

- [x] 2.1 Instalar `react-router-dom` en frontend
- [x] 2.2 Crear `frontend/src/context/MensajesContext.jsx` con provider y estado mensajes
- [x] 2.3 Modificar `frontend/src/main.jsx` para envolver App con MensajesProvider

## Phase 3: Frontend Pages (Core Implementation)

- [x] 3.1 Crear `frontend/src/pages/Home.jsx` - página de inicio con navegación
- [x] 3.2 Crear `frontend/src/pages/Formulario.jsx` - componente de formulario (extraer de App.jsx)
- [x] 3.3 Crear `frontend/src/pages/ListaMensajes.jsx` - lista de mensajes desde Context

## Phase 4: Router Integration (Wiring)

- [x] 4.1 Modificar `frontend/src/App.jsx` para agregar BrowserRouter y Routes
- [x] 4.2 Crear componente de navegación (Navbar) en App.jsx
- [x] 4.3 Conectar Formulario.jsx con Context para actualizar mensajes

## Phase 5: Verification

- [x] 5.1 Probar backend: POST y GET a /api/formulario con curl
- [ ] 5.2 Probar frontend: navegar entre /, /formulario, /lista
- [ ] 5.3 Verificar que al enviar formulario aparezca en lista de mensajes
- [x] 5.4 Verificar error 400 con email inválido
- [x] 5.5 Agregar una base mínima de tests automatizados para backend sin dependencias extra

## Phase 6: Cleanup

- [x] 6.1 Eliminar código inline de formulario en App.jsx original
- [x] 6.2 Agregar console.log para verificar que Context funciona
