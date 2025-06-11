---
sidebar_position: 6
---

# AWS AppSync

## O que é
Um serviço totalmente gerenciado que facilita o desenvolvimento de APIs GraphQL e Pub/Sub seguras, sem servidor e de alto desempenho.

## Para que serve
Conectar aplicações a dados e eventos em tempo real, permitindo que os desenvolvedores acessem exatamente os dados de que precisam, via uma API flexível que acessa, manipula e combina dados de várias fontes.

## Casos de uso
- Construção de aplicações móveis e web com recursos em tempo real (ex: chats, feeds de notícias)
- Desenvolvimento de aplicações colaborativas (ex: edição de documentos em tempo real)
- Agregação de dados de múltiplas fontes (DynamoDB, Lambda, HTTP APIs, etc.) em uma única API GraphQL
- Sincronização de dados offline para aplicações móveis

## Principais pontos
- **Totalmente gerenciado:** A AWS cuida da infraestrutura e da escalabilidade
- **GraphQL:** Suporta o padrão GraphQL para consultas flexíveis e eficientes
- **Tempo real:** Suporta subscrições em tempo real via WebSocket
- **Segurança:** Integração com AWS IAM, Cognito e outros serviços de segurança
- **Integração:** Conecta-se facilmente com outros serviços AWS como DynamoDB, Lambda, Elasticsearch, etc.

## Comparativo
- **AWS AppSync vs. API Gateway + Lambda:** O AppSync é especializado em GraphQL e oferece recursos de tempo real nativos, enquanto a combinação de API Gateway e Lambda é mais flexível para APIs RESTful tradicionais.
- **AWS AppSync vs. Apollo Server:** O AppSync é um serviço gerenciado que oferece integração nativa com serviços AWS e recursos de tempo real, enquanto o Apollo Server é uma solução de código aberto que requer mais configuração e gerenciamento. 