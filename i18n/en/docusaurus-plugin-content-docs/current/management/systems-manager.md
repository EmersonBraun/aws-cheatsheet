---
sidebar_position: 8
---

# AWS Systems Manager

## What is it
A suite of features that helps visualize, manage, and operate nodes (EC2 instances, on-premises servers, VMs) at scale across AWS, on-premises, and multicloud environments.

## What it's for
Automate operational tasks, ensure compliance and security, and simplify infrastructure management.

## Use cases
- Automation of operational tasks (e.g., patching, script execution, software updates)
- Server and software inventory management
- Secure remote access to instances without the need for SSH or RDP (Session Manager)
- Patch management and security compliance
- Storage and management of configuration parameters (Parameter Store)
- Troubleshooting and diagnosing instances

## Key points
- **Automation:** Automates common server management tasks
- **Inventory management:** Collects data about your servers and installed software
- **Session Manager:** Provides secure and auditable access to instances without opening inbound ports
- **Patch Manager:** Automates the process of applying security patches
- **Parameter Store:** Stores and manages configuration data and secrets
- **Run Command:** Executes commands on multiple instances simultaneously
- **Fully managed:** AWS handles the Systems Manager infrastructure

## Comparison
- **AWS Systems Manager:** Offers a managed and integrated solution for automation and operations management in AWS and hybrid environments. Reduces the complexity of configuring and maintaining configuration management tools.
- **Configuration management tools (self-managed):** Offer greater flexibility and customization, but require the user to manage the tool's infrastructure and develop playbooks/recipes. Suitable for complex or multi-cloud environments that require a high degree of customization. 