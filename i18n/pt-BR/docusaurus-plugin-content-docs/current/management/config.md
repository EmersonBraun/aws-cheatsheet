---
sidebar_position: 4
---

# AWS Config

## O que é
Um serviço que permite avaliar, auditar e avaliar as configurações e os relacionamentos de seus recursos da AWS.

## Para que serve
Monitorar continuamente a conformidade dos recursos da AWS com as políticas de segurança e conformidade, e registrar o histórico de configuração dos recursos.

## Casos de uso
- Auditoria de conformidade e segurança (ex: garantir que todos os buckets S3 não sejam públicos)
- Monitoramento de alterações de configuração em recursos da AWS
- Solução de problemas operacionais (ex: identificar quando uma configuração foi alterada e causou um problema)
- Avaliação contínua da conformidade com padrões regulatórios
- Análise de relacionamento entre recursos da AWS

## Principais pontos
- **Histórico de configuração:** Registra o histórico de configuração de seus recursos da AWS
- **Regras de conformidade:** Permite definir regras para avaliar a conformidade dos recursos com as políticas
- **Detecção de alterações:** Notifica sobre alterações de configuração em tempo real
- **Análise de relacionamento:** Permite visualizar como os recursos da AWS estão relacionados entre si
- **Totalmente gerenciado:** A AWS cuida da infraestrutura de monitoramento de configuração
- **Integração:** Integra-se com AWS CloudTrail, Amazon SNS e AWS Lambda

## Comparativo
- **AWS Config:** Focado em registrar o histórico de configuração dos recursos e avaliar a conformidade com as políticas. Responde à pergunta "como meus recursos estão configurados e como essa configuração mudou ao longo do tempo?".
- **AWS CloudTrail:** Focado em registrar a atividade da API e do usuário para auditoria, governança e conformidade. Responde à pergunta "quem fez o quê?". 