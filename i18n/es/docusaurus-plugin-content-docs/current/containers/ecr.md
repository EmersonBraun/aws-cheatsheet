---
sidebar_position: 1
---

# AWS ECR (Elastic Container Registry)

## Qué es
Un registro de contenedores Docker completamente administrado que facilita el almacenamiento, gestión y despliegue de imágenes de contenedores Docker.

## Para qué sirve
Almacenar y gestionar imágenes de contenedores Docker de forma segura, con alta disponibilidad y escalabilidad, mientras se integra con otros servicios de AWS.

## Casos de uso
- Almacenamiento y gestión de imágenes de contenedores
- Integración con pipelines CI/CD
- Despliegue de microservicios
- Desarrollo de aplicaciones basadas en contenedores
- Replicación de imágenes entre regiones

## Puntos clave
- **Completamente administrado:** Sin infraestructura que gestionar
- **Seguridad:** Escaneo de imágenes y encriptación
- **Integración:** Funciona con ECS, EKS y otros servicios de AWS
- **Control de acceso:** Integración con IAM para permisos granulares
- **Políticas de ciclo de vida:** Automatiza la limpieza de imágenes

## Comparación
- **AWS ECR vs. Docker Hub:** ECR está completamente integrado con los servicios de AWS y proporciona mejor seguridad y control de acceso para cargas de trabajo de AWS. Docker Hub es un registro público con niveles gratuitos y de pago, ofreciendo una comunidad más amplia y compartición pública de imágenes. ECR es ideal para despliegues de contenedores basados en AWS, mientras que Docker Hub es mejor para compartición pública de imágenes y colaboración comunitaria. 