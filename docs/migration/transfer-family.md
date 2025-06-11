---
sidebar_position: 4
---

# AWS Transfer Family

## O que é
Um serviço de transferência de arquivos totalmente gerenciado que permite transferir arquivos para dentro e para fora dos serviços de armazenamento da AWS usando SFTP (SSH File Transfer Protocol), FTPS (File Transfer Protocol over SSL/TLS) e FTP (File Transfer Protocol).

## Para que serve
Modernizar e simplificar as transferências de arquivos gerenciadas, permitindo que você use seus clientes de FTP existentes para interagir com o armazenamento da AWS (Amazon S3 e Amazon EFS).

## Casos de uso
- Migração de arquivos de sistemas legados para a AWS
- Compartilhamento seguro de arquivos com parceiros e clientes
- Integração com fluxos de trabalho existentes que usam FTP
- Backup e recuperação de arquivos
- Distribuição de conteúdo e atualizações de software

## Principais pontos
- **Protocolos suportados:** SFTP, FTPS e FTP
- **Integração com armazenamento AWS:** Amazon S3 e Amazon EFS
- **Autenticação:** Integração com IAM, Active Directory e provedores de identidade personalizados
- **Totalmente gerenciado:** A AWS cuida da infraestrutura de transferência de arquivos
- **Escalável:** Suporta milhares de usuários e transferências simultâneas
- **Segurança:** Criptografia em trânsito e em repouso

## Comparativo
- **AWS Transfer Family:** Oferece uma solução gerenciada e moderna para transferência de arquivos, mantendo a compatibilidade com protocolos tradicionais. Ideal para organizações que precisam modernizar suas transferências de arquivos sem alterar seus fluxos de trabalho existentes.
- **Servidores FTP auto-gerenciados:** Exigem manutenção de infraestrutura, configuração de segurança e gerenciamento de usuários. Podem ser mais flexíveis para casos de uso muito específicos, mas requerem mais esforço operacional. 