# Frontend SPA Specification

## Purpose

Define el comportamiento de la aplicación React con navegación entre páginas y estado global.

## Requirements

### Requirement: Navegación entre páginas

La aplicación DEBE permitir navegar entre las páginas Home, Formulario y Lista.

#### Scenario: Navegación exitosa

- GIVEN el usuario está en cualquier página
- WHEN hace click en un enlace del menú de navegación
- THEN la URL cambia y se muestra el contenido de la página correspondiente
- AND no hay recargo completo de la página (SPA)

#### Scenario: Navegación directa por URL

- GIVEN el usuario accede directamente a una URL de página (ej: /formulario)
- WHEN la aplicación carga
- THEN se muestra el contenido de esa página directamente
- AND el router mantiene el estado de navegación

### Requirement: Formulario de contacto

El formulario DEBE enviar datos al backend y mostrar estados de éxito/error.

#### Scenario: Envío exitoso

- GIVEN el usuario completó todos los campos del formulario
- WHEN hace click en "Enviar" y la solicitud es exitosa
- THEN se muestra mensaje de éxito
- AND los campos del formulario se limpian

#### Scenario: Envío con error

- GIVEN el usuario intenta enviar con campos vacíos
- WHEN hace click en "Enviar"
- THEN se muestra mensaje de error indicando el problema
- AND los campos mantienen sus valores

#### Scenario: Error de conexión

- GIVEN hay un problema de red con el backend
- WHEN el usuario envía el formulario
- THEN se muestra mensaje "Error de conexión"

### Requirement: Lista de mensajes

La página de lista DEBE mostrar todos los mensajes enviados.

#### Scenario: Ver mensajes

- GIVEN hay mensajes almacenados en el estado global
- WHEN el usuario navega a /lista
- THEN se muestra una lista con todos los mensajes
- AND cada mensaje muestra nombre, email, mensaje y fecha

#### Scenario: Sin mensajes

- GIVEN no hay mensajes en el estado global
- WHEN el usuario navega a /lista
- THEN se muestra un mensaje indicando que no hay mensajes

### Requirement: Estado global de mensajes

La aplicación DEBE mantener los mensajes en contexto global para compartir entre páginas.

#### Scenario: Nuevo mensaje agregado

- GIVEN el usuario envía un formulario exitosamente
- WHEN el backend confirma el guardado
- THEN el nuevo mensaje se añade al estado global de mensajes
- AND está disponible en la página de lista

#### Scenario: Persistencia en navegación

- GIVEN hay mensajes en el estado global
- WHEN el usuario navega entre páginas
- THEN los mensajes permanecen en el estado global
- AND no se pierden al cambiar de página