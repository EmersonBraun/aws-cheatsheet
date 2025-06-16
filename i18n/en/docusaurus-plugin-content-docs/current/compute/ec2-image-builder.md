---
sidebar_position: 2
---

# AWS EC2 Image Builder

## What is it
A fully managed service that simplifies the creation, testing, and deployment of secure and customized Amazon Machine Images (AMIs) and container images.

## What it's for
Automating the process of building server and container images, ensuring they are up-to-date, secure, and compliant with your organization's standards.

## Use cases
- Creating custom AMIs with pre-installed software and security configurations
- Maintaining images updated with the latest security patches
- Automated testing of images to ensure functionality and compliance
- Distributing images to different regions or AWS accounts
- Building container images for use with Amazon ECS, EKS, or Fargate

## Key points
- **Fully managed:** AWS handles the underlying infrastructure for image building
- **Automation:** Automates the lifecycle of creating, testing, and distributing images
- **Security:** Helps ensure images comply with security standards
- **Customization:** Allows customizing images with your own scripts and components
- **Integration:** Integrates with AWS Organizations, AWS Systems Manager, Amazon S3, and other services
- **Testing:** Includes AWS-provided tests and allows adding your own tests for validation

## Comparison with manual AMI building
- **AWS EC2 Image Builder:** Automates and standardizes the image building process, reducing manual effort, errors, and ensuring consistency and security of images at scale. Ideal for environments with many images or frequent update requirements.
- **Manual AMI building:** Time-consuming, error-prone, and difficult to scale. Requires administrators to manually manage the process of creating, updating, and testing images, which can lead to inconsistencies and vulnerabilities. 