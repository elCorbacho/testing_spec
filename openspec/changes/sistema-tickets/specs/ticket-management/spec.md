## ADDED Requirements

### Requirement: Crear ticket

El sistema SHALL permitir crear un ticket de soporte con título, descripción y prioridad.

#### Scenario: Creación exitosa

- **WHEN** el usuario envía el formulario con título, descripción y prioridad válidos
- **THEN** el sistema guarda el ticket con estado "abierto" y devuelve los datos del ticket creado

#### Scenario: Campos requeridos faltantes

- **WHEN** el usuario envía el formulario sin título o sin descripción
- **THEN** el sistema responde con error 400 indicando que los campos son requeridos

### Requirement: Listar tickets

El sistema SHALL permitir obtener la lista de todos los tickets creados.

#### Scenario: Listar tickets existentes

- **WHEN** el usuario solicita la lista de tickets
- **THEN** el sistema devuelve un array con todos los tickets ordenados por fecha de creación (más recientes primero)

#### Scenario: No hay tickets

- **WHEN** no existen tickets y el usuario solicita la lista
- **THEN** el sistema devuelve un array vacío

### Requirement: Cambiar estado de ticket

El sistema SHALL permitir cambiar el estado de un ticket entre "abierto", "en progreso" y "cerrado".

#### Scenario: Cambio de estado válido

- **WHEN** el usuario solicita cambiar el estado de un ticket existente a un estado válido
- **THEN** el sistema actualiza el estado y devuelve el ticket actualizado

#### Scenario: Ticket no encontrado

- **WHEN** el usuario intenta cambiar el estado de un ticket que no existe
- **THEN** el sistema responde con error 404

#### Scenario: Estado inválido

- **WHEN** el usuario solicita un estado que no es "abierto", "en progreso" ni "cerrado"
- **THEN** el sistema responde con error 400 indicando que el estado no es válido

### Requirement: Dashboard de tickets

El frontend SHALL mostrar un dashboard con métricas resumidas y listado de tickets.

#### Scenario: Mostrar métricas

- **WHEN** el usuario accede al dashboard
- **THEN** se muestran tarjetas con el total de tickets, cantidad abiertos, en progreso y cerrados

#### Scenario: Filtrar por estado

- **WHEN** el usuario selecciona un filtro de estado en el dashboard
- **THEN** se muestran solo los tickets con el estado seleccionado

#### Scenario: Mostrar todos

- **WHEN** el usuario selecciona el filtro "todos"
- **THEN** se muestran todos los tickets sin filtrar
