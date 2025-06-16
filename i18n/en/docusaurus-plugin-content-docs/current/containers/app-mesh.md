---
sidebar_position: 1
---

# AWS App Mesh

## What is it
A service mesh that makes it easy to monitor and control communications between microservices in your applications.

## What it's for
Standardizing how microservices communicate, providing features like traffic control, resilience, observability, and security, without requiring changes to application code.

## Use cases
- Traffic management for canary and blue/green deployments
- Implementing retries and timeouts to increase application resilience
- Collecting metrics, logs, and traces for microservices observability
- Encrypting traffic between microservices
- Applying network-level security policies for microservices

## Key points
- **Envoy Proxy:** Uses the open-source Envoy proxy for traffic routing and data collection
- **Traffic control:** Allows routing traffic based on rules, such as weight or HTTP headers
- **Resilience:** Supports retries, timeouts, circuit breakers, and other techniques to handle failures
- **Observability:** Collects metrics, logs, and traces to provide insights into microservices behavior
- **Security:** Allows encrypting traffic and applying security policies
- **Integration:** Integrates with Amazon ECS, Amazon EKS, AWS Fargate, and Kubernetes

## Comparison with microservices management without service mesh
- **AWS App Mesh:** Simplifies microservices management by abstracting away the complexity of communication between them and providing advanced networking, resilience, and observability features without requiring changes to application code. Ideal for complex microservices environments.
- **Management without service mesh:** Requires developers to implement communication, resilience, and observability logic in each microservice, which can be complex, error-prone, and difficult to maintain at scale. 