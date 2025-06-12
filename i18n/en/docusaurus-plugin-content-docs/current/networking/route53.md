---
sidebar_position: 3
---

# Amazon Route 53

## What is it
A highly available and scalable Domain Name System (DNS) web service.

## What it's for
Connect user requests to AWS applications and services or on-premises resources by translating human-readable domain names (e.g., www.example.com) into numeric IP addresses.

## Use cases
- Domain name registration
- Traffic routing to AWS resources (EC2, S3, ELB, CloudFront)
- Traffic routing to on-premises resources
- Application health checking and automatic failover
- Latency-based, geolocation-based, and weighted routing

## Key points
- **Managed DNS:** AWS handles the DNS infrastructure
- **High availability:** Designed to be highly available and reliable
- **Routing types:** Supports simple, weighted, latency-based, geolocation-based, failover, and multi-value answer routing
- **Health checks:** Monitors the health of your resources and redirects traffic to healthy endpoints
- **Domain registration:** Allows registering and managing domain names directly in Route 53
- **Integration:** Integrates with other AWS services and can be used to route traffic to any internet-connected resource

## Comparison
- **Amazon Route 53:** Offers a managed, highly available, and scalable DNS service with advanced routing and health checking features. Reduces the complexity of managing DNS servers and ensures high availability.
- **Traditional DNS (self-managed):** Requires users to configure and maintain their own DNS servers, which can be complex, error-prone, and doesn't offer the same scalability and high availability features as Route 53. 