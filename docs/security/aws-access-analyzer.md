---
sidebar_position: 4
---

# AWS Access Analyzer

## O que é
Um serviço que ajuda você a identificar os recursos em sua organização e suas contas, como buckets do Amazon S3 ou funções do IAM, que são compartilhados com uma entidade externa.

## Para que serve
Aumentar a segurança de seus recursos AWS, identificando acessos não intencionais e potenciais riscos de segurança decorrentes de configurações de permissões excessivamente permissivas.

## Casos de uso
- Identificar buckets S3 que estão publicamente acessíveis ou compartilhados com contas externas.
- Detectar funções do IAM que podem ser assumidas por entidades fora da sua organização.
- Revisar políticas baseadas em recursos para garantir que apenas as entidades autorizadas tenham acesso.
- Ajudar a implementar o princípio do privilégio mínimo.
- Monitorar continuamente o acesso externo aos seus recursos.

## Principais pontos
- **Análise de acesso externo:** Analisa políticas baseadas em recursos para identificar acesso externo.
- **Tipos de recursos:** Suporta S3 buckets, funções do IAM, filas SQS, tópicos SNS, chaves KMS, entre outros.
- **Resultados acionáveis:** Fornece descobertas detalhadas sobre o acesso externo e recomendações para correção.
- **Integração:** Integra-se com AWS Security Hub para agregar descobertas de segurança.
- **Totalmente gerenciado:** Não há infraestrutura para provisionar ou gerenciar.
- **Análise contínua:** Monitora continuamente as políticas para novas descobertas.

## Comparativo com auditorias manuais de políticas
- **AWS Access Analyzer:** Automatiza a identificação de acesso externo não intencional, fornecendo uma análise contínua e abrangente de suas políticas baseadas em recursos. Reduz o esforço manual e a probabilidade de erros, ajudando a manter uma postura de segurança robusta.
- **Auditorias manuais de políticas:** Demoradas, propensas a erros e podem não cobrir todas as políticas e recursos em um ambiente grande. Dificulta a identificação proativa de riscos de segurança e a manutenção da conformidade. 