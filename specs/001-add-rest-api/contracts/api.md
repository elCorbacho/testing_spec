# API Contracts

## External API Interface

This project exposes a REST API that external clients (web, mobile, other services) consume.

### Base URL
```
http://localhost:3001/api
```

### Endpoints

#### Tickets

**POST /tickets** - Create a new ticket
- Request body:
  ```json
  {
    "titulo": "string (required)",
    "descripcion": "string (required)",
    "prioridad": "baja|media|alta (optional, default: media)"
  }
  ```
- Response (201):
  ```json
  {
    "success": true,
    "message": "Ticket creado correctamente",
    "data": { "id": 123, "titulo": "...", "estado": "abierto", ... }
  }
  ```

**GET /tickets** - List all tickets
- Query params: `page`, `pageSize`, `sort`, `order`
- Response (200):
  ```json
  {
    "success": true,
    "data": [...],
    "meta": { "pagination": { "total": 10, "page": 1, "pageSize": 20 } }
  }
  ```

**GET /tickets/:id** - Get single ticket
- Response (200) or (404)

**PUT /tickets/:id** - Update ticket
- Request body: partial or full ticket object

**DELETE /tickets/:id** - Delete ticket
- Response (200) or (404)

**PATCH /tickets/:id/estado** - Change status (existing)
- Request body: `{ "estado": "abierto|en progreso|cerrado" }`

#### Formularios

**POST /formularios** - Create submission
- Request body:
  ```json
  {
    "nombre": "string (required)",
    "email": "string (required)",
    "mensaje": "string (required)"
  }
  ```

**GET /formularios** - List submissions
- Query params: `page`, `pageSize`, `sort`, `order`

**GET /formularios/:id** - Get single submission

**PUT /formularios/:id** - Update submission

**DELETE /formularios/:id** - Delete submission

### Error Codes

| Code | Description |
|------|-------------|
| VALIDATION_ERROR | Invalid request body |
| NOT_FOUND | Resource doesn't exist |
| INTERNAL_ERROR | Server error |

### Versioning

API version: `1.0` (included in response meta)