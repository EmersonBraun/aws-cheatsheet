---
sidebar_position: 2
---

# AWS OpsWorks

## O que é
Um serviço de gerenciamento de configuração que ajuda a configurar e operar aplicações usando Chef ou Puppet.

## Para que serve
Automatizar tarefas operacionais como configurações de software, instalações de pacotes, configurações de banco de dados e gerenciamento de servidores, tanto na AWS quanto on-premises.

## Casos de uso
- Automação da implantação e configuração de aplicações complexas.
- Gerenciamento do ciclo de vida de servidores e aplicações.
- Escalonamento automático de aplicações com base na carga.
- Implementação de práticas de DevOps para automação de infraestrutura.
- Gerenciamento de ambientes de desenvolvimento, teste e produção.

## Principais pontos
- **Baseado em Chef/Puppet:** Utiliza ferramentas populares de automação de configuração.
- **Modelagem de aplicações:** Permite modelar sua aplicação como um stack, incluindo camadas de aplicação, banco de dados e balanceamento de carga.
- **Automação de tarefas:** Automatiza a instalação de software, configuração de servidores e implantação de código.
- **Gerenciamento de instâncias:** Gerencia o ciclo de vida de instâncias EC2 e servidores on-premises.
- **Monitoramento:** Integra-se com Amazon CloudWatch para monitoramento de métricas.
- **Tipos de OpsWorks:**
    - **OpsWorks Stacks:** Permite modelar sua aplicação como um stack de camadas, com suporte a Chef Cookbooks.
    - **OpsWorks for Chef Automate:** Fornece um servidor Chef gerenciado pela AWS.
    - **OpsWorks for Puppet Enterprise:** Fornece um servidor Puppet gerenciado pela AWS.

## Comparativo com AWS CloudFormation
- **AWS OpsWorks:** Focado no gerenciamento de configuração e automação de tarefas operacionais para aplicações e servidores. É mais adequado para cenários onde você precisa de um controle mais granular sobre a configuração do software e o ciclo de vida da aplicação.
- **AWS CloudFormation:** Focado na infraestrutura como código, permitindo que você provisione e gerencie recursos AWS de forma declarativa. É mais adequado para provisionar a infraestrutura subjacente e garantir a consistência do ambiente. 