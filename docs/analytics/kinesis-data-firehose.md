---
sidebar_position: 5
---

# Amazon Kinesis Data Firehose

## O que é
Um serviço totalmente gerenciado para carregar dados de streaming em tempo real para destinos como Amazon S3, Amazon Redshift, Amazon OpenSearch Service e Splunk.

## Para que serve
Simplificar a ingestão e entrega de dados de streaming para armazenamento e análise, sem a necessidade de gerenciar servidores ou escrever aplicações consumidoras.

## Casos de uso
- Carregar logs de aplicações e sistemas para o S3 para análise posterior
- Ingestão de dados de clickstream para data warehouses como o Redshift
- Enviar dados de eventos para o OpenSearch Service para monitoramento e visualização
- Coleta de dados de IoT para análise em tempo real

## Principais pontos
- **Totalmente gerenciado:** Não há servidores para provisionar ou gerenciar
- **Entrega em tempo real:** Entrega dados em segundos para os destinos configurados
- **Transformação de dados:** Pode transformar, compactar e criptografar dados antes da entrega
- **Escalabilidade automática:** Escala automaticamente para lidar com o volume de dados de streaming
- **Integração:** Integra-se com Kinesis Data Streams, Kinesis Agent, e outros serviços AWS

## Comparativo com AWS Kinesis Data Streams
- **Kinesis Data Firehose:** Mais simples de usar para ingestão de dados em destinos específicos, sem a necessidade de desenvolver aplicações consumidoras. Ideal para casos de uso onde a transformação e entrega de dados são padronizadas.
- **Kinesis Data Streams:** Oferece maior controle e flexibilidade para desenvolver aplicações personalizadas que consomem e processam dados de streaming em tempo real. Você gerencia os shards e a capacidade, permitindo lógicas de processamento mais complexas. 