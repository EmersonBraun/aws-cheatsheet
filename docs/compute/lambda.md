---
sidebar_position: 5
---

# AWS Lambda

## O que é
Um serviço de computação sem servidor que permite executar código sem provisionar ou gerenciar servidores.

## Para que serve
Executar código em resposta a eventos, como uploads para o S3, atualizações de tabelas do DynamoDB, ou requisições HTTP via API Gateway. Você paga apenas pelo tempo de computação consumido.

## Casos de uso
- Processamento de dados em tempo real (ex: redimensionamento de imagens após upload para o S3).
- Back-ends para aplicações web e móveis.
- Processamento de streams de dados (ex: Kinesis).
- Automação de tarefas de TI (ex: backup de recursos, limpeza de logs).
- Construção de microsserviços e APIs serverless.

## Principais pontos
- **Sem servidor:** Não há servidores para gerenciar, a AWS cuida de toda a infraestrutura.
- **Orientado a eventos:** O código é executado em resposta a eventos.
- **Pagamento por uso:** Você paga apenas pelo tempo de computação e pelo número de requisições.
- **Escalabilidade automática:** Escala automaticamente para lidar com o volume de eventos.
- **Integração:** Integra-se com uma vasta gama de serviços AWS como S3, DynamoDB, API Gateway, Kinesis, SNS, SQS, etc.

## Comparativo
- **AWS Lambda vs. AWS EC2:** O Lambda é um serviço de computação sem servidor que executa seu código em resposta a eventos, sem a necessidade de provisionar ou gerenciar servidores. Ideal para funções de curta duração e orientadas a eventos, onde você paga apenas pelo tempo de computação consumido. O EC2 oferece controle total sobre o ambiente do servidor, permitindo a instalação de qualquer software e a execução de workloads de longa duração. Você é responsável pelo gerenciamento do sistema operacional e do software. 