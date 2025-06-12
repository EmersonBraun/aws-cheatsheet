---
sidebar_position: 7
---

# AWS RDS (Relational Database Service)

## What is it
A fully managed relational database service that makes it easy to set up, operate, and scale relational databases in the cloud.

## What it's for
Running and managing relational databases in the cloud, supporting multiple database engines including MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server.

## Use cases
- Web applications
- Enterprise applications
- E-commerce platforms
- Mobile applications
- Business intelligence

## Key points
- **Multiple engines:** Supports MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server
- **Fully managed:** Automated administration and maintenance
- **Scalability:** Easy scaling of compute and storage
- **High availability:** Multi-AZ deployment with automatic failover
- **Security:** Encryption at rest and in transit

## Comparison
- **AWS RDS vs. Self-managed databases:** RDS is a fully managed service that handles the operational aspects of running a database. Self-managed databases give you more control but require you to handle all operational tasks. RDS is ideal for applications that need a managed database service, while self-managed databases are better for organizations that need complete control over their database infrastructure.

## Principais pontos
- **Motores de banco de dados:** Suporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Amazon Aurora
- **Totalmente gerenciado:** A AWS cuida do provisionamento, patching, backups, recuperação e escalabilidade
- **Escalabilidade:** Permite escalar a capacidade de computação e armazenamento do banco de dados
- **Alta disponibilidade:** Suporta implantações Multi-AZ (Múltiplas Zonas de Disponibilidade) para failover automático
- **Backups automatizados:** Realiza backups automáticos e permite restaurações pontuais
- **Segurança:** Integração com AWS IAM, VPC e criptografia de dados

## Comparativo com Amazon Aurora
- **Amazon RDS:** Um serviço gerenciado que facilita a configuração, operação e escalabilidade de bancos de dados relacionais em várias engines (MySQL, PostgreSQL, Oracle, SQL Server, MariaDB). É uma boa escolha para uma ampla gama de aplicações e oferece mais opções de motores de banco de dados
- **Amazon Aurora:** Um banco de dados relacional otimizado para a nuvem, projetado para alto desempenho e escalabilidade, com compatibilidade com MySQL e PostgreSQL. É uma opção mais avançada e geralmente mais cara que o RDS para os mesmos motores de banco de dados, mas oferece desempenho superior 