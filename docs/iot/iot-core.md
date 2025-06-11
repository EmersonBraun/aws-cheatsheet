---
sidebar_position: 1
---

# AWS IoT Core

## O que é
Um serviço de nuvem gerenciado que permite que dispositivos conectados interajam com segurança com aplicações em nuvem e outros dispositivos.

## Para que serve
Conectar bilhões de dispositivos IoT à nuvem AWS, gerenciar sua comunicação, processar e rotear dados de dispositivos para outros serviços AWS.

## Casos de uso
- Conectar e gerenciar frotas de dispositivos IoT (sensores, atuadores, eletrodomésticos inteligentes)
- Coleta e processamento de dados de telemetria de dispositivos
- Controle remoto de dispositivos IoT
- Construção de aplicações de casa inteligente e cidades inteligentes
- Análise de dados de IoT em tempo real

## Principais pontos
- **Conectividade:** Permite que os dispositivos se conectem à nuvem usando protocolos MQTT, HTTP e WebSockets
- **Segurança:** Autenticação mútua e criptografia para comunicação segura entre dispositivos e a nuvem
- **Registro de dispositivos:** Gerencia identidades e permissões para bilhões de dispositivos
- **Regras de IoT:** Permite definir regras para processar e rotear dados de dispositivos para outros serviços AWS (Lambda, S3, DynamoDB, Kinesis, etc.)
- **Device Shadow:** Mantém um estado persistente para cada dispositivo, mesmo quando ele está offline
- **Device Defender:** Ajuda a auditar e monitorar a segurança dos dispositivos IoT

## Comparativo
- **AWS IoT Core:** Focado na conectividade e gerenciamento de dispositivos IoT na nuvem, atuando como o hub central para a comunicação e processamento de dados de dispositivos.
- **AWS IoT Greengrass:** Estende as capacidades da AWS para dispositivos de borda, permitindo que eles executem funções Lambda, sincronizem dados e se comuniquem com outros dispositivos localmente, mesmo sem conectividade com a nuvem. Complementa o IoT Core, permitindo processamento e inteligência na borda. 