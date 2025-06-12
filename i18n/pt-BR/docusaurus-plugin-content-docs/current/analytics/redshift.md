---
sidebar_position: 7
---

# Amazon Redshift

## O que é
Um serviço de data warehouse em nuvem totalmente gerenciado e em escala de petabytes.

## Para que serve
Armazenar e analisar grandes volumes de dados estruturados e semi-estruturados para business intelligence, relatórios e análises de big data.

## Casos de uso
- Data warehousing para business intelligence e relatórios
- Análise de dados de vendas, marketing e clientes
- Análise de desempenho de aplicações e infraestrutura
- Previsão e planejamento financeiro
- Análise de dados de segurança e conformidade

## Principais pontos
- **Totalmente gerenciado:** A AWS gerencia a infraestrutura, backups, patches e dimensionamento
- **Colunar:** Armazenamento de dados em formato colunar para otimizar o desempenho de consultas analíticas
- **Processamento Massivamente Paralelo (MPP):** Distribui e executa consultas em vários nós para processamento rápido
- **Escalabilidade:** Permite escalar o cluster para atender às necessidades de armazenamento e computação
- **Integração:** Integra-se com ferramentas de BI, serviços AWS como S3, Kinesis, EMR, e ferramentas de ETL

## Comparativo com Amazon Athena
- **Amazon Redshift:** Um data warehouse tradicional, ideal para dados estruturados que exigem consultas complexas e transformações frequentes. Requer provisionamento de cluster (embora exista a opção Serverless).
- **Amazon Athena:** Um serviço de consulta interativa sem servidor para dados no S3, ideal para análises ad-hoc e exploração de dados sem a necessidade de carregar os dados em um data warehouse. 