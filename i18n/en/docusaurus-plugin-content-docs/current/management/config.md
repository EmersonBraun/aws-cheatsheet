---
sidebar_position: 4
---

# AWS Config

## What is it
A service that enables you to assess, audit, and evaluate the configurations and relationships of your AWS resources.

## What it's for
Continuously monitor AWS resources for compliance with security and compliance policies, and record the configuration history of resources.

## Use cases
- Security and compliance auditing (e.g., ensuring all S3 buckets are not public)
- Monitoring configuration changes in AWS resources
- Operational troubleshooting (e.g., identifying when a configuration was changed and caused an issue)
- Continuous assessment of compliance with regulatory standards
- Analysis of relationships between AWS resources

## Key points
- **Configuration history:** Records the configuration history of your AWS resources
- **Compliance rules:** Allows defining rules to evaluate resource compliance with policies
- **Change detection:** Notifies about configuration changes in real-time
- **Relationship analysis:** Allows visualizing how AWS resources are related to each other
- **Fully managed:** AWS handles the configuration monitoring infrastructure
- **Integration:** Integrates with AWS CloudTrail, Amazon SNS, and AWS Lambda

## Comparison
- **AWS Config:** Focused on recording resource configuration history and evaluating compliance with policies. Answers the question "how are my resources configured and how has that configuration changed over time?"
- **AWS CloudTrail:** Focused on recording API and user activity for auditing, governance, and compliance. Answers the question "who did what?" 