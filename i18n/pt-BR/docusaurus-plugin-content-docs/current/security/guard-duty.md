---
sidebar_position: 2
---

# AWS GuardDuty

## O que é
Um serviço de detecção de ameaças que monitora continuamente atividades maliciosas e comportamento não autorizado para proteger suas contas, workloads e dados da AWS.

## Para que serve
Identificar ameaças potenciais, como acesso não autorizado, uso de credenciais comprometidas, ataques de negação de serviço (DDoS) e outras atividades suspeitas.

## Casos de uso
- Detecção de atividades incomuns em contas AWS (ex: chamadas de API de regiões incomuns).
- Identificação de instâncias EC2 comprometidas (ex: mineração de criptomoedas, ataques de força bruta).
- Monitoramento de acesso a buckets S3 (ex: acesso de IPs maliciosos).
- Detecção de ameaças em tempo real para workloads de IA generativa.
- Acelerar investigações de segurança e automatizar a remediação.

## Principais pontos
- **Monitoramento contínuo:** Analisa logs de eventos do AWS CloudTrail, logs de fluxo do VPC e logs de DNS.
- **Inteligência de ameaças:** Utiliza feeds de inteligência de ameaças e machine learning para identificar atividades suspeitas.
- **Sem agente:** Não requer a instalação de agentes em suas instâncias.
- **Totalmente gerenciado:** A AWS gerencia a infraestrutura e as atualizações de inteligência de ameaças.
- **Integração:** Integra-se com AWS Security Hub, Amazon EventBridge e AWS Lambda para automação de resposta.

## Comparativo
- **AWS GuardDuty:** Focado na detecção de ameaças em tempo real e na identificação de atividades maliciosas em sua conta AWS, utilizando inteligência de ameaças e machine learning.
- **AWS WAF (Web Application Firewall):** Protege aplicações web contra ataques comuns da web, como injeção de SQL e cross-site scripting.
- **AWS Security Hub:** Agrega, organiza e prioriza os alertas de segurança de vários serviços AWS e parceiros, fornecendo uma visão centralizada da sua postura de segurança.



