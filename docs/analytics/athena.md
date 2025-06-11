---
sidebar_position: 1
---

# Amazon Athena

## O que é
Serviço de consultas interativas sem servidor que permite analisar dados diretamente no Amazon S3 usando SQL padrão.

## Para que serve
Ideal para análise de dados ad-hoc e exploração de dados em data lakes sem a necessidade de gerenciar infraestrutura.

## Casos de uso
- Análise de logs (ex: logs de servidor web no S3)
- Exploração de dados ad-hoc (ex: analisar novos conjuntos de dados no S3)
- Consulta a data lakes (ex: consultar dados de transações de clientes no S3)
- Relatórios de inteligência de negócios (integrado com ferramentas de BI como Amazon QuickSight)

## Principais pontos
- **Sem servidor:** Não há infraestrutura para gerenciar
- **Pagamento por consulta:** Você paga apenas pelos dados verificados pelas suas consultas
- **SQL padrão:** Utiliza SQL ANSI padrão, facilitando o uso para quem já conhece SQL
- **Integração com S3:** Consulta dados diretamente no Amazon S3, suportando diversos formatos (CSV, JSON, Parquet)
- **Integração com AWS Glue:** Utiliza o Glue Data Catalog para metadados

## Comparativo com Amazon Redshift
- **Athena:** Focado em análises ad-hoc em dados no S3, sem servidor, pagamento por consulta. Melhor para cargas de trabalho intermitentes ou variáveis.
- **Redshift:** Data warehouse totalmente gerenciado, ideal para análises e relatórios complexos e em grande escala, com dados estruturados que exigem consultas e transformações frequentes. Pagamento baseado no tamanho e uso do cluster. Alto desempenho para consultas complexas. 