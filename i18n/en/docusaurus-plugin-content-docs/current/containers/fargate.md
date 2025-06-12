---
sidebar_position: 4
---

# AWS Fargate

## What is it
A serverless compute engine for containers that works with both Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS).

## What it's for
Running containers without the need to provision, configure, or manage underlying servers or clusters. You only pay for the compute resources consumed by your containers.

## Use cases
- Running containerized applications without infrastructure management.
- Microservices and serverless APIs.
- Web applications and backends.
- Batch data processing and scheduled tasks.
- Development and testing environments.

## Key points
- **Serverless:** No servers to manage, AWS handles all the infrastructure.
- **Pay-per-use:** You only pay for the compute resources (vCPU and memory) that your containers use.
- **Automatic scaling:** Automatically scales to meet application demands.
- **Security:** Isolates container workloads in a secure environment.
- **Integration:** Natively integrates with Amazon ECS and Amazon EKS.

## Comparison
- **AWS Fargate vs. EC2 for containers:** Fargate provides a serverless experience for containers, completely abstracting the underlying infrastructure. Ideal for developers who want to focus solely on application code and not worry about servers. EC2 for containers (ECS/EKS with EC2) allows for greater control over the underlying infrastructure, such as instance type, operating system, and network configurations. Ideal for use cases that require deep customization or where cost is a critical factor and you can optimize instance usage.
---