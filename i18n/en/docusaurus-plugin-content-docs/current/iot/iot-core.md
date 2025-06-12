---
sidebar_position: 1
---

# AWS IoT Core

## What is it
A managed cloud service that enables connected devices to securely interact with cloud applications and other devices.

## What it's for
Connect billions of IoT devices to AWS cloud, manage their communication, and process and route device data to other AWS services.

## Use cases
- Connect and manage fleets of IoT devices (sensors, actuators, smart appliances)
- Collection and processing of device telemetry data
- Remote control of IoT devices
- Building smart home and smart city applications
- Real-time IoT data analysis

## Key points
- **Connectivity:** Allows devices to connect to the cloud using MQTT, HTTP, and WebSockets protocols
- **Security:** Mutual authentication and encryption for secure communication between devices and the cloud
- **Device registry:** Manages identities and permissions for billions of devices
- **IoT Rules:** Allows defining rules to process and route device data to other AWS services (Lambda, S3, DynamoDB, Kinesis, etc.)
- **Device Shadow:** Maintains a persistent state for each device, even when it's offline
- **Device Defender:** Helps audit and monitor IoT device security

## Comparison
- **AWS IoT Core:** Focused on IoT device connectivity and management in the cloud, acting as the central hub for device communication and data processing.
- **AWS IoT Greengrass:** Extends AWS capabilities to edge devices, allowing them to run Lambda functions, synchronize data, and communicate with other devices locally, even without cloud connectivity. Complements IoT Core by enabling edge processing and intelligence. 