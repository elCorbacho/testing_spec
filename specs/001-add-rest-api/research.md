# Research: REST API Implementation

## Unknowns to Resolve

### 1. Performance Goals
**Question**: What are the performance targets for the API?
**Status**: NEEDS CLARIFICATION

### 2. Constraints
**Question**: Any specific constraints like max response size, rate limits?
**Status**: NEEDS CLARIFICATION

### 3. Storage for Production
**Question**: Current implementation uses in-memory storage. Should this remain or add persistence?
**Status**: NEEDS CLARIFICATION - default assumption: in-memory remains for MVP, production would need persistence

## Best Practices: REST API Design

### Decision: Use Express.js for Node.js REST API
**Rationale**: 
- Existing project already uses Express (from package.json)
- Industry standard for Node.js web services
- Well-documented with extensive middleware ecosystem
- Simple routing and middleware pattern

**Alternatives considered**:
- FastAPI (Python) - not suitable, project is Node.js
- Koa - more minimal, steeper learning curve
- Hapi - good but less community support than Express

## API Design Patterns

### Decision: Follow standard REST conventions
**Rationale**: 
- GET /resource - retrieve collection
- GET /resource/:id - retrieve single item
- POST /resource - create new item
- PUT/PATCH /resource/:id - update item
- DELETE /resource/:id - remove item

**Alternatives considered**:
- GraphQL - more complex, better for complex queries but overkill here
- RPC-style - less standard, harder for clients to consume

### Response Format Standard

**Decision**: JSON response format with consistent structure
**Rationale**: 
- Industry standard
- JavaScript native
- Easy to parse and debug
- Consistent structure helps client developers

**Response structure**:
```json
{
  "success": true,
  "data": { ... },
  "meta": { "timestamp": "...", "version": "1.0" }
}
```

**Error structure**:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```

### Pagination Standard

**Decision**: Offset-based pagination with page/pageSize or skip/limit
**Rationale**: 
- Simple to implement
- Familiar pattern for developers
- Works well for most use cases

**Query parameters**:
- `page` (default: 1)
- `pageSize` (default: 20, max: 100)

**Response includes**:
- `pagination.total`
- `pagination.page`
- `pagination.pageSize`
- `pagination.totalPages`

### Error Handling

**Decision**: Map HTTP status codes appropriately
**Rationale**: Standard HTTP semantics help clients handle errors

**Status codes**:
- 200 - Success (GET, PUT, PATCH)
- 201 - Created (POST)
- 400 - Bad Request (validation failure)
- 404 - Not Found (resource doesn't exist)
- 500 - Internal Server Error

## Existing Backend Analysis

### Current Routes (to be enhanced)
- `/tickets` (POST, GET, PATCH :id/estado)
- `/formulario` (POST, GET, GET /formularios)

### Observations
- Routes exist but lack consistency (GET /formulario and GET /formularios both exist)
- No DELETE endpoints currently
- No PUT/PATCH for formulario
- In-memory storage only
- No validation middleware apparent

## Recommended Implementation Approach

1. **Standardize existing routes** - Fix inconsistency in formulario routes
2. **Add missing CRUD operations** - Add DELETE, PUT/PATCH for both resources
3. **Add validation** - Request body validation middleware
4. **Add error handling** - Consistent error response structure
5. **Add pagination** - For list endpoints
6. **Keep in-memory storage** - As per MVP assumption, can enhance later