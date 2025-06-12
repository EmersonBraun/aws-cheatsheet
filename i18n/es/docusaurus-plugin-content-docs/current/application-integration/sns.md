---
sidebar_position: 4
---

# AWS SNS (Simple Notification Service)

## Qué es
Un servicio de mensajería completamente administrado que permite enviar mensajes desde publicadores (productores) a suscriptores (clientes).

## Para qué sirve
Enviar notificaciones push, SMS, correos electrónicos y mensajes a otros servicios AWS (como SQS, Lambda) de forma escalable y confiable.

## Casos de uso
- Notificaciones de aplicaciones (ej: actualizaciones de estado, alertas)
- Mensajes entre microservicios
- Envío de SMS para autenticación de dos factores
- Distribución de eventos a múltiples consumidores
- Monitoreo y alertas de sistemas

## Puntos clave
- **Pub/Sub (Publicación/Suscripción):** Permite que un publicador envíe un mensaje a un tópico, y todos los suscriptores de ese tópico reciben el mensaje
- **Completamente administrado:** AWS se encarga de la infraestructura y la escalabilidad
- **Múltiples protocolos:** Soporta HTTP/S, correo electrónico, SMS, SQS, Lambda, notificaciones push
- **Alta disponibilidad:** Diseñado para ser altamente disponible y duradero
- **Filtrado de mensajes:** Permite que los suscriptores filtren los mensajes que desean recibir

## Comparación con AWS SQS
- **AWS SNS:** Un servicio de notificación pub/sub, donde un mensaje se envía a un tópico y se entrega a todos los suscriptores. Ideal para escenarios donde el mismo mensaje necesita ser entregado a múltiples consumidores.
- **AWS SQS (Simple Queue Service):** Un servicio de cola de mensajes que permite el desacoplamiento de componentes de aplicaciones. Los mensajes se almacenan en una cola hasta que un consumidor los procese. Ideal para escenarios donde los mensajes necesitan ser procesados por un único consumidor o donde el orden y la garantía de entrega son cruciales. 