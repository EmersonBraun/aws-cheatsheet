---
sidebar_position: 5
---

# AWS Fargate

## O que é
Um mecanismo de computação sem servidor para contêineres que funciona tanto com o Amazon Elastic Container Service (ECS) quanto com o Amazon Elastic Kubernetes Service (EKS).

## Para que serve
Executar contêineres sem a necessidade de provisionar, configurar ou gerenciar servidores ou clusters subjacentes. Você paga apenas pelos recursos de computação consumidos pelos seus contêineres.

## Casos de uso
- Execução de aplicações em contêineres sem gerenciamento de infraestrutura.
- Microsserviços e APIs serverless.
- Aplicações web e back-ends.
- Processamento de dados em lote e tarefas agendadas.
- Ambientes de desenvolvimento e teste.

## Principais pontos
- **Sem servidor:** Não há servidores para gerenciar, a AWS cuida de toda a infraestrutura.
- **Pagamento por uso:** Você paga apenas pelos recursos de computação (vCPU e memória) que seus contêineres usam.
- **Escalabilidade automática:** Escala automaticamente para atender às demandas da aplicação.
- **Segurança:** Isola as cargas de trabalho em contêineres em um ambiente seguro.
- **Integração:** Integra-se nativamente com Amazon ECS e Amazon EKS.

## Comparativo
- **AWS Fargate vs. EC2 para contêineres:** O Fargate oferece uma experiência sem servidor para contêineres, abstraindo completamente a infraestrutura subjacente. Ideal para desenvolvedores que querem focar apenas no código da aplicação e não se preocupar com servidores. O EC2 para contêineres (ECS/EKS com EC2) permite maior controle sobre a infraestrutura subjacente, como o tipo de instância, sistema operacional e configurações de rede. Ideal para casos de uso que exigem personalização profunda ou onde o custo é um fator crítico e você pode otimizar o uso de instâncias.
---