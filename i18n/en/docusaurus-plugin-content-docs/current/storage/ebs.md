---
sidebar_position: 2
---

# Amazon Elastic Block Store (EBS)

## What is it
A high-performance, scalable block storage service designed for use with Amazon EC2 instances.

## What it's for
Provide persistent storage volumes for your EC2 instances, which can be used as virtual hard drives for operating systems, databases, and applications.

## Use cases
- Storage of boot volumes for EC2 instances
- Hosting relational and NoSQL databases requiring low latency and high IOPS
- Storage of data for applications requiring block-level access
- Creating snapshots for backup and disaster recovery
- Attaching volumes to EC2 instances to expand storage

## Key points
- **Block storage:** EBS volumes behave like raw hard drives, allowing you to format and mount file systems
- **Persistence:** Data in an EBS volume persists independently of the EC2 instance's lifecycle
- **Volume types:** Offers multiple volume types (General Purpose SSD, Provisioned IOPS SSD, Throughput Optimized HDD, Cold HDD) for different performance and cost needs
- **Snapshots:** Create snapshots of your EBS volumes for backup and recovery. Snapshots are stored in Amazon S3
- **Encryption:** Supports encryption of EBS volumes and snapshots
- **Attachable to a single instance:** An EBS volume can be attached to only one EC2 instance at a time
- **Availability:** EBS volumes are replicated within a single Availability Zone for high availability

## Comparison
- **Amazon EBS:** Block storage, ideal for data requiring block-level access and low latency, such as operating systems and databases. Attached to a single EC2 instance.
- **Amazon S3:** Object storage, ideal for unstructured data such as files, images, videos, and backups. Accessed via HTTP/HTTPS API and is not a traditional file system. 