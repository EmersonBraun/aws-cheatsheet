---
sidebar_position: 2
---

# AWS Wavelength

## O que é
Uma infraestrutura da AWS que incorpora serviços de computação e armazenamento da AWS nas redes 5G das operadoras de telecomunicações, permitindo que os desenvolvedores criem aplicações que oferecem latência ultrabaixa para dispositivos móveis e usuários finais.

## Para que serve
Habilitar casos de uso de borda que exigem latência de milissegundos de um dígito para usuários móveis e dispositivos conectados ao 5G, como aplicações de jogos, streaming de vídeo em tempo real e IoT industrial.

## Casos de uso
- Jogos online e e-sports com requisitos de latência extremamente baixos.
- Streaming de vídeo em tempo real e processamento de mídia na borda da rede.
- Aplicações de realidade aumentada e virtual para dispositivos móveis.
- IoT industrial e robótica que exigem processamento de dados em tempo real.
- Veículos autônomos e drones que precisam de respostas rápidas.

## Principais pontos
- **Computação na borda 5G:** Estende a infraestrutura AWS para a borda da rede 5G das operadoras.
- **Latência ultrabaixa:** Permite que as aplicações alcancem latência de milissegundos de um dígito para usuários móveis.
- **Serviços AWS familiares:** Permite usar serviços AWS como EC2, EBS e VPC em Wavelength Zones.
- **Integração com redes 5G:** Conecta-se diretamente à rede 5G da operadora, minimizando o tráfego pela internet pública.
- **Gerenciamento unificado:** Gerencie recursos em Wavelength Zones da mesma forma que gerencia recursos em uma região AWS.

## Comparativo com AWS Local Zones
- **AWS Wavelength:** Focado em estender a nuvem AWS para a borda da rede 5G das operadoras de telecomunicações, visando aplicações que exigem latência ultrabaixa para dispositivos móveis e usuários finais conectados ao 5G. Ideal para casos de uso de borda móvel.
- **AWS Local Zones:** Estende a nuvem AWS para locais mais próximos de grandes centros populacionais ou datacenters on-premises, visando aplicações que exigem baixa latência para usuários em geral ou para estender ambientes híbridos. Não está intrinsecamente ligada à rede 5G. 