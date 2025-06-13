---
sidebar_position: 2
---

# Amazon Inspector

## Qué es
Un servicio de gestión de vulnerabilidades que descubre automáticamente cargas de trabajo y las verifica continuamente en busca de vulnerabilidades de software y exposiciones de red no intencionadas.

## Para qué sirve
Identificar vulnerabilidades de seguridad en tus instancias EC2, imágenes de contenedor y funciones Lambda, así como configuraciones de red que puedan exponer tus recursos a riesgos.

## Casos de uso
- Detección de vulnerabilidades en sistemas operativos y aplicaciones en instancias EC2.
- Análisis de seguridad de imágenes de contenedor almacenadas en Amazon ECR.
- Verificación de vulnerabilidades en funciones AWS Lambda.
- Identificación de puertos de red abiertos y configuraciones de seguridad inadecuadas.
- Ayuda en el cumplimiento de estándares de seguridad (por ejemplo, CIS Benchmarks).

## Puntos clave
- **Verificación continua:** Monitorea continuamente tus recursos en busca de nuevas vulnerabilidades.
- **Descubrimiento automático:** Descubre automáticamente cargas de trabajo elegibles para verificación.
- **Análisis de vulnerabilidades:** Identifica vulnerabilidades conocidas (CVEs) en software y configuraciones.
- **Análisis de red:** Evalúa la accesibilidad de red de tus instancias EC2.
- **Informes detallados:** Proporciona informes detallados sobre las vulnerabilidades encontradas y recomendaciones para su corrección.
- **Integración:** Se integra con AWS Security Hub, Amazon EventBridge y AWS Systems Manager.

## Comparativo
- **Amazon Inspector:** Ofrece un servicio de gestión de vulnerabilidades totalmente gestionado y automatizado, con verificación continua e integración nativa con el entorno AWS. Reduce la complejidad y el esfuerzo manual de los escaneos tradicionales.
- **Escaneos de vulnerabilidad tradicionales:** Generalmente requieren la instalación y gestión de software de escaneo, programación manual y análisis de informes complejos. Pueden no tener el mismo nivel de integración y automatización que ofrece Inspector en AWS. 