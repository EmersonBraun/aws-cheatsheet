---
sidebar_position: 4
---

# AWS Direct Connect

## What is it
A cloud service that creates a dedicated network connection between your premises (on-premises) and AWS.

## What it's for
Establish a private, consistent, and low-latency network connection between your datacenter, office, or colocation environment and AWS, bypassing the public internet.

## Use cases
- Transferring large volumes of data securely and quickly to AWS
- Creating hybrid applications that access both on-premises and AWS resources
- Reducing data transfer costs compared to the public internet
- Meeting compliance and security requirements that prohibit using the public internet
- Improving performance of applications requiring low latency and high bandwidth

## Key points
- **Dedicated connection:** A private network connection between your network and AWS
- **Low latency and high bandwidth:** Provides consistent and predictable network performance
- **Security:** Network traffic doesn't traverse the public internet, enhancing security
- **Cost reduction:** Can be more economical for large data volumes than using the public internet
- **Virtual interfaces:** Allows creating virtual interfaces to access public AWS services (e.g., S3) or your VPC
- **Direct Connect locations:** Connect to AWS at one of many Direct Connect locations worldwide

## Comparison
- **AWS Direct Connect:** Offers a private and dedicated network connection with consistent and predictable performance, ideal for production workloads requiring high bandwidth, low latency, and security. It's a physical connection.
- **VPN over internet:** Uses the public internet to establish a secure connection, which can result in variable latency and inconsistent bandwidth. More suitable for scenarios where cost is a greater concern and performance requirements are less stringent. 