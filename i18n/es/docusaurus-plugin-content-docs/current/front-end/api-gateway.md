---
sidebar_position: 1
---

# Amazon API Gateway

## Qué es
Un servicio totalmente administrado que permite que los desarrolladores creen, publiquen, mantengan, monitoreen y protejan APIs REST, HTTP y WebSocket en cualquier escala.

## Para qué sirve
Actuar como una "puerta de entrada" para aplicaciones, permitiendo que los clientes accedan a datos, lógica de negocio o funcionalidades de backend de forma segura y escalable.

## Casos de uso
- Creación de APIs para aplicaciones web y móviles
- Exposición de funciones AWS Lambda como APIs
- Integración de aplicaciones con servicios de backend
- Construcción de microservicios y APIs serverless
- Habilitar comunicación en tiempo real con APIs WebSocket

## Puntos principales
- **Totalmente administrado:** AWS se encarga del aprovisionamiento, escalabilidad, seguridad y monitoreo
- **Tipos de API:** Soporta APIs REST (HTTP/S), HTTP APIs (más simples y económicas) y WebSocket APIs (para comunicación bidireccional en tiempo real)
- **Seguridad:** Integración con AWS IAM, Amazon Cognito, autorizadores Lambda y claves de API
- **Caché:** Permite configurar caché para reducir la latencia y la carga en los servicios de backend
- **Throttling y cuotas:** Permite controlar el tráfico para proteger sus servicios de backend
- **Monitoreo:** Integración con Amazon CloudWatch para monitoreo y logs

## Comparativo
- **Amazon API Gateway:** Un servicio versátil para crear y administrar APIs REST, HTTP y WebSocket. Es más genérico y adecuado para una amplia gama de APIs, incluyendo aquellas que no requieren GraphQL o recursos en tiempo real avanzados.
- **AWS AppSync:** Ideal para construir APIs GraphQL que requieren recursos en tiempo real, sincronización sin conexión y agregación de datos de múltiples fuentes. Enfocado en flexibilidad de consulta y eficiencia de datos. 