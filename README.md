# Evaluación Técnica - Creación de una Aplicación de Agendamiento Médico en Tiempo Real

El propósito de esta evaluación técnica es evaluar tus habilidades en el manejo del conjunto de herramientas que empleamos en nuestra operación diaria.

## Contexto

Un médico asociado a nuestra red podría necesitar un mecanismo efectivo y en tiempo real para gestionar sus citas. Para satisfacer esta necesidad, estamos buscando desarrollar una aplicación web que permita visualizar, crear, modificar y eliminar citas.

La aplicación requerirá el uso de Next.js, Typescript y Tailwind para el frontend, Apolo para el manejo de peticiones, y GraphQL para la creación de un middleware que permita la comunicación con nuestros microservicios. Los detalles de la API los puedes encontrar [aquí](https://documenter.getpostman.com/view/12354386/2s9XxySZ7M). Se permite la utilización de bibliotecas basadas en Tailwind como TailwindUI o Shadcn.UI. Si lo cree conveniente puede usar redux para el manejo del estado global.

Para la actualización en tiempo real de la agenda, será necesario implementar WebSockets.

El diseño debe seguir [este modelo](https://www.figma.com/file/YfkeNoNQ1bCMuruu3Pox8r/Prueba-t%C3%A9cnica---Doctoc?type=design&node-id=1%3A2&mode=design&t=LclTxMljKl186VGI-1).

## Expectativas

### Funcionalidad

1. **Visualización de Citas**: La aplicación debe facilitar a los usuarios la visualización de las citas programadas.

2. **Creación de Citas**: Los usuarios deben tener la capacidad de agendar nuevas citas.

3. **Modificación de Citas**: Los usuarios deben tener la posibilidad de cambiar los detalles de las citas existentes.

4. **Cancelación de Citas**: Los usuarios deben poder cancelar citas.

5. **Tiempo Real**: La agenda debe reflejar cambios en tiempo real a través de la implementación de WebSockets.

6. **Pruebas**: La aplicación debe incluir AL MENOS un test. Realiza el test que consideres más relevante para la aplicación.

7. **Despliegue**: La aplicación debe estar alojada en un servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y ser accesible a través de una URL pública. Por favor, incluye la URL en el README.

## Consideraciones en el Desarrollo del Código

1. **Estética de Código**: Es importante que el código mantenga una estética coherente y organizada. Herramientas como Prettier pueden ayudarte a lograrlo.

2. **Prontitud para el Despliegue**: Verifica que tu aplicación esté optimizada y lista para su despliegue en un entorno de producción. Esto podría incluir minimizar el código, optimizar imágenes, entre otros.

3. **Mentalidad Colaborativa**: Diseña y codifica tu proyecto de tal manera que cualquier miembro del equipo pueda entenderlo y colaborar en él. Esto podría implicar la inclusión de scripts en el package.json, proporcionar documentación básica en el README, y añadir comentarios pertinentes en el código.

4. **Adherencia a la Arquitectura Limpia**: Intenta seguir los principios de la Arquitectura Limpia en tu proyecto, para mantener un diseño modular y separado de responsabilidades.

5. **Claridad y Organización del Código**: Tu código debe ser legible y su estructura debe facilitar la comprensión. Un código bien organizado es más fácil de mantener y extender.

## Desafíos Extra

**¿Quieres demostrar más?** Aquí te dejamos algunos desafíos adicionales:

- Implementar la vista semanal.
- Añadir un mecanismo de autenticación.
- Diseño responsive.

## Entrevista

Serás invitado a una entrevista con nosotros. Durante la entrevista:

- Deberás explicar el código que has escrito y las decisiones que has tomado.
- Añadiremos un nuevo filtro a la aplicación y tendrás que implementarlo.

Una vez cumplidos los requisitos, puedes solicitar la revisión de tu evaluación en [este enlace](https://cal.com/josedrz/revision-de-prueba-tecnica). 

**La evaluación estará abierta para revisión hasta el 25 de agosto de 2023**

## Referencias

- Diseño de la aplicación de agendamiento médico por Doctoc: https://www.figma.com/file/YfkeNoNQ1bCMuruu3Pox8r/Prueba-t%C3%A9cnica---Doctoc?type=design&node-id=1%3A2&mode=design&t=ztqsm2n33wzQUliD-1

- Documentación de la API: https://documenter.getpostman.com/view/12354386/2s9XxySZ7M
