---
sidebar_position: 1
---

# Amazon S3 Glacier Deep Archive

## What is it?
Amazon S3's lowest-cost storage class, designed for long-term data retention with very infrequent access.

## What is it for?
Store data that requires long-term retention (7-10 years or more) with very infrequent access, meeting regulatory and compliance requirements.

## Use Cases
- Historical data archiving
- Regulatory compliance
- Medical records retention
- Digital media storage
- Long-term backup
- Scientific data preservation

## Key Points
- **Minimum Cost:** The most economical storage option in S3
- **Durability:** 99.999999999% (11 nines)
- **Retrieval Time:** 12-48 hours
- **Minimum Commitment:** 180 days
- **Encryption:** Automatic at rest
- **Integration:** Compatible with S3 Lifecycle

## Comparison with Other Storage Classes
- **S3 Glacier Deep Archive:** Optimized for rarely accessed data, with lowest cost but longer retrieval time.
- **Other S3 Classes:** Offer faster access but at higher cost, more suitable for more frequently accessed data. 