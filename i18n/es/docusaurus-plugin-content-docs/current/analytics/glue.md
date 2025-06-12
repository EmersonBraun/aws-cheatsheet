---
sidebar_position: 8
---

# AWS Glue

## Qué es
Un servicio de integración de datos sin servidor y completamente administrado que facilita el descubrimiento, preparación, movimiento e integración de datos de varias fuentes para análisis, aprendizaje automático y desarrollo de aplicaciones.

## Para qué sirve
Realizar operaciones ETL (Extract, Transform, Load) a gran escala, automatizar pipelines de datos y gestionar metadatos de datos.

## Casos de uso
- Preparación de datos para almacenes de datos y lagos de datos
- Transformación de datos para aprendizaje automático
- Catálogo de datos para descubrimiento y gobernanza de datos
- Integración de datos de diferentes fuentes
- Automatización de tareas ETL

## Puntos clave
- **Sin servidor:** No hay infraestructura que provisionar o gestionar
- **Catálogo de Datos:** El AWS Glue Data Catalog es un repositorio central de metadatos para todos sus activos de datos
- **ETL:** Soporta ETL visual con AWS Glue Studio, así como scripts en Python y Scala
- **Crawlers:** Descubre automáticamente el esquema de los datos y los metadatos
- **Integración:** Se integra con otros servicios AWS, como S3, Redshift, Athena, EMR, etc.

## Comparación con Amazon EMR
- **AWS Glue:** Un servicio ETL sin servidor y completamente administrado, ideal para transformaciones de datos más simples y automatizadas, y para catalogar datos. Más adecuado para desarrolladores que prefieren un enfoque sin código o con poco código.
- **Amazon EMR:** Más flexible para cargas de trabajo complejas de big data que requieren control sobre el clúster y la capacidad de usar diferentes frameworks (Hadoop, Spark, etc.). Requiere más gestión de la infraestructura subyacente. 