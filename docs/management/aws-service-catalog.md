---
sidebar_position: 1
---

# AWS Service Catalog

## O que é
Um serviço que permite às organizações criar e gerenciar catálogos de serviços de TI aprovados para uso na AWS.

## Para que serve
Capacitar os usuários a provisionar os serviços de TI de que precisam, de forma autônoma e em conformidade com os padrões da organização, sem a necessidade de intervenção manual da equipe de TI.

## Casos de uso
- Criação de um catálogo de produtos de TI aprovados (ex: instâncias EC2 pré-configuradas, bancos de dados, ambientes de desenvolvimento).
- Habilitar o autoatendimento para desenvolvedores e usuários de negócios.
- Garantir a conformidade com padrões de segurança e governança.
- Padronizar a implantação de recursos na AWS.
- Gerenciar o ciclo de vida dos produtos de TI.

## Principais pontos
- **Catálogo de produtos:** Permite definir e gerenciar produtos (serviços de TI) que os usuários podem provisionar.
- **Controle de acesso:** Integra-se com AWS IAM para controlar quem pode provisionar quais produtos.
- **Governança:** Ajuda a aplicar políticas de segurança, conformidade e custos.
- **Automação:** Automatiza o provisionamento de recursos usando AWS CloudFormation.
- **Versões:** Permite gerenciar diferentes versões de um produto.
- **Integração:** Integra-se com AWS Organizations, AWS CloudFormation, AWS IAM e outras ferramentas.

## Comparativo com provisionamento manual de recursos
- **AWS Service Catalog:** Automatiza e padroniza o provisionamento de recursos, reduzindo erros, garantindo a conformidade e acelerando o tempo de entrega de serviços de TI. Permite que as equipes de TI se concentrem em tarefas de maior valor, enquanto os usuários podem provisionar recursos de forma autônoma.
- **Provisionamento manual de recursos:** Demorado, propenso a erros e pode levar a inconsistências e violações de conformidade. Exige que os administradores provisionem cada recurso manualmente, o que não escala bem em ambientes grandes. 