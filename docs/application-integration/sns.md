---
sidebar_position: 4
---

# AWS SNS (Simple Notification Service)

## O que é
Um serviço de mensagens totalmente gerenciado que permite enviar mensagens de editores (produtores) para assinantes (clientes).

## Para que serve
Enviar notificações push, SMS, e-mails e mensagens para outros serviços AWS (como SQS, Lambda) de forma escalável e confiável.

## Casos de uso
- Notificações de aplicações (ex: atualizações de status, alertas)
- Mensagens entre microsserviços
- Envio de SMS para autenticação de dois fatores
- Distribuição de eventos para múltiplos consumidores
- Monitoramento e alertas de sistemas

## Principais pontos
- **Pub/Sub (Publicação/Assinatura):** Permite que um editor envie uma mensagem para um tópico, e todos os assinantes desse tópico recebem a mensagem
- **Totalmente gerenciado:** A AWS cuida da infraestrutura e da escalabilidade
- **Múltiplos protocolos:** Suporta HTTP/S, e-mail, SMS, SQS, Lambda, push notifications
- **Alta disponibilidade:** Projetado para ser altamente disponível e durável
- **Filtragem de mensagens:** Permite que os assinantes filtrem as mensagens que desejam receber

## Comparativo com AWS SQS
- **AWS SNS:** Um serviço de notificação pub/sub, onde uma mensagem é enviada para um tópico e entregue a todos os assinantes. Ideal para cenários onde a mesma mensagem precisa ser entregue a múltiplos consumidores.
- **AWS SQS (Simple Queue Service):** Um serviço de fila de mensagens que permite o desacoplamento de componentes de aplicações. As mensagens são armazenadas em uma fila até que um consumidor as processe. Ideal para cenários onde as mensagens precisam ser processadas por um único consumidor ou onde a ordem e a garantia de entrega são cruciais. 