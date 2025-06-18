---
sidebar_position: 1
---

# Amazon Lookout for Metrics

## O que é
Um serviço de machine learning que detecta automaticamente anomalias (outliers) em seus dados de negócios e operacionais, e ajuda a determinar suas causas-raiz.

## Para que serve
Monitorar continuamente o desempenho de negócios e operacionais, identificar variações incomuns em métricas importantes e alertar sobre problemas para que você possa remediá-los rapidamente.

## Casos de uso
- Monitoramento de métricas de vendas e receita para detectar quedas ou picos inesperados.
- Detecção de anomalias em taxas de conversão de websites ou aplicações.
- Monitoramento de métricas de desempenho de aplicações (ex: latência, erros) para identificar problemas.
- Análise de dados de marketing para detectar campanhas com desempenho incomum.
- Identificação de problemas em cadeias de suprimentos ou operações.

## Principais pontos
- **Detecção automática de anomalias:** Utiliza machine learning para identificar padrões incomuns nos dados.
- **Causa-raiz:** Ajuda a determinar a causa-raiz das anomalias, fornecendo insights acionáveis.
- **Totalmente gerenciado:** Não exige experiência em machine learning para usar o serviço.
- **Fontes de dados:** Conecta-se a várias fontes de dados, incluindo Amazon S3, Redshift, RDS, e SaaS (Salesforce, Google Analytics).
- **Alertas:** Envia alertas para canais como Amazon SNS, AWS Lambda ou PagerDuty.
- **Feedback:** Permite fornecer feedback sobre as anomalias detectadas para melhorar a precisão do modelo.

## Comparativo com monitoramento tradicional baseado em limites
- **Amazon Lookout for Metrics:** Utiliza machine learning para detectar anomalias complexas e sutis que podem ser perdidas por limites estáticos. Adapta-se a padrões de dados em constante mudança e reduz falsos positivos, fornecendo insights mais precisos e acionáveis.
- **Monitoramento tradicional baseado em limites:** Depende de limites predefinidos que podem ser difíceis de manter e ajustar, especialmente para métricas com padrões sazonais ou tendências. Pode gerar muitos falsos positivos ou perder anomalias importantes que não ultrapassam os limites. 