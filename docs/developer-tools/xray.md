---
sidebar_position: 10
---

# AWS X-Ray

## O que é
Um serviço que ajuda desenvolvedores a analisar e depurar aplicações distribuídas, como aquelas construídas usando microsserviços.

## Para que serve
Fornecer uma visão ponta a ponta das requisições à medida que elas viajam através de sua aplicação, ajudando a identificar gargalos de desempenho, erros e a causa raiz de problemas.

## Casos de uso
- Análise e depuração de aplicações distribuídas e microsserviços
- Identificação de gargalos de desempenho em aplicações
- Rastreamento de requisições através de múltiplos serviços AWS
- Análise de latência e erros em aplicações
- Monitoramento de aplicações em produção

## Principais pontos
- **Rastreamento distribuído:** Coleta dados sobre as requisições à medida que elas passam por diferentes componentes da aplicação
- **Mapa de serviço:** Gera um mapa visual dos serviços e recursos que compõem sua aplicação, mostrando as conexões e a latência entre eles
- **Segmentos e subsegmentos:** Permite detalhar o desempenho de componentes individuais dentro de uma requisição
- **Anotações e metadados:** Permite adicionar informações personalizadas aos rastreamentos para facilitar a depuração
- **Integração:** Integra-se com AWS Lambda, Amazon EC2, Elastic Load Balancing, Amazon API Gateway e outros serviços AWS

## Comparativo com Amazon CloudWatch
- **AWS X-Ray:** Focado em rastreamento distribuído e análise de desempenho de aplicações, fornecendo uma visão ponta a ponta das requisições e seus componentes. Ideal para depuração e otimização de aplicações complexas
- **Amazon CloudWatch:** Um serviço de monitoramento e observabilidade que coleta métricas e logs de recursos e aplicações AWS. É mais abrangente para monitoramento de infraestrutura e aplicações, mas não oferece o mesmo nível de rastreamento distribuído que o X-Ray 