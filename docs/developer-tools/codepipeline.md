---
sidebar_position: 7
---

# AWS CodePipeline

## O que é
Um serviço de entrega contínua totalmente gerenciado que automatiza as fases de compilação, teste e implantação do seu processo de lançamento de software.

## Para que serve
Modelar, visualizar e automatizar o fluxo de trabalho de lançamento de software, desde o commit do código até a implantação em produção, garantindo entregas rápidas e confiáveis.

## Casos de uso
- Automação de pipelines de CI/CD (Integração Contínua/Entrega Contínua)
- Implantação automatizada de aplicações em ambientes de desenvolvimento, teste e produção
- Orquestração de diferentes ferramentas de desenvolvimento (ex: CodeCommit, CodeBuild, CodeDeploy, Lambda)
- Gerenciamento de fluxos de trabalho de lançamento complexos com aprovações manuais ou automáticas
- Entrega contínua de microsserviços e aplicações em contêineres

## Principais pontos
- **Totalmente gerenciado:** Não há servidores para provisionar ou gerenciar
- **Fluxo de trabalho visual:** Permite modelar seu pipeline como um gráfico visual, facilitando a compreensão e o monitoramento
- **Integração:** Integra-se com uma ampla gama de serviços AWS (CodeCommit, CodeBuild, CodeDeploy, S3, Lambda, ECS, EKS) e ferramentas de terceiros
- **Automação:** Automatiza cada etapa do processo de lançamento, reduzindo o esforço manual e os erros
- **Aprovações:** Permite configurar aprovações manuais em qualquer estágio do pipeline
- **Rastreabilidade:** Fornece um histórico detalhado de cada execução do pipeline

## Comparativo com pipelines de CI/CD auto-gerenciados
- **AWS CodePipeline:** Oferece um serviço de entrega contínua totalmente gerenciado e integrado com o ecossistema AWS, simplificando a configuração e o gerenciamento de pipelines de CI/CD. Reduz a sobrecarga operacional e permite que as equipes se concentrem no desenvolvimento de software.
- **Pipelines de CI/CD auto-gerenciados (ex: Jenkins):** Exigem a instalação, configuração e manutenção de servidores, plugins e integrações, o que pode ser complexo e demorado. Oferecem maior flexibilidade e controle, mas com maior responsabilidade operacional. 