---
sidebar_position: 1
---

# AWS CodeBuild

## O que é
Um serviço de integração contínua totalmente gerenciado que compila o código-fonte, executa testes e produz pacotes de software prontos para implantação.

## Para que serve
Automatizar o processo de construção de software, eliminando a necessidade de provisionar, gerenciar e escalar seus próprios servidores de construção.

## Casos de uso
- Compilação de código-fonte e execução de testes unitários
- Geração de artefatos de implantação (ex: arquivos JAR, WAR, Docker images)
- Integração com pipelines de CI/CD (Continuous Integration/Continuous Delivery)
- Execução de testes de integração e testes de segurança
- Construção de aplicações serverless e em contêineres

## Principais pontos
- **Totalmente gerenciado:** A AWS cuida da infraestrutura de construção, escalabilidade e disponibilidade
- **Ambientes de construção pré-configurados:** Suporta várias linguagens de programação e frameworks
- **Escalabilidade:** Escala automaticamente para lidar com o volume de construções
- **Pagamento por uso:** Você paga apenas pelo tempo de computação usado para suas construções
- **Integração:** Integra-se com AWS CodePipeline, AWS CodeCommit, Amazon S3 e outros serviços AWS
- **Buildspecs:** Permite definir as etapas de construção em um arquivo `buildspec.yml`

## Comparativo com Jenkins (auto-gerenciado)
- **AWS CodeBuild:** Um serviço gerenciado que elimina a sobrecarga operacional de manter um servidor de construção. Ideal para quem busca uma solução de CI sem servidor e totalmente gerenciada
- **Jenkins (auto-gerenciado):** Uma ferramenta de CI/CD de código aberto que oferece grande flexibilidade e personalização, mas exige que o usuário provisione, configure e mantenha seus próprios servidores Jenkins. Pode ser mais complexo de escalar e gerenciar em grande escala 