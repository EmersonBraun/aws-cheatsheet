---
sidebar_position: 5
---

# AWS SQS (Simple Queue Service)

## O que é
Um serviço de fila de mensagens totalmente gerenciado que permite enviar, armazenar e receber mensagens entre componentes de software em qualquer volume.

## Para que serve
Desacoplar e escalar microsserviços, sistemas distribuídos e aplicações serverless, garantindo que as mensagens sejam processadas de forma assíncrona e confiável.

## Casos de uso
- Desacoplamento de componentes de aplicações
- Processamento de tarefas em segundo plano
- Envio de mensagens entre microsserviços
- Gerenciamento de filas de trabalho para processamento em lote
- Bufferização de requisições para lidar com picos de tráfego

## Principais pontos
- **Totalmente gerenciado:** A AWS cuida da infraestrutura e da escalabilidade
- **Filas padrão e FIFO:** Suporta filas padrão (entrega "at least once", ordem não garantida) e filas FIFO (First-In, First-Out, entrega "exactly once", ordem garantida)
- **Desacoplamento:** Permite que os produtores e consumidores de mensagens operem de forma independente
- **Escalabilidade:** Escala automaticamente para lidar com o volume de mensagens
- **Durabilidade:** As mensagens são armazenadas de forma redundante em várias Zonas de Disponibilidade

## Comparativo com AWS SNS
- **AWS SQS:** Um serviço de fila de mensagens, onde as mensagens são armazenadas em uma fila até que um consumidor as processe. Ideal para cenários onde as mensagens precisam ser processadas por um único consumidor ou onde a ordem e a garantia de entrega são cruciais.
- **AWS SNS:** Um serviço de notificação pub/sub, onde uma mensagem é enviada para um tópico e entregue a todos os assinantes. Ideal para cenários onde a mesma mensagem precisa ser entregue a múltiplos consumidores. 