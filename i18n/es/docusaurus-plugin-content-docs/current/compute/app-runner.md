---
sidebar_position: 3
---

# AWS App Runner

## Qué es
Un servicio totalmente gestionado que facilita la creación, implementación y ejecución de aplicaciones web y servicios de API en contenedores, sin la necesidad de gestionar la infraestructura subyacente.

## Para qué sirve
Simplificar el proceso de poner aplicaciones en producción, manejando automáticamente la construcción, implementación, escalado y balanceo de carga.

## Casos de uso
- Implementación rápida de aplicaciones web y APIs
- Ejecución de microservicios y backends de aplicaciones
- Desarrollo y prueba de aplicaciones en contenedores
- Alojamiento de sitios web y aplicaciones front-end
- Escenarios donde la simplicidad y la velocidad de implementación son prioritarias

## Puntos principales
- **Totalmente gestionado:** AWS maneja la infraestructura, el balanceo de carga, el auto-escalado y la gestión de certificados SSL
- **Implementación desde código fuente o imagen de contenedor:** Soporta implementación directa desde repositorios de código (ej: GitHub) o imágenes de contenedor (ej: ECR)
- **Escalado automático:** Escala automáticamente hacia arriba y abajo según el tráfico
- **Rentable:** Paga solo por los recursos que utiliza
- **Integración:** Se integra con AWS VPC, AWS IAM y otros servicios AWS

## Comparación con Amazon ECS/EKS/Fargate
- **AWS App Runner:** La opción más simple y rápida para implementar aplicaciones en contenedores, ideal para desarrolladores que quieren centrarse en el código en lugar de la infraestructura. Ofrece menos control granular sobre el entorno de contenedores.
- **Amazon ECS (Elastic Container Service):** Un servicio de orquestación de contenedores que ofrece más control y flexibilidad sobre la implementación y gestión de contenedores. Puede ejecutarse en instancias EC2 (EC2 Launch Type) o en un modelo sin servidor con AWS Fargate.
- **Amazon EKS (Elastic Kubernetes Service):** Un servicio gestionado de Kubernetes que ofrece el más alto nivel de control y flexibilidad para la orquestación de contenedores, ideal para equipos que ya usan Kubernetes o necesitan su portabilidad y ecosistema.
- **AWS Fargate:** Un motor de computación sin servidor para Amazon ECS y EKS que permite ejecutar contenedores sin provisionar o gestionar servidores. App Runner usa Fargate internamente, pero abstrae aún más la complejidad. 