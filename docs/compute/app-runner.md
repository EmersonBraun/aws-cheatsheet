---
sidebar_position: 1
---

# AWS App Runner

## O que é
Um serviço totalmente gerenciado que facilita a criação, implantação e execução de aplicações web e serviços de API em contêineres, sem a necessidade de gerenciar a infraestrutura subjacente.

## Para que serve
Simplificar o processo de colocar aplicações em produção, cuidando automaticamente da construção, implantação, escalabilidade e balanceamento de carga.

## Casos de uso
- Implantação rápida de aplicações web e APIs
- Execução de microsserviços e backends de aplicações
- Desenvolvimento e teste de aplicações em contêineres
- Hospedagem de sites e aplicações de front-end
- Cenários onde a simplicidade e a velocidade de implantação são prioritárias

## Principais pontos
- **Totalmente gerenciado:** A AWS cuida da infraestrutura, do balanceamento de carga, do escalonamento automático e do gerenciamento de certificados SSL
- **Implantação a partir de código-fonte ou imagem de contêiner:** Suporta implantação direta de repositórios de código (ex: GitHub) ou de imagens de contêiner (ex: ECR)
- **Escalabilidade automática:** Escala automaticamente para cima e para baixo com base no tráfego
- **Custo-efetivo:** Pague apenas pelos recursos que você usa
- **Integração:** Integra-se com AWS VPC, AWS IAM, e outros serviços AWS

## Comparativo com Amazon ECS/EKS/Fargate
- **AWS App Runner:** É a opção mais simples e rápida para implantar aplicações em contêineres, ideal para desenvolvedores que querem focar no código e não na infraestrutura. Oferece menos controle granular sobre o ambiente de contêineres.
- **Amazon ECS (Elastic Container Service):** Um serviço de orquestração de contêineres que oferece mais controle e flexibilidade sobre a implantação e o gerenciamento de contêineres. Pode ser executado em instâncias EC2 (EC2 Launch Type) ou em um modelo sem servidor com AWS Fargate.
- **Amazon EKS (Elastic Kubernetes Service):** Um serviço gerenciado de Kubernetes que oferece o mais alto nível de controle e flexibilidade para orquestração de contêineres, ideal para equipes que já usam Kubernetes ou precisam de sua portabilidade e ecossistema.
- **AWS Fargate:** Um motor de computação sem servidor para Amazon ECS e EKS que permite executar contêineres sem provisionar ou gerenciar servidores. App Runner usa Fargate por baixo dos panos, mas abstrai ainda mais a complexidade. 