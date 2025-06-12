---
sidebar_position: 6
---

# Amazon Managed Streaming for Apache Kafka (MSK)

## What is it
A fully managed service that makes it easy to build and run applications that use Apache Kafka to process streaming data.

## What it's for
Manage Apache Kafka infrastructure and operations, allowing developers to focus on building streaming applications.

## Use cases
- Building real-time data pipelines
- Application and infrastructure monitoring
- Clickstream and IoT data analysis
- Event processing and microservices

## Key points
- **Fully managed:** AWS manages provisioning, configuration, scaling, and maintenance of Kafka clusters
- **Apache Kafka compatible:** Uses open-source versions of Apache Kafka, allowing easy migration of existing applications
- **High availability:** Clusters distributed across multiple Availability Zones for resilience
- **Security:** Integration with AWS IAM, VPC, and data encryption
- **Scalability:** Allows scaling clusters to meet throughput demands

## Comparison
- **Amazon MSK vs. Self-managed Apache Kafka:** MSK eliminates the operational complexity of managing a Kafka cluster, including patching, backups, and monitoring, while self-managed Kafka requires the user to handle all these tasks.
- **Amazon MSK vs. Kinesis Data Streams:** Both are data streaming services. Kinesis Data Streams is a proprietary AWS service, while MSK is based on open-source Apache Kafka. The choice depends on familiarity with Kafka and the need for compatibility with existing Kafka ecosystems. 