---
sidebar_position: 2
---

# AWS EC2 Image Builder

## O que é
Um serviço totalmente gerenciado que simplifica a criação, o teste e a implantação de Amazon Machine Images (AMIs) seguras e personalizadas e imagens de contêiner.

## Para que serve
Automatizar o processo de construção de imagens de servidor e contêiner, garantindo que elas estejam atualizadas, seguras e em conformidade com os padrões da sua organização.

## Casos de uso
- Criação de AMIs personalizadas com software pré-instalado e configurações de segurança
- Manutenção de imagens atualizadas com os patches de segurança mais recentes
- Teste automatizado de imagens para garantir a funcionalidade e a conformidade
- Distribuição de imagens para diferentes regiões ou contas AWS
- Construção de imagens de contêiner para uso com Amazon ECS, EKS ou Fargate

## Principais pontos
- **Totalmente gerenciado:** A AWS cuida da infraestrutura subjacente para a construção de imagens
- **Automação:** Automatiza o ciclo de vida de criação, teste e distribuição de imagens
- **Segurança:** Ajuda a garantir que as imagens estejam em conformidade com os padrões de segurança
- **Customização:** Permite personalizar imagens com seus próprios scripts e componentes
- **Integração:** Integra-se com AWS Organizations, AWS Systems Manager, Amazon S3 e outros serviços
- **Testes:** Inclui testes fornecidos pela AWS e permite adicionar seus próprios testes para validação

## Comparativo com construção manual de AMIs
- **AWS EC2 Image Builder:** Automatiza e padroniza o processo de construção de imagens, reduzindo o esforço manual, os erros e garantindo a consistência e a segurança das imagens em escala. Ideal para ambientes com muitas imagens ou requisitos de atualização frequentes.
- **Construção manual de AMIs:** Demorada, propensa a erros e difícil de escalar. Exige que os administradores gerenciem o processo de criação, atualização e teste de imagens manualmente, o que pode levar a inconsistências e vulnerabilidades. 