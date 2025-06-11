---
sidebar_position: 2
---

# AWS Step Functions

## O que é
Um serviço de fluxo de trabalho sem servidor que permite coordenar componentes de aplicações distribuídas e microsserviços usando fluxos de trabalho visuais.

## Para que serve
Construir aplicações distribuídas, automatizar processos de negócios, orquestrar funções Lambda e coordenar tarefas em diferentes serviços AWS.

## Casos de uso
- Orquestração de microsserviços
- Automação de processos de negócios (ex: processamento de pedidos, fluxos de trabalho de aprovação)
- Construção de pipelines de ETL complexos
- Coordenação de tarefas de machine learning
- Automação de fluxos de trabalho de resposta a incidentes

## Principais pontos
- **Fluxos de trabalho visuais:** Permite definir fluxos de trabalho como máquinas de estado, que podem ser visualizadas e monitoradas
- **Sem servidor:** Não há servidores para provisionar ou gerenciar
- **Tolerância a falhas:** Lida automaticamente com erros, novas tentativas e paralelismo
- **Integração:** Integra-se com mais de 200 serviços AWS, incluindo Lambda, EC2, SQS, SNS, etc.
- **Durabilidade:** Os fluxos de trabalho podem durar dias, meses ou até anos

## Comparativo
- **AWS Step Functions vs. AWS Lambda (direto):** O Lambda é para execução de funções sem servidor, enquanto o Step Functions é para orquestrar e coordenar múltiplas funções Lambda e outros serviços em um fluxo de trabalho complexo. O Step Functions adiciona resiliência, tratamento de erros e capacidade de manter o estado entre as etapas.
- **AWS Step Functions vs. AWS Simple Workflow Service (SWF):** O Step Functions é a evolução do SWF, oferecendo uma abordagem mais moderna e visual para orquestração de fluxos de trabalho, com menos complexidade de gerenciamento e maior integração com o ecossistema AWS. 