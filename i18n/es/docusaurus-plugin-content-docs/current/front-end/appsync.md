---
sidebar_position: 2
---

# AWS AppSync

## Qué es
Un servicio administrado para el desarrollo de APIs GraphQL que permite que las aplicaciones obtengan exactamente los datos que necesitan, cuando los necesitan.

## Para qué sirve
Simplificar el desarrollo de aplicaciones GraphQL, proporcionando una API GraphQL administrada que se conecta a múltiples fuentes de datos y ofrece recursos en tiempo real.

## Casos de uso
- Desarrollo de aplicaciones móviles y web con sincronización sin conexión
- Construcción de APIs GraphQL para microservicios
- Implementación de recursos en tiempo real (ej: chat, notificaciones)
- Agregación de datos de múltiples fuentes en una única API
- Desarrollo de aplicaciones con requisitos de baja latencia

## Puntos principales
- **GraphQL administrado:** AWS se encarga de la infraestructura y escalabilidad de la API GraphQL
- **Tiempo real:** Soporta suscripciones GraphQL para actualizaciones en tiempo real
- **Múltiples fuentes de datos:** Se integra con DynamoDB, RDS, Lambda, HTTP APIs y más
- **Sincronización sin conexión:** Soporta sincronización de datos sin conexión para aplicaciones móviles
- **Seguridad:** Integración con AWS IAM, Amazon Cognito y autorizadores personalizados
- **Caché:** Ofrece caché en múltiples capas para mejor rendimiento

## Comparativo
- **AWS AppSync:** Ideal para construir APIs GraphQL que requieren recursos en tiempo real, sincronización sin conexión y agregación de datos de múltiples fuentes. Enfocado en flexibilidad de consulta y eficiencia de datos.
- **Amazon API Gateway:** Un servicio versátil para crear y administrar APIs REST, HTTP y WebSocket. Es más genérico y adecuado para una amplia gama de APIs, incluyendo aquellas que no requieren GraphQL o recursos en tiempo real avanzados. 