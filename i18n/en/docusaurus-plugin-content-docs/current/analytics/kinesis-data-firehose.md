---
sidebar_position: 5
---

# Amazon Kinesis Data Firehose

## What is it
A fully managed service for loading real-time streaming data into destinations such as Amazon S3, Amazon Redshift, Amazon OpenSearch Service, and Splunk.

## What it's for
Simplify the ingestion and delivery of streaming data for storage and analysis, without the need to manage servers or write consumer applications.

## Use cases
- Loading application and system logs to S3 for later analysis
- Ingesting clickstream data into data warehouses like Redshift
- Sending event data to OpenSearch Service for monitoring and visualization
- Collecting IoT data for real-time analysis

## Key points
- **Fully managed:** No servers to provision or manage
- **Real-time delivery:** Delivers data in seconds to configured destinations
- **Data transformation:** Can transform, compress, and encrypt data before delivery
- **Automatic scaling:** Automatically scales to handle streaming data volume
- **Integration:** Integrates with Kinesis Data Streams, Kinesis Agent, and other AWS services

## Comparison with AWS Kinesis Data Streams
- **Kinesis Data Firehose:** Simpler to use for ingesting data into specific destinations, without the need to develop consumer applications. Ideal for use cases where data transformation and delivery are standardized.
- **Kinesis Data Streams:** Offers more control and flexibility for developing custom applications that consume and process real-time streaming data. You manage the shards and capacity, allowing for more complex processing logic. 