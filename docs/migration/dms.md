---
sidebar_position: 1
---

# AWS Database Migration Service (DMS)

## O que é
Um serviço de nuvem que facilita a migração de bancos de dados relacionais, data warehouses, bancos de dados NoSQL e outros tipos de dados para a AWS de forma rápida e segura.

## Para que serve
Migrar dados entre diferentes tipos de bancos de dados (heterogêneos) ou entre o mesmo tipo de banco de dados (homogêneos), com tempo de inatividade mínimo ou zero.

## Casos de uso
- Migração de bancos de dados on-premises para a AWS (ex: de Oracle para Amazon RDS PostgreSQL)
- Consolidação de vários bancos de dados em um único banco de dados na AWS
- Replicação contínua de dados para fins de disaster recovery ou análise
- Migração de data warehouses para Amazon Redshift
- Migração de bancos de dados NoSQL para Amazon DynamoDB ou DocumentDB

## Principais pontos
- **Migração heterogênea e homogênea:** Suporta migração entre diferentes plataformas de banco de dados
- **Tempo de inatividade mínimo:** Permite migrações com tempo de inatividade quase zero usando replicação contínua
- **Totalmente gerenciado:** A AWS cuida do provisionamento, patching e monitoramento da infraestrutura de migração
- **Suporte a várias fontes e destinos:** Conecta-se a uma ampla variedade de bancos de dados e serviços AWS
- **Replicação contínua:** Mantém os dados sincronizados entre a origem e o destino

## Comparativo
- **AWS DMS:** Simplifica e acelera o processo de migração de banco de dados, automatizando muitas das tarefas complexas e minimizando o tempo de inatividade. Ideal para migrações de grande escala ou complexas.
- **Migração manual:** Pode ser demorada, propensa a erros e exige um planejamento cuidadoso para minimizar o tempo de inatividade. Geralmente adequada apenas para bancos de dados pequenos e simples. 