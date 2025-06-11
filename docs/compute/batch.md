---
sidebar_position: 3
---

# AWS Batch

## O que é
Um serviço totalmente gerenciado que permite executar cargas de trabalho de computação em lote de qualquer escala na AWS Cloud.

## Para que serve
Planejar, programar e executar trabalhos em lote em contêineres (Docker) em instâncias EC2 ou Fargate, sem a necessidade de gerenciar a infraestrutura subjacente.

## Casos de uso
- Processamento de dados em lote (ex: ETL, transcodificação de mídia).
- Simulações científicas e de engenharia.
- Análise genômica e bioinformática.
- Processamento de imagens e vídeos.
- Treinamento de modelos de machine learning.

## Principais pontos
- **Totalmente gerenciado:** A AWS gerencia o provisionamento de recursos, o escalonamento, o agendamento de trabalhos e o tratamento de erros.
- **Contêineres:** Suporta trabalhos em contêineres Docker, o que facilita a portabilidade e o gerenciamento de dependências.
- **Escalabilidade:** Escala automaticamente os recursos de computação para atender às demandas dos trabalhos em lote.
- **Integração:** Integra-se com outros serviços AWS, como EC2, Fargate, ECR, S3 e CloudWatch.
- **Preços:** Pague apenas pelos recursos de computação que você usa.

## Comparativo
- **AWS Batch vs. EC2 (direto) para processamento em lote:** O Batch simplifica a execução de trabalhos em lote, abstraindo a complexidade de gerenciar servidores, agendamento e escalonamento. Ideal para workloads de lote que se beneficiam de contêineres e escalabilidade automática. O EC2 direto exige que o usuário configure e gerencie manualmente os servidores, o agendamento de trabalhos e a escalabilidade para processamento em lote. Oferece maior controle, mas com maior complexidade de gerenciamento. 