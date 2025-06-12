---
sidebar_position: 6
---

# Amazon S3 Glacier

## What is it
A secure, durable, and low-cost storage service for data archiving and long-term backup.

## What it's for
Store data that is infrequently accessed (once or twice a year) and can tolerate retrieval times of minutes to hours, optimizing costs for long-term archiving.

## Use cases
- Regulatory and compliance data archiving
- Long-term backup of critical data
- Storage of media files (videos, images) that are not frequently accessed
- Data preservation for audit or research purposes
- Replacement of magnetic tapes for data archiving

## Key points
- **Low-cost storage:** One of AWS's cheapest storage options for archiving
- **Durability:** Designed for 99.999999999% durability
- **Storage classes:**
    - **S3 Glacier Instant Retrieval:** For archive data that needs millisecond retrieval
    - **S3 Glacier Flexible Retrieval (formerly S3 Glacier):** For archive data that can be retrieved in minutes to hours
    - **S3 Glacier Deep Archive:** For archive data that can be retrieved in hours and is stored for 7 to 10 years or more, at an even lower cost
- **Vaults:** Data is stored in vaults, which are containers for archives
- **Vault Lock:** Allows applying immutable compliance policies to a vault
- **S3 Lifecycle integration:** Allows automatically moving objects from S3 to Glacier based on lifecycle policies

## Comparison
- **Amazon S3 Glacier:** Ideal for long-term archiving and backup of data that is infrequently accessed and can tolerate longer retrieval times. Offers the lowest storage cost.
- **Amazon S3 Standard:** Ideal for frequently accessed data requiring low latency and high throughput. More expensive than Glacier but offers instant access to data. 