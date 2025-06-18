---
sidebar_position: 6
---

# AWS AppSync

## What is it?
A fully managed service that facilitates the development of secure, serverless, and high-performance GraphQL and Pub/Sub APIs.

## What is it used for?
Connecting applications to real-time data and events, allowing developers to access exactly the data they need through a flexible API that accesses, manipulates, and combines data from multiple sources.

## Use cases
- Building mobile and web applications with real-time features (e.g., chats, news feeds)
- Development of collaborative applications (e.g., real-time document editing)
- Aggregation of data from multiple sources (DynamoDB, Lambda, HTTP APIs, etc.) into a single GraphQL API
- Offline data synchronization for mobile applications

## Key points
- **Fully managed:** AWS handles the infrastructure and scalability
- **GraphQL:** Supports the GraphQL standard for flexible and efficient queries
- **Real-time:** Supports real-time subscriptions via WebSocket
- **Security:** Integration with AWS IAM, Cognito, and other security services
- **Integration:** Easily connects with other AWS services such as DynamoDB, Lambda, Elasticsearch, etc.

## Comparison
- **AWS AppSync vs. API Gateway + Lambda:** AppSync specializes in GraphQL and offers native real-time functions, while the combination of API Gateway and Lambda is more flexible for traditional RESTful APIs.
- **AWS AppSync vs. Apollo Server:** AppSync is a managed service that offers native integration with AWS services and real-time functions, while Apollo Server is an open-source solution that requires more configuration and management. 