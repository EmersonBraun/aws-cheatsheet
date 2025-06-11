---
sidebar_position: 2
---

# Amazon Elastic Container Service (ECS)

## O que é
Um serviço de orquestração de contêineres totalmente gerenciado que facilita a implantação, o gerenciamento e a escalabilidade de aplicações em contêineres Docker na AWS.

## Para que serve
Executar e gerenciar aplicações em contêineres de forma altamente escalável e disponível, sem a necessidade de gerenciar a infraestrutura de orquestração.

## Casos de uso
- Execução de microsserviços e aplicações em contêineres.
- Hospedagem de aplicações web e APIs.
- Processamento de dados em lote e tarefas agendadas.
- Suporte a pipelines de CI/CD para implantação contínua.
- Modernização de aplicações legadas.

## Principais pontos
- **Totalmente gerenciado:** A AWS gerencia o plano de controle do ECS, incluindo o agendador, o balanceador de carga e o registro de contêineres.
- **Flexibilidade de computação:** Suporta diferentes tipos de capacidade de computação, incluindo instâncias EC2 (para maior controle) e AWS Fargate (sem servidor).
- **Integração:** Integra-se nativamente com outros serviços AWS, como Amazon ECR, Elastic Load Balancing, Amazon CloudWatch e AWS IAM.
- **Escalabilidade:** Escala automaticamente para atender às demandas da aplicação.
- **Alta disponibilidade:** Distribui contêineres em várias Zonas de Disponibilidade para resiliência.

## Comparativo
- **Amazon ECS vs. Amazon Elastic Kubernetes Service (EKS):** O ECS é um orquestrador de contêineres proprietário da AWS, mais simples de usar e com integração nativa com o ecossistema AWS. Ideal para usuários que preferem uma solução mais gerenciada e menos complexa. O EKS é um serviço gerenciado de Kubernetes que permite executar aplicações Kubernetes na AWS. Oferece a flexibilidade e a portabilidade do Kubernetes, ideal para usuários que já estão familiarizados com o Kubernetes ou que precisam de compatibilidade com ambientes híbridos/multi-cloud. 