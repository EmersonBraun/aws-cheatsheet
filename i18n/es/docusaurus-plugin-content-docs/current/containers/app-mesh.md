---
sidebar_position: 1
---

# AWS App Mesh

## Qué es
Una malla de servicios que facilita el monitoreo y control de las comunicaciones entre microservicios en sus aplicaciones.

## Para qué sirve
Estandarizar la forma en que los microservicios se comunican, proporcionando características como control de tráfico, resiliencia, observabilidad y seguridad, sin necesidad de modificar el código de la aplicación.

## Casos de uso
- Gestión de tráfico para implementaciones canary y azul/verde
- Implementación de reintentos y tiempos de espera para aumentar la resiliencia de la aplicación
- Recopilación de métricas, logs y trazas para observabilidad de microservicios
- Cifrado de tráfico entre microservicios
- Aplicación de políticas de seguridad a nivel de red para microservicios

## Puntos principales
- **Proxy Envoy:** Utiliza el proxy Envoy de código abierto para el enrutamiento de tráfico y recopilación de datos
- **Control de tráfico:** Permite enrutar el tráfico basado en reglas, como peso o encabezados HTTP
- **Resiliencia:** Soporta reintentos, tiempos de espera, circuit breakers y otras técnicas para manejar fallos
- **Observabilidad:** Recopila métricas, logs y trazas para proporcionar información sobre el comportamiento de los microservicios
- **Seguridad:** Permite cifrar el tráfico y aplicar políticas de seguridad
- **Integración:** Se integra con Amazon ECS, Amazon EKS, AWS Fargate y Kubernetes

## Comparación con gestión de microservicios sin malla de servicios
- **AWS App Mesh:** Simplifica la gestión de microservicios al abstraer la complejidad de la comunicación entre ellos y proporcionar características avanzadas de red, resiliencia y observabilidad sin necesidad de modificar el código de la aplicación. Ideal para entornos complejos de microservicios.
- **Gestión sin malla de servicios:** Requiere que los desarrolladores implementen la lógica de comunicación, resiliencia y observabilidad en cada microservicio, lo que puede ser complejo, propenso a errores y difícil de mantener a escala. 