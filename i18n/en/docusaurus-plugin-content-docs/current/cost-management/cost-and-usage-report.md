---
sidebar_position: 3
---

# AWS Cost and Usage Report (CUR)

## What is it
A comprehensive and detailed report about your AWS costs and usage, delivered to an S3 bucket.

## What it's for
Providing granular data for in-depth cost analysis, auditing, optimization, and integration with business intelligence (BI) tools or financial management systems.

## Use cases
- Detailed analysis of costs and usage by hour, day, service, resource, tags, etc.
- Integration with third-party BI tools to create custom dashboards and reports.
- Automation of billing processes and cost allocation.
- Usage auditing and compliance.
- Identification of cost optimization opportunities at a granular level.

## Key points
- **Granular data:** Provides the most detailed set of AWS cost and usage data.
- **S3 delivery:** Reports are delivered to an S3 bucket, allowing easy access and processing.
- **Integration:** Can be integrated with Athena, Redshift, QuickSight, and other tools for analysis.
- **Metadata:** Includes additional metadata about services, pricing, and reserved instances.
- **Customizable:** Allows choosing granularity (hour or day) and including resource data.

## Comparison
- **AWS Cost and Usage Report (CUR) vs. AWS Cost Explorer:** The CUR provides a comprehensive and detailed dataset about your AWS costs and usage, delivered to an S3 bucket. It's ideal for deeper analysis, integration with other BI tools, and automation of billing processes, but requires more effort to set up and analyze. Cost Explorer is an interactive tool for cost visualization and analysis, ideal for quickly exploring and understanding spending in a visual way. Focused on historical analysis and forecasting.