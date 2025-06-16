---
sidebar_position: 2
---

# Amazon Inspector

## O que é
Um serviço de gerenciamento de vulnerabilidades que descobre automaticamente workloads e as verifica continuamente em busca de vulnerabilidades de software e exposições de rede não intencionais.

## Para que serve
Identificar vulnerabilidades de segurança em suas instâncias EC2, imagens de contêiner e funções Lambda, bem como configurações de rede que podem expor seus recursos a riscos.

## Casos de uso
- Detecção de vulnerabilidades em sistemas operacionais e aplicações em instâncias EC2.
- Análise de segurança de imagens de contêiner armazenadas no Amazon ECR.
- Verificação de vulnerabilidades em funções AWS Lambda.
- Identificação de portas de rede abertas e configurações de segurança inadequadas.
- Ajuda na conformidade com padrões de segurança (ex: CIS Benchmarks).

## Principais pontos
- **Verificação contínua:** Monitora continuamente seus recursos em busca de novas vulnerabilidades.
- **Descoberta automática:** Descobre automaticamente workloads qualificadas para verificação.
- **Análise de vulnerabilidades:** Identifica vulnerabilidades conhecidas (CVEs) em software e configurações.
- **Análise de rede:** Avalia a acessibilidade de rede de suas instâncias EC2.
- **Relatórios detalhados:** Fornece relatórios detalhados sobre as vulnerabilidades encontradas e recomendações para correção.
- **Integração:** Integra-se com AWS Security Hub, Amazon EventBridge e AWS Systems Manager.

## Comparativo
- **Amazon Inspector:** Oferece um serviço de gerenciamento de vulnerabilidades totalmente gerenciado e automatizado, com verificação contínua e integração nativa com o ambiente AWS. Reduz a complexidade e o esforço manual das varreduras.
- **Varreduras de vulnerabilidade tradicionais:** Geralmente exigem a instalação e o gerenciamento de software de varredura, agendamento manual e análise de relatórios complexos. Podem não ter a mesma integração e automação que o Inspector oferece na AWS.



