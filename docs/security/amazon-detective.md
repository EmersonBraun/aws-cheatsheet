---
sidebar_position: 2
---

# Amazon Detective

## O que é
Um serviço que coleta automaticamente dados de log de seus recursos AWS e usa machine learning, análise de gráficos e estatísticas para construir um conjunto de dados unificado e interativo, facilitando a análise, investigação e identificação da causa raiz de descobertas de segurança ou atividades suspeitas.

## Para que serve
Simplificar e acelerar as investigações de segurança, fornecendo uma visão consolidada e contextualizada de atividades suspeitas, como tentativas de acesso não autorizado, uso de credenciais comprometidas ou comportamento incomum de instâncias.

## Casos de uso
- Investigação de descobertas de segurança do AWS Security Hub ou Amazon GuardDuty.
- Análise de atividades de usuários e funções do IAM para identificar comportamentos anômalos.
- Rastreamento de atividades de rede e chamadas de API para entender a sequência de eventos de um incidente.
- Identificação da causa raiz de incidentes de segurança.
- Melhoria da postura de segurança através da compreensão de padrões de ataque.

## Principais pontos
- **Gráfico de comportamento:** Constrói um gráfico de comportamento que resume as interações entre usuários, funções, instâncias e recursos ao longo do tempo.
- **Coleta automática de dados:** Coleta dados de log de serviços como AWS CloudTrail, Amazon VPC Flow Logs e Amazon GuardDuty.
- **Machine Learning:** Utiliza ML para identificar padrões de comportamento normais e anômalos.
- **Visualizações interativas:** Fornece visualizações interativas para explorar as relações entre entidades e eventos.
- **Totalmente gerenciado:** Não há infraestrutura para provisionar ou gerenciar.
- **Integração:** Integra-se com AWS Security Hub e Amazon GuardDuty.

## Comparativo com análise manual de logs
- **Amazon Detective:** Automatiza a coleta e a correlação de dados de log de várias fontes, construindo um gráfico de comportamento que facilita a investigação de segurança. Reduz o tempo e o esforço necessários para analisar grandes volumes de logs e identificar a causa raiz de incidentes.
- **Análise manual de logs:** Demorada, complexa e exige conhecimento especializado para correlacionar eventos de diferentes fontes. Pode ser difícil identificar padrões e relações em grandes volumes de dados, o que pode atrasar a resposta a incidentes de segurança. 