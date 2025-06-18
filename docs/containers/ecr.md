---
sidebar_position: 2
---

# Amazon Elastic Container Registry (ECR)

## O que é
Um serviço de registro de imagens de contêineres totalmente gerenciado, seguro, escalável e confiável.

## Para que serve
Armazenar, gerenciar e implantar imagens Docker e Open Container Initiative (OCI) de forma segura e eficiente.

## Casos de uso
- Armazenamento centralizado de imagens Docker para aplicações em contêineres.
- Distribuição de imagens de contêineres para Amazon ECS, Amazon EKS, AWS Fargate e outras plataformas.
- Gerenciamento de versões de imagens e controle de acesso.
- Integração com pipelines de CI/CD para automação de implantações.

## Principais pontos
- **Totalmente gerenciado:** A AWS cuida da infraestrutura subjacente, escalabilidade e disponibilidade.
- **Segurança:** Integração com AWS IAM para controle de acesso granular, criptografia de imagens em repouso e em trânsito.
- **Escalabilidade:** Escala automaticamente para lidar com grandes volumes de imagens e requisições.
- **Integração:** Integra-se nativamente com Amazon ECS, Amazon EKS, AWS Fargate, Docker CLI e outras ferramentas de contêineres.
- **Vulnerabilidade Scanning:** Pode escanear imagens em busca de vulnerabilidades de segurança.

## Comparativo
- **Amazon ECR vs. Docker Hub (público):** O ECR é um registro privado e gerenciado pela AWS, ideal para armazenar imagens de contêineres de forma segura para uso interno em suas aplicações AWS. Oferece integração nativa com o ecossistema AWS e recursos de segurança avançados. O Docker Hub é um registro público de imagens Docker, ideal para compartilhar imagens de código aberto ou para uso em ambientes de desenvolvimento. Embora possa ser usado para imagens privadas, o ECR oferece uma integração mais profunda e recursos de segurança específicos para a AWS. 