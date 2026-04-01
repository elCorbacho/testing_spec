# Quickstart Guide

## Prerequisites

- Node.js (LTS version)
- npm or yarn

## Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Server runs at `http://localhost:3001`

## API Testing

### Health Check
```bash
curl http://localhost:3001/health
```

### Tickets API

**Create ticket:**
```bash
curl -X POST http://localhost:3001/api/tickets \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Bug en login","descripcion":"No funciona el inicio de sesión"}'
```

**List tickets:**
```bash
curl http://localhost:3001/api/tickets
```

**Get single ticket:**
```bash
curl http://localhost:3001/api/tickets/1
```

**Update ticket:**
```bash
curl -X PUT http://localhost:3001/api/tickets/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Nuevo título"}'
```

**Delete ticket:**
```bash
curl -X DELETE http://localhost:3001/api/tickets/1
```

**Change status:**
```bash
curl -X PATCH http://localhost:3001/api/tickets/1/estado \
  -H "Content-Type: application/json" \
  -d '{"estado":"cerrado"}'
```

### Formularios API

**Create submission:**
```bash
curl -X POST http://localhost:3001/api/formularios \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Juan","email":"juan@example.com","mensaje":"Hola"}'
```

**List submissions:**
```bash
curl http://localhost:3001/api/formularios
```

### Pagination

Add query parameters:
```bash
curl "http://localhost:3001/api/tickets?page=1&pageSize=10"
```

## Running Tests

```bash
npm test
```