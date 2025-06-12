---
sidebar_position: 1
---

# Amazon VPC (Virtual Private Cloud)

## What is it
A service that enables you to provision a logically isolated section of the Amazon Web Services (AWS) cloud where you can launch AWS resources in a virtual network that you define.

## What it's for
Create your own private virtual network in AWS, with complete control over your networking environment, including IP address range selection, subnet creation, route table configuration, and network gateway setup.

## Use cases
- Hosting web and enterprise applications with specific networking requirements
- Creating isolated development, testing, and production environments
- Securely connecting your on-premises network to AWS
- Implementing complex network architectures with multiple security layers
- Controlling network-level access to AWS resources

## Key points
- **Isolated virtual network:** Allows you to define your own network in the cloud
- **Subnets:** Divide your VPC into public and private subnets
- **Route tables:** Control network traffic routing
- **Gateways:** Connect your VPC to the internet (Internet Gateway), on-premises networks (Virtual Private Gateway, Direct Connect), or other VPCs (VPC Peering, Transit Gateway)
- **Security Groups and Network ACLs:** Control inbound and outbound traffic at instance and subnet level
- **Elastic IPs:** Static public IP addresses for your instances

## Comparison
- **Amazon VPC:** Offers the flexibility and scalability of a software-defined network in the cloud, eliminating the need to purchase and manage physical networking hardware. Allows creating complex and secure networks programmatically.
- **Traditional on-premises network:** Requires investment in physical hardware, manual management, and can be less flexible for rapid scaling or adapting to new business needs. 