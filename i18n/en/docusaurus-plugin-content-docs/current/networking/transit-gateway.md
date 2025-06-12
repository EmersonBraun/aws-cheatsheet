---
sidebar_position: 6
---

# AWS Transit Gateway

## What is it
A service that enables you to connect VPCs and on-premises networks through a single hub, simplifying network architecture and reducing operational relationships.

## What it's for
Centralize and simplify connectivity between VPCs, on-premises networks, and AWS services, eliminating the need for complex point-to-point connections.

## Use cases
- Connecting multiple VPCs in a hub-and-spoke architecture
- Establishing connectivity between VPCs in different AWS regions
- Connecting on-premises networks to multiple VPCs through a single point
- Sharing services between VPCs (e.g., DNS, Active Directory)
- Simplifying network architecture and reducing the number of required connections

## Key points
- **Centralized hub:** A single connection point for all your VPCs and on-premises networks
- **Simplified routing:** Automatically manages routing between VPCs and on-premises networks
- **Scalability:** Supports thousands of VPCs and on-premises connections
- **Multi-region:** Allows connecting VPCs in different AWS regions
- **Security:** Supports traffic encryption and granular access control
- **Integration:** Works with Direct Connect, VPN, and VPC peering

## Comparison
- **AWS Transit Gateway:** Offers a centralized and scalable solution for connecting VPCs and on-premises networks, simplifying network architecture and reducing operational complexity.
- **Point-to-point connections:** Requires multiple connections between VPCs and on-premises networks, resulting in a more complex and difficult-to-manage architecture. Can become impractical as the number of connections increases. 