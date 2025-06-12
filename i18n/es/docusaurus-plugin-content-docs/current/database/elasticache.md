---
sidebar_position: 4
---

# Amazon ElastiCache

## O que é
Um serviço web que facilita a configuração, o gerenciamento e a escalabilidade de um armazenamento de dados em memória distribuído ou ambiente de cache na nuvem.

## Para que serve
Acelerar o desempenho de aplicações e bancos de dados, armazenando dados frequentemente acessados em memória para acesso de baixa latência.

## Casos de uso
- Cache de dados para reduzir a carga em bancos de dados (ex: cache de resultados de consultas, cache de objetos)
- Armazenamento de sessões para aplicações web (ex: sessões de usuário, carrinhos de compras)
- Tabelas de classificação de jogos em tempo real
- Análise em tempo real e processamento de streams
- Mensagens e filas de pub/sub

## Principais pontos
- **Motores de cache:** Suporta Redis (para cache, pub/sub, estruturas de dados avançadas) e Memcached (para cache simples de chave-valor)
- **Desempenho:** Oferece acesso a dados com latência de microssegundos
- **Totalmente gerenciado:** A AWS cuida do provisionamento, patching, backups, monitoramento e recuperação
- **Escalabilidade:** Permite escalar a capacidade de cache para atender às demandas da aplicação
- **Alta disponibilidade:** Suporta replicação e failover automático para alta disponibilidade
- **ElastiCache Serverless:** Uma opção sem servidor que escala automaticamente a capacidade do cache

## Comparativo com cache em banco de dados
- **Amazon ElastiCache:** Um serviço de cache dedicado que oferece desempenho muito superior e menor latência do que o cache embutido em muitos bancos de dados. Descarrega a carga de E/S do banco de dados principal, melhorando a performance geral da aplicação
- **Cache em banco de dados:** Geralmente mais simples de configurar, mas pode não oferecer o mesmo nível de desempenho, escalabilidade e recursos avançados de um serviço de cache dedicado 