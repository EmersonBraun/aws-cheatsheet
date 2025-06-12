---
sidebar_position: 3
---

# AWS X-Ray

## What is it
A service that helps developers analyze and debug distributed applications, such as those built using microservices.

## What it's for
Provides an end-to-end view of requests as they travel through your application, helping to identify performance bottlenecks, errors, and root causes of issues.

## Use cases
- Analysis and debugging of distributed applications and microservices
- Identification of performance bottlenecks in applications
- Tracking requests across multiple AWS services
- Analysis of latency and errors in applications
- Monitoring applications in production

## Key points
- **Distributed tracing:** Collects data about requests as they pass through different components of the application
- **Service map:** Generates a visual map of the services and resources that make up your application, showing connections and latency between them
- **Segments and subsegments:** Allows detailing the performance of individual components within a request
- **Annotations and metadata:** Allows adding custom information to traces to facilitate debugging
- **Integration:** Integrates with AWS Lambda, Amazon EC2, Elastic Load Balancing, Amazon API Gateway, and other AWS services

## Comparison with Amazon CloudWatch
- **AWS X-Ray:** Focused on distributed tracing and application performance analysis, providing an end-to-end view of requests and their components. Ideal for debugging and optimizing complex applications
- **Amazon CloudWatch:** A monitoring and observability service that collects metrics and logs from AWS resources and applications. It's more comprehensive for infrastructure and application monitoring, but doesn't offer the same level of distributed tracing as X-Ray 