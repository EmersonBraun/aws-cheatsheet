---
sidebar_position: 1
---

# AWS Global Accelerator

## ¿Qué es?
Un servicio que mejora la disponibilidad y rendimiento de sus aplicaciones usando la red global de AWS, ofreciendo IPs estáticas y enrutamiento inteligente.

## ¿Para qué sirve?
Optimizar el enrutamiento de tráfico global, reducir latencia y mejorar la disponibilidad de aplicaciones distribuidas en múltiples regiones AWS.

## Casos de uso
- Distribución global de aplicaciones
- Balanceo de carga multi-región
- Migración de tráfico entre regiones
- Recuperación ante desastres
- Gaming y aplicaciones en tiempo real
- Streaming de medios

## Puntos principales
- **IPs estáticas:** Proporciona direcciones IP fijas globales
- **Enrutamiento inteligente:** Optimización basada en latencia
- **Health checks:** Monitoreo continuo de endpoints
- **Failover automático:** Redirección en caso de fallos
- **Seguridad:** Integración con AWS Shield
- **Multi-región:** Soporte para endpoints en diferentes regiones

## Comparativa con DNS tradicional
- **AWS Global Accelerator:** Ofrece enrutamiento optimizado en la red AWS, IPs estáticas globales y failover automático en segundos.
- **DNS tradicional:** Depende de propagación DNS (que puede llevar minutos u horas), no ofrece optimización de enrutamiento en la capa de red y tiene limitaciones para failover rápido. 