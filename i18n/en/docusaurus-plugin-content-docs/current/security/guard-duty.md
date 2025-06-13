---
sidebar_position: 2
---

# AWS GuardDuty

## What it is
A threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts, workloads, and data.

## What it's for
Identify potential threats such as unauthorized access, use of compromised credentials, denial-of-service (DDoS) attacks, and other suspicious activities.

## Use cases
- Detecting unusual activities in AWS accounts (e.g., API calls from unusual regions).
- Identifying compromised EC2 instances (e.g., crypto mining, brute force attacks).
- Monitoring access to S3 buckets (e.g., access from malicious IPs).
- Real-time threat detection for generative AI workloads.
- Accelerating security investigations and automating remediation.

## Key points
- **Continuous monitoring:** Analyzes AWS CloudTrail event logs, VPC flow logs, and DNS logs.
- **Threat intelligence:** Uses threat intelligence feeds and machine learning to identify suspicious activities.
- **Agentless:** Does not require agent installation on your instances.
- **Fully managed:** AWS manages the infrastructure and threat intelligence updates.
- **Integration:** Integrates with AWS Security Hub, Amazon EventBridge, and AWS Lambda for response automation.

## Comparison
- **AWS GuardDuty:** Focused on real-time threat detection and identifying malicious activities in your AWS account using threat intelligence and machine learning.
- **AWS WAF (Web Application Firewall):** Protects web applications against common web attacks such as SQL injection and cross-site scripting.
- **AWS Security Hub:** Aggregates, organizes, and prioritizes security alerts from various AWS services and partners, providing a centralized view of your security posture. 