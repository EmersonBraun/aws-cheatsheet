---
sidebar_position: 5
---

# Amazon Keyspaces (para Apache Cassandra)

## O que é
Um serviço de banco de dados de colunas largas totalmente gerenciado e compatível com Apache Cassandra.

## Para que serve
Facilitar a migração, a execução e a escalabilidade de workloads do Cassandra na AWS Cloud, sem a necessidade de gerenciar servidores.

## Casos de uso
- Aplicações que exigem baixa latência e alta taxa de transferência para dados de séries temporais
- Armazenamento de dados de IoT (Internet das Coisas)
- Perfis de usuário e dados de personalização
- Aplicações de jogos e mídias sociais
- Aplicações que já usam Apache Cassandra e buscam uma solução gerenciada

## Principais pontos
- **Compatibilidade com Cassandra:** Permite usar o mesmo código, drivers e ferramentas que você já usa com o Apache Cassandra
- **Totalmente gerenciado e sem servidor:** A AWS cuida do provisionamento, patching, backups, recuperação e escalabilidade
- **Escalabilidade:** Escala automaticamente para lidar com o volume de dados e requisições
- **Alta disponibilidade:** Armazenamento distribuído e tolerante a falhas
- **Segurança:** Integração com AWS IAM e criptografia de dados
- **Pagamento por uso:** Você paga apenas pelos recursos de leitura e gravação que seus aplicativos consomem

## Comparativo com Apache Cassandra auto-gerenciado
- **Amazon Keyspaces:** Elimina a complexidade de gerenciar um cluster Apache Cassandra, incluindo instalação, configuração, backups, patching e escalabilidade. Ideal para quem busca uma solução gerenciada e de alta performance
- **Apache Cassandra auto-gerenciado:** Oferece controle total sobre o ambiente, mas exige que o usuário cuide de todas as tarefas operacionais e de gerenciamento. Pode ser mais complexo de escalar e manter em produção 