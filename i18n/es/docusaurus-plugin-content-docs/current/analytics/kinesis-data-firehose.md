---
sidebar_position: 5
---

# Amazon Kinesis Data Firehose

## Qué es
Un servicio completamente administrado para cargar datos de streaming en tiempo real a destinos como Amazon S3, Amazon Redshift, Amazon OpenSearch Service y Splunk.

## Para qué sirve
Simplificar la ingesta y entrega de datos de streaming para almacenamiento y análisis, sin la necesidad de gestionar servidores o escribir aplicaciones consumidoras.

## Casos de uso
- Cargar logs de aplicaciones y sistemas a S3 para análisis posterior
- Ingesta de datos de clickstream a almacenes de datos como Redshift
- Enviar datos de eventos a OpenSearch Service para monitoreo y visualización
- Recolección de datos de IoT para análisis en tiempo real

## Puntos clave
- **Completamente administrado:** No hay servidores que aprovisionar o gestionar
- **Entrega en tiempo real:** Entrega datos en segundos a los destinos configurados
- **Transformación de datos:** Puede transformar, comprimir y cifrar datos antes de la entrega
- **Escalabilidad automática:** Escala automáticamente para manejar el volumen de datos de streaming
- **Integración:** Se integra con Kinesis Data Streams, Kinesis Agent y otros servicios AWS

## Comparación con AWS Kinesis Data Streams
- **Kinesis Data Firehose:** Más simple de usar para ingesta de datos en destinos específicos, sin la necesidad de desarrollar aplicaciones consumidoras. Ideal para casos de uso donde la transformación y entrega de datos están estandarizadas.
- **Kinesis Data Streams:** Ofrece mayor control y flexibilidad para desarrollar aplicaciones personalizadas que consumen y procesan datos de streaming en tiempo real. Usted gestiona los shards y la capacidad, permitiendo lógicas de procesamiento más complejas. 