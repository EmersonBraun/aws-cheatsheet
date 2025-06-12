---
sidebar_position: 6
---

# Amazon Managed Streaming for Apache Kafka (MSK)

## O que é
Um serviço totalmente gerenciado que facilita a criação e execução de aplicações que usam Apache Kafka para processar dados de streaming.

## Para que serve
Gerenciar a infraestrutura e as operações do Apache Kafka, permitindo que os desenvolvedores se concentrem na construção de aplicações de streaming.

## Casos de uso
- Construção de pipelines de dados em tempo real
- Monitoramento de aplicações e infraestrutura
- Análise de dados de clickstream e IoT
- Processamento de eventos e microsserviços

## Principais pontos
- **Totalmente gerenciado:** A AWS gerencia o provisionamento, configuração, dimensionamento e manutenção dos clusters Kafka
- **Compatível com Apache Kafka:** Usa versões de código aberto do Apache Kafka, permitindo a migração fácil de aplicações existentes
- **Alta disponibilidade:** Clusters distribuídos em várias Zonas de Disponibilidade para resiliência
- **Segurança:** Integração com AWS IAM, VPC e criptografia de dados
- **Escalabilidade:** Permite escalar clusters para atender às demandas de throughput

## Comparativo
- **Amazon MSK vs. Apache Kafka auto-gerenciado:** O MSK elimina a complexidade operacional de gerenciar um cluster Kafka, incluindo patches, backups e monitoramento, enquanto o Kafka auto-gerenciado exige que o usuário cuide de todas essas tarefas.
- **Amazon MSK vs. Kinesis Data Streams:** Ambos são serviços de streaming de dados. O Kinesis Data Streams é um serviço proprietário da AWS, enquanto o MSK é baseado no Apache Kafka de código aberto. A escolha depende da familiaridade com o Kafka e da necessidade de compatibilidade com ecossistemas Kafka existentes. 