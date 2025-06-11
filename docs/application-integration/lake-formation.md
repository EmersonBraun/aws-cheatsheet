---
sidebar_position: 1
---

# AWS Lake Formation

## O que é
Um serviço que facilita a configuração, segurança e gerenciamento de data lakes na AWS.

## Para que serve
Simplificar a governança, segurança e compartilhamento de dados em data lakes para análise e machine learning.

## Casos de uso
- Construção de data lakes seguros e escaláveis
- Gerenciamento centralizado de permissões de acesso a dados em data lakes
- Limpeza e transformação de dados para data lakes
- Compartilhamento de dados de forma segura entre diferentes contas AWS ou organizações

## Principais pontos
- **Governança centralizada:** Gerencia permissões de acesso a dados em um único local
- **Segurança granular:** Permite definir permissões em nível de tabela, coluna e linha
- **Integração com AWS Glue:** Utiliza o AWS Glue Data Catalog para metadados
- **Simplifica a construção de data lakes:** Automatiza muitas das tarefas manuais envolvidas na criação de um data lake
- **Auditoria:** Fornece logs de auditoria para rastrear o acesso aos dados

## Comparativo
- **AWS Lake Formation vs. S3 (direto):** Embora o S3 seja o armazenamento fundamental para data lakes, o Lake Formation adiciona uma camada de governança e segurança que simplifica o gerenciamento de permissões e o acesso a dados em escala, algo que seria complexo de implementar manualmente apenas com o S3. 