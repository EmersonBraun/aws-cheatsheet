---
sidebar_position: 3
---

# Informe de Costos y Uso de AWS (CUR)

## Qué es
Un informe completo y detallado sobre sus costos y uso de AWS, entregado a un bucket S3.

## Para qué sirve
Proporcionar datos granulares para análisis detallado de costos, auditoría, optimización e integración con herramientas de inteligencia empresarial (BI) o sistemas de gestión financiera.

## Casos de uso
- Análisis detallado de costos y uso por hora, día, servicio, recurso, etiquetas, etc.
- Integración con herramientas de BI de terceros para crear paneles e informes personalizados.
- Automatización de procesos de facturación y asignación de costos.
- Auditoría de uso y cumplimiento.
- Identificación de oportunidades de optimización de costos a nivel granular.

## Puntos clave
- **Datos granulares:** Proporciona el conjunto más detallado de datos de costos y uso de AWS.
- **Entrega en S3:** Los informes se entregan a un bucket S3, permitiendo fácil acceso y procesamiento.
- **Integración:** Puede integrarse con Athena, Redshift, QuickSight y otras herramientas para análisis.
- **Metadatos:** Incluye metadatos adicionales sobre servicios, precios e instancias reservadas.
- **Personalizable:** Permite elegir la granularidad (hora o día) e incluir datos de recursos.

## Comparación
- **Informe de Costos y Uso de AWS (CUR) vs. AWS Cost Explorer:** El CUR proporciona un conjunto de datos completo y detallado sobre sus costos y uso de AWS, entregado a un bucket S3. Es ideal para análisis más profundos, integración con otras herramientas de BI y automatización de procesos de facturación, pero requiere más esfuerzo para configurar y analizar. Cost Explorer es una herramienta interactiva para la visualización y análisis de costos, ideal para explorar y comprender rápidamente el gasto de manera visual. Se centra en el análisis histórico y el pronóstico.