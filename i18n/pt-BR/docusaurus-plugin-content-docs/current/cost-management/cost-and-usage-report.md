---
sidebar_position: 3
---

# AWS Cost and Usage Report (CUR)

## O que é
Um relatório abrangente e detalhado sobre seus custos e uso da AWS, entregue em um bucket S3.

## Para que serve
Fornecer dados granulares para análise aprofundada de custos, auditoria, otimização e integração com ferramentas de business intelligence (BI) ou sistemas de gerenciamento financeiro.

## Casos de uso
- Análise detalhada de custos e uso por hora, dia, serviço, recurso, tags, etc.
- Integração com ferramentas de BI de terceiros para criar dashboards e relatórios personalizados.
- Automação de processos de faturamento e alocação de custos.
- Auditoria de uso e conformidade.
- Identificação de oportunidades de otimização de custos em um nível granular.

## Principais pontos
- **Dados granulares:** Fornece o conjunto mais detalhado de dados de custo e uso da AWS.
- **Entrega no S3:** Os relatórios são entregues em um bucket S3, permitindo fácil acesso e processamento.
- **Integração:** Pode ser integrado com Athena, Redshift, QuickSight e outras ferramentas para análise.
- **Metadados:** Inclui metadados adicionais sobre serviços, preços e instâncias reservadas.
- **Personalizável:** Permite escolher a granularidade (hora ou dia) e incluir dados de recursos.

## Comparativo
- **AWS Cost and Usage Report (CUR) vs. AWS Cost Explorer:** O CUR fornece um conjunto de dados abrangente e detalhado sobre seus custos e uso da AWS, entregue em um bucket S3. É ideal para análises mais profundas, integração com outras ferramentas de BI e automação de processos de faturamento, mas exige mais esforço para configurar e analisar. O Cost Explorer é uma ferramenta interativa para visualização e análise de custos, ideal para explorar e entender os gastos de forma rápida e visual. Focado em análise histórica e previsão. 