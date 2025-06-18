---
sidebar_position: 10
---

# Amazon Macie

## What is it
A data security service that uses machine learning and pattern matching to discover, classify, and protect sensitive data in Amazon S3.

## What is it for
Identify and alert about the presence of sensitive data (e.g., personally identifiable information - PII, credentials) in your S3 buckets, as well as monitor access to this data to detect security risks.

## Use cases
- Discovery of sensitive data in S3 buckets (e.g., credit card numbers, SSNs, passwords).
- Security risk assessment for data stored in S3.
- Monitoring access to sensitive data to detect unusual activities.
- Generation of alerts about inadequate security configurations in S3 buckets.
- Assistance with data protection regulation compliance (e.g., GDPR, LGPD).

## Key points
- **Sensitive data discovery:** Uses machine learning and pattern matching techniques to identify sensitive data.
- **Visibility:** Provides a centralized dashboard to view the security posture of your data in S3.
- **Alerts:** Generates detailed alerts about sensitive data findings and suspicious activities.
- **Fully managed:** No infrastructure to provision or manage.
- **Integration:** Integrates with AWS Security Hub and Amazon EventBridge for response automation.

## Comparison
- **Amazon Macie:** Specialized in discovering and protecting sensitive data in Amazon S3, using machine learning to identify complex data patterns.
- **AWS Config:** Monitors AWS resource configurations for compliance but doesn't delve into the content of stored data.
- **Traditional DLP (Data Loss Prevention) tools:** Can be complex to deploy and manage in cloud environments, and may not have the same native integration with S3 that Macie offers.



