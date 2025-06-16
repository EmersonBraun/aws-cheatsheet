---
sidebar_position: 2
---

# AWS CodeCommit

## Qué es
Un servicio de control de versiones totalmente gestionado y seguro que aloja repositorios Git privados.

## Para qué sirve
Almacenar y gestionar de forma segura el código fuente, documentos y otros activos de desarrollo, facilitando la colaboración entre equipos.

## Casos de uso
- Alojamiento de repositorios de código fuente para aplicaciones y servicios
- Colaboración en proyectos de desarrollo de software
- Control de versiones de documentos y configuraciones
- Integración con pipelines de CI/CD (CodePipeline, CodeBuild, CodeDeploy)
- Almacenamiento seguro de activos de desarrollo

## Puntos principales
- **Totalmente gestionado:** No hay servidores que provisionar o gestionar
- **Compatible con Git:** Utiliza Git estándar, permitiendo que los desarrolladores usen sus herramientas Git existentes
- **Seguridad:** Cifrado de datos en tránsito y en reposo, integración con AWS IAM para control de acceso granular
- **Alta disponibilidad:** Los repositorios se almacenan en múltiples Zonas de Disponibilidad
- **Escalabilidad:** Escala automáticamente para satisfacer las necesidades de almacenamiento y acceso
- **Integración:** Se integra con otros servicios AWS y herramientas de desarrollo

## Comparación con otros servicios de control de versiones
- **AWS CodeCommit:** Ofrece un servicio de control de versiones totalmente gestionado y seguro, integrado con el ecosistema AWS. Ideal para equipos que ya utilizan otros servicios AWS y necesitan un control de versiones privado y seguro.
- **Otros servicios de control de versiones (ej: GitHub, GitLab):** Pueden ofrecer características adicionales como gestión de proyectos, wikis e integración con herramientas de terceros, pero pueden requerir configuración adicional para la integración con servicios AWS. 