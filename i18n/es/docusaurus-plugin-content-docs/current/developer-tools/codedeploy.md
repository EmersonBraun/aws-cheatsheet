---
sidebar_position: 2
---

# AWS CodeDeploy

## O que é
Um serviço de implantação totalmente gerenciado que automatiza implantações de aplicações em instâncias da Amazon EC2, instâncias on-premises, funções AWS Lambda ou Amazon ECS.

## Para que serve
Simplificar e automatizar o processo de implantação de software, reduzindo o tempo de inatividade da aplicação e os erros manuais.

## Casos de uso
- Implantação contínua de aplicações web e móveis
- Atualização de aplicações em servidores EC2 e on-premises
- Implantação de funções Lambda
- Rollback automático de implantações em caso de falha
- Implantações em diferentes ambientes (desenvolvimento, teste, produção)

## Principais pontos
- **Totalmente gerenciado:** A AWS cuida da infraestrutura de implantação
- **Automação:** Automatiza todo o ciclo de vida da implantação
- **Suporte a várias plataformas:** Implanta em EC2, on-premises, Lambda e ECS
- **Estratégias de implantação:** Suporta implantações in-place e blue/green
- **Rollback:** Permite reverter implantações automaticamente em caso de falha
- **Integração:** Integra-se com AWS CodePipeline, AWS CodeCommit, Amazon S3 e outros serviços AWS

## Comparativo com implantação manual
- **AWS CodeDeploy:** Automatiza o processo de implantação, reduzindo erros e tempo de inatividade. Ideal para implantações frequentes e complexas
- **Implantação manual:** Exige que o usuário execute comandos e etapas manualmente, o que é propenso a erros, demorado e não escalável para ambientes grandes ou implantações frequentes 