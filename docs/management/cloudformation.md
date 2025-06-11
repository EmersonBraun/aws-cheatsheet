---
sidebar_position: 2
---

# AWS CloudFormation

## O que é
Um serviço que ajuda a modelar e configurar seus recursos da AWS e de terceiros, tratando a infraestrutura como código (IaC).

## Para que serve
Automatizar o provisionamento e o gerenciamento de recursos da AWS, permitindo que você crie, atualize e exclua um conjunto de recursos relacionados como uma única unidade (pilha).

## Casos de uso
- Provisionamento de ambientes completos (desenvolvimento, teste, produção)
- Automação da criação e atualização de infraestrutura
- Gerenciamento de recursos de forma consistente e repetível
- Controle de versão da infraestrutura
- Recuperação de desastres (recriação rápida de ambientes)

## Principais pontos
- **Infraestrutura como Código (IaC):** Defina sua infraestrutura em arquivos de texto (JSON ou YAML)
- **Pilhas:** Gerencie um conjunto de recursos relacionados como uma única unidade
- **Templates:** Use templates para descrever os recursos que você deseja provisionar
- **Rollback automático:** Em caso de falha na criação ou atualização da pilha, o CloudFormation reverte automaticamente para o estado anterior
- **Controle de versão:** Gerencie as versões dos seus templates de infraestrutura
- **Integração:** Integra-se com quase todos os serviços AWS

## Comparativo
- **AWS CloudFormation:** Permite automatizar o provisionamento de infraestrutura, garantindo consistência, repetibilidade e reduzindo erros manuais. Ideal para ambientes complexos e para implementar práticas de DevOps.
- **Provisionamento manual:** Demorado, propenso a erros e difícil de escalar ou replicar. Não oferece controle de versão da infraestrutura. 