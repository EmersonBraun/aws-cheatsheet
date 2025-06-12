---
sidebar_position: 3
---

# AWS EKS (Elastic Kubernetes Service)

## What is it
A fully managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane.

## What it's for
Running containerized applications using Kubernetes, providing a highly available and scalable platform for container orchestration.

## Use cases
- Enterprise container orchestration
- Hybrid cloud deployments
- Multi-cloud strategies
- Microservices architecture
- DevOps automation

## Key points
- **Managed Kubernetes:** AWS handles the control plane
- **High availability:** Runs across multiple AZs
- **Security:** IAM integration and network policies
- **Scalability:** Automatic scaling of nodes
- **Compatibility:** Standard Kubernetes APIs

## Comparison
- **AWS EKS vs. ECS:** EKS is a managed Kubernetes service that provides more advanced container orchestration features and is compatible with the Kubernetes ecosystem. ECS is a simpler container orchestration service that's more tightly integrated with AWS services. EKS is ideal for organizations that need Kubernetes compatibility or have complex container orchestration needs, while ECS is better for AWS-focused deployments that don't require Kubernetes features. 