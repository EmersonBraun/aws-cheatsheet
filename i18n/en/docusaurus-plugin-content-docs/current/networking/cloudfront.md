---
sidebar_position: 2
---

# Amazon CloudFront

## What is it
A fast and secure Content Delivery Network (CDN) that accelerates the distribution of static and dynamic web content to end users.

## What it's for
Reduce latency and improve web application performance by delivering content (images, videos, HTML, CSS, JS files) from edge locations closer to users.

## Use cases
- Accelerating delivery of static and dynamic websites
- Live and on-demand video streaming
- Distribution of software updates and patches
- Low-latency API delivery
- Protection against DDoS attacks and other security threats

## Key points
- **Global edge network:** Content cached on servers close to users
- **Low latency:** Reduces page load times and video buffering
- **Security:** Integration with AWS WAF (Web Application Firewall) and AWS Shield for attack protection
- **Caching:** Stores cached copies of content for faster delivery
- **Cache invalidation:** Allows invalidating cache to ensure users receive the latest content version
- **Integration:** Integrates with Amazon S3, Elastic Load Balancing, Amazon EC2, and other AWS services

## Comparison
- **Amazon CloudFront:** Significantly improves content delivery performance and security, especially for geographically dispersed users. Reduces origin server load and data transfer costs.
- **Direct content delivery:** Content is delivered directly from the origin server, which can result in high latency for distant users and overload the origin server during high traffic. 