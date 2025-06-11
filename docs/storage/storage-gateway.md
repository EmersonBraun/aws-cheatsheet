---
sidebar_position: 9
---

# AWS Storage Gateway

## O que é
Um serviço de armazenamento em nuvem híbrida que conecta um ambiente de software on-premises com o armazenamento em nuvem da AWS, fornecendo acesso local a armazenamento em nuvem praticamente ilimitado.

## Para que serve
Permitir que aplicações on-premises usem o armazenamento em nuvem da AWS para backup, arquivamento, recuperação de desastres e acesso a dados, sem a necessidade de migrar todos os dados para a nuvem.

## Casos de uso
- Mover backups para a nuvem (substituindo fitas magnéticas)
- Fornecer acesso local a dados na nuvem para aplicações on-premises
- Armazenar dados de aplicações on-premises na nuvem para fins de arquivamento
- Recuperação de desastres para dados on-premises
- Consolidação de armazenamento de arquivos em um único local na nuvem

## Principais pontos
- **Tipos de Gateway:**
    - **File Gateway:** Armazena arquivos como objetos S3 e fornece acesso via NFS e SMB
    - **Volume Gateway:** Armazena volumes de bloco na nuvem, com opções de volumes armazenados (todos os dados on-premises) e volumes em cache (dados acessados recentemente on-premises)
    - **Tape Gateway:** Substitui bibliotecas de fitas físicas, armazenando dados em fitas virtuais no S3 Glacier
- **Conectividade híbrida:** Conecta seu ambiente on-premises ao armazenamento da AWS
- **Cache local:** Otimiza o acesso a dados frequentemente acessados, armazenando-os em cache localmente
- **Criptografia:** Os dados são criptografados em trânsito e em repouso
- **Integração:** Integra-se com Amazon S3, S3 Glacier, EBS e AWS Backup

## Comparativo
- **AWS Storage Gateway:** Permite que você estenda seu armazenamento on-premises para a nuvem de forma transparente, aproveitando a escalabilidade, durabilidade e economia do armazenamento da AWS. Reduz a necessidade de adquirir e gerenciar hardware de armazenamento on-premises.
- **Armazenamento on-premises tradicional:** Exige investimento em hardware, gerenciamento manual e pode ser caro para escalar e manter. Não oferece a mesma flexibilidade e economia do armazenamento em nuvem. 