---
sidebar_position: 2
---

# Amazon Elastic Block Store (EBS)

## O que é
Um serviço de armazenamento em blocos de alto desempenho e escalável, projetado para ser usado com instâncias Amazon EC2.

## Para que serve
Fornecer volumes de armazenamento persistentes para suas instâncias EC2, que podem ser usados como discos rígidos virtuais para sistemas operacionais, bancos de dados e aplicações.

## Casos de uso
- Armazenamento de volumes de boot para instâncias EC2
- Hospedagem de bancos de dados relacionais e NoSQL que exigem baixa latência e alto IOPS
- Armazenamento de dados para aplicações que exigem acesso em nível de bloco
- Criação de snapshots para backup e recuperação de desastres
- Anexar volumes a instâncias EC2 para expandir o armazenamento

## Principais pontos
- **Armazenamento em bloco:** Os volumes EBS se comportam como discos rígidos brutos, permitindo que você formate e monte sistemas de arquivos
- **Persistência:** Os dados em um volume EBS persistem independentemente da vida útil da instância EC2
- **Tipos de volume:** Oferece vários tipos de volume (SSD de uso geral, SSD de IOPS provisionadas, HDD otimizado para throughput, HDD Cold) para diferentes necessidades de desempenho e custo
- **Snapshots:** Crie snapshots de seus volumes EBS para backup e recuperação. Os snapshots são armazenados no Amazon S3
- **Criptografia:** Suporta criptografia de volumes EBS e snapshots
- **Anexável a uma única instância:** Um volume EBS pode ser anexado a apenas uma instância EC2 por vez
- **Disponibilidade:** Os volumes EBS são replicados dentro de uma única Zona de Disponibilidade para alta disponibilidade

## Comparativo
- **Amazon EBS:** Armazenamento em bloco, ideal para dados que exigem acesso em nível de bloco e baixa latência, como sistemas operacionais e bancos de dados. Anexado a uma única instância EC2.
- **Amazon S3:** Armazenamento de objetos, ideal para dados não estruturados, como arquivos, imagens, vídeos e backups. Acessado via API HTTP/HTTPS e não é um sistema de arquivos tradicional. 