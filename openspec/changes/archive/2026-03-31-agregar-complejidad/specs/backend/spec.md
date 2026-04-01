# Backend API Specification

## Purpose

Define el comportamiento de la API REST del formulario de contacto con estructura MVC.

## Requirements

### Requirement: Enviar formulario de contacto

El sistema DEBE almacenar los datos del formulario y retornar el registro creado.

#### Scenario: Envío exitoso

- GIVEN un formulario con nombre, email y mensaje válidos
- WHEN el cliente envía POST a /api/formulario
- THEN el servidor retorna status 201 con el registro creado
- AND el registro incluye id, fecha y todos los campos enviados

#### Scenario: Envío con campos vacíos

- GIVEN un formulario con campos vacíos o faltantes
- WHEN el cliente envía POST a /api/formulario
- THEN el servidor retorna status 400 con mensaje de error
- AND no se almacena ningún registro

#### Scenario: Email inválido

- GIVEN un formulario con email sin formato válido (sin @)
- WHEN el cliente envía POST a /api/formulario
- THEN el servidor retorna status 400 con mensaje "Email inválido"
- AND no se almacena ningún registro

### Requirement: Obtener lista de mensajes

El sistema DEBE retornar todos los mensajes almacenados.

#### Scenario: Ver mensajes existentes

- GIVEN al menos un mensaje almacenado
- WHEN el cliente envía GET a /api/formularios
- THEN el servidor retorna status 200 con array de mensajes
- AND cada mensaje incluye id, nombre, email, mensaje, fecha

### Requirement: Health check

El sistema DEBE responder a verificación de estado.

#### Scenario: Servidor corriendo

- GIVEN el servidor está escuchando
- WHEN el cliente envía GET a /health
- THEN el servidor retorna status 200 con timestamp