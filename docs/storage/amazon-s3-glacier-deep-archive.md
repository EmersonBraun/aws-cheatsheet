---
sidebar_position: 1
---

# Amazon S3 Glacier Deep Archive

## O que é
Uma classe de armazenamento do Amazon S3 projetada para arquivamento de dados de longo prazo e de custo mais baixo, com tempos de recuperação de horas.

## Para que serve
Armazenar dados que são acessados raramente (uma ou duas vezes por ano, ou menos) e que podem tolerar um tempo de recuperação de algumas horas, oferecendo o menor custo de armazenamento na AWS.

## Casos de uso
- Arquivamento de dados regulatórios e de conformidade que precisam ser retidos por anos ou décadas.
- Backup de dados de longo prazo para recuperação de desastres.
- Armazenamento de arquivos de mídia (vídeos, áudios) que não são acessados com frequência.
- Preservação de dados históricos para fins de auditoria ou análise futura.
- Substituição de fitas magnéticas e outras soluções de arquivamento on-premises.

## Principais pontos
- **Custo mais baixo:** Oferece o menor custo de armazenamento por GB na AWS.
- **Durabilidade:** Projetado para 99.999999999% (11 noves) de durabilidade dos objetos.
- **Tempos de recuperação:** Recuperação padrão em 12 horas, recuperação em massa em 48 horas.
- **Segurança:** Criptografia de dados em repouso e em trânsito.
- **Integração:** Acessível via API do S3, S3 Lifecycle policies e S3 Batch Operations.

## Comparativo com outras classes de armazenamento S3 Glacier
- **Amazon S3 Glacier Deep Archive:** Ideal para dados que são acessados com pouca frequência (uma ou duas vezes por ano, ou menos) e que podem tolerar tempos de recuperação de horas. Oferece o menor custo.
- **Amazon S3 Glacier Flexible Retrieval (anteriormente S3 Glacier):** Para dados que são acessados com menos frequência (uma vez por trimestre ou ano) e que podem tolerar tempos de recuperação de minutos a horas. Oferece opções de recuperação mais rápidas e flexíveis do que o Deep Archive.
- **Amazon S3 Glacier Instant Retrieval:** Para dados que são acessados uma vez por trimestre e que exigem recuperação em milissegundos. Oferece o menor custo para acesso instantâneo de dados de arquivo. 