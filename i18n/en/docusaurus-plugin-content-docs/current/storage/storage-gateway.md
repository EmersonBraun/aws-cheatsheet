---
sidebar_position: 9
---

# AWS Storage Gateway

## What is it
A hybrid cloud storage service that connects an on-premises software environment with AWS cloud storage, providing local access to virtually unlimited cloud storage.

## What it's for
Enable on-premises applications to use AWS cloud storage for backup, archiving, disaster recovery, and data access, without the need to migrate all data to the cloud.

## Use cases
- Moving backups to the cloud (replacing magnetic tapes)
- Providing local access to cloud data for on-premises applications
- Storing on-premises application data in the cloud for archiving purposes
- Disaster recovery for on-premises data
- Consolidating file storage in a single cloud location

## Key points
- **Gateway types:**
    - **File Gateway:** Stores files as S3 objects and provides access via NFS and SMB
    - **Volume Gateway:** Stores block volumes in the cloud, with options for stored volumes (all data on-premises) and cached volumes (recently accessed data on-premises)
    - **Tape Gateway:** Replaces physical tape libraries, storing data in virtual tapes in S3 Glacier
- **Hybrid connectivity:** Connects your on-premises environment to AWS storage
- **Local cache:** Optimizes access to frequently accessed data by caching it locally
- **Encryption:** Data is encrypted in transit and at rest
- **Integration:** Integrates with Amazon S3, S3 Glacier, EBS, and AWS Backup

## Comparison
- **AWS Storage Gateway:** Allows you to transparently extend your on-premises storage to the cloud, leveraging the scalability, durability, and cost-effectiveness of AWS storage. Reduces the need to purchase and manage on-premises storage hardware.
- **Traditional on-premises storage:** Requires hardware investment, manual management, and can be expensive to scale and maintain. Does not offer the same flexibility and cost-effectiveness as cloud storage. 