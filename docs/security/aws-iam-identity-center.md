---
sidebar_position: 3
---

# AWS IAM Identity Center

## O que é
Um serviço de nuvem que facilita o gerenciamento centralizado do acesso de usuários a várias contas e aplicações AWS, bem como a aplicações de terceiros.

## Para que serve
Simplificar o gerenciamento de identidades e acessos em um ambiente AWS multi-contas, permitindo que os usuários acessem todos os seus recursos AWS com um único conjunto de credenciais.

## Casos de uso
- Gerenciamento centralizado de usuários e grupos para acesso a todas as contas AWS em uma organização.
- Habilitar o Single Sign-On (SSO) para aplicações AWS (ex: Console de Gerenciamento AWS, Amazon S3) e aplicações de terceiros (ex: Salesforce, Microsoft 365).
- Provisionamento automático de usuários e grupos de diretórios externos (ex: Active Directory, Okta).
- Atribuir permissões granulares a usuários e grupos em várias contas AWS.
- Simplificar a experiência de login para usuários da força de trabalho.

## Principais pontos
- **Gerenciamento centralizado:** Crie ou conecte suas identidades de força de trabalho e gerencie o acesso centralmente.
- **Single Sign-On (SSO):** Permite que os usuários façam login uma vez e acessem várias contas e aplicações.
- **Integração com diretórios:** Sincroniza usuários e grupos de diretórios externos como AWS Directory Service for Microsoft Active Directory, Okta Universal Directory, Azure AD, etc.
- **Permissões granulares:** Atribua permissões baseadas em funções a usuários e grupos em contas AWS.
- **Aplicações AWS e de terceiros:** Suporta acesso a uma ampla gama de aplicações.
- **Totalmente gerenciado:** A AWS cuida da infraestrutura subjacente do serviço de identidade.

## Comparativo com AWS IAM (Identity and Access Management)
- **AWS IAM Identity Center:** Focado no gerenciamento de identidades da força de trabalho e no SSO para acesso a múltiplas contas e aplicações AWS. Simplifica a experiência do usuário e o gerenciamento de acesso em ambientes multi-contas.
- **AWS IAM:** Focado no gerenciamento de permissões para entidades (usuários, grupos, funções) dentro de uma única conta AWS. É a base para o controle de acesso na AWS, mas não oferece SSO nativo para múltiplas contas ou aplicações de terceiros. 