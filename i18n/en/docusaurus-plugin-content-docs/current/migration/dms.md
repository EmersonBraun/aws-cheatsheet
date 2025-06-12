---
sidebar_position: 1
---

# AWS Database Migration Service (DMS)

## What is it
A cloud service that makes it easy to migrate relational databases, data warehouses, NoSQL databases, and other types of data to AWS quickly and securely.

## What it's for
Migrate data between different types of databases (heterogeneous) or between the same type of database (homogeneous), with minimal or zero downtime.

## Use cases
- Migrating on-premises databases to AWS (e.g., from Oracle to Amazon RDS PostgreSQL)
- Consolidating multiple databases into a single database in AWS
- Continuous data replication for disaster recovery or analysis purposes
- Migrating data warehouses to Amazon Redshift
- Migrating NoSQL databases to Amazon DynamoDB or DocumentDB

## Key points
- **Heterogeneous and homogeneous migration:** Supports migration between different database platforms
- **Minimal downtime:** Enables near-zero downtime migrations using continuous replication
- **Fully managed:** AWS handles the provisioning, patching, and monitoring of the migration infrastructure
- **Multiple source and target support:** Connects to a wide variety of databases and AWS services
- **Continuous replication:** Keeps data synchronized between source and target

## Comparison
- **AWS DMS:** Simplifies and accelerates the database migration process, automating many complex tasks and minimizing downtime. Ideal for large-scale or complex migrations.
- **Manual migration:** Can be time-consuming, error-prone, and requires careful planning to minimize downtime. Generally suitable only for small and simple databases. 