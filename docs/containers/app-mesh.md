---
sidebar_position: 1
---

# AWS App Mesh

## O que é
Uma malha de serviços que facilita o monitoramento e o controle das comunicações entre os microsserviços em suas aplicações.

## Para que serve
Padronizar a forma como os microsserviços se comunicam, fornecendo recursos como controle de tráfego, resiliência, observabilidade e segurança, sem a necessidade de modificar o código da aplicação.

## Casos de uso
- Gerenciamento de tráfego para implantações canary e azul/verde
- Implementação de retries e timeouts para aumentar a resiliência da aplicação
- Coleta de métricas, logs e traces para observabilidade de microsserviços
- Criptografia de tráfego entre microsserviços
- Aplicação de políticas de segurança em nível de rede para microsserviços

## Principais pontos
- **Proxy Envoy:** Utiliza o proxy Envoy de código aberto para rotear o tráfego e coletar dados
- **Controle de tráfego:** Permite rotear o tráfego com base em regras, como peso ou cabeçalhos HTTP
- **Resiliência:** Suporta retries, timeouts, circuit breakers e outras técnicas para lidar com falhas
- **Observabilidade:** Coleta métricas, logs e traces para fornecer insights sobre o comportamento dos microsserviços
- **Segurança:** Permite criptografar o tráfego e aplicar políticas de segurança
- **Integração:** Integra-se com Amazon ECS, Amazon EKS, AWS Fargate e Kubernetes

## Comparativo com gerenciamento de microsserviços sem malha de serviços
- **AWS App Mesh:** Simplifica o gerenciamento de microsserviços, abstraindo a complexidade da comunicação entre eles e fornecendo recursos avançados de rede, resiliência e observabilidade sem a necessidade de modificar o código da aplicação. Ideal para ambientes de microsserviços complexos.
- **Gerenciamento sem malha de serviços:** Exige que os desenvolvedores implementem a lógica de comunicação, resiliência e observabilidade em cada microsserviço, o que pode ser complexo, propenso a erros e difícil de manter em escala. 