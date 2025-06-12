---
sidebar_position: 6
---

# Amazon S3 Glacier

## O que é
Um serviço de armazenamento seguro, durável e de baixo custo para o arquivamento de dados e backup de longo prazo.

## Para que serve
Armazenar dados que são acessados com pouca frequência (uma ou duas vezes por ano) e que podem tolerar tempos de recuperação de minutos a horas, otimizando custos para arquivamento de longo prazo.

## Casos de uso
- Arquivamento de dados regulatórios e de conformidade
- Backup de longo prazo de dados críticos
- Armazenamento de arquivos de mídia (vídeos, imagens) que não são acessados frequentemente
- Preservação de dados para fins de auditoria ou pesquisa
- Substituição de fitas magnéticas para arquivamento de dados

## Principais pontos
- **Armazenamento de baixo custo:** Uma das opções de armazenamento mais baratas da AWS para arquivamento
- **Durabilidade:** Projetado para 99.999999999% de durabilidade
- **Classes de armazenamento:**
    - **S3 Glacier Instant Retrieval:** Para dados de arquivo que precisam de recuperação em milissegundos
    - **S3 Glacier Flexible Retrieval (anteriormente S3 Glacier):** Para dados de arquivo que podem ser recuperados em minutos a horas
    - **S3 Glacier Deep Archive:** Para dados de arquivo que podem ser recuperados em horas e são armazenados por 7 a 10 anos ou mais, a um custo ainda menor
- **Cofres (Vaults):** Os dados são armazenados em cofres, que são contêineres para arquivos
- **Bloqueio de cofre (Vault Lock):** Permite aplicar políticas de conformidade imutáveis a um cofre
- **Integração com S3 Lifecycle:** Permite mover automaticamente objetos do S3 para o Glacier com base em políticas de ciclo de vida

## Comparativo
- **Amazon S3 Glacier:** Ideal para arquivamento de longo prazo e backup de dados que são acessados com pouca frequência e podem tolerar tempos de recuperação mais longos. Oferece o menor custo de armazenamento.
- **Amazon S3 Standard:** Ideal para dados acessados frequentemente que exigem baixa latência e alto throughput. É mais caro que o Glacier, mas oferece acesso instantâneo aos dados. 