---
sidebar_position: 10
---

# Amazon Macie

## O que é
Um serviço de segurança de dados que usa machine learning e correspondência de padrões para descobrir, classificar e proteger dados sigilosos no Amazon S3.

## Para que serve
Identificar e alertar sobre a presença de dados sensíveis (ex: informações de identificação pessoal - PII, credenciais) em seus buckets S3, bem como monitorar o acesso a esses dados para detectar riscos de segurança.

## Casos de uso
- Descoberta de dados sensíveis em buckets S3 (ex: números de cartão de crédito, CPFs, senhas).
- Avaliação de riscos de segurança para dados armazenados no S3.
- Monitoramento de acesso a dados sensíveis para detectar atividades incomuns.
- Geração de alertas sobre configurações de segurança inadequadas em buckets S3.
- Ajuda na conformidade com regulamentações de proteção de dados (ex: GDPR, LGPD).

## Principais pontos
- **Descoberta de dados sensíveis:** Utiliza machine learning e técnicas de correspondência de padrões para identificar dados sensíveis.
- **Visibilidade:** Fornece um painel centralizado para visualizar a postura de segurança dos seus dados no S3.
- **Alertas:** Gera alertas detalhados sobre descobertas de dados sensíveis e atividades suspeitas.
- **Totalmente gerenciado:** Não há infraestrutura para provisionar ou gerenciar.
- **Integração:** Integra-se com AWS Security Hub e Amazon EventBridge para automação de resposta.

## Comparativo
- **Amazon Macie:** Especializado na descoberta e proteção de dados sensíveis no Amazon S3, utilizando machine learning para identificar padrões complexos de dados.
- **AWS Config:** Monitora as configurações dos recursos AWS para conformidade, mas não se aprofunda no conteúdo dos dados armazenados.
- **Ferramentas DLP (Data Loss Prevention) tradicionais:** Podem ser complexas de implantar e gerenciar em ambientes de nuvem, e podem não ter a mesma integração nativa com o S3 que o Macie oferece.



