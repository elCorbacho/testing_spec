# Design: agregar-complejidad

## Technical Approach

Implementar estructura MVC en backend (routes + controllers) y agregar React Router + Context en frontend para demostrar cómo Node.js organiza código en producción.

## Architecture Decisions

### Decision: Estructura MVC en Backend

**Choice**: Separar en routes/ y controllers/
**Alternatives considered**: Todo en un archivo (ya existe), Middleware por separado
**Rationale**: Estándar en Express para proyectos medianos. Separa responsabilidad: routes definen endpoints, controllers tienen lógica de negocio.

### Decision: Context API para estado global

**Choice**: React Context en lugar de Redux/Zustand
**Alternatives considered**: Redux (overkill), Zustand (lightweight pero nueva lib), prop drilling
**Rationale**: Context es built-in de React. Para esta app simple es suficiente. Evita agregar nueva dependencia.

### Decision: React Router v6

**Choice**: react-router-dom última versión
**Alternatives considered**: Reach Router, Wouter
**Rationale**: Estándar de la industria, mejor compatibilidad con React 18.

## Data Flow

### Backend
```
Request → server.js → routes/formulario.js → controllers/formularioController.js → Response
                                    ↓
                              almacenamiento (array en memoria)
```

### Frontend
```
User Action → Page Component → Context API → Backend API
                    ↓
              UI Update (re-render)
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `backend/routes/formulario.js` | Create | Define endpoints POST/GET /api/formulario |
| `backend/controllers/formularioController.js` | Create | Lógica de negocio: validación, guardado, listado |
| `backend/server.js` | Modify | Importar routes, usar app.use() |
| `frontend/src/context/MensajesContext.jsx` | Create | Context con provider para estado global |
| `frontend/src/pages/Home.jsx` | Create | Página de inicio |
| `frontend/src/pages/Formulario.jsx` | Create | Página con formulario (extraer de App.jsx) |
| `frontend/src/pages/ListaMensajes.jsx` | Create | Página para ver mensajes |
| `frontend/src/App.jsx` | Modify | Agregar Router y Navigation |
| `frontend/src/main.jsx` | Modify | Envolver App con MensajesProvider |
| `frontend/package.json` | Modify | Agregar react-router-dom |

## Interfaces

### Backend Controller
```javascript
// controllers/formularioController.js
const formularioController = {
  crear: (req, res) => { /* validación y guardado */ },
  listar: (req, res) => { /* retornar todos */ }
}
module.exports = formularioController
```

### Frontend Context
```javascript
// context/MensajesContext.jsx
const MensajesContext = createContext()
const MensajesProvider = ({ children }) => {
  const [mensajes, setMensajes] = useState([])
  // agregarMensaje, etc.
  return <Provider value={{ mensajes, agregarMensaje }}>{children}</Provider>
}
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | Controller, validación | Manual (sin test framework instalado) |
| Integration | API endpoints con curl/postman | Manual |
| E2E | Navegación en navegador | Manual |

## Migration / Rollout

No migration required. Los cambios son adiciones sin modificar datos existentes.

## Open Questions

- [ ] ¿Usar TypeScript en backend? Por ahora Keep simple con JS.
- [ ] ¿Agregar prettier/eslint? Por ahora fuera de scope.