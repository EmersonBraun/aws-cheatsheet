---
sidebar_position: 2
---

# AWS Network Firewall

## O que é
Um serviço de firewall de rede gerenciado e com estado que facilita a implantação de proteção de rede para suas Amazon Virtual Private Clouds (VPCs).

## Para que serve
Proteger suas VPCs contra ameaças de rede, permitindo que você filtre o tráfego de entrada e saída com base em regras personalizadas, incluindo inspeção de tráfego, prevenção de intrusões e filtragem de URLs.

## Casos de uso
- Inspeção de tráfego de internet de entrada para proteger aplicações web.
- Filtragem de tráfego de saída para controlar o acesso a destinos externos.
- Prevenção de intrusões e detecção de malware.
- Proteção de conexões AWS Direct Connect e VPN.
- Implementação de políticas de segurança de rede em escala.

## Principais pontos
- **Totalmente gerenciado:** A AWS gerencia a infraestrutura subjacente do firewall.
- **Com estado:** Mantém o estado das conexões para permitir inspeção de tráfego bidirecional.
- **Escalabilidade automática:** Escala automaticamente para lidar com picos de tráfego.
- **Regras flexíveis:** Permite criar regras personalizadas usando Suricata-compatible rules (IDS/IPS) e filtragem de URLs.
- **Alta disponibilidade:** Implantado em várias Zonas de Disponibilidade para alta disponibilidade.
- **Integração:** Integra-se com AWS Firewall Manager, Amazon CloudWatch e AWS Security Hub.

## Comparativo com Network ACLs e Security Groups
- **AWS Network Firewall:** Oferece uma camada de proteção de rede mais avançada e centralizada para suas VPCs, com recursos de inspeção de tráfego com estado, prevenção de intrusões e filtragem de URLs. É ideal para implementar políticas de segurança de rede complexas e em escala.
- **Network ACLs (Access Control Lists):** Operam na camada de rede (sem estado) e fornecem controle de tráfego básico em nível de sub-rede. São úteis para filtrar tráfego permitido ou negado, mas não oferecem inspeção de tráfego com estado ou recursos avançados de segurança.
- **Security Groups:** Operam na camada de instância (com estado) e controlam o tráfego de entrada e saída para instâncias EC2. São essenciais para proteger instâncias individuais, mas não fornecem uma visão centralizada ou recursos de firewall de rede para toda a VPC. 