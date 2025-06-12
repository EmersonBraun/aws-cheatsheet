---
sidebar_position: 3
---

# AWS EventBridge

## What is it
A serverless event bus that facilitates connecting application components using events, making it easier to create scalable event-driven applications.

## What it's for
Routing events from various sources (AWS services, custom applications, SaaS) to different destinations (Lambda functions, SQS, SNS, etc.) to build event-driven architectures.

## Use cases
- Building event-driven architectures and decoupled microservices
- Integration of applications and SaaS services
- Workflow automation in response to events
- Monitoring changes in AWS resources
- Audit and compliance

## Key points
- **Serverless:** No infrastructure to manage
- **Event bus:** Acts as a central hub for events
- **Rules:** Allows defining rules to filter and route events to specific destinations
- **Event sources:** Supports events from AWS services, custom applications, and SaaS partners
- **Destinations:** Can send events to Lambda functions, SQS, SNS, Step Functions, etc.

## Comparison with AWS SNS
- **AWS EventBridge:** Focused on event routing and building event-driven architectures, with advanced filtering and the ability to route events from various sources to multiple destinations. Ideal for scenarios where business logic is triggered by events.
- **AWS SNS (Simple Notification Service):** A pub/sub (publish/subscribe) messaging service that allows sending messages to a large number of subscribers (email, SMS, Lambda functions, SQS, etc.). It's more focused on notification and message delivery to multiple endpoints, without the same filtering and complex event routing capabilities as EventBridge. 