---
sidebar_position: 5
---

# AWS PrivateLink

## What is it
A technology that enables private access to AWS services using private endpoints, without exposing traffic to the public internet.

## What it's for
Establish private connectivity between VPCs, AWS services, and on-premises applications, without the need to use the public internet, NAT gateways, firewalls, or proxy gateways.

## Use cases
- Private access to AWS services (e.g., S3, DynamoDB, API Gateway) from a VPC
- Secure and private sharing of services between VPCs
- Connecting on-premises applications to AWS services without internet exposure
- Implementing zero-trust network architectures
- Simplifying network architecture and reducing attack surface

## Key points
- **Private endpoints:** Network interfaces in your VPC that enable private access to AWS services
- **Enhanced security:** Traffic never leaves the AWS network
- **Network simplification:** Eliminates the need for NAT gateways, firewalls, or proxy gateways
- **Scalability:** Supports thousands of private endpoints per VPC
- **Integration:** Works with most AWS services
- **Private DNS:** Support for private DNS resolution for AWS services

## Comparison
- **AWS PrivateLink:** Offers private and secure connectivity between VPCs and AWS services, without public internet exposure. Ideal for scenarios requiring high security and privacy.
- **Public access via internet:** Exposes traffic to the public internet, requiring additional security measures like NAT gateways, firewalls, and proxy gateways. Can be more complex to manage and less secure. 