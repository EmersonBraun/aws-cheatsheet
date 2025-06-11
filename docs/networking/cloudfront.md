---
sidebar_position: 2
---

# Amazon CloudFront

## O que é
Uma rede de entrega de conteúdo (Content Delivery Network - CDN) rápida e segura que acelera a distribuição de conteúdo estático e dinâmico da web para usuários finais.

## Para que serve
Reduzir a latência e melhorar a performance de aplicações web, entregando conteúdo (imagens, vídeos, arquivos HTML, CSS, JS) de servidores de borda (edge locations) mais próximos dos usuários.

## Casos de uso
- Acelerar a entrega de sites estáticos e dinâmicos
- Streaming de vídeo ao vivo e sob demanda
- Distribuição de atualizações de software e patches
- Entrega de APIs com baixa latência
- Proteção contra ataques DDoS e outras ameaças de segurança

## Principais pontos
- **Rede global de edge locations:** Conteúdo armazenado em cache em servidores próximos aos usuários
- **Baixa latência:** Reduz o tempo de carregamento de páginas e o buffering de vídeo
- **Segurança:** Integração com AWS WAF (Web Application Firewall) e AWS Shield para proteção contra ataques
- **Cache:** Armazena cópias do conteúdo em cache para entrega mais rápida
- **Invalidação de cache:** Permite invalidar o cache para garantir que os usuários recebam a versão mais recente do conteúdo
- **Integração:** Integra-se com Amazon S3, Elastic Load Balancing, Amazon EC2 e outros serviços AWS

## Comparativo
- **Amazon CloudFront:** Melhora significativamente a performance e a segurança da entrega de conteúdo, especialmente para usuários geograficamente dispersos. Reduz a carga no servidor de origem e os custos de transferência de dados.
- **Entrega direta de conteúdo:** O conteúdo é entregue diretamente do servidor de origem, o que pode resultar em alta latência para usuários distantes e sobrecarregar o servidor de origem em caso de alto tráfego. 