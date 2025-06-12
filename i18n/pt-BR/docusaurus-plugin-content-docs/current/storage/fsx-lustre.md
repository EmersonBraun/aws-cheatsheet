---
sidebar_position: 4
---

# Amazon FSx for Lustre

## O que é
Um serviço de armazenamento de arquivos totalmente gerenciado que facilita o lançamento, a execução e a escalabilidade de sistemas de arquivos Lustre de alto desempenho.

## Para que serve
Acelerar workloads de computação intensiva, como machine learning, computação de alto desempenho (HPC), processamento de vídeo e modelagem financeira, que exigem armazenamento de arquivos de alta performance.

## Casos de uso
- Workloads de machine learning e deep learning
- Simulações e modelagem científica
- Processamento de dados de vídeo e áudio em larga escala
- Análise de big data e computação de alto desempenho
- Desenvolvimento de software e testes que exigem acesso rápido a grandes conjuntos de dados

## Principais pontos
- **Sistema de arquivos Lustre:** Baseado no popular sistema de arquivos Lustre, otimizado para performance
- **Alto desempenho:** Oferece throughput e IOPS muito altos, com latência de milissegundos
- **Integração com S3:** Pode ser vinculado a um bucket S3, permitindo que você processe dados no S3 com o desempenho do Lustre
- **Totalmente gerenciado:** A AWS cuida do provisionamento, patching e escalabilidade do sistema de arquivos
- **Tipos de armazenamento:** Suporta armazenamento persistente (para dados de longo prazo) e scratch (para dados temporários)
- **Custo-benefício:** Oferece uma solução de armazenamento de alto desempenho a um custo eficaz

## Comparativo
- **Amazon FSx for Lustre:** Projetado para workloads de computação intensiva que exigem o mais alto desempenho e throughput, como HPC e machine learning. É otimizado para acesso a grandes conjuntos de dados com alta paralelização.
- **Amazon EFS:** Um sistema de arquivos de uso geral, escalável e elástico, adequado para uma ampla gama de workloads que exigem acesso compartilhado a um sistema de arquivos. Oferece bom desempenho, mas não é otimizado para as mesmas cargas de trabalho extremas que o FSx for Lustre. 