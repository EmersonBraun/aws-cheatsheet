---
sidebar_position: 4
---

# AWS Kinesis Data Streams

## Qué es
Un servicio de streaming de datos en tiempo real que permite recolectar y procesar grandes flujos de registros de datos.

## Para qué sirve
Construir aplicaciones personalizadas que procesan datos de streaming para análisis en tiempo real, monitoreo de aplicaciones, detección de fraudes, etc.

## Casos de uso
- Recolección de logs de aplicaciones y sistemas
- Ingesta de datos de IoT (Internet de las Cosas)
- Análisis de clickstream en tiempo real
- Monitoreo de seguridad y detección de anomalías
- Procesamiento de datos para aprendizaje automático en tiempo real

## Puntos clave
- **Tiempo real:** Procesa datos en milisegundos
- **Escalable:** Puede manejar gigabytes por segundo de datos de miles de fuentes
- **Durabilidad:** Los datos se almacenan hasta por 7 días (o 1 año con retención extendida)
- **Orden de los datos:** Garantiza el orden de los registros dentro de un shard
- **Integración:** Se integra con otros servicios AWS, como Lambda, S3, Redshift, etc.

## Comparación con Amazon Kinesis Data Firehose
- **Kinesis Data Streams:** Ofrece mayor control y flexibilidad para desarrollar aplicaciones personalizadas que consumen y procesan datos de streaming en tiempo real. Usted gestiona los shards y la capacidad.
- **Kinesis Data Firehose:** Un servicio completamente administrado para cargar datos de streaming a destinos como S3, Redshift, OpenSearch Service y Splunk. Es más simple de usar para ingesta de datos sin la necesidad de escribir código para consumidores. 