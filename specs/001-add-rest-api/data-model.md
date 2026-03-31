# Data Model: REST API Endpoints

## Entities

### 1. Ticket
**Description**: Support ticket resource for tracking issues

| Field | Type | Required | Validation | Notes |
|-------|------|----------|------------|-------|
| id | number | Auto | Generated | Unique identifier |
| titulo | string | Yes | Non-empty | Ticket title |
| descripcion | string | Yes | Non-empty | Ticket description |
| prioridad | string | No | 'baja', 'media', 'alta' | Default: 'media' |
| estado | string | Auto | See transitions | Initial: 'abierto' |
| fecha | string | Auto | ISO timestamp | Creation timestamp |

**State Transitions**:
- `abierto` → `en progreso` → `cerrado`
- Can transition forward or backward

### 2. Formulario
**Description**: Contact form submission resource

| Field | Type | Required | Validation | Notes |
|-------|------|----------|------------|-------|
| id | number | Auto | Generated | Unique identifier |
| nombre | string | Yes | Non-empty | Submitter name |
| email | string | Yes | Valid email format | Contact email |
| mensaje | string | Yes | Non-empty | Message content |
| fecha | string | Auto | ISO timestamp | Submission timestamp |

**State Transitions**: N/A (no lifecycle states)

## API Endpoints Summary

### Tickets
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/tickets | Create new ticket |
| GET | /api/tickets | List all tickets |
| GET | /api/tickets/:id | Get single ticket |
| PUT/PATCH | /api/tickets/:id | Update ticket |
| DELETE | /api/tickets/:id | Delete ticket |
| PATCH | /api/tickets/:id/estado | Change ticket status |

### Formularios
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/formularios | Create new submission |
| GET | /api/formularios | List all submissions |
| GET | /api/formularios/:id | Get single submission |
| PUT/PATCH | /api/formularios/:id | Update submission |
| DELETE | /api/formularios/:id | Delete submission |

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-03-31T...",
    "version": "1.0"
  }
}
```

### Paginated Response
```json
{
  "success": true,
  "data": [...],
  "meta": {
    "timestamp": "...",
    "version": "1.0",
    "pagination": {
      "total": 100,
      "page": 1,
      "pageSize": 20,
      "totalPages": 5
    }
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human readable message"
  }
}
```

## Query Parameters

For GET /collection endpoints:
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | number | 1 | Page number |
| pageSize | number | 20 | Items per page (max 100) |
| sort | string | - | Sort field (e.g., "fecha") |
| order | string | asc | Sort order (asc/desc) |