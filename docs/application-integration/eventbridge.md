---
sidebar_position: 2
---

# AWS EventBridge

## O que é
Um barramento de eventos sem servidor que facilita a conexão de componentes de aplicações usando eventos, tornando mais fácil a criação de aplicações escaláveis orientadas a eventos.

## Para que serve
Roteamento de eventos de várias fontes (serviços AWS, aplicações personalizadas, SaaS) para diferentes destinos (funções Lambda, SQS, SNS, etc.) para construir arquiteturas orientadas a eventos.

## Casos de uso
- Construção de arquiteturas orientadas a eventos e microsserviços desacoplados
- Integração de aplicações e serviços SaaS
- Automação de fluxos de trabalho em resposta a eventos
- Monitoramento de alterações em recursos AWS
- Auditoria e conformidade

## Principais pontos
- **Sem servidor:** Não há infraestrutura para gerenciar
- **Barramento de eventos:** Atua como um hub central para eventos
- **Regras:** Permite definir regras para filtrar e rotear eventos para destinos específicos
- **Fontes de eventos:** Suporta eventos de serviços AWS, aplicações personalizadas e parceiros SaaS
- **Destinos:** Pode enviar eventos para funções Lambda, SQS, SNS, Step Functions, etc.

## Comparativo com AWS SNS
- **AWS EventBridge:** Focado em roteamento de eventos e construção de arquiteturas orientadas a eventos, com filtragem avançada e capacidade de rotear eventos de diversas fontes para múltiplos destinos. Ideal para cenários onde a lógica de negócios é acionada por eventos.
- **AWS SNS (Simple Notification Service):** Um serviço de mensagens pub/sub (publicação/assinatura) que permite enviar mensagens para um grande número de assinantes (e-mail, SMS, funções Lambda, SQS, etc.). É mais focado em notificação e entrega de mensagens para múltiplos endpoints, sem a mesma capacidade de filtragem e roteamento complexo de eventos do EventBridge. 