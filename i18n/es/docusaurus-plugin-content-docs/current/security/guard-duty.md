---
sidebar_position: 2
---

# AWS GuardDuty

## Qué es
Un servicio de detección de amenazas que monitorea continuamente actividades maliciosas y comportamientos no autorizados para proteger tus cuentas, cargas de trabajo y datos en AWS.

## Para qué sirve
Identificar amenazas potenciales, como accesos no autorizados, uso de credenciales comprometidas, ataques de denegación de servicio (DDoS) y otras actividades sospechosas.

## Casos de uso
- Detección de actividades inusuales en cuentas AWS (por ejemplo, llamadas a la API desde regiones inusuales).
- Identificación de instancias EC2 comprometidas (por ejemplo, minería de criptomonedas, ataques de fuerza bruta).
- Monitoreo de acceso a buckets S3 (por ejemplo, acceso desde IPs maliciosas).
- Detección de amenazas en tiempo real para cargas de trabajo de IA generativa.
- Acelerar investigaciones de seguridad y automatizar la remediación.

## Puntos clave
- **Monitoreo continuo:** Analiza los registros de eventos de AWS CloudTrail, los registros de flujo de VPC y los registros de DNS.
- **Inteligencia de amenazas:** Utiliza fuentes de inteligencia de amenazas y aprendizaje automático para identificar actividades sospechosas.
- **Sin agente:** No requiere la instalación de agentes en tus instancias.
- **Totalmente gestionado:** AWS gestiona la infraestructura y las actualizaciones de inteligencia de amenazas.
- **Integración:** Se integra con AWS Security Hub, Amazon EventBridge y AWS Lambda para la automatización de respuestas.

## Comparativo
- **AWS GuardDuty:** Enfocado en la detección de amenazas en tiempo real e identificación de actividades maliciosas en tu cuenta AWS, utilizando inteligencia de amenazas y aprendizaje automático.
- **AWS WAF (Web Application Firewall):** Protege aplicaciones web contra ataques comunes como inyección SQL y cross-site scripting.
- **AWS Security Hub:** Agrega, organiza y prioriza alertas de seguridad de varios servicios AWS y socios, proporcionando una vista centralizada de tu postura de seguridad. 