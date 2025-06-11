---
sidebar_position: 5
---

# Amazon FSx for Windows File Server

## O que é
Um serviço de armazenamento de arquivos totalmente gerenciado que fornece compartilhamentos de arquivos Microsoft Windows nativos, com suporte para o protocolo SMB (Server Message Block).

## Para que serve
Facilitar a migração de aplicações e workloads baseadas em Windows para a AWS, fornecendo um armazenamento de arquivos compatível com Windows que é altamente disponível, durável e escalável.

## Casos de uso
- Migração de servidores de arquivos Windows on-premises para a AWS
- Hospedagem de diretórios pessoais de usuários e compartilhamentos de arquivos corporativos
- Suporte a aplicações .NET e outras aplicações baseadas em Windows que exigem armazenamento de arquivos
- Redução de custos de implantação de SQL Server (usando compartilhamentos de arquivos para dados de banco de dados)
- Simplificar desktops virtuais e streaming de aplicações

## Principais pontos
- **Compatibilidade com Windows:** Oferece um sistema de arquivos totalmente compatível com o Windows, incluindo suporte a ACLs NTFS, Active Directory e DFS
- **Totalmente gerenciado:** A AWS cuida do provisionamento, patching, backups e escalabilidade do sistema de arquivos
- **Alta disponibilidade e durabilidade:** Os dados são armazenados de forma redundante em várias Zonas de Disponibilidade
- **Integração com Active Directory:** Permite que os usuários acessem os compartilhamentos de arquivos usando suas credenciais de domínio existentes
- **Desduplicação de dados:** Ajuda a reduzir os custos de armazenamento
- **Backups automáticos:** Realiza backups diários automáticos

## Comparativo
- **Amazon FSx for Windows File Server:** Ideal para workloads que exigem um sistema de arquivos Windows nativo e compatibilidade com o protocolo SMB. Perfeito para migrar aplicações Windows existentes para a AWS.
- **Amazon EFS:** Um sistema de arquivos baseado em NFS, ideal para workloads Linux e aplicações que exigem acesso compartilhado a um sistema de arquivos. Não é nativamente compatível com o protocolo SMB. 