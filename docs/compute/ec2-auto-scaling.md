---
sidebar_position: 2
---

# AWS EC2 Auto Scaling

## O que é
Um serviço que ajuda a garantir que você tenha o número correto de instâncias EC2 disponíveis para lidar com a carga da sua aplicação, adicionando ou removendo instâncias automaticamente.

## Para que serve
Manter a disponibilidade da aplicação, melhorar a tolerância a falhas e otimizar custos, escalando a capacidade do EC2 para cima ou para baixo em resposta à demanda.

## Casos de uso
- Aplicações web com tráfego variável.
- Processamento de dados em lote que exige capacidade elástica.
- Ambientes de desenvolvimento e teste que precisam de escalabilidade.
- Manter a disponibilidade de aplicações críticas.
- Reduzir custos ao desligar instâncias quando não são necessárias.

## Principais pontos
- **Grupos de Auto Scaling:** Coleções de instâncias EC2 que são tratadas como uma unidade para fins de escalabilidade e gerenciamento.
- **Políticas de escalabilidade:** Define como o Auto Scaling deve adicionar ou remover instâncias (ex: escalabilidade baseada em métricas, escalabilidade programada).
- **Verificações de integridade:** Monitora a integridade das instâncias e substitui automaticamente as instâncias não íntegras.
- **Balanceamento de carga:** Integra-se com o Elastic Load Balancing para distribuir o tráfego entre as instâncias.
- **Otimização de custos:** Ajuda a otimizar custos ao usar instâncias Spot e instâncias sob demanda de forma eficiente.

## Comparativo
- **AWS EC2 Auto Scaling vs. Escalabilidade manual:** O Auto Scaling automatiza o processo de escalabilidade, garantindo que a capacidade da aplicação se ajuste dinamicamente à demanda, reduzindo a necessidade de intervenção manual e otimizando custos. A escalabilidade manual exige que o usuário monitore a demanda e adicione ou remova instâncias manualmente, o que pode ser ineficiente, propenso a erros e não responsivo a mudanças rápidas na carga. 