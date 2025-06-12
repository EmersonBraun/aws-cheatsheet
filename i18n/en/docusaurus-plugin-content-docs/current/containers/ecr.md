---
sidebar_position: 1
---

# AWS ECR (Elastic Container Registry)

## What is it
A fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images.

## What it's for
Storing and managing Docker container images securely, with high availability and scalability, while integrating with other AWS services.

## Use cases
- Container image storage and management
- CI/CD pipeline integration
- Microservices deployment
- Container-based application development
- Cross-region image replication

## Key points
- **Fully managed:** No infrastructure to manage
- **Security:** Image scanning and encryption
- **Integration:** Works with ECS, EKS, and other AWS services
- **Access control:** IAM integration for fine-grained permissions
- **Lifecycle policies:** Automate image cleanup

## Comparison
- **AWS ECR vs. Docker Hub:** ECR is fully integrated with AWS services and provides better security and access control for AWS workloads. Docker Hub is a public registry with both free and paid tiers, offering a broader community and public image sharing. ECR is ideal for AWS-based container deployments, while Docker Hub is better for public image sharing and community collaboration. 