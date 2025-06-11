---
sidebar_position: 7
---

# Elastic Load Balancing (ELB)

## O que é
Um serviço que distribui automaticamente o tráfego de entrada de aplicações entre múltiplos destinos, como instâncias EC2, contêineres e endereços IP.

## Para que serve
Melhorar a disponibilidade e escalabilidade de aplicações, distribuindo o tráfego de forma eficiente entre múltiplos destinos e detectando instâncias não saudáveis.

## Casos de uso
- Distribuir tráfego entre múltiplas instâncias EC2 para melhorar a disponibilidade
- Balancear carga de aplicações web e APIs
- Implementar alta disponibilidade e escalabilidade automática
- Distribuir tráfego entre contêineres em um cluster ECS ou EKS
- Implementar SSL/TLS termination para aplicações web

## Principais pontos
- **Tipos de load balancer:** Application Load Balancer (ALB), Network Load Balancer (NLB) e Classic Load Balancer (CLB)
- **Alta disponibilidade:** Distribui o tráfego entre múltiplas zonas de disponibilidade
- **Escalabilidade automática:** Integra-se com Auto Scaling para ajustar automaticamente a capacidade
- **Monitoramento de saúde:** Verifica a saúde dos destinos e remove instâncias não saudáveis
- **SSL/TLS:** Suporte para terminação SSL/TLS e certificados gerenciados
- **Integração:** Funciona com outros serviços AWS como EC2, ECS, EKS e Auto Scaling

## Comparativo
- **Elastic Load Balancing:** Oferece um serviço gerenciado e altamente disponível para distribuição de tráfego, com recursos avançados como monitoramento de saúde, SSL/TLS termination e integração com outros serviços AWS.
- **Load balancer auto-gerenciado:** Requer que o usuário configure e mantenha seu próprio load balancer, o que pode ser complexo e propenso a erros. Não oferece os mesmos recursos de escalabilidade e alta disponibilidade do ELB. 