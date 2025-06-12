---
sidebar_position: 4
---

# AWS SNS (Simple Notification Service)

## What is it
A fully managed messaging service that allows sending messages from publishers (producers) to subscribers (customers).

## What it's for
Send push notifications, SMS, emails, and messages to other AWS services (such as SQS, Lambda) in a scalable and reliable way.

## Use cases
- Application notifications (e.g., status updates, alerts)
- Messages between microservices
- SMS delivery for two-factor authentication
- Event distribution to multiple consumers
- System monitoring and alerts

## Key points
- **Pub/Sub (Publish/Subscribe):** Allows a publisher to send a message to a topic, and all subscribers of that topic receive the message
- **Fully managed:** AWS handles infrastructure and scalability
- **Multiple protocols:** Supports HTTP/S, email, SMS, SQS, Lambda, push notifications
- **High availability:** Designed to be highly available and durable
- **Message filtering:** Allows subscribers to filter the messages they want to receive

## Comparison with AWS SQS
- **AWS SNS:** A pub/sub notification service where a message is sent to a topic and delivered to all subscribers. Ideal for scenarios where the same message needs to be delivered to multiple consumers.
- **AWS SQS (Simple Queue Service):** A message queue service that allows decoupling of application components. Messages are stored in a queue until a consumer processes them. Ideal for scenarios where messages need to be processed by a single consumer or where order and delivery guarantee are crucial. 