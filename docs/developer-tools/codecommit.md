---
sidebar_position: 5
---

# AWS CodeCommit

## O que é
Um serviço de controle de versão totalmente gerenciado e seguro que hospeda repositórios Git privados.

## Para que serve
Armazenar e gerenciar com segurança o código-fonte, documentos e outros ativos de desenvolvimento, facilitando a colaboração entre equipes.

## Casos de uso
- Hospedagem de repositórios de código-fonte para aplicações e serviços
- Colaboração em projetos de desenvolvimento de software
- Controle de versão de documentos e configurações
- Integração com pipelines de CI/CD (CodePipeline, CodeBuild, CodeDeploy)
- Armazenamento seguro de ativos de desenvolvimento

## Principais pontos
- **Totalmente gerenciado:** Não há servidores para provisionar ou gerenciar
- **Compatível com Git:** Usa o Git padrão, permitindo que os desenvolvedores usem suas ferramentas Git existentes
- **Segurança:** Criptografia de dados em trânsito e em repouso, integração com AWS IAM para controle de acesso granular
- **Alta disponibilidade:** Repositórios são armazenados em várias Zonas de Disponibilidade
- **Escalabilidade:** Escala automaticamente para atender às necessidades de armazenamento e acesso
- **Integração:** Integra-se com outros serviços AWS e ferramentas de desenvolvimento

## Comparativo com outros serviços de controle de versão
- **AWS CodeCommit:** Oferece um serviço de controle de versão totalmente gerenciado e seguro, integrado com o ecossistema AWS. Ideal para equipes que já usam outros serviços AWS e precisam de um controle de versão privado e seguro.
- **Outros serviços de controle de versão (ex: GitHub, GitLab):** Podem oferecer recursos adicionais como gerenciamento de projetos, wikis e integração com ferramentas de terceiros, mas podem exigir configuração adicional para integração com serviços AWS. 