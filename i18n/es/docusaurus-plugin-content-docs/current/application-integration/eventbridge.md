---
sidebar_position: 3
---

# AWS EventBridge

## Qué es
Un bus de eventos sin servidor que facilita la conexión de componentes de aplicaciones utilizando eventos, haciendo más fácil la creación de aplicaciones escalables orientadas a eventos.

## Para qué sirve
Enrutamiento de eventos desde varias fuentes (servicios AWS, aplicaciones personalizadas, SaaS) a diferentes destinos (funciones Lambda, SQS, SNS, etc.) para construir arquitecturas orientadas a eventos.

## Casos de uso
- Construcción de arquitecturas orientadas a eventos y microservicios desacoplados
- Integración de aplicaciones y servicios SaaS
- Automatización de flujos de trabajo en respuesta a eventos
- Monitoreo de cambios en recursos AWS
- Auditoría y cumplimiento

## Puntos clave
- **Sin servidor:** No hay infraestructura que gestionar
- **Bus de eventos:** Actúa como un hub central para eventos
- **Reglas:** Permite definir reglas para filtrar y enrutar eventos a destinos específicos
- **Fuentes de eventos:** Soporta eventos de servicios AWS, aplicaciones personalizadas y socios SaaS
- **Destinos:** Puede enviar eventos a funciones Lambda, SQS, SNS, Step Functions, etc.

## Comparación con AWS SNS
- **AWS EventBridge:** Enfocado en enrutamiento de eventos y construcción de arquitecturas orientadas a eventos, con filtrado avanzado y capacidad de enrutar eventos de diversas fuentes a múltiples destinos. Ideal para escenarios donde la lógica de negocio es activada por eventos.
- **AWS SNS (Simple Notification Service):** Un servicio de mensajería pub/sub (publicación/suscripción) que permite enviar mensajes a un gran número de suscriptores (correo electrónico, SMS, funciones Lambda, SQS, etc.). Está más enfocado en notificación y entrega de mensajes a múltiples endpoints, sin la misma capacidad de filtrado y enrutamiento complejo de eventos de EventBridge. 