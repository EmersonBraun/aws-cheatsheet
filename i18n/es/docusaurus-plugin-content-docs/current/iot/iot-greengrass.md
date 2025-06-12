---
sidebar_position: 3
---

# AWS IoT Greengrass

## Qué es
Un servicio que extiende las capacidades de AWS a dispositivos de borde, permitiendo que ejecuten aplicaciones localmente mientras mantienen la sincronización con la nube.

## Para qué sirve
Habilitar el procesamiento local, mensajería y sincronización de datos para dispositivos de borde, permitiendo que operen incluso sin conexión a internet.

## Casos de uso
- Computación en el borde
- Procesamiento local de datos
- Aplicaciones industriales
- Sistemas autónomos
- Dispositivos conectados

## Puntos clave
- **Procesamiento local:** Ejecución de código en dispositivos
- **Conectividad:** Operación sin conexión a internet
- **Seguridad:** Comunicación encriptada y autenticación
- **Sincronización:** Actualización automática con la nube
- **Integración:** Compatibilidad con servicios AWS

## Comparación
- **AWS IoT Greengrass vs. Azure IoT Edge:** Greengrass es un servicio que permite ejecutar capacidades de AWS en dispositivos de borde, incluyendo procesamiento local y sincronización con la nube. Azure IoT Edge ofrece funcionalidades similares pero en la plataforma Azure. Greengrass es ideal para usuarios de AWS que necesitan capacidades de computación en el borde, mientras que Azure IoT Edge es mejor para usuarios comprometidos con el ecosistema Azure.

## Use cases
- Real-time data processing on edge devices (e.g., factories, hospitals, vehicles)
- Running machine learning models on IoT devices for local inference
- Data synchronization between local devices and AWS cloud
- Secure communication between devices on a local network
- Applications requiring low latency and offline operation

## Key points
- **Edge computing:** Extends AWS capabilities to IoT devices, enabling local processing
- **Lambda functions:** Allows running Lambda functions on edge devices
- **Data synchronization:** Synchronizes data between local devices and AWS cloud
- **Local communication:** Enables devices to communicate with each other locally
- **Security:** Authentication and encryption for secure communication
- **Open source:** The edge runtime is open source

## Comparison
- **AWS IoT Greengrass:** Extends AWS capabilities to edge devices, allowing them to run Lambda functions, synchronize data, and communicate with other devices locally, even without cloud connectivity. Complements IoT Core by enabling edge processing and intelligence.

## Casos de uso
- Processamento de dados em tempo real em dispositivos de borda (ex: fábricas, hospitais, veículos)
- Execução de modelos de machine learning em dispositivos IoT para inferência local
- Sincronização de dados entre dispositivos locais e a nuvem AWS
- Comunicação segura entre dispositivos em uma rede local
- Aplicações que exigem baixa latência e operação offline

## Principais pontos
- **Computação de borda:** Estende as capacidades da AWS para dispositivos IoT, permitindo processamento local
- **Funções Lambda:** Permite executar funções Lambda em dispositivos de borda
- **Sincronização de dados:** Sincroniza dados entre dispositivos locais e a nuvem AWS
- **Comunicação local:** Permite que os dispositivos se comuniquem entre si localmente
- **Segurança:** Autenticação e criptografia para comunicação segura
- **Open source:** O tempo de execução de borda é de código aberto

## Comparativo
- **AWS IoT Greengrass:** Estende as capacidades da AWS para dispositivos de borda, permitindo que eles executem funções Lambda, sincronizem dados e se comuniquem com outros dispositivos localmente, mesmo sem conectividade com a nuvem. Complementa o IoT Core, permitindo processamento e inteligência na borda.
- **AWS IoT Core:** Focado na conectividade e gerenciamento de dispositivos IoT na nuvem, atuando como o hub central para a comunicação e processamento de dados de dispositivos. 