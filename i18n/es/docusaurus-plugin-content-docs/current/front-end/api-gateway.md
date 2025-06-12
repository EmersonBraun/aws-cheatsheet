---
sidebar_position: 1
---

# Amazon API Gateway

## O que é
Um serviço totalmente gerenciado que permite que desenvolvedores criem, publiquem, mantenham, monitorem e protejam APIs REST, HTTP e WebSocket em qualquer escala.

## Para que serve
Atuar como um "front door" para aplicações, permitindo que os clientes acessem dados, lógica de negócios ou funcionalidades de back-end de forma segura e escalável.

## Casos de uso
- Criação de APIs para aplicações web e móveis
- Exposição de funções AWS Lambda como APIs
- Integração de aplicações com serviços de back-end
- Construção de microsserviços e APIs serverless
- Habilitar comunicação em tempo real com APIs WebSocket

## Principais pontos
- **Totalmente gerenciado:** A AWS cuida do provisionamento, escalabilidade, segurança e monitoramento
- **Tipos de API:** Suporta APIs REST (HTTP/S), HTTP APIs (mais simples e baratas) e WebSocket APIs (para comunicação bidirecional em tempo real)
- **Segurança:** Integração com AWS IAM, Amazon Cognito, autorizadores Lambda e chaves de API
- **Cache:** Permite configurar cache para reduzir a latência e a carga nos serviços de back-end
- **Throttling e cotas:** Permite controlar o tráfego para proteger seus serviços de back-end
- **Monitoramento:** Integração com Amazon CloudWatch para monitoramento e logs

## Comparativo
- **Amazon API Gateway:** Um serviço versátil para criar e gerenciar APIs REST, HTTP e WebSocket. É mais genérico e adequado para uma ampla gama de APIs, incluindo aquelas que não exigem GraphQL ou recursos em tempo real avançados.
- **AWS AppSync:** Ideal para construir APIs GraphQL que exigem recursos em tempo real, sincronização offline e agregação de dados de múltiplas fontes. Focado em flexibilidade de consulta e eficiência de dados. 