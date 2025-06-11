---
sidebar_position: 7
---

# AWS Organizations

## O que é
Um serviço de gerenciamento de contas que permite consolidar várias contas AWS em uma única organização que você cria e gerencia centralmente.

## Para que serve
Simplificar o gerenciamento de ambientes AWS complexos com várias contas, permitindo a aplicação de políticas de forma centralizada, automação da criação de contas e gerenciamento de faturamento consolidado.

## Casos de uso
- Gerenciamento centralizado de várias contas AWS
- Aplicação de políticas de segurança e conformidade em todas as contas
- Automação da criação de novas contas para diferentes equipes ou projetos
- Faturamento consolidado para todas as contas da organização
- Compartilhamento de recursos entre contas

## Principais pontos
- **Conta mestre:** Uma conta central para gerenciar a organização
- **Unidades Organizacionais (OUs):** Permite agrupar contas em hierarquias para aplicar políticas de forma granular
- **Service Control Policies (SCPs):** Permitem controlar as permissões máximas disponíveis para contas em uma OU
- **Faturamento consolidado:** Agrega o faturamento de todas as contas em uma única fatura
- **Integração:** Integra-se com outros serviços AWS para gerenciamento e segurança

## Comparativo
- **AWS Organizations:** Simplifica o gerenciamento, a segurança e o faturamento de ambientes AWS com várias contas, permitindo uma governança centralizada e automação. Essencial para empresas com uma pegada significativa na AWS.
- **Gerenciamento de contas individuais:** Cada conta é gerenciada de forma independente, o que pode ser complexo, propenso a erros e difícil de escalar em ambientes com muitas contas. 