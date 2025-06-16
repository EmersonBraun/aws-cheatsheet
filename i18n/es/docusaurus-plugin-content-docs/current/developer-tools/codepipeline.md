---
sidebar_position: 1
---

# AWS CodePipeline

## Qué es
Un servicio de entrega continua totalmente gestionado que automatiza las fases de compilación, prueba e implementación de su proceso de lanzamiento de software.

## Para qué sirve
Modelar, visualizar y automatizar el flujo de trabajo de lanzamiento de software, desde el commit del código hasta la implementación en producción, garantizando entregas rápidas y confiables.

## Casos de uso
- Automatización de pipelines de CI/CD (Integración Continua/Entrega Continua)
- Implementación automatizada de aplicaciones en entornos de desarrollo, prueba y producción
- Orquestación de diferentes herramientas de desarrollo (ej: CodeCommit, CodeBuild, CodeDeploy, Lambda)
- Gestión de flujos de trabajo de lanzamiento complejos con aprobaciones manuales o automáticas
- Entrega continua de microservicios y aplicaciones en contenedores

## Puntos principales
- **Totalmente gestionado:** No hay servidores que provisionar o gestionar
- **Flujo de trabajo visual:** Permite modelar su pipeline como un gráfico visual, facilitando la comprensión y el monitoreo
- **Integración:** Se integra con una amplia gama de servicios AWS (CodeCommit, CodeBuild, CodeDeploy, S3, Lambda, ECS, EKS) y herramientas de terceros
- **Automatización:** Automatiza cada paso del proceso de lanzamiento, reduciendo el esfuerzo manual y los errores
- **Aprobaciones:** Permite configurar aprobaciones manuales en cualquier etapa del pipeline
- **Trazabilidad:** Proporciona un historial detallado de cada ejecución del pipeline

## Comparación con pipelines de CI/CD auto-gestionados
- **AWS CodePipeline:** Ofrece un servicio de entrega continua totalmente gestionado e integrado con el ecosistema AWS, simplificando la configuración y gestión de pipelines de CI/CD. Reduce la sobrecarga operativa y permite que los equipos se centren en el desarrollo de software.
- **Pipelines de CI/CD auto-gestionados (ej: Jenkins):** Requieren instalación, configuración y mantenimiento de servidores, plugins e integraciones, lo que puede ser complejo y consumir mucho tiempo. Ofrecen mayor flexibilidad y control, pero con mayor responsabilidad operativa. 