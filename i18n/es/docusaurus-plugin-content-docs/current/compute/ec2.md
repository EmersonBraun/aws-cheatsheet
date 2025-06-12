---
sidebar_position: 1
---

# AWS EC2 (Elastic Compute Cloud)

## O que é
Um serviço web que fornece capacidade computacional segura e redimensionável na nuvem na forma de instâncias virtuais (servidores virtuais).

## Para que serve
Executar aplicações, hospedar sites, processar dados e realizar diversas tarefas de computação na nuvem, com controle total sobre o ambiente do servidor.

## Casos de uso
- Hospedagem de aplicações web e sites.
- Execução de servidores de banco de dados.
- Processamento de big data e análise.
- Ambientes de desenvolvimento e teste.
- Execução de aplicações empresariais.

## Principais pontos
- **Instâncias:** Servidores virtuais que podem ser configurados com diferentes tipos de CPU, memória, armazenamento e rede.
- **Tipos de instância:** Ampla seleção de tipos de instância otimizados para diferentes casos de uso (uso geral, computação otimizada, memória otimizada, etc.).
- **Modelos de compra:** Sob demanda, instâncias reservadas (RIs), instâncias spot e Savings Plans para otimização de custos.
- **Escalabilidade:** Pode escalar verticalmente (aumentar o tamanho da instância) ou horizontalmente (adicionar mais instâncias) com o Auto Scaling.
- **Segurança:** Integração com AWS IAM, Security Groups e Network ACLs para controle de acesso e segurança de rede.

## Comparativo
- **AWS EC2 vs. AWS Lambda:** O EC2 oferece controle total sobre o ambiente do servidor, permitindo a instalação de qualquer software e a execução de workloads de longa duração. Você é responsável pelo gerenciamento do sistema operacional e do software. O Lambda é um serviço de computação sem servidor que executa seu código em resposta a eventos, sem a necessidade de provisionar ou gerenciar servidores. Ideal para funções de curta duração e orientadas a eventos, onde você paga apenas pelo tempo de computação consumido. 