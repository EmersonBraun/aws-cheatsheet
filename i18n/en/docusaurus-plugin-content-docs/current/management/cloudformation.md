---
sidebar_position: 2
---

# AWS CloudFormation

## What is it
A service that helps you model and configure your AWS and third-party resources, treating infrastructure as code (IaC).

## What it's for
Automate the provisioning and management of AWS resources, allowing you to create, update, and delete a set of related resources as a single unit (stack).

## Use cases
- Provisioning complete environments (development, testing, production)
- Automation of infrastructure creation and updates
- Consistent and repeatable resource management
- Infrastructure version control
- Disaster recovery (quick environment recreation)

## Key points
- **Infrastructure as Code (IaC):** Define your infrastructure in text files (JSON or YAML)
- **Stacks:** Manage a set of related resources as a single unit
- **Templates:** Use templates to describe the resources you want to provision
- **Automatic rollback:** If stack creation or update fails, CloudFormation automatically reverts to the previous state
- **Version control:** Manage versions of your infrastructure templates
- **Integration:** Integrates with almost all AWS services

## Comparison
- **AWS CloudFormation:** Enables automation of infrastructure provisioning, ensuring consistency, repeatability, and reducing manual errors. Ideal for complex environments and implementing DevOps practices.
- **Manual provisioning:** Time-consuming, error-prone, and difficult to scale or replicate. Does not offer infrastructure version control. 