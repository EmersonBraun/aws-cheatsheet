---
sidebar_position: 1
---

# Amazon Athena

## Qué es
Servicio de consultas interactivas sin servidor que permite analizar datos directamente en Amazon S3 utilizando SQL estándar.

## Para qué sirve
Ideal para análisis de datos ad-hoc y exploración de datos en lagos de datos sin la necesidad de gestionar infraestructura.

## Casos de uso
- Análisis de logs (ej: logs de servidor web en S3)
- Exploración de datos ad-hoc (ej: analizar nuevos conjuntos de datos en S3)
- Consulta a lagos de datos (ej: consultar datos de transacciones de clientes en S3)
- Informes de inteligencia empresarial (integrado con herramientas de BI como Amazon QuickSight)

## Puntos clave
- **Sin servidor:** No hay infraestructura que gestionar
- **Pago por consulta:** Solo paga por los datos escaneados por sus consultas
- **SQL estándar:** Utiliza SQL ANSI estándar, facilitando su uso para quienes ya conocen SQL
- **Integración con S3:** Consulta datos directamente en Amazon S3, soportando diversos formatos (CSV, JSON, Parquet)
- **Integración con AWS Glue:** Utiliza el Glue Data Catalog para metadatos

## Comparación con Amazon Redshift
- **Athena:** Enfocado en análisis ad-hoc de datos en S3, sin servidor, pago por consulta. Mejor para cargas de trabajo intermitentes o variables.
- **Redshift:** Almacén de datos completamente administrado, ideal para análisis e informes complejos y a gran escala, con datos estructurados que requieren consultas y transformaciones frecuentes. Pago basado en el tamaño y uso del clúster. Alto rendimiento para consultas complejas. 