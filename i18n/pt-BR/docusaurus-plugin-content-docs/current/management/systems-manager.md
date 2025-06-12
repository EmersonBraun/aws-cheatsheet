---
sidebar_position: 8
---

# AWS Systems Manager

## O que é
Um conjunto de recursos que ajuda a visualizar, gerenciar e operar nós (instâncias EC2, servidores on-premises, VMs) em escala em ambientes AWS, on-premises e multicloud.

## Para que serve
Automatizar tarefas operacionais, garantir a conformidade e a segurança, e simplificar o gerenciamento de infraestrutura.

## Casos de uso
- Automação de tarefas operacionais (ex: patching, execução de scripts, atualização de software)
- Gerenciamento de inventário de servidores e software
- Acesso remoto seguro a instâncias sem a necessidade de SSH ou RDP (Session Manager)
- Gerenciamento de patches e conformidade de segurança
- Armazenamento e gerenciamento de parâmetros de configuração (Parameter Store)
- Resolução de problemas e diagnóstico de instâncias

## Principais pontos
- **Automação:** Automatiza tarefas comuns de gerenciamento de servidores
- **Gerenciamento de inventário:** Coleta dados sobre seus servidores e software instalado
- **Session Manager:** Permite acesso seguro e auditável a instâncias sem abrir portas de entrada
- **Patch Manager:** Automatiza o processo de aplicação de patches de segurança
- **Parameter Store:** Armazena e gerencia dados de configuração e segredos
- **Run Command:** Executa comandos em várias instâncias simultaneamente
- **Totalmente gerenciado:** A AWS cuida da infraestrutura do Systems Manager

## Comparativo
- **AWS Systems Manager:** Oferece uma solução gerenciada e integrada para automação e gerenciamento de operações em ambientes AWS e híbridos. Reduz a complexidade de configurar e manter ferramentas de gerenciamento de configuração.
- **Ferramentas de gerenciamento de configuração (auto-gerenciadas):** Oferecem maior flexibilidade e personalização, mas exigem que o usuário gerencie a infraestrutura da ferramenta e o desenvolvimento de playbooks/receitas. Adequado para ambientes complexos ou multi-cloud que exigem um alto grau de personalização. 