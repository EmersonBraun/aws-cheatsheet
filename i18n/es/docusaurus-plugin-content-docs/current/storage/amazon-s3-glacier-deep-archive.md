---
sidebar_position: 1
---

# Amazon S3 Glacier Deep Archive

## ¿Qué es?
La clase de almacenamiento más económica de Amazon S3, diseñada para retención de datos a largo plazo con acceso muy poco frecuente.

## ¿Para qué sirve?
Almacenar datos que requieren conservación a largo plazo (7-10 años o más) con acceso muy infrecuente, cumpliendo con requisitos regulatorios y de conformidad.

## Casos de uso
- Archivo de datos históricos
- Cumplimiento regulatorio
- Conservación de registros médicos
- Almacenamiento de medios digitales
- Backup a largo plazo
- Preservación de datos científicos

## Puntos principales
- **Costo mínimo:** La opción más económica de almacenamiento en S3
- **Durabilidad:** 99.999999999% (11 nueves)
- **Tiempo de recuperación:** 12-48 horas
- **Compromiso mínimo:** 180 días
- **Cifrado:** Automático en reposo
- **Integración:** Compatible con S3 Lifecycle

## Comparativa con otras clases de almacenamiento
- **S3 Glacier Deep Archive:** Optimizado para datos raramente accedidos, con el menor costo pero mayor tiempo de recuperación.
- **Otras clases S3:** Ofrecen acceso más rápido pero a mayor costo, más adecuadas para datos accedidos con mayor frecuencia. 