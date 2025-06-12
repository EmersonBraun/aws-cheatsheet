---
sidebar_position: 3
---

# Amazon Elastic File System (EFS)

## What is it
A simple, scalable, and elastic file storage service for use with AWS cloud services and on-premises resources.

## What it's for
Provide shared and persistent file storage for multiple EC2 instances, containers, and Lambda functions, enabling multiple applications to access the same data simultaneously.

## Use cases
- Personal directories and file shares for users
- Shared development and testing environments
- Web applications and content management systems (CMS)
- Data analytics and machine learning workloads
- Persistent storage for containers (Docker, Kubernetes)
- Lift-and-shift of legacy file-based applications

## Key points
- **File storage:** Compatible with NFS (Network File System) protocol
- **Elastic scalability:** Automatically scales to petabytes of data, with no provisioning required
- **Shared access:** Multiple EC2 instances can access the same EFS file system simultaneously
- **High availability and durability:** Data is redundantly stored across multiple Availability Zones
- **Pay-per-use:** You pay only for the storage you use
- **Storage classes:** Offers Standard and Infrequent Access (IA) storage classes for cost optimization
- **Integration:** Integrates with Amazon EC2, AWS Lambda, Amazon ECS, Amazon EKS, and other AWS services

## Comparison
- **Amazon EFS:** Shared file storage, ideal for workloads requiring simultaneous access to a file system by multiple instances or services. It's a traditional file system.
- **Amazon EBS:** Block storage, ideal for boot volumes and database data requiring low latency and high IOPS. Attached to a single EC2 instance.
- **Amazon S3:** Object storage, ideal for unstructured data such as files, images, videos, and backups. Accessed via HTTP/HTTPS API and is not a traditional file system. 