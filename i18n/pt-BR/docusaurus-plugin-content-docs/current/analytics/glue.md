---
sidebar_position: 8
---

# AWS Glue

## O que é
Um serviço de integração de dados sem servidor e totalmente gerenciado que facilita a descoberta, preparação, movimentação e integração de dados de várias fontes para análise, machine learning e desenvolvimento de aplicações.

## Para que serve
Realizar operações de ETL (Extract, Transform, Load) em grande escala, automatizar pipelines de dados e gerenciar metadados de dados.

## Casos de uso
- Preparação de dados para data warehousing e data lakes
- Transformação de dados para machine learning
- Catálogo de dados para descoberta e governança de dados
- Integração de dados de diferentes fontes
- Automatização de tarefas de ETL

## Principais pontos
- **Sem servidor:** Não há infraestrutura para provisionar ou gerenciar
- **Catálogo de Dados:** O AWS Glue Data Catalog é um repositório central de metadados para todos os seus ativos de dados
- **ETL:** Suporta ETL visual com o AWS Glue Studio, bem como scripts Python e Scala
- **Crawlers:** Descobre automaticamente o esquema dos dados e os metadados
- **Integração:** Integra-se com outros serviços AWS, como S3, Redshift, Athena, EMR, etc.

## Comparativo com Amazon EMR
- **AWS Glue:** Um serviço ETL sem servidor e totalmente gerenciado, ideal para transformações de dados mais simples e automatizadas, e para catalogar dados. Mais adequado para desenvolvedores que preferem uma abordagem sem código ou com pouco código.
- **Amazon EMR:** Mais flexível para workloads complexos de big data que exigem controle sobre o cluster e a capacidade de usar diferentes frameworks (Hadoop, Spark, etc.). Requer mais gerenciamento da infraestrutura subjacente. 