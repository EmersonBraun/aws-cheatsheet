---
sidebar_position: 5
---

# AWS SQS (Simple Queue Service)

## What is it
A fully managed message queue service that allows sending, storing, and receiving messages between software components at any volume.

## What it's for
Decouple and scale microservices, distributed systems, and serverless applications, ensuring messages are processed asynchronously and reliably.

## Use cases
- Decoupling application components
- Background task processing
- Message delivery between microservices
- Work queue management for batch processing
- Request buffering to handle traffic spikes

## Key points
- **Fully managed:** AWS handles infrastructure and scalability
- **Standard and FIFO queues:** Supports standard queues ("at least once" delivery, no guaranteed order) and FIFO queues (First-In, First-Out, "exactly once" delivery, guaranteed order)
- **Decoupling:** Allows message producers and consumers to operate independently
- **Scalability:** Automatically scales to handle message volume
- **Durability:** Messages are redundantly stored across multiple Availability Zones

## Comparison with AWS SNS
- **AWS SQS:** A message queue service where messages are stored in a queue until a consumer processes them. Ideal for scenarios where messages need to be processed by a single consumer or where order and delivery guarantee are crucial.
- **AWS SNS:** A pub/sub notification service where a message is sent to a topic and delivered to all subscribers. Ideal for scenarios where the same message needs to be delivered to multiple consumers. 