---
sidebar_position: 4
---

# Amazon FSx for Lustre

## What is it
A fully managed file storage service that makes it easy to launch, run, and scale high-performance Lustre file systems.

## What it's for
Accelerate compute-intensive workloads such as machine learning, high-performance computing (HPC), video processing, and financial modeling that require high-performance file storage.

## Use cases
- Machine learning and deep learning workloads
- Scientific simulations and modeling
- Large-scale video and audio data processing
- Big data analytics and high-performance computing
- Software development and testing requiring fast access to large datasets

## Key points
- **Lustre file system:** Based on the popular Lustre file system, optimized for performance
- **High performance:** Offers very high throughput and IOPS, with millisecond latency
- **S3 integration:** Can be linked to an S3 bucket, allowing you to process S3 data with Lustre performance
- **Fully managed:** AWS handles provisioning, patching, and scaling of the file system
- **Storage types:** Supports persistent storage (for long-term data) and scratch storage (for temporary data)
- **Cost-effective:** Offers a high-performance storage solution at an effective cost

## Comparison
- **Amazon FSx for Lustre:** Designed for compute-intensive workloads requiring the highest performance and throughput, such as HPC and machine learning. Optimized for accessing large datasets with high parallelization.
- **Amazon EFS:** A general-purpose, scalable, and elastic file system, suitable for a wide range of workloads requiring shared access to a file system. Offers good performance but is not optimized for the same extreme workloads as FSx for Lustre. 