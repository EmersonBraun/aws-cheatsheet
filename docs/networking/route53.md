---
sidebar_position: 3
---

# Amazon Route 53

## O que é
Um serviço web de Sistema de Nomes de Domínio (DNS) altamente disponível e escalável.

## Para que serve
Conectar as requisições do usuário a aplicações e serviços da AWS ou a recursos on-premises, traduzindo nomes de domínio legíveis por humanos (ex: www.example.com) em endereços IP numéricos.

## Casos de uso
- Registro de nomes de domínio
- Roteamento de tráfego para recursos da AWS (EC2, S3, ELB, CloudFront)
- Roteamento de tráfego para recursos on-premises
- Verificação de integridade de aplicações e failover automático
- Roteamento baseado em latência, geolocalização e ponderado

## Principais pontos
- **DNS gerenciado:** A AWS cuida da infraestrutura DNS
- **Alta disponibilidade:** Projetado para ser altamente disponível e confiável
- **Tipos de roteamento:** Suporta roteamento simples, ponderado, baseado em latência, geolocalização, failover e multi-valor de resposta
- **Verificações de integridade:** Monitora a integridade dos seus recursos e redireciona o tráfego para endpoints saudáveis
- **Registro de domínio:** Permite registrar e gerenciar nomes de domínio diretamente no Route 53
- **Integração:** Integra-se com outros serviços AWS e pode ser usado para rotear tráfego para qualquer recurso conectado à internet

## Comparativo
- **Amazon Route 53:** Oferece um serviço DNS gerenciado, altamente disponível e escalável, com recursos avançados de roteamento e verificação de integridade. Reduz a complexidade de gerenciar servidores DNS e garante alta disponibilidade.
- **DNS tradicional (auto-gerenciado):** Exige que o usuário configure e mantenha seus próprios servidores DNS, o que pode ser complexo, propenso a erros e não oferece os mesmos recursos de escalabilidade e alta disponibilidade do Route 53. 