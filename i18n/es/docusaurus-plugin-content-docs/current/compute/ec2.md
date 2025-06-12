---
sidebar_position: 1
---

# AWS EC2 (Elastic Compute Cloud)

## Qué es
Un servicio web que proporciona capacidad de cómputo segura y redimensionable en la nube en forma de instancias virtuales (servidores virtuales).

## Para qué sirve
Ejecutar aplicaciones, alojar sitios web, procesar datos y realizar diversas tareas de computación en la nube, con control total sobre el entorno del servidor.

## Casos de uso
- Alojamiento de aplicaciones web y sitios web
- Operación de servidores de base de datos
- Procesamiento y análisis de big data
- Entornos de desarrollo y pruebas
- Ejecución de aplicaciones empresariales

## Puntos clave
- **Instancias:** Servidores virtuales que pueden configurarse con diferentes tipos de CPU, memoria, almacenamiento y redes
- **Tipos de instancia:** Amplia selección de tipos de instancia optimizados para diferentes casos de uso (propósito general, optimizado para cómputo, optimizado para memoria, etc.)
- **Modelos de precios:** Bajo demanda, Instancias Reservadas (RIs), instancias Spot y Planes de ahorro para optimización de costos
- **Escalabilidad:** Puede escalar verticalmente (aumentar el tamaño de la instancia) u horizontalmente (agregar más instancias) con Auto Scaling
- **Seguridad:** Integración con AWS IAM, Grupos de Seguridad y ACLs de red para control de acceso y seguridad de red

## Comparación
- **AWS EC2 vs. AWS Lambda:** EC2 proporciona control total sobre el entorno del servidor, permitiendo la instalación de cualquier software y la ejecución de cargas de trabajo de larga duración. Usted es responsable de gestionar el sistema operativo y el software. Lambda es un servicio de cómputo sin servidor que ejecuta su código en respuesta a eventos, sin necesidad de aprovisionar o gestionar servidores. Ideal para funciones de corta duración y basadas en eventos donde solo paga por el tiempo de cómputo consumido. 