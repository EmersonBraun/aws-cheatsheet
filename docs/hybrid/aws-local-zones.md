---
sidebar_position: 1
---

# AWS Local Zones

## O que é
Um tipo de infraestrutura AWS que estende os serviços AWS para mais locais, permitindo que você execute aplicações sensíveis à latência mais perto dos usuários finais e dos datacenters on-premises.

## Para que serve
Atender a requisitos de baixa latência para aplicações que precisam estar fisicamente próximas aos usuários ou a recursos on-premises, sem a necessidade de operar um datacenter próprio.

## Casos de uso
- Aplicações de jogos online que exigem latência ultrabaixa.
- Transmissão de vídeo ao vivo e processamento de mídia.
- Aplicações de realidade virtual e aumentada.
- Aplicações industriais e de manufatura que exigem processamento de dados em tempo real.
- Extensão de datacenters on-premises para a nuvem com baixa latência.

## Principais pontos
- **Extensão de região:** Estende uma região AWS para uma localização geográfica mais próxima dos usuários.
- **Baixa latência:** Permite executar recursos de computação e armazenamento com latência de milissegundos de um dígito.
- **Serviços AWS selecionados:** Oferece um subconjunto de serviços AWS, como EC2, EBS, VPC, e outros, mais próximos dos usuários.
- **Conectividade:** Conecta-se perfeitamente à região AWS principal, permitindo acesso a todos os serviços da região.
- **Gerenciamento unificado:** Gerencie recursos em Local Zones da mesma forma que gerencia recursos em uma região AWS.

## Comparativo com regiões AWS e Zonas de Disponibilidade
- **AWS Local Zones:** Projetadas para estender a nuvem AWS para locais específicos onde a latência é crítica, oferecendo um subconjunto de serviços AWS mais próximos dos usuários finais ou datacenters on-premises. Ideal para cargas de trabalho que exigem latência ultrabaixa.
- **Regiões AWS:** São áreas geográficas isoladas onde a AWS hospeda seus datacenters. Cada região é composta por várias Zonas de Disponibilidade.
- **Zonas de Disponibilidade (AZs):** São locais fisicamente separados e isolados dentro de uma região AWS, projetados para fornecer alta disponibilidade e tolerância a falhas. As AZs estão conectadas por redes de baixa latência. 