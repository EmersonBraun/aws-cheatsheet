---
sidebar_position: 6
---

# AWS Transit Gateway

## O que é
Um serviço que permite conectar VPCs e redes on-premises através de um único hub, simplificando a arquitetura de rede e reduzindo as relações operacionais.

## Para que serve
Centralizar e simplificar a conectividade entre VPCs, redes on-premises e serviços AWS, eliminando a necessidade de conexões ponto a ponto complexas.

## Casos de uso
- Conectar múltiplas VPCs em uma arquitetura hub-and-spoke
- Estabelecer conectividade entre VPCs em diferentes regiões AWS
- Conectar redes on-premises a múltiplas VPCs através de um único ponto
- Compartilhar serviços entre VPCs (ex: DNS, Active Directory)
- Simplificar a arquitetura de rede e reduzir o número de conexões necessárias

## Principais pontos
- **Hub centralizado:** Um único ponto de conexão para todas as suas VPCs e redes on-premises
- **Roteamento simplificado:** Gerencia automaticamente o roteamento entre VPCs e redes on-premises
- **Escalabilidade:** Suporta milhares de VPCs e conexões on-premises
- **Multirregião:** Permite conectar VPCs em diferentes regiões AWS
- **Segurança:** Suporta criptografia de tráfego e controle de acesso granular
- **Integração:** Funciona com Direct Connect, VPN e VPC peering

## Comparativo
- **AWS Transit Gateway:** Oferece uma solução centralizada e escalável para conectar VPCs e redes on-premises, simplificando a arquitetura de rede e reduzindo a complexidade operacional.
- **Conexões ponto a ponto:** Requer múltiplas conexões entre VPCs e redes on-premises, resultando em uma arquitetura mais complexa e difícil de gerenciar. Pode se tornar impraticável à medida que o número de conexões aumenta. 