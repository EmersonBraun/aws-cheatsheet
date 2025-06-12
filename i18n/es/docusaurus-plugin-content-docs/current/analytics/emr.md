---
sidebar_position: 3
---

# Amazon EMR

## Qué es
Una plataforma de clúster administrada que simplifica la ejecución de frameworks de big data, como Apache Hadoop y Apache Spark, en AWS.

## Para qué sirve
Procesamiento de grandes volúmenes de datos, análisis de big data, aprendizaje automático y ejecución de consultas SQL interactivas a escala.

## Casos de uso
- Procesamiento de datos para ETL (Extract, Transform, Load)
- Análisis de datos en tiempo real y por lotes
- Aprendizaje automático y procesamiento de datos para modelos de ML
- Análisis de logs y clickstream
- Bioinformática y genómica

## Puntos clave
- **Administrado:** AWS gestiona la infraestructura del clúster, incluyendo aprovisionamiento, configuración y escalado
- **Frameworks de Big Data:** Soporta una amplia gama de frameworks de código abierto, como Hadoop, Spark, Hive, Presto, Flink, etc.
- **Escalabilidad:** Permite escalar clústeres de forma elástica para satisfacer las necesidades de procesamiento
- **Integración:** Se integra con otros servicios AWS, como Amazon S3 para almacenamiento de datos y Amazon EC2 para capacidad de cómputo
- **Rentable:** Pague solo por la capacidad que utiliza, con opciones de instancias spot para ahorrar costos

## Comparación
- **Amazon EMR vs. EC2 (auto-gestionado):** EMR simplifica la ejecución de frameworks de big data, abstraiendo la complejidad de gestionar servidores y software, mientras que la ejecución de estos frameworks directamente en EC2 requiere que el usuario configure y mantenga toda la pila de software.
- **Amazon EMR vs. AWS Glue:** EMR es más flexible para cargas de trabajo complejas de big data que requieren control sobre el clúster y la capacidad de usar diferentes frameworks. AWS Glue es un servicio ETL sin servidor y completamente administrado, ideal para transformaciones de datos más simples y automatizadas. 