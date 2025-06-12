---
sidebar_position: 1
---

# Amazon Athena

## What is it
Serverless interactive query service that allows you to analyze data directly in Amazon S3 using standard SQL.

## What it's for
Ideal for ad-hoc data analysis and data lake exploration without the need to manage infrastructure.

## Use cases
- Log analysis (e.g., web server logs in S3)
- Ad-hoc data exploration (e.g., analyzing new datasets in S3)
- Data lake querying (e.g., querying customer transaction data in S3)
- Business intelligence reporting (integrated with BI tools like Amazon QuickSight)

## Key points
- **Serverless:** No infrastructure to manage
- **Pay-per-query:** You only pay for the data scanned by your queries
- **Standard SQL:** Uses standard ANSI SQL, making it easy to use for those familiar with SQL
- **S3 Integration:** Queries data directly in Amazon S3, supporting various formats (CSV, JSON, Parquet)
- **AWS Glue Integration:** Uses Glue Data Catalog for metadata

## Comparison with Amazon Redshift
- **Athena:** Focused on ad-hoc analysis of data in S3, serverless, pay-per-query. Better for intermittent or variable workloads.
- **Redshift:** Fully managed data warehouse, ideal for complex and large-scale analysis and reporting, with structured data requiring frequent queries and transformations. Payment based on cluster size and usage. High performance for complex queries.