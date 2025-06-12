---
sidebar_position: 7
---

# AWS Simple Workflow Service (SWF)

## O que é
Um serviço de orquestração de fluxo de trabalho que ajuda os desenvolvedores a criar, executar e dimensionar trabalhos em segundo plano que têm etapas paralelas ou sequenciais.

## Para que serve
Coordenar tarefas em aplicações distribuídas, garantindo que as etapas sejam executadas na ordem correta e que o estado do fluxo de trabalho seja mantido.

## Casos de uso
- Processamento de pedidos de e-commerce
- Fluxos de trabalho de processamento de mídia (ex: codificação de vídeo)
- Back-ends de aplicações web
- Automação de processos de negócios de longa duração
- Orquestração de tarefas humanas e automatizadas

## Principais pontos
- **Orquestração de tarefas:** Permite coordenar tarefas que podem ser executadas por diferentes componentes (humanos ou automatizados)
- **Estado persistente:** Mantém o estado do fluxo de trabalho, mesmo em caso de falhas
- **Tolerância a falhas:** Lida com falhas de tarefas e permite novas tentativas
- **Flexibilidade:** Permite definir fluxos de trabalho complexos com lógica condicional e paralelismo
- **Programático:** Mais focado em uma abordagem programática para definir fluxos de trabalho

## Comparativo
- **AWS Simple Workflow Service (SWF) vs. AWS Step Functions:** O SWF é um serviço mais antigo e de nível inferior para orquestração de fluxos de trabalho. Oferece grande flexibilidade, mas exige mais código para implementar e gerenciar. É mais adequado para casos de uso onde é necessário um controle muito granular sobre o fluxo de trabalho e a interação com componentes externos. O Step Functions é a evolução do SWF, oferecendo uma abordagem mais moderna e visual para orquestração de fluxos de trabalho, sendo sem servidor, mais fácil de usar e integrar com outros serviços AWS.
---