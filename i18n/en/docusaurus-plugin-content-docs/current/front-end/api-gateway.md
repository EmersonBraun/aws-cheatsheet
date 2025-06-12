---
sidebar_position: 1
---

# Amazon API Gateway

## What is it
A fully managed service that enables developers to create, publish, maintain, monitor, and secure REST, HTTP, and WebSocket APIs at any scale.

## What it's for
Act as a "front door" for applications, allowing clients to access data, business logic, or backend functionality in a secure and scalable way.

## Use cases
- Creating APIs for web and mobile applications
- Exposing AWS Lambda functions as APIs
- Integrating applications with backend services
- Building microservices and serverless APIs
- Enabling real-time communication with WebSocket APIs

## Key points
- **Fully managed:** AWS handles provisioning, scaling, security, and monitoring
- **API types:** Supports REST APIs (HTTP/S), HTTP APIs (simpler and cheaper), and WebSocket APIs (for real-time bidirectional communication)
- **Security:** Integration with AWS IAM, Amazon Cognito, Lambda authorizers, and API keys
- **Caching:** Allows configuring cache to reduce latency and backend service load
- **Throttling and quotas:** Enables traffic control to protect your backend services
- **Monitoring:** Integration with Amazon CloudWatch for monitoring and logging

## Comparison
- **Amazon API Gateway:** A versatile service for creating and managing REST, HTTP, and WebSocket APIs. It's more generic and suitable for a wide range of APIs, including those that don't require GraphQL or advanced real-time features.
- **AWS AppSync:** Ideal for building GraphQL APIs that require real-time features, offline synchronization, and data aggregation from multiple sources. Focused on query flexibility and data efficiency. 