---
sidebar_position: 2
---

# Amazon Lookout for Metrics

## ¿Qué es?
Un servicio de machine learning que detecta automáticamente anomalías (valores atípicos) en sus datos comerciales y operativos, y ayuda a determinar sus causas raíz.

## ¿Para qué sirve?
Monitorear continuamente el rendimiento comercial y operativo, identificar variaciones inusuales en métricas importantes y alertar sobre problemas para que pueda remediarlos rápidamente.

## Casos de uso
- Monitoreo de métricas de ventas e ingresos para detectar caídas o picos inesperados.
- Detección de anomalías en tasas de conversión de sitios web o aplicaciones.
- Monitoreo de métricas de rendimiento de aplicaciones (ej: latencia, errores) para identificar problemas.
- Análisis de datos de marketing para detectar campañas con rendimiento inusual.
- Identificación de problemas en cadenas de suministro u operaciones.

## Puntos principales
- **Detección automática de anomalías:** Utiliza machine learning para identificar patrones inusuales en los datos.
- **Causa raíz:** Ayuda a determinar la causa raíz de las anomalías, proporcionando insights accionables.
- **Totalmente administrado:** No requiere experiencia en machine learning para usar el servicio.
- **Fuentes de datos:** Se conecta a varias fuentes de datos, incluyendo Amazon S3, Redshift, RDS y SaaS (Salesforce, Google Analytics).
- **Alertas:** Envía alertas a canales como Amazon SNS, AWS Lambda o PagerDuty.
- **Retroalimentación:** Permite proporcionar feedback sobre las anomalías detectadas para mejorar la precisión del modelo.

## Comparativa con monitoreo tradicional basado en umbrales
- **Amazon Lookout for Metrics:** Utiliza machine learning para detectar anomalías complejas y sutiles que pueden perderse con umbrales estáticos. Se adapta a patrones de datos en constante cambio y reduce falsos positivos, proporcionando insights más precisos y accionables.
- **Monitoreo tradicional basado en umbrales:** Depende de umbrales predefinidos que pueden ser difíciles de mantener y ajustar, especialmente para métricas con patrones estacionales o tendencias. Puede generar muchos falsos positivos o perder anomalías importantes que no superan los umbrales. 