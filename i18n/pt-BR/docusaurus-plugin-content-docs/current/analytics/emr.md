---
sidebar_position: 3
---

# Amazon EMR

## O que é
Uma plataforma de cluster gerenciada que simplifica a execução de frameworks de big data, como Apache Hadoop e Apache Spark, na AWS.

## Para que serve
Processamento de grandes volumes de dados, análise de big data, machine learning e execução de consultas SQL interativas em escala.

## Casos de uso
- Processamento de dados para ETL (Extract, Transform, Load)
- Análise de dados em tempo real e em lote
- Machine learning e processamento de dados para modelos de ML
- Análise de logs e clickstream
- Bioinformática e genômica

## Principais pontos
- **Gerenciado:** A AWS gerencia a infraestrutura do cluster, incluindo provisionamento, configuração e dimensionamento
- **Frameworks de Big Data:** Suporta uma ampla gama de frameworks de código aberto, como Hadoop, Spark, Hive, Presto, Flink, etc.
- **Escalabilidade:** Permite dimensionar clusters de forma elástica para atender às necessidades de processamento
- **Integração:** Integra-se com outros serviços AWS, como Amazon S3 para armazenamento de dados e Amazon EC2 para capacidade de computação
- **Custo-benefício:** Pague apenas pela capacidade que você usa, com opções de instâncias spot para economizar custos

## Comparativo
- **Amazon EMR vs. EC2 (auto-gerenciado):** O EMR simplifica a execução de frameworks de big data, abstraindo a complexidade de gerenciar servidores e software, enquanto a execução desses frameworks diretamente no EC2 exige que o usuário configure e mantenha toda a pilha de software.
- **Amazon EMR vs. AWS Glue:** O EMR é mais flexível para workloads complexos de big data que exigem controle sobre o cluster e a capacidade de usar diferentes frameworks. O AWS Glue é um serviço ETL sem servidor e totalmente gerenciado, ideal para transformações de dados mais simples e automatizadas. 