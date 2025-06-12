---
sidebar_position: 3
---

# Amazon DynamoDB

## O que é
Um serviço de banco de dados NoSQL de chave-valor e documento totalmente gerenciado, sem servidor, que oferece desempenho de milissegundos em qualquer escala.

## Para que serve
Construir aplicações modernas que exigem alta performance, escalabilidade massiva e baixa latência, sem a necessidade de gerenciar servidores.

## Casos de uso
- Back-ends para aplicações web, móveis, jogos e IoT
- Armazenamento de perfis de usuário, carrinhos de compras e dados de sessão
- Microsserviços e aplicações serverless
- Armazenamento de metadados para data lakes
- Tabelas de roteamento para serviços de rede

## Principais pontos
- **NoSQL:** Suporta modelos de dados de chave-valor e documento
- **Totalmente gerenciado e sem servidor:** A AWS cuida de toda a infraestrutura, escalabilidade e operações
- **Desempenho em escala:** Oferece desempenho consistente de milissegundos, mesmo em escala de petabytes
- **Alta disponibilidade e durabilidade:** Dados replicados em várias Zonas de Disponibilidade
- **Segurança:** Integração com AWS IAM, criptografia em repouso e em trânsito
- **Streams do DynamoDB:** Permite capturar alterações de dados em tempo real para processamento por outras aplicações

## Comparativo com Amazon RDS (bancos de dados relacionais)
- **Amazon DynamoDB:** Um banco de dados NoSQL, ideal para aplicações que exigem escalabilidade massiva, baixa latência e um modelo de dados flexível (sem esquema). Não é adequado para dados altamente relacionais ou que exigem transações complexas com múltiplas tabelas
- **Amazon RDS:** Um serviço para bancos de dados relacionais (SQL), ideal para aplicações que exigem integridade referencial, transações ACID e um modelo de dados estruturado. Mais adequado para dados que se encaixam bem em tabelas e relacionamentos 