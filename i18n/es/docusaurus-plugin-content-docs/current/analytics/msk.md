---
sidebar_position: 6
---

# Amazon Managed Streaming for Apache Kafka (MSK)

## Qué es
Un servicio completamente administrado que facilita la creación y ejecución de aplicaciones que utilizan Apache Kafka para procesar datos de streaming.

## Para qué sirve
Gestionar la infraestructura y las operaciones de Apache Kafka, permitiendo que los desarrolladores se centren en la construcción de aplicaciones de streaming.

## Casos de uso
- Construcción de pipelines de datos en tiempo real
- Monitoreo de aplicaciones e infraestructura
- Análisis de datos de clickstream e IoT
- Procesamiento de eventos y microservicios

## Puntos clave
- **Completamente administrado:** AWS gestiona el aprovisionamiento, configuración, escalado y mantenimiento de los clústeres Kafka
- **Compatible con Apache Kafka:** Utiliza versiones de código abierto de Apache Kafka, permitiendo la migración fácil de aplicaciones existentes
- **Alta disponibilidad:** Clústeres distribuidos en múltiples Zonas de Disponibilidad para resiliencia
- **Seguridad:** Integración con AWS IAM, VPC y cifrado de datos
- **Escalabilidad:** Permite escalar clústeres para satisfacer las demandas de throughput

## Comparación
- **Amazon MSK vs. Apache Kafka auto-gestionado:** MSK elimina la complejidad operativa de gestionar un clúster Kafka, incluyendo parches, copias de seguridad y monitoreo, mientras que Kafka auto-gestionado requiere que el usuario se encargue de todas estas tareas.
- **Amazon MSK vs. Kinesis Data Streams:** Ambos son servicios de streaming de datos. Kinesis Data Streams es un servicio propietario de AWS, mientras que MSK está basado en Apache Kafka de código abierto. La elección depende de la familiaridad con Kafka y la necesidad de compatibilidad con ecosistemas Kafka existentes. 