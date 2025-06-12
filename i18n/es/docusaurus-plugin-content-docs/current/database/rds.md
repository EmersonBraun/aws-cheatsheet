---
sidebar_position: 7
---

# Amazon RDS (Relational Database Service)

## O que é
Um serviço web que facilita a configuração, a operação e a escalabilidade de um banco de dados relacional na nuvem.

## Para que serve
Gerenciar bancos de dados relacionais populares (MySQL, PostgreSQL, Oracle, SQL Server, MariaDB) na AWS, automatizando tarefas administrativas como provisionamento de hardware, patching de software, backups e recuperação.

## Casos de uso
- Hospedagem de bancos de dados para aplicações web e móveis
- Bancos de dados para aplicações empresariais
- Desenvolvimento e teste de bancos de dados
- Aplicações que exigem um banco de dados relacional gerenciado

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