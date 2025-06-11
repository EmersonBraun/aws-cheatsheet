---
sidebar_position: 1
---

# Amazon VPC (Virtual Private Cloud)

## O que é
Um serviço que permite provisionar uma seção da nuvem da Amazon Web Services (AWS) isolada logicamente, onde você pode executar recursos da AWS na rede virtual que você definir.

## Para que serve
Criar sua própria rede virtual privada na AWS, com controle total sobre o seu ambiente de rede, incluindo seleção de faixas de endereços IP, criação de sub-redes, configuração de tabelas de rotas e gateways de rede.

## Casos de uso
- Hospedagem de aplicações web e corporativas com requisitos de rede específicos
- Criação de ambientes de desenvolvimento, teste e produção isolados
- Conexão segura de sua rede on-premises à AWS
- Implementação de arquiteturas de rede complexas com múltiplas camadas de segurança
- Controle de acesso a recursos da AWS em nível de rede

## Principais pontos
- **Rede virtual isolada:** Permite que você defina sua própria rede na nuvem
- **Sub-redes:** Divida sua VPC em sub-redes públicas e privadas
- **Tabelas de rotas:** Controle o roteamento do tráfego de rede
- **Gateways:** Conecte sua VPC à internet (Internet Gateway), a redes on-premises (Virtual Private Gateway, Direct Connect) ou a outras VPCs (VPC Peering, Transit Gateway)
- **Security Groups e Network ACLs:** Controle o tráfego de entrada e saída em nível de instância e sub-rede
- **IPs elásticos:** Endereços IP públicos estáticos para suas instâncias

## Comparativo
- **Amazon VPC:** Oferece a flexibilidade e escalabilidade de uma rede definida por software na nuvem, eliminando a necessidade de adquirir e gerenciar hardware de rede físico. Permite criar redes complexas e seguras de forma programática.
- **Rede on-premises tradicional:** Exige investimento em hardware físico, gerenciamento manual e pode ser menos flexível para escalar rapidamente ou adaptar-se a novas necessidades de negócios. 