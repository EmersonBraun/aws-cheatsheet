---
sidebar_position: 8
---

# AWS Snowball

## O que é
Um serviço de transporte de dados na escala de petabytes que usa dispositivos físicos seguros (appliances) para transferir grandes quantidades de dados para dentro e para fora da AWS.

## Para que serve
Superar desafios de transferência de dados em larga escala onde a largura de banda da rede é limitada, cara ou demorada, ou para coletar e processar dados em ambientes de borda.

## Casos de uso
- Migração de grandes bancos de dados, arquivos de vídeo, bibliotecas de imagens ou backups para a AWS
- Transferência de dados de locais remotos ou com conectividade limitada
- Coleta de dados de sensores e dispositivos IoT em locais remotos
- Processamento de dados em ambientes de borda com conectividade limitada
- Transferência de dados para conformidade com requisitos regulatórios

## Principais pontos
- **Dispositivos físicos:** Appliances seguros e duráveis para transferência de dados
- **Criptografia:** Dados criptografados em trânsito e em repouso
- **Tipos de dispositivos:**
    - **Snowball:** Para transferências de dados de até 80 TB
    - **Snowball Edge:** Para transferências de dados e computação em ambientes de borda
    - **Snowmobile:** Para transferências de dados em escala exabyte
- **Integração:** Funciona com Amazon S3, Amazon EBS, Amazon Glacier e outros serviços AWS
- **Rastreamento:** Acompanhamento em tempo real do status da transferência
- **Segurança:** Dispositivos com proteção contra adulteração e criptografia de dados

## Comparativo
- **AWS Snowball:** Oferece uma solução física e segura para transferência de grandes volumes de dados, ideal para cenários com conectividade limitada ou custos de rede proibitivos. Reduz o tempo e o custo de transferência de dados em larga escala.
- **Transferência de dados via internet:** Pode ser impraticável para grandes volumes de dados devido a limitações de largura de banda, custos e tempo. Pode levar semanas ou meses para transferir petabytes de dados através da internet. 