---
sidebar_position: 3
---

# Amazon Elastic File System (EFS)

## O que é
Um serviço de armazenamento de arquivos simples, escalável e elástico para uso com serviços AWS em nuvem e recursos locais.

## Para que serve
Fornecer armazenamento de arquivos compartilhado e persistente para várias instâncias EC2, contêineres e funções Lambda, permitindo que várias aplicações acessem os mesmos dados simultaneamente.

## Casos de uso
- Diretórios pessoais e compartilhamentos de arquivos para usuários
- Ambientes de desenvolvimento e teste compartilhados
- Aplicações web e sistemas de gerenciamento de conteúdo (CMS)
- Workloads de análise de dados e machine learning
- Armazenamento persistente para contêineres (Docker, Kubernetes)
- Lift-and-shift de aplicações legadas baseadas em arquivos

## Principais pontos
- **Armazenamento de arquivos:** Compatível com o protocolo NFS (Network File System)
- **Escalabilidade elástica:** Escala automaticamente para petabytes de dados, sem necessidade de provisionamento
- **Acesso compartilhado:** Múltiplas instâncias EC2 podem acessar o mesmo sistema de arquivos EFS simultaneamente
- **Alta disponibilidade e durabilidade:** Os dados são armazenados de forma redundante em várias Zonas de Disponibilidade
- **Pagamento por uso:** Você paga apenas pelo armazenamento que usa
- **Classes de armazenamento:** Oferece classes de armazenamento Standard e Infrequent Access (IA) para otimização de custos
- **Integração:** Integra-se com Amazon EC2, AWS Lambda, Amazon ECS, Amazon EKS e outros serviços AWS

## Comparativo
- **Amazon EFS:** Armazenamento de arquivos compartilhado, ideal para workloads que exigem acesso simultâneo a um sistema de arquivos por várias instâncias ou serviços. É um sistema de arquivos tradicional.
- **Amazon EBS:** Armazenamento em bloco, ideal para volumes de boot e dados de bancos de dados que exigem baixa latência e alto IOPS. Anexado a uma única instância EC2.
- **Amazon S3:** Armazenamento de objetos, ideal para dados não estruturados, como arquivos, imagens, vídeos e backups. Acessado via API HTTP/HTTPS e não é um sistema de arquivos tradicional. 