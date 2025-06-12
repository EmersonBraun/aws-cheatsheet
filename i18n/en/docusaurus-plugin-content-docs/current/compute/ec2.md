---
sidebar_position: 1
---

# AWS EC2 (Elastic Compute Cloud)

## What is it
A web service that provides secure, resizable compute capacity in the cloud in the form of virtual instances (virtual servers).

## What it's for
Running applications, hosting websites, processing data, and performing various cloud computing tasks, with complete control over the server environment.

## Use cases
- Web application and website hosting
- Database server operation
- Big data processing and analysis
- Development and testing environments
- Enterprise application execution

## Key points
- **Instances:** Virtual servers that can be configured with different types of CPU, memory, storage, and networking
- **Instance types:** Wide selection of instance types optimized for different use cases (general purpose, compute optimized, memory optimized, etc.)
- **Pricing models:** On-demand, Reserved Instances (RIs), Spot instances, and Savings Plans for cost optimization
- **Scalability:** Can scale vertically (increase instance size) or horizontally (add more instances) with Auto Scaling
- **Security:** Integration with AWS IAM, Security Groups, and Network ACLs for access control and network security

## Comparison
- **AWS EC2 vs. AWS Lambda:** EC2 provides complete control over the server environment, allowing installation of any software and execution of long-running workloads. You are responsible for managing the operating system and software. Lambda is a serverless computing service that runs your code in response to events, without the need to provision or manage servers. Ideal for short-lived, event-driven functions where you only pay for the compute time consumed. 