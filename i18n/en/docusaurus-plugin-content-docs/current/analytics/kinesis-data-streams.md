---
sidebar_position: 4
---

# AWS Kinesis Data Streams

## What is it
A real-time data streaming service that allows collecting and processing large streams of data records.

## What it's for
Build custom applications that process streaming data for real-time analytics, application monitoring, fraud detection, etc.

## Use cases
- Collection of application and system logs
- IoT (Internet of Things) data ingestion
- Real-time clickstream analysis
- Security monitoring and anomaly detection
- Real-time data processing for machine learning

## Key points
- **Real-time:** Processes data in milliseconds
- **Scalable:** Can handle gigabytes per second of data from thousands of sources
- **Durability:** Data is stored for up to 7 days (or 1 year with extended retention)
- **Data ordering:** Guarantees the order of records within a shard
- **Integration:** Integrates with other AWS services, such as Lambda, S3, Redshift, etc.

## Comparison with Amazon Kinesis Data Firehose
- **Kinesis Data Streams:** Offers more control and flexibility for developing custom applications that consume and process real-time streaming data. You manage the shards and capacity.
- **Kinesis Data Firehose:** A fully managed service for loading streaming data into destinations like S3, Redshift, OpenSearch Service, and Splunk. It's simpler to use for data ingestion without the need to write consumer code. 