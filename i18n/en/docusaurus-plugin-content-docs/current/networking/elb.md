---
sidebar_position: 7
---

# Elastic Load Balancing (ELB)

## What is it
A service that automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses.

## What it's for
Improve application availability and scalability by efficiently distributing traffic across multiple targets and detecting unhealthy instances.

## Use cases
- Distributing traffic across multiple EC2 instances to improve availability
- Load balancing web applications and APIs
- Implementing high availability and automatic scaling
- Distributing traffic between containers in an ECS or EKS cluster
- Implementing SSL/TLS termination for web applications

## Key points
- **Load balancer types:** Application Load Balancer (ALB), Network Load Balancer (NLB), and Classic Load Balancer (CLB)
- **High availability:** Distributes traffic across multiple availability zones
- **Automatic scaling:** Integrates with Auto Scaling to automatically adjust capacity
- **Health monitoring:** Checks target health and removes unhealthy instances
- **SSL/TLS:** Support for SSL/TLS termination and managed certificates
- **Integration:** Works with other AWS services like EC2, ECS, EKS, and Auto Scaling

## Comparison
- **Elastic Load Balancing:** Offers a managed and highly available service for traffic distribution, with advanced features like health monitoring, SSL/TLS termination, and integration with other AWS services.
- **Self-managed load balancer:** Requires users to configure and maintain their own load balancer, which can be complex and error-prone. Doesn't offer the same scalability and high availability features as ELB. 