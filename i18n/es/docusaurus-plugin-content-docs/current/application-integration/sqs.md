---
sidebar_position: 3
---

# AWS SQS (Simple Queue Service)

## Qué es
Un servicio de cola de mensajes completamente administrado que permite el desacoplamiento y la escalabilidad de microservicios, sistemas distribuidos y aplicaciones sin servidor.

## Para qué sirve
Proporcionar una cola de mensajes confiable y escalable para la comunicación asíncrona entre componentes de aplicaciones, permitiendo el procesamiento de mensajes de forma segura y eficiente.

## Casos de uso
- Desacoplamiento de componentes de aplicaciones
- Procesamiento de tareas en segundo plano
- Distribución de carga de trabajo
- Comunicación entre microservicios
- Procesamiento de eventos y streaming de datos

## Puntos clave
- **Colas FIFO y estándar:** Soporta colas FIFO (First-In-First-Out) para orden garantizado y colas estándar para mayor rendimiento
- **Visibilidad de mensajes:** Control sobre cuándo los mensajes están disponibles para otros consumidores
- **Mensajes muertos:** Almacenamiento de mensajes que no pueden ser procesados para su posterior análisis
- **Escalabilidad:** Manejo automático de la carga de trabajo sin necesidad de aprovisionamiento
- **Durabilidad:** Almacenamiento redundante de mensajes en múltiples AZs

## Comparación con AWS SNS
- **AWS SQS:** Un servicio de cola de mensajes que permite el desacoplamiento de componentes de aplicaciones. Los mensajes se almacenan en una cola hasta que un consumidor los procese. Ideal para escenarios donde los mensajes necesitan ser procesados por un único consumidor o donde el orden y la garantía de entrega son cruciales.
- **AWS SNS (Simple Notification Service):** Un servicio de notificación pub/sub, donde un mensaje se envía a un tópico y se entrega a todos los suscriptores. Ideal para escenarios donde el mismo mensaje necesita ser entregado a múltiples consumidores. 