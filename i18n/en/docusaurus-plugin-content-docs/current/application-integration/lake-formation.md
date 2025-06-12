---
sidebar_position: 1
---

# AWS Lake Formation

## What is it
A service that makes it easy to set up, secure, and manage data lakes on AWS.

## What it's for
Simplify governance, security, and data sharing in data lakes for analytics and machine learning.

## Use cases
- Building secure and scalable data lakes
- Centralized management of data access permissions in data lakes
- Data cleaning and transformation for data lakes
- Secure data sharing between different AWS accounts or organizations

## Key points
- **Centralized governance:** Manages data access permissions in a single location
- **Granular security:** Allows defining permissions at table, column, and row level
- **AWS Glue integration:** Uses AWS Glue Data Catalog for metadata
- **Simplifies data lake building:** Automates many of the manual tasks involved in creating a data lake
- **Audit:** Provides audit logs to track data access

## Comparison
- **AWS Lake Formation vs. S3 (direct):** While S3 is the fundamental storage for data lakes, Lake Formation adds a layer of governance and security that simplifies permission management and data access at scale, something that would be complex to implement manually with just S3. 