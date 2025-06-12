---
sidebar_position: 4
---

# AWS Fargate

## Qué es
Un motor de cómputo sin servidor para contenedores que funciona tanto con Amazon Elastic Container Service (ECS) como con Amazon Elastic Kubernetes Service (EKS).

## Para qué sirve
Ejecutar contenedores sin necesidad de aprovisionar, configurar o gestionar servidores o clústeres subyacentes. Solo paga por los recursos de cómputo consumidos por sus contenedores.

## Casos de uso
- Ejecutar aplicaciones contenerizadas sin gestión de infraestructura
- Microservicios y APIs sin servidor
- Aplicaciones web y backends
- Procesamiento de datos por lotes y tareas programadas
- Entornos de desarrollo y pruebas

## Puntos clave
- **Sin servidor:** Sin servidores que gestionar, AWS maneja toda la infraestructura
- **Pago por uso:** Solo paga por los recursos de cómputo (vCPU y memoria) que sus contenedores utilizan
- **Escalado automático:** Escala automáticamente para satisfacer las demandas de la aplicación
- **Seguridad:** Aísla cargas de trabajo de contenedores en un entorno seguro
- **Integración:** Se integra nativamente con Amazon ECS y Amazon EKS

## Comparación
- **AWS Fargate vs. EC2 para contenedores:** Fargate proporciona una experiencia sin servidor para contenedores, abstraiendo completamente la infraestructura subyacente. Ideal para desarrolladores que quieren concentrarse únicamente en el código de la aplicación y no preocuparse por los servidores. EC2 para contenedores (ECS/EKS con EC2) permite un mayor control sobre la infraestructura subyacente, como el tipo de instancia, sistema operativo y configuraciones de red. Ideal para casos de uso que requieren personalización profunda o donde el costo es un factor crítico y puede optimizar el uso de instancias.
---