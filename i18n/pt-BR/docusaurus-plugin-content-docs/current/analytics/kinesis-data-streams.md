---
sidebar_position: 4
---

# AWS Kinesis Data Streams

## O que é
Um serviço de streaming de dados em tempo real que permite coletar e processar grandes fluxos de registros de dados.

## Para que serve
Construir aplicações personalizadas que processam dados de streaming para análise em tempo real, monitoramento de aplicações, detecção de fraudes, etc.

## Casos de uso
- Coleta de logs de aplicações e sistemas
- Ingestão de dados de IoT (Internet das Coisas)
- Análise de clickstream em tempo real
- Monitoramento de segurança e detecção de anomalias
- Processamento de dados para machine learning em tempo real

## Principais pontos
- **Tempo real:** Processa dados em milissegundos
- **Escalável:** Pode lidar com gigabytes por segundo de dados de milhares de fontes
- **Durabilidade:** Os dados são armazenados por até 7 dias (ou 1 ano com retenção estendida)
- **Ordem dos dados:** Garante a ordem dos registros dentro de um shard
- **Integração:** Integra-se com outros serviços AWS, como Lambda, S3, Redshift, etc.

## Comparativo com Amazon Kinesis Data Firehose
- **Kinesis Data Streams:** Oferece maior controle e flexibilidade para desenvolver aplicações personalizadas que consomem e processam dados de streaming em tempo real. Você gerencia os shards e a capacidade.
- **Kinesis Data Firehose:** Um serviço totalmente gerenciado para carregar dados de streaming em destinos como S3, Redshift, OpenSearch Service e Splunk. É mais simples de usar para ingestão de dados sem a necessidade de escrever código para consumidores. 