---
sidebar_position: 1
---

# AWS Global Accelerator

## O que é
Um serviço de rede que melhora a disponibilidade e o desempenho de suas aplicações para usuários locais e globais, roteando o tráfego de usuários através da rede global da AWS.

## Para que serve
Otimizar o desempenho de aplicações que atendem a usuários em diferentes localizações geográficas, direcionando o tráfego para o endpoint de aplicação mais próximo e saudável, e evitando o congestionamento da internet pública.

## Casos de uso
- Melhorar o desempenho de aplicações web e APIs para usuários globais.
- Aumentar a disponibilidade de aplicações, direcionando o tráfego para endpoints saudáveis.
- Balanceamento de carga de tráfego entre regiões AWS.
- Fornecer IPs estáticos de entrada para suas aplicações.
- Cenários de recuperação de desastres, direcionando o tráfego para uma região de backup.

## Principais pontos
- **Rede global da AWS:** Utiliza a rede de borda global da AWS para rotear o tráfego, minimizando a latência.
- **IPs estáticos:** Fornece dois endereços IP estáticos que atuam como um ponto de entrada fixo para suas aplicações.
- **Verificações de saúde:** Monitora continuamente a saúde dos endpoints e direciona o tráfego apenas para endpoints saudáveis.
- **Balanceamento de carga:** Distribui o tráfego entre endpoints em uma ou várias regiões.
- **Aceleração de tráfego:** Pode melhorar o desempenho em até 60% para usuários globais.
- **Integração:** Integra-se com Elastic Load Balancing, instâncias EC2 e outros recursos AWS.

## Comparativo com Amazon CloudFront
- **AWS Global Accelerator:** Opera na camada de rede (camada 3 e 4 do modelo OSI) e otimiza o roteamento do tráfego para aplicações dinâmicas e não-cacheáveis, como APIs e aplicações web interativas. Foca em melhorar a disponibilidade e o desempenho global da aplicação.
- **Amazon CloudFront:** É uma CDN (Content Delivery Network) que opera na camada de aplicação (camada 7 do modelo OSI) e é otimizada para entregar conteúdo estático e cacheável (imagens, vídeos, arquivos HTML) para usuários finais com baixa latência. Foca em acelerar a entrega de conteúdo. 