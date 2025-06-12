---
sidebar_position: 3
---

# Amazon Elastic Kubernetes Service (EKS)

## O que é
Um serviço gerenciado de Kubernetes que permite executar Kubernetes na AWS Cloud e em datacenters on-premises.

## Para que serve
Simplificar a implantação, o gerenciamento e a escalabilidade de aplicações em contêineres usando Kubernetes, sem a necessidade de instalar, operar e manter seu próprio plano de controle do Kubernetes.

## Casos de uso
- Execução de aplicações em contêineres que exigem a portabilidade e flexibilidade do Kubernetes.
- Implantação de microsserviços em escala.
- Ambientes híbridos e multi-cloud.
- Aplicações que precisam de alta disponibilidade e escalabilidade.
- Modernização de aplicações legadas usando contêineres.

## Principais pontos
- **Kubernetes gerenciado:** A AWS gerencia o plano de controle do Kubernetes, incluindo alta disponibilidade e atualizações.
- **Integração nativa:** Integra-se com outros serviços AWS, como Amazon ECR, IAM, VPC, e CloudWatch.
- **Escalabilidade:** Suporta auto-scaling de nós e pods.
- **Segurança:** Integração com IAM para controle de acesso e suporte a políticas de segurança.
- **Flexibilidade:** Suporta diferentes tipos de capacidade de computação, incluindo EC2 e Fargate.

## Comparativo
- **Amazon EKS vs. Amazon ECS:** O EKS é um serviço gerenciado de Kubernetes que oferece a flexibilidade e portabilidade do Kubernetes, ideal para usuários que já estão familiarizados com o Kubernetes ou que precisam de compatibilidade com ambientes híbridos/multi-cloud. O ECS é um orquestrador de contêineres proprietário da AWS, mais simples de usar e com integração nativa com o ecossistema AWS, ideal para usuários que preferem uma solução mais gerenciada e menos complexa. 