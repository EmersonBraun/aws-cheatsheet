---
sidebar_position: 2
---

# AWS DataSync

## O que é
Um serviço de transferência de dados online que simplifica, automatiza e acelera a movimentação de dados entre sistemas de armazenamento on-premises e serviços de armazenamento da AWS.

## Para que serve
Transferir grandes volumes de dados de forma rápida e segura para a AWS para migração, arquivamento, replicação ou processamento em nuvem.

## Casos de uso
- Migração de dados de sistemas de arquivos on-premises (NFS, SMB) para Amazon S3, Amazon EFS ou Amazon FSx
- Arquivamento de dados frios para armazenamento de baixo custo na AWS Glacier
- Replicação de dados para recuperação de desastres
- Transferência de dados para processamento em serviços de análise ou machine learning na AWS
- Consolidação de dados de vários locais para um data lake centralizado na AWS

## Principais pontos
- **Transferência acelerada:** Otimiza a transferência de dados usando um protocolo proprietário
- **Totalmente gerenciado:** A AWS cuida da infraestrutura de transferência de dados
- **Agente DataSync:** Um agente de software que você implanta em seu ambiente on-premises para acessar seus dados
- **Integração:** Integra-se com Amazon S3, Amazon EFS, Amazon FSx, e outros serviços AWS
- **Verificação de integridade:** Garante a integridade dos dados durante a transferência
- **Agendamento:** Permite agendar tarefas de transferência de dados

## Comparativo
- **AWS DataSync:** Oferece uma solução otimizada, segura e gerenciada para transferir grandes volumes de dados, superando as limitações de largura de banda e confiabilidade de métodos manuais. Ideal para migrações em larga escala e transferências contínuas.
- **Cópia manual de dados (ex: rsync, SCP):** Adequada para volumes menores de dados ou para transferências pontuais, mas pode ser lenta, propensa a erros e não oferece os mesmos recursos de otimização e gerenciamento que o DataSync. 