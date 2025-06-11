---
sidebar_position: 5
---

# AWS PrivateLink

## O que é
Uma tecnologia que permite acessar serviços da AWS de forma privada usando pontos de extremidade privados, sem expor o tráfego à internet pública.

## Para que serve
Estabelecer conectividade privada entre VPCs, serviços AWS e aplicações on-premises, sem a necessidade de usar a internet pública, NAT gateways, firewalls ou gateways de proxy.

## Casos de uso
- Acesso privado a serviços AWS (ex: S3, DynamoDB, API Gateway) a partir de uma VPC
- Compartilhamento de serviços entre VPCs de forma segura e privada
- Conexão de aplicações on-premises a serviços AWS sem exposição à internet
- Implementação de arquiteturas de rede zero-trust
- Simplificação da arquitetura de rede e redução de superfície de ataque

## Principais pontos
- **Pontos de extremidade privados:** Interfaces de rede na sua VPC que permitem acessar serviços AWS de forma privada
- **Segurança aprimorada:** O tráfego nunca sai da rede AWS
- **Simplificação de rede:** Elimina a necessidade de NAT gateways, firewalls ou gateways de proxy
- **Escalabilidade:** Suporta milhares de pontos de extremidade privados por VPC
- **Integração:** Funciona com a maioria dos serviços AWS
- **DNS privado:** Suporte para resolução de DNS privado para serviços AWS

## Comparativo
- **AWS PrivateLink:** Oferece conectividade privada e segura entre VPCs e serviços AWS, sem exposição à internet pública. Ideal para cenários que exigem alta segurança e privacidade.
- **Acesso público via internet:** Expõe o tráfego à internet pública, exigindo medidas adicionais de segurança como NAT gateways, firewalls e gateways de proxy. Pode ser mais complexo de gerenciar e menos seguro. 