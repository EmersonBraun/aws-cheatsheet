---
sidebar_position: 4
---

# AWS Direct Connect

## O que é
Um serviço de nuvem que cria uma conexão de rede dedicada entre suas instalações (on-premises) e a AWS.

## Para que serve
Estabelecer uma conexão de rede privada, consistente e de baixa latência entre seu datacenter, escritório ou ambiente de colocation e a AWS, ignorando a internet pública.

## Casos de uso
- Transferência de grandes volumes de dados de forma segura e rápida para a AWS
- Criação de aplicações híbridas que acessam recursos on-premises e na AWS
- Redução de custos de transferência de dados em comparação com a internet pública
- Atendimento a requisitos de conformidade e segurança que proíbem o uso da internet pública
- Melhoria do desempenho de aplicações que exigem baixa latência e alta largura de banda

## Principais pontos
- **Conexão dedicada:** Uma conexão de rede privada entre sua rede e a AWS
- **Baixa latência e alta largura de banda:** Oferece desempenho de rede consistente e previsível
- **Segurança:** O tráfego de rede não passa pela internet pública, aumentando a segurança
- **Redução de custos:** Pode ser mais econômico para grandes volumes de dados do que usar a internet pública
- **Interfaces virtuais:** Permite criar interfaces virtuais para acessar serviços públicos da AWS (ex: S3) ou sua VPC
- **Localizações de Direct Connect:** Conecte-se à AWS em uma das muitas localizações de Direct Connect em todo o mundo

## Comparativo
- **AWS Direct Connect:** Oferece uma conexão de rede privada e dedicada com desempenho consistente e previsível, ideal para workloads de produção que exigem alta largura de banda, baixa latência e segurança. É uma conexão física.
- **VPN sobre a internet:** Utiliza a internet pública para estabelecer uma conexão segura, o que pode resultar em latência variável e largura de banda inconsistente. Mais adequada para cenários onde o custo é uma preocupação maior e os requisitos de desempenho são menos rigorosos. 