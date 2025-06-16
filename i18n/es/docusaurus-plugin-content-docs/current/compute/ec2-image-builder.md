---
sidebar_position: 2
---

# AWS EC2 Image Builder

## Qué es
Un servicio totalmente gestionado que simplifica la creación, prueba e implementación de Amazon Machine Images (AMIs) seguras y personalizadas e imágenes de contenedores.

## Para qué sirve
Automatizar el proceso de construcción de imágenes de servidor y contenedor, garantizando que estén actualizadas, seguras y en cumplimiento con los estándares de su organización.

## Casos de uso
- Creación de AMIs personalizadas con software preinstalado y configuraciones de seguridad
- Mantenimiento de imágenes actualizadas con los últimos parches de seguridad
- Prueba automatizada de imágenes para garantizar la funcionalidad y el cumplimiento
- Distribución de imágenes a diferentes regiones o cuentas AWS
- Construcción de imágenes de contenedores para uso con Amazon ECS, EKS o Fargate

## Puntos principales
- **Totalmente gestionado:** AWS se encarga de la infraestructura subyacente para la construcción de imágenes
- **Automatización:** Automatiza el ciclo de vida de creación, prueba y distribución de imágenes
- **Seguridad:** Ayuda a garantizar que las imágenes cumplan con los estándares de seguridad
- **Personalización:** Permite personalizar imágenes con sus propios scripts y componentes
- **Integración:** Se integra con AWS Organizations, AWS Systems Manager, Amazon S3 y otros servicios
- **Pruebas:** Incluye pruebas proporcionadas por AWS y permite añadir sus propias pruebas para validación

## Comparación con construcción manual de AMIs
- **AWS EC2 Image Builder:** Automatiza y estandariza el proceso de construcción de imágenes, reduciendo el esfuerzo manual, los errores y garantizando la consistencia y seguridad de las imágenes a escala. Ideal para entornos con muchas imágenes o requisitos frecuentes de actualización.
- **Construcción manual de AMIs:** Consume mucho tiempo, propensa a errores y difícil de escalar. Requiere que los administradores gestionen manualmente el proceso de creación, actualización y prueba de imágenes, lo que puede llevar a inconsistencias y vulnerabilidades. 