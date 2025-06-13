---
sidebar_position: 2
---

# Amazon Inspector

## What it is
A vulnerability management service that automatically discovers workloads and continuously scans them for software vulnerabilities and unintended network exposures.

## What it's for
Identify security vulnerabilities in your EC2 instances, container images, and Lambda functions, as well as network configurations that may expose your resources to risk.

## Use cases
- Detecting vulnerabilities in operating systems and applications on EC2 instances.
- Security analysis of container images stored in Amazon ECR.
- Scanning AWS Lambda functions for vulnerabilities.
- Identifying open network ports and inadequate security configurations.
- Assisting with compliance to security standards (e.g., CIS Benchmarks).

## Key points
- **Continuous scanning:** Continuously monitors your resources for new vulnerabilities.
- **Automatic discovery:** Automatically discovers workloads eligible for scanning.
- **Vulnerability analysis:** Identifies known vulnerabilities (CVEs) in software and configurations.
- **Network analysis:** Assesses network accessibility of your EC2 instances.
- **Detailed reports:** Provides detailed reports on found vulnerabilities and recommendations for remediation.
- **Integration:** Integrates with AWS Security Hub, Amazon EventBridge, and AWS Systems Manager.

## Comparison
- **Amazon Inspector:** Provides a fully managed, automated vulnerability management service with continuous scanning and native AWS integration. Reduces the complexity and manual effort of traditional scans.
- **Traditional vulnerability scanning:** Usually requires installation and management of scanning software, manual scheduling, and complex report analysis. May lack the same level of integration and automation as Inspector offers in AWS. 