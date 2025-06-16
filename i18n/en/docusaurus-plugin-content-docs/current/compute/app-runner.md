---
sidebar_position: 3
---

# AWS App Runner

## What is it
A fully managed service that makes it easy to create, deploy, and run web applications and API services in containers, without the need to manage the underlying infrastructure.

## What it's for
Simplifying the process of putting applications into production, automatically handling building, deployment, scaling, and load balancing.

## Use cases
- Quick deployment of web applications and APIs
- Running microservices and application backends
- Development and testing of containerized applications
- Hosting websites and front-end applications
- Scenarios where simplicity and deployment speed are priorities

## Key points
- **Fully managed:** AWS handles infrastructure, load balancing, auto-scaling, and SSL certificate management
- **Deployment from source code or container image:** Supports direct deployment from code repositories (e.g., GitHub) or container images (e.g., ECR)
- **Automatic scaling:** Automatically scales up and down based on traffic
- **Cost-effective:** Pay only for the resources you use
- **Integration:** Integrates with AWS VPC, AWS IAM, and other AWS services

## Comparison with Amazon ECS/EKS/Fargate
- **AWS App Runner:** The simplest and fastest option for deploying containerized applications, ideal for developers who want to focus on code rather than infrastructure. Offers less granular control over the container environment.
- **Amazon ECS (Elastic Container Service):** A container orchestration service that offers more control and flexibility over container deployment and management. Can run on EC2 instances (EC2 Launch Type) or in a serverless model with AWS Fargate.
- **Amazon EKS (Elastic Kubernetes Service):** A managed Kubernetes service that offers the highest level of control and flexibility for container orchestration, ideal for teams already using Kubernetes or needing its portability and ecosystem.
- **AWS Fargate:** A serverless compute engine for Amazon ECS and EKS that allows running containers without provisioning or managing servers. App Runner uses Fargate under the hood but abstracts away even more complexity. 