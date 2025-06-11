---
sidebar_position: 2
---

# AWS IoT Events

## O que é
Um serviço totalmente gerenciado que permite detectar e responder a eventos de IoT de equipamentos e aplicações.

## Para que serve
Monitorar equipamentos ou frotas de dispositivos em busca de falhas ou alterações na operação e acionar ações quando esses eventos ocorrem.

## Casos de uso
- Detecção de anomalias em equipamentos industriais (ex: temperatura excessiva, vibração anormal)
- Monitoramento de status de dispositivos (ex: porta aberta/fechada, nível de bateria baixo)
- Acionamento de alertas e notificações em caso de eventos críticos
- Automação de ações em resposta a eventos de IoT (ex: iniciar um processo de manutenção)
- Otimização de processos de negócios baseados em dados de IoT

## Principais pontos
- **Detecção de eventos:** Permite definir detectores para identificar eventos complexos a partir de dados de telemetria
- **Modelos de detector:** Crie modelos de detector para representar o estado de um equipamento ou processo
- **Ações:** Aciona ações em outros serviços AWS (Lambda, SNS, SQS, etc.) em resposta a eventos detectados
- **Sem servidor:** Não há servidores para provisionar ou gerenciar
- **Integração:** Integra-se com AWS IoT Core e outros serviços AWS

## Comparativo
- **AWS IoT Events:** Focado na detecção de eventos complexos e na lógica de estado de equipamentos/processos. É ideal para cenários onde você precisa monitorar mudanças de estado e acionar ações com base em padrões de eventos.
- **AWS IoT Core (regras):** Mais focado no roteamento de mensagens de dispositivos para outros serviços AWS com base em regras simples. Embora as regras possam acionar ações, o IoT Events oferece uma capacidade mais avançada para modelar estados e detectar eventos complexos. 