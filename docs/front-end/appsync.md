---
sidebar_position: 3
---

# AWS AppSync

## O que é
Um serviço gerenciado para desenvolvimento de APIs GraphQL que permite que aplicações obtenham exatamente os dados que precisam, quando precisam.

## Para que serve
Simplificar o desenvolvimento de aplicações GraphQL, fornecendo uma API GraphQL gerenciada que se conecta a múltiplas fontes de dados e oferece recursos em tempo real.

## Casos de uso
- Desenvolvimento de aplicações móveis e web com sincronização offline
- Construção de APIs GraphQL para microsserviços
- Implementação de recursos em tempo real (ex: chat, notificações)
- Agregação de dados de múltiplas fontes em uma única API
- Desenvolvimento de aplicações com requisitos de baixa latência

## Principais pontos
- **GraphQL gerenciado:** A AWS cuida da infraestrutura e escalabilidade da API GraphQL
- **Tempo real:** Suporta subscrições GraphQL para atualizações em tempo real
- **Múltiplas fontes de dados:** Integra-se com DynamoDB, RDS, Lambda, HTTP APIs e mais
- **Sincronização offline:** Suporta sincronização de dados offline para aplicações móveis
- **Segurança:** Integração com AWS IAM, Amazon Cognito e autorizadores personalizados
- **Caching:** Oferece cache em múltiplas camadas para melhor performance

## Comparativo
- **AWS AppSync:** Ideal para construir APIs GraphQL que exigem recursos em tempo real, sincronização offline e agregação de dados de múltiplas fontes. Focado em flexibilidade de consulta e eficiência de dados.
- **Amazon API Gateway:** Um serviço versátil para criar e gerenciar APIs REST, HTTP e WebSocket. É mais genérico e adequado para uma ampla gama de APIs, incluindo aquelas que não exigem GraphQL ou recursos em tempo real avançados. 