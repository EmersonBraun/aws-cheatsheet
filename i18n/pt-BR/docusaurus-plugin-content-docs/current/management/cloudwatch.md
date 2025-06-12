---
sidebar_position: 1
---

# Amazon CloudWatch

## O que é
Um serviço de monitoramento e observabilidade para recursos e aplicações AWS, bem como para aplicações on-premises.

## Para que serve
Coletar e monitorar métricas, coletar e monitorar arquivos de log, e configurar alarmes para notificar sobre mudanças no desempenho ou na disponibilidade dos recursos.

## Casos de uso
- Monitoramento de performance de instâncias EC2, bancos de dados RDS, funções Lambda, etc.
- Coleta e análise de logs de aplicações e serviços
- Criação de dashboards personalizados para visualizar métricas
- Configuração de alarmes para notificar sobre limites de métricas (ex: uso de CPU, erros de aplicação)
- Automação de ações em resposta a eventos (ex: escalar instâncias, reiniciar serviços)

## Principais pontos
- **Métricas:** Coleta métricas de recursos AWS e aplicações personalizadas
- **Logs:** Coleta, monitora e armazena logs de aplicações e serviços
- **Alarmes:** Permite configurar alarmes com base em limites de métricas
- **Eventos:** Permite reagir a eventos de recursos AWS e aplicações
- **Dashboards:** Crie dashboards personalizados para visualizar dados de monitoramento
- **Totalmente gerenciado:** A AWS cuida da infraestrutura de monitoramento

## Comparativo
- **Amazon CloudWatch:** Oferece uma solução de monitoramento nativa e totalmente gerenciada para o ecossistema AWS, com integração profunda com outros serviços. Ideal para quem busca uma solução simples e integrada para monitorar seus recursos AWS.
- **Ferramentas de terceiros (ex: Grafana, Prometheus auto-gerenciados):** Oferecem maior flexibilidade e personalização, além de suporte a ambientes multi-cloud e on-premises. No entanto, exigem que o usuário gerencie a infraestrutura de monitoramento. 