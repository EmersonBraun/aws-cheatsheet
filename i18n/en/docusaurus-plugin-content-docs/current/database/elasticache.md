---
sidebar_position: 4
---

# AWS ElastiCache

## What is it
A fully managed in-memory data store and cache service that supports Redis and Memcached, providing sub-millisecond latency to power fast, real-time applications.

## What it's for
Improving application performance by retrieving data from fast, managed, in-memory caches instead of slower disk-based databases.

## Use cases
- Web session stores
- Gaming leaderboards
- Real-time analytics
- Caching database queries
- Message broker
- Rate limiting

## Key points
- **In-memory performance:** Sub-millisecond latency
- **Managed service:** No server management required
- **High availability:** Multi-AZ deployment with automatic failover
- **Scalability:** Automatic scaling of nodes
- **Security:** Encryption at rest and in transit

## Comparison
- **AWS ElastiCache vs. Self-managed Redis/Memcached:** ElastiCache is a fully managed service that handles the operational aspects of running Redis or Memcached. Self-managed Redis/Memcached gives you more control but requires you to handle all operational tasks. ElastiCache is ideal for applications that need high-performance caching without the operational overhead, while self-managed solutions are better for organizations that need complete control over their caching infrastructure. 