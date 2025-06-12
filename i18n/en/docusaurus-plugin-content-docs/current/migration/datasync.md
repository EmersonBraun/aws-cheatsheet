---
sidebar_position: 2
---

# AWS DataSync

## What is it
An online data transfer service that simplifies, automates, and accelerates moving data between on-premises storage systems and AWS storage services.

## What it's for
Transfer large volumes of data quickly and securely to AWS for migration, archiving, replication, or cloud processing.

## Use cases
- Migrating data from on-premises file systems (NFS, SMB) to Amazon S3, Amazon EFS, or Amazon FSx
- Archiving cold data to low-cost storage in AWS Glacier
- Data replication for disaster recovery
- Transferring data for processing in AWS analytics or machine learning services
- Consolidating data from multiple locations to a centralized data lake in AWS

## Key points
- **Accelerated transfer:** Optimizes data transfer using a proprietary protocol
- **Fully managed:** AWS handles the data transfer infrastructure
- **DataSync agent:** A software agent that you deploy in your on-premises environment to access your data
- **Integration:** Integrates with Amazon S3, Amazon EFS, Amazon FSx, and other AWS services
- **Data integrity:** Ensures data integrity during transfer
- **Scheduling:** Allows scheduling data transfer tasks

## Comparison
- **AWS DataSync:** Offers an optimized, secure, and managed solution for transferring large volumes of data, overcoming bandwidth and reliability limitations of manual methods. Ideal for large-scale migrations and continuous transfers.
- **Manual data copying (e.g., rsync, SCP):** Suitable for smaller data volumes or one-time transfers, but can be slow, error-prone, and doesn't offer the same optimization and management features as DataSync. 