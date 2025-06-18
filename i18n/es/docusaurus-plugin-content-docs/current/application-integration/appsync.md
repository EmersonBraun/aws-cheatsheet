---
sidebar_position: 6
---

# AWS AppSync

## ¿Qué es?
Un servicio totalmente administrado que facilita el desarrollo de APIs GraphQL y Pub/Sub seguras, sin servidor y de alto rendimiento.

## ¿Para qué sirve?
Conectar aplicaciones a datos y eventos en tiempo real, permitiendo que los desarrolladores accedan exactamente a los datos que necesitan, a través de una API flexible que accede, manipula y combina datos de múltiples fuentes.

## Casos de uso
- Construcción de aplicaciones móviles y web con funciones en tiempo real (ej: chats, feeds de noticias)
- Desarrollo de aplicaciones colaborativas (ej: edición de documentos en tiempo real)
- Agregación de datos de múltiples fuentes (DynamoDB, Lambda, HTTP APIs, etc.) en una única API GraphQL
- Sincronización de datos offline para aplicaciones móviles

## Puntos principales
- **Totalmente administrado:** AWS se encarga de la infraestructura y la escalabilidad
- **GraphQL:** Soporta el estándar GraphQL para consultas flexibles y eficientes
- **Tiempo real:** Soporta suscripciones en tiempo real vía WebSocket
- **Seguridad:** Integración con AWS IAM, Cognito y otros servicios de seguridad
- **Integración:** Se conecta fácilmente con otros servicios AWS como DynamoDB, Lambda, Elasticsearch, etc.

## Comparativa
- **AWS AppSync vs. API Gateway + Lambda:** AppSync está especializado en GraphQL y ofrece funciones nativas en tiempo real, mientras que la combinación de API Gateway y Lambda es más flexible para APIs RESTful tradicionales.
- **AWS AppSync vs. Apollo Server:** AppSync es un servicio administrado que ofrece integración nativa con servicios AWS y funciones en tiempo real, mientras que Apollo Server es una solución de código abierto que requiere más configuración y administración. 