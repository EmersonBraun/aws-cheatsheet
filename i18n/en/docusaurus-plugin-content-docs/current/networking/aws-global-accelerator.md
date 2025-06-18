---
sidebar_position: 1
---

# AWS Global Accelerator

## What is it?
A service that improves the availability and performance of your applications using the AWS global network, offering static IPs and intelligent routing.

## What is it for?
Optimize global traffic routing, reduce latency, and improve availability for applications distributed across multiple AWS regions.

## Use Cases
- Global application distribution
- Multi-region load balancing
- Traffic migration between regions
- Disaster recovery
- Gaming and real-time applications
- Media streaming

## Key Points
- **Static IPs:** Provides fixed global IP addresses
- **Intelligent Routing:** Latency-based optimization
- **Health Checks:** Continuous endpoint monitoring
- **Automatic Failover:** Redirection in case of failures
- **Security:** AWS Shield integration
- **Multi-Region:** Support for endpoints in different regions

## Comparison with Traditional DNS
- **AWS Global Accelerator:** Offers optimized routing on the AWS network, global static IPs, and automatic failover in seconds.
- **Traditional DNS:** Relies on DNS propagation (which can take minutes or hours), doesn't offer network layer routing optimization, and has limitations for quick failover. 