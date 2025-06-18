---
sidebar_position: 1
---

# Amazon S3 Glacier Deep Archive

## O que é
Uma classe de armazenamento do Amazon S3 projetada para arquivamento de longo prazo com o menor custo de armazenamento na AWS.

## Para que serve
Armazenar dados raramente acessados que precisam ser mantidos por longos períodos (7-10 anos ou mais) para fins de conformidade ou arquivamento.

## Casos de uso
- Arquivamento de dados de conformidade
- Backup de longo prazo
- Preservação de mídia digital
- Armazenamento de dados científicos
- Retenção de registros médicos
- Arquivos históricos

## Principais pontos
- **Custo mínimo:** Menor preço de armazenamento na AWS
- **Durabilidade:** 99,999999999% (11 noves)
- **Tempo de recuperação:** Até 12 horas
- **Período mínimo:** 180 dias
- **Criptografia:** Automática em repouso
- **Integração:** Compatível com políticas de ciclo de vida S3

## Comparativo com outras classes de armazenamento
- **S3 Glacier Deep Archive:** Otimizado para dados raramente acessados com menor custo e maior tempo de recuperação.
- **Outras classes S3:** Oferecem tempos de recuperação mais rápidos mas com custos mais elevados, adequadas para dados acessados com mais frequência. 